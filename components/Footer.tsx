import Link from "next/link";

const SUBJECTS = [
  { href: "/ingliz-tili", label: "Ingliz tili" },
  { href: "/biologiya-kimyo", label: "Biologiya-Kimyo" },
  { href: "/matematika", label: "Matematika" },
  { href: "/tarix-huquq", label: "Tarix-Huquq" },
  { href: "/ona-tili", label: "Ona tili" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 text-white font-extrabold text-lg mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/001.png" alt="EDUCenter" className="h-10 w-10 object-contain" />
              EDUCenter
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              Zamonaviy o&apos;quv markazi — tajribali ustozlar, natijaga yo&apos;naltirilgan
              dastur va g&apos;amxo&apos;r yondashuv bilan farzandingiz kelajagi uchun.
            </p>
          </div>

          <div>
            <h5 className="text-white text-sm font-semibold mb-4">Yo&apos;nalishlar</h5>
            <ul className="space-y-2.5 text-sm">
              {SUBJECTS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white text-sm font-semibold mb-4">Markaz</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/#natijalar" className="hover:text-white">
                  Natijalar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-sm font-semibold mb-4">Aloqa</h5>
            <ul className="space-y-2.5 text-sm">
              <li className="text-slate-400">
                Samarqand viloyati, Toyloq tumani, Mo&apos;ljal Agro Bank yonida
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-wrap justify-between gap-3 text-xs text-slate-500">
          <span>&copy; 2026 EDUCenter. Barcha huquqlar himoyalangan.</span>
          <span>Samarqand, O&apos;zbekiston</span>
        </div>
      </div>
    </footer>
  );
}
