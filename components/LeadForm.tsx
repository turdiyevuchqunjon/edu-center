"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { getUtm } from "@/lib/utm";
import { trackLeadEvent, getFbCookies } from "@/lib/fbEvents";
import type { CourseSlug } from "@/lib/courses";

type Props = {
  courseSlug: CourseSlug;
  courseName: string;
  levels?: string[];
  title?: string;
  subtitle?: string;
  disclaimer?: string;
};

export default function LeadForm({
  courseSlug,
  courseName,
  levels,
  title = "Bepul sinov darsiga yozilish",
  subtitle = "Formani to'ldiring, operatorlarimiz 15 daqiqa ichida siz bilan bog'lanadi.",
  disclaimer = "Yuborish orqali siz shartlarimizga rozilik bildirasiz.",
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const level = formData.get("level") ? String(formData.get("level")) : undefined;

    if (!name || !phone) {
      setError("Iltimos, ism va telefon raqamni to'ldiring.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 9) {
      setError("Telefon raqamni to'liq kiriting.");
      return;
    }

    setLoading(true);

    const eventId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const utm = getUtm();
    const { fbp, fbc } = getFbCookies();

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          level,
          course: courseName,
          courseSlug,
          utm,
          eventId,
          fbp,
          fbc,
          pageUrl: window.location.href,
        }),
      });

      if (!res.ok) throw new Error("request_failed");

      trackLeadEvent(eventId, courseName);
      router.push(`/rahmat?course=${encodeURIComponent(courseSlug)}`);
    } catch {
      setError("Yuborishda xatolik yuz berdi. Qaytadan urinib ko'ring yoki qo'ng'iroq qiling.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl shadow-slate-200/50"
    >
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor={`${courseSlug}-name`}>
          Ism familiya
        </label>
        <input
          id={`${courseSlug}-name`}
          name="name"
          type="text"
          required
          placeholder="Ismingizni kiriting"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor={`${courseSlug}-phone`}>
          Telefon raqam
        </label>
        <input
          id={`${courseSlug}-phone`}
          name="phone"
          type="tel"
          required
          placeholder="+998 __ ___ __ __"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      {levels && levels.length > 0 && (
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor={`${courseSlug}-level`}>
            Qiziqqan bosqichingiz
          </label>
          <select
            id={`${courseSlug}-level`}
            name="level"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
          >
            {levels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      )}

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-brand-600/25 transition hover:shadow-lg hover:-translate-y-0.5"
      >
        {loading ? "Yuborilmoqda..." : "Yuborish"}
      </button>

      <p className="text-xs text-slate-400 text-center">{disclaimer}</p>
    </form>
  );
}
