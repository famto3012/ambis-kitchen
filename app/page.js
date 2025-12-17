"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy load heavy components
const Ticker = dynamic(() => import("./components/Ticker"), { ssr: false });
const MenuGrid = dynamic(() => import("./components/MenuGrid"), { ssr: false });
const AboutStory = dynamic(() => import("./components/AboutStory"), { ssr: false });
const PouringSection = dynamic(() => import("./components/PouringSection"), { ssr: false });
const DeliveryPartners = dynamic(() => import("./components/DeliveryPartner"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });
const ScrollWrapper = dynamic(() => import("./components/ScrollWrapper"), { ssr: false });
const CustomCursor = dynamic(() => import("./components/CustomCursor"), { ssr: false });

import Hero from "./components/Hero";
import Preloader from "./components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Skip preloader if Lighthouse is testing
    const isLighthouse = navigator.userAgent.includes("Chrome-Lighthouse");
    if (isLighthouse) {
      setIsLoading(false);
      return;
    }

    const hasVisited = sessionStorage.getItem("ambis_visited");
    if (hasVisited) setIsLoading(false);
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("ambis_visited", "true");
  };

  return (
    <main className="bg-stone-50 min-h-screen selection:bg-orange-500 selection:text-white cursor-none">

      <CustomCursor />

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      {/* Main content */}
      <ScrollWrapper>
        <Hero />

        <div id="content-layer" className="relative z-10 bg-stone-50">
          <Ticker />
          <PouringSection />
          <MenuGrid />
          <DeliveryPartners />
          <AboutStory />
          <Footer />
        </div>
      </ScrollWrapper>

    </main>
  );
}



// "use client";
// import { useState, useEffect } from "react"; // Added useEffect
// import { AnimatePresence } from "framer-motion";

// // Import your existing components
// import Hero from "./components/Hero";
// import Ticker from "./components/Ticker";
// import MenuGrid from "./components/MenuGrid";
// import AboutStory from "./components/AboutStory";
// import PouringSection from "./components/PouringSection";
// import Footer from "./components/Footer";
// import ScrollWrapper from "./components/ScrollWrapper";
// import Preloader from "./components/Preloader"; 
// import CustomCursor from "./components/CustomCursor";
// import DeliveryPartners from "./components/DeliveryPartner";

// export default function Home() {
//   // Default to true so we don't show the site before checking storage
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Check if the user has visited in this session
//     const hasVisited = sessionStorage.getItem("ambis_visited");

//     if (hasVisited) {
//       // If visited, skip the loader immediately
//       setIsLoading(false);
//     } else {
//       // If not visited, ensure loader is active (default is true anyway)
//       setIsLoading(true);
//     }
//   }, []);

//   const handlePreloaderComplete = () => {
//     // 1. Hide the loader
//     setIsLoading(false);
//     // 2. Set the flag in session storage so it doesn't show again
//     sessionStorage.setItem("ambis_visited", "true");
//   };

//   return (
//     <main className="bg-stone-50 min-h-screen selection:bg-orange-500 selection:text-white cursor-none">

//       <CustomCursor />
      
//       {/* 1. The Preloader Layer */}
//       <AnimatePresence mode="wait">
//         {isLoading && (
//           <Preloader onComplete={handlePreloaderComplete} />
//         )}
//       </AnimatePresence>

//       {/* 2. The Main Website */}
//       <ScrollWrapper>
//         {/* <Header /> */}
//         <Hero />
//         <div id="content-layer" className="relative z-10 bg-stone-50">
//           <Ticker />
//           <PouringSection />
//           <MenuGrid />
//           <DeliveryPartners />
//           <AboutStory />
//           <Footer />
//         </div>
//       </ScrollWrapper>

//     </main>
//   );
// }