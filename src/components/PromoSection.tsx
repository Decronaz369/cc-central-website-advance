import { useEffect, useState } from "react";
import { CalendarDays, MessageCircle, RefreshCw } from "lucide-react";
import { fetchActivePromos, type Promo, type PromoTheme } from "../data/promos";
import { waLink } from "../data/site";
import { Reveal, SectionHeader } from "./ui/primitives";

const themeStyles: Record<
  PromoTheme,
  { card: string; text: string; sub: string }
> = {
  gold: {
    card: "from-gold-400 via-gold-300 to-gold-200",
    text: "text-leaf-950",
    sub: "text-leaf-950/65",
  },
  green: {
    card: "from-leaf-600 via-leaf-500 to-leaf-400",
    text: "text-white",
    sub: "text-white/75",
  },
  pink: {
    card: "from-rose-400 via-pink-300 to-rose-200",
    text: "text-leaf-950",
    sub: "text-leaf-950/65",
  },
  orange: {
    card: "from-orange-400 via-amber-300 to-gold-200",
    text: "text-leaf-950",
    sub: "text-leaf-950/65",
  },
};

function SkeletonCard() {
  return (
    <div className="h-[300px] animate-pulse rounded-4xl bg-white p-8 shadow-card">
      <div className="h-7 w-28 rounded-full bg-cream-200" />
      <div className="mt-6 h-7 w-4/5 rounded-lg bg-cream-200" />
      <div className="mt-3 h-7 w-3/5 rounded-lg bg-cream-200" />
      <div className="mt-6 h-4 w-full rounded bg-cream-100" />
      <div className="mt-2 h-4 w-2/3 rounded bg-cream-100" />
      <div className="mt-8 h-11 w-40 rounded-full bg-cream-200" />
    </div>
  );
}

function PromoCard({ p }: { p: Promo }) {
  const t = themeStyles[p.theme];
  return (
    <Reveal>
      <div
        className={`group relative flex h-full flex-col overflow-hidden rounded-4xl bg-linear-to-br p-7 shadow-soft transition-transform duration-500 hover:-translate-y-2 hover:-rotate-[0.6deg] sm:p-8 ${t.card}`}
      >
        <span className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/25 blur-xl transition-transform duration-700 group-hover:scale-125" />
        <span className="dots-bg absolute bottom-6 right-6 h-24 w-24 opacity-20" />

        <span className="relative inline-flex w-fit items-center rounded-full bg-white/90 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-leaf-950 shadow-card">
          {p.badge}
        </span>

        <h3
          className={`font-display relative mt-5 text-[26px] font-bold leading-tight ${t.text}`}
        >
          {p.title}
        </h3>
        <p className={`relative mt-3 flex-1 text-sm leading-relaxed ${t.sub}`}>
          {p.description}
        </p>

        <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3">
          <span
            className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide ${t.sub}`}
          >
            <CalendarDays className="h-3.5 w-3.5" />
            {p.validity}
          </span>
          <a
            href={waLink(
              `Halo DC Central! Saya mau klaim promo *${p.title}*. Terima kasih.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-leaf-950 px-5 py-2.5 text-xs font-bold text-cream-50 transition-all duration-300 hover:scale-105 hover:shadow-card"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            {p.cta}
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function PromoSection() {
  const [promos, setPromos] = useState<Promo[] | null>(null);

  useEffect(() => {
    let alive = true;
    fetchActivePromos().then((data) => {
      if (alive) setPromos(data);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section id="promo" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-40 top-10 h-104 w-104 rounded-full bg-[radial-gradient(circle_at_center,rgba(242,145,177,0.2),transparent_65%)] blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Promo Aktif Saat Ini"
          title={
            <>
              Penawaran segar,{" "}
              <em className="bg-linear-to-r from-gold-500 to-gold-600 bg-clip-text italic text-transparent">
                diperbarui berkala.
              </em>
            </>
          }
          desc="Promo di halaman ini dikelola secara dinamis dan bisa berubah kapan saja — klaim sebelum kehabisan."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {promos === null ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            promos.map((p) => <PromoCard key={p.id} p={p} />)
          )}
        </div>

        <Reveal delay={0.15}>
          <div className="glass mx-auto mt-10 flex w-fit max-w-full items-center gap-3 rounded-full px-6 py-3.5 shadow-card">
            <RefreshCw className="h-4 w-4 animate-spin-slower text-leaf-600" />
            <p className="text-xs font-semibold text-leaf-900/65">
              Ditampilkan langsung dari{" "}
              <span className="font-extrabold text-leaf-800">
                DC Promo Engine
              </span>{" "}
              — promo baru bisa muncul kapan saja.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
