import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectHero from "@/components/SubjectHero";
import Features from "@/components/Features";
import DurationTable from "@/components/DurationTable";
import ResultsGallery from "@/components/ResultsGallery";
import CenterPolicies from "@/components/CenterPolicies";

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

      <DurationTable
        title="Bosqichlar va o'qitish muddati"
        rows={[
          { level: "Asos bosqichi", duration: "3 oy", desc: "Fan asoslarini tizimli mustahkamlash" },
          { level: "Chuqurlashtirilgan bosqich", duration: "3 oy", desc: "Murakkab mavzular va masala yechish" },
          { level: "DTM/Milliy sertifikat tayyorgarligi", duration: "2 oy", desc: "Imtihon formatida intensiv tayyorgarlik" },
        ]}
      />

      <ResultsGallery
        title="O'quvchilarimizning DTM va sertifikat natijalari"
        items={[
          { initials: "OT", name: "Otabek T.", result: "DTM 189 ball" },
          { initials: "DM", name: "Dilnoza M.", result: "DTM 192 ball" },
          { initials: "KS", name: "Kamola S.", result: "Milliy sertifikat A+" },
          { initials: "FR", name: "Farrux R.", result: "DTM 185 ball" },
          { initials: "ZY", name: "Zarina Y.", result: "TATU'ga qabul" },
          { initials: "BN", name: "Bexruz N.", result: "TTA'ga qabul" },
          { initials: "MG", name: "Muslima G.", result: "DTM 190 ball" },
          { initials: "AK", name: "Aziz K.", result: "Milliy sertifikat A" },
        ]}
      />

      <CenterPolicies />

      <Footer />
    </>
  );
}
