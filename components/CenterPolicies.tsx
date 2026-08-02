const POLICIES = [
  {
    icon: "🎁",
    title: "Bepul qo'shimcha darslar",
    text: "Farzandingiz darsda mavzuni tushunmasa yoki o'zlashtira olmasa, o'sha mavzu bo'yicha qo'shimcha dars qo'yiladi — buning uchun qo'shimcha haq olinmaydi.",
  },
  {
    icon: "🏆",
    title: "Musobaqalar va taqdirlashlar",
    text: "Yuqori natijaga erishgan o'quvchilarning ota-onasiga va maktabiga tashakkurnoma yuboriladi, o'quvchilar esa alohida sovg'alarga sazovor bo'lishadi.",
  },
  {
    icon: "✈️",
    title: "Qo'shimcha sayohatlar",
    text: "O'quvchilarimiz uchun davriy ravishda qo'shimcha sayohatlar uyushtiriladi.",
  },
];

/** Markaz miqyosidagi umumiy siyosat — barcha fan sahifalarida bir xilda ko'rsatiladi. */
export default function CenterPolicies() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-extrabold mb-3">O&apos;quvchilarimizga g&apos;amxo&apos;rligimiz</h2>
          <p className="text-slate-500">EDUCenter&apos;da faqat dars emas — natija va rag&apos;bat ham muhim.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {POLICIES.map((p) => (
            <div key={p.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center text-2xl mb-5">
                {p.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
