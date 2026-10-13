import { Check, MapPin } from "lucide-react";
import { aboutChecklist, aboutStats } from "../data/content";
import { Counter, Reveal, SectionHeader } from "./ui/primitives";

export default function About() {
  return (
    <section id="tentang" className="relative overflow-hidden py-24 sm:py-28">
      <div className="dots-bg pointer-events-none absolute right-10 top-16 h-44 w-44 opacity-60" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* -------- visual composition -------- */}
        <Reveal className="relative">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-4xl bg-gold-200/70" />
            <img
              src="/images/about-store.png"
              alt="Suasana butik buah DC Central"
              className="relative z-10 h-[420px] w-[86%] rounded-[2.5rem] object-cover shadow-soft sm:h-[500px] object-[100%_50%]"
              loading="lazy"
            />
            <img
              src="/images/monthong-parigi.png"
              alt="Daging durian Montong Palu Parigi"
              className="absolute -bottom-8 right-0 z-20 w-[46%] rotate-3 rounded-[1.75rem] border-[6px] border-cream-50 object-cover shadow-soft transition-transform duration-700 hover:rotate-1 hover:scale-105"
              loading="lazy"
            />
            <div className="glass absolute -left-3 top-10 z-20 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-card sm:left-6">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-100 text-gold-700">
                <MapPin className="h-4.5 w-4.5" />
              </span>
              <div className="leading-tight">
                <p className="text-[12px] font-extrabold text-leaf-950">
                  Toko Kami
                </p>
                <p className="text-[11px] font-medium text-leaf-900/55">
                  Grand Boulevard, Citra Raya
                </p>
              </div>
            </div>
            <div className="absolute -right-2 top-6 z-0 h-24 w-24 rounded-full bg-leaf-200/70 blur-xl" />
          </div>
        </Reveal>

        {/* -------- copy -------- */}
        <div>
          <SectionHeader
            align="left"
            eyebrow="Kenali Kami Lebih Dekat"
            title={
              <>
                Butik buah segar dengan{" "}
                <em className="bg-linear-to-r from-gold-500 to-gold-600 bg-clip-text italic text-transparent">
                  cita rasa premium
                </em>
                , sehangat tetangga.
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-leaf-900/70">
              <span className="font-bold text-leaf-950">DC Central</span> adalah
              toko buah segar berkualitas di kawasan Citra Raya, Tangerang, yang
              dikelola oleh{" "}
              <span className="font-bold text-leaf-950">
                PT. Central Buah Segar
              </span>{" "}
              — distributor buah lokal dan impor — bersama{" "}
              <span className="font-bold text-leaf-950">@duriancastle.id</span>.
              Kami percaya buah terbaik lahir dari kurasi yang teliti — setiap
              mangga, melon, anggur, hingga durian premium kami pilih satu per
              satu setiap pagi.
            </p>
            <p className="mt-4 text-base leading-relaxed text-leaf-900/70">
              Dari buah impor kualitas ekspor sampai durian specialist yang
              bergaransi 100%, semua bisa Anda nikmati dengan mudah: mampir ke
              toko, atau pesan lewat WhatsApp dan kami antar sampai depan pintu.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {aboutChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-semibold text-leaf-900/80"
                >
                  <span className="mt-0.5 grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-linear-to-br from-gold-300 to-gold-500 text-leaf-950">
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-3">
              {aboutStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-2xl bg-white p-4 shadow-card ${i % 2 === 1 ? "sm:translate-y-3" : ""}`}
                >
                  <p className="font-display text-3xl font-bold tracking-tight text-leaf-700">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold leading-snug text-leaf-900/55">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
