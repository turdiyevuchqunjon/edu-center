export type DurationRow = {
  level: string;
  duration: string;
  desc?: string;
};

type Props = {
  rows: DurationRow[];
  title?: string;
};

export default function DurationTable({ rows, title = "Bosqichlar va muddat" }: Props) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3">{title}</h2>
          <p className="text-slate-500">Har bir bosqich aniq maqsad va natija bilan tugaydi.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          {rows.map((row, i) => (
            <div
              key={row.level}
              className={`flex items-center justify-between gap-4 px-6 py-5 ${
                i !== rows.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <div>
                <p className="font-bold">{row.level}</p>
                {row.desc && <p className="text-sm text-slate-500 mt-0.5">{row.desc}</p>}
              </div>
              <span className="shrink-0 text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full">
                {row.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
