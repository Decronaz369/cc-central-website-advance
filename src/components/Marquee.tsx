import { Sparkles } from "lucide-react";
import { marqueeItems } from "../data/content";

function Row({ items, className }: { items: string[]; className: string }) {
  return (
    <div className={`flex w-max items-center ${className}`}>
      {[...items, ...items].map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex items-center gap-6 whitespace-nowrap px-6 text-[13px] font-extrabold uppercase tracking-[0.16em]"
        >
          <Sparkles className="h-4 w-4 opacity-70" />
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-hidden
      className="relative -my-2 select-none overflow-hidden py-10"
    >
      <div className="-mx-6 rotate-[-1.15deg]">
        <div className="border-y border-leaf-800/40 bg-linear-to-r from-leaf-700 via-leaf-600 to-leaf-700 py-3.5 text-cream-50 shadow-card">
          <Row items={marqueeItems} className="animate-marquee" />
        </div>
      </div>
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2">
        <div className="-mx-6 rotate-[1.1deg]">
          <div className="bg-gold-200/80 py-3.5 text-gold-800/70">
            <Row
              items={[...marqueeItems].reverse()}
              className="animate-marquee-slow opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
