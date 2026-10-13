import { ArrowUpRight } from "lucide-react";
import { categories } from "../data/content";
import { scrollToId } from "../lib/scroll";
import { Reveal, SectionHeader } from "./ui/primitives";

export default function Categories() {
  return (
    <section id="portofolio" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader align="left" tone="gold" eyebrow="Portofolio Produk" title={<>Ragam buah dalam <em className="bg-linear-to-r from-gold-500 to-gold-600 bg-clip-text italic text-transparent">satu portofolio.</em></>} />
          <Reveal delay={0.2}><p className="max-w-sm text-sm leading-relaxed text-leaf-900/60">Kategori produk yang ditampilkan mencakup buah lokal, buah impor, durian, serta pilihan produk olahannya.</p></Reveal>
        </div>

        <div className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-5 lg:overflow-visible lg:px-0">
          {categories.map((c, i) => <Reveal key={c.title} delay={i * 0.08} className="snap-start">
            <button onClick={() => scrollToId(c.target)} className={`group relative flex h-64 w-60 flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/80 bg-linear-to-br p-6 text-left shadow-card transition-all duration-500 hover:-translate-y-2.5 hover:shadow-soft lg:w-full ${c.gradient}`}>
              <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/85 shadow-card backdrop-blur transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"><c.icon className={`h-6 w-6 ${c.iconColor}`} /></span><span className="grid h-9 w-9 place-items-center rounded-full text-leaf-950 transition-all duration-500 group-hover:bg-leaf-950 group-hover:text-cream-50"><ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-500 group-hover:rotate-45" /></span></div>
              <div><h3 className="font-display text-[21px] font-bold leading-tight text-leaf-950">{c.title}</h3><p className="mt-2 text-[12.5px] leading-relaxed text-leaf-900/60">{c.desc}</p><p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-leaf-900/40">Lihat portofolio</p></div>
              <span className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/40 blur-xl transition-transform duration-700 group-hover:scale-150" />
            </button>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}
