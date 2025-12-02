"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const storySections = [
  {
    id: "01",
    title: "The Royal Heritage",
    text: "Ambis Kitchen brings you the culinary secrets of Thrippunithura, the land of Royals. Our recipes are handed down through generations, preserving the authentic taste of the Cochin Royal Family's feasts.",
    image: "/images/logo.jpg", 
  },
  {
    id: "02",
    title: "Mastery in Payasam",
    text: "Our signature Pink Palada Payasam is not just a dessert; it's an emotion. Slow-cooked for hours in heavy bronze urlis until the milk condenses to a rich, pink hue.",
    image: "/images/payasam.jpeg", 
  },
  {
    id: "03",
    title: "Freshness Guaranteed",
    text: "We believe in zero preservatives. Every Boli is rolled by hand, and every curry is made fresh on the day of delivery. We bring the warmth of a mother's kitchen straight to your doorstep.",
    image: "/images/curries.jpg", 
  },
];

export default function AboutStory() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Only run GSAP ScrollTrigger on Desktop (min-width: 768px)
    // This prevents conflicts on mobile scrolling
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
          // 1. Pin the right side Image column
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: ".image-column",
            scrub: true,
          });

          // 2. Change desktop images on scroll
          storySections.forEach((section, index) => {
            ScrollTrigger.create({
              trigger: `#story-text-${index}`,
              start: "top center", 
              end: "bottom center",
              onEnter: () => updateImage(section.image),
              onEnterBack: () => updateImage(section.image),
            });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const updateImage = (src) => {
    if (imageRef.current) {
        gsap.to(imageRef.current, { opacity: 0, duration: 0.2, onComplete: () => {
            imageRef.current.src = src;
            gsap.to(imageRef.current, { opacity: 1, duration: 0.2 });
        }});
    }
  };

  return (
    <section ref={containerRef} className="relative bg-stone-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row">
        
        {/* LEFT COLUMN: Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-16 md:gap-32 pb-10 md:pb-32">
            <div className="mb-8 md:mb-20">
                <span className="text-amber-500 font-bold tracking-widest uppercase mb-2 block text-sm md:text-base">About Us</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                    More Than Just <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                        Food Delivery
                    </span>
                </h2>
            </div>

            {storySections.map((section, index) => (
                <div key={index} id={`story-text-${index}`} className="flex flex-col justify-center relative">
                    {/* Background Number */}
                    <span className="text-6xl md:text-8xl font-bold text-stone-800 absolute -top-8 -left-4 md:-ml-6 opacity-50 z-0">
                        {section.id}
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 mb-4 relative z-10">
                        {section.title}
                    </h3>

                    {/* --- MOBILE ONLY IMAGE --- */}
                    {/* This block is visible on mobile (block) and hidden on desktop (md:hidden) */}
                    <div className="block md:hidden w-full h-64 rounded-xl overflow-hidden mb-6 border border-stone-700 relative z-10 shadow-xl">
                         <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                    </div>
                    {/* ------------------------- */}

                    <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-md relative z-10">
                        {section.text}
                    </p>
                </div>
            ))}
        </div>

        {/* RIGHT COLUMN: Sticky Image (Desktop Only) */}
        {/* 'hidden md:flex' ensures this large layout only appears on tablet/desktop */}
        <div className="hidden md:flex image-column w-1/2 h-screen sticky top-0 items-center justify-center p-12">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-stone-700 shadow-2xl">
                <div className="absolute inset-4 border border-amber-500/30 rounded-xl z-20 pointer-events-none"></div>
                <img 
                    ref={imageRef}
                    src={storySections[0].image} 
                    alt="Ambis Story" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent z-10"></div>
            </div>
        </div>

      </div>
    </section>
  );
}