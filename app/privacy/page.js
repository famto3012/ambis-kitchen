'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, MapPin, Server } from 'lucide-react';
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

export default function PrivacyPolicy() {
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
          <Shield className="w-10 h-10 text-amber-500" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif"
        >
          Privacy Policy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400"
        >
          Last Updated: December 2025
        </motion.p>
      </div>

      {/* --- MAIN CONTENT --- */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-6"
      >
        
        {/* Introduction */}
        <PolicySection title="1. Introduction" icon={<FileText className="w-5 h-5 text-amber-500" />}>
          <p>
            Welcome to <strong>Ambis Kitchen</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or order our signature dishes like Payasam and Boli.
          </p>
          <p>
            By accessing our services, you consent to the data practices described in this policy.
          </p>
        </PolicySection>

        {/* Information We Collect */}
        <PolicySection title="2. Information We Collect" icon={<Eye className="w-5 h-5 text-amber-500" />}>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products.</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-amber-500">
            <li><strong>Personal Details:</strong> Name, phone number, and email address (when using our contact forms).</li>
            <li><strong>Order Details:</strong> Delivery address and dietary preferences for bulk orders.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website (e.g., pages visited, time spent), collected via cookies.</li>
          </ul>
        </PolicySection>

        {/* How We Use Information */}
        <PolicySection title="3. How We Use Your Information" icon={<Server className="w-5 h-5 text-amber-500" />}>
          <p>We use the information we collect or receive for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-amber-500">
            <li>To facilitate account creation and logon processes.</li>
            <li>To fulfill and manage your orders (catering, bulk Payasam/Boli orders).</li>
            <li>To respond to user inquiries and offer support.</li>
            <li>To send you marketing and promotional communications (you can opt-out at any time).</li>
          </ul>
        </PolicySection>

        {/* Data Sharing */}
        <PolicySection title="4. Sharing Your Information" icon={<Lock className="w-5 h-5 text-amber-500" />}>
          <p>
            We strictly <strong>do not sell</strong> your personal data to third parties. However, we may share information with trusted third parties to facilitate our services:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-amber-500">
            <li><strong>Delivery Partners:</strong> (e.g., Swiggy, Zomato, or local logistics) to deliver your food.</li>
            <li><strong>Service Providers:</strong> Website hosting and IT support.</li>
            <li><strong>Legal Obligations:</strong> If required by law to protect our rights or comply with a judicial proceeding in India.</li>
          </ul>
        </PolicySection>

        {/* Security */}
        <PolicySection title="5. Data Security" icon={<Shield className="w-5 h-5 text-amber-500" />}>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
          </p>
        </PolicySection>

        {/* Contact Us */}
        <motion.div 
          variants={fadeInUp}
          className="mt-12 p-8 bg-neutral-900 border border-neutral-800 rounded-2xl"
        >
          <h2 className="text-2xl font-serif text-white mb-6">Contact Us</h2>
          <p className="text-neutral-400 mb-6">
            If you have questions or comments about this policy, you may contact us at:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <strong className="text-white block">Ambis Kitchen (Payasams & Boli)</strong>
                <span className="text-neutral-400">FWGX+64Q, Manacaud, Thiruvananthapuram, Kerala 695009</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-amber-500" />
              <a href="mailto:ambiskitchen20@gmail.com" className="text-neutral-200 hover:text-amber-500 transition-colors">
                ambiskitchen20@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
      <Footer />
      </>
  );
}

// --- REUSABLE SECTION COMPONENT ---
function PolicySection({ title, icon, children }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="mb-10 border-b border-neutral-800 pb-8 last:border-0"
    >
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
        <span className="p-2 bg-neutral-900 rounded-lg border border-neutral-800">
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