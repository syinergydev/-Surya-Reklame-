export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  materials: string[];
  filterCategory: string;
  waPrompt: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "neon-box",
    number: "01",
    title: "Neon Box",
    tagline: "Media Reklame Bercahaya Berdaya Tarik Tinggi",
    description: "Media reklame bercahaya untuk kebutuhan identitas dan promosi bisnis siang maupun malam. Menggunakan akrilik pilihan, modul LED waterproof hemat energi, dan frame aluminium atau stainless tahan karat.",
    image: "/assets/projects/project_32.jpeg", // Sat Samapta glowing neon box
    features: [
      "Visibilitas maksimal saat malam hari",
      "Pencahayaan LED rata tanpa bintik gelap (hotspot)",
      "Tahan guyuran hujan dan paparan sinar matahari",
      "Tersedia bentuk persegi, rounded, bulat, hingga custom shape perisai",
    ],
    materials: ["Akrilik High-Grade", "Modul LED Samsung Waterproof", "Frame Aluminium / Stainless Hairline", "Cutting Sticker Translucent / UV Backlit"],
    filterCategory: "Neon Box",
    waPrompt: "Halo Surya Reklame, saya ingin berkonsultasi mengenai pembuatan Neon Box untuk bisnis saya.",
  },
  {
    id: "huruf-timbul",
    number: "02",
    title: "Huruf Timbul",
    tagline: "Lettering Tiga Dimensi untuk Citra Brand Berkelas",
    description: "Lettering tiga dimensi untuk memperkuat identitas visual perusahaan, toko, maupun kantor instansi. Dikerjakan dengan potongan laser presisi tinggi dan teknik patri atau lem rapi tanpa cacat.",
    image: "/assets/projects/project_14.jpeg", // MTs Progresif halo lit letters
    features: [
      "Kesan visual 3D megah, elegan, dan profesional",
      "Opsi pencahayaan Halo-Lit (pendaran belakang) atau Face-Lit (depan)",
      "Ketebalan dan dimensi proporsional sesuai estetika fasad",
      "Pemasangan kuat menggunakan fisher dan spacer stainless",
    ],
    materials: ["Stainless Steel (Mirror / Hairline)", "Akrilik Tebal Laser Cut", "Galvanil Cat Duco", "Kuningan / Tembaga"],
    filterCategory: "Huruf Timbul",
    waPrompt: "Halo Surya Reklame, saya ingin berkonsultasi mengenai pembuatan Huruf Timbul (3D Lettering).",
  },
  {
    id: "papan-nama",
    number: "03",
    title: "Papan Nama dan Signage",
    tagline: "Papan Identitas Usaha & Petunjuk Visual Kokoh",
    description: "Papan identitas usaha serta petunjuk visual untuk ruko, toko, klinik, apotek, sekolah, dan kantor organisasi. Memberikan navigasi yang jelas dan mudah dikenali calon pelanggan.",
    image: "/assets/projects/project_37.jpeg", // KSP Arta Anugerah
    features: [
      "Tipografi terbaca jelas dari jarak pandang kendaraan",
      "Konstruksi plat rata tidak bergelombang",
      "Finishing rapi tahan cuaca luar ruangan",
      "Rangka besi hollow kokoh dan aman",
    ],
    materials: ["Aluminium Composite Panel (ACP)", "Plat Seng Galvalum", "Rangka Besi Hollow", "Sticker Vinyl Outdoor Tahan UV"],
    filterCategory: "Papan Nama",
    waPrompt: "Halo Surya Reklame, saya ingin berkonsultasi mengenai pembuatan Papan Nama Usaha.",
  },
  {
    id: "reklame-outdoor",
    number: "04",
    title: "Reklame Outdoor",
    tagline: "Media Promosi Luar Ruangan Berskala Besar",
    description: "Media promosi luar ruangan berskala besar seperti pylon sign, tiang billboard pinggir jalan, dan kanopi reklame toko. Menjamin eksposur bisnis Anda mendominasi lanskap jalan perkotaan.",
    image: "/assets/projects/project_31.jpeg", // Gadaiku pole pylon
    features: [
      "Struktur tiang pipa baja berfondasi cor beton kokoh",
      "Ketinggian strategis terbebas dari halangan pepohonan atau kabel",
      "Sistem kelistrikan outdoor standar proteksi IP65",
      "Izin dan ketahanan struktural terhadap hembusan angin kencang",
    ],
    materials: ["Pipa Besi Tebal 3-4 Inch", "Plat Besi Baseplate", "Lampu Sorot LED Floodlight", "Flexi Backlit Korea"],
    filterCategory: "Papan Nama",
    waPrompt: "Halo Surya Reklame, saya ingin berkonsultasi mengenai Reklame Outdoor & Billboard Tiang.",
  },
  {
    id: "signage-interior",
    number: "05",
    title: "Signage Interior",
    tagline: "Identitas & Petunjuk Visual Estetik Ruang Dalam",
    description: "Identitas dan petunjuk visual untuk area dalam bangunan seperti lobby kantor, backdrop resepsionis, ruang sidang, klinik kesehatan, dan ornamen kaca sandblast.",
    image: "/assets/projects/project_03.jpeg", // Tipidter Polresta interior
    features: [
      "Harmonisasi dengan arsitektur dan interior ruangan",
      "Pilihan aksen wood slats, marmer sintetis, atau kaca",
      "Cahaya warm ambient yang menenangkan mata",
      "Detail sambungan sangat rapi untuk pandangan jarak dekat",
    ],
    materials: ["Akrilik Bening & Solid", "Sticker Sandblast Kaca Buram", "Wood Slats Panel", "Stainless Mirror Gold"],
    filterCategory: "Signage",
    waPrompt: "Halo Surya Reklame, saya ingin berkonsultasi mengenai Signage Interior & Huruf Dinding Kantor.",
  },
  {
    id: "media-promosi",
    number: "06",
    title: "Media Promosi dan Display",
    tagline: "Solusi Display Interaktif & Aksesoris Brand",
    description: "Berbagai kebutuhan media visual promosi mulai dari slim lightbox counter menu, plakat akrilik cinderamata resmi, standee display parkir, stempel, spanduk, hingga laser cutting akrilik custom.",
    image: "/assets/projects/project_35.jpeg", // Plakat akrilik kejaksaan
    features: [
      "Plakat akrilik tebal dipotong laser berulir halus dan mengkilap",
      "Slim lightbox menu tipis elegan untuk stan kuliner",
      "Standee petunjuk arah dan rambu parkir moveable",
      "Laser cutting akrilik presisi hitungan menit",
    ],
    materials: ["Akrilik Bening 5-10mm", "Slim LGP Backlight Panel", "Pipa Stainless Rambu", "Kain TC & Spanduk Flexi"],
    filterCategory: "Media Promosi",
    waPrompt: "Halo Surya Reklame, saya ingin berkonsultasi mengenai Media Promosi, Plakat Akrilik, atau Display Menu.",
  },
];
