import React from "react";
import { Signal, Megaphone, Database, LayoutGrid, Palette, Sparkles, SunMedium, ChartColumn, LayoutGridIcon } from "lucide-react";

interface PropertyValueProps {
  variant?: "selling" | "management";
}

export default function PropertyValue({ variant = "selling" }: PropertyValueProps) {
  const isSelling = variant === "selling";

  // Data for Property Selling (Section 1)
  const propertySellingCards = [
    {
      icon: <LayoutGridIcon className="w-[24px] h-[24px] text-[#A685FA] fill-[#A685FA]" />,
      title: "Valuation Mastery",
      description: "Discover the true worth of your property with our expert valuation services.",
    },
    {
      icon: <ChartColumn className="w-[24px] h-[24px] text-[#A685FA]" />,
      title: "Strategic Marketing",
      description: "Selling a property requires more than just a listing: it demands a strategic marketing plan.",
    },
    {
      icon: <Sparkles className="w-[24px] h-[24px] text-[#A685FA]" />,
      title: "Negotiation Wizardry",
      description: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    },
    {
      icon: <SunMedium className="w-[24px] h-[24px] text-[#A685FA] fill-[#A685FA]" />,
      title: "Closing Success",
      description: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    },
  ];

  // Data for Effortless Property Management (Section 2)
  const propertyManagementCards = [
    {
      icon: <LayoutGrid className="w-[24px] h-[24px] text-[#A685FA] fill-[#A685FA]" />,
      title: "Tenant Harmony",
      description: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
    },
    {
      icon: <Palette className="w-[24px] h-[24px] text-[#A685FA] fill-[#A685FA]" />,
      title: "Maintenance Ease",
      description: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    },
    {
      icon: <Sparkles className="w-[24px] h-[24px] text-[#A685FA] fill-[#A685FA]" />,
      title: "Financial Peace of Mind",
      description: "Managing property finances can be complex. Our financial experts take care of rent collection",
    },
    {
      icon: <SunMedium className="w-[24px] h-[24px] text-[#A685FA] fill-[#A685FA]" />,
      title: "Legal Guardian",
      description: "Stay compliant with property laws and regulations effortlessly.",
    },
  ];

  const heading = isSelling ? "Unlock Property Value" : "Effortless Property Management";
  
  const paragraph = isSelling
    ? "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey."
    : "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you";
  
  const cards = isSelling ? propertySellingCards : propertyManagementCards;
  
  const ctaTitle = isSelling ? "Unlock the Value of Your Property Today" : "Experience Effortless Property Management";
  
  const ctaDescription = isSelling
    ? "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
    : "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.";

  return (
    <section className="w-full bg-[#141414] text-white py-12 lg:py-16 px-4 sm:px-8 lg:px-12 flex justify-center">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col gap-8 lg:gap-10">
        
        {/* Text Container */}
        <div className="relative flex flex-col gap-2.5 w-full">
          {/* Decorative Sparkles */}
          <div className="flex items-center gap-1 text-gray-600 text-sm mb-1">
            <span>✦</span>
            <span className="opacity-75">✦</span>
            <span className="opacity-40">✦</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-white leading-[1.2]">
            {heading}
          </h2>
          <p className="text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed w-full max-w-4xl">
            {paragraph}
          </p>
        </div>

        {/* Items Container (Card Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-6 flex flex-col gap-4 min-h-[200px] justify-between shadow-sm"
            >
              {/* Icon Container with SVG Gradient Border Ring */}
              <div className="relative w-11 h-11 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 60 60">
                  <defs>
                    <linearGradient id={`pv-grad-${variant}-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
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
                    stroke={`url(#pv-grad-${variant}-${index})`}
                    strokeWidth="1.5"
                  />
                </svg>

                <div className="w-9 h-9 rounded-full flex items-center justify-center border border-[#A685FA]/30 bg-[#1A1A1A]">
                  {card.icon}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[17px] lg:text-[18px] font-semibold text-white leading-snug">
                  {card.title}
                </h3>
                <p className="text-[13px] lg:text-[14px] font-medium text-[#999999] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Highlight Card with Light Gray Thin Wave Background Pattern */}
          <div className="col-span-1 md:col-span-2 relative overflow-hidden bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-4 min-h-[200px] shadow-sm">
            {/* Thin Waves Background Graphic (Light Gray) */}
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

            <div className="flex items-center justify-between flex-wrap gap-4 relative z-10">
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-white leading-snug max-w-md">
                {ctaTitle}
              </h3>
              <button className="bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] rounded-[8px] px-4 py-2.5 text-white text-[13px] sm:text-[14px] font-medium transition-colors flex items-center gap-2 whitespace-nowrap">
                Learn More
              </button>
            </div>

            <p className="text-[13px] sm:text-[14px] font-medium text-[#999999] leading-relaxed relative z-10">
              {ctaDescription}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}