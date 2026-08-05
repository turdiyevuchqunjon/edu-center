import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectHero from "@/components/SubjectHero";
import Features from "@/components/Features";
import ImageCarousel from "@/components/ImageCarousel";
import CenterPolicies from "@/components/CenterPolicies";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Biologiya-Kimyo kursi — qabul",
  description:
    "DTM va OTM ga kirish uchun Biologiya-Kimyo fanlaridan chuqurlashtirilgan tayyorgarlik kursi.",
};

const LEVELS = ["Asos bosqichi", "Chuqurlashtirilgan bosqich", "DTM/Milliy sertifikat tayyorgarligi"];

export default function BiologiyaKimyoPage() {
  return (
    <>
      <Header />

      <SubjectHero
        eyebrow="🧬 Biologiya-Kimyo kursi — qabul ochiq"
        title={
          <>
            Tibbiyot va tabiiy fanlar OTM&apos;lariga <span className="text-brand-600">ishonchli yo&apos;l</span>
          </>
        }
        description="Biologiya va Kimyo fanlaridan DTM hamda milliy sertifikat formatiga mos, chuqur va tizimli tayyorgarlik dasturi."
        stats={[
          { value: "3+3+2", label: "oylik bosqichlar" },
          { value: "1000+", label: "test topshirig'i" },
          { value: "100%", label: "amaliy mashg'ulot" },
        ]}
        courseSlug="biologiya-kimyo"
        courseName="Biologiya-Kimyo"
        levels={LEVELS}
        showForm={false}
        ctaHref="#ariza-formasi"
        ctaLabel="Bepul konsultatsiyaga yozilish"
      />

      <Features
        title="Afzalliklarimiz"
        items={[
          {
            icon: "🎓",
            title: "Tajribali ustozlar",
            text: "OTM kirish imtihonlariga tayyorlash bo'yicha yillar davomida natija ko'rsatgan o'qituvchilar.",
          },
          {
            icon: "🎁",
            title: "Bepul qo'shimcha darslar",
            text: "Farzandingiz mavzuni tushunmasa, o'sha mavzu bo'yicha qo'shimcha dars bepul o'tkaziladi.",
          },
          {
            icon: "🧪",
            title: "Test banki asosida mashqlar",
            text: "DTM va milliy sertifikat formatidagi minglab test topshiriqlari bilan mustahkam tayyorgarlik.",
          },
          {
            icon: "📊",
            title: "Haftalik nazorat testlari",
            text: "Har hafta bilim darajasi tekshiriladi, kamchiliklar ustida alohida ishlanadi.",
          },
          {
            icon: "🏆",
            title: "Musobaqa va sovg'alar",
            text: "Yaxshi natija ko'rsatgan o'quvchilar taqdirlanadi, ota-onasi va maktabiga tashakkurnoma yuboriladi.",
          },
          {
            icon: "✈️",
            title: "Qo'shimcha sayohatlar",
            text: "O'quvchilarimiz uchun davriy ravishda qo'shimcha sayohatlar uyushtiriladi.",
          },
        ]}
      />

      <ImageCarousel
        id="natijalar"
        images={["c+ 2.jpg", "001.jpg", "b.jpg", "c+3.jpg", "c2.jpg", "c3.jpg"]}
        title="Natijalar"
        subtitle="O'quvchilarimizning DTM va sertifikat natijalari."
      />

      <CenterPolicies />

      <section id="ariza-formasi" className="py-20 bg-slate-50">
        <div className="max-w-lg mx-auto px-6">
          <LeadForm
            courseSlug="biologiya-kimyo"
            courseName="Biologiya-Kimyo"
            levels={LEVELS}
            subtitle="Qo'shimcha ma'lumotlar uchun ma'lumotlaringizni qoldiring."
            disclaimer="Mutaxassislarimiz tez orada siz bilan bog'lanishadi."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
