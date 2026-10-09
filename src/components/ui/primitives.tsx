import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useOpenStatus } from "../../hooks/useOpenStatus";

export const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------------- scroll reveal wrapper ---------------- */

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.78, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- section header ---------------- */

export function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
  tone = "green",
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  align?: "center" | "left";
  tone?: "green" | "gold";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] ${
            tone === "gold"
              ? "border-gold-300/70 bg-gold-50 text-gold-700"
              : "border-leaf-300/60 bg-leaf-50 text-leaf-700"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              tone === "gold" ? "bg-gold-500" : "bg-leaf-500"
            }`}
          />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-leaf-950 sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-leaf-900/65">{desc}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- animated counter ---------------- */

export function Counter({
  value,
  suffix = "",
  duration = 1.9,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------------- 3D tilt card ---------------- */

export function TiltCard({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 20, mass: 0.4 });
  const sry = useSpring(ry, { stiffness: 160, damping: 20, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const b = ref.current?.getBoundingClientRect();
        if (!b) return;
        ry.set(((e.clientX - b.left) / b.width - 0.5) * max * 2);
        rx.set(-((e.clientY - b.top) / b.height - 0.5) * max * 2);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{
        rotateX: srx,
        rotateY: sry,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- live open / closed badge ---------------- */

export function OpenBadge({ className = "" }: { className?: string }) {
  const { open, closesIn } = useOpenStatus();
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold ${
        open
          ? "bg-leaf-100 text-leaf-700 border border-leaf-300/60"
          : "bg-cream-200 text-leaf-900/70 border border-cream-300"
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf-500 opacity-60" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            open ? "bg-leaf-600" : "bg-leaf-900/40"
          }`}
        />
      </span>
      {open ? closesIn ?? "Buka Sekarang" : "Tutup · Buka 09.00 WIB"}
    </span>
  );
}
