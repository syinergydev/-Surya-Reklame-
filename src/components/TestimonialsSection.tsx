import React from "react";
import { Star, Quote, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { REVIEWS_DATA } from "../data/reviewsData";
import { BUSINESS_INFO } from "../data/businessInfo";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="py-24 sm:py-32 bg-[#101113] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E7A94B] mb-3">
              <span>Bukti Nyata Kepuasan</span>
              <span className="text-white/20">/</span>
              <span>Ulasan Google Maps</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F4F0] tracking-tight">
              Trusted by Our Customers.
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-[#08090A] p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-1 text-[#E7A94B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#E7A94B]" />
              ))}
            </div>
            <div className="border-l border-white/15 pl-4 text-xs">
              <p className="font-bold text-[#F5F4F0] text-sm tabular-nums">
                5.0 dari 5.0 Bintang
              </p>
              <p className="text-[#A7A9AD]">30 ulasan terverifikasi</p>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl bg-[#08090A] border border-white/10 hover:border-[#E7A94B]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#16181B] flex items-center justify-center text-[#E7A94B] border border-white/5">
                    <Quote className="w-5 h-5 rotate-180" />
                  </div>
                  <div className="flex items-center gap-1 text-[#E7A94B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E7A94B]" />
                    ))}
                  </div>
                </div>

                {/* Real Testimonial Text */}
                <blockquote className="text-base sm:text-lg text-[#F5F4F0] font-normal leading-relaxed mb-6 italic">
                  "{review.quote}"
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#A7A9AD]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E7A94B]" />
                  <span className="font-medium text-[#F5F4F0]">{review.source}</span>
                </div>
                {review.highlightTag && (
                  <span className="text-[11px] text-[#A7A9AD] font-mono">
                    {review.highlightTag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps External Verification Button */}
        <div className="text-center pt-4">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#16181B] hover:bg-[#232529] border border-white/10 hover:border-[#E7A94B]/50 text-xs font-semibold text-[#F5F4F0] hover:text-[#E7A94B] uppercase tracking-wider transition-all duration-200"
          >
            <span>Lihat Semua Ulasan di Google Maps</span>
            <ArrowUpRight className="w-4 h-4 text-[#E7A94B]" />
          </a>
        </div>
      </div>
    </section>
  );
};
