import React, { useState, useMemo } from "react";
import { Filter, Maximize2, MapPin, Tag } from "lucide-react";
import { PORTFOLIO_PROJECTS, ProjectCategory, ProjectItem } from "../data/portfolioData";
import { LightboxModal } from "./LightboxModal";

const CATEGORIES: ProjectCategory[] = [
  "Semua",
  "Neon Box",
  "Huruf Timbul",
  "Papan Nama",
  "Signage",
  "Media Promosi",
  "Lainnya",
];

interface GallerySectionProps {
  initialCategory?: ProjectCategory;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ initialCategory = "Semua" }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(initialCategory);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Semua") {
      return PORTFOLIO_PROJECTS;
    }
    return PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const activeProject = activeLightboxIndex !== null ? filteredProjects[activeLightboxIndex] : null;

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredProjects.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredProjects.length) % filteredProjects.length
      );
    }
  };

  return (
    <section id="galeri" className="py-24 sm:py-32 bg-[#101113] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#E7A94B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E7A94B] mb-3">
              <span>Arsip Pekerjaan Asli</span>
              <span className="text-white/20">/</span>
              <span>Dokumentasi Proyek</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F4F0] tracking-tight">
              Selected Works & Showcase.
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#A7A9AD] leading-relaxed">
            Eksplorasi dokumentasi pengerjaan asli Surya Reklame. Klik gambar untuk melihat resolusi penuh, spesifikasi material, dan rincian proyek.
          </p>
        </div>

        {/* Filter Controls (Clean Segmented / Button Style, Zero-Pill) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "Semua"
                ? PORTFOLIO_PROJECTS.length
                : PORTFOLIO_PROJECTS.filter((p) => p.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveLightboxIndex(null);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-[#E7A94B] text-[#08090A] shadow-md shadow-[#E7A94B]/20"
                    : "bg-[#16181B] text-[#A7A9AD] hover:text-[#F5F4F0] hover:bg-[#232529] border border-white/5"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isActive
                      ? "bg-[#08090A]/20 text-[#08090A]"
                      : "bg-[#08090A] text-[#A7A9AD]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => {
            // Editorial variation: feature some cards with larger spans
            const isSpan2Col = index % 7 === 0 && index !== 0;

            return (
              <div
                key={project.id}
                onClick={() => setActiveLightboxIndex(index)}
                className={`group relative rounded-xl overflow-hidden border border-white/10 bg-[#08090A] cursor-pointer hover:border-[#E7A94B]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E7A94B]/10 flex flex-col justify-between ${
                  isSpan2Col ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Image Container with Proper Aspect Ratio */}
                <div
                  className={`relative w-full overflow-hidden bg-[#16181B] ${
                    isSpan2Col
                      ? "aspect-[16/9]"
                      : project.aspect === "portrait"
                      ? "aspect-[3/4]"
                      : project.aspect === "square"
                      ? "aspect-square"
                      : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                  {/* Hover Floating Action Icon */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-[#08090A]/80 text-[#F5F4F0] group-hover:text-[#E7A94B] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md border border-white/10">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Category Chip Floating */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#08090A]/80 text-[10px] font-mono tracking-wider uppercase text-[#E7A94B] backdrop-blur-md border border-white/10">
                    {project.category}
                  </div>
                </div>

                {/* Card Editorial Footer */}
                <div className="p-4 bg-[#101113] border-t border-white/5 flex flex-col justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#F5F4F0] group-hover:text-[#E7A94B] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-[#A7A9AD] line-clamp-1 mt-0.5">
                      {project.client}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#A7A9AD] pt-1 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E7A94B]" />
                      {project.location}
                    </span>
                    <span className="text-[10px] text-[#E7A94B] font-semibold group-hover:translate-x-1 transition-transform">
                      Detail →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Counter Summary */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A9AD]">
          <p>
            Menampilkan <span className="text-[#F5F4F0] font-semibold">{filteredProjects.length}</span> dari total{" "}
            <span className="text-[#F5F4F0] font-semibold">{PORTFOLIO_PROJECTS.length}</span> dokumentasi asli Surya Reklame.
          </p>
          <p className="text-[11px] italic">
            Semua foto adalah hasil pekerjaan asli di workshop & lokasi pemasangan klien Sidoarjo dan sekitarnya.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={activeLightboxIndex !== null}
        project={activeProject}
        currentIndex={activeLightboxIndex || 0}
        totalCount={filteredProjects.length}
        onClose={() => setActiveLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
