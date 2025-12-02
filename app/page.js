// "use client";
// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";

// // Import your existing components
// import Hero from "./components/Hero";
// import Ticker from "./components/Ticker";
// import MenuGrid from "./components/MenuGrid";
// import AboutStory from "./components/AboutStory";
// import PouringSection from "./components/PouringSection";
// import Footer from "./components/Footer";
// import ScrollWrapper from "./components/ScrollWrapper";
// import Preloader from "./components/Preloader"; // <--- Import the new Preloader
// import CustomCursor from "./components/CustomCursor";
// import Header from "./components/Header";
// import DeliveryPartners from "./components/DeliveryPartner";

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <main className="bg-stone-50 min-h-screen selection:bg-orange-500 selection:text-white cursor-none">

//       <CustomCursor />
      
//       {/* 1. The Preloader Layer */}
//       <AnimatePresence mode="wait">
//         {isLoading && (
//           <Preloader onComplete={() => setIsLoading(false)} />
//         )}
//       </AnimatePresence>

//       {/* 2. The Main Website (Always rendered underneath, but revealed when preloader lifts) */}
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


"use client";
import { useState, useEffect } from "react"; // Added useEffect
import { AnimatePresence } from "framer-motion";

// Import your existing components
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import MenuGrid from "./components/MenuGrid";
import AboutStory from "./components/AboutStory";
import PouringSection from "./components/PouringSection";
import Footer from "./components/Footer";
import ScrollWrapper from "./components/ScrollWrapper";
import Preloader from "./components/Preloader"; 
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import DeliveryPartners from "./components/DeliveryPartner";

export default function Home() {
  // Default to true so we don't show the site before checking storage
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has visited in this session
    const hasVisited = sessionStorage.getItem("ambis_visited");

    if (hasVisited) {
      // If visited, skip the loader immediately
      setIsLoading(false);
    } else {
      // If not visited, ensure loader is active (default is true anyway)
      setIsLoading(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    // 1. Hide the loader
    setIsLoading(false);
    // 2. Set the flag in session storage so it doesn't show again
    sessionStorage.setItem("ambis_visited", "true");
  };

  return (
    <main className="bg-stone-50 min-h-screen selection:bg-orange-500 selection:text-white cursor-none">

      <CustomCursor />
      
      {/* 1. The Preloader Layer */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      {/* 2. The Main Website */}
      <ScrollWrapper>
        {/* <Header /> */}
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