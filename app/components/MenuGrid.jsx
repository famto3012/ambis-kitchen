// "use client";
// import { motion } from "framer-motion";

// const menuItems = [
//   {
//     id: 1,
//     name: "Palada Payasam (Pink)",
//     desc: "The traditional Thrippunithura Sadya dessert. Slow-cooked with milk and rice flakes.",
//     price: "₹180 / Litre",
//     image: "/images/item-palada.jpg",
//     tags: ["Must Try", "Sweet"],
//   },
//   {
//     id: 2,
//     name: "Soft Boli (The Perfect Pairing)",
//     desc: "Delicate, sweet flatbreads. Essential companion for Payasam.",
//     price: "₹120 / 10 Pcs",
//     image: "/images/item-boli.jpg",
//     tags: ["Vegetarian", "Sweet"],
//   },
//   {
//     id: 3,
//     name: "Mutton Stew",
//     desc: "Homestyle Mutton stew cooked in coconut milk with traditional spices.",
//     price: "₹350 / Portion",
//     image: "/images/item-mutton.jpg",
//     tags: ["Curry", "Non-Veg"],
//   },
//   {
//     id: 4,
//     name: "Fish Moilee (Seer Fish)",
//     desc: "Mildly spiced Kerala-style fish curry in rich coconut milk.",
//     price: "₹280 / Portion",
//     image: "/images/item-fish.jpg",
//     tags: ["Curry", "Non-Veg"],
//   },
//   {
//     id: 5,
//     name: "Inji Curry (Puli Inji)",
//     desc: "The essential side dish. Tangy, spicy ginger and jaggery preparation.",
//     price: "₹100 / 250ml",
//     image: "/images/item-puliinji.jpg",
//     tags: ["Side Dish", "Sadya"],
//   },
//   {
//     id: 6,
//     name: "Unniappam",
//     desc: "Traditional sweet fritters made with rice flour, banana, and jaggery.",
//     price: "₹80 / 10 Pcs",
//     image: "/images/item-unniappam.jpg",
//     tags: ["Snacks", "Sweet"],
//   },
// ];

// // Animation for single card appearance on scroll
// const cardVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     scale: 1,
//     transition: { type: "spring", stiffness: 100, damping: 20 }
//   },
// };

// export default function MenuGrid() {
//   return (
//     <section className="py-16 md:py-24 bg-stone-50 container mx-auto px-4">
      
//       {/* Section Header with Animation */}
//       <motion.div 
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <p className="text-orange-500 font-semibold tracking-widest uppercase mb-2">Our Specialties</p>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900">
//           From Thrippunithura to Your Table 🥄
//         </h2>
//       </motion.div>

//       {/* Menu Grid Container */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {menuItems.map((item, index) => (
//           <motion.div
//             key={item.id}
//             className="bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer relative group border border-stone-200"
//             // Scroll Animation (Staggered by index)
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
//             transition={{ delay: index * 0.15 }} // Staggered appearance
            
//             // Hover Animation (3D Tilt & Scale)
//             whileHover={{ 
//                 scale: 1.05, 
//                 rotateX: 5, 
//                 rotateY: 5,
//                 boxShadow: "0 25px 50px -12px rgba(234, 88, 12, 0.4)", // Orange shadow
//                 transition: { duration: 0.3, type: "spring", stiffness: 300 }
//             }}
//           >
//             {/* Image Section */}
//             <div className="h-48 overflow-hidden">
//               <img 
//                 src={item.image} 
//                 alt={item.name} 
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>

//             {/* Content Section */}
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-stone-900 mb-2">{item.name}</h3>
//               <p className="text-stone-600 text-sm mb-4 h-12">{item.desc}</p>
              
//               {/* Tags */}
//               <div className="flex gap-2 mb-4 flex-wrap">
//                 {item.tags.map(tag => (
//                   <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-amber-100 text-amber-800">
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Price and CTA */}
//               <div className="flex justify-between items-center pt-4 border-t border-stone-100">
//                 <span className="text-2xl font-extrabold text-orange-600">
//                   {item.price}
//                 </span>
//                 <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors transform group-hover:translate-x-1">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";
import { Link } from "lucide-react";

const menuItems = [
  { 
    id: 1, 
    name: "Varieties of Payasam", 
    description: "Ambalapuzha Palada, Parippu, Ada Pradhaman, Semiya, Gothambu & Wheat Payasam.",
    price: "Starts @ ₹280/L", 
    img: "/images/payasams.png", 
    tag: "Best Seller" 
  },
  { 
    id: 2, 
    name: "Boli Varieties", 
    description: "Signature Trivandrum Large Boli, Small Boli & Milk (Paal) Boli.",
    price: "Starts @ ₹120/Pack", 
    img: "/images/bolis.jpg", 
    tag: "Must Try" 
  },
  { 
    id: 3, 
    name: "Sadya Curries (Bulk)", 
    description: "Aviyal, Thoran, Olan, Kalan, Erissery, Pachadi, Sambar & Rasam.",
    price: "Available per Kg", 
    img: "/images/thoran.jpg", 
    tag: "Pure Veg" 
  },
  { 
    id: 4, 
    name: "Kerala Chips & Sides", 
    description: "Banana Chips (Upperi), Sarkara Varatti, Pappadam & Kondattam (Curd Chillies).",
    price: "Market Price", 
    img: "/images/snacks.jpg", 
    tag: "Crunchy" 
  },
  { 
    id: 5, 
    name: "Homemade Pickles", 
    description: "Cut Mango, Lemon, Puli Inji, Kannimanga & Lime Pickle.",
    price: "₹150/Bottle", 
    img: "/images/pickles.png", 
    tag: "Spicy" 
  },
  { 
    id: 6, 
    name: "Traditional Snacks", 
    description: "Unniyappam, Neyyappam, Achappam & Kuzhalappam.",
    price: "Pre-order Only", 
    img: "/images/traditional.png", 
    tag: "Festive" 
  },
];

export default function MenuGrid() {
  return (
    <section className="py-20 px-4 container mx-auto bg-stone-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">Our Menu</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-xl overflow-hidden shadow-lg border border-stone-100 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
          >
            <div className="h-56 overflow-hidden relative">
               {/* Image Placeholder */}
              <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase text-orange-600">
                {item.tag}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-stone-800 font-serif">{item.name}</h3>
                {/* <span className="text-lg font-bold text-orange-600">{item.price}</span> */}
              </div>
              <p className="text-stone-500 text-sm mb-4">{item.description}</p>
              <CustomButton
               text="Order Now"
               onClick={() => window.open("https://order.famto.in/merchant/M250117/66e1d938b94cc5e6ad6cb1e0/products", "_blank")}
               className="w-full py-3! text-sm"
/>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}