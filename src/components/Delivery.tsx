import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CircleCheck,
  Info,
  MapPinned,
  MessageCircle,
  PackageCheck,
  Search,
  Timer,
  Truck,
  Zap,
} from "lucide-react";
import { freeZones } from "../data/content";
import { waLink } from "../data/site";
import { EASE, Reveal, SectionHeader } from "./ui/primitives";

type CheckResult = { query: string; free: boolean } | null;

export default function Delivery() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<CheckResult>(null);

  const check = (e: FormEvent) => {
    e.preventDefault();
    const q = value.trim().toLowerCase();
    if (q.length < 3) return;
    const free = freeZones.some((z) => q.includes(z));
    setResult({ query: value.trim(), free });
  };

  return (
    <section
      id="pengiriman"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(165,204,132,0.35),transparent_65%)] blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Pengiriman & Jangkauan"
          title={
            <>
              Dari etalase kami,
              <br />
              <em className="bg-linear-to-r from-leaf-500 to-leaf-700 bg-clip-text italic text-transparent">
                langsung ke meja Anda.
              </em>
            </>
          }
          desc="Dua cara mudah buah segar sampai ke rumah — gratis untuk tetangga Citra Raya, dan kurir instan transparan untuk area lainnya."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* free delivery card */}
          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-[2.25rem] bg-linear-to-br from-leaf-700 via-leaf-600 to-leaf-500 p-8 text-white shadow-soft sm:p-10">
              <span className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gold-300/30 blur-3xl transition-transform duration-700 group-hover:scale-125" />
              <div className="relative flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                  <Truck className="h-7 w-7" />
                </span>
                <span className="rounded-full bg-gold-400 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-leaf-950 shadow-glow">
                  Rp0 · Gratis
                </span>
              </div>
              <h3 className="font-display relative mt-7 text-2xl font-bold sm:text-3xl">
                Free Ongkir Area Citra Raya
              </h3>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-white/75">
                Seluruh kawasan Citra Raya diantar langsung oleh tim kami
                sendiri — cepat, aman, dan gratis tanpa syarat rumit.
              </p>
              <ul className="relative mt-7 space-y-2.5">
                {[
                  "Diantar di hari yang sama",
                  "Packing higienis & rapi",
                  "Dipilihkan kualitas terbaik",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2.5 text-sm font-semibold text-white/85"
                  >
                    <CircleCheck className="h-4.5 w-4.5 text-gold-300" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* instant courier card */}
          <Reveal delay={0.12}>
            <div className="group relative h-full overflow-hidden rounded-[2.25rem] border border-white/80 bg-white p-8 shadow-card sm:p-10">
              <span className="absolute -left-14 -bottom-14 h-48 w-48 rounded-full bg-gold-200/60 blur-3xl" />
              <div className="relative flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-100 text-gold-700">
                  <Zap className="h-7 w-7" />
                </span>
                <span className="rounded-full bg-leaf-50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-leaf-700 border border-leaf-200">
                  Real-Time
                </span>
              </div>
              <h3 className="font-display relative mt-7 text-2xl font-bold text-leaf-950 sm:text-3xl">
                Luar Citra Raya? Kurir Instan.
              </h3>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-leaf-900/60">
                Pesanan dikirim via kurir instan dengan ongkir yang dihitung
                real-time berdasarkan jarak sebenarnya — terintegrasi gaya
                modern dengan jaringan seperti GrabExpress &amp; Biteship.
                Transparan, tanpa markup.
              </p>
              <ul className="relative mt-7 space-y-2.5">
                {[
                  { icon: Timer, t: "Tiba sekitar 1–3 jam" },
                  { icon: MapPinned, t: "Biaya sesuai jarak, apa adanya" },
                  { icon: PackageCheck, t: "Durian dikemas anti-bocor aroma" },
                ].map(({ icon: Icon, t }) => (
                  <li
                    key={t}
                    className="flex items-center gap-2.5 text-sm font-semibold text-leaf-900/75"
                  >
                    <Icon className="h-4.5 w-4.5 text-gold-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* area checker */}
        <Reveal delay={0.15}>
          <div className="glass relative mt-8 overflow-hidden rounded-[2.25rem] p-7 shadow-soft sm:p-10">
            <span className="font-display absolute -right-6 -top-8 select-none text-[7rem] font-bold leading-none text-leaf-100/70">
              CR
            </span>
            <div className="relative flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-md">
                <h3 className="font-display text-2xl font-bold text-leaf-950">
                  Cek zona pengirimanmu
                </h3>
                <p className="mt-2 text-sm text-leaf-900/60">
                  Ketik nama area atau cluster tempat tinggalmu untuk cek apakah
                  termasuk zona gratis ongkir.
                </p>
              </div>
              <form onSubmit={check} className="flex w-full max-w-md gap-2.5">
                <label className="flex flex-1 items-center gap-2.5 rounded-full border border-cream-300 bg-white px-5 py-3.5 transition-shadow focus-within:shadow-card">
                  <Search className="h-4.5 w-4.5 shrink-0 text-leaf-700" />
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Mis. Citra Raya, Sevilla, Cikupa…"
                    className="w-full bg-transparent text-sm font-semibold text-leaf-950 outline-none placeholder:text-leaf-900/40"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-linear-to-r from-leaf-600 to-leaf-500 px-6 py-3.5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                >
                  Cek
                </button>
              </form>
            </div>

            <AnimatePresence mode="wait">
              {result && (
                <motion.div
                  key={result.query + result.free}
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className={`relative mt-6 flex flex-wrap items-center gap-4 rounded-2xl border p-5 ${
                    result.free
                      ? "border-leaf-300/70 bg-leaf-50"
                      : "border-gold-300/70 bg-gold-50"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                      result.free
                        ? "bg-leaf-600 text-white"
                        : "bg-gold-400 text-leaf-950"
                    }`}
                  >
                    {result.free ? (
                      <Truck className="h-5.5 w-5.5" />
                    ) : (
                      <Info className="h-5.5 w-5.5" />
                    )}
                  </span>
                  <p className="flex-1 text-sm leading-relaxed text-leaf-900/75">
                    {result.free ? (
                      <>
                        <span className="font-extrabold text-leaf-800">
                          Yeay! “{result.query}” masuk zona gratis ongkir.
                        </span>{" "}
                        Pesananmu kami antar langsung tanpa biaya kirim.
                      </>
                    ) : (
                      <>
                        <span className="font-extrabold text-gold-800">
                          “{result.query}” di luar zona gratis,
                        </span>{" "}
                        tapi tenang — kami kirim via kurir instan dengan ongkir
                        transparan sesuai jarak.
                      </>
                    )}
                  </p>
                  <a
                    href={waLink(
                      result.free
                        ? `Halo DC Central! Saya di area ${result.query} (zona gratis ongkir). Saya mau pesan dan tanya stok hari ini ya.`
                        : `Halo DC Central! Saya di area ${result.query}. Boleh tolong cek ongkir kurir instannya ya? Terima kasih.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-leaf-950 px-5 py-2.5 text-xs font-bold text-cream-50 transition-transform hover:scale-105"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {result.free ? "Mulai Pesan" : "Cek Ongkir"}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
