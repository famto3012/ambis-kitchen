"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storySections = [
  {
    id: "01",
    subtitle: "The Origin",
    title: "The Royal Heritage",
    text: "Ambis Kitchen brings you the culinary secrets of Thrippunithura. Our recipes are handed down through generations, preserving the authentic taste of the Cochin Royal Family's feasts.",
    image: "/images/royal.png",
    color: "bg-stone-900", // Card background color
  },
  {
    id: "02",
    subtitle: "The Signature",
    title: "Mastery in Payasam",
    text: "Our signature Palada Payasam is an emotion. Slow-cooked for hours in heavy bronze urlis until the milk condenses to a rich, pink hue.",
    image: "/images/payasamss.png",
    color: "bg-stone-800",
  },
  {
    id: "03",
    subtitle: "The Promise",
    title: "Freshness Guaranteed",
    text: "Zero preservatives. Every Boli is rolled by hand, and every curry is made fresh. We bring the warmth of a mother's kitchen straight to your doorstep.",
    image: "/images/curries.png",
    color: "bg-stone-900",
  },
];

export default function AboutStoryStacked() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    let ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        // Skip the last card because it doesn't need to scale down
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];

        // Animate the CURRENT card as the NEXT card scrolls into view
        gsap.to(card, {
          scale: 0.9, // Shrink slightly
          opacity: 0.6, // Fade out slightly
          filter: "blur(5px)", // Add blur for depth
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top top", // When card hits top of viewport
            end: "bottom top", // When card leaves viewport
            scrub: true,
            // We use the next card as a trigger reference for precise timing
            endTrigger: nextCard, 
            end: "top top", 
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black text-white py-20">
      
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
          Our Journey
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4">
          A Taste of <span className="text-amber-500 italic">Royalty</span>
        </h2>
      </div>

      {/* Stacking Cards Container */}
      <div className="w-full px-4 md:px-0 pb-32">
        {storySections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`sticky top-8 md:top-12 h-[95vh] md:h-[80vh] w-full max-w-6xl mx-auto rounded-[2rem] overflow-hidden border border-stone-700 shadow-2xl flex flex-col md:flex-row ${section.color}`}
            style={{ 
                // Creating a slight stacking offset visual
                zIndex: index + 1,
                transformOrigin: "center top" 
            }}
          >
            {/* Left: Content */}
            <div className="w-full md:w-5/12 p-8 md:p-16 flex flex-col justify-center relative">
              
              {/* Giant Background Number */}
              <span className="absolute top-4 left-6 text-[7rem] font-bold text-white/5 pointer-events-none select-none leading-none">
                {section.id}
              </span>

              <div className="relative z-10">
                <div className="inline-block px-3 py-1 border border-amber-500/50 rounded-full text-amber-400 text-xs tracking-wider uppercase mb-6">
                  {section.subtitle}
                </div>
                <h3 className="text-2xl md:text-4xl font-serif font-bold mb-6 leading-tight text-amber-50">
                  {section.title}
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  {section.text}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="w-16 h-1 bg-amber-600 mt-10"></div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-7/12 h-64 md:h-auto relative overflow-hidden group">
               {/* Overlay gradient */}
               <div className="absolute inset-0 md:bg-gradient-to-r from-stone-900/90 to-transparent z-10 md:w-1/3"></div>
               
               <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}