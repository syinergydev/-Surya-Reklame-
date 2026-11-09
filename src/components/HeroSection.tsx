import React, { useState, useEffect } from "react";
import { ArrowDown, MessageCircle, Star, ShieldCheck, MapPin, Sparkles, ChevronRight } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "../data/businessInfo";

const HERO_SHOWCASE_IMAGES = [
  {
    src: "/assets/projects/project_32.jpeg",
    title: "Sat Samapta Polresta Sidoarjo",
    category: "Neon Box Outdoor Illuminated",
  },
  {
    src: "/assets/projects/project_14.jpeg",
    title: "MTs Progresif Bumi Shalawat",
    category: "Huruf Timbul Halo-Lit Backlight",
  },
  {
    src: "/assets/projects/project_31.jpeg",
    title: "GADAIKU by Hartadinata Abadi",
    category: "Pylon Pole Neon Box Outdoor",
  },
  {
    src: "/assets/projects/project_17.jpeg",
    title: "BOLDë Custom Rounded Sign",
    category: "Neon Box Akrilik Bending",
  },
];

export const HeroSection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % HERO_SHOWCASE_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#08090A]">
      {/* Background Image Showcase with Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        {HERO_SHOWCASE_IMAGES.map((item, index) => (
          <div
            key={item.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeImageIndex ? "opacity-45 scale-100" : "opacity-0 scale-105"
            } transform transition-transform duration-1000`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Sophisticated Architectural Dark Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/70 to-[#08090A]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#08090A_90%)]" />

        {/* Subtle Warm Amber Glow Ambient Element */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E7A94B]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Subtle Verified Reputation Marker */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#16181B]/80 border border-white/10 text-xs text-[#A7A9AD] mb-8 backdrop-blur-md">
            <span className="flex items-center gap-1 text-[#E7A94B] font-semibold">
              <Star className="w-3.5 h-3.5 fill-[#E7A94B]" />
              5.0
            </span>
            <span className="text-white/20">|</span>
            <span>30 Ulasan Google Maps</span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1 text-[#F5F4F0]">
              <MapPin className="w-3 h-3 text-[#E7A94B]" />
              Sidoarjo, Jawa Timur
            </span>
          </div>

          {/* Headline Utama (Editorial, Bold, Controlled Line Breaks) */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-7xl text-[#F5F4F0] tracking-tight leading-[1.08] mb-6 text-balance">
            Creating Visual Identity <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F4F0] via-[#E7A94B] to-[#F5F4F0]">
              That Stands Out.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-[#A7A9AD] max-w-2xl font-normal leading-relaxed mb-10 text-balance">
            Solusi reklame, signage, dan media visual profesional untuk memperkuat identitas bisnis Anda.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
            <a
              href="#galeri"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#E7A94B] hover:bg-[#F2BD69] text-[#08090A] text-sm font-bold tracking-wide uppercase transition-all duration-200 shadow-xl shadow-[#E7A94B]/20 hover:shadow-[#E7A94B]/35 hover:-translate-y-0.5"
            >
              <span>Jelajahi Hasil Pekerjaan</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#16181B] hover:bg-[#232529] text-[#F5F4F0] text-sm font-semibold tracking-wide border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-[#E7A94B]" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>

          {/* Active Showcase Mini Switcher (Real Proof Carousel Controller) */}
          <div className="w-full max-w-xl p-3 rounded-xl bg-[#101113]/80 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs text-[#A7A9AD] mb-2 px-1">
              <span className="uppercase tracking-wider font-semibold text-[#E7A94B]">
                Dokumentasi Asli Proyek
              </span>
              <span className="tabular-nums">
                0{activeImageIndex + 1} / 0{HERO_SHOWCASE_IMAGES.length}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {HERO_SHOWCASE_IMAGES.map((item, idx) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`group relative h-12 rounded-lg overflow-hidden border text-left transition-all ${
                    idx === activeImageIndex
                      ? "border-[#E7A94B] ring-1 ring-[#E7A94B]/50"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Lihat dokumentasi ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className={`absolute inset-0 bg-[#08090A]/40 transition-opacity ${
                      idx === activeImageIndex ? "opacity-0" : "opacity-40 group-hover:opacity-10"
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-[#A7A9AD] text-center font-medium truncate">
              {HERO_SHOWCASE_IMAGES[activeImageIndex].title} ·{" "}
              <span className="text-[#F5F4F0]">
                {HERO_SHOWCASE_IMAGES[activeImageIndex].category}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[11px] text-[#A7A9AD] opacity-70 hover:opacity-100 transition-opacity">
        <a href="#tentang" className="flex flex-col items-center gap-1">
          <span className="tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E7A94B]" />
        </a>
      </div>
    </section>
  );
};
