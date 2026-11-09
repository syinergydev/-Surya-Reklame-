import React from "react";
import { MessageSquare, PenTool, Cog, Truck, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "../data/businessInfo";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Konsultasi",
    subtitle: "Penyampaian Kebutuhan",
    description: "Pelanggan menyampaikan kebutuhan reklame, jenis usaha, target lokasi pemasangan, preferensi ukuran, serta estimasi anggaran yang diinginkan.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Perencanaan",
    subtitle: "Konsep & Desain Visual",
    description: "Menentukan konsep visual, proporsi tipografi, pilihan bahan (akrilik, stainless, galvalum), warna pencahayaan LED, serta penawaran rincian biaya yang transparan.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Produksi",
    subtitle: "Fabrikasi di Workshop",
    description: "Proses pembuatan presisi di workshop Surya Reklame Sidoarjo sesuai kesepakatan desain, meliputi pemotongan laser, pembentukan huruf, pengelasan rangka, dan pengujian kelistrikan.",
    icon: Cog,
  },
  {
    step: "04",
    title: "Pemasangan",
    subtitle: "Instalasi On-Site",
    description: "Hasil pekerjaan dipasang rapi dan kokoh di lokasi proyek oleh teknisi berpengalaman, memastikan keamanan struktural dan fungsi pencahayaan sempurna saat malam hari.",
    icon: Truck,
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="proses" className="py-24 sm:py-32 bg-[#08090A] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E7A94B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Lead Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E7A94B] mb-3">
              <span>Alur Kerja Transparan</span>
              <span className="text-white/20">/</span>
              <span>4 Tahapan Terarah</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F4F0] tracking-tight">
              From Concept to Visibility.
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#A7A9AD] leading-relaxed">
            Setiap proyek reklame dikerjakan melalui alur kerja yang jelas, komunikatif, dan teruji demi hasil yang presisi dan memuaskan.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative p-8 rounded-2xl bg-[#101113] border border-white/10 hover:border-[#E7A94B]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E7A94B]/5"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-extrabold text-[#E7A94B]/40 group-hover:text-[#E7A94B] transition-colors tabular-nums">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#16181B] border border-white/10 flex items-center justify-center text-[#F5F4F0] group-hover:text-[#E7A94B] group-hover:border-[#E7A94B]/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Titles */}
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#E7A94B] mb-1">
                    {item.subtitle}
                  </p>
                  <h3 className="font-display font-bold text-xl text-[#F5F4F0] mb-3">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-[#A7A9AD] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Index Line Indicator */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A7A9AD]">
                  <span>Tahap {index + 1} dari 4</span>
                  <span className="text-[#E7A94B] opacity-0 group-hover:opacity-100 transition-opacity">
                    Siap Berjalan →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#A7A9AD] mb-4">
            Punya ide atau sketsa kasar kebutuhan reklame Anda? Mari diskusikan bersama kami.
          </p>
          <a
            href={getWhatsAppLink("Halo Surya Reklame, saya ingin mulai berkonsultasi mengenai kebutuhan reklame untuk usaha saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#16181B] hover:bg-[#232529] border border-[#E7A94B]/40 text-[#F5F4F0] hover:text-[#E7A94B] text-xs font-semibold tracking-wider uppercase transition-all"
          >
            <span>Mulai Konsultasi Tahap 1 Gratis</span>
            <ArrowRight className="w-4 h-4 text-[#E7A94B]" />
          </a>
        </div>
      </div>
    </section>
  );
};
