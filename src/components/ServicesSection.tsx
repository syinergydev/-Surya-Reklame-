import React, { useState } from "react";
import { MessageCircle, ArrowRight, Eye, Check } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "../data/servicesData";
import { getWhatsAppLink } from "../data/businessInfo";

interface ServicesSectionProps {
  onSelectCategory?: (category: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectCategory }) => {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_DATA[0]);

  return (
    <section id="layanan" className="py-24 sm:py-32 bg-[#08090A] relative overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Lead */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E7A94B] mb-3">
              <span>Layanan Spesialisasi</span>
              <span className="text-white/20">/</span>
              <span>Katalog Produksi</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F4F0] tracking-tight">
              Crafted for Visual Impact.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#A7A9AD] leading-relaxed">
            Dikerjakan dengan ketelitian teknis, material pilihan, dan pencahayaan optimal untuk memperkuat kredibilitas setiap brand.
          </p>
        </div>

        {/* 6 Services Grid with Rich Hover Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES_DATA.map((service) => {
            const isSelected = activeService.id === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#16181B] border-[#E7A94B]/50 shadow-xl shadow-[#E7A94B]/5"
                    : "bg-[#101113] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Image Slot with Scrim */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#08090A]">
                  <img
                    src={service.image}
                    alt={`Layanan ${service.title} Surya Reklame`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101113] via-transparent to-transparent opacity-90" />
                  
                  {/* Service Number Tag */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-[#08090A]/80 border border-white/10 backdrop-blur-md">
                    <span className="text-xs font-mono font-bold text-[#E7A94B] tabular-nums">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#F5F4F0] mb-2 group-hover:text-[#E7A94B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-[#E7A94B] mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-[#A7A9AD] leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Feature Highlights */}
                    <ul className="space-y-1.5 mb-6 text-[11px] text-[#A7A9AD]">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#E7A94B] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectCategory) {
                          onSelectCategory(service.filterCategory);
                        }
                        const galeriEl = document.getElementById("galeri");
                        if (galeriEl) {
                          galeriEl.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-xs font-semibold text-[#F5F4F0] hover:text-[#E7A94B] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Contoh Proyek</span>
                    </button>

                    <a
                      href={getWhatsAppLink(service.waPrompt)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#E7A94B] hover:text-[#F2BD69] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Konsultasi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Material & Quality Standards Spotlight Strip */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#101113] via-[#16181B] to-[#101113] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-lg text-[#F5F4F0]">
              Butuh Spesifikasi Khusus untuk Desain Custom?
            </h4>
            <p className="text-xs sm:text-sm text-[#A7A9AD]">
              Kami melayani konsultasi ukuran, pemilihan bahan (akrilik, stainless, galvalum, flexi backlit), dan estimasi biaya tanpa komitmen.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Halo Surya Reklame, saya ingin berkonsultasi mengenai spesifikasi custom reklame.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-[#E7A94B] hover:bg-[#F2BD69] text-[#08090A] text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 whitespace-nowrap shadow-lg shadow-[#E7A94B]/20 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya Spesifikasi Via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
