import Link from "next/link";

const NAV_LINKS = [
  { href: "/ingliz-tili", label: "Ingliz tili" },
  { href: "/biologiya-kimyo", label: "Biologiya-Kimyo" },
  { href: "/matematika", label: "Matematika" },
  { href: "/tarix-huquq", label: "Tarix-Huquq" },
  { href: "/ona-tili", label: "Ona tili" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4 gap-6">
        <Link href="/" className="flex items-center gap-2.5 font-extrabold text-lg shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/001.png" alt="EDUCenter" className="h-10 w-10 object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 overflow-x-auto">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-600 whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="lg:hidden overflow-x-auto border-t border-slate-100">
        <div className="flex gap-5 px-6 py-2.5 text-sm font-medium text-slate-600 w-max">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-600 whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
