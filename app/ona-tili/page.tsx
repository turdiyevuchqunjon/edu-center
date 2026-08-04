import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectHero from "@/components/SubjectHero";
import Features from "@/components/Features";
import DurationTable from "@/components/DurationTable";
import ResultsGallery from "@/components/ResultsGallery";
import CenterPolicies from "@/components/CenterPolicies";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Ona tili kursi — qabul",
  description:
    "Savodxonlik, insho yozish va DTM formatidagi testlarga tayyorgarlik — Ona tili kursi.",
};

const LEVELS = ["Asos bosqichi", "Chuqurlashtirilgan bosqich", "DTM/Milliy sertifikat tayyorgarligi"];

export default function OnaTiliPage() {
  return (
    <>
      <Header />

      <SubjectHero
        eyebrow="📖 Ona tili kursi — qabul ochiq"
        title={
          <>
            Savodli yozish va <span className="text-brand-600">chiroyli fikrlashni</span> o&apos;rganing
          </>
        }
        description="Ona tili grammatikasi, savodxonlik va insho yozish ko'nikmalarini rivojlantiruvchi, DTM formatiga mos tayyorgarlik dasturi."
        stats={[
          { value: "3+3+2", label: "oylik bosqichlar" },
          { value: "500+", label: "insho va mashq" },
          { value: "100%", label: "amaliy mashg'ulot" },
        ]}
        courseSlug="ona-tili"
        courseName="Ona tili"
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
            text: "Filologiya sohasida katta tajribaga ega, o'quvchilarni yuqori natijaga olib chiqqan o'qituvchilar.",
          },
          {
            icon: "🎁",
            title: "Bepul qo'shimcha darslar",
            text: "Farzandingiz mavzuni tushunmasa, o'sha mavzu bo'yicha qo'shimcha dars bepul o'tkaziladi.",
          },
          {
            icon: "✍️",
            title: "Insho yozish amaliyoti",
            text: "Muntazam insho yozish va tahlil qilish orqali fikrni aniq va chiroyli ifodalashni o'rgatamiz.",
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

      <DurationTable
        title="Bosqichlar va o'qitish muddati"
        rows={[
          { level: "Asos bosqichi", duration: "3 oy", desc: "Grammatika va savodxonlik asoslari" },
          { level: "Chuqurlashtirilgan bosqich", duration: "3 oy", desc: "Insho yozish va matn tahlili" },
          { level: "DTM/Milliy sertifikat tayyorgarligi", duration: "2 oy", desc: "Imtihon formatida intensiv tayyorgarlik" },
        ]}
      />

      <ResultsGallery
        title="O'quvchilarimizning DTM va sertifikat natijalari"
        items={[
          { initials: "SK", name: "Sevinch K.", result: "Respublika olimpiadasi 2-o'rin" },
          { initials: "FN", name: "Feruza N.", result: "DTM 187 ball" },
          { initials: "OB", name: "Ozoda B.", result: "Milliy sertifikat A" },
          { initials: "QT", name: "Qodir T.", result: "DTM 180 ball" },
          { initials: "ZM", name: "Zilola M.", result: "Viloyat olimpiadasi 1-o'rin" },
          { initials: "EY", name: "Elyor Y.", result: "DTM 184 ball" },
          { initials: "GN", name: "Gulbahor N.", result: "Milliy sertifikat A" },
          { initials: "AR", name: "Asal R.", result: "DTM 189 ball" },
        ]}
      />

      <CenterPolicies />

      <section id="ariza-formasi" className="py-20 bg-slate-50">
        <div className="max-w-lg mx-auto px-6">
          <LeadForm
            courseSlug="ona-tili"
            courseName="Ona tili"
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
