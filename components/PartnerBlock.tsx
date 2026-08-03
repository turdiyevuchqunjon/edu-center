import FloatingDoodles from "./FloatingDoodles";

/** Faqat Ingliz tili sahifasida ishlatiladi — Innovative Education bilan hamkorlik bloki. */
export default function PartnerBlock() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-white grid sm:grid-cols-[auto_1fr] gap-8 items-center bg-gradient-to-br from-brand-600 via-accent3 to-accent2 bg-gradient-lg animate-gradient-move shadow-2xl shadow-brand-600/20">
          {/* dekorativ suzuvchi bloblar */}
          <div
            className="pointer-events-none absolute -top-16 -left-10 w-56 h-56 rounded-full bg-white/20 blur-3xl animate-float"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-accent2/40 blur-3xl animate-float-slow"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white/10 blur-2xl animate-float"
            style={{ animationDelay: "1.5s" }}
            aria-hidden
          />
          <FloatingDoodles variant="section" />

          <div className="relative w-20 h-20 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center text-2xl font-extrabold shrink-0 animate-fade-in-up transition-transform duration-500 hover:scale-110 hover:rotate-3">
            <span className="absolute inset-0 rounded-2xl animate-pulse-ring bg-white/30" aria-hidden />
            <span className="relative">IE</span>
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-3 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              Hamkorimiz
            </span>
            <h3
              className="text-2xl font-extrabold mb-3 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              Innovative learning center
            </h3>
            <p
              className="text-white/90 text-sm sm:text-base leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Innovative o&apos;quv markazi bilan hamkorlikda ishlaymiz — Samarqanddagi
              o&apos;quvchilarimiz IELTS imtihonini bevosita Samarqand shahrining o&apos;zida
              topshirishlari mumkin. Imtihon natijalari asosida ular uchun maxsus
              tayyorgarlik dasturi ham tashkil qilinadi.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4">
              <div
                className="relative group overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur transition-all duration-500 hover:border-white/40 hover:shadow-xl hover:shadow-black/20 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <FloatingDoodles variant="card" />
                <div className="overflow-hidden">
                  <img
                    src="/innovative.jpg"
                    alt="Innovative Education hamkori"
                    className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div
                className="relative group overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur transition-all duration-500 hover:border-white/40 hover:shadow-xl hover:shadow-black/20 animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <FloatingDoodles variant="card" />
                <p className="px-4 pt-4 text-white/90 text-sm sm:text-base leading-relaxed">
                  MM Publication — Londonda joylashgan xalqaro nashriyot uyi bo&apos;lib, ingliz
                  tilini o&apos;rgatishga mo&apos;ljallangan zamonaviy darslik va dasturlar ishlab
                  chiqaradi. Kompaniya xalqaro miqyosda tan olingan, ta&apos;lim standartlariga mos
                  kitoblar va metodikalar yaratadi.
                </p>
                <div className="overflow-hidden">
                  <img
                    src={encodeURI("/mm publick.jpg")}
                    alt="MM Publick hamkori"
                    className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
