// src/app/components/about/ValuedClients.tsx
import React from "react";
import { Building2, Zap, ArrowLeft, ArrowRight } from "lucide-react";

const clientsData = [
  {
    since: "Since 2019",
    name: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimonial: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    since: "Since 2018",
    name: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    testimonial: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
];

export default function ValuedClients() {
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
            Our Valued Clients
          </h2>

          <p className="w-full max-w-[1297px] text-[15px] sm:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-[150%] tracking-[0%]">
            At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we&apos;ve had the pleasure of serving.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[50px]">
          {clientsData.map((client, index) => (
            <div 
              key={index} 
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-6 sm:p-8 lg:p-[50px] flex flex-col space-y-8 shadow-[0_0_0_8px_#191919]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-[16px] sm:text-[18px] font-medium text-[#999999]">
                    {client.since}
                  </span>
                  <h3 className="text-[24px] sm:text-[26px] lg:text-[30px] font-semibold text-white tracking-wide">
                    {client.name}
                  </h3>
                </div>

                <a 
                  href="#visit" 
                  className="bg-[#1A1A1A] border border-[#262626] hover:border-[#703BF7] rounded-[10px] px-6 py-[14px] text-[15px] font-medium text-white transition text-center shrink-0"
                >
                  Visit Website
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 pb-2 border-y border-[#262626]">
                <div className="flex flex-col space-y-1 sm:border-r sm:border-[#262626] sm:pr-6">
                  <div className="flex items-center gap-2 text-[16px] sm:text-[18px] text-[#999999]">
                    <Building2 className="w-5 h-5 text-[#999999]" />
                    <span>Domain</span>
                  </div>
                  <p className="text-[17px] sm:text-[20px] font-medium text-white sm:pl-7">
                    {client.domain}
                  </p>
                </div>

                <div className="flex flex-col space-y-1 sm:pl-4">
                  <div className="flex items-center gap-2 text-[16px] sm:text-[18px] text-[#999999]">
                    <Zap className="w-5 h-5 text-[#999999]" />
                    <span>Category</span>
                  </div>
                  <p className="text-[17px] sm:text-[20px] font-medium text-white sm:pl-7">
                    {client.category}
                  </p>
                </div>
              </div>

              <div className="border border-[#262626] rounded-[12px] p-6 sm:p-[30px] bg-[#141414] flex flex-col space-y-3">
                <span className="text-[16px] sm:text-[18px] font-medium text-[#999999]">
                  What They Said 🤗
                </span>
                <p className="text-[16px] sm:text-[18px] font-medium text-white leading-[160%]">
                  {client.testimonial}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination Row */}
        <div className="flex items-center justify-between pt-6 border-t border-[#262626]">
          <div className="text-[18px] sm:text-[20px] font-medium text-white">
            <span className="text-white font-semibold">01</span>{" "}
            <span className="text-[#999999]">of 10</span>
          </div>

          <div className="flex items-center gap-4">
            <button aria-label="Previous page" className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] rounded-full border border-[#262626] bg-[#141414] hover:border-[#703BF7] flex items-center justify-center text-white transition">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button aria-label="Next page" className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] rounded-full border border-[#262626] bg-[#141414] hover:border-[#703BF7] flex items-center justify-center text-white transition">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}