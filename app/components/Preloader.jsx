// // "use client";
// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";

// // // Generate random particles for the background effect
// // const particles = Array.from({ length: 20 }).map((_, i) => ({
// //   id: i,
// //   x: Math.random() * 100, // Random Horizontal position %
// //   y: Math.random() * 100, // Random Vertical position %
// //   size: Math.random() * 4 + 1, // Random size
// //   duration: Math.random() * 2 + 1, // Random speed
// // }));

// // export default function Preloader({ onComplete }) {
// //   const [count, setCount] = useState(0);
// //   const [isFinished, setIsFinished] = useState(false);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCount((prev) => {
// //         if (prev === 100) {
// //           clearInterval(interval);
// //           setIsFinished(true);
// //           setTimeout(() => onComplete(), 800);
// //           return 100;
// //         }
// //         // Faster counting for high energy
// //         const increment = Math.floor(Math.random() * 15) + 5;
// //         return Math.min(prev + increment, 100);
// //       });
// //     }, 80); // Slightly slower tick to let animations breathe

// //     return () => clearInterval(interval);
// //   }, [onComplete]);

// //   return (
// //     <motion.div
// //       className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-950 overflow-hidden"
// //       initial={{ y: 0 }}
// //       exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
// //     >
// //       {/* 1. ANIMATED PARTICLES (New) */}
// //       <div className="absolute inset-0 z-0 pointer-events-none">
// //         {particles.map((p) => (
// //           <motion.div
// //             key={p.id}
// //             className="absolute bg-amber-500/30 rounded-full blur-[1px]"
// //             style={{
// //               left: `${p.x}%`,
// //               top: `${p.y}%`,
// //               width: p.size,
// //               height: p.size,
// //             }}
// //             animate={{
// //               y: [0, -100], // Float Upwards
// //               opacity: [0, 1, 0], // Fade in and out
// //             }}
// //             transition={{
// //               duration: p.duration,
// //               repeat: Infinity,
// //               ease: "linear",
// //             }}
// //           />
// //         ))}
// //       </div>

// //       {/* 2. MASSIVE COUNTER (Brighter & Glitchy) */}
// //       <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
// //         <motion.h1
// //           className="text-[40vw] font-black text-white/10 leading-none tracking-tighter"
// //           animate={{ opacity: [0.1, 0.3, 0.1] }} // Pulse visibility
// //           transition={{ duration: 0.5, repeat: Infinity }}
// //         >
// //           {count}
// //         </motion.h1>
// //       </div>

// //       {/* 3. CENTER STAGE */}
// //       <div className="relative z-20 flex flex-col items-center gap-12">
        
// //         {/* LOGO WRAPPER */}
// //         <div className="relative">
// //             {/* Rotating Outer Ring (Gold) */}
// //             <motion.div 
// //                 className="absolute -inset-4 rounded-full border-2 border-dashed border-amber-500/30"
// //                 animate={{ rotate: 360 }}
// //                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
// //             />
            
// //             {/* Counter-Rotating Inner Ring */}
// //             <motion.div 
// //                 className="absolute -inset-2 rounded-full border border-stone-700"
// //                 animate={{ rotate: -360 }}
// //                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
// //             />

// //             {/* MAIN LOGO CIRCLE */}
// //             <motion.div
// //                 className="relative w-40 h-40 md:w-60 md:h-60 rounded-full bg-stone-900 flex items-center justify-center shadow-2xl overflow-hidden border-4 border-stone-800"
// //                 // Physical Heartbeat Pulse
// //                 animate={{ 
// //                     scale: [1, 1.05, 1],
// //                     boxShadow: [
// //                         "0 0 0px rgba(245, 158, 11, 0)", 
// //                         "0 0 50px rgba(245, 158, 11, 0.5)", // Stronger Glow
// //                         "0 0 0px rgba(245, 158, 11, 0)"
// //                     ]
// //                 }}
// //                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
// //             >
// //                 {/* Glossy Reflection Sweep */}
// //                 <motion.div
// //                     className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent w-full h-full -skew-x-12 z-20"
// //                     animate={{ left: ["-100%", "200%"] }}
// //                     transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
// //                 />

// //                 <img 
// //                     src="/images/logo.jpg" 
// //                     alt="Ambis Logo" 
// //                     className="w-3/4 h-3/4 object-contain z-10 drop-shadow-lg"
// //                 />
                
