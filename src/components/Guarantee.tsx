import { MessageCircle, ShieldCheck } from "lucide-react";
import { guaranteeOutcomes, guaranteeTerms } from "../data/content";
import { waLink } from "../data/site";
import { Reveal, SectionHeader } from "./ui/primitives";

export default function Guarantee() {
  return (
    <section id="garansi" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full border-[1.5px] border-leaf-300/40" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Belanja Tanpa Was-was"
          title={
            <>
              Jaminan durian 100%.{" "}
              <em className="bg-linear-to-r from-leaf-500 to-leaf-700 bg-clip-text italic text-transparent">
                Titik.
              </em>
            </>
          }
          desc="Kalau durian yang Anda terima busuk, asam, atau hambar — Anda tidak menanggung risikonya. Kami yang bertanggung jawab penuh."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* ---------- big guarantee card ---------- */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-linear-to-br from-leaf-800 via-leaf-700 to-leaf-800 p-8 text-cream-50 shadow-soft sm:p-11">
              <span className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/25 blur-3xl" />
              <span className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-leaf-500/30 blur-3xl" />
              <span className="font-display absolute -bottom-10 right-2 select-none text-[11rem] font-bold leading-none text-white/5">
                100%
              </span>

              <span className="relative grid h-16 w-16 place-items-center rounded-3xl bg-linear-to-br from-gold-300 to-gold-500 text-leaf-950 shadow-glow">
                <ShieldCheck className="h-8 w-8" />
              </span>
              <h3 className="font-display relative mt-7 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Durian zonk? Bukan urusan Anda.
              </h3>
              <p className="relative mt-4 max-w-md text-[15px] leading-relaxed text-cream-100/80">
                Setiap durian kami cek sebelum dikirim. Tapi kalau ada yang
                lolos dan ternyata tidak sesuai standar, pilih salah satu:
              </p>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
                {guaranteeOutcomes.map((o) => (
                  <div
                    key={o.title}
                    className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur transition-colors duration-300 hover:bg-white/15"
                  >
                    <o.icon className="h-5.5 w-5.5 text-gold-300" />
                    <p className="mt-3 text-[15px] font-extrabold">{o.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-cream-100/65">
                      {o.desc}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={waLink(
                  "Halo DC Central! Saya ingin mengajukan klaim garansi durian. Nomor invoice saya: ",
                )}
                target="_blank"
                rel="noreferrer"
                className="relative mt-8 inline-flex items-center gap-2.5 rounded-full bg-cream-50 px-7 py-3.5 text-sm font-extrabold text-leaf-800 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                Ajukan Klaim Garansi
              </a>
            </div>
          </Reveal>

          {/* ---------- S&K timeline ---------- */}
          <div>
            <Reveal delay={0.1}>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px flex-1 bg-leaf-900/10" />
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-leaf-900/50">
                  Syarat &amp; Ketentuan Klaim
                </p>
                <span className="h-px flex-1 bg-leaf-900/10" />
              </div>
            </Reveal>

            <div className="relative">
              <span className="absolute bottom-8 left-[26px] top-6 w-px bg-linear-to-b from-gold-400 via-leaf-300 to-transparent" />
              <div className="space-y-5">
                {guaranteeTerms.map((t, i) => (
                  <Reveal key={t.title} delay={0.12 + i * 0.1}>
                    <div className="group relative flex gap-5">
                      <span className="relative z-10 grid h-[52px] w-[52px] shrink-0 place-items-center rounded-2xl bg-white font-display text-sm font-bold text-gold-700 shadow-card ring-1 ring-cream-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-leaf-950">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 rounded-2xl border border-white/70 bg-white p-5 shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-soft sm:p-6">
                        <div className="flex items-center gap-2.5">
                          <t.icon className="h-4.5 w-4.5 text-leaf-600" />
                          <h4 className="text-[15px] font-extrabold text-leaf-950">
                            {t.title}
                          </h4>
                        </div>
                        <p className="mt-2 text-[13px] leading-relaxed text-leaf-900/60">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.4}>
              <div className="glass mt-8 flex items-start gap-3.5 rounded-2xl p-5 shadow-card">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-leaf-600" />
                <p className="text-[13px] leading-relaxed text-leaf-900/70">
                  <span className="font-extrabold text-leaf-950">
                    Proses klaim cepat:
                  </span>{" "}
                  tim garansi kami biasanya merespons dalam hitungan menit pada
                  jam operasional. Garansi berlaku untuk seluruh varian durian,
                  baik buah utuh maupun frozen box.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
