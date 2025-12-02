"use client";
// 1. IMPORT THE SHARED DATA
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { blogData } from "../data/page";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogListing() {
  return (
    <>
    <section className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 cursor-none">
      <div className="container mx-auto max-w-6xl">
        <CustomCursor />
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-4"
          >
            The Kitchen <span className="text-amber-500 italic">Chronicles</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 max-w-2xl mx-auto text-lg"
          >
            Stories of tradition, taste, and the culture behind every meal we serve.
          </motion.p>
        </div>

        {/* GRID LAYOUT - NOW USING IMPORTED DATA */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* We map over blogData imported from posts.js */}
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>
      </div>
      
    </section>
    <Footer />
    </>
   
  );
}

// --- CARD COMPONENT (Same as before) ---
function BlogCard({ post }) {
  return (
    <motion.div 
      variants={cardVariants}
      className={`group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-colors duration-500 flex flex-col ${post.isFeatured ? "md:col-span-2 lg:col-span-2 md:flex-row" : ""}`}
    >
      {/* IMAGE WRAPPER */}
      <div className={`relative overflow-hidden ${post.isFeatured ? "w-full md:w-1/2 h-64 md:h-auto" : "w-full h-64"}`}>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Tag className="w-3 h-3" />
            {post.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 md:p-8 flex flex-col justify-center flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-900/0 group-hover:from-amber-500/5 group-hover:to-amber-900/10 transition-colors duration-500" />
        
        <div className="relative z-10">
            <div className="flex items-center gap-4 text-stone-500 text-xs mb-4">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
            </div>

            <h2  className={`font-serif font-bold text-white mb-3 group-hover:text-amber-400 transition-colors ${post.isFeatured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
            {post.title}
            </h2>

            <p className="text-stone-400 mb-6 line-clamp-3 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {post.excerpt}
            </p>

            <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-amber-500 font-bold text-sm tracking-wide uppercase hover:gap-3 transition-all">
            Read Story <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
        
      </div>
    
    </motion.div>
    
  );
}