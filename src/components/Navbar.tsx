import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowUpRight, Phone, MapPin } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "../data/businessInfo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Galeri Portofolio", href: "#galeri" },
    { label: "Proses", href: "#proses" },
    { label: "Ulasan", href: "#testimoni" },
    { label: "Lokasi & Kontak", href: "#kontak" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#08090A]/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
            : "py-5 bg-gradient-to-b from-[#08090A]/90 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark & Official Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A94B] rounded-lg"
              aria-label="Surya Reklame dan Advertising - Kembali ke Atas"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-white/15 bg-[#101113] p-0.5 shrink-0 group-hover:border-[#E7A94B]/50 transition-colors">
                <img
                  src="/assets/logo-surya-reklame.jpg"
                  alt="Logo Surya Reklame"
                  className="w-full h-full object-cover object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#F5F4F0] whitespace-nowrap leading-tight">
                  SURYA REKLAME
                </span>
                <span className="text-[11px] text-[#A7A9AD] font-medium tracking-wide uppercase whitespace-nowrap">
                  Advertising & Signage · Sidoarjo
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Single-Line, Anti-Slop) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#A7A9AD]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#F5F4F0] hover:text-[#E7A94B] transition-colors whitespace-nowrap shrink-0 py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E7A94B] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action CTA & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#E7A94B] hover:bg-[#F2BD69] text-[#08090A] text-xs font-semibold tracking-wide uppercase transition-all duration-200 shadow-lg shadow-[#E7A94B]/20 hover:shadow-[#E7A94B]/30 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi WhatsApp</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg bg-[#16181B] border border-white/10 text-[#F5F4F0] hover:text-[#E7A94B] focus:outline-none focus:ring-2 focus:ring-[#E7A94B]"
                aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#08090A]/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-6 border-b border-white/10">
              <img
                src="/assets/logo-surya-reklame.jpg"
                alt="Logo Surya Reklame"
                className="w-10 h-10 rounded-md object-cover"
              />
              <div>
                <p className="font-display font-bold text-white text-base">Surya Reklame</p>
                <p className="text-xs text-[#A7A9AD]">Sidoarjo, Jawa Timur</p>
              </div>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium text-[#F5F4F0] hover:bg-[#16181B] hover:text-[#E7A94B] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A7A9AD]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#E7A94B] text-[#08090A] text-sm font-semibold tracking-wide uppercase transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi via WhatsApp</span>
            </a>
            <div className="flex items-center justify-between text-xs text-[#A7A9AD] px-2 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E7A94B]" /> Suko, Sidoarjo
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E7A94B]" /> 0821-3941-4885
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
