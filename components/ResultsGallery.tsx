const GALLERY_IMAGES = [
  "b.jpg",
  "c.jpg",
  "c2.jpg",
  "c3.jpg",
  "c4.jpg",
  "c5.jpg",
  "c6.jpg",
  "c+.jpg",
  "c+ 2.jpg",
  "c+3.jpg",
  "c+5.jpg",
  "001.jpg",
];

export type ResultItem = {
  initials: string;
  name: string;
  result: string;
  note?: string;
};

type Props = {
  title?: string;
  subtitle?: string;
  items?: ResultItem[];
};

/**
 * Natijalar bo'limi: agar `items` berilsa an'anaviy karta ko'rsatadi,
 * aks holda `public`dagi rasmlar bilan galereya ochadi.
 */
export default function ResultsGallery({
  title = "O'quvchilarimiz natijalari",
  subtitle = "Har oy o'nlab o'quvchilarimiz maqsadlariga erishmoqda.",
  items,
}: Props) {
  const hasItems = items && items.length > 0;

  return (
    <section id="natijalar" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-extrabold mb-3">{title}</h2>
          <p className="text-slate-500">{subtitle}</p>
        </div>

        {hasItems ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
            {items!.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-brand-50 to-blue-100 flex items-center justify-center text-2xl font-extrabold text-brand-600">
                  {item.initials}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-brand-600 font-bold text-sm">{item.result}</p>
                  {item.note && <p className="text-xs text-slate-400 mt-1">{item.note}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
              {GALLERY_IMAGES.map((fileName) => {
                const src = `/${encodeURI(fileName)}`;
                return (
                  <div key={fileName} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                    <div className="aspect-square overflow-hidden bg-slate-100">
                      <img
                        src={src}
                        alt={fileName}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-slate-400 text-center mt-8">
              * Natijalar bo'limida `public` papkasidagi rasm fayllari ko'rsatiladi.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
