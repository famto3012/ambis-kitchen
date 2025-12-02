// "use client";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function PouringSection() {
//   const containerRef = useRef(null);
//   const streamRef = useRef(null);
//   const splashRef = useRef(null);
//   const turbulenceRef = useRef(null); // Ref to animate the liquid shape

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=150%",
//           pin: true,
//           scrub: 0.1, // Faster reaction
//           onUpdate: (self) => {
//             // --- THE MAGIC FIX ---
//             // We change the 'baseFrequency' of the noise filter as you scroll.
//             // This makes the liquid edges ripple and morph live!
//             if (turbulenceRef.current) {
//                 // 0.01 is X (width wobble), the second number is Y (flow streaks)
//                 const flowIntensity = 0.05 + (self.progress * 0.1); 
//                 turbulenceRef.current.setAttribute("baseFrequency", `0.02 ${flowIntensity}`);
//             }
//           }
//         },
//       });

//       // 1. Cup Tilt
//       tl.to("#cup-img", {
//         rotation: -50,
//         x: -20,
//         y: 10,
//         duration: 1,
//         ease: "power2.inOut",
//       })

//       // 2. The Pour (Stream Grows)
//       .fromTo(
//         streamRef.current,
//         { height: 0, opacity: 0 },
//         {
//           height: "65vh", 
//           opacity: 1,
//           duration: 1,
//           ease: "none",
//         },
//         "<0.2"
//       )
      
//       // 3. Texture Flow (Very Fast)
//       .to(
//         streamRef.current,
//         {
//           backgroundPositionY: "1500px", // Increased speed
//           duration: 2,
//           ease: "none",
//         },
//         "<"
//       )

//       // 4. Splash
//       .fromTo(
//         splashRef.current,
//         { scale: 0, opacity: 0 },
//         {
//           scale: 1.5,
//           opacity: 1,
//           duration: 0.3,
//           ease: "back.out(1.7)",
//         },
//         ">-0.5"
//       )

//       // 5. Boli Squish
//       .to("#boli-img", {
//         scaleY: 0.9,
//         scaleX: 1.05,
//         y: 5,
//         duration: 0.2
//       }, "<");

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen w-full bg-[#050200] overflow-hidden flex flex-col items-center justify-between py-10"
//     >
//       {/* SVG LIQUID ENGINE */}
//       <svg className="absolute w-0 h-0">
//         <defs>
//           <filter id="liquid-filter">
//             {/* The turbulence creates the random liquid noise */}
//             <feTurbulence 
//                 ref={turbulenceRef}
//                 type="turbulence" // 'turbulence' looks more liquidy than 'fractalNoise'
//                 baseFrequency="0.02 0.05" 
//                 numOctaves="2" 
//                 result="noise" 
//             />
//             {/* The displacement map uses that noise to warp the div */}
//             <feDisplacementMap 
//                 in="SourceGraphic" 
//                 in2="noise" 
//                 scale="30" // HIGH SCALE = Very wavy edges (No straight lines)
//                 xChannelSelector="R" 
//                 yChannelSelector="G" 
//             />
//             {/* Blur slightly to make it look like thick milk */}
//             <feGaussianBlur stdDeviation="1.5" />
//           </filter>
//         </defs>
//       </svg>

//       {/* --- CUP --- */}
//       <div className="relative z-50 mt-16">
//         <div id="cup-img" className="origin-top-right w-40 md:w-52 relative translate-x-4">
//            <img 
//              src="/images/cup.png" 
//              alt="Cup" 
//              className="w-full h-full object-contain drop-shadow-2xl" 
//            />
//         </div>
//       </div>

//       {/* --- THE LIQUID STREAM --- */}
//       <div className="absolute top-[180px] md:top-[240px] z-40 flex justify-center w-full pointer-events-none">
//         <div
//           ref={streamRef}
//           className="w-16 md:w-20"
//           style={{
//             height: 0,
            
//             // 1. TAPER (Thick top, thin bottom)
//             clipPath: "polygon(5% 0, 95% 0, 70% 100%, 30% 100%)",

//             // 2. TEXTURE (Zoomed)
//             backgroundColor: "#fdf0d5",
//             backgroundImage: "url('/images/payasam-texture.jpg')",
//             backgroundSize: "250% auto", 
//             backgroundPosition: "center top",
//             backgroundRepeat: "repeat-y",

//             // 3. APPLY ANIMATED FILTER
//             filter: "url(#liquid-filter)",
            
//             // 4. SOFT EDGES (Fading the sides)
//             // This mask makes the left and right edges transparent, 
//             // so there is no hard "line" at all.
//             maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
//             WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            
//             // 5. INNER GLOW (3D Effect)
//             boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)"
//           }}
//         ></div>
//       </div>

//       {/* --- SPLASH & BOLI --- */}
//       <div className="relative z-30 top-28 mb-20 flex flex-col items-center justify-center">
        
//         {/* Splash Box */}
//         <div 
//             ref={splashRef}
//             className="absolute -top-20 w-56 h-56 z-50 pointer-events-none"
//             style={{
//                 mixBlendMode: "screen", 
//                 maskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)",
//                 WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)"
//             }}
//         >
//             <img 
//                 src="/images/splash.png" 
//                 alt="Splash" 
//                 className="w-full h-full object-cover"
//             />
//         </div>

//         {/* Boli */}
//         <div id="boli-img" className="w-72 md:w-96 relative">
//           <img
//             src="/images/boli.png"
//             alt="Boli"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const videoTime = useRef({ currentTime: 0 }); // Proxy for smooth scrubbing

  useEffect(() => {
    const video = videoRef.current;
    
    // Ensure video is ready for manipulation
    if (video) {
        video.pause();
        video.currentTime = 0;
        video.preload = "auto";
    }

    const ctx = gsap.context(() => {
      // 1. Setup the ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%", // Scroll distance (4x screen height for slow playback)
          pin: true,
          scrub: 1, // 1 second smoothing delay
          onUpdate: (self) => {
             // Optional: You can fade out text or elements here based on self.progress
          }
        },
      });

      // 2. Animate the Video via Proxy
      // We animate the proxy object's 'currentTime' property, then apply it to the video.
      // This decoupling prevents stuttering.
      if (video) {
        // Wait for metadata to know duration, or default to a safe guess (e.g. 5s)
        const duration = video.duration || 5; 
        
        tl.to(videoTime.current, {
            currentTime: duration,
            ease: "none",
            onUpdate: () => {
                // Apply the time to the video element
                if (video.readyState >= 2) {
                    video.currentTime = videoTime.current.currentTime;
                }
            }
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center"
    >
      {/* THE MAIN VIDEO 
        object-cover ensures it fills the screen like a background.
      */}
      <video
        ref={videoRef}
        src="/videos/payasam.mp4"
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional Overlay Text that stays on top */}
      <div className="absolute z-10 text-center pointer-events-none mix-blend-overlay">
        <h2 className="text-white text-4xl md:text-7xl font-serif font-bold opacity-80">
          Tradition Served
        </h2>
      </div>
    </section>
  );
}