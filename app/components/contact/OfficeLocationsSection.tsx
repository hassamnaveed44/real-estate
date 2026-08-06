'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function OfficeLocationsSection() {
  const [activeTab, setActiveTab] = useState<'All' | 'Regional' | 'International'>('All');

  const offices = [
    {
      id: 1,
      category: 'Regional',
      eyebrow: 'Main Headquarters',
      title: '123 Estatein Plaza, City Center, Metropolis',
      description: 'Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.',
      email: 'info@estatein.com',
      phone: '+1 (123) 456-7890',
      location: 'Metropolis',
    },
    {
      id: 2,
      category: 'International',
      eyebrow: 'Regional Offices',
      title: '456 Urban Avenue, Downtown District, Metropolis',
      description: 'Estatein\'s presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts, who understand the nuances of their respective markets.',
      email: 'info@estatein.com',
      phone: '+1 (123) 428-7890',
      location: 'Metropolis',
    },
  ];

  const filteredOffices = offices.filter((office) => {
    if (activeTab === 'All') return true;
    return office.category === activeTab;
  });

  return (
    <section className="w-full bg-[#141414] py-[80px] md:py-[100px] px-4 sm:px-6 md:px-16 lg:px-[162px] border-b border-[#262626]">
      <div className="max-w-[1596px] mx-auto flex flex-col gap-[40px] md:gap-[50px] lg:gap-[80px]">
        
        {/* Text Container (Heading + Paragraph with Sparkles) */}
        <div className="flex flex-col gap-4 lg:pr-[300px] relative">
          <div className="flex items-center gap-1.5 text-gray-600 mb-[-4px]">
            <span className="text-[12px]">✦</span>
            <span className="text-[16px]">✦</span>
            <span className="text-[20px]">✦</span>
          </div>

          <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-semibold text-white tracking-tight">
            Discover Our Office Locations
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-relaxed">
            Estatein is here to serve you across multiple locations. Whether you&apos;re looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you.
          </p>
        </div>

        {/* Tabs Container */}
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-[10px] flex flex-row items-center w-full lg:w-[516px]">
          {(['All', 'Regional', 'International'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-[14px] lg:py-[18px] px-4 text-[14px] md:text-[16px] lg:text-[18px] font-medium rounded-[10px] transition-all text-center whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-[#141414] text-white border border-[#262626] shadow-sm'
                  : 'text-[#999999] hover:text-white border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[50px]">
          {filteredOffices.map((office) => (
            <div 
              key={office.id}
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-6 md:p-8 lg:p-[50px] flex flex-col justify-between gap-[30px] lg:gap-[40px]"
            >
              {/* Top Content */}
              <div className="flex flex-col gap-3">
                <span className="text-[14px] md:text-[16px] lg:text-[18px] font-medium text-white">
                  {office.eyebrow}
                </span>
                <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-semibold text-white tracking-tight">
                  {office.title}
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-relaxed pt-2">
                  {office.description}
                </p>
              </div>

              {/* Info Chips Row */}
              <div className="flex flex-wrap gap-[10px]">
                {/* Email Chip */}
                <div className="bg-[#1A1A1A] border border-[#262626] rounded-[28px] px-4 py-[14px] flex items-center gap-[10px]">
                  <Mail className="w-5 h-5 text-white" />
                  <span className="text-[14px] lg:text-[18px] font-medium text-white truncate">
                    {office.email}
                  </span>
                </div>

                {/* Phone Chip */}
                <div className="bg-[#1A1A1A] border border-[#262626] rounded-[28px] px-4 py-[14px] flex items-center gap-[10px]">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-[14px] lg:text-[18px] font-medium text-white whitespace-nowrap">
                    {office.phone}
                  </span>
                </div>

                {/* Location Chip */}
                <div className="bg-[#1A1A1A] border border-[#262626] rounded-[28px] px-4 py-[14px] flex items-center gap-[10px]">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="text-[14px] lg:text-[18px] font-medium text-white whitespace-nowrap">
                    {office.location}
                  </span>
                </div>
              </div>

              {/* Get Direction Button */}
              <button className="w-full bg-[#703BF7] hover:bg-[#5e31d4] text-white font-medium text-[14px] md:text-[16px] lg:text-[18px] py-[14px] lg:py-[18px] rounded-[8px] lg:rounded-[10px] transition-all text-center">
                Get Direction
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}