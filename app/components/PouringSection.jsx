// // "use client";
// // import { useRef, useEffect, useState } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // export default function VideoScrollSection() {
// //   const containerRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const textRef = useRef(null);
// //   const progressRef = useRef(null);
// //   const scrollPromptRef = useRef(null);
  
// //   // State to track if video is ready to prevent white flashes
// //   const [isVideoReady, setIsVideoReady] = useState(false);

// // useEffect(() => {
// //     // 1. FIX: Declare ctx at the very top
// //     let ctx; 

// //     const video = videoRef.current;
    
// //     // Safety check: ensure video exists
// //     if (!video) return;

// //     // 2. Prepare Video
// //     video.pause();
// //     video.currentTime = 0;
// //     video.preload = "auto";
    
// //     // Define the animation function
// //     function initScrollAnimation(duration) {
// //        ctx = gsap.context(() => {
        
// //         const tl = gsap.timeline({
// //           scrollTrigger: {
// //             trigger: containerRef.current,
// //             start: "top top",
// //             end: "+=300%", 
// //             pin: true,
// //             scrub: 0.5, 
// //           },
// //         });

// //         // A. Animate Video Time
// //         tl.to(video, {
// //           currentTime: duration,
// //           ease: "none",
// //         });

// //         // B. Animate Progress Bar
// //         tl.fromTo(progressRef.current, 
// //             { scaleX: 0 },
// //             { scaleX: 1, ease: "none" },
// //             "<" 
// //         );

// //         // C. Fade out Prompt
// //         tl.to(scrollPromptRef.current, {
// //             opacity: 0,
// //             duration: 0.5 
// //         }, 0);

// //         // D. Parallax Text
// //         tl.to(textRef.current, {
// //             y: -100, 
// //             opacity: 0, 
// //             ease: "power1.in"
// //         }, "<");

// //       }, containerRef);
// //     }

// //     // Wait for metadata
// //     const handleLoadedMetadata = () => {
// //       setIsVideoReady(true);
// //       initScrollAnimation(video.duration);
// //     };

// //     // Logic to trigger animation
// //     if (video.readyState >= 1) {
// //       setIsVideoReady(true);
// //       initScrollAnimation(video.duration);
// //     } else {
// //       video.addEventListener("loadedmetadata", handleLoadedMetadata);
// //     }

// //     return () => {
// //       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
// //       if (ctx) ctx.revert();
// //     };
// //   }, []);
// //   return (
// //     <section
// //       ref={containerRef}
// //       className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center"
// //     >
// //       {/* 1. Loading State to prevent white flash */}
// //       {!isVideoReady && (
// //          <div className="absolute inset-0 bg-black z-20 flex items-center justify-center text-white/30">
// //             Loading...
// //          </div>
// //       )}

// //       {/* 2. VIDEO */}
// //       <video
// //         ref={videoRef}
// //         src="/videos/payasam.mp4"
// //         muted
// //         playsInline
// //         webkit-playsinline="true"
// //         preload="auto"
// //         className="absolute inset-0 w-full h-full object-cover"
// //       />

// //       {/* 3. OVERLAY TEXT */}
// //       <div 
// //         ref={textRef} 
// //         className="absolute z-10 text-center pointer-events-none mix-blend-overlay"
// //       >
// //         <h2 className="text-white text-4xl md:text-7xl font-serif font-bold opacity-80">
// //           Tradition Served
// //         </h2>
// //       </div>

// //       {/* 4. SCROLL PROMPT (Fixes "Is the website ended?") */}
// //       <div 
// //         ref={scrollPromptRef}
// //         className="absolute bottom-10 z-20 flex flex-col items-center gap-2 pointer-events-none animate-bounce"
// //       >
// //         <span className="text-white/70 text-sm uppercase tracking-widest font-light">
// //           Scroll to Explore
// //         </span>
// //         <svg 
// //             xmlns="http://www.w3.org/2000/svg" 
// //             fill="none" 
// //             viewBox="0 0 24 24" 
// //             strokeWidth={1.5} 
// //             stroke="currentColor" 
// //             className="w-6 h-6 text-white/70"
// //         >
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
// //         </svg>
// //       </div>

