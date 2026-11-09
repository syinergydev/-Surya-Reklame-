import React from "react";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Globe, Star } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "../data/businessInfo";

export const LocationAndContactSection: React.FC = () => {
  return (
    <section id="kontak" className="py-24 sm:py-32 bg-[#101113] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E7A94B] mb-3">
              <span>Lokasi & Kontak Langsung</span>
              <span className="text-white/20">/</span>
              <span>Workshop Sidoarjo</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F4F0] tracking-tight">
              Visit or Connect.
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#A7A9AD] leading-relaxed">
            Kunjungi workshop kami di Sidoarjo untuk melihat contoh bahan secara langsung, atau hubungi kami melalui saluran komunikasi resmi.
          </p>
        </div>

        {/* Content Layout: Contact Cards + Google Maps Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Contact & Location Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#16181B] border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E7A94B]/10 border border-[#E7A94B]/20 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#E7A94B]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#F5F4F0] mb-1">
                    Alamat Workshop
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A9AD] leading-relaxed mb-4">
                    {BUSINESS_INFO.address.full}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E7A94B] hover:text-[#F2BD69] transition-colors"
                  >
                    <span>Buka Rute di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-2xl bg-[#08090A] border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E7A94B]/10 border border-[#E7A94B]/20 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-[#E7A94B]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-[#F5F4F0] mb-1">
                    Jam Operasional
                  </h3>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-[#A7A9AD] mb-1">
                    <span>{BUSINESS_INFO.operatingHours.days}</span>
                    <span className="font-medium text-[#F5F4F0]">
                      {BUSINESS_INFO.operatingHours.hours}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#A7A9AD]">
                    <span>Hari Minggu & Libur Nasional</span>
                    <span className="text-[#E7A94B]">Tutup / Chat WA Aktif</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#16181B] border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E7A94B]/10 border border-[#E7A94B]/20 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-[#E7A94B]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-[#F5F4F0] mb-1">
                    WhatsApp & Telepon
                  </h3>
                  <p className="text-base font-semibold text-[#F5F4F0] mb-3">
                    {BUSINESS_INFO.phone}
                  </p>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E7A94B] hover:bg-[#F2BD69] text-[#08090A] text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#E7A94B]/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Mulai Chat WhatsApp Sekarang</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Frame (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl overflow-hidden border border-white/10 bg-[#08090A] min-h-[420px]">
            {/* Maps Header Bar */}
            <div className="px-6 py-4 bg-[#16181B] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E7A94B]" />
                <span className="text-xs font-semibold text-[#F5F4F0]">
                  Surya Reklame dan Advertising
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#E7A94B]">
                <Star className="w-3.5 h-3.5 fill-[#E7A94B]" />
                <span className="font-bold">5.0</span>
                <span className="text-[#A7A9AD]">(30 Ulasan)</span>
              </div>
            </div>

            {/* Embedded Responsive Map */}
            <div className="flex-1 w-full min-h-[340px] relative">
              <iframe
                title="Peta Lokasi Surya Reklame Sidoarjo"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105"
              />
            </div>

            {/* Maps Quick Actions Footer */}
            <div className="p-4 bg-[#16181B] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#A7A9AD]">
                Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61224
              </span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#232529] hover:bg-[#32363D] text-[#F5F4F0] font-medium transition-colors inline-flex items-center gap-1.5"
              >
                <span>Buka di Aplikasi Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E7A94B]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
