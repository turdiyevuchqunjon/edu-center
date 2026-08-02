"use client";

import { useState } from "react";

type Props = {
  images: string[];
  title?: string;
  subtitle?: string;
  id?: string;
};

export default function ImageCarousel({
  images,
  title = "O'quvchilarimizning eng yaxshi natijalari",
  subtitle = "C+ seriyali natija rasmlari va yangi ishlanmalar.",
  id,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  const next = () => setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));

  return (
    <section id={id} className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-extrabold mb-3">{title}</h2>
          <p className="text-slate-500">{subtitle}</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white">
          <img
            src={`/${encodeURI(images[activeIndex])}`}
            alt={images[activeIndex]}
            className="w-full h-[380px] object-cover sm:h-[460px]"
          />

          <button
            type="button"
            aria-label="Oldingi rasm"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Keyingi rasm"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
          >
            ›
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-16 w-16 overflow-hidden rounded-xl border transition ${
                index === activeIndex ? "border-brand-600 shadow-md" : "border-slate-200"
              }`}
            >
              <img
                src={`/${encodeURI(image)}`}
                alt={image}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
