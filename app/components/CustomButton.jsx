"use client";
import { motion } from "framer-motion";

export default function CustomButton({ text, onClick, className = "", isPrimary = true }) {
  return (
    <motion.button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-full font-bold tracking-wide shadow-xl transition-all duration-300 ${className} 
        ${isPrimary 
            ? "bg-stone-900 text-amber-400 border border-amber-400/50 hover:shadow-amber-400/50" 
            : "bg-transparent text-stone-800 border border-stone-400 hover:border-stone-900 hover:text-stone-900"
        }
      `}
      // 1. CLICK ANIMATION (Works on Mobile Tap)
      whileTap={{ scale: 0.95 }}
      // 2. HOVER ANIMATION (Desktop Only)
      whileHover={{ scale: 1.05 }}
    >
      
      {/* --- A. AUTOMATIC SHIMMER (Visible on Mobile) --- */}
      {/* This creates a light reflection that moves across the button automatically */}
      {isPrimary && (
        <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
            initial={{ x: "-150%" }}
            animate={{ x: "150%" }}
            transition={{
                repeat: Infinity,
                duration: 2.5, // Runs every 2.5 seconds
                ease: "linear",
                repeatDelay: 1, // Pause between shimmers
            }}
        />
      )}

      {/* --- B. HOVER FILL EFFECT (Desktop Only) --- */}
      {/* Fills with yellow on hover */}
      <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-amber-400 transition-transform duration-300 ease-out group-hover:translate-y-0" />

      {/* --- C. TEXT & ICON LAYER --- */}
      <span className={`relative z-10 flex p-1 items-center justify-center gap-2 transition-colors duration-300 ${isPrimary ? "group-hover:text-stone-900" : ""}`}>
        {text}
        
        {/* Animated Arrow */}
        <motion.span
          className="flex items-center"
          animate={{ x: [0, 3, 0] }} // Subtle nudge animation
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
            </svg>
        </motion.span>
      </span>
      
      {/* --- D. PULSE GLOW (Underneath) --- */}
      {isPrimary && (
         <span className="absolute -inset-1 rounded-full border border-amber-400/30 opacity-0 group-hover:opacity-100 group-active:opacity-100 animate-ping duration-1000" />
      )}

    </motion.button>
  );
}