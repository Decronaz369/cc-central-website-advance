import { Reveal, SectionHeader } from "./ui/primitives";

const galleryItems = [
  {
    eyebrow: "Kebun buah",
    title: "Dari kebun yang hijau",
    description: "Melihat buah tumbuh langsung di pohon sebelum musim panen tiba.",
    image: "https://images.unsplash.com/photo-1755842546298-d5cb56b5afee?auto=format&fit=crop&w=1400&q=85",
    alt: "Buah mangga matang yang tumbuh di pohon kebun",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    eyebrow: "Hasil panen",
    title: "Beragam buah pilihan",
    description: "Warna, bentuk, dan kesegaran buah dari hasil panen.",
    image: "https://images.unsplash.com/photo-1519097000072-e44ffa116485?auto=format&fit=crop&w=1200&q=85",
    alt: "Keranjang berisi aneka buah tropis hasil panen",
    className: "md:col-span-5",
  },
  {
    eyebrow: "Pilihan lokal",
    title: "Buah segar untuk pelanggan",
    description: "Ragam hasil bumi yang hadir dalam portofolio buah DC Central.",
    image: "https://images.unsplash.com/photo-1719904253653-3ebc0daf04fa?auto=format&fit=crop&w=1200&q=85",
    alt: "Aneka hasil panen buah tropis yang ditata dalam keranjang",
    className: "md:col-span-5",
  },
];

export default function HarvestGallery() {
  return (
    <section id="kebun-panen" className="relative overflow-hidden bg-[linear-gradient(180deg,#fdfbf5_0%,#f4f8ee_100%)] py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-gold-200/35 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          align="left"
          eyebrow="Kebun & Hasil Panen"
          title={<>Kesegaran berawal dari <em className="bg-linear-to-r from-leaf-500 to-leaf-700 bg-clip-text italic text-transparent">sumbernya.</em></>}
          desc="Intip suasana kebun buah dan keragaman hasil panen yang menginspirasi pilihan produk lokal serta buah segar."
        />
        <div className="mt-12 grid auto-rows-[220px] gap-5 md:auto-rows-[245px] md:grid-cols-12">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className={item.className}>
              <article className="group relative h-full min-h-[220px] overflow-hidden rounded-[1.8rem] bg-leaf-900 shadow-card">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/85 via-leaf-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {item.eyebrow}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                  <p className="mt-1 max-w-lg text-xs leading-relaxed text-white/80 sm:text-sm">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
