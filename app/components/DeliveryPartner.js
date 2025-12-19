"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const platforms = [
  {
    name: "WhatsApp",
    description: "Daily Menu & Orders",
    color: "from-emerald-600 to-green-400",
    sectionColor: "#16A34A",
    shadow: "shadow-emerald-700",
    link: "https://whatsapp.com/channel/0029VaAAv7UBVJl8Scch1h0L",
    isFeatured: true,
    logoFallback: "W"
  },

  {
    name: "Famto",
    description: "Best Prices & Exclusive Offers",
    color: "from-[#00CED1] to-[#00CED1]", // Card Gradient
    sectionColor: "#00CED1", // Deep Cyan (Background)
    shadow: "shadow-cyan-800",
    link: "https://order.famto.in/merchant/M250117/66e1d938b94cc5e6ad6cb1e0/products",
    isFeatured: true,
    logoFallback: "F"
  },
  {
    name: "Swiggy",
    description: "Fast Delivery to your Doorstep",
    color: "from-orange-600 to-orange-500", // Card Gradient
    sectionColor: "#FC8019", // Deep Orange (Background)
    shadow: "shadow-orange-500/50",
    link: "https://www.swiggy.com/search?query=Ambi%27s+Kitchen",
    isFeatured: false,
    logoFallback: "S"
  },
  {
    name: "Zomato",
    description: "Explore our Full Menu Online",
    color: "from-red-700 to-red-600", // Card Gradient
    sectionColor: "#E23744", // Deep Red (Background)
    shadow: "shadow-red-500/50",
    link: "https://www.zomato.com/trivandrum/ambis-kitchen-manacadu",
    isFeatured: false,
    logoFallback: "Z"
  }
];

export default function DeliveryPartners() {
  // State to manage the background color of the whole section
  const [activeColor, setActiveColor] = useState("#0a0a0a"); // Default Dark

  return (
    <motion.section
      // Animate the background color of the entire section
      animate={{ backgroundColor: activeColor }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full py-24 overflow-hidden transition-colors"
    >

      {/* Background Ambience (Optional: Hides/Fades when colored) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Order Your Way
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-stone-400"
          >
            <span className="h-[1px] w-12 bg-stone-500/50"></span>
            <span className="uppercase tracking-widest text-sm font-medium">We Proudly Serve On</span>
            <span className="h-[1px] w-12 bg-stone-500/50"></span>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={index}
              data={platform}
              index={index}
              // Pass handlers to update parent state
              onHoverStart={() => setActiveColor(platform.sectionColor)}
              onHoverEnd={() => setActiveColor("#0a0a0a")}
            />
          ))}
        </div>

      </div>
    </motion.section>
  );
}

// --- INDIVIDUAL CARD COMPONENT ---
function PlatformCard({ data, index, onHoverStart, onHoverEnd }) {
  return (
    <motion.a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      // Animation Props
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      // Event Handlers for Background Change
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}

      className={`group relative flex flex-col items-center justify-center p-8 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-2xl`}
    >

      {/* CARD HOVER BACKGROUND (Gradient Fill) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out`} />

      {/* Featured Badge */}
      {data.isFeatured && (
        <div className="absolute top-4 right-4 z-20 bg-amber-500/20 text-amber-400 group-hover:text-white group-hover:bg-white/20 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-500/20 group-hover:border-white/30 transition-colors">
          RECOMMENDED
        </div>
      )}

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center w-full">

        {/* Logo Area */}
        <div className={`relative w-20 h-20 mb-6 rounded-2xl bg-[#151515] border border-white/10 flex items-center justify-center shadow-2xl ${data.shadow} group-hover:scale-110 group-hover:bg-black/20 group-hover:border-white/30 transition-all duration-500`}>
          <span className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br ${data.color} group-hover:text-white group-hover:bg-none`}>
            {data.logoFallback}
          </span>
        </div>

        {/* Text Content */}
        <h3 className="text-2xl font-bold text-white mb-2">{data.name}</h3>

        <p className="text-stone-400 text-sm text-center mb-6 group-hover:text-white/90 transition-colors duration-300">
          {data.description}
        </p>

        {/* Button */}
        <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-white transition-colors">
          <span>Order Now</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

      </div>

    </motion.a>
  );
}