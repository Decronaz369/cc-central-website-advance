import { ArrowUpRight, Boxes, Leaf, Store } from "lucide-react";
import { Reveal, SectionHeader } from "./ui/primitives";
import { scrollToId } from "../lib/scroll";

const services = [
  {
    icon: Boxes,
    number: "01",
    title: "Distribusi Buah Lokal & Impor",
    description: "Kegiatan usaha utama perusahaan berfokus pada distribusi beragam buah lokal dan impor.",
    color: "bg-leaf-100 text-leaf-700",
  },
  {
    icon: Leaf,
    number: "02",
    title: "Portofolio Produk Segar",
    description: "Mencakup buah segar, aneka durian premium, serta durian beku sesuai ragam yang tersedia.",
    color: "bg-gold-100 text-gold-700",
  },
  {
    icon: Store,
    number: "03",
    title: "Kanal Retail DC Central",
    description: "Gerai di kawasan Citra Raya, Tangerang, yang melayani pembelian buah dan durian untuk pelanggan.",
    color: "bg-cream-200 text-leaf-800",
  },
];

export default function CorporateServices() {
  return (
    <section id="layanan-bisnis" className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader align="left" tone="gold" eyebrow="Bidang Usaha" title={<>Dari distribusi hingga <em className="bg-linear-to-r from-gold-500 to-gold-600 bg-clip-text italic text-transparent">kanal retail.</em></>} />
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-leaf-900/60">Gambaran ringkas kegiatan dan portofolio usaha PT. Central Buah Segar berdasarkan informasi yang tersedia.</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => <Reveal key={service.number} delay={index * 0.08}>
            <a
              href="#portofolio"
              onClick={(event) => {
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                scrollToId("#portofolio");
              }}
              aria-label={`${service.title} — Lihat portofolio`}
              className="group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-leaf-600 relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-leaf-100/80 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft sm:p-8">
              <div className="flex items-start justify-between"><span className={`grid h-13 w-13 place-items-center rounded-2xl ${service.color}`}><service.icon className="h-6 w-6" /></span><span className="font-display text-4xl font-bold text-leaf-950/[0.08]">{service.number}</span></div>
              <h3 className="font-display mt-7 text-2xl font-bold leading-tight text-leaf-950">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-leaf-900/65">{service.description}</p>
              <span className="mt-7 inline-flex w-fit items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-leaf-700 transition-colors hover:text-gold-700">Lihat portofolio <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-leaf-500 to-gold-400 transition-all duration-500 group-hover:w-full" />
            </a>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}
