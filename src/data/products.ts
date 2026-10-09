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
    image: "/images/monthong-parigi.png",
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
  {
    id: "mangga-alpukat",
    name: "Mangga Alpukat",
    origin: "Lokal",
    desc: "Super manis, daging tebal juicy hampir tanpa serat.",
    image:
      "https://images.pexels.com/photos/38802739/pexels-photo-38802739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-amber-300/70 to-orange-400/70",
  },
  {
    id: "mangga-kiojay",
    name: "Mangga Kiojay",
    origin: "Impor",
    desc: "Mangga madu premium, tebal & manisnya merata.",
    image: "/images/mango-kiojay.png",
    accent: "from-yellow-300/70 to-amber-400/70",
  },
  {
    id: "alpukat-mentega",
    name: "Alpukat Mentega",
    origin: "Lokal",
    desc: "Creamy seperti mentega, pulen tanpa rasa pahit.",
    image: "/images/avocado.png",
    accent: "from-lime-300/70 to-green-500/60",
  },
  {
    id: "strawberry-australia",
    name: "Strawberry Australia",
    origin: "Impor",
    desc: "Ukuran jumbo, manis-asam segar, aroma kuat.",
    image:
      "https://images.pexels.com/photos/33579061/pexels-photo-33579061.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-rose-300/70 to-pink-500/60",
  },
  {
    id: "lengkeng-emas",
    name: "Lengkeng Emas",
    origin: "Impor",
    desc: "Daging tebal super manis, biji kecil, juicy.",
    image: "/images/longan.png",
    accent: "from-yellow-200/80 to-amber-300/70",
  },
  {
    id: "pear-century",
    name: "Pear Century",
    origin: "Impor",
    desc: "Renyah, berair, manis menyegarkan khas pear Asia.",
    image:
      "https://images.pexels.com/photos/33337713/pexels-photo-33337713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-lime-200/80 to-yellow-300/60",
  },
  {
    id: "jeruk-baby-wogan",
    name: "Jeruk Baby Wogan",
    origin: "Impor",
    desc: "Jeruk mungil super manis, gampang dikupas.",
    image:
      "https://images.pexels.com/photos/17840025/pexels-photo-17840025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-orange-300/70 to-amber-400/70",
  },
  {
    id: "anggur-merah",
    name: "Anggur Merah",
    origin: "Impor",
    desc: "Manis crunchy nyaris tanpa biji, selalu segar.",
    image:
      "https://images.pexels.com/photos/33252519/pexels-photo-33252519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-purple-300/60 to-rose-400/60",
  },
  {
    id: "buah-naga",
    name: "Buah Naga",
    origin: "Lokal",
    desc: "Manis lembut, kaya antioksidan, menyegarkan.",
    image:
      "https://images.pexels.com/photos/2907428/pexels-photo-2907428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-pink-300/70 to-rose-400/60",
  },
  {
    id: "apel-fuji",
    name: "Apel Fuji",
    origin: "Impor",
    desc: "Renyah, juicy, manis seimbang kualitas ekspor.",
    image:
      "https://images.pexels.com/photos/17975557/pexels-photo-17975557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-red-300/60 to-orange-300/70",
  },
];
