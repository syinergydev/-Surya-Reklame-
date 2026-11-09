import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("[role='button']") ||
        target?.tagName === "INPUT"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`rounded-full transition-all duration-200 border ${
          isHovered
            ? "w-10 h-10 bg-[#E7A94B]/20 border-[#E7A94B] scale-110"
            : "w-3 h-3 bg-[#E7A94B] border-transparent"
        }`}
      />
    </div>
  );
};
