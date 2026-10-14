import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Citrus, MessageCircle, Search, Sparkles } from "lucide-react";
import {
  fruitProducts,
  type FruitOrigin,
  type FruitProduct,
} from "../data/products";
import { orderMessage, waLink } from "../data/site";
import { EASE, Reveal, SectionHeader } from "./ui/primitives";

type Filter = "Semua" | FruitOrigin;
const filterOptions: Filter[] = ["Semua", "Lokal", "Impor"];

/* ------------------------------ fruit card ------------------------------ */

function FruitCard({ p, index }: { p: FruitProduct; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.05, 0.4),
        ease: EASE,
      }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-card"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-850 ease-out group-hover:rotate-1 group-hover:scale-110"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white shadow-card ${
            p.origin === "Lokal" ? "bg-leaf-600/90" : "bg-sky-500/90"
          }`}
        >
          {p.origin}
        </span>
        {/* hover quick action */}
        <div className="absolute inset-x-3 bottom-3 translate-y-16 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={waLink(orderMessage(p.name))}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-leaf-950/85 px-4 py-3 text-xs font-bold text-cream-50 backdrop-blur transition-colors hover:bg-leaf-800"
          >
            <MessageCircle className="h-4 w-4" />
            Pesan via WhatsApp
          </a>
        </div>
        <span
          className={`pointer-events-none absolute inset-0 bg-linear-to-t opacity-0 transition-opacity duration-500 group-hover:opacity-30 ${p.accent}`}
        />
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="font-display text-[17px] font-bold tracking-tight text-leaf-950">
          {p.name}
        </h3>
        <p className="mt-1 line-clamp-2 min-h-8 text-xs leading-relaxed text-leaf-900/55">
          {p.desc}
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-cream-200 pt-3">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-leaf-900/40">
            Harga harian
          </span>
          <a
            href={waLink(orderMessage(p.name))}
            target="_blank"
            rel="noreferrer"
            aria-label={`Tanya harga ${p.name}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-cream-100 text-leaf-700 transition-all duration-300 hover:bg-leaf-600 hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------ main section ------------------------------ */

export default function FruitCatalog() {
  const [query, setQuery] = useState("");
  const [origin, setOrigin] = useState<Filter>("Semua");

  const dayPick = useMemo(() => {
    const day = Math.floor(Date.now() / 86_400_000);
    return fruitProducts[day % fruitProducts.length];
  }, []);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return fruitProducts.filter(
      (p) =>
        (origin === "Semua" || p.origin === origin) &&
        (q === "" ||
          p.name.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q)),
    );
  }, [query, origin]);

  return (
    <section id="katalog" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-40 h-104 w-104 rounded-full bg-[radial-gradient(circle_at_center,rgba(238,216,143,0.4),transparent_65%)] blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            align="left"
            eyebrow="Portofolio Buah"
            title={
              <>
                Pilihan buah lokal
                <br />
                <em className="bg-linear-to-r from-leaf-500 to-leaf-700 bg-clip-text italic text-transparent">
                  dan buah impor.
                </em>
              </>
            }
          />

          {/* controls */}
          <Reveal delay={0.15} className="w-full max-w-md space-y-3.5">
            <label className="glass flex items-center gap-3 rounded-full px-5 py-3.5 shadow-card transition-shadow focus-within:shadow-soft">
              <Search className="h-4.5 w-4.5 shrink-0 text-leaf-700" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari mangga, anggur, strawberry…"
                className="w-full bg-transparent text-sm font-semibold text-leaf-950 outline-none placeholder:text-leaf-900/40"
              />
            </label>
            <div className="flex gap-2">
              {filterOptions.map((f) => (
                <button
                  key={f}
                  onClick={() => setOrigin(f)}
                  className={`relative rounded-full px-5 py-2 text-xs font-bold transition-colors duration-300 ${
                    origin === f
                      ? "text-white"
                      : "bg-white text-leaf-900/60 shadow-card hover:text-leaf-800"
                  }`}
                >
                  {origin === f && (
                    <motion.span
                      layoutId="fruit-filter"
                      className="absolute inset-0 rounded-full bg-linear-to-r from-leaf-600 to-leaf-500"
                      transition={{ duration: 0.4, ease: EASE }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* today's pick */}
        <Reveal delay={0.1}>
          <a
            href={waLink(orderMessage(dayPick.name))}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-gold-300/60 bg-linear-to-r from-gold-50 via-cream-50 to-leaf-50 px-5 py-4 shadow-card transition-all duration-300 hover:shadow-soft"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400 text-leaf-950 shadow-glow transition-transform duration-500 group-hover:rotate-12">
              <Sparkles className="h-5 w-5" />
            </span>
            <p className="flex-1 text-sm text-leaf-900/70">
              <span className="font-extrabold text-leaf-950">
                Pilihan Segar Hari Ini:{" "}
              </span>
              <span className="font-display text-base font-bold text-gold-700">
                {dayPick.name}
              </span>
              <span className="hidden sm:inline"> — {dayPick.desc}</span>
            </p>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-leaf-700 transition-transform duration-300 group-hover:translate-x-1">
              Pesan →
            </span>
          </a>
        </Reveal>

        {/* grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <FruitCard key={p.id} p={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* empty state */}
        <AnimatePresence>
          {list.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mx-auto mt-12 flex max-w-sm flex-col items-center rounded-3xl bg-white p-10 text-center shadow-card"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cream-100 text-gold-600">
                <Citrus className="h-7 w-7" />
              </span>
              <p className="font-display mt-4 text-lg font-bold text-leaf-950">
                Buahnya lagi main petak umpet
              </p>
              <p className="mt-1.5 text-sm text-leaf-900/55">
                Coba kata kunci lain, atau tanya stok langsung ke tim kami.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setOrigin("Semua");
                }}
                className="mt-5 rounded-full bg-leaf-600 px-6 py-2.5 text-xs font-bold text-white transition-transform hover:scale-105"
              >
                Reset Pencarian
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* footnote */}
        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs font-semibold text-leaf-900/45">
            Harga buah mengikuti stok & musim — chat WhatsApp untuk harga paling
            update hari ini.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
