export const BRAND = {
  name: "PT. Central Buah Segar",
  parent: "DC Central · @dccentrall",
  tagline: "Distributor Buah Lokal & Impor",
  area: "Citra Raya, Tangerang",
};

export const INSTAGRAM = {
  handle: "@dccentrall",
  url: "https://www.instagram.com/dccentrall/",
};

export const WA_NUMBER = "6282253276700";
export const WA_DISPLAY = "0822-5327-6700";

export const waLink = (message?: string) =>
  `https://wa.me/${WA_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const orderMessage = (item: string) =>
  `Halo DC Central! Saya ingin memesan *${item}*. Mohon info ketersediaan produk hari ini ya. Terima kasih.`;

export const GENERIC_MESSAGE =
  "Halo PT. Central Buah Segar / DC Central. Saya ingin memperoleh informasi mengenai perusahaan, portofolio produk, dan layanan yang tersedia.";

export const MAPS_URL = "https://maps.app.goo.gl/JTZJd9aLtkp4UxNd9";
export const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9954573353148!2d106.5247543!3d-6.2643264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42073aacb68e11%3A0xf046863c535cf5dd!2sDC%20Central!5e0!3m2!1sen!2ssg!4v1791909054061!5m2!1sen!2ssg";

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
