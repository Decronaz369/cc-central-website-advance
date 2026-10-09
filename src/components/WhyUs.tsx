import { whyUs } from "../data/content";
import { Reveal, SectionHeader } from "./ui/primitives";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fdfbf5_0%,#f3f8ec_50%,#fdfbf5_100%)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Kenapa DC Central"
          title={
            <>
              Alasan warga Citra Raya
              <br />
              <em className="bg-linear-to-r from-leaf-500 to-leaf-700 bg-clip-text italic text-transparent">
                selalu kembali.
              </em>
            </>
          }
          desc="Kami memperlakukan setiap pesanan seperti pesanan untuk keluarga sendiri — itulah standar yang tidak pernah kami tawar."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.09}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                <span className="font-display absolute right-6 top-5 text-5xl font-bold text-leaf-100 transition-colors duration-500 group-hover:text-gold-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`relative grid h-13 w-13 place-items-center rounded-2xl bg-linear-to-br p-3.5 text-white shadow-card transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${item.tile}`}
                >
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display relative mt-6 text-xl font-bold tracking-tight text-leaf-950">
                  {item.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-leaf-900/60">
                  {item.desc}
                </p>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-leaf-500 to-gold-400 transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
