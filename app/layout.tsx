import type { Metadata } from "next";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import UtmCapture from "@/components/UtmCapture";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://educenter.uz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EDUCenter — zamonaviy o'quv markazi",
    template: "%s | EDUCenter",
  },
  description:
    "EDUCenter — Ingliz tili, Biologiya-Kimyo, Matematika, Tarix-Huquq va Ona tili fanlaridan tajribali ustozlar, kichik guruhlar va natijaga yo'naltirilgan dastur bilan bilim beruvchi o'quv markazi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className="font-sans text-slate-900 bg-white antialiased">
        <MetaPixel />
        <UtmCapture />
        {children}
      </body>
    </html>
  );
}
