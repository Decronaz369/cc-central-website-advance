import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./ui/primitives";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1250);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ y: "-100%", transition: { duration: 0.65, ease: EASE } }}
          className="fixed inset-0 z-200 flex items-center justify-center overflow-hidden bg-cream-50"
        >
          <span className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-leaf-100 blur-3xl" />
          <span className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold-100 blur-3xl" />

          <div className="relative flex flex-col items-center px-6">
            <motion.img
              initial={{ scale: 0, rotate: -24, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 170, damping: 14 }}
              src="/Logo.jpg"
              alt="Logo DC Central"
              className=" h-20 w-20 place-items-center rounded-[1.6rem] shadow-soft"
            />

            <div className="mt-6 overflow-hidden">
              <motion.p
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
                className="font-display text-4xl font-bold tracking-tight text-leaf-950"
              >
                DC Central
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-3 text-[11px] font-bold uppercase tracking-[0.32em] text-gold-600"
            >
              Distributor Buah Lokal & Impor
            </motion.p>

            <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-cream-200">
              <motion.div
                initial={{ x: "-101%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
                className="h-full w-full rounded-full bg-linear-to-r from-leaf-500 via-leaf-400 to-gold-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
