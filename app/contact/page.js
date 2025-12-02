'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter, CheckCircle, Plus, Minus } from 'lucide-react';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  // 1. STATE TO STORE INPUT DATA
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  // 2. HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. SEND TO WHATSAPP
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // --- CONFIGURATION ---
    // Updated Number for Manacaud Branch
    const phoneNumber = "917356222234";

    // Create the message structure
    // %0a is a line break for URLs
    const text = `*New Message from Ambis Kitchen Website*%0a%0a` +
      `*Name:* ${formData.name}%0a` +
      `*Phone:* ${formData.phone}%0a` +
      `*Email:* ${formData.email}%0a` +
      `*Subject:* ${formData.subject}%0a` +
      `*Message:*%0a${formData.message}`;

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Show success state on the website
    setFormStatus('success');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans cursor-none selection:bg-amber-500 selection:text-white pt-24">
      <CustomCursor />
      {/* --- HEADER SECTION --- */}
      <section className="px-6 max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
            Let's Talk <span className="text-amber-500">Taste.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Craving our signature Boli or Payasam? Have a bulk order?
            We are just a message away.
          </motion.p>
        </motion.div>
      </section>

      {/* --- MAIN CONTENT GRID --- */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT COLUMN: Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <ContactCard
                icon={<Phone />}
                title="Call Us"
                content="+91 73562 22234"
                sub="Mon-Sun, 9:30 AM - 10 PM"
                onClick={() => window.open("tel:+917356222234")}
              />

              <ContactCard
                icon={<Mail />}
                title="Email Us"
                content="ambiskitchen20@gmail.com"
                sub="We reply within 24hrs"
                onClick={() => window.open("mailto:ambiskitchen20@gmail.com")}
              />

              <ContactCard
                icon={<MapPin />}
                title="Visit Us"
                content="Manacaud"
                sub="Thiruvananthapuram"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/search/?api=1&query=Ambis+Kitchen+Manacaud+Thiruvananthapuram",
                    "_blank"
                  )
                }
              />

              <ContactCard
                icon={<Clock />}
                title="Opening Hours"
                content="Daily: 9:30 AM - 10 PM"
                sub="Sweet Cravings Anytime"
              />
            </div>


            {/* Social Connection */}
            <motion.div variants={fadeInUp} className="p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-4">Stalk Our Kitchen</h3>
              <p className="text-neutral-400 mb-6">Follow us for mouth-watering updates on our Payasam specials.</p>
              <div className="flex gap-4">
                <SocialButton icon={<Instagram />} label="Instagram" />
                <SocialButton icon={<Facebook />} label="Facebook" />
                {/* <SocialButton icon={<Twitter />} label="Twitter" /> */}
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-0 pointer-events-none" />

            <h3 className="text-3xl font-serif text-white mb-8 relative z-10">Send a Message</h3>

            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-[400px] flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white">Opening WhatsApp...</h4>
                <p className="text-neutral-400">We are redirecting you to chat with us directly.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-amber-500 hover:text-amber-400 font-semibold underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Phone</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+91..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Bulk Order (Boli/Payasam)</option>
                    <option>Feedback</option>
                    <option>Others</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us what's on your mind..."
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={formStatus === 'submitting'}
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold py-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : (
                    <>Send via WhatsApp <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      {/* --- MAP SECTION (Updated Location: Manacaud) --- */}
      <section className="w-full h-[400px] relative filter grayscale hover:grayscale-0 transition-all duration-700">
        {/* UPDATED IFRAME SOURCE FOR AMBIS KITCHEN MANACAUD */}
        <iframe
          src="https://maps.google.com/maps?q=Ambis%20Kitchen%20Manacaud&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="bg-neutral-900"
          title="Ambis Kitchen Manacaud Location Map"
        ></iframe>

        {/* Overlay Card on Map */}
        <div className="absolute bottom-6 left-6 bg-white text-neutral-900 p-6 rounded-xl shadow-2xl max-w-sm hidden md:block">
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 p-3 rounded-full text-white">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Ambis Kitchen</h4>
              <p className="text-neutral-600 text-sm mt-1">
                (Payasams & Boli)<br />
                Manacaud, Thiruvananthapuram,<br />
                Kerala 695009
              </p>
              {/* UPDATED DIRECTIONS LINK */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ambis+Kitchen+Manacaud"
                target="_blank"
                rel="noreferrer"
                className="text-amber-600 font-semibold text-sm mt-3 inline-block hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          <FAQItem question="Do you sell Boli and Payasam in bulk?" answer="Yes! We specialize in bulk orders for weddings and functions. Please contact us 2 days in advance." />
          <FAQItem question="Are your products 100% Vegetarian?" answer="Yes, our Payasam and Boli are 100% vegetarian." />
          <FAQItem question="What are your opening hours?" answer="We are open daily from 9:30 AM to 10:00 PM." />
          <FAQItem question="Do you deliver?" answer="Yes, we deliver via Famto / Swiggy / Zomato and also handle direct bulk deliveries in Trivandrum city." />
        </div>
      </section>
      <Footer />
    </div>
  );
}

// --- SUB-COMPONENTS ---

function ContactCard({ icon, title, content, sub, onClick }) {
  return (
    <motion.div
    onClick={onClick}
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
    >
      <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-neutral-900 transition-colors">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-neutral-300 font-medium">{content}</p>
      <p className="text-neutral-500 text-sm mt-1">{sub}</p>
    </motion.div>
  );
}

function SocialButton({ icon, label }) {
  return (
    <a
      href="#"
      className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-white transition-all hover:-translate-y-1"
      aria-label={label}
    >
      {React.cloneElement(icon, { size: 20 })}
    </a>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-900 transition-colors"
      >
        <span className="font-semibold text-lg text-neutral-200">{question}</span>
        <span className={`text-amber-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="p-6 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800/50">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}