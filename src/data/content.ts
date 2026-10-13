import {
  Camera,
  Check,
  Clock,
  Crown,
  Citrus,
  HeartHandshake,
  Leaf,
  MessageCircle,
  Percent,
  Plane,
  Receipt,
  Scale,
  ShieldCheck,
  Snowflake,
  Sparkles,
  CakeSlice,
  Truck,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Marquee                                                             */
/* ------------------------------------------------------------------ */

export const marqueeItems = [
  "PT. Central Buah Segar",
  "Distributor Buah Lokal & Impor",
  "Portofolio Buah Segar",
  "Pilihan Durian Premium",
  "Kanal Retail DC Central",
  "Berbasis di Citra Raya, Tangerang",
];

/* ------------------------------------------------------------------ */
/*  About                                                               */
/* ------------------------------------------------------------------ */

export const aboutChecklist = [
  "Buah impor & lokal disortir segar setiap hari",
  "Spesialis aneka durian premium bergaransi",
  "Pesan online via WhatsApp, siap kirim & ambil di toko",
  "Semua buah ditimbang transparan di depan Anda",
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const aboutStats: Stat[] = [
  { value: 15, suffix: "+", label: "Varian Buah & Durian Pilihan" },
  { value: 100, suffix: "%", label: "Garansi Durian Ganti Baru" },
  { value: 24, suffix: " Jam", label: "WhatsApp Order Aktif" },
  { value: 13, suffix: " Jam", label: "Operasional Toko per Hari" },
];

/* ------------------------------------------------------------------ */
/*  Featured categories                                                 */
/* ------------------------------------------------------------------ */

export interface Category {
  icon: LucideIcon;
  title: string;
  desc: string;
  target: string;
  gradient: string;
  iconColor: string;
}

export const categories: Category[] = [
  {
    icon: Crown,
    title: "Durian Specialist",
    desc: "Monthong, Musang King, Blackthorn & varian premium lainnya.",
    target: "#durian",
    gradient: "from-gold-300 via-gold-100 to-cream-100",
    iconColor: "text-gold-700",
  },
  {
    icon: Plane,
    title: "Buah Impor",
    desc: "Lengkeng, anggur, apel & jeruk impor kualitas ekspor.",
    target: "#katalog",
    gradient: "from-sky-200 via-sky-100 to-cream-100",
    iconColor: "text-sky-700",
  },
  {
    icon: Citrus,
    title: "Buah Lokal Segar",
    desc: "Mangga, melon, semangka, nanas, salak & manggis pilihan.",
    target: "#katalog",
    gradient: "from-leaf-200 via-leaf-100 to-cream-100",
    iconColor: "text-leaf-700",
  },
  {
    icon: Snowflake,
    title: "Frozen Durian",
    desc: "Daging durian premium beku, praktis untuk stok rumahan.",
    target: "#durian",
    gradient: "from-cyan-200 via-cyan-100 to-cream-100",
    iconColor: "text-cyan-700",
  },
  {
    icon: CakeSlice,
    title: "Pancake Durian Roll",
    desc: "Olahan durian lembut ukuran big, favorit sekeluarga.",
    target: "#durian",
    gradient: "from-pink-200 via-pink-100 to-cream-100",
    iconColor: "text-pink-700",
  },
];

/* ------------------------------------------------------------------ */
/*  Why choose us                                                       */
/* ------------------------------------------------------------------ */

export interface WhyItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  tile: string;
}

export const whyUs: WhyItem[] = [
  {
    icon: ShieldCheck,
    title: "Garansi Durian 100%",
    desc: "Busuk, asam, atau hambar? Ganti durian baru atau refund penuh — tanpa drama.",
    tile: "from-leaf-500 to-leaf-700",
  },
  {
    icon: Truck,
    title: "Free Ongkir Citra Raya",
    desc: "Pesanan diantar langsung ke rumah Anda di seluruh kawasan Citra Raya, gratis.",
    tile: "from-gold-400 to-gold-600",
  },
  {
    icon: Sparkles,
    title: "Sortir Segar Setiap Hari",
    desc: "Buah impor & lokal dipilih satu per satu oleh tim kami sebelum sampai ke tangan Anda.",
    tile: "from-orange-400 to-rose-400",
  },
  {
    icon: MessageCircle,
    title: "Order 24 Jam via WhatsApp",
    desc: "Mau pesan tengah malam? WhatsApp kami selalu aktif, tinggal chat kapan saja.",
    tile: "from-emerald-400 to-leaf-600",
  },
  {
    icon: Scale,
    title: "Timbangan Transparan",
    desc: "Semua buah ditimbang tepat di depan Anda. Harga jujur, takaran jujur.",
    tile: "from-sky-400 to-blue-500",
  },
  {
    icon: HeartHandshake,
    title: "Bagian dari Durian Castle",
    desc: "Dipercaya komunitas pecinta buah & durian Citra Raya, Tangerang.",
    tile: "from-pink-400 to-fuchsia-500",
  },
];

/* ------------------------------------------------------------------ */
/*  Guarantee terms (S&K)                                               */
/* ------------------------------------------------------------------ */

export interface GuaranteeTerm {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const guaranteeTerms: GuaranteeTerm[] = [
  {
    icon: Clock,
    title: "Klaim Maksimal 1x24 Jam",
    desc: "Ajukan klaim paling lambat 24 jam sejak pesanan diterima atau diambil di toko.",
  },
  {
    icon: Camera,
    title: "Bukti Foto / Video",
    desc: "Lampirkan foto atau video kondisi durian saat diterima agar verifikasi cepat.",
  },
  {
    icon: Percent,
    title: "Sisa Buah Lebih dari 70%",
    desc: "Buah yang diklaim harus tersisa lebih dari 70% dari kondisi awal.",
  },
  {
    icon: Receipt,
    title: "Sertakan Nomor Invoice",
    desc: "Cantumkan nomor invoice pembelian agar tim kami bisa langsung memproses.",
  },
];

export const guaranteeOutcomes = [
  {
    icon: ShieldCheck,
    title: "Ganti Durian Baru",
    desc: "Kami kirim pengganti fresh secepatnya, tanpa biaya apa pun.",
  },
  {
    icon: Check,
    title: "Refund Penuh",
    desc: "Lebih nyaman uang kembali? Boleh, 100% tanpa potongan.",
  },
];

/* ------------------------------------------------------------------ */
/*  Delivery                                                            */
/* ------------------------------------------------------------------ */

export const freeZones = [
  "citra raya",
  "citraya",
  "ciakar",
  "cikupa",
  "panongan",
  "graha raflesia",
  "grand boulevard",
  "madrid",
  "barcelona",
  "sevilla",
];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                        */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  name: string;
  area: string;
  product: string;
  quote: string;
  rating: number;
  avatar: string; // gradient classes
  initial: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rina Oktaviani",
    area: "Citra Raya",
    product: "Monthong Palu",
    quote:
      "Duriannya nggak pernah zonk! Pernah sekali kurang manis, langsung diganti baru tanpa banyak tanya. Garansinya beneran jalan.",
    rating: 5,
    avatar: "from-leaf-400 to-leaf-600",
    initial: "RO",
  },
  {
    name: "Budi Santoso",
    area: "Cikupa",
    product: "Paket Buah Keluarga",
    quote:
      "Chat WA jam 10 malam, besok pagi pesanan sudah sampai. Buahnya fresh semua, packing rapi banget kayak kirim paket premium.",
    rating: 5,
    avatar: "from-gold-400 to-gold-600",
    initial: "BS",
  },
  {
    name: "Dewi Lestari",
    area: "Panongan",
    product: "Musang King",
    quote:
      "Musang King-nya creamy parah, warnanya kuning cantik. Sekarang jadi langganan tiap minggu buat keluarga di rumah.",
    rating: 5,
    avatar: "from-orange-400 to-rose-400",
    initial: "DL",
  },
  {
    name: "Andre Wijaya",
    area: "Citra Raya",
    product: "Anggur & Apel",
    quote:
      "Toko buah paling rapi di area sini. Ditimbang di depan kita, harganya jujur. Anak saya suka banget anggurnya.",
    rating: 5,
    avatar: "from-sky-400 to-blue-500",
    initial: "AW",
  },
  {
    name: "Sinta Maharani",
    area: "Tangerang",
    product: "Frozen Premium Box",
    quote:
      "Frozen box-nya jadi stok andalan buat dessert di rumah. Manis, wangi, dan praktis. Pengirimannya juga cepat pakai kurir instan.",
    rating: 5,
    avatar: "from-pink-400 to-fuchsia-500",
    initial: "SM",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                                 */
/* ------------------------------------------------------------------ */

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Bagaimana cara pesan online?",
    a: "Cukup chat WhatsApp kami di 0822-5327-6700, kirim daftar pesanan Anda. Tim kami akan balas dengan info stok & harga terbaru, lalu pesanan ditimbang dan siap diantar atau diambil di toko. WhatsApp kami aktif 24 jam.",
  },
  {
    q: "Apakah durian benar-benar bergaransi 100%?",
    a: "Ya. Jika durian busuk, asam, atau hambar, Anda bisa pilih ganti durian baru atau refund penuh. Klaim cukup dilakukan maksimal 1x24 jam dengan bukti foto/video, sisa buah lebih dari 70%, dan nomor invoice.",
  },
  {
    q: "Area mana saja yang dilayani pengiriman?",
    a: "Kawasan Citra Raya gratis ongkir dan diantar oleh tim kami. Di luar Citra Raya, pesanan dikirim via kurir instan dengan ongkir yang dihitung real-time sesuai jarak — tidak ada markup, transparan dari aplikasi kurir.",
  },
  {
    q: "Jam berapa toko buka?",
    a: "Toko fisik & layanan timbang buka setiap hari pukul 09.00–22.00 WIB. Untuk pesanan online, WhatsApp kami aktif 24 jam — pesanan yang masuk di luar jam toko akan ditimbang dan diproses pukul 09.00 saat toko buka.",
  },
  {
    q: "Metode pembayaran apa saja yang diterima?",
    a: "Kami menerima transfer bank, QRIS, dan pembayaran tunai langsung di toko. Untuk pesanan online, pembayaran dilakukan setelah pesanan Anda ditimbang dan total harga dikonfirmasi.",
  },
  {
    q: "Apakah Musang King & Blackthorn selalu tersedia?",
    a: "Durian premium musiman seperti Musang King dan Blackthorn stoknya terbatas mengikuti musim panen. Chat WhatsApp kami untuk cek stok — kami dengan senang hati mengabari Anda begitu stok terbaik tiba.",
  },
];

/* ------------------------------------------------------------------ */
/*  Check icon re-export for about checklist (typed convenience)        */
/* ------------------------------------------------------------------ */

export { Leaf, Check };
