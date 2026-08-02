import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectHero from "@/components/SubjectHero";
import Features from "@/components/Features";
import DurationTable from "@/components/DurationTable";
import ResultsGallery from "@/components/ResultsGallery";
import CenterPolicies from "@/components/CenterPolicies";

export const metadata: Metadata = {
  title: "Tarix-Huquq kursi — qabul",
  description:
    "Jahon tarixi, O'zbekiston tarixi va Huquq asoslaridan DTM hamda milliy sertifikatga tayyorgarlik kursi.",
};

const LEVELS = ["Asos bosqichi", "Chuqurlashtirilgan bosqich", "DTM/Milliy sertifikat tayyorgarligi"];

export default function TarixHuquqPage() {
  return (
    <>
      <Header />

      <SubjectHero
        eyebrow="📜 Tarix-Huquq kursi — qabul ochiq"
        title={
          <>
            Tarix va huquqni <span className="text-brand-600">chuqur bilib</span>, ishonch bilan topshiring
          </>
        }
        description="Jahon tarixi, O'zbekiston tarixi va Huquq asoslari fanlaridan DTM va milliy sertifikat formatiga mos tizimli tayyorgarlik."
        stats={[
          { value: "3+3+2", label: "oylik bosqichlar" },
          { value: "1000+", label: "test topshirig'i" },
          { value: "100%", label: "amaliy mashg'ulot" },
        ]}
        courseSlug="tarix-huquq"
        courseName="Tarix-Huquq"
        levels={LEVELS}
      />

      <Features
        title="Afzalliklarimiz"
        items={[
          {
            icon: "🎓",
            title: "Tajribali ustozlar",
            text: "Ijtimoiy-gumanitar OTM'larga kirish bo'yicha yillar davomida natija bergan o'qituvchilar.",
          },
          {
            icon: "🎁",
            title: "Bepul qo'shimcha darslar",
            text: "Farzandingiz mavzuni tushunmasa, o'sha mavzu bo'yicha qo'shimcha dars bepul o'tkaziladi.",
          },
          {
            icon: "🗂️",
            title: "Tizimli xronologiya",
            text: "Voqealar va sanalar tizimli sxemalar orqali o'rgatiladi — yodda saqlash osonlashadi.",
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
          { level: "Chuqurlashtirilgan bosqich", duration: "3 oy", desc: "Murakkab mavzular va tahlil ko'nikmalari" },
          { level: "DTM/Milliy sertifikat tayyorgarligi", duration: "2 oy", desc: "Imtihon formatida intensiv tayyorgarlik" },
        ]}
      />

      <ResultsGallery
        title="O'quvchilarimizning DTM va sertifikat natijalari"
        items={[
          { initials: "BJ", name: "Bekzod J.", result: "DTM 183 ball" },
          { initials: "GT", name: "Gulnoza T.", result: "Milliy sertifikat A" },
          { initials: "AS", name: "Aziza S.", result: "DTM 179 ball" },
          { initials: "IK", name: "Islom K.", result: "TDYU'ga qabul" },
          { initials: "NF", name: "Nodira F.", result: "DTM 186 ball" },
          { initials: "SR", name: "Sherzod R.", result: "Milliy sertifikat A" },
          { initials: "MO", name: "Malika O.", result: "DTM 181 ball" },
          { initials: "TB", name: "Temur B.", result: "JIDU'ga qabul" },
        ]}
      />

      <CenterPolicies />

      <Footer />
    </>
  );
}