// //                 {/* Progress Circle (Thick Neon) */}
// //                 <svg className="absolute inset-0 w-full h-full -rotate-90 z-30">
// //                     <motion.circle 
// //                         cx="50%" cy="50%" r="46%" 
// //                         fill="none" stroke="#f59e0b" strokeWidth="4"
// //                         strokeDasharray="400"
// //                         strokeDashoffset={400 - (400 * count) / 100} 
// //                         strokeLinecap="round"
// //                         style={{ filter: "drop-shadow(0 0 8px #f59e0b)" }} // Neon Glow
// //                     />
// //                 </svg>
// //             </motion.div>
// //         </div>

// //         {/* LOADING TEXT */}
// //         <div className="flex flex-col items-center">
// //              <motion.span 
// //                 className="text-amber-500 font-bold tracking-[0.3em] text-sm uppercase mb-2"
// //                 animate={{ opacity: [0.5, 1, 0.5] }}
// //                 transition={{ duration: 1, repeat: Infinity }}
// //              >
// //                 Loading Experience
// //              </motion.span>
             
// //              {/* Simple Bar */}
// //              <div className="w-64 h-1 bg-stone-800 rounded-full overflow-hidden">
// //                 <motion.div 
// //                     className="h-full bg-amber-500 box-shadow-[0_0_10px_#f59e0b]"
// //                     initial={{ width: "0%" }}
// //                     animate={{ width: `${count}%` }}
// //                 />
// //              </div>
// //         </div>

// //       </div>
// //     </motion.div>
// //   );
// // }


// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Gold Dust Particles
// const particles = Array.from({ length: 20 }).map((_, i) => ({
//   id: i,
//   x: Math.random() * 100,
//   y: Math.random() * 100,
//   size: Math.random() * 3 + 1,
//   duration: Math.random() * 2 + 1,
// }));

// export default function Preloader({ onComplete }) {
//   const [count, setCount] = useState(0);
//   const [isFinished, setIsFinished] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prev) => {
//         if (prev === 100) {
//           clearInterval(interval);
//           setIsFinished(true);
//           setTimeout(() => onComplete(), 1200); // Wait for door animation
//           return 100;
//         }
//         const increment = Math.floor(Math.random() * 10) + 1;
//         return Math.min(prev + increment, 100);
//       });
//     }, 50);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <AnimatePresence>
//       {!isFinished && (
//          <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
            
//             {/* --- LEFT DOOR (Slides Left) --- */}
//             <motion.div
//                 className="absolute left-0 top-0 w-1/2 h-full bg-stone-950 border-r border-stone-900 z-30"
//                 initial={{ x: 0 }}
//                 exit={{ x: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
//             />

//             {/* --- RIGHT DOOR (Slides Right) --- */}
//             <motion.div
//                 className="absolute right-0 top-0 w-1/2 h-full bg-stone-950 border-l border-stone-900 z-30"
//                 initial={{ x: 0 }}
//                 exit={{ x: "100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
//             />

//             {/* --- CONTENT LAYER (Sits on top of doors) --- */}
//             <motion.div 
//                 className="relative z-40 w-full h-full flex items-center justify-center"
//                 exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.5 } }}
//             >
                
//                 {/* 1. ANIMATED PARTICLES (Gold Dust) */}
//                 <div className="absolute inset-0 pointer-events-none z-10">
//                     {particles.map((p) => (
//                     <motion.div
//                         key={p.id}
//                         className="absolute bg-amber-500/40 rounded-full blur-[1px]"
//                         style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
//                         animate={{ y: [0, -100], opacity: [0, 1, 0] }}
//                         transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
//                     />
//                     ))}
//                 </div>

//                 {/* 2. MASSIVE GRAYSCALE COUNTER (Background) */}
//                 <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
//                     <motion.h1 
//                         className="text-[20vw] md:text-[50vw] font-black text-stone-800 leading-none tracking-tighter mix-blend-screen"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                     >
//                         {count}
//                     </motion.h1>
//                 </div>

//                 {/* 3. CENTER LOGO ASSEMBLY (Foreground) */}
//                 <div className="relative z-20 flex flex-col items-center gap-8">
//                     <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                        
//                         {/* A. Rotating Outer Ring (Dashed Gold) */}
//                         <motion.div 
//                             className="absolute inset-0 rounded-full border border-dashed border-amber-500/30"
//                             animate={{ rotate: 360 }}
//                             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//                         />

//                         {/* B. Rotating Inner Ring (Solid Stone) */}
//                         <motion.div 
//                             className="absolute inset-2 rounded-full border border-stone-700"
//                             animate={{ rotate: -360 }}
//                             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                         />

