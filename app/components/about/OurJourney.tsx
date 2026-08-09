// src/app/components/about/OurJourney.tsx
import React from "react";
import Image from "next/image";

export default function OurJourney() {
  return (
    <section className="w-full bg-[#141414] text-white py-12 lg:py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text & Stats */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10 order-2 lg:order-1">
          
          <div className="space-y-3 relative">
            {/* Decorative Sparkle/Cross Icon Motif */}
            <div className="flex items-center gap-1 text-gray-700 mb-1">
              <span className="text-lg">✦</span>
              <span className="text-xs">✦</span>
              <span className="text-sm">✦</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-white tracking-tight leading-[1.2]">
              Our Journey
            </h1>

            <p className="text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed max-w-2xl">
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we&apos;ve expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-w-2xl">
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] p-4 lg:p-5 shadow-sm">
              <p className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-white leading-tight">200+</p>
              <p className="text-[13px] lg:text-[14px] font-medium text-[#999999] mt-0.5">Happy Customers</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] p-4 lg:p-5 shadow-sm">
              <p className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-white leading-tight">10k+</p>
              <p className="text-[13px] lg:text-[14px] font-medium text-[#999999] mt-0.5">Properties For Clients</p>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-[#1A1A1A] border border-[#262626] rounded-[10px] p-4 lg:p-5 shadow-sm">
              <p className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-white leading-tight">16+</p>
              <p className="text-[13px] lg:text-[14px] font-medium text-[#999999] mt-0.5">Years of Experience</p>
            </div>
          </div>

        </div>

        {/* Right Column: Image Block with Wavy Contour Background */}
        <div className="lg:col-span-5 relative w-full h-[300px] sm:h-[380px] lg:h-[420px] bg-[#141414] border border-[#262626] rounded-[12px] overflow-hidden shadow-xl flex items-center justify-center order-1 lg:order-2">
          
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