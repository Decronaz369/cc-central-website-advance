import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Plus } from "lucide-react";
import { faqs } from "../data/content";
import { GENERIC_MESSAGE, waLink } from "../data/site";
import { EASE, Reveal, SectionHeader } from "./ui/primitives";

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
        open
          ? "border-gold-300/80 bg-white shadow-soft"
          : "border-white/80 bg-white/70 shadow-card hover:border-leaf-300/70"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className={`text-[15px] font-extrabold transition-colors ${open ? "text-leaf-800" : "text-leaf-950"}`}
        >
          {q}
        </span>
        <motion.span
          animate={{
            rotate: open ? 45 : 0,
            backgroundColor: open ? "#dda633" : "#f4eedd",
          }}
          transition={{ duration: 0.35, ease: EASE }}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
        >
          <Plus
            className={`h-4.5 w-4.5 transition-colors ${open ? "text-leaf-950" : "text-leaf-800"}`}
          />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-leaf-900/65">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(165,204,132,0.3),transparent_65%)] blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.25fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            align="left"
            eyebrow="Ada Pertanyaan?"
            title={
              <>
                Yang paling sering
                <br />
                <em className="bg-linear-to-r from-leaf-500 to-leaf-700 bg-clip-text italic text-transparent">
                  ditanyakan.
                </em>
              </>
            }
            desc="Semua yang perlu Anda tahu sebelum memesan — dari garansi durian sampai area pengiriman."
          />
          <Reveal delay={0.2}>
            <a
              href={waLink(GENERIC_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-leaf-950 px-7 py-3.5 text-sm font-bold text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
            >
              <MessageCircle className="h-4.5 w-4.5 text-gold-300" />
              Masih bingung? Chat kami
            </a>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.07}>
              <FaqItem
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
