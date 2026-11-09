/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { GallerySection } from "./components/GallerySection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CtaSection } from "./components/CtaSection";
import { LocationAndContactSection } from "./components/LocationAndContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { CustomCursor } from "./components/CustomCursor";
import { ProjectCategory } from "./data/portfolioData";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<ProjectCategory>("Semua");

  useEffect(() => {
    // Guard against server-side execution and reduced motion preferences
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Context for easy clean-up
    const ctx = gsap.context(() => {
      // 1. Initial Page Entrance Reveal
      gsap.from("header", {
        y: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // 2. Animate Section Headers on Scroll
      const sectionHeaders = document.querySelectorAll("h2");
      sectionHeaders.forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSelectServiceCategory = (category: string) => {
    setSelectedGalleryCategory(category as ProjectCategory);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#08090A] text-[#F5F4F0] flex flex-col selection:bg-[#E7A94B] selection:text-[#08090A]">
      <CustomCursor />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectCategory={handleSelectServiceCategory} />
        <GallerySection initialCategory={selectedGalleryCategory} />
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
        <LocationAndContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
