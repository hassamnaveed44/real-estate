"use client";

import React, { useState } from "react";
import { MapPin, Check } from "lucide-react";

interface PropertyInquiryFormProps {
  propertyName?: string;
  propertyLocation?: string;
}

export default function PropertyInquiryForm({ 
  propertyName = "Seaside Serenity Villa", 
  propertyLocation = "Malibu, California" 
}: PropertyInquiryFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  return (
    <section className="w-full bg-#262626 py-[40px] px-4 sm:px-6 lg:px-[162px] font-['Urbanist'] text-white">
      {/* Main Layout Container: Flex row on desktop (gap 60px-100px), stack on mobile */}
      <div className="max-w-[1596px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[100px]">
        
        {/* Left Text Block */}
        <div className="w-full lg:w-[519px] flex flex-col gap-4">
          {/* Decorative Sparkles */}
          <div className="flex items-center gap-1">
            <span className="text-gray-600 text-sm">✦</span>
            <span className="text-gray-600 text-xs opacity-75">✦</span>
            <span className="text-gray-600 text-[10px] opacity-50">✦</span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-semibold text-white leading-[120%]">
            Inquire About {propertyName}
          </h2>

          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#999999] font-medium leading-[150%]">
            Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
          </p>
        </div>

        {/* Right Form Card */}
        <div className="w-full flex-1 bg-#262626 border border-[#262626] rounded-[12px] p-6 sm:p-8 lg:p-[50px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:gap-[30px]">
            
            {/* Row 1: First Name / Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] sm:text-[16px] font-medium text-white">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="bg-[#141414] border border-[#262626] rounded-[8px] px-4 py-3 sm:py-4 text-white text-[14px] sm:text-[16px] placeholder-[#666666] focus:outline-none focus:border-[#703BF7]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] sm:text-[16px] font-medium text-white">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="bg-[#141414] border border-[#262626] rounded-[8px] px-4 py-3 sm:py-4 text-white text-[14px] sm:text-[16px] placeholder-[#666666] focus:outline-none focus:border-[#703BF7]"
                  required
                />
              </div>
            </div>

            {/* Row 2: Email / Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] sm:text-[16px] font-medium text-white">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#141414] border border-[#262626] rounded-[8px] px-4 py-3 sm:py-4 text-white text-[14px] sm:text-[16px] placeholder-[#666666] focus:outline-none focus:border-[#703BF7]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] sm:text-[16px] font-medium text-white">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#141414] border border-[#262626] rounded-[8px] px-4 py-3 sm:py-4 text-white text-[14px] sm:text-[16px] placeholder-[#666666] focus:outline-none focus:border-[#703BF7]"
                  required
                />
              </div>
            </div>

            {/* Selected Property Field (Readonly style) */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] sm:text-[16px] font-medium text-white">Selected Property</label>
              <div className="relative flex items-center bg-[#141414] border border-[#262626] rounded-[8px] px-4 py-3 sm:py-4 text-[#E4E4E7] text-[16px] sm:text-[20px]">
                <span className="truncate pr-8">{propertyName}, {propertyLocation}</span>
                <MapPin className="absolute right-4 w-5 h-5 text-[#999999]" />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] sm:text-[16px] font-medium text-white">Message</label>
              <textarea
                placeholder="Enter your Message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="bg-[#141414] border border-[#262626] rounded-[8px] p-4 text-white text-[14px] sm:text-[16px] placeholder-[#666666] focus:outline-none focus:border-[#703BF7] resize-none h-[130px] lg:h-[170px]"
              />
            </div>

            {/* Bottom Row: Custom Checkbox + Submit Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-2">
              
              {/* Custom Checkbox */}
              <div 
                onClick={() => setAgreed(!agreed)}
                className="flex items-center gap-3 cursor-pointer select-none"
              >
                <div className={`w-6 h-6 rounded-[6px] border border-[#262626] bg-[#141414] flex items-center justify-center transition-colors ${agreed ? "border-[#703BF7] bg-[#703BF7]/20" : ""}`}>
                  {agreed && <Check className="w-4 h-4 text-[#703BF7]" />}
                </div>
                <span className="text-[14px] text-[#999999] font-medium">
                  I agree with Terms of Use and Privacy Policy
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#703BF7] hover:bg-[#5e31d4] text-white text-[14px] sm:text-[16px] font-medium rounded-[8px] py-[16px] px-6 sm:px-[46px] transition-colors text-center"
              >
                Send Your Message
              </button>

            </div>

            {submitted && (
              <p className="text-green-400 text-sm font-medium text-center">
                Thank you! Your inquiry has been sent successfully.
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}