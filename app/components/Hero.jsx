// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import CustomButton from "./CustomButton"; // Ensure this path is correct
// import ThreeImageModel from "./ThreeImageModel";

// export default function Hero() {
//   const containerRef = useRef(null);
//   const { scrollY } = useScroll();
  
//   // Parallax / Scroll Effects
//   const yText = useTransform(scrollY, [0, 500], [0, 150]);
//   const yImage = useTransform(scrollY, [0, 500], [0, 50]);
//   const logoScale = useTransform(scrollY, [0, 300], [1, 0.8]);

//   return (
//     <section
//       ref={containerRef}
//       id="hero-section"
//       className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white"
//     >
//       {/* ---------------- BACKGROUND LAYERS ---------------- */}
      
//       {/* 1. Deep Royal Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#120f2e] via-[#050414] to-[#0f0b05] z-0" />

//       {/* 2. LOGO WATERMARK (Spinning Background Brand) */}
//       <motion.div 
//         className="absolute top-[-10%] right-[40%] w-[800px] h-[800px] opacity-[0.03] z-0 pointer-events-none grayscale contrast-150"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
//         style={{ backgroundImage: "url('/images/logo.jpg')", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
//       />

//       {/* 3. Animated Glow Blobs */}
//       <motion.div 
//         animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
//         transition={{ duration: 10, repeat: Infinity }}
//         className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[120px] z-0"
//       />
//       <motion.div 
//         animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
//         transition={{ duration: 12, repeat: Infinity, delay: 2 }}
//         className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-[120px] z-0"
//       />


//       {/* ---------------- HEADER / NAV (LOGO PLACEMENT) ---------------- */}
//       <div className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start">
//         {/* LOGO CONTAINER - Designed to handle the JPG white background beautifully */}
//         <motion.div 
//             style={{ scale: logoScale }}
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, type: "spring" }}
//             className="relative group"
//         >
//             {/* Glow behind logo */}
//             <div className="absolute inset-0 bg-amber-500/50 blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
            
//             {/* The Logo Image Wrapper */}
//             {/* <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden border-2 border-white/80 transform group-hover:scale-105 transition-transform duration-300">
//                 <img 
//                     src="/images/logo.jpg" 
//                     alt="Ambis Kitchen Logo" 
//                     className="w-full h-full object-contain p-1" 
//                 />
//             </div> */}
            
//             {/* Tagline below logo */}
//             {/* <p className="absolute -bottom-6 left-1 text-[10px] text-stone-400 font-serif tracking-widest uppercase opacity-0 md:opacity-100">
//                 Est. 2020
//             </p> */}
//         </motion.div>

// <ThreeImageModel />
//         {/* Right Side 'Call Us' (Optional) */}
//         {/* <motion.a 
//             href="tel:+910000000000"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="hidden md:flex items-center gap-2 text-stone-300 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-full backdrop-blur-md bg-white/5"
//         >
//             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//             <span className="text-xs font-bold tracking-wide">OPEN FOR ORDERS</span>
//         </motion.a> */}
//       </div>


//       {/* ---------------- MAIN CONTENT ---------------- */}
//       <div className="relative z-10 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between pt-32 md:pt-10 gap-10 md:gap-16">
        
//         {/* --- LEFT SIDE: TEXT --- */}
//         <motion.div 
//           style={{ y: yText }} 
//           className="flex-1 text-center md:text-left order-2 md:order-1 max-w-2xl"
//         >
//             {/* Badge */}
//             <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="inline-flex items-center gap-2 mb-6"
//             >
//                 <span className="h-[1px] w-8 bg-amber-500"></span>
//                 <span className="text-amber-500 font-serif italic text-lg">Serving in Trivandrum Since 2020</span>
//             </motion.div>

//             {/* Headline */}
//             <motion.h1 
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-white"
//             >
//                 The Real Taste of <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-200 drop-shadow-sm">
//                     Thrippunithura
//                 </span>
//             </motion.h1>

