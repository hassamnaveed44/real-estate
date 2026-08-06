import React from "react";

interface ComprehensivePricingProps {
  listingPrice?: string;
}

export default function ComprehensivePricing({ listingPrice = "$1,250,000" }: ComprehensivePricingProps) {
  return (
    <section className="w-full bg-[#141414] py-[40px] px-4 sm:px-6 lg:px-[162px] font-['Urbanist'] text-white">
      <div className="max-w-[1596px] mx-auto flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <span className="text-gray-600 text-sm">✦</span>
            <span className="text-gray-600 text-xs opacity-75">✦</span>
            <span className="text-gray-600 text-[10px] opacity-50">✦</span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-semibold text-white leading-[120%]">
            Comprehensive Pricing Details
          </h2>

          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#999999] font-medium leading-[150%] max-w-[1297px]">
            At Estatein, we transparently lay out all costs associated with our properties to ensure you have a complete financial picture before making your move. Here is a detailed breakdown of the pricing for Seaside Serenity Villa.
          </p>
        </div>

        {/* Note Banner */}
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] py-5 px-6 sm:px-8 lg:px-[50px] flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-5">
          <span className="bg-[#1A1A1A] text-white text-[14px] font-semibold px-4 py-1.5 rounded-[8px] w-fit">
            Note
          </span>
          <div className="h-[1px] sm:h-8 sm:w-[1px] bg-[#262626] hidden sm:block" />
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#999999] font-medium leading-[150%]">
            The figures shown above are estimates and may vary depending on property location, local taxes, and individual circumstances.
          </p>
        </div>

        {/* Main Content Layout: Listing Price Column + Breakdown Cards Stack */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          
          {/* Listing Price Sticky/Side Column */}
          <div className="w-full lg:w-[220px] flex flex-col gap-2">
            <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Listing Price</span>
            <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-semibold text-white">
              {listingPrice}
            </span>
          </div>

          {/* Breakdown Cards Stack */}
          <div className="flex-1 w-full flex flex-col gap-6 lg:gap-[40px]">
            
            {/* Card 1: Additional Fees */}
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-6 sm:p-8 lg:p-[50px] flex flex-col gap-6 lg:gap-8">
              <div className="flex items-center justify-between border-b border-[#262626] pb-6">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-white">
                  Additional Fees
                </h3>
                <button className="bg-[#1A1A1A] border border-[#262626] hover:bg-[#262626] text-white text-[14px] font-medium rounded-[10px] py-[10px] px-4 sm:py-[14px] sm:px-[18px] transition-colors">
                  Learn More
                </button>
              </div>

              {/* Grid with explicit inner borders */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Item 1 */}
                <div className="flex flex-col gap-2 pb-8 pr-6 border-b border-r border-[#262626]">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Property Transfer Tax</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$25,000</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">Based on the sale price and local regulations</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col gap-2 pb-8 pl-6 border-b border-[#262626]">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Legal Fees</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$3,000</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">Approximate cost for legal services, including title transfer</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col gap-2 pt-8 pb-8 pr-6 border-b border-r border-[#262626]">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Home Inspection</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$500</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">Recommended for due diligence</span>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col gap-2 pt-8 pb-8 pl-6 border-b border-[#262626]">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Property Insurance</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$1,200</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">Annual cost for comprehensive property insurance</span>
                  </div>
                </div>

                {/* Item 5 (Full width bottom row) */}
                <div className="flex flex-col gap-2 pt-8 col-span-1 md:col-span-2">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Mortgage Fees</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">Varies</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">If applicable, consult with your lender for specific details</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2: Monthly Costs */}
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-6 sm:p-8 lg:p-[50px] flex flex-col gap-6 lg:gap-8">
              <div className="flex items-center justify-between border-b border-[#262626] pb-6">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-white">
                  Monthly Costs
                </h3>
                <button className="bg-[#1A1A1A] border border-[#262626] hover:bg-[#262626] text-white text-[14px] font-medium rounded-[10px] py-[10px] px-4 sm:py-[14px] sm:px-[18px] transition-colors">
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-2 pb-6 pr-6 border-b border-r border-[#262626] col-span-1 md:col-span-2">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Property Taxes</span>
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$1,250</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">Approximate monthly property tax based on the sale price and local rates</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-6 col-span-1 md:col-span-2">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Homeowners Association (HOA) Fee</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$300</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">Monthly fee for common area maintenance and security</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Total Initial Costs */}
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-6 sm:p-8 lg:p-[50px] flex flex-col gap-6 lg:gap-8">
              <div className="flex items-center justify-between border-b border-[#262626] pb-6">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-white">
                  Total Initial Costs
                </h3>
                <button className="bg-[#1A1A1A] border border-[#262626] hover:bg-[#262626] text-white text-[14px] font-medium rounded-[10px] py-[10px] px-4 sm:py-[14px] sm:px-[18px] transition-colors">
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-2 pb-8 pr-6 border-b border-r border-[#262626]">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Listing Price</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$1,250,000</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pb-8 pl-6 border-b border-[#262626]">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Additional Fees</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$29,700</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">Property transfer tax, legal fees, inspection, insurance</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-8 pr-6 border-r border-[#262626]">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Down Payment</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$250,000</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">20%</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-8 pl-6">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Mortgage Amount</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$1,000,000</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">If applicable</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Monthly Expenses */}
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-6 sm:p-8 lg:p-[50px] flex flex-col gap-6 lg:gap-8">
              <div className="flex items-center justify-between border-b border-[#262626] pb-6">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-white">
                  Monthly Expenses
                </h3>
                <button className="bg-[#1A1A1A] border border-[#262626] hover:bg-[#262626] text-white text-[14px] font-medium rounded-[10px] py-[10px] px-4 sm:py-[14px] sm:px-[18px] transition-colors">
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-2 pb-8 pr-6 border-b border-r border-[#262626]">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Property Taxes</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$1,250</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pb-8 pl-6 border-b border-[#262626]">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Homeowners Association Fee</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$300</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-8 pr-6 border-r border-[#262626]">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Mortgage Payment</span>
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">Varies based on terms and interest rate</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">If applicable</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-8 pl-6">
                  <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Property Insurance</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[20px] sm:text-[24px] font-semibold text-white">$100</span>
                    <span className="bg-[#1A1A1A] border border-[#262626] text-[#999999] text-[12px] sm:text-[14px] px-3 py-1 rounded-[28px]">Approximate monthly cost</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}