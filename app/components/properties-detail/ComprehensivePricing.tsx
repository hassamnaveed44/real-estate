import React from "react";

interface ComprehensivePricingProps {
  propertyName?: string;
  listingPrice?: string;
}

export default function ComprehensivePricing({
  propertyName = "Seaside Serenity Villa",
  listingPrice = "$1,250,000",
}: ComprehensivePricingProps) {
  return (
    <section className="w-full bg-[#141414] py-12 lg:py-16 px-4 sm:px-8 lg:px-12 font-['Urbanist'] text-white">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-8 lg:gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1 text-gray-700 mb-1">
            <span className="text-lg">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-sm">✦</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-white tracking-tight leading-[1.2]">
            Comprehensive Pricing Details
          </h2>

          <p className="text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed max-w-4xl">
            At Estatein, we transparently lay out all costs associated with our properties to ensure you have a complete financial picture before making your move. Here is a detailed breakdown of the pricing for {propertyName}.
          </p>
        </div>

        {/* Note Banner */}
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] py-4 px-5 sm:px-6 flex flex-col sm:flex-row sm:items-center gap-3 shadow-sm">
          <span className="bg-[#141414] text-white text-[13px] font-semibold px-3 py-1 rounded-[6px] w-fit border border-[#262626]">
            Note
          </span>
          <div className="h-[1px] sm:h-6 sm:w-[1px] bg-[#262626] hidden sm:block" />
          <p className="text-[13px] sm:text-[14px] text-[#999999] font-medium leading-relaxed">
            The figures shown above are estimates and may vary depending on property location, local taxes, and individual circumstances.
          </p>
        </div>

        {/* Main Content Layout: Listing Price Column + Breakdown Cards Stack */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          
          {/* Listing Price Sticky/Side Column */}
          <div className="w-full lg:w-[200px] flex flex-col gap-1.5 shrink-0 bg-[#1A1A1A] border border-[#262626] rounded-[10px] p-4 lg:p-5">
            <span className="text-[13px] text-[#999999] font-medium">Listing Price</span>
            <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {listingPrice}
            </span>
          </div>

          {/* Breakdown Cards Stack */}
          <div className="flex-1 w-full flex flex-col gap-5">
            
            {/* Card 1: Additional Fees */}
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-5 sm:p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-[#262626] pb-4">
                <h3 className="text-[17px] sm:text-[18px] font-semibold text-white">
                  Additional Fees
                </h3>
                <button className="bg-[#141414] border border-[#262626] hover:bg-[#222222] text-white text-[13px] font-medium rounded-[8px] py-2 px-3.5 transition-colors">
                  Learn More
                </button>
              </div>

              {/* Grid with explicit inner borders */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Item 1 */}
                <div className="flex flex-col gap-1.5 pb-4 md:pr-4 border-b md:border-b-0 md:border-r border-[#262626]">
                  <span className="text-[13px] text-[#999999] font-medium">Property Transfer Tax</span>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-lg font-semibold text-white">$25,000</span>
                    <span className="bg-[#141414] border border-[#262626] text-[#999999] text-[11px] px-2.5 py-0.5 rounded-[20px]">Based on sale price & local regulations</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col gap-1.5 pb-4 md:pl-2">
                  <span className="text-[13px] text-[#999999] font-medium">Legal Fees</span>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-lg font-semibold text-white">$3,000</span>
                    <span className="bg-[#141414] border border-[#262626] text-[#999999] text-[11px] px-2.5 py-0.5 rounded-[20px]">Title transfer & documentation</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col gap-1.5 pt-3 md:pr-4 border-t md:border-r border-[#262626]">
                  <span className="text-[13px] text-[#999999] font-medium">Home Inspection</span>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-lg font-semibold text-white">$500</span>
                    <span className="bg-[#141414] border border-[#262626] text-[#999999] text-[11px] px-2.5 py-0.5 rounded-[20px]">Recommended due diligence</span>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col gap-1.5 pt-3 md:pl-2 border-t border-[#262626]">
                  <span className="text-[13px] text-[#999999] font-medium">Property Insurance</span>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-lg font-semibold text-white">$1,200</span>
                    <span className="bg-[#141414] border border-[#262626] text-[#999999] text-[11px] px-2.5 py-0.5 rounded-[20px]">Annual comprehensive coverage</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2: Monthly Costs */}
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-5 sm:p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-[#262626] pb-4">
                <h3 className="text-[17px] sm:text-[18px] font-semibold text-white">
                  Monthly Costs
                </h3>
                <button className="bg-[#141414] border border-[#262626] hover:bg-[#222222] text-white text-[13px] font-medium rounded-[8px] py-2 px-3.5 transition-colors">
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 pb-4 md:pb-0 md:pr-4 border-b md:border-b-0 md:border-r border-[#262626]">
                  <span className="text-[13px] text-[#999999] font-medium">Property Taxes</span>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-lg font-semibold text-white">$1,250/mo</span>
                    <span className="bg-[#141414] border border-[#262626] text-[#999999] text-[11px] px-2.5 py-0.5 rounded-[20px]">Approx. based on sale price</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 md:pl-2">
                  <span className="text-[13px] text-[#999999] font-medium">HOA / Community Fee</span>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-lg font-semibold text-white">$300/mo</span>
                    <span className="bg-[#141414] border border-[#262626] text-[#999999] text-[11px] px-2.5 py-0.5 rounded-[20px]">Common area maintenance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Total Initial Costs */}
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-5 sm:p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-[#262626] pb-4">
                <h3 className="text-[17px] sm:text-[18px] font-semibold text-white">
                  Total Initial Costs
                </h3>
                <button className="bg-[#141414] border border-[#262626] hover:bg-[#222222] text-white text-[13px] font-medium rounded-[8px] py-2 px-3.5 transition-colors">
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 pb-4 md:pr-4 border-b md:border-b-0 md:border-r border-[#262626]">
                  <span className="text-[13px] text-[#999999] font-medium">Listing Price</span>
                  <span className="text-lg font-semibold text-white">{listingPrice}</span>
                </div>

                <div className="flex flex-col gap-1.5 pb-4 md:pl-2">
                  <span className="text-[13px] text-[#999999] font-medium">Additional Fees</span>
                  <span className="text-lg font-semibold text-white">$29,700</span>
                </div>

                <div className="flex flex-col gap-1.5 pt-3 md:pr-4 border-t md:border-r border-[#262626]">
                  <span className="text-[13px] text-[#999999] font-medium">Down Payment (20%)</span>
                  <span className="text-lg font-semibold text-white">$250,000</span>
                </div>

                <div className="flex flex-col gap-1.5 pt-3 md:pl-2 border-t border-[#262626]">
                  <span className="text-[13px] text-[#999999] font-medium">Mortgage Amount</span>
                  <span className="text-lg font-semibold text-white">$1,000,000</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}