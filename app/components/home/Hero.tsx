// src/app/components/home/Hero.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Home, Building2, Briefcase, TrendingUp } from "lucide-react";

export default function Hero() {
  const featureCards = [
    { title: "Find Your Dream Home", icon: Home },
    { title: "Unlock Property Value", icon: Building2 },
    { title: "Effortless Property Management", icon: Briefcase },
    { title: "Smart Investments, Informed Decisions", icon: TrendingUp },
  ];

  return (
    <section className="w-full bg-[#141414] text-white overflow-hidden relative">
      
      {/* Main Hero Container */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* Right Column / Image First on Mobile */}
        <div className="lg:col-span-5 lg:order-2 relative bg-[#1A1A1A] min-h-[380px] sm:min-h-[450px] lg:min-h-full flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(235deg, rgb(42,33,63) 8.7%, rgba(25,25,25,0) 50%)" }}
          />
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/images/realestatehero.png" 
              alt="Estatein Building Architecture" 
              fill 
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Mobile Badge Position (Bottom-left corner overlay) */}
          <div className="lg:hidden absolute left-4 bottom-4 z-30 w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center animate-spin-slow shadow-2xl pointer-events-none">
            <div className="absolute inset-2 rounded-full border border-dashed border-gray-700 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#703BF7] flex items-center justify-center text-white shadow-md">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <svg className="absolute w-full h-full p-2" viewBox="0 0 100 100">
              <path id="curve-mobile" fill="transparent" d="M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              <text className="text-[9px] uppercase font-semibold tracking-widest fill-white">
                <textPath href="#curve-mobile" startOffset="0%">
                  • Discover Your Dream Property •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Left Column (Text & Stats) */}
        <div className="lg:col-span-7 lg:order-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16 z-10">
          
          <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-semibold tracking-tight leading-[1.15] text-white">
            Discover Your Dream Property with Estatein
          </h1>

          <p className="mt-4 text-[15px] lg:text-[18px] font-medium text-[#999999] max-w-xl leading-relaxed">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link 
              href="/about" 
              className="px-6 py-[16px] rounded-[10px] border border-[#262626] bg-[#141414] text-white font-medium text-[15px] hover:bg-[#1a1a1a] transition"
            >
              Learn More
            </Link>
            <Link 
              href="/properties" 
              className="px-6 py-[16px] rounded-[10px] bg-[#703BF7] text-white font-medium text-[15px] hover:bg-[#5e31d4] transition shadow-lg shadow-[#703BF7]/30"
            >
              Browse Properties
            </Link>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-2xl">
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-5">
              <p className="text-[30px] sm:text-[34px] lg:text-[38px] font-bold text-white leading-tight">200+</p>
              <p className="text-[14px] lg:text-[16px] font-medium text-[#999999] mt-1">Happy Customers</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-5">
              <p className="text-[30px] sm:text-[34px] lg:text-[38px] font-bold text-white leading-tight">10k+</p>
              <p className="text-[14px] lg:text-[16px] font-medium text-[#999999] mt-1">Properties For Clients</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-5">
              <p className="text-[30px] sm:text-[34px] lg:text-[38px] font-bold text-white leading-tight">16+</p>
              <p className="text-[14px] lg:text-[16px] font-medium text-[#999999] mt-1">Years of Experience</p>
            </div>
          </div>

        </div>

        {/* Desktop / Laptop Original Intersecting Badge Position */}
        <div className="hidden lg:flex absolute left-[58.333%] top-[30%] -translate-x-[65%] -translate-y-1/2 z-30 w-[150px] h-[150px] rounded-full bg-[#141414] border border-[#262626] items-center justify-center animate-spin-slow shadow-2xl pointer-events-none">
          <div className="absolute inset-2 rounded-full border border-dashed border-gray-700 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-[#703BF7] flex items-center justify-center text-white shadow-md">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <svg className="absolute w-full h-full p-2" viewBox="0 0 100 100">
            <path id="curve-desktop" fill="transparent" d="M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            <text className="text-[9px] uppercase font-semibold tracking-widest fill-white">
              <textPath href="#curve-desktop" startOffset="0%">
                • Discover Your Dream Property •
              </textPath>
            </text>
          </svg>
        </div>

      </div>

      {/* Bottom 4 Feature Cards (2 in one row, 2 in second row) */}
      <div className="bg-[#191919] px-6 lg:px-16 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1440px] mx-auto">
          {featureCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={index}
                className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] py-[28px] px-[16px] sm:px-[20px] flex flex-col items-center text-center relative group hover:border-[#703BF7] transition-all shadow-md"
              >
                <div className="absolute top-3 right-3 text-gray-500 group-hover:text-white transition">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div className="w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] rounded-full bg-[#141414] border border-[#A685FA]/75 flex items-center justify-center mb-4 shadow-inner">
                  <div className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] rounded-full bg-[#703BF7]/20 flex items-center justify-center text-[#A685FA]">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <h3 className="text-[14px] sm:text-[17px] lg:text-[18px] font-semibold text-white tracking-wide">
                  {card.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}