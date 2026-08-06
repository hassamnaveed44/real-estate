// src/app/components/about/OurValues.tsx
import React from "react";
import { Star, GraduationCap, Users } from "lucide-react";

const valuesData = [
  {
    title: "Trust",
    description: "Trust is the cornerstone of every successful real estate transaction.",
    icon: Star,
  },
  {
    title: "Excellence",
    description: "We set the bar high for ourselves. From the properties we list to the services we provide.",
    icon: GraduationCap,
  },
  {
    title: "Client-Centric",
    description: "Your dreams and needs are at the center of our universe. We listen, understand.",
    icon: Users,
  },
  {
    title: "Our Commitment",
    description: "We are dedicated to providing you with the highest level of service, professionalism, and support.",
    icon: Star,
  },
];

export default function OurValues() {
  return (
    <section className="w-full bg-[#141414] text-white py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Text Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4 max-w-[517px]">
          <div className="flex items-center gap-1.5 text-gray-700 mb-1">
            <span className="text-xl">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-sm">✦</span>
          </div>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-white tracking-tight leading-[1.2]">
            Our Values
          </h2>

          <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-[1.6]">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>

        {/* Right Card Container */}
        <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-[12px] p-6 sm:p-8 lg:p-[60px] shadow-[0_0_0_10px_#191919]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {valuesData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col space-y-4 ${
                    index === 0 || index === 2 ? "md:border-r md:border-[#262626] md:pr-8" : ""
                  } ${
                    index === 0 || index === 1 ? "pb-8 md:border-b md:border-[#262626] md:pb-10" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] rounded-full bg-[#141414] border border-[#703BF7] flex items-center justify-center shrink-0 shadow-inner">
                      <IconComponent className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px] text-[#703BF7] fill-[#703BF7]" />
                    </div>
                    <h3 className="text-[20px] lg:text-[22px] font-semibold text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[15px] lg:text-[16px] font-medium text-[#999999] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}