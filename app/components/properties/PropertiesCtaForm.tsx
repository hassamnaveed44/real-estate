// src/app/components/properties/PropertiesCtaForm.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown, Phone, Mail, Check } from "lucide-react";

export default function PropertiesCtaForm() {
  const [contactMethod, setContactMethod] = useState<"phone" | "email">("phone");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="w-full bg-[#141414] text-white py-12 lg:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-8 lg:gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2.5">
          <div className="flex items-center gap-1 text-gray-700">
            <span className="text-lg">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-sm">✦</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight leading-[1.2] text-white">
            Let&apos;s Make it Happen
          </h2>

          <p className="w-full max-w-[1200px] text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
            Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-8 lg:p-10 flex flex-col gap-6 shadow-sm">
          
          {/* Row 1: First Name, Last Name, Email, Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">First Name</label>
              <input 
                type="text" 
                placeholder="Enter First Name" 
                className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-white placeholder-[#666666] text-[13px] sm:text-[13.5px] font-medium outline-none focus:border-[#703BF7] transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">Last Name</label>
              <input 
                type="text" 
                placeholder="Enter Last Name" 
                className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-white placeholder-[#666666] text-[13px] sm:text-[13.5px] font-medium outline-none focus:border-[#703BF7] transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">Email</label>
              <input 
                type="email" 
                placeholder="Enter your Email" 
                className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-white placeholder-[#666666] text-[13px] sm:text-[13.5px] font-medium outline-none focus:border-[#703BF7] transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">Phone</label>
              <input 
                type="text" 
                placeholder="Enter Phone Number" 
                className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-white placeholder-[#666666] text-[13px] sm:text-[13.5px] font-medium outline-none focus:border-[#703BF7] transition"
              />
            </div>
          </div>

          {/* Row 2: Preferred Location, Property Type, No. of Bathrooms, No. of Bedrooms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">Preferred Location</label>
              <div className="relative flex items-center">
                <select className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-[#666666] text-[13px] sm:text-[13.5px] font-medium outline-none appearance-none cursor-pointer focus:border-[#703BF7]">
                  <option value="">Select Location</option>
                  <option value="location1">New York</option>
                  <option value="location2">Los Angeles</option>
                  <option value="location3">Miami</option>
                </select>
                <ChevronDown className="absolute right-3.5 w-4 h-4 text-[#999999] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">Property Type</label>
              <div className="relative flex items-center">
                <select className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-[#666666] text-[13px] sm:text-[13.5px] font-medium outline-none appearance-none cursor-pointer focus:border-[#703BF7]">
                  <option value="">Select Type</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="cottage">Cottage</option>
                </select>
                <ChevronDown className="absolute right-3.5 w-4 h-4 text-[#999999] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">No. of Bathrooms</label>
              <div className="relative flex items-center">
                <select className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-[#666666] text-[13px] sm:text-[13.5px] font-medium outline-none appearance-none cursor-pointer focus:border-[#703BF7]">
                  <option value="">Select Bathrooms</option>
                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="3">3+ Bathrooms</option>
                </select>
                <ChevronDown className="absolute right-3.5 w-4 h-4 text-[#999999] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">No. of Bedrooms</label>
              <div className="relative flex items-center">
                <select className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-[#666666] text-[13px] sm:text-[13.5px] font-medium outline-none appearance-none cursor-pointer focus:border-[#703BF7]">
                  <option value="">Select Bedrooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3+ Bedrooms</option>
                </select>
                <ChevronDown className="absolute right-3.5 w-4 h-4 text-[#999999] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 3: Budget & Preferred Contact Method */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">Budget</label>
              <div className="relative flex items-center">
                <select className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-[#666666] text-[13px] sm:text-[13.5px] font-medium outline-none appearance-none cursor-pointer focus:border-[#703BF7]">
                  <option value="">Select Budget</option>
                  <option value="low">$250k - $500k</option>
                  <option value="mid">$500k - $1M</option>
                  <option value="high">$1M+</option>
                </select>
                <ChevronDown className="absolute right-3.5 w-4 h-4 text-[#999999] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">Preferred Contact Method</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
                <div 
                  onClick={() => setContactMethod("phone")}
                  className={`bg-[#1A1A1A] border ${contactMethod === "phone" ? "border-[#703BF7]" : "border-[#262626]"} rounded-[8px] px-3.5 py-2.5 flex items-center justify-between cursor-pointer transition`}
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#999999] shrink-0" />
                    <span className="text-[12.5px] sm:text-[13px] text-white font-medium whitespace-nowrap">Enter Your Number</span>
                  </div>
                  <div className={`w-4 h-4 rounded-full border ${contactMethod === "phone" ? "border-[#703BF7] bg-[#703BF7]" : "border-[#666666]"} flex items-center justify-center shrink-0`}>
                    {contactMethod === "phone" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>

                <div 
                  onClick={() => setContactMethod("email")}
                  className={`bg-[#1A1A1A] border ${contactMethod === "email" ? "border-[#703BF7]" : "border-[#262626]"} rounded-[8px] px-3.5 py-2.5 flex items-center justify-between cursor-pointer transition`}
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#999999] shrink-0" />
                    <span className="text-[12.5px] sm:text-[13px] text-white font-medium whitespace-nowrap">Enter Your Email</span>
                  </div>
                  <div className={`w-4 h-4 rounded-full border ${contactMethod === "email" ? "border-[#703BF7] bg-[#703BF7]" : "border-[#666666]"} flex items-center justify-center shrink-0`}>
                    {contactMethod === "email" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Message Textarea */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] sm:text-[14px] font-semibold text-white">Message</label>
            <textarea 
              placeholder="Enter your Message here.." 
              className="w-full h-[90px] sm:h-[110px] bg-[#1A1A1A] border border-[#262626] rounded-[8px] p-3.5 text-white placeholder-[#666666] text-[13px] sm:text-[14px] font-medium outline-none focus:border-[#703BF7] transition resize-none"
            />
          </div>

          {/* Bottom Row: Custom Checkbox Agreement & Send Button */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2">
            
            {/* Custom Checkbox */}
            <div 
              onClick={() => setIsChecked(!isChecked)}
              className="flex items-center gap-2.5 cursor-pointer select-none"
            >
              <div className={`w-5 h-5 rounded-[4px] bg-[#1A1A1A] border border-[#262626] flex items-center justify-center transition shrink-0`}>
                {isChecked && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
              </div>
              <span className="text-[13px] sm:text-[14px] font-medium text-[#999999]">
                I agree with <span className="text-white underline">Terms of Use</span> and <span className="text-white underline">Privacy Policy</span>
              </span>
            </div>

            {/* Send Button */}
            <button className="w-full lg:w-auto bg-[#703BF7] hover:bg-[#5e31d4] transition text-white rounded-[8px] px-6 py-3 text-[13px] sm:text-[14px] font-medium text-center shrink-0 shadow-md">
              Send Your Message
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}