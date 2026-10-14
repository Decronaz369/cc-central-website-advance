/* ------------------------------------------------------------------ */
/*  Durian Specialist lineup                                            */
/* ------------------------------------------------------------------ */

export type BadgeTone = "gold" | "green" | "pink" | "orange" | "sky" | "lime";

export type DurianCategory = "Buah Utuh" | "Frozen" | "Premium";

export interface DurianProduct {
  id: string;
  name: string;
  desc: string;
  image: string;
  badge?: { label: string; tone: BadgeTone };
  category: DurianCategory;
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
    taste: [
      { label: "Manis", value: 92 },
      { label: "Creamy", value: 96 },
      { label: "Aroma Lembut", value: 68 },
    ],
  },
  {
    id: "musang-king",
    name: "Musang King",
    desc: "Sang legenda asal Malaysia: daging kuning pekat, tekstur seperti custard, rasa manis-pahit yang dalam dan kompleks.",
    image: "/images/musang-king.png",
    badge: { label: "Premium", tone: "green" },
    category: "Premium",
  },
  {
    id: "blackthorn",
    name: "Blackthorn",
    desc: "Varian langka kelas kolektor: daging oranye kemerahan, lumer seperti butter, dengan aroma khas yang memikat.",
    image: "/images/blackthorn.png",
    badge: { label: "Rare", tone: "pink" },
    category: "Premium",
  },
  {
    id: "frozen-box",
    name: "Frozen Monthong",
    desc: "Daging Monthong pilihan dikemas higienis 500 gram. Praktis, awet, dan selalu siap jadi stok favorit di rumah.",
    image: "/images/durian-frozen-box.png",
    badge: { label: "Frozen", tone: "sky" },
    category: "Frozen",
  },
  {
    id: "frozen-musangking",
    name: "Frozen Musangking",
    desc: "Musang King dalam pilihan beku, praktis dinikmati kapan saja.",
    image: "/images/musang-king.png",
    badge: { label: "Frozen", tone: "sky" },
    category: "Frozen",
  },
  {
    id: "frozen-bawor",
    name: "Frozen Bawor",
    desc: "Durian Bawor dalam pilihan beku untuk melengkapi stok durian di rumah.",
    image: "/images/durian-frozen-box.png",
    badge: { label: "Frozen", tone: "sky" },
    category: "Frozen",
  },
  {
    id: "frozen-medan",
    name: "Frozen Medan",
    desc: "Pilihan durian Medan beku dengan cita rasa khas durian lokal.",
    image: "/images/durian-frozen-box.png",
    badge: { label: "Frozen", tone: "sky" },
    category: "Frozen",
  },
  {
    id: "frozen-blackthorn",
    name: "Frozen Blackthorn",
    desc: "Blackthorn dalam pilihan beku bagi pencinta durian premium.",
    image: "/images/blackthorn.png",
    badge: { label: "Frozen", tone: "sky" },
    category: "Frozen",
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
    id: "apel",
    name: "Apel",
    origin: "Lokal",
    desc: "Manis-asam seimbang, harum, cocok untuk jus.",
    image: "/images/fruits/apel.png",
    accent: "from-red-300/60 to-orange-300/70",
  },
  {
    id: "pepaya",
    name: "Pepaya",
    origin: "Lokal",
    desc: "Daging oranye lembut, manis, cocok dinikmati segar.",
    image: "/images/fruits/pepaya.jpg",
    accent: "from-leaf-200/70 to-gold-300/60",
  },
  {
    id: "pamelo",
    name: "Pamelo",
    origin: "Lokal",
    desc: "Bulir besar dengan rasa manis-asam yang menyegarkan.",
    image: "/images/fruits/pamelo.jpg",
    accent: "from-leaf-200/70 to-gold-300/60",
  },
  {
    id: "duku",
    name: "Duku",
    origin: "Lokal",
    desc: "Buah kecil dengan daging bening dan rasa manis lembut.",
    image: "/images/fruits/duku.jpg",
    accent: "from-leaf-200/70 to-gold-300/60",
  },
  {
    id: "rambutan",
    name: "Rambutan",
    origin: "Lokal",
    desc: "Daging putih berair dengan rasa manis segar.",
    image: "/images/fruits/rambutan.jpg",
    accent: "from-leaf-200/70 to-gold-300/60",
  },
  {
    id: "alpukat",
    name: "Alpukat",
    origin: "Lokal",
    desc: "Tekstur lembut dan creamy, nikmat untuk jus atau sajian segar.",
    image: "/images/fruits/alpukat.jpg",
    accent: "from-leaf-200/70 to-gold-300/60",
  },
  {
    id: "mangga-harummanis",
    name: "Mangga Harummanis",
    origin: "Lokal",
    desc: "Aroma harum khas dengan daging manis dan lembut.",
    image: "/images/fruits/mangga.png",
    accent: "from-leaf-200/70 to-gold-300/60",
  },
  {
    id: "mangga-indramayu",
    name: "Mangga Indramayu",
    origin: "Lokal",
    desc: "Pilihan mangga lokal untuk rujak atau dinikmati saat matang.",
    image: "/images/fruits/mangga.png",
    accent: "from-leaf-200/70 to-gold-300/60",
  },
  {
    id: "mangga-kiojay",
    name: "Mangga Kiojay",
    origin: "Lokal",
    desc: "Mangga berukuran besar dengan daging tebal.",
    image: "/images/fruits/mangga.png",
    accent: "from-leaf-200/70 to-gold-300/60",
  },
  {
    id: "mangga-manalagi",
    name: "Mangga Manalagi",
    origin: "Lokal",
    desc: "Rasa manis khas dengan tekstur daging yang padat.",
    image: "/images/fruits/mangga.png",
    accent: "from-leaf-200/70 to-gold-300/60",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    origin: "Lokal",
    desc: "Manis-asam segar, cocok untuk camilan dan aneka sajian.",
    image: "/images/fruits/strawberry.jpg",
    accent: "from-leaf-200/70 to-gold-300/60",
  },
  {
    id: "pear-golden",
    name: "Pear Golden",
    origin: "Impor",
    desc: "Pear berkulit keemasan dengan daging renyah dan berair.",
    image: "/images/fruits/pear.jpg",
    accent: "from-sky-200/70 to-leaf-300/60",
  },
  {
    id: "pear-singo",
    name: "Pear Singo",
    origin: "Impor",
    desc: "Pear bulat dengan rasa manis ringan dan banyak air.",
    image: "/images/fruits/pear.jpg",
    accent: "from-sky-200/70 to-leaf-300/60",
  },
  {
    id: "pear-packkam",
    name: "Pear Packkam",
    origin: "Impor",
    desc: "Pear hijau dengan aroma lembut dan rasa manis saat matang.",
    image: "/images/fruits/pear.jpg",
    accent: "from-sky-200/70 to-leaf-300/60",
  },
  {
    id: "jeruk-impor",
    name: "Jeruk Shantang",
    origin: "Impor",
    desc: "Jeruk manis, segar, dan sangat mudah dikupas.",
    image: "/images/fruits/jeruk-impor.png",
    accent: "from-orange-300/70 to-amber-400/70",
  },
  {
    id: "sunkist-navel",
    name: "Sunkist Navel",
    origin: "Impor",
    desc: "Jeruk navel dengan aroma citrus dan rasa segar.",
    image: "/images/fruits/jeruk-impor.png",
    accent: "from-sky-200/70 to-leaf-300/60",
  },
  {
    id: "anggur-hijau",
    name: "Anggur Hijau",
    origin: "Impor",
    desc: "Anggur hijau dengan rasa manis dan sensasi segar.",
    image: "/images/fruits/anggur-hijau.jpg",
    accent: "from-sky-200/70 to-leaf-300/60",
  },
  {
    id: "anggur-hitam",
    name: "Anggur Hitam",
    origin: "Impor",
    desc: "Anggur berwarna gelap dengan rasa manis khas.",
    image: "/images/fruits/anggur-hitam.jpg",
    accent: "from-sky-200/70 to-leaf-300/60",
  },
  {
    id: "anggur-merah",
    name: "Anggur Merah",
    origin: "Impor",
    desc: "Anggur merah berair, cocok dinikmati sebagai camilan.",
    image: "/images/fruits/anggur.png",
    accent: "from-sky-200/70 to-leaf-300/60",
  },
  {
    id: "delima",
    name: "Delima",
    origin: "Impor",
    desc: "Bulir merah dengan rasa manis-asam yang menyegarkan.",
    image: "/images/fruits/delima.svg",
    accent: "from-sky-200/70 to-leaf-300/60",
  },
  {
    id: "strawberry-impor",
    name: "Strawberry Impor",
    origin: "Impor",
    desc: "Pilihan strawberry impor untuk sajian segar dan dessert.",
    image: "/images/fruits/strawberry.jpg",
    accent: "from-sky-200/70 to-leaf-300/60",
  },
  {
    id: "plum",
    name: "Plum",
    origin: "Impor",
    desc: "Daging juicy dengan perpaduan rasa manis dan asam.",
    image: "/images/fruits/plum.svg",
    accent: "from-sky-200/70 to-leaf-300/60",
  },
];
