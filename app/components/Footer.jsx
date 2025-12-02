

import { Facebook, Instagram, InstagramIcon } from "lucide-react";


export default function Footer() {
    return (
        <footer className="bg-stone-900 text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">

                {/* Logo & Description */}
                <div>
                    <h3 className="text-2xl font-bold text-amber-400 mb-4">Ambis Kitchen</h3>
                    <p className="text-stone-400 text-sm">Authentic Kerala taste from the heart of Thrippunithura, delivered fresh in Trivandrum.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-stone-200 mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="text-stone-400 hover:text-orange-500 transition-colors">Home</a></li>
                        <li><a href="/about" className="text-stone-400 hover:text-orange-500 transition-colors">About Us</a></li>
                        <li><a href="/blog" className="text-stone-400 hover:text-orange-500 transition-colors">Our Blogs</a></li>
                        <li><a href="/contact" className="text-stone-400 hover:text-orange-500 transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-semibold text-stone-200 mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="text-stone-400">📞 +91 98952 16559</li>
                        <li className="text-stone-400">📧 ambiskitchen20@gmail.com</li>
                        <li className="text-stone-400">📍 Trivandrum, Kerala</li>
                    </ul>
                </div>
             <div>
                    <h4 className="font-semibold text-stone-200 mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/privacy" className="text-stone-400 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                        <li><a href="/terms" className="text-stone-400 hover:text-orange-500 transition-colors">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="font-semibold text-stone-200 mb-4">Follow Us</h4>
                    {/* Add social media icons here */}
                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/ambiskitchen2020"
                            aria-label="Facebook"
                            className="text-stone-400 hover:text-blue-500 transition-colors"
                        >
                            <Facebook size={24} /> {/* Adjust 'size' as needed */}
                        </a>
                        <a
                            href="https://www.instagram.com/ambiskitchentvm/?hl=en"
                            aria-label="Instagram"
                            className="text-stone-400 hover:text-red-500 transition-colors"
                        >
                            <InstagramIcon size={24} /> {/* Adjust 'size' as needed */}
                        </a>
                    </div>
                </div>

            </div>
            <div className="text-center pt-8 mt-8 border-t border-stone-800">
                <p className="text-stone-500 text-xs">&copy; {new Date().getFullYear()} Ambis Kitchen. All rights reserved.</p>
            </div>
        </footer>
    );
}