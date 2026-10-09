/* ------------------------------------------------------------------ */
/*  Dynamic Promo Engine (API-ready)                                    */
/*                                                                     */
/*  Komponen <PromoSection /> hanya merender struktur Promo di bawah.  */
/*  Untuk menghubungkan ke promo engine sungguhan, ganti isi fungsi    */
/*  `fetchActivePromos` dengan request ke endpoint Anda, misalnya:     */
/*                                                                     */
/*    const res = await fetch("https://api.dccentral.id/promos/active")*/
/*    return (await res.json()) as Promo[];                            */
/* ------------------------------------------------------------------ */

export type PromoTheme = "gold" | "green" | "pink" | "orange";

export interface Promo {
  id: string;
  badge: string;
  title: string;
  description: string;
  validity: string;
  cta: string;
  theme: PromoTheme;
}

export async function fetchActivePromos(): Promise<Promo[]> {
  // Simulasi latency jaringan — hapus saat tersambung ke API asli.
  await new Promise((resolve) => setTimeout(resolve, 1100));

  return [
    {
      id: "free-delivery-citraya",
      badge: "GRATIS ONGKIR",
      title: "Antar Gratis Area Citra Raya",
      description:
        "Semua pesanan dengan alamat di kawasan Citra Raya kami antar langsung ke depan pintu — tanpa biaya ongkir, tanpa syarat ribet.",
      validity: "Berlaku setiap hari",
      cta: "Pesan Sekarang",
      theme: "green",
    },
    {
      id: "bundle-keluarga",
      badge: "HEMAT 15%",
      title: "Bundle Buah Segar Keluarga",
      description:
        "Paket 3 jenis buah segar pilihan untuk stok seminggu di rumah. Komposisi bebas request sesuai selera keluarga Anda.",
      validity: "Kuota terbatas tiap hari",
      cta: "Klaim Bundle",
      theme: "gold",
    },
    {
      id: "double-frozen",
      badge: "LEBIH HEMAT",
      title: "Beli 2 Frozen Premium Box",
      description:
        "Ambil dua Frozen Premium Box 500g sekaligus: harga spesial, prioritas antar, dan stok durian premium aman di freezer Anda.",
      validity: "Selama stok tersedia",
      cta: "Ambil Promo",
      theme: "pink",
    },
  ];
}
