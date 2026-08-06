import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-2.5 font-extrabold text-lg text-slate-900 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/001.png" alt="EDUCenter" className="h-10 w-10 object-contain" />
          EDUCenter
        </Link>

        <a
          href="#ariza-formasi"
          className="inline-flex items-center justify-center rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 shadow-sm shadow-brand-600/25 transition hover:shadow-md hover:-translate-y-0.5"
        >
          Ariza qoldirish
        </a>
      </div>
    </header>
  );
}
