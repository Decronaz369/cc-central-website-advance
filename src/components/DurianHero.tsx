import { motion, useReducedMotion } from "framer-motion";

/** Animated collage of fruit imagery for the DC Central hero. */

const BOB = {
  duration: 3.6,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const orbs = [
  { className: "left-[9%] top-[26%] h-4 w-4 bg-[#f291b1]", dur: 4.2, amp: 14 },
  { className: "right-[8%] top-[58%] h-5 w-5 bg-[#f2994a]", dur: 5, amp: 18 },
  { className: "right-[16%] top-[20%] h-3 w-3 bg-[#a5cc84]", dur: 3.6, amp: 12 },
  { className: "left-[14%] bottom-[24%] h-3 w-3 bg-[#eed88f]", dur: 4.6, amp: 14 },
];

const sparkles = [
  [12, 18], [24, 8], [38, 14], [62, 7], [78, 16], [90, 28], [6, 44], [93, 50],
  [16, 70], [30, 82], [70, 80], [84, 72], [50, 5], [48, 92],
] as const;

export default function DurianHero() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0">
      {/* orbiting rings (tilted, like the original 3D torus rings) */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 perspective-[900px]"
      >
        <div className="h-full w-full transform-[rotateX(66deg)_rotateY(-8deg)] transform-3d">
          <motion.div
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="relative h-full w-full rounded-full border-2 border-gold-400/70"
          >
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-200 shadow-glow" />
          </motion.div>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 perspective-[900px]"
      >
        <div className="h-full w-full transform-[rotateX(74deg)_rotateY(14deg)_rotateZ(28deg)] transform-3d">
          <motion.div
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="h-full w-full rounded-full border border-leaf-300/80"
          />
        </div>
      </div>

      {/* ground shadow — shrinks as the durian rises */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { scaleX: [1, 0.86, 1], opacity: [0.34, 0.2, 0.34] }}
        transition={BOB}
        className="absolute bottom-[8%] left-1/2 h-[5%] w-[44%] -translate-x-1/2 rounded-[50%] bg-[#5a4416] blur-xl"
      />

      {/* assorted fruit collage */}
      <div className="absolute inset-[8%]">
        <motion.img src="/images/fruits/mangga.png" alt="Mangga segar" draggable={false} animate={reduce ? undefined : { y: [0, -12, 0], rotate: [-7, -3, -7] }} transition={BOB} className="absolute left-[7%] top-[22%] z-10 h-[37%] w-[38%] rounded-[2rem] object-cover shadow-[0_22px_32px_rgba(42,64,33,0.25)]" />
        <motion.img src="/images/fruits/jeruk-impor.png" alt="Jeruk segar" draggable={false} animate={reduce ? undefined : { y: [0, 13, 0], rotate: [6, 2, 6] }} transition={{...BOB, delay: 0.35}} className="absolute right-[7%] top-[12%] z-20 h-[36%] w-[37%] rounded-[2rem] object-cover shadow-[0_22px_32px_rgba(42,64,33,0.25)]" />
        <motion.img src="/images/durian-monthong.png" alt="Durian premium" draggable={false} animate={reduce ? undefined : { y: [0, -16, 0], rotate: [2, -2, 2] }} transition={{...BOB, delay: 0.2}} className="absolute left-[27%] top-[34%] z-30 h-[42%] w-[45%] rounded-[2rem] object-cover shadow-[0_28px_35px_rgba(42,64,33,0.3)]" />
        <motion.img src="/images/fruits/anggur.png" alt="Anggur segar" draggable={false} animate={reduce ? undefined : { y: [0, 10, 0], rotate: [-5, 0, -5] }} transition={{...BOB, delay: 0.5}} className="absolute bottom-[5%] left-[6%] z-20 h-[29%] w-[34%] rounded-[1.7rem] object-cover shadow-[0_22px_32px_rgba(42,64,33,0.25)]" />
        <motion.img src="/images/fruits/semangka.png" alt="Semangka segar" draggable={false} animate={reduce ? undefined : { y: [0, -9, 0], rotate: [5, 1, 5] }} transition={{...BOB, delay: 0.4}} className="absolute bottom-[1%] right-[5%] z-20 h-[30%] w-[33%] rounded-[1.7rem] object-cover shadow-[0_22px_32px_rgba(42,64,33,0.25)]" />
      </div>

      {/* floating orbs */}
      {orbs.map((o, i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={reduce ? undefined : { y: [0, -o.amp, 0] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          className={`absolute rounded-full shadow-card ${o.className}`}
        />
      ))}

      {/* sparkles */}
      {sparkles.map(([x, y], i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={reduce ? { opacity: 0.6 } : { opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6] }}
          transition={{ duration: 2.6 + (i % 4) * 0.5, repeat: Infinity, delay: (i * 0.37) % 2.4 }}
          style={{ left: `${x}%`, top: `${y}%` }}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#eec25c]"
        />
      ))}
    </div>
  );
}
