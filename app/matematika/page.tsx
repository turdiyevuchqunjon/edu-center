import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectHero from "@/components/SubjectHero";
import Features from "@/components/Features";
import DurationTable from "@/components/DurationTable";
import ResultsGallery from "@/components/ResultsGallery";
import CenterPolicies from "@/components/CenterPolicies";

export const metadata: Metadata = {
  title: "Matematika kursi — qabul",
  description:
    "Asosdan milliy sertifikat darajasigacha Matematika fanidan bosqichma-bosqich tayyorgarlik kursi.",
};

const LEVELS = ["Asos bosqichi", "Kengaytirilgan bosqich", "DTM/Milliy sertifikat tayyorgarligi"];

export default function MatematikaPage() {
  return (
    <>
      <Header />

      <SubjectHero
        eyebrow="📐 Matematika kursi — qabul ochiq"
        title={
          <>
            Matematikani <span className="text-brand-600">tushunib, yoqtirib</span> o&apos;rganing
          </>
        }
        description="Aniq fanlar OTM'lariga kirish uchun mustahkam poydevor — asosdan milliy sertifikat darajasigacha bosqichma-bosqich dastur."
        stats={[
          { value: "3+3+2", label: "oylik bosqichlar" },
          { value: "1000+", label: "masala va misol" },
          { value: "100%", label: "amaliy mashg'ulot" },
        ]}
        courseSlug="matematika"
        courseName="Matematika"
        levels={LEVELS}
      />

      <Features
        title="Afzalliklarimiz"
        items={[
          {
            icon: "🎓",
            title: "Tajribali ustozlar",
            text: "Milliy sertifikat va DTM formatida yillar davomida yuqori natija bergan o'qituvchilar.",
          },
          {
            icon: "🎁",
            title: "Bepul qo'shimcha darslar",
            text: "Farzandingiz mavzuni tushunmasa, o'sha mavzu bo'yicha qo'shimcha dars bepul o'tkaziladi.",
          },
          {
            icon: "✏️",
            title: "Ko'p masala yechish amaliyoti",
            text: "Nazariyadan ko'ra amaliyotga ko'proq vaqt ajratiladi — masala yechish ko'nikmasi mustahkamlanadi.",
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
          { level: "Asos bosqichi", duration: "3 oy", desc: "Fan asoslarini tizimli mustahkamlash" },
          { level: "Kengaytirilgan bosqich", duration: "3 oy", desc: "Murakkab masalalar va teoremalar" },
          { level: "DTM/Milliy sertifikat tayyorgarligi", duration: "2 oy", desc: "Imtihon formatida intensiv tayyorgarlik" },
        ]}
      />

      <ResultsGallery
        title="O'quvchilarimizning DTM va sertifikat natijalari"
        items={[
          { initials: "NY", name: "Nilufar Y.", result: "Milliy sertifikat A+" },
          { initials: "RT", name: "Rustam T.", result: "Milliy sertifikat A" },
          { initials: "SB", name: "Shahnoza B.", result: "DTM 194 ball" },
          { initials: "JM", name: "Javlon M.", result: "TATU'ga qabul" },
          { initials: "KI", name: "Kamron I.", result: "DTM 188 ball" },
          { initials: "LU", name: "Laylo U.", result: "Milliy sertifikat A" },
          { initials: "HD", name: "Husan D.", result: "DTM 191 ball" },
          { initials: "MF", name: "Madina F.", result: "INHA'ga qabul" },
        ]}
      />

      <CenterPolicies />

      <Footer />
    </>
  );
}
