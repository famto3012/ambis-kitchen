"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MenuCard({ item }) {
  return (
    <motion.article
      whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(0,0,0,0.12)" }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-white rounded-xl overflow-hidden border border-gray-100"
    >
      <div className="relative h-44 w-full">
        <Image src={item.img} alt={item.name} fill style={{ objectFit: "cover" }} />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
          </div>
          <div className="text-amber-600 font-semibold ml-2">{item.price}</div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs border px-2 py-1 rounded-full text-gray-600">{item.tag}</span>
          <a href="tel:+919895216559" className="text-sm bg-amber-500 text-white px-3 py-2 rounded-lg">Call to Order</a>
        </div>
      </div>
    </motion.article>
  );
}
