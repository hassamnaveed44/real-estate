// src/app/components/layout/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "px-4 py-2 lg:px-4.5 lg:py-2.5 rounded-[10px] bg-[#141414] border border-[#262626] text-white text-[14px] lg:text-[15px] font-medium transition shadow-inner"
      : "px-3 py-2 text-white/80 hover:text-white text-[14px] lg:text-[15px] font-medium transition";
  };

  const getMobileNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "px-4 py-2.5 rounded-[10px] bg-[#141414] border border-[#262626] text-white text-base font-medium"
      : "px-4 py-2 text-white/80 hover:text-white text-base font-medium";
  };

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 border-b border-[#262626]">
      {/* 1. Top Banner */}
      {showBanner && (
        <div className="relative w-full bg-[#1A1A1A] border-b border-[#262626] px-4 sm:px-8 lg:px-12 py-2 sm:py-2.5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-transparent to-transparent" />
          <div className="flex items-center gap-[8px] text-center text-white text-xs sm:text-sm font-medium z-10">
            <span>✨ Discover Your Dream Property with Estatein</span>
            <Link
              href="/properties"
              className="underline underline-offset-4 hover:text-indigo-400 transition ml-1"
            >
              Learn More
            </Link>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 sm:right-8 bg-white/10 hover:bg-white/20 p-1 rounded-full text-white transition z-10"
            aria-label="Close banner"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      )}

      {/* 2. Navbar */}
      <div className="w-full bg-[#1A1A1A]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-3.5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
              <Image
                src="/images/Symbol.png"
                alt="Estatein Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white text-lg sm:text-xl font-bold tracking-wide">
              Estatein
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 bg-[#1A1A1A]">
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

          {/* Desktop CTA & Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-[10px] bg-[#141414] border border-[#262626] text-white text-[14px] lg:text-[15px] font-medium hover:bg-[#1a1a1a] transition"
            >
              Contact Us
            </Link>

            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-[10px] bg-[#703BF7] hover:bg-[#5b2bd6] text-white text-[14px] lg:text-[15px] font-medium transition cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
            </Show>

            <Show when="signed-in">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-9 h-9 border border-[#262626]",
                  },
                }}
              />
            </Show>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <Show when="signed-in">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8 border border-[#262626]",
                  },
                }}
              />
            </Show>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg bg-[#141414] border border-[#262626]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
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
            className="mt-2 text-center px-4 py-3 rounded-[10px] bg-[#141414] border border-[#262626] text-white text-lg font-medium"
          >
            Contact Us
          </Link>
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-3 rounded-[10px] bg-[#703BF7] text-white text-lg font-medium cursor-pointer"
              >
                Sign In
              </button>
            </SignInButton>
          </Show>
        </div>
      )}
    </header>
  );
}