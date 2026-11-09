import React from "react";
import { MessageCircle, MapPin, Phone, ExternalLink, ArrowUp, Star } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "../data/businessInfo";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#08090A] text-[#F5F4F0] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Official Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/20 bg-[#101113] p-0.5 shrink-0">
                <img
                  src="/assets/logo-surya-reklame.jpg"
                  alt="Logo Resmi Surya Reklame"
                  className="w-full h-full object-cover object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-display font-extrabold text-lg sm:text-xl text-[#F5F4F0] leading-tight">
                  SURYA REKLAME
                </p>
                <p className="text-xs text-[#A7A9AD] uppercase tracking-wider font-medium">
                  Advertising & Signage Specialist
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A7A9AD] leading-relaxed max-w-sm">
              Menghadirkan berbagai kebutuhan reklame, neon box, huruf timbul, dan media visual berkualitas tinggi untuk memperkuat citra dan kredibilitas bisnis Anda.
            </p>

            {/* Verified Google Maps Rating Stamp */}
            <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-[#101113] border border-white/10 text-xs text-[#A7A9AD]">
              <div className="flex items-center gap-1 text-[#E7A94B]">
                <Star className="w-3.5 h-3.5 fill-[#E7A94B]" />
                <span className="font-bold text-[#F5F4F0]">5.0 / 5.0</span>
              </div>
              <span className="text-white/20">|</span>
              <span>30 Ulasan Google Maps</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-display font-bold text-xs uppercase tracking-widest text-[#E7A94B]">
              Navigasi
            </p>
            <ul className="space-y-2 text-xs text-[#A7A9AD]">
              <li>
                <a href="#tentang" className="hover:text-[#E7A94B] transition-colors">
                  Tentang Perusahaan
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#E7A94B] transition-colors">
                  Daftar Layanan
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-[#E7A94B] transition-colors">
                  Galeri Portofolio
                </a>
              </li>
              <li>
                <a href="#proses" className="hover:text-[#E7A94B] transition-colors">
                  Alur Pengerjaan
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-[#E7A94B] transition-colors">
                  Ulasan Pelanggan
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#E7A94B] transition-colors">
                  Lokasi Workshop
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan Spesialisasi (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-display font-bold text-xs uppercase tracking-widest text-[#E7A94B]">
              Layanan Utama
            </p>
            <ul className="space-y-2 text-xs text-[#A7A9AD]">
              <li>Neon Box Bercahaya</li>
              <li>Huruf Timbul 3D (Stainless & Akrilik)</li>
              <li>Papan Nama Toko & Kantor</li>
              <li>Reklame Outdoor & Billboard</li>
              <li>Signage Interior & Wayfinding</li>
              <li>Plakat Akrilik & Media Promosi</li>
            </ul>
          </div>

          {/* Col 4: Saluran Komunikasi & Media Sosial Resmi (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-display font-bold text-xs uppercase tracking-widest text-[#E7A94B]">
              Saluran Resmi
            </p>
            <div className="space-y-2 text-xs text-[#A7A9AD]">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E7A94B] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#E7A94B]" />
                <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
              </a>

              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E7A94B] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#E7A94B]" />
                <span>Instagram: @neonbox_termurah.sidoarjo</span>
              </a>

              <a
                href={BUSINESS_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E7A94B] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#E7A94B]" />
                <span>TikTok: @neonbox_murah_sidoarjo</span>
              </a>

              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E7A94B] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#E7A94B]" />
                <span>Facebook: Surya Reklame</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E7A94B] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E7A94B]" />
                <span>Google Maps Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A9AD]">
          <p>© {new Date().getFullYear()} Surya Reklame dan Advertising Sidoarjo. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#E7A94B] transition-colors py-1"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
