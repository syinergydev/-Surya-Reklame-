import React from "react";
import { MessageCircle, Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "../data/businessInfo";

export const CtaSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#08090A] overflow-hidden border-t border-b border-white/10">
      {/* Background Project Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/projects/project_32.jpeg"
          alt="Hasil Pengerjaan Neon Box Surya Reklame"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/85 to-[#08090A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#08090A_90%)]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E7A94B]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subhead Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181B] border border-white/10 text-xs font-semibold tracking-widest uppercase text-[#E7A94B] mb-6">
          <span>Siap Mewujudkan Identitas Brand Anda</span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F4F0] tracking-tight leading-[1.08] mb-6 text-balance">
          Let’s Make Your Brand <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F4F0] via-[#E7A94B] to-[#F5F4F0]">
            Impossible to Ignore.
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-[#A7A9AD] max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          Diskusikan kebutuhan reklame dan media visual bisnis Anda bersama Surya Reklame.
        </p>

        {/* Big Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E7A94B] hover:bg-[#F2BD69] text-[#08090A] text-sm sm:text-base font-extrabold tracking-wider uppercase transition-all duration-300 shadow-2xl shadow-[#E7A94B]/25 hover:shadow-[#E7A94B]/40 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Konsultasi Sekarang</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          <a
            href="tel:082139414885"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#16181B] hover:bg-[#232529] border border-white/10 text-[#F5F4F0] text-sm font-semibold tracking-wide transition-all"
          >
            <Phone className="w-4 h-4 text-[#E7A94B]" />
            <span>Hubungi: 0821-3941-4885</span>
          </a>
        </div>

        {/* Quick Location & Schedule Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 w-full max-w-3xl text-xs text-[#A7A9AD]">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#E7A94B] shrink-0" />
            <span>Jl. Raya Suko No.64, Sidoarjo</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#E7A94B] shrink-0" />
            <span>Senin – Sabtu, 08:00 – 16:00 WIB</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#E7A94B] shrink-0" />
            <span>WhatsApp Fast Response</span>
          </div>
        </div>
      </div>
    </section>
  );
};