//                         {/* C. Logo Container (Glassy) */}
//                         <motion.div 
//                              className="relative w-36 h-36 md:w-48 md:h-48 rounded-full bg-stone-900 border-2 border-stone-800 flex items-center justify-center shadow-2xl overflow-hidden"
//                              animate={{ boxShadow: ["0 0 0px #000", "0 0 50px rgba(245, 158, 11, 0.3)", "0 0 0px #000"] }}
//                              transition={{ duration: 2, repeat: Infinity }}
//                         >
//                              <img 
//                                 src="/images/logo.jpg" 
//                                 className="w-3/4 h-3/4 object-contain drop-shadow-xl z-10" 
//                                 alt="Logo"
//                              />
                             
//                              {/* Glossy Sweep */}
//                              <motion.div
//                                 className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -skew-x-12"
//                                 animate={{ x: ["-150%", "150%"] }}
//                                 transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
//                              />
//                         </motion.div>

//                         {/* D. Progress Stroke (Neon Orange) */}
//                         <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
//                             <motion.circle 
//                                 cx="50%" cy="50%" r="46%" 
//                                 fill="none" stroke="#f59e0b" strokeWidth="2"
//                                 strokeDasharray="600"
//                                 strokeDashoffset={600 - (600 * count) / 100} 
//                                 strokeLinecap="round"
//                                 style={{ filter: "drop-shadow(0 0 8px #f59e0b)" }}
//                             />
//                         </svg>
//                     </div>

//                     {/* Loading Text */}
//                     <motion.div 
//                         className="text-amber-500 font-bold tracking-[0.5em] text-xs uppercase"
//                         animate={{ opacity: [0.3, 1, 0.3] }}
//                         transition={{ duration: 1.5, repeat: Infinity }}
//                     >
//                         Loading Heritage
//                     </motion.div>
//                 </div>

//             </motion.div>
//          </div>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- SAFE PARTICLES (NO HYDRATION ERROR) ---
export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
const [particles, setParticles] = useState([]);

useEffect(() => {
  const generated = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 1 + Math.random() * 4,
  }));
  setParticles(generated);
}, []); // <-- runs only on client


  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFinished(true);
          setTimeout(() => onComplete(), 1200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">

          {/* LEFT DOOR */}
          <motion.div
            className="absolute left-0 top-0 w-1/2 h-full bg-stone-950 border-r border-stone-900 z-30"
            initial={{ x: 0 }}
            exit={{
              x: "-100%",
              transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
            }}
          />

          {/* RIGHT DOOR */}
          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full bg-stone-950 border-l border-stone-900 z-30"
            initial={{ x: 0 }}
            exit={{
              x: "100%",
              transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
            }}
          />

          {/* CONTENT LAYER */}
          <motion.div
            className="relative z-40 w-full h-full flex items-center justify-center"
            exit={{
              opacity: 0,
              scale: 1.1,
              filter: "blur(10px)",
              transition: { duration: 0.5 },
            }}
          >
            {/* GOLD DUST PARTICLES */}
        <div className="absolute inset-0 pointer-events-none z-10">
  {particles.map((p) => (
    <motion.div
      key={p.id}
      className="absolute bg-amber-500/40 rounded-full blur-[1px]"
      style={{
        left: `${p.left}%`,
        top: `${p.top}%`,
        width: p.size,
        height: p.size,
      }}
      animate={{ y: ["0%", "20%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  ))}
</div>


            {/* HUGE BACKGROUND COUNTER */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
              <motion.h1
                className="text-[20vw] md:text-[50vw] font-black text-stone-800 mix-blend-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {count}
              </motion.h1>
            </div>

            {/* CENTER LOGO */}
            <div className="relative z-20 flex flex-col items-center gap-8">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">

                {/* OUTER RING */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-dashed border-amber-500/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* INNER RING */}
                <motion.div
                  className="absolute inset-2 rounded-full border border-stone-700"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* LOGO */}
                <motion.div
                  className="relative w-36 h-36 md:w-48 md:h-48 rounded-full bg-stone-900 border-2 border-stone-800 flex items-center justify-center shadow-2xl overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 0px #000",
                      "0 0 50px rgba(245, 158, 11, 0.3)",
                      "0 0 0px #000",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <img
                    src="/images/logo.jpg"
                    className="w-3/4 h-3/4 object-contain drop-shadow-xl"
                    alt="Logo"
                  />

                  {/* GLOSSY SWEEP */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -skew-x-12"
                    animate={{ x: ["-150%", "150%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                </motion.div>

                {/* PROGRESS CIRCLE */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="46%"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="600"
                    strokeDashoffset={600 - (600 * count) / 100}
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0 0 8px #f59e0b)" }}
                  />
                </svg>
              </div>

              {/* LOADING TEXT */}
              <motion.div
                className="text-amber-500 font-bold tracking-[0.5em] text-xs uppercase"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading Heritage
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
