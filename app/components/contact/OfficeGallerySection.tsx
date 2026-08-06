import React from 'react';
import Image from 'next/image';

export default function OfficeGallerySection() {
  return (
    <section className="w-full bg-[#141414] py-[60px] md:py-[80px] px-4 sm:px-6 md:px-16 lg:px-[162px] border-b border-[#262626]">
      {/* Outer Card Wrapper */}
      <div className="relative max-w-[1596px] mx-auto bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-4 sm:p-8 md:p-12 lg:p-[60px] overflow-hidden flex flex-col gap-[30px] lg:gap-[40px]">
        
        {/* Main Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] md:gap-[20px] w-full">
          
          {/* Left Container (Two stacked tall images) */}
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-[16px] md:gap-[20px] w-full">
            <div className="relative w-full h-[160px] sm:h-[300px] lg:h-[236px] rounded-[10px] overflow-hidden border border-[#262626]">
              <Image 
                src="/images/contact1.png" 
                alt="Office Workspace" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[160px] sm:h-[300px] lg:h-[236px] rounded-[10px] overflow-hidden border border-[#262626]">
              <Image 
                src="/images/contact2.png" 
                alt="Team Collaboration" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Container (Top wide image + Bottom two side-by-side images) */}
          <div className="flex flex-col gap-[16px] md:gap-[20px] w-full">
            {/* Top Wide Image - Hidden on mobile, visible on big screens */}
            <div className="relative hidden lg:block w-full h-[236px] rounded-[10px] overflow-hidden border border-[#262626]">
              <Image 
                src="/images/contact3.png" 
                alt="Professional Team" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Bottom Two Side-by-Side Images */}
            <div className="grid grid-cols-2 gap-[16px] md:gap-[20px] w-full">
              <div className="relative w-full h-[160px] sm:h-[230px] lg:h-[236px] rounded-[10px] overflow-hidden border border-[#262626]">
                <Image 
                  src="/images/contact4.png" 
                  alt="Team Members" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[160px] sm:h-[230px] lg:h-[236px] rounded-[10px] overflow-hidden border border-[#262626]">
                <Image 
                  src="/images/contact5.png" 
                  alt="Corporate Executives" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Closing Text + Feature Image Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-[60px] pt-2">
          
          {/* Text Block */}
          <div className="flex-1 flex flex-col gap-3 lg:gap-4 relative w-full">
            <div className="flex items-center gap-1.5 text-gray-600 mb-[-4px]">
              <span className="text-[12px]">✦</span>
              <span className="text-[16px]">✦</span>
              <span className="text-[20px]">✦</span>
            </div>

            <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold text-white tracking-tight">
              Explore Estatein&apos;s World
            </h2>
            <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-relaxed max-w-2xl">
              Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.
            </p>
          </div>

          {/* Feature Image Block */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-[10px] overflow-hidden border border-[#262626]">
              <Image 
                src="/images/contact6.png" 
                alt="Handshake Partnership" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}