"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import CustomCursor from "../../components/CustomCursor";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
};

export default function BlogPostDetailClient({ post }) {
  const containerRef = useRef(null);

  // Scroll Parallax
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Progress Bar
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <article className="bg-[#050505] min-h-screen text-stone-200 relative overflow-hidden selection:bg-amber-500/30 cursor-none">
      <CustomCursor />

      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-700 via-amber-500 to-yellow-400 origin-left z-50 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
        style={{ scaleX }}
      />

      {/* Grain Texture */}
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      ></div>

      {/* Ambient Lights */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-900/20 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/10 blur-[180px] rounded-full"
        />
      </div>

      {/* HERO SECTION */}
      <div ref={containerRef} className="relative h-[65vh] w-full flex items-end md:items-center pb-10">
        <motion.div style={{ y: yHero, opacity: opacityHero, scale: scaleHero }} className="absolute inset-0 z-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20 pt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-stone-300 underline hover:text-white mb-6 transition-colors uppercase text-xs tracking-widest font-bold"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Kitchen Chronicles
            </Link>

            {/* Category + Reading Time */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-amber-600/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-amber-600/20 border border-amber-500/30">
                {post.category}
              </span>
              <span className="flex items-center gap-2 text-stone-300 text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                <Clock className="w-4 h-4 text-amber-500" /> {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-serif font-bold text-white leading-[1] drop-shadow-2xl">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div initial="hidden" whileInView="show" variants={fadeInUp} viewport={{ once: true }} className="relative bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

          <div
            className="prose prose-invert prose-lg md:prose-xl max-w-none
              prose-headings:font-serif prose-headings:text-amber-500
              prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:text-stone-300 prose-p:leading-loose prose-p:font-light prose-p:text-[1.1rem]
              prose-strong:text-white prose-strong:font-semibold
              prose-li:text-stone-300 prose-li:marker:text-amber-500
              prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-500/10
              prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-xl
            "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Signature */}
          <div className="mt-16 pt-12 border-t border-white/10 flex items-center justify-between">
            <div>
              <p className="font-serif text-2xl text-white italic">Ambi’s Kitchen</p>
              <p className="text-stone-500 text-sm">Serving Tradition Since 2020</p>
            </div>
            <div className="font-handwriting text-4xl text-amber-500/50 rotate-[-5deg]">Chef Ambi</div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
