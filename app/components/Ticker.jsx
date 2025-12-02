"use client";
import { motion } from "framer-motion";

export default function Ticker() {
  const items = [
    "Palada Payasam", "•", "Soft Boli", "•", "Kadala Pradhamanam", "•", 
    "Sambar", "•", "Aviyal", "•", "Thoran", "•", "Pulisserry", "•", "Kondattam", "•", "Pickles", "•"
  ];

  return (
    <div className="bg-yellow-300 py-4 overflow-hidden rounded-t-4xl border-t-4 border-amber-400 relative z-20">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-stone-900 font-bold text-xl uppercase tracking-wider font-serif">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}