import React from 'react';
import Image from 'next/image';

export default function OfficeGallerySection() {
  return (
    <section className="w-full bg-[#141414] py-12 lg:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#262626]">
      {/* Outer Card Wrapper */}
      <div className="relative max-w-[1360px] mx-auto bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-4 sm:p-6 lg:p-8 overflow-hidden flex flex-col gap-6 lg:gap-8 shadow-sm">
        
        {/* Main Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 w-full">
          
          {/* Left Container (Two stacked images) */}
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3.5 w-full">
            <div className="relative w-full h-[110px] sm:h-[125px] lg:h-[135px] rounded-[8px] overflow-hidden border border-[#262626]">
              <Image 
                src="/images/contact1.png" 
                alt="Office Workspace" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[110px] sm:h-[125px] lg:h-[135px] rounded-[8px] overflow-hidden border border-[#262626]">
              <Image 
                src="/images/contact2.png" 
                alt="Team Collaboration" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Container (Top wide image + Bottom two side-by-side images) */}
          <div className="flex flex-col gap-3.5 w-full">
            {/* Top Wide Image */}
            <div className="relative hidden lg:block w-full h-[135px] rounded-[8px] overflow-hidden border border-[#262626]">
              <Image 
                src="/images/contact3.png" 
                alt="Professional Team" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Bottom Two Side-by-Side Images */}
            <div className="grid grid-cols-2 gap-3.5 w-full">
              <div className="relative w-full h-[110px] sm:h-[125px] lg:h-[135px] rounded-[8px] overflow-hidden border border-[#262626]">
                <Image 
                  src="/images/contact4.png" 
                  alt="Team Members" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[110px] sm:h-[125px] lg:h-[135px] rounded-[8px] overflow-hidden border border-[#262626]">
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 pt-2">
          
          {/* Text Block */}
          <div className="flex-1 flex flex-col gap-2 relative w-full">
            <div className="flex items-center gap-1 text-gray-600 mb-0.5">
              <span className="text-sm">✦</span>
              <span className="text-xs">✦</span>
              <span className="text-[10px]">✦</span>
            </div>

            <h2 className="text-lg sm:text-xl lg:text-[24px] font-semibold text-white tracking-tight leading-[1.2]">
              Explore Estatein&apos;s World
            </h2>
            <p className="text-xs sm:text-[13px] font-medium text-[#999999] leading-relaxed max-w-xl">
              Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.
            </p>
          </div>

          {/* Feature Image Block */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-[130px] sm:h-[150px] rounded-[8px] overflow-hidden border border-[#262626]">
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