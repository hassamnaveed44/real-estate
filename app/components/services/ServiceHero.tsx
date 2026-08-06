import React from "react";
import { Store, Wallet, Building2, SunMedium, ArrowUpRight } from "lucide-react";

export default function ServiceHero() {
  const features = [
    {
      icon: <Store className="w-[24px] h-[24px] text-[#A685FA] " />,
      label: "Find Your Dream Home",
    },
    {
      icon: <Wallet className="w-[24px] h-[24px] text-[#A685FA] " />,
      label: "Unlock Property Value",
    },
    {
      icon: <Building2 className="w-[24px] h-[24px] text-[#A685FA] " />,
      label: "Effortless Property Management",
    },
    {
      icon: <SunMedium className="w-[24px] h-[24px] text-[#A685FA] fill-[#A685FA]" />,
      label: "Smart Investments, Informed Decisions",
    },
  ];

  return (
    <section className="w-full bg-[#141414] text-white">
      {/* Text Container */}
      <div 
        className="pt-[150px] pb-[100px] px-[162px] max-lg:px-[80px] max-md:px-[16px] max-md:pt-[50px] max-md:pb-[50px] flex flex-col gap-[14px] max-md:gap-[10px] border-b border-[#262626]"
        style={{
          background: "linear-gradient(117deg, #262626 26.8%, transparent 40.5%)"
        }}
      >
        <h1 className="text-[48px] max-lg:text-[38px] max-md:text-[28px] font-semibold text-white leading-[150%]">
          Elevate Your Real Estate Experience
        </h1>
        <p className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-medium text-[#999999] max-w-[1297px] leading-[150%]">
          Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive services designed to cater to all your real estate needs, ensuring a seamless and rewarding journey.
        </p>
      </div>

      {/* Sub Container (Feature Card Row - Widened to 1720px) */}
      <div className="px-[162px] max-lg:px-[80px] max-md:px-[16px] py-[50px] max-md:py-[30px] flex justify-center">
        <div className="w-full max-w-[1720px] bg-[#141414] border border-[#262626] rounded-[12px] p-[20px] shadow-[0px_0px_0px_6px_#191919]">
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[20px] justify-items-center">
            {features.map((item, index) => (
              <div
                key={index}
                className="relative bg-[#1A1A1A] border border-[#262626] rounded-[10px] w-full h-[170px] pt-[30px] pr-[20px] pb-[30px] pl-[20px] flex flex-col items-center justify-between text-center"
              >
                {/* Top Right Arrow Icon */}
                <div className="absolute top-[16px] right-[16px] w-[26px] h-[26px] rounded-full flex items-center justify-center text-[#999999]">
                  <ArrowUpRight className="w-4 h-4 text-gray-600" />
                </div>

                {/* Outer Icon Container with SVG Gradient Border Ring */}
                <div className="relative w-[60px] h-[60px] flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 60 60">
                    <defs>
                      <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
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
                      stroke={`url(#grad-${index})`}
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Inner Solid Circle with Icon */}
                  <div className="w-[44px] h-[44px] rounded-[100px] flex items-center justify-center border border-[#A685FA]/30 bg-[#1A1A1A]">
                    {item.icon}
                  </div>
                </div>

                {/* Label Text */}
                <h3 className="text-[18px] max-lg:text-[16px] font-semibold text-white leading-[140%]">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}