// //       {/* 5. PROGRESS BAR (Shows how much video is left) */}
// //       <div className="absolute bottom-0 left-0 w-full h-2 bg-white/10 z-30">
// //         <div 
// //             ref={progressRef}
// //             className="h-full bg-[#00CED1] origin-left scale-x-0" 
// //             // Note: I used your Famto brand color (#00CED1) here, change if needed for Ambis Kitchen
// //         ></div>
// //       </div>
// //     </section>
// //   );
// // }



// // "use client";

// // import { useRef, useEffect } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // export default function PouringSection() {
// //   const sectionRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const titleRef = useRef(null);
// //   const subtitleRef = useRef(null);
// //   const overlayRef = useRef(null);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       /* HERO PIN */
// //       ScrollTrigger.create({
// //         trigger: sectionRef.current,
// //         start: "top top",
// //         end: "+=120%",
// //         pin: true,
// //         pinSpacing: true,
// //       });

// //       /* VIDEO SLOW ZOOM */
// //       gsap.fromTo(
// //         videoRef.current,
// //         { scale: 1 },
// //         {
// //           scale: 1.15,
// //           ease: "none",
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: "top top",
// //             end: "bottom top",
// //             scrub: true,
// //           },
// //         }
// //       );

// //       /* OVERLAY DARKEN */
// //       gsap.to(overlayRef.current, {
// //         opacity: 0.65,
// //         scrollTrigger: {
// //           trigger: sectionRef.current,
// //           start: "top top",
// //           end: "bottom top",
// //           scrub: true,
// //         },
// //       });

// //       /* TITLE REVEAL */
// //       gsap.fromTo(
// //         titleRef.current,
// //         { y: 100, opacity: 0 },
// //         {
// //           y: 0,
// //           opacity: 1,
// //           duration: 1,
// //           ease: "power4.out",
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: "top 65%",
// //           },
// //         }
// //       );

// //       /* SUBTITLE REVEAL */
// //       gsap.fromTo(
// //         subtitleRef.current,
// //         { y: 60, opacity: 0 },
// //         {
// //           y: 0,
// //           opacity: 1,
// //           delay: 0.15,
// //           duration: 1,
// //           ease: "power4.out",
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: "top 60%",
// //           },
// //         }
// //       );
// //     }, sectionRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <>
// //       {/* HERO */}
// //       <section
// //         ref={sectionRef}
// //         className="relative h-screen w-full overflow-hidden bg-black"
// //       >
// //         {/* VIDEO */}
// //         <video
// //           ref={videoRef}
// //           src="/videos/payasam1.mp4"
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //           className="absolute inset-0 w-full h-full object-cover will-change-transform"
// //         />

// //         {/* OVERLAY */}
// //         <div
// //           ref={overlayRef}
// //           className="absolute inset-0 bg-black/40"
// //         />

// //         {/* CONTENT */}
// //         <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
// //           <h1
// //             ref={titleRef}
// //             className="text-white text-5xl md:text-7xl font-serif font-bold tracking-wide"
// //           >
// //             Tradition Served
// //           </h1>

// //           <p
// //             ref={subtitleRef}
// //             className="mt-6 text-white/85 text-lg md:text-xl max-w-2xl leading-relaxed"
// //           >
// //             Thick paal payasam poured warm, finished with ghee,
// //             roasted cashews and timeless devotion.
// //           </p>
// //         </div>

// //         {/* SCROLL CUE */}
// //         <div className="absolute bottom-8 w-full text-center text-white/60 animate-bounce">
// //           Scroll ↓
// //         </div>
// //       </section>

// //       {/* STORY SECTION */}
// //       <section className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-6">
// //         <div className="max-w-3xl text-center space-y-6">
// //           <h2 className="text-4xl md:text-5xl font-serif">
// //             Crafted the Traditional Way
// //           </h2>
// //           <p className="text-white/70 text-lg leading-relaxed">
// //             Every serving is slow-cooked with patience — pure milk,
// //             hand-roasted cashews, golden raisins and aromatic ghee,
// //             following a recipe preserved through generations.
// //           </p>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }


// // "use client";

