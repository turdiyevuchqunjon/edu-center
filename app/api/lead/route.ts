import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

function sha256(input: string) {
  return crypto.createHash("sha256").update(input.trim().toLowerCase()).digest("hex");
}

function normalizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

type LeadPayload = {
  name: string;
  phone: string;
  level?: string;
  course: string;
  courseSlug: string;
  utm?: Record<string, string>;
  eventId: string;
  fbp?: string;
  fbc?: string;
  pageUrl: string;
};

const CHAT_ID_MAP: Record<string, string | undefined> = {
  umumiy: process.env.TELEGRAM_CHAT_ID_UMUMIY,
  "ingliz-tili": process.env.TELEGRAM_CHAT_ID_INGLIZ,
  "biologiya-kimyo": process.env.TELEGRAM_CHAT_ID_BIOLOGIYA_KIMYO,
  matematika: process.env.TELEGRAM_CHAT_ID_MATEMATIKA,
  "tarix-huquq": process.env.TELEGRAM_CHAT_ID_TARIX_HUQUQ,
  "ona-tili": process.env.TELEGRAM_CHAT_ID_ONA_TILI,
};

function formatUtm(utm: Record<string, string> = {}) {
  const entries = Object.entries(utm).filter(([, v]) => v);
  if (entries.length === 0) return "UTM: yo'q (to'g'ridan-to'g'ri kirish)";
  return entries.map(([k, v]) => `• ${k}: ${v}`).join("\n");
}

async function sendTelegramMessage(payload: LeadPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = CHAT_ID_MAP[payload.courseSlug] || process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return { ok: false, skipped: true };

  const text =
    `🆕 <b>Yangi ariza — ${payload.course}</b>\n\n` +
    `👤 Ism: ${payload.name}\n` +
    `📞 Tel: ${payload.phone}\n` +
    (payload.level ? `📊 Bosqich: ${payload.level}\n` : "") +
    `🔗 Sahifa: ${payload.pageUrl}\n\n` +
    `📈 ${formatUtm(payload.utm)}\n\n` +
    `🕒 ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}

async function sendMetaCapi(payload: LeadPayload, req: NextRequest) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !token) return { ok: false, skipped: true };

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const userAgent = req.headers.get("user-agent") || undefined;

  const userData: Record<string, unknown> = {
    ph: [sha256(normalizePhone(payload.phone))],
  };
  if (ip) userData.client_ip_address = ip;
  if (userAgent) userData.client_user_agent = userAgent;
  if (payload.fbp) userData.fbp = payload.fbp;
  if (payload.fbc) userData.fbc = payload.fbc;

  const body: Record<string, unknown> = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: payload.eventId,
        event_source_url: payload.pageUrl,
        action_source: "website",
        user_data: userData,
        custom_data: {
          content_name: payload.course,
          content_category: payload.courseSlug,
        },
      },
    ],
  };

  if (process.env.META_CAPI_TEST_EVENT_CODE) {
    body.test_event_code = process.env.META_CAPI_TEST_EVENT_CODE;
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as LeadPayload;

    if (!payload?.name || !payload?.phone || !payload?.courseSlug || !payload?.eventId) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const [telegram, capi] = await Promise.all([
      sendTelegramMessage(payload),
      sendMetaCapi(payload, req),
    ]);

    return NextResponse.json({ ok: true, telegram: telegram.ok, capi: capi.ok });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
