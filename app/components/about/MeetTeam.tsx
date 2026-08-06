// src/app/components/about/MeetTeam.tsx
import React from "react";
import Image from "next/image";
import { Send } from "lucide-react";

const teamData = [
  {
    name: "Max Mitchell",
    role: "Founder",
    image: "/images/aboutt1.png",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Real Estate Officer",
    image: "/images/aboutt2.png",
  },
  {
    name: "David Brown",
    role: "Head of Property Management",
    image: "/images/aboutt3.png",
  },
  {
    name: "Michael Turner",
    role: "Legal Counsel",
    image: "/images/aboutt4.png",
  },
];

export default function MeetTeam() {
  return (
    <section className="w-full bg-[#141414] text-white py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Header Block */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-1.5 text-gray-700 mb-1">
            <span className="text-xl">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-sm">✦</span>
          </div>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-white tracking-tight leading-[1.2]">
            Meet the Estatein Team
          </h2>

          <p className="w-full max-w-[1297px] text-[15px] sm:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-[150%] tracking-[0%]">
            At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
          </p>
        </div>

        {/* 4 Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[30px] justify-items-center">
          {teamData.map((member, index) => (
            <div 
              key={index} 
              className="w-full max-w-[376.75px] h-auto lg:h-[517px] bg-[#141414] border border-[#262626] rounded-[12px] p-6 lg:p-[30px] flex flex-col justify-between shadow-md relative"
            >
              <div className="relative w-full h-[253px] rounded-[12px] overflow-visible mb-10">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-center rounded-[12px]"
                />
                
                <div className="absolute bottom-[-26px] left-1/2 -translate-x-1/2 w-[76px] h-[52px] rounded-[43px] bg-[#703BF7] flex items-center justify-center text-white shadow-lg border-2 border-[#141414] px-[26px] py-[14px] z-20">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-1 my-4 lg:my-0">
                <h3 className="w-full text-[22px] lg:text-[24px] font-semibold text-white leading-[28px] tracking-[0%] text-center">
                  {member.name}
                </h3>
                <p className="w-full text-[16px] lg:text-[18px] font-medium text-[#999999] leading-[24px] tracking-[0%] text-center">
                  {member.role}
                </p>
              </div>

              <div className="w-full h-[64px] lg:h-[72px] bg-[#1A1A1A] border border-[#262626] rounded-[100px] px-4 lg:px-6 py-3 lg:py-[14px] flex items-center justify-between shadow-inner">
                <span className="text-[16px] lg:text-[18px] font-medium text-white leading-[28px] tracking-[0%]">
                  Say Hello 👋
                </span>
                <button aria-label="Send message" className="w-[38px] h-[38px] lg:w-[44px] lg:h-[44px] rounded-full bg-[#703BF7] flex items-center justify-center text-white hover:bg-[#5e31d4] transition shrink-0">
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}