// // import { useRef, useEffect } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // export default function PouringSection() {
// //   const containerRef = useRef(null);
// //   const videoContainerRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const textContentRef = useRef(null);
// //   const overlayRef = useRef(null);
// //   const storySectionRef = useRef(null);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       const tl = gsap.timeline({
// //         scrollTrigger: {
// //           trigger: containerRef.current,
// //           start: "top top",
// //           end: "+=200%", // Longer scroll duration for smoother feel
// //           scrub: 1,      // Smoothly follows the scrollbar
// //           pin: true,
// //           anticipatePin: 1,
// //         },
// //       });

// //       // 1. Zoom the video and darken overlay simultaneously
// //       tl.to(videoRef.current, { scale: 1.2 }, 0)
// //         .to(overlayRef.current, { opacity: 0.7 }, 0)
        
// //         // 2. Fade out and move up the initial text
// //         .to(textContentRef.current, {
// //           y: -100,
// //           opacity: 0,
// //           filter: "blur(10px)",
// //         }, 0)

// //         // 3. CINEMATIC SHRINK: The video container shrinks to reveal the background
// //         .to(videoContainerRef.current, {
// //           scale: 0.9,
// //           borderRadius: "40px",
// //           ease: "power2.inOut"
// //         }, 0.5);

// //       // 4. STORY SECTION REVEAL (Parallax + Fade)
// //       gsap.from(storySectionRef.current?.querySelectorAll("h2, p"), {
// //         y: 100,
// //         opacity: 0,
// //         stagger: 0.2,
// //         duration: 1.5,
// //         ease: "power4.out",
// //         scrollTrigger: {
// //           trigger: storySectionRef.current,
// //           start: "top 80%",
// //         },
// //       });
// //     }, containerRef);

// //     return () => ctx.revert();
// //   }, []);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       /* SECTION FADE IN */
// //       gsap.from(sectionRef.current, {
// //         opacity: 0,
// //         duration: 1,
// //         ease: "power2.out",
// //         scrollTrigger: {
// //           trigger: sectionRef.current,
// //           start: "top 80%",
// //         },
// //       });

// //       /* LEFT IMAGE PARALLAX */
// //       gsap.fromTo(
// //         leftImageRef.current,
// //         { y: 120, opacity: 0 },
// //         {
// //           y: 0,
// //           opacity: 1,
// //           duration: 1.2,
// //           ease: "power4.out",
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: "top 70%",
// //           },
// //         }
// //       );

// //       /* TEXT REVEAL */
// //       gsap.fromTo(
// //         textRef.current,
// //         { y: 80, opacity: 0 },
// //         {
// //           y: 0,
// //           opacity: 1,
// //           duration: 1,
// //           delay: 0.15,
// //           ease: "power3.out",
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: "top 65%",
// //           },
// //         }
// //       );

// //       /* RIGHT IMAGE LATE REVEAL */
// //       gsap.fromTo(
// //         rightImageRef.current,
// //         { y: 140, opacity: 0 },
// //         {
// //           y: 0,
// //           opacity: 1,
// //           duration: 1.2,
// //           ease: "power4.out",
// //           scrollTrigger: {
// //             trigger: rightImageRef.current,
// //             start: "top 80%",
// //           },
// //         }
// //       );
// //     }, sectionRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <main ref={containerRef} className="bg-black overflow-hidden">
// //       {/* HERO SECTION - PINNED */}
// //       <section className="relative h-screen w-full flex items-center justify-center">
        
// //         {/* VIDEO WRAPPER (The part that shrinks) */}
// //         <div 
// //           ref={videoContainerRef} 
// //           className="absolute inset-0 w-full h-full overflow-hidden z-0 origin-center"
// //         >
// //           <video
// //             ref={videoRef}
// //             src="/videos/payasam.mp4"
// //             autoPlay
// //             muted
// //             loop
// //             playsInline
// //             className="absolute inset-0 w-full h-full object-cover"
// //           />
// //           {/* OVERLAY */}
// //           <div
// //             ref={overlayRef}
// //             className="absolute inset-0 bg-black/30 transition-colors"
// //           />
// //         </div>

