
//     "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -30, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.45 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all ${
//         scrolled ? "bg-white/90 shadow-md text-black backdrop-blur-md" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//         <Link href="/" className="text-2xl font-bold text-amber-600">Ambis Kitchen</Link>
//         <nav className="hidden md:flex gap-6">
//           <Link href="#menu" className="hover:text-amber-600">Menu</Link>
//           <Link href="/blog" className="hover:text-amber-600">Blogs</Link>
//           <Link href="/contact" className="hover:text-amber-600">Contact</Link>
//         </nav>
//         <a href="https://wa.me/919876543210" className="ml-4 inline-block bg-emerald-500 text-white px-4 py-2 rounded-lg">WhatsApp</a>
//       </div>
//     </motion.header>
//   );
// }


"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-white/70 shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight bg-gradient-to-r from-amber-700 to-red-600 bg-clip-text text-transparent"
        >
          Ambis Kitchen
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-lg font-medium relative">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/#menu" && pathname === "/");

            return (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isActive ? "text-amber-600" : "text-gray-800 hover:text-amber-600"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-amber-600 rounded-full"
                  />
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
