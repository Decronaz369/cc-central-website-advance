/* ------------------------------------------------------------------ */
/*  Durian Specialist lineup                                            */
/* ------------------------------------------------------------------ */

export type BadgeTone = "gold" | "green" | "pink" | "orange" | "sky" | "lime";

export type DurianCategory = "Buah Utuh" | "Frozen" | "Premium" | "Olahan";

export interface DurianProduct {
  id: string;
  name: string;
  desc: string;
  image: string;
  badge?: { label: string; tone: BadgeTone };
  category: DurianCategory;
  priceLabel: string;
  priceNote?: string;
  /** Extended info used by the featured spotlight card */
  prices?: { label: string; value: string }[];
  taste?: { label: string; value: number }[];
}

export const durianProducts: DurianProduct[] = [
  {
    id: "monthong-palu",
    name: "Durian Monthong Palu",
    desc: "Primadona meja makan: daging super tebal berwarna kuning keemasan, creamy, manis legit dengan ujung pahit halus yang elegan.",
    image: "/images/durian-monthong.png",
    badge: { label: "Best Seller", tone: "gold" },
    category: "Buah Utuh",
    priceLabel: "Rp79.900",
    priceNote: "per kg · buah utuh ditimbang",
    prices: [
      { label: "Buah Utuh Ditimbang", value: "Rp79.900/kg" },
      { label: "Frozen Premium Box 500g", value: "Rp85.000" },
    ],
    taste: [
      { label: "Manis", value: 92 },
      { label: "Creamy", value: 96 },
      { label: "Aroma Lembut", value: 68 },
    ],
  },
  {
    id: "frozen-box",
    name: "Frozen Premium Box 500g",
    desc: "Daging Monthong pilihan dikemas higienis 500 gram. Praktis, awet, dan selalu siap jadi stok favorit di rumah.",
    image: "/images/durian-frozen-box.png",
    badge: { label: "Frozen", tone: "sky" },
    category: "Frozen",
    priceLabel: "Rp85.000",
    priceNote: "per box · isi 500 gram",
  },
  {
    id: "musang-king",
    name: "Musang King",
    desc: "Sang legenda asal Malaysia: daging kuning pekat, tekstur seperti custard, rasa manis-pahit yang dalam dan kompleks.",
    image: "/images/musang-king.png",
    badge: { label: "Premium", tone: "green" },
    category: "Premium",
    priceLabel: "Tanya Hari Ini",
    priceNote: "stok premium musiman",
  },
  {
    id: "blackthorn",
    name: "Blackthorn",
    desc: "Varian langka kelas kolektor: daging oranye kemerahan, lumer seperti butter, dengan aroma khas yang memikat.",
    image: "/images/blackthorn.png",
    badge: { label: "Rare", tone: "pink" },
    category: "Premium",
    priceLabel: "Tanya Hari Ini",
    priceNote: "stok sangat terbatas",
  },
  {
    id: "montong-parigi",
    name: "Montong Palu Parigi",
    desc: "Legenda dari Parigi Moutong: daging tebal, legit tanpa pahit, favorit dari penikmat pemula sampai kolektor.",
    image: "/images/monthong-parigi2.png",
    category: "Buah Utuh",
    priceLabel: "Ditimbang Utuh",
    priceNote: "harga harian per kg",
  },
  {
    id: "frozen-musangking", name: "Frozen Musang King",
    desc: "Daging durian Musang King pilihan dalam bentuk beku.",
    image: "/images/durian-frozen-box.png", badge: { label: "Frozen", tone: "sky" },
    category: "Frozen", priceLabel: "",
  },
  {
    id: "frozen-bawor", name: "Frozen Bawor",
    desc: "Pilihan daging durian Bawor beku untuk dinikmati kapan saja.",
    image: "/images/durian-monthong.png", category: "Frozen", priceLabel: "",
  },
  {
    id: "frozen-medan", name: "Frozen Medan",
    desc: "Durian Medan dalam bentuk beku, praktis untuk disimpan.",
    image: "/images/monthong-parigi2.png", category: "Frozen", priceLabel: "",
  },
  {
    id: "frozen-blackthorn", name: "Frozen Blackthorn",
    desc: "Varian Blackthorn premium dalam bentuk beku.",
    image: "/images/blackthorn.png", badge: { label: "Frozen", tone: "sky" },
    category: "Frozen", priceLabel: "",
  },
];

