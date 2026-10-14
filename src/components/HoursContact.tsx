import { AtSign, Clock, MessageCircle, Phone, Quote } from "lucide-react";
import { INSTAGRAM, HOURS, WA_DISPLAY, waLink } from "../data/site";
import { OpenBadge, Reveal } from "./ui/primitives";

const ORDER_MESSAGE =
  "Halo PT. Central Buah Segar / DC Central. Saya ingin bertanya mengenai informasi produk dan layanan perusahaan.";

export default function HoursContact() {
  return (
    <section id="kontak" className="relative overflow-hidden py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-linear-to-br from-gold-100 via-cream-100 to-leaf-100 p-8 shadow-soft sm:p-12 lg:p-14">
            <span className="font-display absolute -right-8 top-0 select-none text-[10rem] font-bold leading-none text-leaf-950/4.5">
              24/7
            </span>
            <span className="dots-bg absolute bottom-10 right-14 h-28 w-28 opacity-60" />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-8">
              {/* ------- hours ------- */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-leaf-300/60 bg-white/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-leaf-700">
                  <Clock className="h-3.5 w-3.5" />
                  Kontak & Informasi
                </span>
                <h2 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-tight text-leaf-950">
                  Mari terhubung
                  <br />
                  dengan perusahaan.
                </h2>

                <div className="mt-9 space-y-4">
                  <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-white/80 p-5 shadow-card backdrop-blur">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-leaf-500 to-leaf-700 text-white">
                      <Clock className="h-5.5 w-5.5" />
                    </span>
                    <div className="min-w-40 flex-1">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-leaf-900/45">
                        Kanal Retail DC Central
                      </p>
                      <p className="mt-0.5 text-lg font-extrabold text-leaf-950">
                        {HOURS.label}
                      </p>
                      <p className="text-xs font-medium text-leaf-900/50">
                        {HOURS.note}
                      </p>
                    </div>
                    <OpenBadge />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-white/80 p-5 shadow-card backdrop-blur">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-gold-400 to-gold-600 text-leaf-950">
                      <MessageCircle className="h-5.5 w-5.5" />
                    </span>
                    <div className="min-w-40 flex-1">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-leaf-900/45">
                        Informasi Produk &amp; Layanan
                      </p>
                      <p className="mt-0.5 text-lg font-extrabold text-leaf-950">
                        Hubungi Tim Kami
                      </p>
                      <p className="text-xs font-medium italic leading-snug text-leaf-900/55">
                        Untuk informasi produk, ketersediaan, atau pertanyaan
                        mengenai layanan perusahaan.
                      </p>
                    </div>
                    <span className="rounded-full bg-gold-100 px-3.5 py-1.5 text-xs font-bold text-gold-800 border border-gold-300/60">
                      WhatsApp
                    </span>
                  </div>
                </div>
              </div>

              {/* ------- contact card ------- */}
              <div className="glass flex flex-col justify-center rounded-[2.25rem] p-7 shadow-card sm:p-9">
                <Quote className="h-6 w-6 rotate-180 text-gold-500" />
                <p className="font-display mt-3 text-xl font-semibold italic leading-relaxed text-leaf-900">
                  “Informasi yang jelas adalah awal dari hubungan kerja sama yang baik.”
                </p>

                <p className="mt-7 text-[11px] font-extrabold uppercase tracking-[0.2em] text-leaf-900/45">
                  Nomor WhatsApp
                </p>
                <a
                  href={waLink(ORDER_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display mt-1.5 text-[9vw] font-bold tracking-tight text-leaf-950 transition-colors hover:text-leaf-700 sm:text-4xl xl:text-[2.6rem]"
                >
                  {WA_DISPLAY}
                </a>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={waLink(ORDER_MESSAGE)}
                    target="_blank"
                    rel="noreferrer"
                    className="shine inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-leaf-600 to-leaf-500 px-6 py-4 text-sm font-extrabold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat WhatsApp
                  </a>
                  <a
                    href={`tel:+${"6285150962310"}`}
                    className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border border-leaf-300/70 bg-white/80 px-6 py-4 text-sm font-extrabold text-leaf-800 transition-all duration-300 hover:bg-white hover:shadow-card"
                  >
                    <Phone className="h-5 w-5" />
                    Telepon Toko
                  </a>
                </div>

                <a
                  href={INSTAGRAM.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-pink-300/60 bg-pink-50 px-5 py-2.5 text-xs font-extrabold text-pink-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <AtSign className="h-4 w-4" />
                  {INSTAGRAM.handle}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
