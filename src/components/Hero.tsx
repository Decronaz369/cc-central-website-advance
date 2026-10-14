import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Leaf,
  MessageCircle,
  PackageCheck,
  Store,
} from "lucide-react";
import { waLink } from "../data/site";
import { scrollToId } from "../lib/scroll";
import { EASE } from "./ui/primitives";
import DurianHero from "./DurianHero";
import type { ReactNode } from "react";

const line = {
  hidden: { y: "112%", opacity: 0 },
  show: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.95, delay: 1.35 + i * 0.13, ease: EASE },
  }),
};

function FloatChip({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.84, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.75, ease: EASE }}
      className={`absolute z-10 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5.5,
          delay: delay * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="glass rounded-2xl shadow-soft"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 0.4], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 0.5], [0, -72]);

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-14 pt-32 sm:pt-[148px]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ y: yBg }}
          className="absolute -right-40 -top-32 h-144 w-xl rounded-full bg-[radial-gradient(circle_at_center,rgba(238,216,143,0.6),transparent_65%)] blur-2xl"
        />
        <motion.div
          animate={{ x: [0, 34, 0], y: [0, -24, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-52 top-1/3 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_center,rgba(165,204,132,0.5),transparent_65%)] blur-2xl"
        />
        <motion.div
          animate={{ x: [0, -28, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 h-88 w-88 rounded-full bg-[radial-gradient(circle_at_center,rgba(242,145,177,0.22),transparent_65%)] blur-2xl"
        />
      </div>

      <motion.span
        style={{ y: yText }}
        aria-hidden
        className="font-display text-outline pointer-events-none absolute -bottom-8 text-center w-full select-none text-[19vw] font-bold leading-none tracking-tight lg:text-[13rem]"
      >
        CENTRAL
      </motion.span>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-12 lg:gap-6 lg:px-8">
        <div className="relative z-10 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25, ease: EASE }}
            className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-leaf-300/60 bg-white/75 py-2 pl-2.5 pr-4 text-xs font-bold text-leaf-800 shadow-card backdrop-blur"
          >
            <span className="shrink-0 rounded-full bg-leaf-600 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white">
              Profil
            </span>
            PT. Central Buah Segar
          </motion.div>

          <h1 className="font-display mt-6 text-[12.5vw] font-semibold leading-[1.03] tracking-tight text-leaf-950 sm:text-6xl lg:text-[4.2rem]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                custom={0}
                variants={line}
                initial="hidden"
                animate="show"
                className="block"
              >
                Mitra penyedia
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                custom={1}
                variants={line}
                initial="hidden"
                animate="show"
                className="block"
              >
                buah lokal &amp;
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                custom={2}
                variants={line}
                initial="hidden"
                animate="show"
                className="block"
              >
                <em className="bg-linear-to-r from-gold-500 via-gold-400 to-gold-600 bg-clip-text italic text-transparent">
                  impor berkualitas.
                </em>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.9, ease: EASE }}
            className="mt-6 max-w-lg text-base leading-relaxed text-leaf-900/70 sm:text-lg"
          >
            PT. Central Buah Segar bergerak dalam distribusi buah lokal dan
            impor. Melalui DC Central, kami juga menghadirkan pilihan buah segar
            dan durian premium bagi pelanggan di Citra Raya, Tangerang.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 2.05, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <button
              onClick={() => scrollToId("#tentang")}
              className="shine cursor-pointer group inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-leaf-600 to-leaf-500 py-4 pl-7 pr-6 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <Building2 className="h-4.5 w-4.5" />
              Profil Perusahaan
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href={waLink(
                "Halo PT. Central Buah Segar / DC Central. Saya ingin memperoleh informasi mengenai produk dan layanan perusahaan.",
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-leaf-300/80 bg-white/75 py-4 pl-6 pr-6 text-sm font-bold text-leaf-800 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card"
            >
              <MessageCircle className="h-4.5 w-4.5 text-leaf-600" />
              Hubungi Kami
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 2.2, ease: EASE }}
            className="mt-10 grid max-w-xl grid-cols-1 gap-3 border-t border-leaf-900/10 pt-6 sm:grid-cols-3"
          >
            <div className="flex items-center gap-2.5 text-xs font-bold text-leaf-800">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-leaf-100 text-leaf-700">
                <Leaf className="h-4.5 w-4.5" />
              </span>
              <span>
                Buah lokal
                <br />
                &amp; impor
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-leaf-800">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-100 text-gold-700">
                <PackageCheck className="h-4.5 w-4.5" />
              </span>
              <span>
                Pemilihan
                <br />
                produk cermat
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-leaf-800">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-cream-200 text-leaf-800">
                <Store className="h-4.5 w-4.5" />
              </span>
              <span>
                Kanal retail
                <br />
                DC Central
              </span>
            </div>
          </motion.div>
        </div>

        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.05, delay: 1.55, ease: EASE }}
            className="relative h-[420px] sm:h-[540px] lg:h-[610px]"
          >
            <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(238,216,143,0.45),transparent_62%)] blur-2xl" />
            <div className="absolute inset-6 animate-spin-slower rounded-full border border-dashed border-gold-400/45" />
            <div className="absolute inset-16 rounded-full border border-leaf-300/35 sm:inset-20" />
            <DurianHero />

            <FloatChip delay={2.0} className="left-0 top-16 sm:left-5">
              <div className="flex items-center gap-2.5 px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-leaf-100 text-leaf-700">
                  <Leaf className="h-4.5 w-4.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-extrabold text-leaf-950">
                    Buah Lokal &amp; Impor
                  </p>
                  <p className="text-[11px] font-medium text-leaf-900/55">
                    Ragam pilihan produk
                  </p>
                </div>
              </div>
            </FloatChip>
            <FloatChip delay={2.2} className="mr-16 top-2  sm:right-3">
              <div className="flex items-center gap-3 px-3.5 py-3 pr-5">
                <img
                  src="/images/about-store.png"
                  alt="Gerai DC Central"
                  className="h-12 w-12 rounded-xl object-cover"
                  loading="lazy"
                />
                <div className="leading-tight">
                  <p className="text-[13px] font-extrabold text-leaf-950">
                    DC Central
                  </p>
                  <p className="text-[11px] font-medium text-leaf-900/55">
                    Kanal retail · Citra Raya
                  </p>
                </div>
              </div>
            </FloatChip>
            <FloatChip
              delay={2.35}
              className="bottom-16 left-0 sm:bottom-14 sm:left-3"
            >
              <div className="flex items-center gap-2.5 px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-100 text-gold-700">
                  <PackageCheck className="h-4.5 w-4.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-extrabold text-leaf-950">
                    Kurasi Produk
                  </p>
                  <p className="text-[11px] font-medium text-leaf-900/55">
                    Mengutamakan kesegaran
                  </p>
                </div>
              </div>
            </FloatChip>
            <FloatChip delay={2.5} className="bottom-4 right-1 sm:right-8">
              <div className="flex items-center gap-2.5 px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-cream-200 text-leaf-800">
                  <Building2 className="h-4.5 w-4.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-extrabold text-leaf-950">
                    PT. Central Buah Segar
                  </p>
                  <p className="text-[11px] font-medium text-leaf-900/55">
                    Distributor buah lokal &amp; impor
                  </p>
                </div>
              </div>
            </FloatChip>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.9, duration: 0.8 }}
        onClick={() => scrollToId("#tentang")}
        className="mx-auto mt-26 bottom-2 relative hidden w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-leaf-900/45 transition-colors hover:text-leaf-700 sm:flex"
      >
        Kenali perusahaan <ArrowDownRight className="h-4 w-4" />
      </motion.button>
    </section>
  );
}
