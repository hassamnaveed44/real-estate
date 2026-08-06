// src/app/components/layout/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "px-5 py-3 lg:px-6 lg:py-4 rounded-[10px] bg-[#141414] border border-[#262626] text-white text-[16px] lg:text-[18px] font-medium transition shadow-inner"
      : "px-3 py-2 text-white/80 hover:text-white text-[16px] lg:text-[18px] font-medium transition";
  };

  const getMobileNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "px-4 py-3 rounded-[10px] bg-[#141414] border border-[#262626] text-white text-lg font-medium"
      : "px-4 py-2 text-white/80 hover:text-white text-lg font-medium";
  };

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 border-b border-[#262626]">
      {/* 1. Top Banner */}
      {showBanner && (
        <div className="relative w-full bg-[#1A1A1A] border-b border-[#262626] px-4 sm:px-8 lg:px-[160px] py-[14px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-transparent to-transparent" />
          <div className="flex items-center gap-[10px] text-center text-white text-xs sm:text-sm lg:text-[18px] font-medium z-10">
            <span>✨ Discover Your Dream Property with Estatein</span>
            <Link
              href="/properties"
              className="underline underline-offset-4 hover:text-indigo-400 transition"
            >
              Learn More
            </Link>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 sm:right-8 bg-white/10 hover:bg-white/20 p-1 rounded-full text-white transition z-10"
            aria-label="Close banner"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      )}

      {/* 2. Navbar */}
      <div className="w-full bg-[#1A1A1A] px-4 sm:px-8 lg:px-[162px] py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
            <Image
              src="/images/Symbol.png"
              alt="Estatein Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-white text-xl sm:text-2xl font-bold tracking-wide">
            Estatein
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-[30px] bg-[#1A1A1A]">
          <Link href="/" className={getNavLinkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={getNavLinkClass("/about")}>
            About Us
          </Link>
          <Link href="/properties" className={getNavLinkClass("/properties")}>
            Properties
          </Link>
          <Link href="/services" className={getNavLinkClass("/services")}>
            Services
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-3 lg:px-6 lg:py-4 rounded-[10px] bg-[#141414] border border-[#262626] text-white text-[16px] lg:text-[18px] font-medium hover:bg-[#1a1a1a] transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white p-2 rounded-lg bg-[#141414] border border-[#262626]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1A1A1A] border-b border-[#262626] px-6 py-6 flex flex-col gap-4 shadow-2xl transition-all">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileNavLinkClass("/")}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileNavLinkClass("/about")}
          >
            About Us
          </Link>
          <Link
            href="/properties"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileNavLinkClass("/properties")}
          >
            Properties
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileNavLinkClass("/services")}
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center px-4 py-3 rounded-[10px] bg-[#703BF7] text-white text-lg font-medium"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}