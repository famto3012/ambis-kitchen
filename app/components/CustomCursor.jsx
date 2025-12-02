"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Mouse position state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics for the cursor (Spring)
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Track Mouse
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 16); // Center the 32px cursor
      mouseY.set(e.clientY - 16);
    };

    // 2. Detect Hover on Clickables
    const handleMouseOver = (e) => {
      if (e.target.tagName === "BUTTON" || e.target.tagName === "A" || e.target.closest("button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* The Main Ring Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-amber-500 rounded-full pointer-events-none z-[99999] mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={{ 
            scale: isHovering ? 2.5 : 1, // Grow when hovering buttons
            backgroundColor: isHovering ? "rgba(245, 158, 11, 0.2)" : "transparent"
        }} 
      />
      {/* The Center Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-amber-500 rounded-full pointer-events-none z-[99999] hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: 12, translateY: 12 }} // Center inside the ring
      />
    </>
  );
}