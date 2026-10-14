import { Reveal, SectionHeader } from "./ui/primitives";

const harvestImages = [
  { src: "/images/about-store.png", alt: "Area gerai DC Central", title: "Kegiatan retail" },
  { src: "/images/fruits/mangga.png", alt: "Buah mangga pilihan", title: "Hasil panen buah" },
  { src: "/images/fruits/semangka.png", alt: "Buah semangka segar", title: "Buah segar pilihan" },
  { src: "/images/monthong-parigi.png", alt: "Durian pilihan", title: "Hasil durian" },
];

export default function HarvestGallery() {
  return (
    <section id="kebun-hasil-panen" className="relative overflow-hidden bg-leaf-50/70 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Kebun & Hasil Panen" title={<>Mengenal lebih dekat <em className="bg-linear-to-r from-leaf-500 to-leaf-700 bg-clip-text italic text-transparent">produk kami.</em></>} desc="Dokumentasi visual pilihan buah dan hasil produk yang menjadi bagian dari portofolio DC Central." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {harvestImages.map((item, index) => <Reveal key={item.title} delay={index * 0.07}>
            <figure className="group overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
              <img src={item.src} alt={item.alt} loading="lazy" className="aspect-[4/5] w-full rounded-[1.35rem] object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="px-3 py-4 text-sm font-bold text-leaf-900">{item.title}</figcaption>
            </figure>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}
