// src/app/components/about/OurAchievements.tsx
import React from "react";

const achievementsData = [
  {
    title: "3+ Years of Excellence",
    description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    title: "Happy Clients",
    description: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    title: "Industry Recognition",
    description: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

export default function OurAchievements() {
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
            Our Achievements
          </h2>

          <p className="w-full max-w-[1297px] text-[15px] sm:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-[150%] tracking-[0%]">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {achievementsData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-6 sm:p-8 lg:p-[50px] flex flex-col space-y-[20px] lg:space-y-[30px] shadow-[0_0_0_8px_#191919]"
            >
              <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-semibold text-white tracking-wide">
                {item.title}
              </h3>
              <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}