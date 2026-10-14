import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero visual: an aesthetic composition of featured local and imported fruits.
 * Durian serves as the central showcase, surrounded by an assortment of fresh fruits.
 */

const BOB = {
  duration: 4.2,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const orbs = [
  { className: "left-[6%] top-[20%] h-4 w-4 bg-[#f291b1]", dur: 4.2, amp: 14 },
  { className: "right-[6%] top-[55%] h-5 w-5 bg-[#f2994a]", dur: 5, amp: 18 },
  {
    className: "right-[12%] top-[15%] h-3 w-3 bg-[#a5cc84]",
    dur: 3.6,
    amp: 12,
  },
  {
    className: "left-[10%] bottom-[20%] h-3 w-3 bg-[#eed88f]",
    dur: 4.6,
    amp: 14,
  },
];

const sparkles = [
  [12, 18],
  [24, 8],
  [38, 14],
  [62, 7],
  [78, 16],
  [90, 28],
  [6, 44],
  [93, 50],
  [16, 70],
  [30, 82],
  [70, 80],
  [84, 72],
  [50, 5],
  [48, 92],
] as const;

// Composition configuration for all available fruit assets
const fruits = [
  {
    src: "/Durian.png",
    alt: "Durian Premium",
    className:
      "z-20 w-[52%] max-w-[320px] sm:max-w-[420px] left-[28%] top-[16%]",
    bobAmp: -16,
    baseRotate: -2,
    rotRange: [-4, 3],
    scaleAmp: [1, 1.02, 1],
    duration: 4.5,
    delay: 0,
    shadow: "drop-shadow-[0_25px_30px_rgba(90,68,22,0.32)]",
  },
  {
    src: "/semangka.png",
    alt: "Semangka Segar",
    className: "z-10 w-[30%] max-w-[190px] left-[2%] bottom-[32%]",
    bobAmp: -14,
    baseRotate: -8,
    rotRange: [-12, -2],
    scaleAmp: [1, 1.03, 1],
    duration: 5.2,
    delay: 0.3,
    shadow: "drop-shadow-[0_18px_22px_rgba(0,0,0,0.22)]",
  },
  {
    src: "/nanas.png",
    alt: "Nanas",
    className: "z-10 w-[24%] max-w-[150px] left-[-12%] top-[24%]",
    bobAmp: -18,
    baseRotate: 12,
    rotRange: [6, 18],
    scaleAmp: [0.98, 1.02, 0.98],
    duration: 4.8,
    delay: 0.6,
    shadow: "drop-shadow-[0_18px_20px_rgba(0,0,0,0.2)]",
  },
  {
    src: "/melon.png",
    alt: "Melon Segar",
    className: "z-10 w-[28%] max-w-[170px] right-[2%] bottom-[28%]",
    bobAmp: -12,
    baseRotate: 10,
    rotRange: [4, 15],
    scaleAmp: [1, 1.025, 1],
    duration: 5.6,
    delay: 0.9,
    shadow: "drop-shadow-[0_16px_20px_rgba(0,0,0,0.2)]",
  },
  {
    src: "/anggur.png",
    alt: "Anggur Segar",
    className: "z-15 w-[22%] max-w-[130px] left-[14%] top-[24%]",
    bobAmp: -15,
    baseRotate: -6,
    rotRange: [-10, 2],
    scaleAmp: [0.97, 1.03, 0.97],
    duration: 4.4,
    delay: 0.4,
    shadow: "drop-shadow-[0_14px_18px_rgba(0,0,0,0.2)]",
  },
  {
    src: "/mangga.png",
    alt: "Mangga Harum",
    className: "z-15 w-[20%] max-w-[125px] left-[28%] bottom-[18%]",
    bobAmp: -10,
    baseRotate: -15,
    rotRange: [-20, -8],
    scaleAmp: [1, 1.04, 1],
    duration: 4.9,
    delay: 0.7,
    shadow: "drop-shadow-[0_12px_16px_rgba(0,0,0,0.18)]",
  },
  {
    src: "/manggis.png",
    alt: "Manggis",
    className: "z-15 w-[18%] max-w-[110px] right-[28%] bottom-[18%]",
    bobAmp: -12,
    baseRotate: 14,
    rotRange: [8, 20],
    scaleAmp: [0.98, 1.02, 0.98],
    duration: 4.1,
    delay: 0.2,
    shadow: "drop-shadow-[0_12px_16px_rgba(0,0,0,0.18)]",
  },
];

export default function DurianHero() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0">
      {/* Orbiting rings */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 perspective-[900px]"
      >
        <div className="h-full w-full transform-[rotateX(66deg)_rotateY(-8deg)] transform-3d">
          <motion.div
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="relative h-full w-full rounded-full border-2 border-gold-400/70"
          >
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-200 shadow-glow" />
          </motion.div>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[96%] w-[96%] -translate-x-1/2 -translate-y-1/2 perspective-[900px]"
      >
        <div className="h-full w-full transform-[rotateX(74deg)_rotateY(14deg)_rotateZ(28deg)] transform-3d">
          <motion.div
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="h-full w-full rounded-full border border-leaf-300/80"
          />
        </div>
      </div>

      {/* Ground shadow */}
      <motion.div
        aria-hidden
        animate={
          reduce
            ? undefined
            : { scaleX: [1, 0.88, 1], opacity: [0.38, 0.22, 0.38] }
        }
        transition={BOB}
        className="absolute bottom-[6%] left-1/2 h-[6%] w-[60%] -translate-x-1/2 rounded-[50%] bg-[#5a4416] blur-2xl"
      />

      {/* Fruit Arrangement Cluster */}
      <div className="relative h-full w-full">
        {fruits.map((fruit, idx) => (
          <motion.img
            key={idx}
            src={fruit.src}
            alt={fruit.alt}
            draggable={false}
            fetchPriority={idx === 0 ? "high" : "auto"}
            animate={
              reduce
                ? { rotate: fruit.baseRotate }
                : {
                    y: [0, fruit.bobAmp, 0],
                    rotate: [
                      fruit.rotRange[0],
                      fruit.rotRange[1],
                      fruit.rotRange[0],
                    ],
                    scale: fruit.scaleAmp,
                  }
            }
            transition={{
              duration: fruit.duration,
              delay: fruit.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute object-contain select-none ${fruit.className} ${fruit.shadow}`}
          />
        ))}
      </div>

      {/* Floating orbs */}
      {orbs.map((o, i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={reduce ? undefined : { y: [0, -o.amp, 0] }}
          transition={{
            duration: o.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
          className={`absolute rounded-full shadow-card ${o.className}`}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map(([x, y], i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={
            reduce
              ? { opacity: 0.6 }
              : { opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6] }
          }
          transition={{
            duration: 2.6 + (i % 4) * 0.5,
            repeat: Infinity,
            delay: (i * 0.37) % 2.4,
          }}
          style={{ left: `${x}%`, top: `${y}%` }}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#eec25c]"
        />
      ))}
    </div>
  );
}
