// src/app/components/properties/PropertiesCtaForm.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown, Phone, Mail, Check } from "lucide-react";

export default function PropertiesCtaForm() {
  const [contactMethod, setContactMethod] = useState<"phone" | "email">("phone");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="w-full bg-[#141414] text-white py-12 sm:py-16 lg:py-[80px] px-6 sm:px-10 lg:px-[162px] overflow-hidden">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-10 sm:gap-14 lg:gap-[80px]">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex items-center gap-1.5 text-gray-700">
            <span className="text-xl">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-sm">✦</span>
          </div>

          <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-tight leading-[1.2] text-white">
            Let&apos;s Make it Happen
          </h2>

          <p className="w-full max-w-[1297px] text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-[150%] tracking-[0px]">
            Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don&apos;t wait; let&apos;s embark on this exciting journey together.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-8 lg:p-[100px] flex flex-col gap-6 sm:gap-8 lg:gap-[50px] shadow-sm">
          
          {/* Row 1: First Name, Last Name, Email, Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px]">
            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-[16px] sm:text-[16px] lg:text-[20px] font-semibold text-white">First Name</label>
              <input 
                type="text" 
                placeholder="Enter First Name" 
                className="bg-[#1A1A1A] border border-[#262626] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-4 lg:py-[24px] lg:px-[20px] text-white placeholder-[#666666] text-[14px] sm:text-[16px] lg:text-[18px] font-medium outline-none focus:border-[#703BF7] transition"
              />
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-[16px] sm:text-[16px] lg:text-[20px] font-semibold text-white">Last Name</label>
              <input 
                type="text" 
                placeholder="Enter Last Name" 
                className="bg-[#1A1A1A] border border-[#262626] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-4 lg:py-[24px] lg:px-[20px] text-white placeholder-[#666666] text-[14px] sm:text-[16px] lg:text-[18px] font-medium outline-none focus:border-[#703BF7] transition"
              />
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-[16px] sm:text-[16px] lg:text-[20px] font-semibold text-white">Email</label>
              <input 
                type="email" 
                placeholder="Enter your Email" 
                className="bg-[#1A1A1A] border border-[#262626] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-4 lg:py-[24px] lg:px-[20px] text-white placeholder-[#666666] text-[14px] sm:text-[16px] lg:text-[18px] font-medium outline-none focus:border-[#703BF7] transition"
              />
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-[16px] sm:text-[16px] lg:text-[20px] font-semibold text-white">Phone</label>
              <input 
                type="text" 
                placeholder="Enter Phone Number" 
                className="bg-[#1A1A1A] border border-[#262626] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-4 lg:py-[24px] lg:px-[20px] text-white placeholder-[#666666] text-[14px] sm:text-[16px] lg:text-[18px] font-medium outline-none focus:border-[#703BF7] transition"
              />
            </div>
          </div>

          {/* Row 2: Preferred Location, Property Type, No. of Bathrooms, No. of Bedrooms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px]">
            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-[16px] sm:text-[16px] lg:text-[20px] font-semibold text-white">Preferred Location</label>
              <div className="relative flex items-center">
                <select className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-4 lg:py-[24px] lg:px-[20px] text-[#666666] text-[14px] sm:text-[16px] lg:text-[18px] font-medium outline-none appearance-none cursor-pointer">
                  <option value="">Select Location</option>
                  <option value="location1">New York</option>
                  <option value="location2">Los Angeles</option>
                </select>
                <ChevronDown className="absolute right-4 w-5 h-5 text-[#999999] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-[16px] sm:text-[16px] lg:text-[20px] font-semibold text-white">Property Type</label>
              <div className="relative flex items-center">
                <select className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-4 lg:py-[24px] lg:px-[20px] text-[#666666] text-[14px] sm:text-[16px] lg:text-[18px] font-medium outline-none appearance-none cursor-pointer">
                  <option value="">Select Property Type</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                </select>
                <ChevronDown className="absolute right-4 w-5 h-5 text-[#999999] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-[16px] sm:text-[16px] lg:text-[20px] font-semibold text-white">No. of Bathrooms</label>
              <div className="relative flex items-center">
                <select className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-4 lg:py-[24px] lg:px-[20px] text-[#666666] text-[14px] sm:text-[16px] lg:text-[18px] font-medium outline-none appearance-none cursor-pointer">
                  <option value="">Select no. of Bathrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3+</option>
                </select>
                <ChevronDown className="absolute right-4 w-5 h-5 text-[#999999] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-[16px] sm:text-[16px] lg:text-[20px] font-semibold text-white">No. of Bedrooms</label>
              <div className="relative flex items-center">
                <select className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-4 lg:py-[24px] lg:px-[20px] text-[#666666] text-[14px] sm:text-[16px] lg:text-[18px] font-medium outline-none appearance-none cursor-pointer">
                  <option value="">Select no. of Bedrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3+</option>
                </select>
                <ChevronDown className="absolute right-4 w-5 h-5 text-[#999999] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 3: Budget & Preferred Contact Method */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[30px]">
            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-[16px] sm:text-[16px] lg:text-[20px] font-semibold text-white">Budget</label>
              <div className="relative flex items-center">
                <select className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-4 lg:py-[24px] lg:px-[20px] text-[#666666] text-[14px] sm:text-[16px] lg:text-[18px] font-medium outline-none appearance-none cursor-pointer">
                  <option value="">Select Budget</option>
                  <option value="low">$250k - $500k</option>
                  <option value="mid">$500k - $1M</option>
                  <option value="high">$1M+</option>
                </select>
                <ChevronDown className="absolute right-4 w-5 h-5 text-[#999999] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-[16px] sm:text-[16px] lg:text-[20px] font-semibold text-white">Preferred Contact Method</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-full">
                <div 
                  onClick={() => setContactMethod("phone")}
                  className={`bg-[#1A1A1A] border ${contactMethod === "phone" ? "border-[#703BF7]" : "border-[#262626]"} rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-3 sm:p-4 flex items-center justify-between cursor-pointer transition`}
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#999999]" />
                    <span className="text-[14px] sm:text-[16px] text-white font-medium">Enter Your Number</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border ${contactMethod === "phone" ? "border-[#703BF7] bg-[#703BF7]" : "border-[#666666]"} flex items-center justify-center`}>
                    {contactMethod === "phone" && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>

                <div 
                  onClick={() => setContactMethod("email")}
                  className={`bg-[#1A1A1A] border ${contactMethod === "email" ? "border-[#703BF7]" : "border-[#262626]"} rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-3 sm:p-4 flex items-center justify-between cursor-pointer transition`}
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#999999]" />
                    <span className="text-[14px] sm:text-[16px] text-white font-medium">Enter Your Email</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border ${contactMethod === "email" ? "border-[#703BF7] bg-[#703BF7]" : "border-[#666666]"} flex items-center justify-center`}>
                    {contactMethod === "email" && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Message Textarea */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <label className="text-[16px] sm:text-[16px] lg:text-[20px] font-semibold text-white">Message</label>
            <textarea 
              placeholder="Enter your Message here.." 
              className="w-full h-[90px] sm:h-[122px] lg:h-[170px] bg-[#1A1A1A] border border-[#262626] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] p-4 lg:py-[24px] lg:px-[20px] text-white placeholder-[#666666] text-[14px] sm:text-[16px] lg:text-[18px] font-medium outline-none focus:border-[#703BF7] transition resize-none"
            />
          </div>

          {/* Bottom Row: Custom Checkbox Agreement & Send Button */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-4">
            
            {/* Custom Checkbox */}
            <div 
              onClick={() => setIsChecked(!isChecked)}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <div className={`w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px] rounded-[4px] bg-[#1A1A1A] border border-[#262626] flex items-center justify-center transition shrink-0`}>
                {isChecked && <Check className="w-4 h-4 text-white stroke-[3]" />}
              </div>
              <span className="text-[14px] sm:text-[16px] font-medium text-[#999999]">
                I agree with <span className="text-white underline">Terms of Use</span> and <span className="text-white underline">Privacy Policy</span>
              </span>
            </div>

            {/* Send Button */}
            <button className="w-full lg:w-auto bg-[#703BF7] hover:bg-[#5e31d4] transition text-white rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] px-[34px] sm:px-[40px] lg:px-[46px] py-[14px] sm:py-[16px] lg:py-[18px] text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-center shrink-0 shadow-lg">
              Send Your Message
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}