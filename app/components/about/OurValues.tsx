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
    <section className="w-full bg-[#141414] text-white py-12 lg:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Text Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-3 max-w-[500px]">
          <div className="flex items-center gap-1 text-gray-700 mb-1">
            <span className="text-lg">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-sm">✦</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-white tracking-tight leading-[1.2]">
            Our Values
          </h2>

          <p className="text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>

        {/* Right Card Container */}
        <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-7 lg:p-8 shadow-[0_0_0_6px_#191919]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            {valuesData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col space-y-3 ${
                    index === 0 || index === 2 ? "md:border-r md:border-[#262626] md:pr-6" : ""
                  } ${
                    index === 0 || index === 1 ? "pb-6 md:border-b md:border-[#262626] md:pb-6" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#141414] border border-[#703BF7] flex items-center justify-center shrink-0 shadow-inner">
                      <IconComponent className="w-5 h-5 text-[#703BF7] fill-[#703BF7]" />
                    </div>
                    <h3 className="text-[17px] lg:text-[18px] font-semibold text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[13px] lg:text-[14px] font-medium text-[#999999] leading-relaxed">
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