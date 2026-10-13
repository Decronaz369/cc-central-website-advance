import { ArrowUp, AtSign, Clock, MapPin, MessageCircle } from "lucide-react";
import { ADDRESS, BRAND, HOURS, NAV_LINKS, WA_DISPLAY, waLink } from "../data/site";
import { scrollToId } from "../lib/scroll";

const portfolioLinks = [
  { label: "Portofolio Buah", target: "#portofolio" },
  { label: "Portofolio Durian", target: "#durian" },
  { label: "Katalog Buah", target: "#katalog" },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden rounded-t-[3rem] bg-linear-to-b from-leaf-900 to-leaf-950 text-cream-100">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-leaf-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/Logo.jpg" alt="Logo DC Central" className="h-12 w-12 rounded-2xl shadow-glow" />
              <span className="leading-none">
                <span className="font-display block text-xl font-bold text-cream-50 sm:text-xl">PT. Central Buah Segar</span>
                <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-[0.17em] text-gold-300">Distributor Buah Lokal &amp; Impor</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-100/60">PT. Central Buah Segar bergerak dalam distribusi buah lokal dan impor. DC Central merupakan kanal retail di kawasan Citra Raya, Tangerang.</p>
            <div className="mt-7 flex gap-3">
              <a href="https://instagram.com/duriancastle.id" target="_blank" rel="noreferrer" aria-label="Instagram @duriancastle.id" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream-100/70 transition-all duration-300 hover:border-gold-300 hover:bg-gold-400 hover:text-leaf-950"><AtSign className="h-4.5 w-4.5" /></a>
              <a href={waLink("Halo PT. Central Buah Segar / DC Central. Saya ingin bertanya mengenai informasi produk dan layanan perusahaan.")} target="_blank" rel="noreferrer" aria-label="WhatsApp PT. Central Buah Segar" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream-100/70 transition-all duration-300 hover:border-gold-300 hover:bg-gold-400 hover:text-leaf-950"><MessageCircle className="h-4.5 w-4.5" /></a>
              <button onClick={() => scrollToId("#lokasi")} aria-label="Lokasi DC Central" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream-100/70 transition-all duration-300 hover:border-gold-300 hover:bg-gold-400 hover:text-leaf-950"><MapPin className="h-4.5 w-4.5" /></button>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-gold-300/80">Profil</h4>
            <ul className="mt-5 space-y-3">{NAV_LINKS.map((link) => <li key={link.id}><button onClick={() => scrollToId(`#${link.id}`)} className="text-sm font-semibold text-cream-100/60 transition-all duration-300 hover:pl-1.5 hover:text-gold-300">{link.label}</button></li>)}</ul>
          </div>

          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-gold-300/80">Portofolio</h4>
            <ul className="mt-5 space-y-3">{portfolioLinks.map((link) => <li key={link.target}><button onClick={() => scrollToId(link.target)} className="text-sm font-semibold text-cream-100/60 transition-all duration-300 hover:pl-1.5 hover:text-gold-300">{link.label}</button></li>)}</ul>
          </div>

          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-gold-300/80">Kontak &amp; Lokasi</h4>
            <ul className="mt-5 space-y-4 text-sm text-cream-100/60">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-300" /><span className="leading-relaxed">{ADDRESS.primary}<span className="mt-1 block text-xs text-cream-100/40">Lokasi kanal retail DC Central</span></span></li>
              <li><a href={waLink("Halo PT. Central Buah Segar / DC Central. Saya ingin bertanya mengenai informasi produk dan layanan perusahaan.")} target="_blank" rel="noreferrer" className="flex gap-3 font-semibold text-cream-100/80 transition-colors hover:text-gold-300"><MessageCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-300" />{WA_DISPLAY}</a></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-300" />Jam retail {HOURS.label}, setiap hari</li>
            </ul>
            <a href={waLink("Halo PT. Central Buah Segar. Saya ingin memperoleh informasi mengenai perusahaan dan portofolio produk.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-400 to-gold-500 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-leaf-950 shadow-glow transition-all duration-300 hover:-translate-y-0.5"><MessageCircle className="h-4 w-4" />Hubungi Kami</a>
          </div>
        </div>

        <div aria-hidden className="font-display pointer-events-none mt-14 select-none text-center text-[12vw] font-bold leading-[0.85] text-white/[0.045] lg:text-[8rem]">CENTRAL BUAH SEGAR</div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">
          <p className="text-xs text-cream-100/45">© {new Date().getFullYear()} PT. Central Buah Segar. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-5"><p className="text-xs font-semibold text-gold-300/70">Distributor Buah Lokal &amp; Impor</p><button onClick={() => scrollToId("#home")} aria-label="Kembali ke atas" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream-100/70 transition-all duration-300 hover:border-gold-300 hover:bg-gold-400 hover:text-leaf-950"><ArrowUp className="h-4.5 w-4.5" /></button></div>
        </div>
      </div>
    </footer>
  );
}
