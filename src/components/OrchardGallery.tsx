import { Leaf, Sprout } from "lucide-react";
import { Reveal, SectionHeader } from "./ui/primitives";

const scenes = [
  {
    image: "/images/orchard.jpg",
    alt: "Ilustrasi kebun buah tropis dengan pohon mangga dan pepaya",
    title: "Kebun buah tropis",
    description: "Mengenal lingkungan tumbuh beragam buah lokal.",
    icon: Sprout,
  },
  {
    image: "/images/harvest.jpg",
    alt: "Ilustrasi hasil panen mangga, pepaya, rambutan, dan manggis dalam peti",
    title: "Ragam hasil panen",
    description: "Warna dan kesegaran buah dalam satu pilihan yang beragam.",
    icon: Leaf,
  },
];

export default function OrchardGallery() {
  return (
    <section id="kebun-panen" className="relative bg-leaf-50/70 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          align="left"
          eyebrow="Kebun & Hasil Panen"
          title={<>Dari kebun, <em className="bg-linear-to-r from-leaf-500 to-leaf-700 bg-clip-text italic text-transparent">ragam kesegaran.</em></>}
          desc="Mengenal buah lebih dekat melalui suasana kebun dan ragam hasil panen."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {scenes.map((scene, index) => (
            <Reveal key={scene.image} delay={index * 0.12}>
              <figure className="group overflow-hidden rounded-[2rem] bg-white shadow-card">
                <div className="aspect-3/2 overflow-hidden">
                  <img
                    src={scene.image}
                    alt={scene.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="flex items-start gap-4 p-6 sm:p-7">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-leaf-100 text-leaf-700">
                    <scene.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-leaf-950">{scene.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-leaf-900/60">{scene.description}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-leaf-900/55">
          Gambar ilustrasi kebun dan hasil panen, bukan dokumentasi kebun milik perusahaan.
        </p>
      </div>
    </section>
  );
}
