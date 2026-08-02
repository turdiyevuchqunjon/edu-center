import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import Features from "@/components/Features";
import ImageCarousel from "@/components/ImageCarousel";
import CenterPolicies from "@/components/CenterPolicies";

export const metadata: Metadata = {
  title: "EDUCenter — zamonaviy o'quv markazi",
  description:
    "5 ta yo'nalish: Ingliz tili, Biologiya-Kimyo, Matematika, Tarix-Huquq, Ona tili. Tajribali ustozlar va natijaga yo'naltirilgan dastur.",
};

const SUBJECTS = [
  {
    href: "/ingliz-tili",
    icon: "🇬🇧",
    title: "Ingliz tili",
    desc: "A1 dan IELTS gacha — 7.5+ IELTS ustozlari bilan.",
  },
  {
    href: "/biologiya-kimyo",
    icon: "🧬",
    title: "Biologiya-Kimyo",
    desc: "DTM va OTM ga kirish uchun chuqurlashtirilgan tayyorgarlik.",
  },
  {
    href: "/matematika",
    icon: "📐",
    title: "Matematika",
    desc: "Asosdan milliy sertifikat darajasigacha bosqichma-bosqich.",
  },
  {
    href: "/tarix-huquq",
    icon: "📜",
    title: "Tarix-Huquq",
    desc: "Jahon va O'zbekiston tarixi, huquq asoslaridan tayyorgarlik.",
  },
  {
    href: "/ona-tili",
    icon: "📖",
    title: "Ona tili",
    desc: "Savodxonlik, insho va DTM formatidagi testlarga tayyorgarlik.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="pt-14 pb-20 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full mb-5">
              🎓 5 ta yo&apos;nalish, bitta markaz
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.12] mb-5">
              EDUCenter — farzandingiz kelajagi uchun ishonchli tanlov
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mb-8">
              Ingliz tili, Biologiya-Kimyo, Matematika, Tarix-Huquq va Ona tili
              yo&apos;nalishlarida tajribali ustozlar, kichik guruhlar va natijaga
              yo&apos;naltirilgan dastur bilan ta&apos;lim beramiz.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <b className="block text-2xl font-extrabold">2,400+</b>
                <span className="text-xs text-slate-400">bitiruvchi</span>
              </div>
              <div>
                <b className="block text-2xl font-extrabold">4.9/5</b>
                <span className="text-xs text-slate-400">o&apos;rtacha baho</span>
              </div>
              <div>
                <b className="block text-2xl font-extrabold">5</b>
                <span className="text-xs text-slate-400">yo&apos;nalish</span>
              </div>
            </div>
          </div>

          <LeadForm
            courseSlug="umumiy"
            courseName="EDUCenter (umumiy)"
            title="Bepul konsultatsiyaga yozilish"
            subtitle="Farzandingiz uchun mos yo'nalishni tanlashda yordam beramiz."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-extrabold mb-3">Yo&apos;nalishlarimiz</h2>
            <p className="text-slate-500">Farzandingizga mos fanni tanlang va batafsil ma&apos;lumot oling.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBJECTS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-md hover:-translate-y-0.5 hover:border-brand-200 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center text-2xl mb-5">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{s.desc}</p>
                <span className="text-sm font-semibold text-brand-600 group-hover:underline">
                  Batafsil →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Features
        title="Nega aynan EDUCenter"
        subtitle="Ta'lim sifatini tizimli, qiziqarli va natijaga yo'naltirilgan qilamiz."
        items={[
          {
            icon: "👥",
            title: "Kichik guruhlar",
            text: "Har guruhda cheklangan son o'quvchi, shu bois har biriga alohida e'tibor beriladi.",
          },
          {
            icon: "🎯",
            title: "Natijaga yo'naltirilgan dastur",
            text: "Har bir bosqich aniq maqsad va o'lchanadigan natija bilan tugaydi.",
          },
          {
            icon: "📊",
            title: "Doimiy nazorat",
            text: "O'quvchi progressini kuzatib boramiz va ota-onalarga muntazam hisobot beramiz.",
          },
          {
            icon: "🕘",
            title: "Qulay jadval",
            text: "Ertalab, kunduzi yoki kechqurun — o'zingizga mos vaqtni tanlaysiz.",
          },
          {
            icon: "🏅",
            title: "Sertifikatlangan ustozlar",
            text: "Har bir yo'nalishda tajribali va o'z sohasi bo'yicha sertifikatga ega o'qituvchilar.",
          },
          {
            icon: "💬",
            title: "24/7 qo'llab-quvvatlash",
            text: "Savollaringizga kurator jamoasi tez va aniq javob beradi.",
          },
        ]}
      />

      <ImageCarousel
        id="natijalar"
        images={[
          "b.jpg",
          "c.jpg",
          "c2.jpg",
          "c3.jpg",
          "c4.jpg",
          "c5.jpg",
          "c6.jpg",
          "c+.jpg",
          "c+ 2.jpg",
          "c+3.jpg",
          "c+5.jpg",
          "001.jpg",
        ]}
        title="Natijalar va barcha rasmlar"
        subtitle="Logo va hamkor rasmlar ajratilgan, qolgan barcha natija rasmlari ko'rsatiladi."
      />

      <section id="otziv" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-extrabold mb-3">O'quvchilarimiz fikri</h2>
            <p className="text-slate-500">Ikki videoda o'quvchilarimiz va ular natijalari bilan tanishing.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { file: "c otzif.mp4", title: "O'tgan sinf natijalari" },
              { file: "natija v.mp4", title: "Mashg'ulot natijalari" },
            ].map((video) => (
              <div key={video.file} className="rounded-3xl overflow-hidden border border-slate-200 bg-black">
                <video controls className="w-full h-full">
                  <source src={`/${encodeURI(video.file)}`} type="video/mp4" />
                  Sizning brauzeringiz video tegini qo'llab-quvvatlamaydi.
                </video>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CenterPolicies />

      <Footer />
    </>
  );
}
