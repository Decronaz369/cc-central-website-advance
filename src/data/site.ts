export const BRAND = {
  name: "PT. Central Buah Segar",
  parent: "DC Central · @duriancastle.id",
  tagline: "Distributor Buah Lokal & Impor",
  area: "Citra Raya, Tangerang",
};

export const WA_NUMBER = "6282253276700";
export const WA_DISPLAY = "0822-5327-6700";

export const waLink = (message?: string) =>
  `https://wa.me/${WA_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const orderMessage = (item: string) =>
  `Halo DC Central! Saya ingin memesan *${item}*. Mohon info stok & harga hari ini ya. Terima kasih.`;

export const GENERIC_MESSAGE =
  "Halo PT. Central Buah Segar / DC Central. Saya ingin memperoleh informasi mengenai perusahaan, portofolio produk, dan layanan yang tersedia.";

export const MAPS_URL = "https://maps.app.goo.gl/JTZJd9aLtkp4UxNd9";
export const MAPS_EMBED =
  "https://maps.google.com/maps?q=Ruko%20Grand%20Boulevard%20E%20No%201%20Ciakar%20Panongan%20Tangerang&t=&z=16&ie=UTF8&iwloc=&output=embed";

export const ADDRESS = {
  primary: "Ruko Grand Boulevard E No. 1, Ciakar, Panongan, Kabupaten Tangerang, Banten 15710",
  full: "Ruko Grand Boulevard, Jl. Citra Raya Boulevard Blok E 01/126 & 122, Ciakar, Kec. Cikupa, Kabupaten Tangerang, Banten",
  landmark: "Samping Graha Raflesia, tepat di seberang Bakmi RY",
};

export const HOURS = {
  open: 9,
  close: 22,
  label: "09.00 – 22.00 WIB",
  note: "Setiap hari, termasuk hari libur",
};

export const NAV_LINKS = [
  { id: "home", label: "Beranda" },
  { id: "tentang", label: "Profil" },
  { id: "visi-misi", label: "Visi & Misi" },
  { id: "layanan-bisnis", label: "Bidang Usaha" },
  { id: "portofolio", label: "Portofolio" },
  { id: "lokasi", label: "Lokasi" },
  { id: "kontak", label: "Kontak" },
];
