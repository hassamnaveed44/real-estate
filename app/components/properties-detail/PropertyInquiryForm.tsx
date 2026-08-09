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
  };

  return (
    <section className="w-full bg-[#141414] py-12 lg:py-16 px-4 sm:px-8 lg:px-12 font-['Urbanist'] text-white">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Title & Text */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="flex items-center gap-1 text-gray-700 mb-1">
            <span className="text-lg">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-sm">✦</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-white tracking-tight leading-[1.2]">
            Inquire About {propertyName}
          </h2>

          <p className="text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed max-w-md">
            Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing or answering any questions.
          </p>
        </div>

        {/* Right Column: Inquiry Form Card */}
        <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-7 lg:p-8 flex flex-col gap-5 shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Row 1: First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] sm:text-[14px] font-semibold text-white">First Name</label>
                <input 
                  type="text" 
                  placeholder="Enter First Name" 
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-white placeholder-[#666666] text-[13px] sm:text-[14px] font-medium outline-none focus:border-[#703BF7] transition"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] sm:text-[14px] font-semibold text-white">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Enter Last Name" 
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-white placeholder-[#666666] text-[13px] sm:text-[14px] font-medium outline-none focus:border-[#703BF7] transition"
                  required
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] sm:text-[14px] font-semibold text-white">Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-white placeholder-[#666666] text-[13px] sm:text-[14px] font-medium outline-none focus:border-[#703BF7] transition"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] sm:text-[14px] font-semibold text-white">Phone</label>
                <input 
                  type="text" 
                  placeholder="Enter Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-white placeholder-[#666666] text-[13px] sm:text-[14px] font-medium outline-none focus:border-[#703BF7] transition"
                  required
                />
              </div>
            </div>

            {/* Row 3: Selected Property */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">Selected Property</label>
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  readOnly 
                  value={`${propertyName}, ${propertyLocation}`}
                  className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3.5 py-3 text-white text-[13px] sm:text-[14px] font-medium outline-none cursor-default"
                />
                <MapPin className="absolute right-3.5 w-4 h-4 text-[#999999] pointer-events-none" />
              </div>
            </div>

            {/* Row 4: Message Textarea */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-white">Message</label>
              <textarea 
                placeholder="Enter your Message here.." 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full h-[90px] sm:h-[110px] bg-[#1A1A1A] border border-[#262626] rounded-[8px] p-3.5 text-white placeholder-[#666666] text-[13px] sm:text-[14px] font-medium outline-none focus:border-[#703BF7] transition resize-none"
              />
            </div>

            {/* Row 5: Checkbox & Send Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div 
                onClick={() => setAgreed(!agreed)}
                className="flex items-center gap-2.5 cursor-pointer select-none"
              >
                <div className={`w-5 h-5 rounded-[4px] bg-[#1A1A1A] border border-[#262626] flex items-center justify-center transition shrink-0 ${agreed ? "border-[#703BF7] bg-[#703BF7]" : ""}`}>
                  {agreed && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                </div>
                <span className="text-[13px] sm:text-[14px] font-medium text-[#999999]">
                  I agree with <span className="text-white underline">Terms of Use</span> and <span className="text-white underline">Privacy Policy</span>
                </span>
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#703BF7] hover:bg-[#5e31d4] transition text-white rounded-[8px] px-6 py-3 text-[13px] sm:text-[14px] font-medium text-center shrink-0 shadow-md"
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