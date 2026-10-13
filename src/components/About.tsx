import { Building2, Check, Leaf, Store } from "lucide-react";
import { Reveal, SectionHeader } from "./ui/primitives";

const profilePoints = [
  "Distribusi buah lokal dan impor",
  "Pilihan buah segar dan durian premium",
  "Kanal retail melalui DC Central di Citra Raya",
];

export default function About() {
  return (
    <section id="tentang" className="relative overflow-hidden py-24 sm:py-28">
      <div className="dots-bg pointer-events-none absolute right-10 top-16 h-44 w-44 opacity-60" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <Reveal className="relative">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-4xl bg-gold-200/70" />
            <img src="/images/about-store.png" alt="Gerai DC Central di Citra Raya" className="relative z-10 h-[420px] w-[86%] rounded-[2.5rem] object-cover object-[100%_50%] shadow-soft sm:h-[500px]" loading="lazy" />
            <img src="/images/monthong-parigi.png" alt="Buah durian sebagai bagian dari portofolio produk" className="absolute -bottom-8 right-0 z-20 w-[46%] rotate-3 rounded-[1.75rem] border-[6px] border-cream-50 object-cover shadow-soft transition-transform duration-700 hover:rotate-1 hover:scale-105" loading="lazy" />
            <div className="glass absolute -left-3 top-10 z-20 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-card sm:left-6">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-100 text-gold-700"><Building2 className="h-4.5 w-4.5" /></span>
              <div className="leading-tight"><p className="text-[12px] font-extrabold text-leaf-950">Profil Perusahaan</p><p className="text-[11px] font-medium text-leaf-900/55">PT. Central Buah Segar</p></div>
            </div>
            <div className="absolute -right-2 top-6 z-0 h-24 w-24 rounded-full bg-leaf-200/70 blur-xl" />
          </div>
        </Reveal>

        <div>
          <SectionHeader align="left" eyebrow="Tentang Perusahaan" title={<>Mengenal <em className="bg-linear-to-r from-gold-500 to-gold-600 bg-clip-text italic text-transparent">Central Buah Segar.</em></>} />
          <Reveal delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-leaf-900/70"><span className="font-bold text-leaf-950">PT. Central Buah Segar</span> bergerak di bidang distribusi buah lokal dan impor. Kami menghadirkan ragam produk buah untuk menjawab kebutuhan pelanggan melalui pemilihan produk yang cermat dan perhatian pada kesegaran.</p>
            <p className="mt-4 text-base leading-relaxed text-leaf-900/70"><span className="font-bold text-leaf-950">DC Central</span> menjadi kanal retail perusahaan di kawasan Citra Raya, Tangerang, dengan pilihan buah segar, durian premium, serta produk olahan durian. Melalui profil ini, kami ingin memperkenalkan kegiatan usaha dan ragam produk yang kami hadirkan.</p>
          </Reveal>

          <Reveal delay={0.28}>
            <ul className="mt-8 space-y-3.5">
              {profilePoints.map((item) => <li key={item} className="flex items-start gap-3 text-sm font-semibold text-leaf-900/80"><span className="mt-0.5 grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-linear-to-br from-gold-300 to-gold-500 text-leaf-950"><Check className="h-3 w-3" strokeWidth={3.5} /></span>{item}</li>)}
            </ul>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-leaf-100 bg-white/80 p-4 shadow-card">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf-100 text-leaf-700"><Leaf className="h-5 w-5" /></span>
                <p className="mt-3 text-sm font-extrabold text-leaf-950">Fokus Produk</p>
                <p className="mt-1 text-xs leading-relaxed text-leaf-900/60">Buah lokal, buah impor, durian, dan produk olahannya.</p>
              </div>
              <div className="rounded-2xl border border-leaf-100 bg-white/80 p-4 shadow-card">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-100 text-gold-700"><Store className="h-5 w-5" /></span>
                <p className="mt-3 text-sm font-extrabold text-leaf-950">Kanal Retail</p>
                <p className="mt-1 text-xs leading-relaxed text-leaf-900/60">DC Central, berlokasi di Citra Raya, Tangerang.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
