"use client";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmData = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = "educenter_utm_data";

/** URL dagi utm_* parametrlarni o'qiydi va localStorage'ga saqlaydi (bo'lsa). */
export function captureUtm(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found: UtmData = {};
  let has = false;

  UTM_KEYS.forEach((key) => {
    const val = params.get(key);
    if (val) {
      found[key] = val;
      has = true;
    }
  });

  if (has) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
      localStorage.setItem(`${STORAGE_KEY}_at`, new Date().toISOString());
    } catch {
      // localStorage mavjud bo'lmasa jim o'tkazib yuboriladi
    }
  }
}

/** Oldin saqlangan UTM ma'lumotlarini qaytaradi. */
export function getUtm(): UtmData {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmData) : {};
  } catch {
    return {};
  }
}
