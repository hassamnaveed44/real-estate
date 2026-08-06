// src/app/components/about/OurJourney.tsx
import React from "react";
import Image from "next/image";

export default function OurJourney() {
  return (
    <section className="w-full bg-[#141414] text-white py-16 lg:py-24 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text & Stats */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10 order-2 lg:order-1">
          
          <div className="space-y-4 relative">
            {/* Decorative Sparkle/Cross Icon Motif */}
            <div className="flex items-center gap-1.5 text-gray-700 mb-2">
              <span className="text-xl">✦</span>
              <span className="text-xs">✦</span>
              <span className="text-sm">✦</span>
            </div>

            <h1 className="text-[38px] sm:text-[44px] lg:text-[48px] font-semibold text-white tracking-tight leading-[1.5]">
              Our Journey
            </h1>

            <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-[1.6] max-w-2xl">
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we&apos;ve expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
            </p>
          </div>

          {/* Stat Cards: 2 in first row on mobile, 3 in one row on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-2xl">
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-6 shadow-sm">
              <p className="text-[36px] lg:text-[40px] font-bold text-white leading-tight">200+</p>
              <p className="text-[16px] font-medium text-[#999999] mt-1">Happy Customers</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-6 shadow-sm">
              <p className="text-[36px] lg:text-[40px] font-bold text-white leading-tight">10k+</p>
              <p className="text-[16px] font-medium text-[#999999] mt-1">Properties For Clients</p>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-6 shadow-sm">
              <p className="text-[36px] lg:text-[40px] font-bold text-white leading-tight">16+</p>
              <p className="text-[16px] font-medium text-[#999999] mt-1">Years of Experience</p>
            </div>
          </div>

        </div>

        {/* Right Column: Image Block with Wavy Contour Background */}
        <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[480px] lg:h-[546px] bg-[#141414] border border-[#262626] rounded-[12px] overflow-hidden shadow-2xl flex items-center justify-center order-1 lg:order-2">
          
          {/* SVG Wavy Contour Line Pattern Background */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100 50 C 150 20, 300 180, 700 80" stroke="#333333" strokeWidth="1.5" />
              <path d="M-100 120 C 120 90, 350 250, 700 140" stroke="#2a2a2a" strokeWidth="1.5" />
              <path d="M-100 190 C 180 150, 250 320, 700 200" stroke="#333333" strokeWidth="1.5" />
              <path d="M-100 260 C 80 220, 400 380, 700 260" stroke="#262626" strokeWidth="1.5" />
              <path d="M-100 330 C 220 280, 300 450, 700 320" stroke="#333333" strokeWidth="1.5" />
              <path d="M-100 400 C 150 360, 450 520, 700 380" stroke="#2a2a2a" strokeWidth="1.5" />
              <path d="M-100 470 C 100 430, 350 580, 700 440" stroke="#333333" strokeWidth="1.5" />
              <path d="M-100 540 C 200 500, 300 620, 700 500" stroke="#262626" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Main House Model Image */}
          <div className="relative w-full h-full z-10">
            <Image 
              src="/images/abouthero.png" 
              alt="Our Journey House Model" 
              fill 
              className="object-cover object-center"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}