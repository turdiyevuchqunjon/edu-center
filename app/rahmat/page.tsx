import type { Metadata } from "next";
import { Suspense } from "react";
import RahmatContent from "./RahmatContent";

export const metadata: Metadata = {
  title: "Rahmat!",
  robots: { index: false, follow: false },
};

export default function RahmatPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-brand-50/60 to-white">
      <Suspense fallback={null}>
        <RahmatContent />
      </Suspense>
    </main>
  );
}