//             {/* Description */}
//             <motion.p 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-lg md:text-xl text-stone-400 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
//             >
//                 From <b>Ambi's Kitchen</b> to your dining table. Experience the authentic sweetness of Palada Payasam and traditional feasts, trusted by thousands of families.
//             </motion.p>
          
//             {/* Buttons */}
//             <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//             >
//                 <CustomButton text="Order Fresh Meals" isPrimary={true} />
             
//             </motion.div>

//             {/* Trust Stats */}
//             <div className="mt-12 flex items-center justify-center md:justify-start gap-8 border-t border-white/5 pt-6">
//                 <div className="text-left">
//                     <p className="text-2xl font-bold text-white">5+ Years</p>
//                     <p className="text-xs text-stone-500 uppercase">Of Tradition</p>
//                 </div>
//                 <div className="w-px h-8 bg-white/10"></div>
//                 <div className="text-left">
//                     <p className="text-2xl font-bold text-white">100%</p>
//                     <p className="text-xs text-stone-500 uppercase">Authentic Taste</p>
//                 </div>
//             </div>
//         </motion.div>


//         {/* --- RIGHT SIDE: VISUALS --- */}
//         <motion.div 
//            style={{ y: yImage }}
//            initial={{ opacity: 0, scale: 0.9 }}
//            animate={{ opacity: 1, scale: 1 }}
//            transition={{ duration: 1, delay: 0.3 }}
//            className="flex-1 flex justify-center relative order-1 md:order-2 w-full max-w-[500px]"
//         >
//             {/* Rotating Seal */}
//             <motion.div 
//                 className="absolute -top-6 -right-2 md:-right-8 z-20"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.8, type: "spring" }}
//             >
//                 <RotatingSeal text="•AMBIS KITCHEN •AUTHENTIC •TASTY " />
//             </motion.div>

//             {/* Main Image Card */}
//             <div className="relative w-full aspect-[4/5] rounded-[2rem] p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10 shadow-2xl">
//                  <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
//                     {/* Placeholder for Food Image */}
//                     <img 
//                         src="/images/hero.png" 
//                         alt="Palada Payasam" 
//                         className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
//                     />
                    
//                     {/* Overlay Gradient */}
//                     <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                    
//                     {/* Card Text */}
//                     <div className="absolute bottom-8 left-6 right-6">
//                         <h3 className="text-2xl font-serif text-amber-400 mb-1">Ambi's Kitchen</h3>
//                         <p className="text-stone-300 text-sm">The Real Taste of Thripunithura.</p>
//                     </div>
//                  </div>
//             </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// // --- ROTATING SEAL COMPONENT ---
// function RotatingSeal({ text }) {
//     return (
//         <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
//             {/* Text Ring */}
//             <motion.div 
//                 className="absolute inset-0 w-full h-full"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             >
//                 <svg viewBox="0 0 100 100" width="100%" height="100%">
//                     <defs>
//                         <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
//                     </defs>
//                     <text fontSize="10.5" fontWeight="bold" fill="#fbbf24" letterSpacing="1.1">
//                         <textPath href="#circlePath">
//                             {text}
//                         </textPath>
//                     </text>
//                 </svg>
//             </motion.div>
            
//             {/* Center Dot / 5 Years */}
//             <div className="absolute inset-0 m-auto w-16 h-16 bg-amber-500 rounded-full flex flex-col items-center justify-center shadow-lg shadow-amber-500/30 text-black z-10">
//                 <span className="text-2xl font-bold leading-none">5</span>
//                 <span className="text-[9px] font-bold uppercase">Years</span>
//             </div>
//         </div>
//     );
// }


// "use client";
// import { 
//   motion, 
//   useScroll, 
//   useTransform, 
//   useMotionValue, 
//   useSpring 
// } from "framer-motion";
// import { useRef } from "react";
// import CustomButton from "./CustomButton"; 

