import type { ReactNode } from "react";
import type { CourseSlug } from "@/lib/courses";
import LeadForm from "./LeadForm";
import FloatingDoodles from "./FloatingDoodles";

type Stat = { value: string; label: string };

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  stats?: Stat[];
  courseSlug: CourseSlug;
  courseName: string;
  levels?: string[];
  formSubtitle?: string;
  formDisclaimer?: string;
  showForm?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function SubjectHero({
  eyebrow,
  title,
  description,
  stats,
  courseSlug,
  courseName,
  levels,
  formSubtitle,
  formDisclaimer,
  showForm = true,
  ctaHref,
  ctaLabel = "Ma'lumot uchun",
}: Props) {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 bg-gradient-to-b from-brand-50/60 to-white">
      <FloatingDoodles variant="hero" />
      <div
        className={
          showForm
            ? "relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start"
            : "relative z-10 max-w-3xl mx-auto px-6"
        }
      >
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full mb-5">
            {eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.12] mb-5">{title}</h1>
          <p className="text-lg text-slate-500 max-w-xl mb-8">{description}</p>

          {ctaHref && (
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 transition mb-8"
            >
              {ctaLabel}
            </a>
          )}

          {stats && stats.length > 0 && (
            <div className="flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <b className="block text-2xl font-extrabold">{s.value}</b>
                  <span className="text-xs text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {showForm && (
          <LeadForm
            courseSlug={courseSlug}
            courseName={courseName}
            levels={levels}
            subtitle={formSubtitle}
            disclaimer={formDisclaimer}
          />
        )}
      </div>
    </section>
  );
}
