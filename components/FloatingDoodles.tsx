type Doodle = {
  icon: string;
  className: string;
  animation: string;
  style?: { animationDelay?: string; animationDuration?: string };
};

const DOODLE_SETS: Record<"hero" | "section" | "card", Doodle[]> = {
  hero: [
    { icon: "✏️", className: "top-[8%] left-[4%] text-4xl -rotate-12 opacity-40", animation: "animate-float" },
    { icon: "🖊️", className: "top-[18%] right-[8%] text-4xl rotate-12 opacity-30", animation: "animate-float-slow" },
    { icon: "📐", className: "bottom-[14%] left-[10%] text-3xl rotate-6 opacity-30", animation: "animate-wiggle" },
    { icon: "📚", className: "bottom-[10%] right-[14%] text-4xl -rotate-6 opacity-30", animation: "animate-float" },
    { icon: "✒️", className: "top-[45%] left-[2%] text-3xl rotate-3 opacity-20", animation: "animate-wiggle" },
    { icon: "✨", className: "top-[6%] right-[28%] text-2xl opacity-40", animation: "animate-spin-slow" },
  ],
  section: [
    { icon: "✏️", className: "top-4 right-[6%] text-3xl rotate-12 opacity-20", animation: "animate-float" },
    { icon: "📏", className: "bottom-6 left-[6%] text-3xl -rotate-6 opacity-20", animation: "animate-float-slow" },
    { icon: "🖋️", className: "top-1/2 right-[2%] text-3xl rotate-6 opacity-15", animation: "animate-wiggle" },
  ],
  card: [
    { icon: "✏️", className: "-top-4 -right-3 text-3xl rotate-12 opacity-70", animation: "animate-float" },
    { icon: "🖊️", className: "-bottom-3 -left-3 text-3xl -rotate-12 opacity-60", animation: "animate-wiggle" },
  ],
};

/** O'quv markazi mavzusidagi (ruchka, qalam) suzuvchi dekorativ elementlar — doim harakatda, sayt zerikarli ko'rinmasligi uchun. */
export default function FloatingDoodles({ variant = "hero" }: { variant?: "hero" | "section" | "card" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      {DOODLE_SETS[variant].map((d, i) => (
        <span
          key={i}
          className={`absolute drop-shadow-sm ${d.className} ${d.animation}`}
          style={d.style}
        >
          {d.icon}
        </span>
      ))}
    </div>
  );
}