// export default function Hero() {
//   const containerRef = useRef(null);
//   const { scrollY } = useScroll();
  
//   // Parallax / Scroll Effects
//   // Reduced motion distance for mobile to keep items in view longer
//   const yText = useTransform(scrollY, [0, 500], [0, 100]); 
//   const yImage = useTransform(scrollY, [0, 500], [0, 50]);
//   const logoScale = useTransform(scrollY, [0, 300], [1, 0.8]);

//   return (
//     <section
//       ref={containerRef}
//       id="hero-section"
//       // Changed min-h-[100vh] to min-h-screen and added pb-10 for mobile spacing
//       className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white pb-10"
//     >
//       {/* ---------------- BACKGROUND LAYERS ---------------- */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#120f2e] via-[#050414] to-[#0f0b05] z-0" />

//       {/* Spinning Background Brand */}
//       <motion.div 
//         className="absolute top-[-10%] right-[40%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.03] z-0 pointer-events-none grayscale contrast-150"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
//         style={{ backgroundImage: "url('/images/logo.jpg')", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
//       />

//       {/* Animated Glow Blobs */}
//       <motion.div 
//         animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
//         transition={{ duration: 10, repeat: Infinity }}
//         className="absolute top-[10%] left-[-20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-900/30 rounded-full blur-[80px] md:blur-[120px] z-0"
//       />
//       <motion.div 
//         animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
//         transition={{ duration: 12, repeat: Infinity, delay: 2 }}
//         className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-amber-600/20 rounded-full blur-[80px] md:blur-[120px] z-0"
//       />


//       {/* ---------------- HEADER ---------------- */}
//       <div className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start">
//         <motion.div 
//             style={{ scale: logoScale }}
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, type: "spring" }}
//             className="relative group"
//         >
//             <div className="absolute inset-0 bg-amber-500/50 blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
//         </motion.div>
//       </div>


//       {/* ---------------- MAIN CONTENT ---------------- */}
//       {/* Changed pt-32 to pt-28 to bring content up on mobile */}
//       <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between pt-28 md:pt-10 gap-12 md:gap-16">
        
//         {/* --- LEFT SIDE: TEXT --- */}
//         <motion.div 
//           style={{ y: yText }} 
//           className="flex-1 text-center md:text-left order-1 max-w-2xl w-full"
//         >
//             <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="inline-flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-6"
//             >
//                 <span className="h-[1px] w-8 bg-amber-500"></span>
//                 <span className="text-amber-500 font-serif italic text-base md:text-lg">Serving in Trivandrum Since 2020</span>
//             </motion.div>

//             <motion.h1 
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold leading-[1.1] mb-4 md:mb-6 text-white"
//             >
//                 The Real Taste of <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-200 drop-shadow-sm">
//                     Thrippunithura
//                 </span>
//             </motion.h1>

//             <motion.p 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-base md:text-xl text-stone-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium"
//             >
//                 From <b>Ambi's Kitchen</b> to your dining table. Experience the authentic sweetness of Palada Payasam and traditional feasts.
//             </motion.p>
          
//             {/* BUTTONS AREA - UPDATED FLEX & SIZING */}
//             <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-6 relative z-20"
//             >
//                 <CustomButton text="Order Fresh Meals" isPrimary={true} />
                
//                 {/* 3D LOGO: Made smaller on mobile (w-20) to fit next to button */}
//                 <ThreeDLogo src="/images/ambi.png" className="w-20 h-20 md:w-32 md:h-32" />
//             </motion.div>

//             {/* Stats */}
//             <div className="mt-10 md:mt-12 flex items-center justify-center md:justify-start gap-6 md:gap-8 border-t border-white/5 pt-6">
//                 <div className="text-left">
//                     <p className="text-xl md:text-2xl font-bold text-white">5+ Years</p>
//                     <p className="text-[10px] md:text-xs text-stone-500 uppercase">Of Tradition</p>
//                 </div>
//                 <div className="w-px h-8 bg-white/10"></div>
//                 <div className="text-left">
//                     <p className="text-xl md:text-2xl font-bold text-white">100%</p>
//                     <p className="text-[10px] md:text-xs text-stone-500 uppercase">Authentic Taste</p>
//                 </div>
//             </div>
//         </motion.div>


