import React from "react";
import { TrendingUp, Flame, Lightbulb, SunMedium } from "lucide-react";

export default function SmartInvestments() {
  const investmentCards = [
    {
      icon: <TrendingUp className="w-[24px] h-[24px] text-[#A685FA] fill-[#A685FA]" />,
      title: "Market Insight",
      description: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      icon: <Flame className="w-[24px] h-[24px] text-[#A685FA] fill-[#A685FA]" />,
      title: "ROI Assessment",
      description: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
    },
    {
      icon: <Lightbulb className="w-[24px] h-[24px] text-[#A685FA] fill-[#A685FA]" />,
      title: "Customized Strategies",
      description: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
    },
    {
      icon: <SunMedium className="w-[24px] h-[24px] text-[#A685FA] fill-[#A685FA]" />,
      title: "Diversification Mastery",
      description: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
    },
  ];

  return (
    <section className="w-full bg-[#141414] text-white py-[80px] flex justify-center">
      <div className="w-full max-w-[1720px] px-[120px] xl:px-[162px] max-lg:px-[80px] max-md:px-[16px] flex flex-col xl:flex-row gap-[50px] items-stretch">
        
        {/* Left Column — Text + CTA Card */}
        <div className="w-full xl:w-[480px] flex flex-col justify-between shrink-0">
          {/* Heading Block */}
          <div className="flex flex-col gap-[16px]">
            {/* Decorative Sparkles */}
            <div className="flex items-center gap-1 text-gray-600 text-md mb-1">
              <span>✦</span>
              <span className="opacity-75">✦</span>
              <span className="opacity-40">✦</span>
            </div>

            <h2 className="text-[48px] max-lg:text-[38px] max-md:text-[28px] font-semibold text-white leading-[150%]">
              Smart Investments, Informed Decisions
            </h2>
            <p className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-medium text-[#999999] leading-[150%]">
              Building a real estate portfolio requires a strategic approach. Estateins Investment Advisory Service empowers you to make smart investments and informed decisions.
            </p>
          </div>

          {/* CTA Card with Reduced Internal Gap */}
          <div className="relative overflow-hidden bg-[#1A1A1A] border border-[#262626] rounded-[12px] max-md:rounded-[10px] p-[40px] xl:p-[50px] flex flex-col justify-between gap-[16px] mt-[40px] xl:mt-0 grow">
            {/* Thin Waves Background Graphic */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 300"
              preserveAspectRatio="none"
            >
              <path
                d="M-100,300 C200,300 400,100 900,-50 M-100,260 C200,260 400,60 900,-90 M-100,220 C200,220 400,20 900,-130 M-100,180 C200,180 400,-20 900,-170 M-100,140 C200,140 400,-60 900,-210"
                fill="none"
                stroke="#666666"
                strokeWidth="0.75"
                strokeOpacity="0.8"
              />
            </svg>

            <div className="flex flex-col gap-[16px] relative z-10">
              <h3 className="text-[24px] max-lg:text-[20px] font-semibold text-white leading-[140%]">
                Unlock Your Investment Potential
              </h3>
              <p className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-medium text-[#E4E4E7] leading-[150%]">
                Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
              </p>
            </div>

            <button className="w-full bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] rounded-[10px] py-[16px] xl:py-[18px] px-[24px] text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-medium transition-colors text-center relative z-10">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column — 2×2 Info Card Grid Wrapper */}
        <div className="w-full grow bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-[10px] flex">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] w-full">
            {investmentCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#141414] border border-[#262626] rounded-[12px] max-md:rounded-[10px] p-[40px] xl:p-[50px] flex flex-col gap-[30px] justify-between"
              >
                {/* Icon Container with Gradient Border Ring */}
                <div className="relative w-[60px] h-[60px] flex items-center justify-center shrink-0">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 60 60">
                    <defs>
                      <linearGradient id={`inv-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0.85%" stopColor="#A685FA" />
                        <stop offset="34.8%" stopColor="rgba(166, 133, 250, 0)" />
                        <stop offset="52.6%" stopColor="rgba(166, 133, 250, 0)" />
                        <stop offset="100%" stopColor="#A685FA" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="30"
                      cy="30"
                      r="28"
                      fill="none"
                      stroke={`url(#inv-grad-${index})`}
                      strokeWidth="1.5"
                    />
                  </svg>

                  <div className="w-[44px] h-[44px] rounded-[100px] flex items-center justify-center border border-[#A685FA]/30 bg-[#1A1A1A]">
                    {card.icon}
                  </div>
                </div>

                {/* Title & Description Stacked */}
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-[24px] max-lg:text-[20px] font-semibold text-white leading-[140%]">
                    {card.title}
                  </h3>
                  <p className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-medium text-[#999999] leading-[150%]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}