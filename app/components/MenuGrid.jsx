"use client";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";
import { Link } from "lucide-react";
import Image from "next/image";


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
    name: "Ghee Boli",
    description: "Signature Trivandrum Large Boli, Small Boli & Milk (Paal) Boli...",
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
    description: "Unniyappam, Neyyappam, Achappam & Kuzhalappam...",
    price: "Pre-order Only",
    img: "/images/traditional.png",
    tag: "Festive"
  },
  {
    id: 7,
    name: "Dinners",
    description: "Vegetable Stew, Channa Masala, Appam & Chappathi...",
    price: "Pre-order Only",
    img: "/images/dinner.png",
    tag: "Dinner"
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
              {/* <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /> */}

              <Image
                src={item.img}
                alt="Hero"
                // priority={true}
                className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                width={1920}
                height={1080}
                sizes="100vw"
                quality={80}
              />

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