//         {/* --- RIGHT SIDE: VISUALS --- */}
//         <motion.div 
//            style={{ y: yImage }}
//            initial={{ opacity: 0, scale: 0.9 }}
//            animate={{ opacity: 1, scale: 1 }}
//            transition={{ duration: 1, delay: 0.3 }}
//            className="flex-1 flex justify-center relative order-2 w-full max-w-[400px] md:max-w-[500px] mt-8 md:mt-0"
//         >
//             {/* Rotating Seal */}
//             <motion.div 
//                 className="absolute -top-6 -right-0 md:-right-8 z-20"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.8, type: "spring" }}
//             >
//                 <RotatingSeal text="•AMBIS KITCHEN •AUTHENTIC •TASTY " />
//             </motion.div>

//             {/* Main Image Card */}
//             <div className="relative w-full aspect-[4/5] rounded-[2rem] p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10 shadow-2xl">
//                  <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
//                     <img 
//                         src="/images/hero.png" 
//                         alt="Palada Payasam" 
//                         className="w-full h-full object-cover" 
//                     />
                    
//                     <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                    
//                     <div className="absolute bottom-8 left-6 right-6">
//                         <h3 className="text-xl md:text-2xl font-serif text-amber-400 mb-1">Ambi's Kitchen</h3>
//                         <p className="text-stone-300 text-xs md:text-sm">The Real Taste of Thripunithura.</p>
//                     </div>
//                  </div>
//             </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// // --- UPDATED 3D LOGO WITH CLASSNAME PROP ---
// function ThreeDLogo({ src, className }) {
//     const x = useMotionValue(0);
//     const y = useMotionValue(0);

//     const mouseX = useSpring(x);
//     const mouseY = useSpring(y);

//     const rotateX = useTransform(mouseY, [-0.5, 0.5], ["25deg", "-25deg"]);
//     const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-25deg", "25deg"]);

//     function handleMouseMove(event) {
//         const rect = event.currentTarget.getBoundingClientRect();
//         const width = rect.width;
//         const height = rect.height;
//         const mouseXFromCenter = event.clientX - rect.left - width / 2;
//         const mouseYFromCenter = event.clientY - rect.top - height / 2;

//         x.set(mouseXFromCenter / width);
//         y.set(mouseYFromCenter / height);
//     }

//     function handleMouseLeave() {
//         x.set(0);
//         y.set(0);
//     }

//     // Default dimensions if no className provided
//     const dimensionClasses = className || "w-32 h-32";

//     return (
//         <div 
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             className={`relative ${dimensionClasses} flex-shrink-0 cursor-pointer perspective-800 group`}
//             style={{ perspective: "800px" }}
//         >
//             <motion.div
//                 style={{
//                     rotateX,
//                     rotateY,
//                     transformStyle: "preserve-3d",
//                 }}
//                 className="w-full h-full relative"
//             >
//                 {/* 2. MAIN LOGO FACE */}
//                 <div 
//                     className="absolute inset-0 bg-transparent rounded-2xl overflow-hidden flex items-center justify-center"
//                     style={{ transform: "translateZ(0px)" }}
//                 >
//                     <img 
//                         src={src}
//                         alt="Brand Logo"
//                         className="w-[90%] h-[90%] object-contain drop-shadow-lg"
//                     />
//                 </div>
//             </motion.div>
//         </div>
//     );
// }

