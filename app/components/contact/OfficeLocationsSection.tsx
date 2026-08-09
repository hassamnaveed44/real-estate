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
    <section className="w-full bg-[#141414] py-12 lg:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#262626]">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-8 lg:gap-10">
        
        {/* Text Container */}
        <div className="flex flex-col gap-2.5 max-w-4xl relative">
          <div className="flex items-center gap-1 text-gray-600 mb-1">
            <span className="text-sm">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-[10px]">✦</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-white tracking-tight leading-[1.2]">
            Discover Our Office Locations
          </h2>
          <p className="text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
            Estatein is here to serve you across multiple locations. Whether you&apos;re looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs.
          </p>
        </div>

        {/* Tabs Container */}
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] p-1.5 flex flex-row items-center w-full sm:w-[420px]">
          {(['All', 'Regional', 'International'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 px-3 text-[13px] sm:text-[14px] font-medium rounded-[8px] transition-all text-center whitespace-nowrap ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredOffices.map((office) => (
            <div 
              key={office.id}
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-5 shadow-sm"
            >
              {/* Top Content */}
              <div className="flex flex-col gap-2">
                <span className="text-[13px] sm:text-[14px] font-medium text-white">
                  {office.eyebrow}
                </span>
                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-white tracking-tight">
                  {office.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] font-medium text-[#999999] leading-relaxed pt-1">
                  {office.description}
                </p>
              </div>

              {/* Info Chips Row */}
              <div className="flex flex-wrap gap-2.5">
                {/* Email Chip */}
                <div className="bg-[#1A1A1A] border border-[#262626] rounded-[28px] px-3.5 py-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white" />
                  <span className="text-[12px] sm:text-[13px] font-medium text-white truncate">
                    {office.email}
                  </span>
                </div>

                {/* Phone Chip */}
                <div className="bg-[#1A1A1A] border border-[#262626] rounded-[28px] px-3.5 py-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-[12px] sm:text-[13px] font-medium text-white whitespace-nowrap">
                    {office.phone}
                  </span>
                </div>

                {/* Location Chip */}
                <div className="bg-[#1A1A1A] border border-[#262626] rounded-[28px] px-3.5 py-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-[12px] sm:text-[13px] font-medium text-white whitespace-nowrap">
                    {office.location}
                  </span>
                </div>
              </div>

              {/* Get Direction Button */}
              <button className="w-full bg-[#703BF7] hover:bg-[#5e31d4] text-white font-medium text-[13px] sm:text-[14px] py-3 rounded-[8px] transition-all text-center shadow-sm">
                Get Direction
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}