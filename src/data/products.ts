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
    id: "frozen-box",
    name: "Frozen Premium Box 500g",
    desc: "Daging Monthong pilihan dikemas higienis 500 gram. Praktis, awet, dan selalu siap jadi stok favorit di rumah.",
    image: "/images/durian-frozen-box.png",
    badge: { label: "Frozen", tone: "sky" },
    category: "Frozen",
  },
  {
    id: "frozen-musangking",
    name: "Frozen Musang King",
    desc: "Daging Musang King pilihan dalam kondisi beku untuk menjaga rasa dan teksturnya.",
    image: "/images/musang-king.png",
    badge: { label: "Frozen", tone: "sky" },
    category: "Frozen",
  },
  {
    id: "frozen-bawor",
    name: "Frozen Bawor",
    desc: "Pilihan durian Bawor beku untuk dinikmati di rumah atau diolah menjadi hidangan favorit.",
    image: "/images/durian-monthong.png",
    badge: { label: "Frozen", tone: "sky" },
    category: "Frozen",
  },
  {
    id: "frozen-medan",
    name: "Frozen Medan",
    desc: "Durian Medan beku sebagai pilihan praktis saat ingin menikmati durian.",
    image: "/images/monthong-parigi2.png",
    badge: { label: "Frozen", tone: "sky" },
    category: "Frozen",
  },
  {
    id: "frozen-blackthorn",
    name: "Frozen Blackthorn",
    desc: "Varian Blackthorn dalam pilihan frozen, dengan cita rasa khas dan tekstur lembut.",
    image: "/images/blackthorn.png",
    badge: { label: "Frozen", tone: "sky" },
    category: "Frozen",
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
    id: "montong-parigi",
    name: "Montong Palu Parigi",
    desc: "Legenda dari Parigi Moutong: daging tebal, legit tanpa pahit, favorit dari penikmat pemula sampai kolektor.",
    image: "/images/monthong-parigi2.png",
    category: "Buah Utuh",
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

const fruitDescription = "Pilihan buah segar, dipilih sesuai ketersediaan dan musim.";

export const fruitProducts: FruitProduct[] = [
  /* ---------------------------- Buah Lokal ---------------------------- */
  { id: "pepaya", name: "Pepaya", origin: "Lokal", desc: fruitDescription, image: "https://images.unsplash.com/photo-1619535962037-feb40b6823fd?auto=format&fit=crop&w=700&h=700&q=80", accent: "from-orange-300/70 to-rose-300/70" },
  { id: "pamelo", name: "Pamelo", origin: "Lokal", desc: fruitDescription, image: "/images/fruits/jeruk-siam.png", accent: "from-lime-300/70 to-yellow-400/70" },
  { id: "duku", name: "Duku", origin: "Lokal", desc: fruitDescription, image: "/images/fruits/lengkeng.png", accent: "from-yellow-200/80 to-amber-300/70" },
  { id: "rambutan", name: "Rambutan", origin: "Lokal", desc: fruitDescription, image: "https://images.unsplash.com/photo-1519097000072-e44ffa116485?auto=format&fit=crop&w=700&h=700&q=80", accent: "from-rose-300/70 to-red-400/60" },
  { id: "alpukat", name: "Alpukat", origin: "Lokal", desc: fruitDescription, image: "https://images.unsplash.com/photo-1704960961278-a0376a031054?auto=format&fit=crop&w=700&h=700&q=80", accent: "from-leaf-300/70 to-emerald-400/70" },
  { id: "mangga-harummanis", name: "Mangga Harummanis", origin: "Lokal", desc: fruitDescription, image: "/images/fruits/mangga.png", accent: "from-amber-300/70 to-orange-400/70" },
  { id: "mangga-indramayu", name: "Mangga Indramayu", origin: "Lokal", desc: fruitDescription, image: "/images/fruits/mangga.png", accent: "from-amber-300/70 to-orange-400/70" },
  { id: "mangga-kiojay", name: "Mangga Kiojay", origin: "Lokal", desc: fruitDescription, image: "/images/fruits/mangga.png", accent: "from-amber-300/70 to-orange-400/70" },
  { id: "mangga-manlagi", name: "Mangga Manalagi", origin: "Lokal", desc: fruitDescription, image: "/images/fruits/mangga.png", accent: "from-amber-300/70 to-orange-400/70" },
  { id: "strawberry", name: "Strawberry", origin: "Lokal", desc: fruitDescription, image: "https://images.unsplash.com/photo-1685130050521-821d122f4915?auto=format&fit=crop&w=700&h=700&q=80", accent: "from-rose-300/70 to-red-400/60" },

  /* ---------------------------- Buah Impor ---------------------------- */
  { id: "pear-golden", name: "Pear Golden", origin: "Impor", desc: fruitDescription, image: "/images/fruits/apel.png", accent: "from-yellow-200/80 to-amber-300/70" },
  { id: "pear-singo", name: "Pear Singo", origin: "Impor", desc: fruitDescription, image: "/images/fruits/apel.png", accent: "from-lime-200/80 to-emerald-300/60" },
  { id: "pear-packham", name: "Pear Packham", origin: "Impor", desc: fruitDescription, image: "/images/fruits/apel.png", accent: "from-lime-300/70 to-yellow-400/70" },
  { id: "sunkist-navel", name: "Sunkist Navel", origin: "Impor", desc: fruitDescription, image: "/images/fruits/jeruk-impor.png", accent: "from-orange-300/70 to-amber-400/70" },
  { id: "anggur-hijau", name: "Anggur Hijau", origin: "Impor", desc: fruitDescription, image: "/images/fruits/anggur.png", accent: "from-lime-300/70 to-emerald-300/60" },
  { id: "anggur-hitam", name: "Anggur Hitam", origin: "Impor", desc: fruitDescription, image: "/images/fruits/anggur.png", accent: "from-purple-300/60 to-fuchsia-400/60" },
  { id: "anggur-merah", name: "Anggur Merah", origin: "Impor", desc: fruitDescription, image: "/images/fruits/anggur.png", accent: "from-purple-300/60 to-rose-400/60" },
  { id: "delima", name: "Delima", origin: "Impor", desc: fruitDescription, image: "https://images.unsplash.com/photo-1638838373631-7818d08fc42c?auto=format&fit=crop&w=700&h=700&q=80", accent: "from-rose-300/70 to-red-400/60" },
  { id: "strawberry-impor", name: "Strawberry Impor", origin: "Impor", desc: fruitDescription, image: "https://images.unsplash.com/photo-1685130050521-821d122f4915?auto=format&fit=crop&w=700&h=700&q=80", accent: "from-rose-300/70 to-red-400/60" },
  { id: "plum", name: "Plum", origin: "Impor", desc: fruitDescription, image: "/images/fruits/apel.png", accent: "from-purple-300/60 to-fuchsia-400/60" },
];