// // --- RESPONSIVE ROTATING SEAL ---
// function RotatingSeal({ text }) {
//     return (
//         <div className="relative w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
//             <motion.div 
//                 className="absolute inset-0 w-full h-full"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             >
//                 <svg viewBox="0 0 100 100" width="100%" height="100%">
//                     <defs>
//                         <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
//                     </defs>
//                     <text fontSize="10.5" fontWeight="bold" fill="#fbbf24" letterSpacing="1.1">
//                         <textPath href="#circlePath">{text}</textPath>
//                     </text>
//                 </svg>
//             </motion.div>
//             <div className="absolute inset-0 m-auto w-12 h-12 md:w-16 md:h-16 bg-amber-500 rounded-full flex flex-col items-center justify-center shadow-lg shadow-amber-500/30 text-black z-10">
//                 <span className="text-xl md:text-2xl font-bold leading-none">5</span>
//                 <span className="text-[7px] md:text-[9px] font-bold uppercase">Years</span>
//             </div>
//         </div>
//     );
// }

"use client";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionValue, 
  useSpring 
} from "framer-motion";
import { useRef } from "react";
import CustomButton from "./CustomButton"; 

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax / Scroll Effects
  const yText = useTransform(scrollY, [0, 500], [0, 100]); 
  const yImage = useTransform(scrollY, [0, 500], [0, 50]);
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white pb-10"
    >
      {/* ---------------- BACKGROUND LAYERS ---------------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#120f2e] via-[#050414] to-[#0f0b05] z-0" />

      {/* Spinning Background Brand */}
      <motion.div 
        className="absolute top-[-10%] right-[40%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.03] z-0 pointer-events-none grayscale contrast-150"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ backgroundImage: "url('/images/logo.jpg')", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
      />

      {/* Animated Glow Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[10%] left-[-20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-900/30 rounded-full blur-[80px] md:blur-[120px] z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-amber-600/20 rounded-full blur-[80px] md:blur-[120px] z-0"
      />


      {/* ---------------- HEADER ---------------- */}
      <div className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start">
        <motion.div 
            style={{ scale: logoScale }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative group"
        >
            <div className="absolute inset-0 bg-amber-500/50 blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
            {/* You might want to put a header logo here later */}
        </motion.div>
      </div>


      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between pt-28 md:pt-10 gap-12 md:gap-16">
        
        {/* --- LEFT SIDE: TEXT --- */}
        <motion.div 
          style={{ y: yText }} 
          className="flex-1 text-center md:text-left order-1 max-w-2xl w-full"
        >
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-6"
            >
                <span className="h-[1px] w-8 bg-amber-500"></span>
                <span className="text-amber-500 font-serif italic text-base md:text-lg">Serving in Trivandrum Since 2020</span>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold leading-[1.1] mb-4 md:mb-6 text-white"
            >
                The Real Taste of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-200 drop-shadow-sm">
                    Thrippunithura
                </span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-xl text-stone-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium"
            >
                From <b>Ambi's Kitchen</b> to your dining table. Experience the authentic sweetness of Palada Payasam and traditional feasts.
            </motion.p>
          
            {/* BUTTONS AREA */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-6 relative z-20"
            >
                {/* <CustomButton text="Order Fresh Meals" isPrimary={true} /> */}
                
                {/* REPLACED ThreeDLogo with the new container + image child */}
                <ThreeDTiltContainer className="w-20 h-20 md:w-32 md:h-32">
                     <div className="w-full h-full flex items-center justify-center">
                         <img 
                             src="/images/ambi.png" 
                             alt="Ambi's Kitchen Logo"
                             className="w-[100%] h-[100%] object-contain drop-shadow-lg"
                         />
                     </div>
                </ThreeDTiltContainer>
            </motion.div>

            {/* Stats */}
            <div className="mt-10 md:mt-12 flex items-center justify-center md:justify-start gap-6 md:gap-8 border-t border-white/5 pt-6">
                <div className="text-left">
                    <p className="text-xl md:text-2xl font-bold text-white">5+ Years</p>
                    <p className="text-[10px] md:text-xs text-stone-500 uppercase">Of Tradition</p>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="text-left">
                    <p className="text-xl md:text-2xl font-bold text-white">100%</p>
                    <p className="text-[10px] md:text-xs text-stone-500 uppercase">Authentic Taste</p>
                </div>
            </div>
        </motion.div>


        {/* --- RIGHT SIDE: VISUALS --- */}
        <motion.div 
           style={{ y: yImage }}
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="flex-1 flex justify-center relative order-2 w-full max-w-[400px] md:max-w-[500px] mt-8 md:mt-0"
        >
            {/* Rotating Seal (Kept outside the 3D effect so it floats independently) */}
            <motion.div 
                className="absolute -top-6 -right-0 md:-right-8 z-20 pointer-events-none" // Added pointer-events-none so it doesn't interfere with 3D hover
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
            >
                <RotatingSeal text="•AMBIS KITCHEN •AUTHENTIC •TASTY " />
            </motion.div>

            {/* === MAIN IMAGE CARD WITH 3D EFFECT === */}
            {/* We wrap the card structure in the new ThreeDTiltContainer */}
            <ThreeDTiltContainer className="w-full aspect-[4/5] relative z-10">
                <div className="w-full h-full rounded-[2rem] p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
                    <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
                        <img 
                            src="/images/hero.png" 
                            alt="Palada Payasam" 
                            className="w-full h-full object-cover scale-[1.02]" // Slight scale up to prevent edge clipping during tilt
                        />
                        
                        <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                        
                        <div className="absolute bottom-8 left-6 right-6">
                            <h3 className="text-xl md:text-2xl font-serif text-amber-400 mb-1">Ambi's Kitchen</h3>
                            <p className="text-stone-300 text-xs md:text-sm">The Real Taste of Thripunithura.</p>
                        </div>
                    </div>
                </div>
            </ThreeDTiltContainer>
             {/* === END MAIN IMAGE CARD === */}

        </motion.div>
      </div>
    </section>
  );
}

