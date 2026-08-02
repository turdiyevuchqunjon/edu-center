/** Faqat Ingliz tili sahifasida ishlatiladi — Innovative Education bilan hamkorlik bloki. */
export default function PartnerBlock() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-600 to-accent2 rounded-3xl p-8 sm:p-12 text-white grid sm:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center text-2xl font-extrabold shrink-0">
            IE
          </div>
          <div>
            <span className="inline-block text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-3">
              Hamkorimiz
            </span>
            <h3 className="text-2xl font-extrabold mb-3">Innovative Education</h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Innovative o&apos;quv markazi bilan hamkorlikda ishlaymiz — Samarqanddagi
              o&apos;quvchilarimiz IELTS imtihonini bevosita Samarqand shahrining o&apos;zida
              topshirishlari mumkin. Imtihon natijalari asosida ular uchun maxsus
              tayyorgarlik dasturi ham tashkil qilinadi.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10">
                <img
                  src="/innovative.jpg"
                  alt="Innovative Education hamkori"
                  className="w-full h-auto"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10">
                <img
                  src={encodeURI("/mm publick.jpg")}
                  alt="MM Publick hamkori"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
