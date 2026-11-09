import React from "react";
import { Star, MapPin, CheckCircle2, Shield, Wrench, Award, Layers } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "../data/businessInfo";

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-24 sm:py-32 bg-[#101113] relative overflow-hidden">
      {/* Background Architectural Ambient Light */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#E7A94B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Lead Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E7A94B] mb-3">
              <span>Profil Bisnis</span>
              <span className="text-white/20">/</span>
              <span>Surya Reklame & Advertising</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F4F0] tracking-tight">
              More Than Just Advertising.
            </h2>
          </div>

          <p className="max-w-xl text-base sm:text-lg text-[#A7A9AD] leading-relaxed">
            Surya Reklame dan Advertising menghadirkan berbagai kebutuhan reklame dan media visual untuk membantu bisnis tampil lebih dikenal, profesional, dan memiliki identitas yang kuat.
          </p>
        </div>

        {/* Editorial Asymmetric Layout: Visual Gallery + Narrative Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Showcase Composition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Primary Large Image: Workshop & Signage Array */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group bg-[#08090A]">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/assets/projects/project_27.jpeg"
                  alt="Workshop Surya Reklame Sidoarjo dan Hasil Pengerjaan Signage"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs text-[#F5F4F0]">
                <div>
                  <p className="font-semibold text-sm text-[#F5F4F0]">
                    Pusat Workshop & Produksi
                  </p>
                  <p className="text-[#A7A9AD] text-xs">
                    Jl. Raya Suko No.64, Ngemplak, Suko, Kec. Sidoarjo
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#101113]/80 border border-white/10 text-[11px] text-[#E7A94B] font-medium backdrop-blur-sm">
                  Dokumentasi Workshop
                </span>
              </div>
            </div>

            {/* Secondary Dual Images: On-site Installation & Halo-lit Detailing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative rounded-xl overflow-hidden border border-white/10 group bg-[#08090A]">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/projects/project_34.jpeg"
                    alt="Pemasangan Huruf Timbul Fasad SDMUDA Surabaya"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-xs">
                  <p className="font-semibold text-[#F5F4F0] text-xs">
                    Pemasangan On-Site Presisi
                  </p>
                  <p className="text-[11px] text-[#A7A9AD]">
                    Fasad Sekolah Adab Kesatrian
                  </p>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-white/10 group bg-[#08090A]">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/projects/project_10.jpeg"
                    alt="Pengujian Backlight Box Dinas PU Sidoarjo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-xs">
                  <p className="font-semibold text-[#F5F4F0] text-xs">
                    Quality Control & Lighting Check
                  </p>
                  <p className="text-[11px] text-[#A7A9AD]">
                    Uji Ketahanan Pencahayaan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Credentials & Values (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Real Google Maps Rating Panel */}
            <div className="p-6 rounded-2xl bg-[#16181B] border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#E7A94B]">
                  Reputasi Terverifikasi
                </span>
                <span className="text-xs text-[#A7A9AD]">Google Maps</span>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display font-extrabold text-5xl text-[#F5F4F0] tabular-nums">
                  5.0
                </span>
                <div className="flex items-center gap-1 text-[#E7A94B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E7A94B]" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#F5F4F0] font-medium mb-1">
                Berdasarkan 30 ulasan pelanggan nyata
              </p>
              <p className="text-xs text-[#A7A9AD] mb-4">
                Melayani berbagai kebutuhan usaha, pertokoan, lembaga pendidikan, instansi pemerintah, dan kepolisian di Sidoarjo dan sekitarnya.
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E7A94B] hover:text-[#F2BD69] font-semibold transition-colors"
              >
                <span>Buka Ulasan di Google Maps</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Core Values Based on Real Documentation */}
            <div className="p-6 rounded-2xl bg-[#08090A] border border-white/10 space-y-4">
              <h3 className="font-display font-bold text-lg text-[#F5F4F0]">
                Keunggulan Layanan Surya Reklame
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E7A94B]/10 border border-[#E7A94B]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-[#E7A94B]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F4F0]">Dijamin Aman & Bergaransi</h4>
                    <p className="text-xs text-[#A7A9AD] leading-relaxed">
                      Sistem kelistrikan terisolasi rapi, rangka las kuat, dan struktur tiang aman menghadapi cuaca luar ruangan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E7A94B]/10 border border-[#E7A94B]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Wrench className="w-4 h-4 text-[#E7A94B]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F4F0]">Berpengalaman & Dikerjakan Sendiri</h4>
                    <p className="text-xs text-[#A7A9AD] leading-relaxed">
                      Diproduksi langsung di workshop Sidoarjo oleh tenaga ahli berpengalaman dalam bending akrilik, laser cutting, dan perakitan LED.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E7A94B]/10 border border-[#E7A94B]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4 h-4 text-[#E7A94B]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F4F0]">Harga Bersaing & Terjangkau</h4>
                    <p className="text-xs text-[#A7A9AD] leading-relaxed">
                      Penawaran biaya langsung dari pembuat tanpa perantara makelar, sehingga lebih kompetitif dan ramah anggaran.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E7A94B]/10 border border-[#E7A94B]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E7A94B]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F4F0]">Material Kualitas Pilihan</h4>
                    <p className="text-xs text-[#A7A9AD] leading-relaxed">
                      Menggunakan akrilik tahan retak, plat galvalum tebal, dan LED berintensitas cahaya tinggi yang tahan bertahun-tahun.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink("Halo Surya Reklame, saya ingin berkonsultasi mengenai kebutuhan reklame untuk toko/bisnis saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#E7A94B] hover:bg-[#F2BD69] text-[#08090A] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#E7A94B]/20"
              >
                <span>Konsultasikan Kebutuhan Visual Anda</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
