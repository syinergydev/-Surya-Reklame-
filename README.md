# Surya Reklame & Advertising — Premium Awwwards Website

Website resmi berstandar Awwwards untuk **Surya Reklame dan Advertising**, spesialis pembuatan reklame, neon box, huruf timbul (3D lettering), papan nama usaha, signage interior, dan media promosi di Sidoarjo, Jawa Timur.

---

## 🌟 Identitas Bisnis

- **Nama Bisnis**: Surya Reklame dan Advertising
- **Kategori**: Toko Reklame / Advertising / Signage
- **Alamat Workshop**: Jl. Raya Suko No.64, Ngemplak, Suko, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61224
- **WhatsApp**: 0821-3941-4885 (`+62 821-3941-4885`)
- **Website**: https://suryareklame.gmaps.id
- **Google Maps**: https://maps.app.goo.gl/LN8s6zwae2Xwuziu5
- **Reputasi**: Rating 5.0 Google Maps dari 30 ulasan terverifikasi
- **Instagram**: [@neonbox_termurah.sidoarjo](https://www.instagram.com/neonbox_termurah.sidoarjo/)
- **TikTok**: [@neonbox_murah_sidoarjo](https://www.tiktok.com/@neonbox_murah_sidoarjo)
- **Facebook**: [Surya Reklame](https://www.facebook.com/share/18mXNRkPLF/)
- **Jam Operasional**: Senin – Sabtu, 08.00 – 16.00 WIB

---

## 🎨 Arah Desain & Palet Warna

- **Deep Charcoal**: `#101113`
- **Dark Void**: `#08090A`
- **Warm White**: `#F5F4F0`
- **Silver Grey**: `#A7A9AD`
- **Accent Amber**: `#E7A94B`
- **Typography**: Outfit (Display) & Plus Jakarta Sans (Body)
- **Animations**: GSAP + ScrollTrigger + @gsap/react

---

## 📁 Struktur Folder Proyek

```
/
├── public/
│   └── assets/
│       ├── logo-surya-reklame.jpg       # Logo resmi Surya Reklame (Emblem SR Mahkota Emas)
│       ├── gallery/                     # 41 foto dokumentasi asli dari ZIP
│       └── projects/                    # Alias berkas proyek untuk visual optimal
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                   # Top Bar Contract 3-zona & mobile drawer
│   │   ├── HeroSection.tsx              # Cinematic hero dengan slideshow pendaran malam
│   │   ├── AboutSection.tsx             # Editorial profil & foto workshop Sidoarjo
│   │   ├── ServicesSection.tsx          # 6 layanan spesialisasi dengan foto asli
│   │   ├── GallerySection.tsx           # Asymmetric masonry grid & filter kategori
│   │   ├── LightboxModal.tsx            # Lightbox resolusi tinggi + keyboard navigation
│   │   ├── ProcessSection.tsx           # 4 tahapan pengerjaan transparan
│   │   ├── TestimonialsSection.tsx      # Ulasan asli & verifikasi Google Maps 5.0
│   │   ├── CtaSection.tsx               # Penutup persuasif & tombol WhatsApp otomatis
│   │   ├── LocationAndContactSection.tsx # Peta Google Maps embed, jam buka & kontak
│   │   ├── Footer.tsx                   # Logo resmi, legalitas, hak cipta & tautan sosial
│   │   ├── FloatingWhatsApp.tsx         # Tombol melayang WhatsApp dengan indikator aktif
│   │   └── CustomCursor.tsx             # Kursor halus desktop (ramah aksesibilitas)
│   ├── data/
│   │   ├── businessInfo.ts              # Data identitas, nomor WA, dan alamat
│   │   ├── portfolioData.ts             # 41 proyek terklasifikasi dengan spesifikasi
│   │   ├── servicesData.ts              # Detail 6 layanan & material pilihan
│   │   └── reviewsData.ts               # Testimoni riil pelanggan Google Maps
│   ├── App.tsx                          # Root orchestrator & integrasi GSAP ScrollTrigger
│   ├── main.tsx                         # Entry point React 19
│   └── index.css                        # Tailwind CSS v4 & custom tokens
├── index.html                           # SEO meta tags, OpenGraph, Favicon logo asli
├── package.json                         # Dependensi lengkap (React, GSAP, Tailwind v4, Lucide)
├── tsconfig.json                        # Konfigurasi TypeScript ketat
└── vite.config.ts                       # Konfigurasi build Vite
```

---

## 🚀 Menjalankan Secara Lokal

1. Install dependensi:
   ```bash
   npm install
   ```

2. Jalankan development server:
   ```bash
   npm run dev
   ```
   Akses di `http://localhost:3000`.

3. Build untuk produksi:
   ```bash
   npm run build
   ```

---

## 🌐 Panduan Deployment

- **Vercel / Netlify**: Hubungkan repositori GitHub, build command: `npm run build`, publish directory: `dist`.
- **GitHub Pages**: Jalankan `npm run build` dan publikasikan folder `dist`.
