import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { GENERIC_MESSAGE, waLink } from "../data/site";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={waLink(GENERIC_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi PT. Central Buah Segar / DC Central"
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.3, type: "spring", stiffness: 220, damping: 16 }}
      className="group fixed bottom-6 right-6 z-50"
    >
      {/* Smooth Pulsing Rings */}
      <motion.span
        animate={{
          scale: [1, 1.45],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] will-change-transform"
      />
      <motion.span
        animate={{
          scale: [1, 1.65],
          opacity: [0, 0.25, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: [0.215, 0.61, 0.355, 1],
          delay: 0.6,
        }}
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] will-change-transform"
      />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full top-1/2 mr-4 hidden -translate-y-1/2 translate-x-2 items-center gap-2 whitespace-nowrap rounded-2xl bg-leaf-950 px-4 py-2.5 text-xs font-bold text-cream-50 opacity-0 shadow-soft transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:flex">
        Informasi perusahaan & produk
        <span className="ml-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#25D366]" />
      </span>

      {/* Button */}
      <span className="relative grid h-15 w-15 place-items-center rounded-full bg-linear-to-br from-[#3fe07c] to-[#1da851] text-white shadow-[0_16px_38px_-8px_rgba(37,211,102,0.65)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <MessageCircle className="h-7 w-7" />
      </span>

      {/* Notification Dot */}
      <span className="absolute right-0.5 top-0.5 grid h-5 w-5 place-items-center rounded-full border-2 border-cream-50 bg-gold-400 text-[9px] font-extrabold text-leaf-950">
        1
      </span>
    </motion.a>
  );
}