/* ------------------------------------------------------------------ */
/*  Fresh & imported fruits catalog                                     */
/* ------------------------------------------------------------------ */

export type FruitOrigin = "Lokal" | "Impor";

export interface FruitProduct {
  id: string;
  name: string;
  origin: FruitOrigin;
  desc: string;
  image: string;
  accent: string; // tailwind gradient classes for card glow
}

export const fruitProducts: FruitProduct[] = [
  /* ---------------------------- Buah Lokal ---------------------------- */
  {
    id: "mangga",
    name: "Mangga",
    origin: "Lokal",
    desc: "Manis legit, daging tebal dan juicy.",
    image: "/images/fruits/mangga.png",
    accent: "from-amber-300/70 to-orange-400/70",
  },
  {
    id: "jeruk-siam",
    name: "Jeruk Siam",
    origin: "Lokal",
    desc: "Segar manis-asam, banyak air, kaya vitamin C.",
    image: "/images/fruits/jeruk-siam.png",
    accent: "from-lime-300/70 to-yellow-400/70",
  },
  {
    id: "melon",
    name: "Melon",
    origin: "Lokal",
    desc: "Daging tebal renyah, harum, manis dan menyegarkan.",
    image: "/images/fruits/melon.png",
    accent: "from-lime-200/80 to-emerald-300/60",
  },
  {
    id: "semangka",
    name: "Semangka",
    origin: "Lokal",
    desc: "Merah merona, renyah, manis dan berair.",
    image: "/images/fruits/semangka.png",
    accent: "from-rose-300/70 to-red-400/60",
  },
  {
    id: "nanas",
    name: "Nanas",
    origin: "Lokal",
    desc: "Manis-asam seimbang, harum, cocok untuk jus.",
    image: "/images/fruits/nanas.png",
    accent: "from-yellow-200/80 to-amber-400/70",
  },
  {
    id: "salak",
    name: "Salak",
    origin: "Lokal",
    desc: "Renyah, manis sedikit sepat, mudah dikupas.",
    image: "/images/fruits/salak.png",
    accent: "from-amber-300/60 to-orange-500/60",
  },
  {
    id: "manggis",
    name: "Manggis",
    origin: "Lokal",
    desc: "Sang ratu buah: lembut, manis-asam menyegarkan.",
    image: "/images/fruits/manggis.png",
    accent: "from-purple-300/60 to-fuchsia-400/60",
  },
  {
    id: "lengkeng",
    name: "Lengkeng",
    origin: "Lokal",
    desc: "Daging tebal super manis, biji kecil, juicy.",
    image: "/images/fruits/lengkeng.png",
    accent: "from-yellow-200/80 to-amber-300/70",
  },
  {
    id: "anggur",
    name: "Anggur",
    origin: "Lokal",
    desc: "Manis crunchy nyaris tanpa biji, selalu segar.",
    image: "/images/fruits/anggur.png",
    accent: "from-purple-300/60 to-rose-400/60",
  },
  {
    id: "apel",
    name: "Apel",
    origin: "Lokal",
    desc: "Manis-asam seimbang, harum, cocok untuk jus.",
    image: "/images/fruits/apel.png",
    accent: "from-red-300/60 to-orange-300/70",
  },
  {
    id: "jeruk-impor",
    name: "Jeruk Impor",
    origin: "Impor",
    desc: "Jeruk premium impor: manis, juicy, mudah dikupas.",
    image: "/images/fruits/jeruk-impor.png",
    accent: "from-orange-300/70 to-amber-400/70",
  },,
  {
    id: "pepaya", name: "Pepaya", origin: "Lokal", desc: "Pepaya matang dengan rasa manis dan tekstur lembut.",
    image: "/images/fruits/melon.png", accent: "from-leaf-300/70 to-emerald-400/70",
  },
  {
    id: "pamelo", name: "Pamelo", origin: "Lokal", desc: "Buah sitrus berukuran besar dengan rasa segar.",
    image: "/images/fruits/jeruk-siam.png", accent: "from-leaf-300/70 to-emerald-400/70",
  },
  {
    id: "duku", name: "Duku", origin: "Lokal", desc: "Duku dengan rasa manis dan menyegarkan.",
    image: "/images/fruits/lengkeng.png", accent: "from-leaf-300/70 to-emerald-400/70",
  },
  {
    id: "rambutan", name: "Rambutan", origin: "Lokal", desc: "Rambutan dengan daging buah manis dan berair.",
    image: "/images/fruits/lengkeng.png", accent: "from-leaf-300/70 to-emerald-400/70",
  },
  {
    id: "alpukat", name: "Alpukat", origin: "Lokal", desc: "Alpukat dengan tekstur lembut dan creamy.",
    image: "/images/fruits/manggis.png", accent: "from-leaf-300/70 to-emerald-400/70",
  },
  {
    id: "mangga-harummanis", name: "Mangga Harummanis", origin: "Lokal", desc: "Mangga Harummanis yang dikenal dengan aroma harum dan rasa manis.",
    image: "/images/fruits/mangga.png", accent: "from-leaf-300/70 to-emerald-400/70",
  },
  {
    id: "mangga-indramayu", name: "Mangga Indramayu", origin: "Lokal", desc: "Mangga Indramayu dengan daging buah tebal.",
    image: "/images/fruits/mangga.png", accent: "from-leaf-300/70 to-emerald-400/70",
  },
  {
    id: "mangga-kiojay", name: "Mangga Kiojay", origin: "Lokal", desc: "Mangga Kiojay dengan ukuran besar dan rasa manis.",
    image: "/images/fruits/mangga.png", accent: "from-leaf-300/70 to-emerald-400/70",
  },
  {
    id: "mangga-manalagi", name: "Mangga Manalagi", origin: "Lokal", desc: "Mangga Manalagi dengan rasa manis dan aroma khas.",
    image: "/images/fruits/mangga.png", accent: "from-leaf-300/70 to-emerald-400/70",
  },
  {
    id: "strawberry-lokal", name: "Strawberry", origin: "Lokal", desc: "Strawberry segar dengan perpaduan rasa manis dan asam.",
    image: "/images/fruits/anggur.png", accent: "from-leaf-300/70 to-emerald-400/70",
  },
  {
    id: "pear-golden", name: "Pear Golden", origin: "Impor", desc: "Pir Golden dengan rasa manis dan tekstur renyah.",
    image: "/images/fruits/apel.png", accent: "from-rose-300/70 to-orange-400/70",
  },
  {
    id: "pear-singo", name: "Pear Singo", origin: "Impor", desc: "Pir Singo dengan tekstur renyah dan rasa segar.",
    image: "/images/fruits/apel.png", accent: "from-rose-300/70 to-orange-400/70",
  },
  {
    id: "pear-packham", name: "Pear Packham", origin: "Impor", desc: "Pir Packham dengan daging buah juicy.",
    image: "/images/fruits/apel.png", accent: "from-rose-300/70 to-orange-400/70",
  },
  {
    id: "sunkist-navel", name: "Sunkist Navel", origin: "Impor", desc: "Jeruk Navel dengan rasa manis dan segar.",
    image: "/images/fruits/jeruk-impor.png", accent: "from-rose-300/70 to-orange-400/70",
  },
  {
    id: "anggur-hijau", name: "Anggur Hijau", origin: "Impor", desc: "Anggur hijau dengan rasa segar dan manis.",
    image: "/images/fruits/anggur.png", accent: "from-rose-300/70 to-orange-400/70",
  },
  {
    id: "anggur-hitam", name: "Anggur Hitam", origin: "Impor", desc: "Anggur hitam dengan rasa manis yang khas.",
    image: "/images/fruits/anggur.png", accent: "from-rose-300/70 to-orange-400/70",
  },
  {
    id: "anggur-merah", name: "Anggur Merah", origin: "Impor", desc: "Anggur merah dengan rasa manis dan segar.",
    image: "/images/fruits/anggur.png", accent: "from-rose-300/70 to-orange-400/70",
  },
  {
    id: "delima", name: "Delima", origin: "Impor", desc: "Delima dengan butiran buah segar dan warna menarik.",
    image: "/images/fruits/manggis.png", accent: "from-rose-300/70 to-orange-400/70",
  },
  {
    id: "strawberry-impor", name: "Strawberry Impor", origin: "Impor", desc: "Strawberry impor dengan warna merah cerah dan rasa segar.",
    image: "/images/fruits/anggur.png", accent: "from-rose-300/70 to-orange-400/70",
  },
  {
    id: "plum", name: "Plum", origin: "Impor", desc: "Plum dengan rasa manis-asam dan daging buah juicy.",
    image: "/images/fruits/apel.png", accent: "from-rose-300/70 to-orange-400/70",
  }

];