// //         {/* HERO CONTENT */}
// //         <div ref={textContentRef} className="relative z-10 text-center px-6">
// //           <span className="block text-amber-400 font-medium tracking-[0.3em] uppercase mb-4 text-sm md:text-base animate-pulse">
// //             The Art of Taste
// //           </span>
// //           <h1 className="text-white text-6xl md:text-8xl font-serif font-bold tracking-tight">
// //             Tradition <br /> <span className="italic font-light">Served.</span>
// //           </h1>
// //           <p className="mt-8 text-white/80 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
// //             Thick paal payasam poured warm, finished with ghee and timeless devotion.
// //           </p>
// //         </div>

// //         {/* MOUSE SCROLL INDICATOR */}
// //         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
// //             <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
// //             <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase">Scroll</span>
// //         </div>
// //       </section>

// //        <section
// //       ref={sectionRef}
// //       className="relative min-h-screen bg-[#0f0f0f] text-white px-6 py-24 overflow-hidden"
// //     >
// //       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
// //         {/* LEFT IMAGE */}
// //         <div
// //           ref={leftImageRef}
// //           className="overflow-hidden rounded-3xl shadow-2xl"
// //         >
// //           <img
// //             src="/images/payasam-prep.jpg"
// //             alt="Traditional Payasam Preparation"
// //             className="w-full h-full object-cover scale-105"
// //           />
// //         </div>

// //         {/* TEXT */}
// //         <div ref={textRef} className="space-y-6">
// //           <h2 className="text-4xl md:text-5xl font-serif">
// //             Crafted the Traditional Way
// //           </h2>

// //           <p className="text-white/75 text-lg leading-relaxed">
// //             Every pot of paal payasam begins with patience. Fresh milk is
// //             slow-simmered, rice is stirred gently, and time does the rest.
// //           </p>

// //           <p className="text-white/75 text-lg leading-relaxed">
// //             Finished with golden ghee, hand-roasted cashews and fragrant raisins,
// //             this is not just dessert — it is devotion served warm.
// //           </p>
// //         </div>
// //       </div>

// //       {/* SECOND ROW */}
// //       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mt-32">
// //         {/* TEXT */}
// //         <div className="space-y-6 order-2 md:order-1">
// //           <h3 className="text-3xl md:text-4xl font-serif">
// //             A Recipe Passed Through Generations
// //           </h3>

// //           <p className="text-white/70 text-lg leading-relaxed">
// //             Prepared the same way it was decades ago — no shortcuts, no
// //             compromises. Every serving carries the warmth of tradition and
// //             celebration.
// //           </p>
// //         </div>

// //         {/* RIGHT IMAGE */}
// //         <div
// //           ref={rightImageRef}
// //           className="overflow-hidden rounded-3xl shadow-2xl order-1 md:order-2"
// //         >
// //           <img
// //             src="/images/payasam-serving.jpg"
// //             alt="Serving Paal Payasam"
// //             className="w-full h-full object-cover scale-105"
// //           />
// //         </div>
// //       </div>
// //     </section>

// //       {/* STORY SECTION
// //       <section 
// //         ref={storySectionRef}
// //         className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 pb-24"
// //       >
// //         <div className="max-w-4xl grid md:grid-cols-2 gap-12 items-center">
// //           <div className="space-y-6">
// //             <h2 className="text-4xl md:text-6xl font-serif leading-tight">
// //               Crafted the <br /> 
// //               <span className="text-amber-500">Traditional Way</span>
// //             </h2>
// //             <div className="h-1 w-20 bg-amber-500"></div>
// //           </div>
          
// //           <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
// //             Every serving is slow-cooked with patience — pure milk,
// //             hand-roasted cashews, golden raisins and aromatic ghee,
// //             following a recipe preserved through generations. 
// //             <br /><br />
// //             No shortcuts. Just soul.
// //           </p>
// //         </div>
// //       </section> */}
// //     </main>
// //   );
// // }


