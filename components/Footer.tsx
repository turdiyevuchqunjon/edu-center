export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-14">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-4">
        <div className="flex items-center gap-2.5 text-white font-extrabold text-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/001.png" alt="EDUCenter" className="h-10 w-10 object-contain" />
          EDUCenter
        </div>
        <p className="text-sm text-slate-400 max-w-sm">
          Samarqand viloyati, Toyloq tumani, Mo&apos;ljal Agro Bank yonida
        </p>
        <div className="w-full border-t border-slate-800 pt-6 mt-2 text-xs text-slate-500">
          &copy; 2026 EDUCenter. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
