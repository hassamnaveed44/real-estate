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
            Our Valued Clients
          </h2>

          <p className="w-full max-w-[1200px] text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
            At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we&apos;ve had the pleasure of serving.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {clientsData.map((client, index) => (
            <div 
              key={index} 
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-6 lg:p-7 flex flex-col space-y-6 shadow-[0_0_0_6px_#191919]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col space-y-0.5">
                  <span className="text-[13px] sm:text-[14px] font-medium text-[#999999]">
                    {client.since}
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-white tracking-wide">
                    {client.name}
                  </h3>
                </div>

                <a 
                  href="#visit" 
                  className="bg-[#1A1A1A] border border-[#262626] hover:border-[#703BF7] rounded-[10px] px-4 py-2.5 text-[13px] sm:text-[14px] font-medium text-white transition text-center shrink-0"
                >
                  Visit Website
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 pb-2 border-y border-[#262626]">
                <div className="flex flex-col space-y-0.5 sm:border-r sm:border-[#262626] sm:pr-4">
                  <div className="flex items-center gap-1.5 text-[13px] sm:text-[14px] text-[#999999]">
                    <Building2 className="w-4 h-4 text-[#999999]" />
                    <span>Domain</span>
                  </div>
                  <p className="text-[14px] sm:text-[16px] font-medium text-white sm:pl-5">
                    {client.domain}
                  </p>
                </div>

                <div className="flex flex-col space-y-0.5 sm:pl-2">
                  <div className="flex items-center gap-1.5 text-[13px] sm:text-[14px] text-[#999999]">
                    <Zap className="w-4 h-4 text-[#999999]" />
                    <span>Category</span>
                  </div>
                  <p className="text-[14px] sm:text-[16px] font-medium text-white sm:pl-5">
                    {client.category}
                  </p>
                </div>
              </div>

              <div className="border border-[#262626] rounded-[10px] p-4 sm:p-5 bg-[#141414] flex flex-col space-y-2">
                <span className="text-[13px] sm:text-[14px] font-medium text-[#999999]">
                  What They Said 🤗
                </span>
                <p className="text-[13px] sm:text-[14px] font-medium text-white leading-relaxed">
                  {client.testimonial}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination Row */}
        <div className="flex items-center justify-between pt-5 border-t border-[#262626]">
          <div className="text-[14px] sm:text-[15px] font-medium text-white">
            <span className="text-white font-semibold">01</span>{" "}
            <span className="text-[#999999]">of 10</span>
          </div>

          <div className="flex items-center gap-3">
            <button aria-label="Previous page" className="w-10 h-10 rounded-full border border-[#262626] bg-[#141414] hover:border-[#703BF7] flex items-center justify-center text-white transition">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button aria-label="Next page" className="w-10 h-10 rounded-full border border-[#262626] bg-[#141414] hover:border-[#703BF7] flex items-center justify-center text-white transition">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}