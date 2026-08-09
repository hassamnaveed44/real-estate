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
        className="w-full border-b border-[#262626] px-4 sm:px-8 lg:px-12 pt-[40px] sm:pt-[60px] lg:pt-[70px] pb-[40px] sm:pb-[60px] lg:pb-[70px]"
        style={{
          background: "linear-gradient(117deg, #262626 26.8%, transparent 40.5%)"
        }}
      >
        <div className="max-w-[1360px] mx-auto flex flex-col gap-2.5">
          <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-white leading-[1.2]">
            Elevate Your Real Estate Experience
          </h1>
          <p className="text-sm lg:text-[15px] font-medium text-[#999999] max-w-[1100px] leading-relaxed">
            Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive services designed to cater to all your real estate needs, ensuring a seamless and rewarding journey.
          </p>
        </div>
      </div>

      {/* Sub Container (Feature Card Row) */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-10">
        <div className="w-full bg-[#141414] border border-[#262626] rounded-[12px] p-4 sm:p-5 shadow-[0px_0px_0px_6px_#191919]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            {features.map((item, index) => (
              <div
                key={index}
                className="relative bg-[#1A1A1A] border border-[#262626] rounded-[10px] w-full h-[140px] sm:h-[150px] p-4 flex flex-col items-center justify-between text-center"
              >
                {/* Top Right Arrow Icon */}
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center text-[#999999]">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#999999]" />
                </div>

                {/* Outer Icon Container with SVG Gradient Border Ring */}
                <div className="relative w-11 h-11 flex items-center justify-center">
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
                  <div className="w-9 h-9 rounded-full flex items-center justify-center border border-[#A685FA]/30 bg-[#1A1A1A]">
                    {item.icon}
                  </div>
                </div>

                {/* Label Text */}
                <h3 className="text-[13px] sm:text-[14px] font-semibold text-white leading-snug">
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