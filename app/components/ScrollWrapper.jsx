"use client";
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollWrapper({ children }) {
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Target elements
      const heroSection = document.getElementById('hero-section');
      const contentLayer = document.getElementById('content-layer');

      if (heroSection && contentLayer) {
        // 2. Create the pinning effect
        ScrollTrigger.create({
          trigger: heroSection,
          start: "top top",
          endTrigger: contentLayer, 
          end: "top top", // Pin until the content layer hits the top
          pin: true,
          pinSpacing: false, // Allows content to slide OVER the pinned element
        });

        // 3. Optional: Add a slight parallax fade to the hero as it gets covered
        gsap.to(heroSection, {
          opacity: 0.5,
          scale: 0.95,
          scrollTrigger: {
            trigger: contentLayer,
            start: "top 100%", // When content starts entering view
            end: "top top",   // When content fully covers hero
            scrub: true
          }
        });
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}