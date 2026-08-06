import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import FloatingDoodles from "@/components/FloatingDoodles";

export const metadata: Metadata = {
  title: "EDUCenter — zamonaviy o'quv markazi",
  description:
    "5 ta yo'nalish: Ingliz tili, Biologiya-Kimyo, Matematika, Tarix-Huquq, Ona tili. Tajribali ustozlar va natijaga yo'naltirilgan dastur.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      <section
        id="ariza-formasi"
        className="relative overflow-hidden pt-16 pb-24 bg-gradient-to-b from-brand-50/70 via-white to-white"
      >
        <FloatingDoodles variant="hero" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-100 px-3.5 py-1.5 rounded-full mb-6">
              🎓 EDUCenter — zamonaviy o&apos;quv markazi
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.12] mb-5 text-slate-900">
              Qisqa muddatda ishonchli natija istaganlar uchun
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 mb-3">
              Ingliz tili, Biologiya-Kimyo, Matematika, Tarix-Huquq va Ona tili
              yo&apos;nalishlarida tajribali ustozlar, kichik guruhlar va natijaga
              yo&apos;naltirilgan dastur bilan ta&apos;lim beramiz.
            </p>
            <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0">
              Darslarni o&apos;zlashtirishingizga ko&apos;maklashish uchun bepul
              qo&apos;shimcha darslar o&apos;tiladi.
            </p>
          </div>

          <div className="animate-fade-in-up [animation-delay:150ms]">
            <LeadForm
              courseSlug="umumiy"
              courseName="EDUCenter (umumiy)"
              title="Bepul konsultatsiyaga yozilish"
              subtitle="Farzandingiz uchun mos yo'nalishni tanlashda yordam beramiz."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
