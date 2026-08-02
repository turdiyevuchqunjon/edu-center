"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Meta Pixel orqali "Lead" hodisasini yuboradi. eventId Conversions API bilan bir xil
 * bo'lishi kerak — shu orqali Meta ikkalasini bitta hodisa sifatida deduplikatsiya qiladi. */
export function trackLeadEvent(eventId: string, courseName: string) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", { content_name: courseName }, { eventID: eventId });
  }
}

/** Meta CAPI moslik sifatini oshirish uchun _fbp / _fbc cookie qiymatlarini o'qiydi. */
export function getFbCookies(): { fbp?: string; fbc?: string } {
  if (typeof document === "undefined") return {};
  const read = (name: string) => {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : undefined;
  };
  return { fbp: read("_fbp"), fbc: read("_fbc") };
}
