'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileCheck, Ban, Truck, AlertTriangle, CreditCard, Gavel, MapPin } from 'lucide-react';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function TermsAndConditions() {
  return (
    <>
    <div className="min-h-screen cursor-none bg-neutral-950 text-neutral-200 font-sans selection:bg-amber-500 selection:text-white pt-32 pb-20">
      <CustomCursor />
      {/* --- HEADER --- */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block p-4 bg-neutral-900 rounded-full border border-neutral-800 mb-6"
        >
          <Scale className="w-10 h-10 text-amber-500" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif"
        >
          Terms & Conditions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400"
        >
          Please read these terms carefully before ordering.
        </motion.p>
      </div>

      {/* --- MAIN CONTENT --- */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-6"
      >
        
        {/* Agreement */}
        <TermSection title="1. Agreement to Terms" icon={<FileCheck className="w-5 h-5 text-amber-500" />}>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>Ambis Kitchen</strong> ("we," "us," or "our"), located in Manacaud, Trivandrum.
          </p>
          <p>
            By accessing our website or placing an order (via phone, WhatsApp, or third-party apps), you agree that you have read, understood, and agreed to be bound by all of these Terms and Conditions.
          </p>
        </TermSection>

        {/* Ordering & Pricing */}
        <TermSection title="2. Ordering & Payments" icon={<CreditCard className="w-5 h-5 text-amber-500" />}>
          <ul className="list-disc pl-5 space-y-2 marker:text-amber-500">
            <li><strong>Pricing:</strong> All prices listed on our menu are in Indian Rupees (INR) and are subject to change without prior notice.</li>
            <li><strong>Bulk Orders:</strong> Orders for bulk Payasam or Boli (catering quantities) must be placed at least <strong>48 hours in advance</strong>.</li>
            <li><strong>Payment:</strong> We accept cash on delivery, UPI, and major credit/debit cards. Full payment or a partial advance may be required for large catering orders.</li>
          </ul>
        </TermSection>

        {/* Cancellation Policy */}
        <TermSection title="3. Cancellations & Refunds" icon={<Ban className="w-5 h-5 text-amber-500" />}>
          <p>
            Due to the perishable nature of food, our cancellation policy is strict:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-amber-500">
            <li><strong>Instant Orders:</strong> Cannot be cancelled once the kitchen has begun preparation.</li>
            <li><strong>Bulk/Catering Orders:</strong> Cancellations made less than 24 hours before the scheduled delivery time will attract a <strong>50% cancellation fee</strong> to cover the cost of ingredients and labor.</li>
            <li><strong>Refunds:</strong> Refunds are only processed if the wrong item was delivered or if the food quality is demonstrably compromised. This is subject to verification by our management.</li>
          </ul>
        </TermSection>

        {/* Delivery */}
        <TermSection title="4. Delivery Policy" icon={<Truck className="w-5 h-5 text-amber-500" />}>
          <p>
            We strive to deliver within the estimated time quoted at the time of your order. However, please note:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-amber-500">
            <li>Delivery times are estimates and subject to traffic, weather, and kitchen volume.</li>
            <li>We are not responsible for delays caused by third-party delivery partners (Swiggy/Zomato).</li>
            <li>Customers must provide an accurate address and be available to receive the order. Failed deliveries due to customer unavailability are non-refundable.</li>
          </ul>
        </TermSection>

        {/* Food Safety & Allergies */}
        <TermSection title="5. Food Safety & Allergens" icon={<AlertTriangle className="w-5 h-5 text-amber-500" />}>
          <p>
            While we maintain strict hygiene standards:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-amber-500">
            <li><strong>Allergens:</strong> Our kitchen handles nuts (cashews, almonds), dairy (milk, ghee), and gluten (wheat flour). Cross-contamination is possible.</li>
            <li><strong>Consumption:</strong> We recommend consuming our Payasams and cooked meals within <strong>4 hours</strong> of delivery for maximum freshness and safety.</li>
          </ul>
        </TermSection>

        {/* Governing Law */}
        <TermSection title="6. Governing Law" icon={<Gavel className="w-5 h-5 text-amber-500" />}>
          <p>
            These Terms shall be governed by and defined following the laws of India. Any disputes related to Ambis Kitchen shall be subject to the exclusive jurisdiction of the courts in <strong>Thiruvananthapuram, Kerala</strong>.
          </p>
        </TermSection>

        {/* Contact Footer */}
        <motion.div 
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-neutral-800 text-center"
        >
          <p className="text-neutral-500 mb-2">Questions regarding these terms?</p>
          <div className="flex items-center justify-center gap-2 text-white">
            <MapPin className="w-5 h-5 text-amber-500" />
            <span>Ambis Kitchen, Manacaud, Trivandrum - 695009</span>
          </div>
        </motion.div>

      </motion.div>
    </div>
    <Footer />
    </>
  );
}

// --- REUSABLE SECTION COMPONENT ---
function TermSection({ title, icon, children }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="mb-10 bg-neutral-900/30 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors"
    >
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
        <span className="text-amber-500">
          {icon}
        </span>
        {title}
      </h2>
      <div className="text-neutral-400 leading-relaxed space-y-4 text-sm md:text-base">
        {children}
      </div>
    </motion.div>
  );
}