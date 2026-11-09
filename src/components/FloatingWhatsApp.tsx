import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink } from "../data/businessInfo";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Quick Tooltip Bubble */}
      {showTooltip && (
        <div className="relative p-3 rounded-xl bg-[#16181B] text-[#F5F4F0] border border-white/10 shadow-2xl backdrop-blur-md max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-[#A7A9AD] hover:text-white"
            aria-label="Tutup petunjuk WhatsApp"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-xs font-semibold text-[#E7A94B] mb-0.5">
            Konsultasi Gratis
          </p>
          <p className="text-[11px] text-[#A7A9AD] pr-3">
            Tanyakan kebutuhan reklame, estimasi harga & desain via WhatsApp.
          </p>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat WhatsApp Surya Reklame"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        {/* Pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10" />
      </a>
    </div>
  );
};
