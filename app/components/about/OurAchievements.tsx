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
            Our Achievements
          </h2>

          <p className="w-full max-w-[1200px] text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {achievementsData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-6 lg:p-7 flex flex-col space-y-3 shadow-[0_0_0_6px_#191919]"
            >
              <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-white tracking-wide">
                {item.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] font-medium text-[#999999] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}