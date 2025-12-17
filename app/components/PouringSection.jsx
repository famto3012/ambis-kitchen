"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const scrollPromptRef = useRef(null);
  
  // State to track if video is ready to prevent white flashes
  const [isVideoReady, setIsVideoReady] = useState(false);

useEffect(() => {
    // 1. FIX: Declare ctx at the very top
    let ctx; 

    const video = videoRef.current;
    
    // Safety check: ensure video exists
    if (!video) return;

    // 2. Prepare Video
    video.pause();
    video.currentTime = 0;
    video.preload = "auto";
    
    // Define the animation function
    function initScrollAnimation(duration) {
       ctx = gsap.context(() => {
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=300%", 
            pin: true,
            scrub: 0.5, 
          },
        });

        // A. Animate Video Time
        tl.to(video, {
          currentTime: duration,
          ease: "none",
        });

        // B. Animate Progress Bar
        tl.fromTo(progressRef.current, 
            { scaleX: 0 },
            { scaleX: 1, ease: "none" },
            "<" 
        );

        // C. Fade out Prompt
        tl.to(scrollPromptRef.current, {
            opacity: 0,
            duration: 0.5 
        }, 0);

        // D. Parallax Text
        tl.to(textRef.current, {
            y: -100, 
            opacity: 0, 
            ease: "power1.in"
        }, "<");

      }, containerRef);
    }

    // Wait for metadata
    const handleLoadedMetadata = () => {
      setIsVideoReady(true);
      initScrollAnimation(video.duration);
    };

    // Logic to trigger animation
    if (video.readyState >= 1) {
      setIsVideoReady(true);
      initScrollAnimation(video.duration);
    } else {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      if (ctx) ctx.revert();
    };
  }, []);
  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center"
    >
      {/* 1. Loading State to prevent white flash */}
      {!isVideoReady && (
         <div className="absolute inset-0 bg-black z-20 flex items-center justify-center text-white/30">
            Loading...
         </div>
      )}

      {/* 2. VIDEO */}
      <video
        ref={videoRef}
        src="/videos/payasam.mp4"
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 3. OVERLAY TEXT */}
      <div 
        ref={textRef} 
        className="absolute z-10 text-center pointer-events-none mix-blend-overlay"
      >
        <h2 className="text-white text-4xl md:text-7xl font-serif font-bold opacity-80">
          Tradition Served
        </h2>
      </div>

      {/* 4. SCROLL PROMPT (Fixes "Is the website ended?") */}
      <div 
        ref={scrollPromptRef}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-2 pointer-events-none animate-bounce"
      >
        <span className="text-white/70 text-sm uppercase tracking-widest font-light">
          Scroll to Explore
        </span>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6 text-white/70"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      {/* 5. PROGRESS BAR (Shows how much video is left) */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white/10 z-30">
        <div 
            ref={progressRef}
            className="h-full bg-[#00CED1] origin-left scale-x-0" 
            // Note: I used your Famto brand color (#00CED1) here, change if needed for Ambis Kitchen
        ></div>
      </div>
    </section>
  );
}


// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function VideoScrollSection() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const progressRef = useRef(null);
//   const textRef = useRef(null);
//   const promptRef = useRef(null);

//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (!video) return;

//     const loadVideo = () => {
//       setIsReady(true);
//     };

//     if (video.readyState >= 2) loadVideo();
//     else video.addEventListener("loadeddata", loadVideo);

//     return () => video.removeEventListener("loadeddata", loadVideo);
//   }, []);

//   useEffect(() => {
//     if (!isReady) return;

//     const video = videoRef.current;
//     const container = containerRef.current;
//     const duration = video.duration;

//     // GSAP performant setters
//     const setProgress = gsap.quickSetter(progressRef.current, "scaleX");
//     const setTextY = gsap.quickSetter(textRef.current, "y", "px");
//     const setTextOpacity = gsap.quickSetter(textRef.current, "opacity");
//     const setPromptOpacity = gsap.quickSetter(promptRef.current, "opacity");

//     let pendingTime = null;

//     const applyVideoTime = () => {
//       if (pendingTime !== null) {
//         if (video.fastSeek) video.fastSeek(pendingTime);
//         else video.currentTime = pendingTime;
//         pendingTime = null;
//       }
//       requestAnimationFrame(applyVideoTime);
//     };

//     requestAnimationFrame(applyVideoTime);

//     const st = ScrollTrigger.create({
//       trigger: container,
//       start: "top top",
//       end: "+=300%",
//       scrub: 0.3,
//       pin: true,
//       onUpdate: (self) => {
//         const p = self.progress;
//         pendingTime = p * duration;

//         setProgress(p);
//         setPromptOpacity(1 - p * 2);
//         setTextY(-p * 120);
//         setTextOpacity(1 - p * 1.5);
//       },
//     });

//     return () => {
//       st.kill();
//     };
//   }, [isReady]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative bg-black overflow-hidden"
//     >
//       <div className="sticky top-0 h-screen w-full flex items-center justify-center">
//         <video
//           ref={videoRef}
//           src="/videos/payasam.mp4"
//           playsInline
//           preload="auto"
//           className="w-full h-full object-cover"
//         />

//         {/* PARALLAX TEXT */}
//         <div
//           ref={textRef}
//           className="absolute text-white text-5xl font-bold tracking-tight"
//           style={{ willChange: "transform, opacity" }}
//         >
//           Tradition Served ✨
//         </div>

//         {/* SCROLL PROMPT */}
//         <div
//           ref={promptRef}
//           className="absolute bottom-10 text-white opacity-75 text-sm"
//           style={{ willChange: "opacity" }}
//         >
//           Scroll to Explore ↓
//         </div>

//         {/* PROGRESS BAR */}
//         <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
//           <div
//             ref={progressRef}
//             className="h-full bg-white origin-left scale-x-0"
//             style={{ willChange: "transform" }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
