import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectHero from "@/components/SubjectHero";
import Features from "@/components/Features";
import DurationTable from "@/components/DurationTable";
import LeadForm from "@/components/LeadForm";
import PartnerBlock from "@/components/PartnerBlock";

export const metadata: Metadata = {
  title: "Ingliz tili kursi — qabul",
  description:
    "A1 dan IELTS gacha ingliz tili kursi. 7.5+ IELTS ustozlari, kichik guruhlar, bepul sinov darsi.",
};

const LEVELS = ["A1", "A2", "B1", "B2", "IELTS"];

export default function InglizTiliPage() {
  return (
    <>
      <Header />

      <SubjectHero
        eyebrow="🇬🇧 Ingliz tili kurslariga qabul davom etmoqda"
        title={
          <>
            Qisqa fursatda malakali ustozlar bilan <span className="text-brand-600">yuqori natijaga</span> erishing.
          </>
        }
        description="Samarqanddagi o'quvchilarimiz IELTS imtihonini bevosita Samarqand shahrining o'zida topshirishlari mumkin. Imtihon natijalari asosida ular uchun maxsus tayyorgarlik dasturi ham tashkil qilinadi."
        stats={[{ value: "70+", label: "2025–2026 yuqori darajali sertifikat" }]}
        courseSlug="ingliz-tili"
        courseName="Ingliz tili"
        levels={LEVELS}
        showForm={false}
        ctaHref="#ariza-formasi"
        ctaLabel="Ma'lumot uchun"
      />

      <PartnerBlock />

      <Features
        title="Afzalliklarimiz"
        items={[
          {
            icon: "🎓",
            title: "Yuqori malakali ustozlar",
            text: "Barcha o'qituvchilarimiz eng kamida 7.5 IELTS ballga ega va katta tajribaga ega.",
          },
          {
            icon: "🎁",
            title: "Bepul qo'shimcha darslar",
            text: "Farzandingiz mavzuni tushunmasa, o'sha mavzu bo'yicha qo'shimcha dars bepul o'tkaziladi.",
          },
          {
            icon: "🗣️",
            title: "Amaliyotga urg'u",
            text: "Har dars gapirish va tinglash mashqlariga asoslangan — grammatikani amalda mustahkamlaysiz.",
          },
          {
            icon: "📝",
            title: "IELTS tayyorgarligi",
            text: "Innovative Education hamkorligida Samarqandning o'zida IELTS topshirish imkoniyati.",
          },
          {
            icon: "📊",
            title: "Haftalik nazorat",
            text: "Har hafta progress tekshiriladi, ota-onalarga natijalar haqida xabar beriladi.",
          },
          {
            icon: "🏆",
            title: "Musobaqa va sovg'alar",
            text: "Yaxshi natija ko'rsatgan o'quvchilar taqdirlanadi, ota-onasi va maktabiga tashakkurnoma yuboriladi.",
          },
        ]}
      />

      <DurationTable
        title="Bosqichlar va o'qitish muddati"
        rows={[
          { level: "A1", duration: "2 oy", desc: "Boshlang'ich daraja — asosiy lug'at va grammatika" },
          { level: "A2", duration: "2 oy", desc: "Kundalik muloqot ko'nikmalari" },
          { level: "B1", duration: "3 oy", desc: "O'rta daraja — erkin fikr almashish" },
          { level: "B2", duration: "3 oy", desc: "Yuqori o'rta daraja — murakkab mavzularda muloqot" },
          { level: "IELTS", duration: "2 oy", desc: "Imtihonga maxsus tayyorgarlik" },
        ]}
      />

      <section id="ariza-formasi" className="py-20 bg-slate-50">
        <div className="max-w-lg mx-auto px-6">
          <LeadForm
            courseSlug="ingliz-tili"
            courseName="Ingliz tili"
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
