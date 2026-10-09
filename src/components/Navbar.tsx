import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { BRAND, GENERIC_MESSAGE, NAV_LINKS, waLink } from "../data/site";
import { scrollToId } from "../lib/scroll";
import { EASE, OpenBadge } from "./ui/primitives";

const drawer = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { duration: 0.55, ease: EASE } },
  exit: { x: "100%", transition: { duration: 0.4, ease: EASE } },
};

const linkItem = {
  hidden: { opacity: 0, x: 32 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.18 + i * 0.06, duration: 0.5, ease: EASE },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (hash: string) => {
    setOpen(false);
    scrollToId(hash);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.35, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-card"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* logo */}
          <button
            onClick={() => go("#home")}
            className="group flex items-center gap-3"
            aria-label={BRAND.name}
          >
            <img
              src="/Logo.jpg"
              alt={BRAND.name}
              className=" h-11 w-11 overflow-hidden rounded-2xl shadow-card transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
            />
            <span className="text-left leading-none">
              <span className="font-display block text-[19px] font-bold tracking-tight text-leaf-950">
                DC Central
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-gold-600">
                Durian Castle
              </span>
            </span>
          </button>

          {/* desktop links */}
          <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(`#${l.id}`)}
                className="nav-link text-[13.5px] font-semibold text-leaf-950/75"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink(GENERIC_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="shine hidden items-center gap-2 rounded-full bg-linear-to-r from-leaf-600 to-leaf-500 py-2.5 pl-4 pr-5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              Order via WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              className="glass grid h-11 w-11 place-items-center rounded-2xl text-leaf-900 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* scroll progress */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 h-[2.5px] w-full origin-left bg-linear-to-r from-leaf-500 via-gold-400 to-gold-500"
        />
      </motion.header>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-60 bg-leaf-950/30 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              variants={drawer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="fixed right-0 top-0 z-70 flex h-full w-[86%] max-w-md flex-col border-l border-white/60 bg-cream-50/92 p-7 backdrop-blur-2xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/Logo.jpg"
                    alt={BRAND.name}
                    className="h-10 w-10 rounded-xl"
                  >
                  </img>
                  <span className="font-display text-lg font-bold">
                    DC Central
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Tutup menu"
                  className="glass grid h-10 w-10 place-items-center rounded-xl text-leaf-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1.5">
                {NAV_LINKS.map((l, i) => (
                  <motion.button
                    key={l.id}
                    custom={i}
                    variants={linkItem}
                    initial="hidden"
                    animate="show"
                    onClick={() => go(`#${l.id}`)}
                    className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-[17px] font-bold text-leaf-950 transition-colors hover:bg-leaf-50"
                  >
                    {l.label}
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400 opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.button>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <OpenBadge />
                <a
                  href={waLink(GENERIC_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-leaf-600 to-leaf-500 px-5 py-4 text-sm font-bold text-white shadow-card"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                  Order via WhatsApp — 24 Jam
                </a>
                <p className="text-center text-xs text-leaf-900/50">
                  Toko buka 09.00–22.00 WIB · {BRAND.area}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
