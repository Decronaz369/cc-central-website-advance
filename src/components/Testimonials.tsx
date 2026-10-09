import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";
import { EASE, Reveal, SectionHeader } from "./ui/primitives";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = testimonials[index];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5600);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fdfbf5_0%,#fbf7ea_55%,#fdfbf5_100%)] py-24 sm:py-28">
      <span className="font-display pointer-events-none absolute left-1/2 top-14 -translate-x-1/2 select-none text-[16rem] font-bold leading-none text-leaf-950/3">
        4,9
      </span>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          tone="gold"
          eyebrow="Kata Mereka"
          title={
            <>
              Cerita segar dari{" "}
              <em className="bg-linear-to-r from-gold-500 to-gold-600 bg-clip-text italic text-transparent">
                pelanggan setia.
              </em>
            </>
          }
        />

        <Reveal delay={0.1}>
          <div
            className="relative mx-auto mt-14 max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white p-8 text-center shadow-soft sm:p-12">
              <span className="absolute right-8 top-8 text-gold-200">
                <Quote className="h-14 w-14 fill-current" />
              </span>

              <div className="relative min-h-[280px] sm:min-h-60">
                <AnimatePresence mode="wait">
                  <motion.figure
                    key={index}
                    initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -26, filter: "blur(6px)" }}
                    transition={{ duration: 0.55, ease: EASE }}
                    className="flex h-full flex-col items-center"
                  >
                    <span className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4.5 w-4.5 fill-gold-400 text-gold-400"
                        />
                      ))}
                    </span>
                    <blockquote className="font-display mx-auto mt-6 max-w-xl text-balance text-xl font-medium italic leading-relaxed text-leaf-900 sm:text-[22px]">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-7 flex items-center gap-3.5">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-full bg-linear-to-br text-sm font-extrabold text-white shadow-card ${t.avatar}`}
                      >
                        {t.initial}
                      </span>
                      <span className="text-left leading-tight">
                        <span className="block text-sm font-extrabold text-leaf-950">
                          {t.name}
                        </span>
                        <span className="block text-[11px] font-semibold text-leaf-900/50">
                          {t.area} · pesan {t.product}
                        </span>
                      </span>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>

              {/* controls */}
              <div className="relative mt-9 flex items-center justify-center gap-5">
                <button
                  onClick={() => go(-1)}
                  aria-label="Testimoni sebelumnya"
                  className="grid h-11 w-11 place-items-center rounded-full border border-leaf-300/70 text-leaf-700 transition-all duration-300 hover:bg-leaf-600 hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Testimoni ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        i === index
                          ? "w-8 bg-gold-500"
                          : "w-2 bg-leaf-200 hover:bg-leaf-300"
                      }`}
                    />
                  ))}
                </span>
                <button
                  onClick={() => go(1)}
                  aria-label="Testimoni berikutnya"
                  className="grid h-11 w-11 place-items-center rounded-full border border-leaf-300/70 text-leaf-700 transition-all duration-300 hover:bg-leaf-600 hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* backdrop decoration */}
            <span className="absolute -bottom-4 left-1/2 -z-10 h-full w-[92%] -translate-x-1/2 rounded-[2.5rem] bg-gold-200/50" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
