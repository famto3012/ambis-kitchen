'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ChefHat, Heart, Clock, Users, ArrowRight, Utensils, Star, Award, Leaf } from 'lucide-react';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import { useRouter } from "next/navigation";


// --- ANIMATION UTILITIES ---

const fadeIn = {

  hidden: { opacity: 0, y: 20 },

  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }

};



// Fade Up Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Stagger Container
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Scale on Hover
const hoverScale = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeInOut" } }
};

// Counter Component for Stats
const Counter = ({ from, to }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const router = useRouter();

  useEffect(() => {
    if (!isInView) return;
    const node = nodeRef.current;
    const controls = {
      value: from,
      duration: 2000,
    };

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / controls.duration, 1);
      node.textContent = Math.floor(progress * (to - from) + from);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, isInView]);

  return <span ref={nodeRef} />;
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effect for Hero
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-950 cursor-none text-neutral-200 font-sans selection:bg-amber-500 selection:text-white">

      <CustomCursor />
      {/* --- HERO SECTION WITH PARALLAX --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Ambis Kitchen Atmosphere"
            fill
            className="opacity-60"
            priority
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-amber-500/50 text-amber-400 text-sm tracking-widest uppercase mb-6 bg-amber-500/10 backdrop-blur-sm">
              Est. 2020 • Trivandrum
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-serif tracking-tight"
          >
            Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Soul</span> <br />
            of Real Food.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed"
          >
            Where culinary artistry meets the comfort of home.
            Experience the symphony of spices at Ambis Kitchen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-neutral-500">Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
          </motion.div>
        </div>
      </section>


      {/* --- OUR ORIGIN SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -z-10" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">
              Not Just a Kitchen.<br />
              <span className="text-amber-500">It’s a Legacy.</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6 text-neutral-400 text-lg leading-relaxed">
              <p>
                Ambis Kitchen started in 2020 amidst a changing world. We noticed that while food delivery was booming, the <em className="text-white">essence</em> of a home-cooked meal was fading away.
              </p>
              <p>
                We wanted to bridge the gap between quality restaurant dining and the warmth of a mother's kitchen. What began as a small passion project in Trivandrum has grown into a culinary movement.
              </p>
              <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-8 italic text-white text-xl bg-neutral-900/50 rounded-r-lg">
                "We don't send out food we wouldn't serve to our own children."
              </blockquote>
            </motion.div>

           <motion.button
  variants={fadeInUp}
 onClick={() => router.push("/blog/kerala-desserts-ambi")}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-8 px-8 py-4 bg-transparent border border-amber-500 
  text-amber-500 hover:bg-amber-500 hover:text-neutral-900 rounded-full 
  font-semibold transition-all duration-300 flex items-center gap-2"
>
  Read Our Full History <ArrowRight className="w-4 h-4" />
</motion.button>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
              <Image
                src="/images/indian.png"
                alt="Chef plating food"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2">The Founder</div>
                <div className="text-white text-2xl font-serif">Ambis Signature Dish</div>
              </div>
            </div>
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-neutral-900 p-6 rounded-xl border border-neutral-800 shadow-xl max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-amber-500/20 rounded-full">
                  <Award className="text-amber-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold">Award Winning</div>
                  <div className="text-neutral-500 text-xs">Best Local Cuisine 2024</div>
                </div>
              </div>
              <p className="text-neutral-400 text-sm">Recognized for maintaining authentic traditional recipes.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* --- PHILOSOPHY CARDS --- */}

      <section className="py-20 bg-[#F0C944]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Philosophy</h2>

            <p className="text-gray-500 mt-4">The secret ingredients behind every dish we serve.</p>

          </div>



          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true }}

            className="grid md:grid-cols-3 gap-8"

          >

            {/* Card 1 */}

            <motion.div variants={fadeIn} className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow border border-gray-100 text-center group">

              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors duration-300">

                <ChefHat className="text-green-600 w-8 h-8 group-hover:text-white" />

              </div>

              <h3 className="text-xl font-bold mb-3 text-black">Fresh Ingredients</h3>

              <p className="text-gray-600">We source our produce locally whenever possible to ensure maximum freshness, crunch, and taste.</p>

            </motion.div>



            {/* Card 2 */}

            <motion.div variants={fadeIn} className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow border border-gray-100 text-center group">

              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500 transition-colors duration-300">

                <Heart className="text-red-600 w-8 h-8 group-hover:text-white" />

              </div>

              <h3 className="text-xl font-bold mb-3 text-black">Made with Love</h3>

              <p className="text-gray-600">We cook for our customers the way we cook for our own families. No shortcuts, just passion.</p>

            </motion.div>



            {/* Card 3 */}

            <motion.div variants={fadeIn} className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow border border-gray-100 text-center group">

              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">

                <Users className="text-blue-600 w-8 h-8 group-hover:text-white" />

              </div>

              <h3 className="text-xl font-bold mb-3 text-black">Community First</h3>

              <p className="text-gray-600">Your satisfaction is our main ingredient. We believe in building relationships through food.</p>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* --- LIVE COUNTER STATS --- */}
      <section className="py-20 border-y border-neutral-800 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 200000, label: "Happy Customers", suffix: "+" },
              { value: 120, label: "Dishes Served", suffix: "+" },
              { value: 500000, label: "Orders Fulfilled", suffix: "+" },
              { value: 99, label: "Positive Reviews", suffix: "%" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white font-mono">
                  <Counter from={0} to={stat.value} />{stat.suffix}
                </div>
                <div className="text-amber-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- GALLERY MASONRY (New) --- */}
      <section className="py-12 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] md:h-[600px]">
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
              <Image src="/images/padmanabhan.jpg" alt="Food" fill className="object-fill group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <Image src="/images/ada.jpg" alt="Food" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <Image src="/images/ambis.jpg" alt="Food" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-2 md:col-span-2 relative rounded-2xl overflow-hidden group">
              <Image src="/images/prize.jpeg" alt="Food" fill className="object-contain group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 text-center relative overflow-hidden">
        {/* Abstract circles bg */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-400 rounded-full opacity-20 animate-[spin_20s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-amber-700 rounded-full opacity-20 animate-[spin_15s_linear_infinite_reverse]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <Utensils className="w-12 h-12 text-amber-100 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-serif">Hungry Yet?</h2>
          <p className="text-neutral-400 mb-10 text-xl">
            The kitchen is open. The chefs are ready. <br />
            Your table is waiting (or we can bring the table to you).
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button onClick={() => window.open("https://order.famto.in/merchant/M250117/66e1d938b94cc5e6ad6cb1e0/products", "_blank")}
              className="bg-amber-500 hover:bg-amber-600 text-neutral-950 px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.5)]">
              Order Now
            </button>

          </div>
        </motion.div>
      </section>
      <Footer />

    </div>
  );
}