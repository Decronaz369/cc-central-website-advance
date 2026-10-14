import { Compass, HeartHandshake, Leaf, Target } from "lucide-react";
import { Reveal, SectionHeader } from "./ui/primitives";

const commitments = [
  {
    icon: Leaf,
    title: "Menjaga Kesegaran",
    text: "Mengutamakan pemilihan produk dan perhatian pada kondisi buah sebelum ditawarkan kepada pelanggan.",
    tone: "from-leaf-500 to-leaf-700",
  },
  {
    icon: Target,
    title: "Menyediakan Pilihan",
    text: "Menghadirkan pilihan buah lokal, buah impor, durian premium, dan durian beku dalam satu portofolio.",
    tone: "from-gold-400 to-gold-600",
  },
  {
    icon: HeartHandshake,
    title: "Membangun Kepercayaan",
    text: "Mengupayakan informasi produk yang jelas dan layanan yang responsif melalui kanal perusahaan.",
    tone: "from-emerald-500 to-leaf-700",
  },
];

export default function CompanyDirection() {
  return (
    <section id="visi-misi" className="relative overflow-hidden bg-[linear-gradient(180deg,#fdfbf5_0%,#f3f8ec_52%,#fdfbf5_100%)] py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-leaf-200/45 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Arah & Komitmen" title={<>Bertumbuh bersama <em className="bg-linear-to-r from-leaf-500 to-leaf-700 bg-clip-text italic text-transparent">produk yang berkualitas.</em></>} desc="Berpegang pada perhatian terhadap kualitas produk, keragaman pilihan, dan pelayanan yang dapat diandalkan." />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="relative h-full overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-card sm:p-9">
              <span className="absolute -right-2 -top-8 font-display text-[8rem] font-bold leading-none text-leaf-950/[0.035]">01</span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf-100 text-leaf-700"><Compass className="h-6 w-6" /></span>
              <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.2em] text-leaf-600">Visi Perusahaan</p>
              <h3 className="font-display mt-3 text-2xl font-bold leading-tight text-leaf-950 sm:text-3xl">Menjadi mitra pilihan dalam penyediaan buah lokal dan impor.</h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-leaf-900/65">Dengan fokus pada kualitas produk, keberagaman pilihan, dan layanan yang dapat diandalkan.</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="relative h-full overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-card sm:p-9">
              <span className="absolute -right-2 -top-8 font-display text-[8rem] font-bold leading-none text-gold-900/[0.04]">02</span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-100 text-gold-700"><Target className="h-6 w-6" /></span>
              <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-700">Misi Perusahaan</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-leaf-900/70">
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />Menghadirkan ragam buah lokal dan impor sesuai kebutuhan pasar.</li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />Menjaga perhatian pada kesegaran dan pemilihan produk.</li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />Memberikan informasi serta pelayanan yang jelas kepada pelanggan.</li>
              </ul>
            </article>
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="mb-7 flex items-center gap-3"><span className="h-px flex-1 bg-leaf-900/10" /><span className="inline-flex items-center gap-2 rounded-full border border-leaf-300/60 bg-white/70 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-leaf-700"><HeartHandshake className="h-3.5 w-3.5" />Komitmen Kami</span><span className="h-px flex-1 bg-leaf-900/10" /></div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {commitments.map((item, index) => <Reveal key={item.title} delay={index * 0.08}>
              <article className="group h-full rounded-3xl border border-white/80 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft sm:p-7">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br ${item.tone} text-white shadow-card transition-transform duration-500 group-hover:-rotate-6`}><item.icon className="h-5.5 w-5.5" /></span>
                <h3 className="font-display mt-5 text-xl font-bold text-leaf-950">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-leaf-900/60">{item.text}</p>
              </article>
            </Reveal>)}
          </div>
        </div>
      </div>
    </section>
  );
}
