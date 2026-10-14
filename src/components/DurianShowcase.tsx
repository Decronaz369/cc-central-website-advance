import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Crown,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import {
  durianProducts,
  type BadgeTone,
  type DurianCategory,
  type DurianProduct,
} from "../data/products";
import { orderMessage, waLink } from "../data/site";
import { scrollToId } from "../lib/scroll";
import { EASE, Reveal, SectionHeader } from "./ui/primitives";

const badgeTone: Record<BadgeTone, string> = {
  gold: "bg-gold-400 text-leaf-950",
  green: "bg-leaf-600 text-white",
  pink: "bg-rose-400 text-white",
  orange: "bg-orange-400 text-white",
  sky: "bg-sky-400 text-white",
  lime: "bg-lime-300 text-leaf-950",
};

const filters: ("Semua" | DurianCategory)[] = [
  "Semua",
  "Buah Utuh",
  "Frozen",
  "Premium",
  "Olahan",
];

/* ------------------------------ product card ------------------------------ */

function DurianCard({ p, index }: { p: DurianProduct; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.3 } }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: EASE }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-card"
    >
      <div className="shine relative aspect-4/3 overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-leaf-950/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {p.badge && (
          <span
            className={`absolute left-3.5 top-3.5 rounded-full px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] shadow-card ${badgeTone[p.badge.tone]}`}
          >
            {p.badge.label}
          </span>
        )}
        <span className="glass absolute right-3.5 top-3.5 rounded-full px-3 py-1.5 text-[10px] font-bold text-leaf-900/70">
          {p.category}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="font-display text-xl font-bold tracking-tight text-leaf-950">
          {p.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-leaf-900/60">
          {p.desc}
        </p>
        <div className="mt-4 flex items-center justify-end"><a href={waLink(orderMessage(p.name))} target="_blank" rel="noreferrer" aria-label={`Tanyakan ketersediaan ${p.name} via WhatsApp`} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-leaf-300/70 text-leaf-700 transition-all duration-300 hover:border-leaf-600 hover:bg-leaf-600 hover:text-white hover:shadow-glow"><MessageCircle className="h-4.5 w-4.5" /></a></div>
      </div>
    </motion.div>
  );
}

/* ------------------------------ main section ------------------------------ */

export default function DurianShowcase() {
  const [active, setActive] = useState<(typeof filters)[number]>("Semua");
  const featured = durianProducts[0];

  const list = useMemo(
    () =>
      active === "Semua"
        ? durianProducts
        : durianProducts.filter((p) => p.category === active),
    [active],
  );

  return (
    <section
      id="durian"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf7ea_0%,#fdfbf5_38%,#eef6e3_100%)] py-24 sm:py-28"
    >
      {/* decor */}
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full border-[1.5px] border-gold-300/50" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-112 w-md rounded-full bg-[radial-gradient(circle_at_center,rgba(165,204,132,0.35),transparent_65%)] blur-2xl" />
      <div className="dots-bg pointer-events-none absolute left-12 top-24 h-40 w-40 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          tone="gold"
          eyebrow="Portofolio Durian"
          title={
            <>
              Aneka <em className="bg-linear-to-r from-gold-500 to-gold-600 bg-clip-text italic text-transparent">durian.</em>
            </>
          }
          desc="Portofolio durian mencakup pilihan buah utuh, varian premium, produk beku, dan olahan durian. Hubungi tim DC Central untuk informasi ketersediaan terbaru."
        />

        {/* ---------------- featured Monthong spotlight ---------------- */}
        <Reveal delay={0.15}>
          <div className="group mt-14 grid overflow-hidden rounded-[2.5rem] bg-white shadow-soft lg:grid-cols-2">
            {/* image */}
            <div className="relative min-h-80 overflow-hidden bg-linear-to-br from-gold-50 to-cream-100">
              <img
                src={featured.image}
                alt={featured.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1100ms ease-out group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-leaf-950 shadow-glow">
                <Crown className="h-3.5 w-3.5" />
                Best Seller
              </span>
              <span className="glass absolute bottom-5 left-5 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold text-leaf-800">
                <ShieldCheck className="h-3.5 w-3.5 text-leaf-600" />
                Pilihan Durian Premium
              </span>
            </div>

            {/* content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-gold-600">
                Signature · Palu, Sulawesi Tengah
              </p>
              <h3 className="font-display mt-3 text-3xl font-bold tracking-tight text-leaf-950 sm:text-4xl">
                {featured.name}
              </h3>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-leaf-900/65">
                {featured.desc}
              </p>

              {/* taste profile */}
              <div className="mt-7 space-y-3.5">
                {featured.taste?.map((t, i) => (
                  <div key={t.label} className="flex items-center gap-4">
                    <span className="w-24 shrink-0 text-xs font-bold text-leaf-900/60">
                      {t.label}
                    </span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-cream-200">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${t.value}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + i * 0.15,
                          ease: EASE,
                        }}
                        className="h-full rounded-full bg-linear-to-r from-gold-300 to-gold-500"
                      />
                    </div>
                    <span className="w-9 text-right text-xs font-extrabold text-gold-600">
                      {t.value}%
                    </span>
                  </div>
                ))}
              </div>
              {/* cta */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={waLink(orderMessage(featured.name))}
                  target="_blank"
                  rel="noreferrer"
                  className="shine inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-500 to-gold-400 py-3.5 pl-6 pr-7 text-sm font-bold text-leaf-950 shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                  Pesan Monthong
                </a>
                <button
                  onClick={() => scrollToId("#garansi")}
                  className="group text-sm font-bold text-leaf-800 underline decoration-gold-400 decoration-2 underline-offset-4 transition-colors hover:text-gold-700"
                >
                  Lihat jaminan kami{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ---------------- filter ---------------- */}
        <Reveal
          delay={0.1}
          className="mt-16 flex flex-wrap items-center justify-center gap-2.5"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative rounded-full px-5 py-2.5 text-[13px] font-bold transition-colors duration-300 ${
                active === f
                  ? "text-white"
                  : "bg-white text-leaf-900/60 shadow-card hover:text-leaf-800"
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="durian-filter"
                  className="absolute inset-0 rounded-full bg-linear-to-r from-leaf-600 to-leaf-500 shadow-card"
                  transition={{ duration: 0.45, ease: EASE }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </Reveal>

        {/* ---------------- grid ---------------- */}
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <DurianCard key={p.id} p={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
