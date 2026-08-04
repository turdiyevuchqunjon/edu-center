import FloatingDoodles from "./FloatingDoodles";

export type FeatureItem = {
  icon: string;
  title: string;
  text: string;
};

type Props = {
  title?: string;
  subtitle?: string;
  items: FeatureItem[];
  variant?: "cards" | "list";
};

export default function Features({
  title = "Afzalliklarimiz",
  subtitle,
  items,
  variant = "cards",
}: Props) {
  return (
    <section className="relative overflow-hidden py-20">
      <FloatingDoodles variant="section" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-extrabold mb-3">{title}</h2>
          {subtitle && <p className="text-slate-500">{subtitle}</p>}
        </div>

        {variant === "list" ? (
          <div className="max-w-2xl mx-auto divide-y divide-slate-200">
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-4 py-6">
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center text-2xl mb-5">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
