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
    id: "pancake-roll",
    name: "Pancake Durian Roll Big",
    desc: "Kulit lembut berisi krim durian asli yang melimpah dalam ukuran big. Manisnya pas, lumer di setiap gigitan.",
    image: "/images/pancake-durian.png",
    badge: { label: "Favorit", tone: "orange" },
    category: "Olahan",
    priceLabel: "Tanya Hari Ini",
    priceNote: "ukuran big · fresh made",
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
  /* ---------------------------- Buah Impor ---------------------------- */
  {
    id: "lengkeng",
    name: "Lengkeng",
    origin: "Impor",
    desc: "Daging tebal super manis, biji kecil, juicy.",
    image: "/images/fruits/lengkeng.png",
    accent: "from-yellow-200/80 to-amber-300/70",
  },
  {
    id: "anggur",
    name: "Anggur",
    origin: "Impor",
    desc: "Manis crunchy nyaris tanpa biji, selalu segar.",
    image: "/images/fruits/anggur.png",
    accent: "from-purple-300/60 to-rose-400/60",
  },
  {
    id: "apel",
    name: "Apel",
    origin: "Impor",
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
  },
];
