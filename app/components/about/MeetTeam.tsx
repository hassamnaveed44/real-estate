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
    <section className="w-full bg-[#141414] text-white py-12 lg:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-8 lg:gap-12">
        
        {/* Header Block */}
        <div className="flex flex-col space-y-2.5">
          <div className="flex items-center gap-1 text-gray-700 mb-1">
            <span className="text-lg">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-sm">✦</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-white tracking-tight leading-[1.2]">
            Meet the Estatein Team
          </h2>

          <p className="w-full max-w-[1200px] text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
            At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
          </p>
        </div>

        {/* 4 Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          {teamData.map((member, index) => (
            <div 
              key={index} 
              className="w-full bg-[#141414] border border-[#262626] rounded-[12px] p-4 sm:p-5 flex flex-col justify-between shadow-md relative"
            >
              <div className="relative w-full h-[200px] sm:h-[220px] rounded-[10px] overflow-visible mb-6">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-center rounded-[10px]"
                />
                
                <div className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-[54px] h-[36px] rounded-[30px] bg-[#703BF7] flex items-center justify-center text-white shadow-md border-2 border-[#141414] px-3 py-1.5 z-20">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-0.5 my-2">
                <h3 className="w-full text-[17px] lg:text-[18px] font-semibold text-white text-center">
                  {member.name}
                </h3>
                <p className="text-[13px] lg:text-[14px] font-medium text-[#999999] text-center">
                  {member.role}
                </p>
              </div>

              <div className="w-full h-[48px] sm:h-[52px] bg-[#1A1A1A] border border-[#262626] rounded-[100px] px-3.5 py-2 flex items-center justify-between shadow-inner mt-2">
                <span className="text-[13px] sm:text-[14px] font-medium text-white">
                  Say Hello 👋
                </span>
                <button aria-label="Send message" className="w-8 h-8 rounded-full bg-[#703BF7] flex items-center justify-center text-white hover:bg-[#5e31d4] transition shrink-0">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}