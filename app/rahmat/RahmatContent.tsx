"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { COURSE_NAMES, COURSE_PATHS, type CourseSlug } from "@/lib/courses";

function isCourseSlug(value: string | null): value is CourseSlug {
  return !!value && value in COURSE_NAMES;
}

export default function RahmatContent() {
  const searchParams = useSearchParams();
  const rawCourse = searchParams.get("course");
  const courseSlug: CourseSlug = isCourseSlug(rawCourse) ? rawCourse : "umumiy";
  const courseName = COURSE_NAMES[courseSlug];

  return (
    <div className="max-w-lg w-full text-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-4xl mb-6">
        ✓
      </div>
      <h1 className="text-3xl font-extrabold mb-3">Arizangiz qabul qilindi!</h1>
      <p className="text-slate-500 mb-1">
        Siz{" "}
        <b className="text-slate-900">
          {courseSlug === "umumiy" ? "bepul konsultatsiya" : `${courseName} kursi`}
        </b>{" "}
        uchun ariza qoldirdingiz.
      </p>
      <p className="text-slate-500 mb-8">
        Tez orada operatorlarimiz siz bilan telefon orqali bog&apos;lanadi.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 transition"
        >
          Bosh sahifaga qaytish
        </Link>
        <Link
          href={COURSE_PATHS[courseSlug]}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 hover:border-brand-600 hover:text-brand-600 text-sm font-semibold px-6 py-3 transition"
        >
          Kurs sahifasiga qaytish
        </Link>
      </div>
    </div>
  );
}
