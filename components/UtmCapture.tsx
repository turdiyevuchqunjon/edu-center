"use client";

import { useEffect } from "react";
import { captureUtm } from "@/lib/utm";

/** Har bir sahifa yuklanganda URL dagi utm_* parametrlarni saqlab qo'yadi
 * (agar mavjud bo'lsa). Hech narsa render qilmaydi. */
export default function UtmCapture() {
  useEffect(() => {
    captureUtm();
  }, []);

  return null;
}
