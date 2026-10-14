import { useState } from "react";
import {
  Building2,
  Check,
  Copy,
  ExternalLink,
  MapPin,
  Navigation,
} from "lucide-react";
import { ADDRESS, MAPS_EMBED, MAPS_URL } from "../data/site";
import { OpenBadge, Reveal, SectionHeader } from "./ui/primitives";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS.primary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="lokasi" className="relative overflow-hidden py-24 sm:py-28">
      <div className="dots-bg pointer-events-none absolute bottom-20 left-10 h-40 w-40 opacity-50" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* ---------- info card ---------- */}
          <Reveal>
            <div className="flex h-full flex-col rounded-[2.5rem] border border-white/80 bg-white p-8 shadow-soft sm:p-10">
              <SectionHeader
                align="left"
                eyebrow="Lokasi Kanal Retail"
                title={
                  <>
                    Temukan DC Central di{" "}
                    <em className="bg-linear-to-r from-gold-500 to-gold-600 bg-clip-text italic text-transparent">
                      Citra Raya.
                    </em>
                  </>
                }
              />

              <OpenBadge className="mt-6 w-fit" />

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-leaf-100 text-leaf-700">
                    <MapPin className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-leaf-900/45">
                      Alamat DC Central
                    </p>
                    <p className="mt-1 text-[15px] font-bold leading-relaxed text-leaf-950">
                      {ADDRESS.primary}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-100 text-gold-700">
                    <Building2 className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-leaf-900/45">
                      Detail Lokasi
                    </p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-leaf-900/70">
                      {ADDRESS.full}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose-100 text-rose-600">
                    <Navigation className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-leaf-900/45">
                      Patokan
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-relaxed text-leaf-900/80">
                      {ADDRESS.landmark}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-3.5 pt-9">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="shine inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-gold-500 to-gold-400 py-3.5 pl-6 pr-7 text-sm font-extrabold text-leaf-950 shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  <ExternalLink className="h-4.5 w-4.5" />
                  Open in Google Maps
                </a>
                <button
                  onClick={copyAddress}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-leaf-300/70 bg-white px-6 py-3.5 text-sm font-bold text-leaf-800 transition-all duration-300 hover:bg-leaf-50"
                >
                  {copied ? (
                    <Check className="h-4.5 w-4.5 text-leaf-600" />
                  ) : (
                    <Copy className="h-4.5 w-4.5" />
                  )}
                  {copied ? "Tersalin!" : "Salin Alamat"}
                </button>
              </div>
            </div>
          </Reveal>

          {/* ---------- map ---------- */}
          <Reveal delay={0.12}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2.5rem] border-10 border-white shadow-soft">
              <iframe
                title="Lokasi DC Central — Citra Raya, Tangerang"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-18 contrast-[1.02]"
              />
              <div className="glass absolute left-5 top-5 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-card">
                <img
                  src="/Logo.jpg"
                  alt="Logo DC Central"
                  className=" h-10 w-10 rounded-xl "
                ></img>
                <div className="leading-tight">
                  <p className="text-[13px] font-extrabold text-leaf-950">
                    DC Central
                  </p>
                  <p className="text-[11px] font-semibold text-leaf-900/55">
                    Grand Boulevard · Citra Raya
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
