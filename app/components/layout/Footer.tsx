// src/app/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Send, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#141414] text-white border-t border-[#262626] overflow-hidden">
      
      {/* Top Footer Block */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
        
        {/* Left Col: Logo & Newsletter */}
        <div className="lg:col-span-2 space-y-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Image 
                src="/images/symbol.png" 
                alt="Estatein Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-white text-2xl font-bold tracking-wide">Estatein</span>
          </Link>

          <div className="flex items-center bg-[#1A1A1A] border border-[#262626] rounded-[10px] px-4 py-3 max-w-sm focus-within:border-[#703BF7] transition">
            <Mail className="w-5 h-5 text-[#999999] shrink-0 mr-3" />
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="bg-transparent text-white placeholder-[#999999] text-[15px] outline-none w-full"
            />
            <button aria-label="Subscribe" className="text-white hover:text-[#703BF7] transition shrink-0 ml-2">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Col: Link Columns with reduced gap */}
        <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          
          <div className="space-y-2.5">
            <h4 className="text-[15px] font-semibold text-[#999999]">Home</h4>
            <ul className="space-y-2 text-[14px] font-medium text-white">
              <li><Link href="/" className="hover:text-[#703BF7] transition">Hero Section</Link></li>
              <li><Link href="/" className="hover:text-[#703BF7] transition">Features</Link></li>
              <li><Link href="/" className="hover:text-[#703BF7] transition">Properties</Link></li>
              <li><Link href="/" className="hover:text-[#703BF7] transition">Testimonials</Link></li>
              <li><Link href="/" className="hover:text-[#703BF7] transition">FAQ&apos;s</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-[15px] font-semibold text-[#999999]">About Us</h4>
            <ul className="space-y-2 text-[14px] font-medium text-white">
              <li><Link href="/about" className="hover:text-[#703BF7] transition">Our Story</Link></li>
              <li><Link href="/about" className="hover:text-[#703BF7] transition">Our Works</Link></li>
              <li><Link href="/about" className="hover:text-[#703BF7] transition">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-[#703BF7] transition">Our Team</Link></li>
              <li><Link href="/about" className="hover:text-[#703BF7] transition">Our Clients</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-[15px] font-semibold text-[#999999]">Properties</h4>
            <ul className="space-y-2 text-[14px] font-medium text-white">
              <li><Link href="/properties" className="hover:text-[#703BF7] transition">Portfolio</Link></li>
              <li><Link href="/properties" className="hover:text-[#703BF7] transition">Categories</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-[15px] font-semibold text-[#999999]">Services</h4>
            <ul className="space-y-2 text-[14px] font-medium text-white">
              <li><Link href="/services" className="hover:text-[#703BF7] transition">Valuation Mastery</Link></li>
              <li><Link href="/services" className="hover:text-[#703BF7] transition">Strategic Marketing</Link></li>
              <li><Link href="/services" className="hover:text-[#703BF7] transition">Negotiation Wizardry</Link></li>
              <li><Link href="/services" className="hover:text-[#703BF7] transition">Closing Success</Link></li>
              <li><Link href="/services" className="hover:text-[#703BF7] transition">Property Management</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-[15px] font-semibold text-[#999999]">Contact Us</h4>
            <ul className="space-y-2 text-[14px] font-medium text-white">
              <li><Link href="/contact" className="hover:text-[#703BF7] transition">Contact Form</Link></li>
              <li><Link href="/contact" className="hover:text-[#703BF7] transition">Our Offices</Link></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#1A1A1A] border-t border-[#262626] py-5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-[#999999]">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>&copy; 2026 Estatein. All Rights Reserved.</span>
            <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
          </div>

          <div className="flex items-center gap-2.5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-[38px] h-[38px] rounded-full bg-[#141414] border border-[#262626] hover:bg-[#703BF7] hover:border-[#703BF7] flex items-center justify-center text-white transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-[38px] h-[38px] rounded-full bg-[#141414] border border-[#262626] hover:bg-[#703BF7] hover:border-[#703BF7] flex items-center justify-center text-white transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-[38px] h-[38px] rounded-full bg-[#141414] border border-[#262626] hover:bg-[#703BF7] hover:border-[#703BF7] flex items-center justify-center text-white transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-[38px] h-[38px] rounded-full bg-[#141414] border border-[#262626] hover:bg-[#703BF7] hover:border-[#703BF7] flex items-center justify-center text-white transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}