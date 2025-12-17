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
