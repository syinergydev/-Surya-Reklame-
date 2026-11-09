import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Tag, Layers, Check } from "lucide-react";
import { ProjectItem } from "../data/portfolioData";
import { getWhatsAppLink } from "../data/businessInfo";

interface LightboxModalProps {
  isOpen: boolean;
  project: ProjectItem | null;
  currentIndex: number;
  totalCount: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  project,
  currentIndex,
  totalCount,
  onClose,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !project) return null;

  const consultationPrompt = `Halo Surya Reklame, saya melihat hasil pengerjaan "${project.title}" (${project.category}) di website dan tertarik membuat reklame dengan konsep serupa. Mohon info estimasi biaya dan spesifikasinya.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#08090A]/95 backdrop-blur-xl p-3 sm:p-6"
    >
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl max-h-[92vh] flex flex-col lg:flex-row bg-[#101113] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Close Button Top Right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#08090A]/80 hover:bg-[#16181B] text-[#F5F4F0] hover:text-[#E7A94B] border border-white/10 transition-colors"
          aria-label="Tutup pratinjau foto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Viewing Column */}
        <div className="relative flex-1 bg-[#08090A] flex items-center justify-center p-4 sm:p-8 min-h-[360px] lg:min-h-[580px] overflow-hidden select-none">
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#101113]/80 hover:bg-[#16181B] text-[#F5F4F0] hover:text-[#E7A94B] border border-white/10 transition-colors shadow-lg"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Navigation Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#101113]/80 hover:bg-[#16181B] text-[#F5F4F0] hover:text-[#E7A94B] border border-white/10 transition-colors shadow-lg"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Item Counter Floating */}
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded-md bg-[#08090A]/80 border border-white/10 text-xs font-mono text-[#A7A9AD] tabular-nums backdrop-blur-md">
            {currentIndex + 1} / {totalCount}
          </div>
        </div>

        {/* Editorial Information Sidebar Column */}
        <div className="w-full lg:w-96 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#101113] overflow-y-auto">
          <div className="space-y-5">
            {/* Category and Location Header */}
            <div className="flex items-center justify-between text-xs text-[#A7A9AD]">
              <span className="flex items-center gap-1.5 text-[#E7A94B] font-semibold uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5" />
                {project.category}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E7A94B]" />
                {project.location}
              </span>
            </div>

            {/* Project Title */}
            <div>
              <h3 id="lightbox-title" className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F0] leading-tight mb-2">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-[#A7A9AD]">
                Klien: <span className="text-[#F5F4F0]">{project.client}</span>
              </p>
            </div>

            {/* Editorial Description */}
            <div className="p-4 rounded-xl bg-[#16181B] border border-white/5">
              <p className="text-xs text-[#A7A9AD] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Material & Technical Specifications */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#A7A9AD] mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#E7A94B]" />
                Spesifikasi & Material Pilihan:
              </p>
              <ul className="space-y-1.5">
                {project.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[#F5F4F0]">
                    <Check className="w-3.5 h-3.5 text-[#E7A94B] shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTA for WhatsApp Inquiry */}
          <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
            <a
              href={getWhatsAppLink(consultationPrompt)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#E7A94B] hover:bg-[#F2BD69] text-[#08090A] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#E7A94B]/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tanya Reklame Seperti Ini</span>
            </a>

            <p className="text-[11px] text-center text-[#A7A9AD]">
              Konsultasi langsung via WhatsApp · Respons cepat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