// --- REFACTORED: GENERIC 3D TILT CONTAINER ---
// This component now accepts 'children' instead of a specific image src
function ThreeDTiltContainer({ children, className }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics for the mouse movement
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Map mouse position to rotation degrees
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = event.clientX - rect.left - width / 2;
        const mouseYFromCenter = event.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative cursor-pointer ${className || ''}`}
            style={{ 
                perspective: "1000px",
            }} 
        >
            {/* 1. MOUSE TILT LAYER (Controls interaction) */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full relative"
            >
                {/* 2. AUTO-FLOAT LAYER (Adds life on Mobile & Desktop) */}
                {/* This inner div continuously floats, ensuring 3D movement even without mouse interaction */}
                <motion.div 
                    animate={{ 
                        y: [0, -10, 0],
                        rotateZ: [0, 1, 0, -1, 0] // Subtle rotation
                    }}
                    transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="w-full h-full"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* 3. DEPTH LAYER */}
                    <div 
                        className="w-full h-full"
                        style={{ 
                            transform: "translateZ(20px)", // Pops the content out
                            transformStyle: "preserve-3d" 
                        }}
                    >
                        {children}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

// --- RESPONSIVE ROTATING SEAL (Unchanged) ---
function RotatingSeal({ text }) {
    return (
        <div className="relative w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
            <motion.div 
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <defs>
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text fontSize="10.5" fontWeight="bold" fill="#fbbf24" letterSpacing="1.1">
                        <textPath href="#circlePath">{text}</textPath>
                    </text>
                </svg>
            </motion.div>
            <div className="absolute inset-0 m-auto w-12 h-12 md:w-16 md:h-16 bg-amber-500 rounded-full flex flex-col items-center justify-center shadow-lg shadow-amber-500/30 text-black z-10">
                <span className="text-xl md:text-2xl font-bold leading-none">5</span>
                <span className="text-[7px] md:text-[9px] font-bold uppercase">Years</span>
            </div>
        </div>
    );
}