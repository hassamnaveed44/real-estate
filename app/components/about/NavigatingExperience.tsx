// src/app/components/about/NavigatingExperience.tsx
import React from "react";

const stepsData = [
  {
    step: "Step 01",
    title: "Discover a World of Possibilities",
    description: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    step: "Step 02",
    title: "Narrowing Down Your Choices",
    description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    step: "Step 03",
    title: "Personalized Guidance",
    description: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    step: "Step 04",
    title: "See It for Yourself",
    description: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    step: "Step 05",
    title: "Making Informed Decisions",
    description: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    step: "Step 06",
    title: "Getting the Best Deal",
    description: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

export default function NavigatingExperience() {
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
            Navigating the Estatein Experience
          </h2>

          <p className="w-full max-w-[1200px] text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
            At Estatein, we&apos;ve designed a straightforward process to help you find and purchase your dream property with ease. Here&apos;s a step-by-step guide to how it all works.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {stepsData.map((item, index) => (
            <div key={index} className="flex flex-col">
              
              <div className="border-l border-[#703BF7] pl-3.5 py-1.5 mb-3 text-[15px] sm:text-[16px] font-medium text-white">
                {item.step}
              </div>

              <div 
                className="border border-[#262626] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] rounded-tl-none p-5 sm:p-6 lg:p-7 flex flex-col space-y-3 h-full shadow-md relative overflow-hidden"
                style={{
                  background: "linear-gradient(120.79deg, #703BF7 -49.01%, rgba(112, 59, 247, 0) 13.65%), #141414"
                }}
              >
                <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-semibold text-white tracking-wide leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] font-medium text-[#999999] leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}