"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PouringSection() {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const textContentRef = useRef(null);
  const heroTitleRef = useRef(null);
  const storyRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const storyTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =======================
          1. HERO PARALLAX & PINNING
      ======================= */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.2,
          pin: true,
        },
      });

      tl.to(textContentRef.current, { y: -150, opacity: 0, scale: 0.9, filter: "blur(20px)" }, 0)
        .to(videoContainerRef.current, {
          scale: 0.8,
          borderRadius: "100px",
          ease: "power2.inOut",
        }, 0)
        .to(videoRef.current, { scale: 1.4 }, 0); // Counter-scale for depth

      /* =======================
          2. ENTRANCE ANIMATIONS (ON LOAD)
      ======================= */
      gsap.from(heroTitleRef.current, {
        y: 100,
        skewY: 7,
        opacity: 0,
        duration: 1.8,
        ease: "expo.out",
        delay: 0.5
      });

      /* =======================
          3. REVEAL SCROLL ANIMATIONS
      ======================= */
      
      // Reveal images with a "curtain" effect
      [leftImageRef, rightImageRef].forEach((ref) => {
        gsap.fromTo(ref.current, 
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          { 
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
            }
          }
        );
      });

      // Text lines staggered reveal
      const textLines = storyTextRef.current.querySelectorAll("h2, p, div");
      gsap.from(textLines, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyTextRef.current,
          start: "top 75%",
        }
      });

      // Parallax effect on images during scroll
      gsap.to(".parallax-img", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center">
        <div ref={videoContainerRef} className="absolute inset-0 overflow-hidden bg-zinc-900">
          <video
            ref={videoRef}
            src="/videos/payasam1.mp4"
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />
        </div>

        <div ref={textContentRef} className="relative z-10 text-center px-6">
          <div className="overflow-hidden mb-4">
            <span className="block text-amber-500 tracking-[0.6em] uppercase text-[10px] font-bold">
              A Taste of Heritage
            </span>
          </div>
          
          <div ref={heroTitleRef}>
            <h1 className="text-6xl md:text-9xl font-serif leading-none">
              Golden <br /> 
              <span className="italic font-extralight text-amber-100">Simplicity.</span>
            </h1>
          </div>

          <p className="mt-12 text-zinc-400 text-lg max-w-lg mx-auto font-light leading-relaxed">
            Where slow-cooked milk meets the warmth of tradition.
          </p>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-4">
            <div className="w-[1px] h-16 bg-gradient-to-b from-amber-500 to-transparent" />
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section ref={storyRef} className="relative py-40 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Reveal */}
          <div className="lg:col-span-7">
            <div ref={leftImageRef} className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <img
                src="/images/prepare.png"
                alt="Process"
                className="parallax-img w-full h-[120%] object-cover absolute top-0"
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div ref={storyTextRef} className="lg:col-span-5 space-y-8 lg:pl-12">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              The <span className="italic text-amber-500">Slow</span> Ritual
            </h2>
            <div className="h-[2px] w-12 bg-amber-500" />
            <p className="text-zinc-400 text-xl font-light leading-relaxed">
              Every pot begins with patience. Milk simmers until it blushes pink, 
              infused with the essence of hand-picked cardamom.
            </p>
            {/* <button className="group relative px-6 py-3 overflow-hidden border border-zinc-800 rounded-full transition-colors hover:border-amber-500">
              <span className="relative z-10 text-xs tracking-widest uppercase group-hover:text-amber-500 transition-colors">Learn More</span>
            </button> */}
          </div>
        </div>

        {/* Second Row: Offset Layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center mt-40">
           <div className="lg:col-span-4 order-2 lg:order-1 lg:pr-12">
              <h3 className="text-3xl font-serif mb-6 italic text-amber-100 italic">"A recipe written in memories, not just ink."</h3>
              <p className="text-zinc-500 leading-relaxed">Passed down through four generations, our recipe remains untouched by modern shortcuts.</p>
           </div>
           
           <div className="lg:col-span-8 order-1 lg:order-2">
            <div ref={rightImageRef} className="relative aspect-[16/9] overflow-hidden rounded-sm">
                <img
                  src="/images/making.png"
                  alt="Craft"
                  className="parallax-img w-full h-[120%] object-cover absolute top-0"
                />
              </div>
           </div>
        </div>
      </section>

      {/* Subtle Background Text Animation */}
      {/* <div className="absolute top-[120%] left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-serif font-bold uppercase tracking-tighter">TRADITION • DEVOTION • FLAVOR •</span>
      </div> */}
    </main>
  );
}
