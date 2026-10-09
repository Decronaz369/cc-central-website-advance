import { Suspense, lazy } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Leaf,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { waLink } from "../data/site";
import { scrollToId } from "../lib/scroll";
import { EASE } from "./ui/primitives";

const DurianScene = lazy(() => import("./three/DurianScene"));

const line = {
  hidden: { y: "112%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.95, delay: 1.6 + i * 0.13, ease: EASE },
  }),
};

function FloatChip({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: EASE }}
      className={`absolute z-10 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5.5,
          delay: delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="glass shadow-soft rounded-2xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 0.4], [0, 140]);
  const yText = useTransform(scrollYProgress, [0, 0.5], [0, -90]);

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-14 pt-32 sm:pt-[148px]"
    >
      {/* soft gradient blobs */}
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
          className="absolute bottom-0 right-1/4 h-88 w-88 rounded-full bg-[radial-gradient(circle_at_center,rgba(242,145,177,0.28),transparent_65%)] blur-2xl"
        />
      </div>

      {/* giant outline word */}
      <motion.span
        style={{ y: yText }}
        aria-hidden
        className="font-display text-outline pointer-events-none absolute -bottom-8 left-0 select-none text-[21vw] font-bold leading-none tracking-tight lg:text-[15rem]"
      >
        DURIAN
      </motion.span>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-12 lg:gap-6 lg:px-8">
        {/* ---------------- copy ---------------- */}
        <div className="relative z-10 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5, ease: EASE }}
            className="inline-flex items-center gap-2.5 rounded-full border border-leaf-300/60 bg-white/70 py-2 pl-2.5 pr-5 text-xs font-bold text-leaf-800 shadow-card backdrop-blur"
          >
            <span className="rounded-full bg-leaf-600 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white">
              Baru
            </span>
            Bagian dari @duriancastle.id · Citra Raya, Tangerang
          </motion.div>

          <h1 className="font-display mt-6 text-[13.5vw] font-semibold leading-[1.02] tracking-tight text-leaf-950 sm:text-6xl lg:text-[4.6rem]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                custom={0}
                variants={line}
                initial="hidden"
                animate="show"
                className="block"
              >
                Buah Segar Premium
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
                &amp; Spesialis{" "}
                <em className="bg-linear-to-r from-gold-500 via-gold-400 to-gold-600 bg-clip-text italic text-transparent">
                  Durian
                </em>
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
                Terbaik Citra Raya.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.05, ease: EASE }}
            className="mt-6 max-w-lg text-base leading-relaxed text-leaf-900/70 sm:text-lg"
          >
            DC Central menghadirkan buah impor &amp; lokal pilihan, durian
            premium bergaransi 100%, dan layanan pesan-antar 24 jam — segar dari
            kurasi pagi sampai ke depan pintu Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToId("#katalog")}
              className="shine group inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-leaf-600 to-leaf-500 py-4 pl-7 pr-6 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <ShoppingBag className="h-4.5 w-4.5 transition-transform duration-500 group-hover:-rotate-12" />
              Belanja Buah Segar
            </button>
            <a
              href={waLink(
                "Halo DC Central! Saya mau pesan durian. Mohon rekomendasi & info stok hari ini ya.",
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-leaf-300/80 bg-white/70 py-4 pl-7 pr-6 text-sm font-bold text-leaf-800 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card"
            >
              <MessageCircle className="h-4.5 w-4.5 text-leaf-600" />
              Pesan Durian
              <span className="text-gold-600 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          {/* social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.35, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <div className="flex items-center">
              {[
                "from-leaf-400 to-leaf-600",
                "from-gold-400 to-gold-600",
                "from-orange-400 to-rose-400",
                "from-pink-400 to-fuchsia-500",
              ].map((g, i) => (
                <span
                  key={g}
                  className={`grid h-9 w-9 place-items-center rounded-full bg-linear-to-br text-[10px] font-extrabold text-white ring-2 ring-cream-50 ${g} ${i > 0 ? "-ml-3" : ""}`}
                >
                  {["R", "B", "D", "A"][i]}
                </span>
              ))}
              <div className="ml-3 leading-tight">
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-gold-400 text-gold-400"
                    />
                  ))}
                  <span className="ml-1.5 text-xs font-extrabold text-leaf-950">
                    4,9/5
                  </span>
                </span>
                <span className="text-[11px] font-medium text-leaf-900/55">
                  dipercaya pelanggan Citra Raya
                </span>
              </div>
            </div>
            <span className="hidden h-8 w-px bg-leaf-900/10 sm:block" />
            <div className="flex items-center gap-2 text-xs font-bold text-leaf-800">
              <ShieldCheck className="h-4.5 w-4.5 text-leaf-600" />
              100% Garansi Durian
            </div>
          </motion.div>
        </div>

        {/* ---------------- 3D visual ---------------- */}
        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 1.85, ease: EASE }}
            className="relative h-[430px] sm:h-[540px] lg:h-[610px]"
          >
            {/* glow + rings */}
            <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(238,216,143,0.45),transparent_62%)] blur-2xl" />
            <div className="absolute inset-6 animate-spin-slower rounded-full border border-dashed border-gold-400/45" />
            <div className="absolute inset-16 rounded-full border border-leaf-300/35 sm:inset-20" />

            <Suspense fallback={<div className="absolute inset-0" />}>
              <DurianScene />
            </Suspense>

            {/* floating chips */}
            <FloatChip delay={2.3} className="left-2 top-8 sm:left-6">
              <div className="flex items-center gap-2.5 px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-leaf-100 text-leaf-700">
                  <Leaf className="h-4.5 w-4.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-extrabold text-leaf-950">
                    Segar Hari Ini
                  </p>
                  <p className="text-[11px] font-medium text-leaf-900/55">
                    disortir setiap pagi
                  </p>
                </div>
              </div>
            </FloatChip>

            <FloatChip delay={2.5} className="right-0 top-16 sm:right-4">
              <div className="flex items-center gap-3 px-3.5 py-3 pr-5">
                <img
                  src="/images/durian-monthong.png"
                  alt="Durian Monthong Palu"
                  className="h-12 w-12 rounded-xl object-cover"
                  loading="lazy"
                />
                <div className="leading-tight">
                  <p className="text-[13px] font-extrabold text-leaf-950">
                    Monthong Palu
                  </p>
                  <p className="text-[11px] font-extrabold text-gold-600">
                    Rp79.900/kg
                  </p>
                </div>
              </div>
            </FloatChip>

            <FloatChip
              delay={2.7}
              className="bottom-20 left-0 sm:bottom-16 sm:left-4"
            >
              <div className="flex items-center gap-2.5 px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-100 text-gold-700">
                  <Truck className="h-4.5 w-4.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-extrabold text-leaf-950">
                    Gratis Ongkir
                  </p>
                  <p className="text-[11px] font-medium text-leaf-900/55">
                    seluruh area Citra Raya
                  </p>
                </div>
              </div>
            </FloatChip>

            <FloatChip delay={2.9} className="bottom-6 right-2 sm:right-10">
              <div className="flex items-center gap-2.5 px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-rose-100 text-rose-600">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[3.4vw] font-extrabold text-leaf-950 sm:text-[13px]">
                    Garansi 100%
                  </p>
                  <p className="text-[11px] font-medium text-leaf-900/55">
                    ganti baru / refund
                  </p>
                </div>
              </div>
            </FloatChip>
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="mx-auto mt-10 hidden w-fit flex-col items-center gap-2 sm:flex"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-leaf-900/25 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-gold-500"
          />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-leaf-900/45">
          Scroll ke bawah
        </span>
      </motion.div>
    </section>
  );
}
