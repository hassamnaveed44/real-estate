'use client';

import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    source: '',
    message: '',
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, agreed });
  };

  return (
    <section className="w-full bg-[#141414] py-12 lg:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#262626]">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-8 lg:gap-10">
        
        {/* Text Container */}
        <div className="flex flex-col gap-2.5 max-w-4xl relative">
          {/* Decorative Sparkle Icons */}
          <div className="flex items-center gap-1 text-gray-600 mb-1">
            <span className="text-sm">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-[10px]">✦</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-white tracking-tight leading-[1.2]">
            Let&apos;s Connect
          </h2>
          <p className="text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
            We&apos;re excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you&apos;re a prospective client, partner, or simply curious about our services, we&apos;re here to answer your questions and provide the assistance you need.
          </p>
        </div>

        {/* Form Card Container */}
        <div className="bg-[#141414] border border-[#262626] rounded-[12px] p-6 sm:p-10 lg:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:gap-8">
            
            {/* Row 1: First Name, Last Name, Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] sm:text-[15px] font-semibold text-white">
                  First Name
                </label>
                <input 
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-4 py-3.5 text-[14px] sm:text-[15px] text-white placeholder-[#666666] focus:outline-none focus:border-[#703BF7] transition-colors"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] sm:text-[15px] font-semibold text-white">
                  Last Name
                </label>
                <input 
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-4 py-3.5 text-[14px] sm:text-[15px] text-white placeholder-[#666666] focus:outline-none focus:border-[#703BF7] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] sm:text-[15px] font-semibold text-white">
                  Email
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-4 py-3.5 text-[14px] sm:text-[15px] text-white placeholder-[#666666] focus:outline-none focus:border-[#703BF7] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Phone, Inquiry Type, How Did You Hear About Us? */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] sm:text-[15px] font-semibold text-white">
                  Phone
                </label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-4 py-3.5 text-[14px] sm:text-[15px] text-white placeholder-[#666666] focus:outline-none focus:border-[#703BF7] transition-colors"
                />
              </div>

              {/* Inquiry Type */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] sm:text-[15px] font-semibold text-white">
                  Inquiry Type
                </label>
                <div className="relative">
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-4 py-3.5 text-[14px] sm:text-[15px] text-white placeholder-[#666666] appearance-none focus:outline-none focus:border-[#703BF7] transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="text-[#666666]">Select Inquiry Type</option>
                    <option value="buying" className="bg-[#1A1A1A] text-white">Buying Property</option>
                    <option value="selling" className="bg-[#1A1A1A] text-white">Selling Property</option>
                    <option value="renting" className="bg-[#1A1A1A] text-white">Renting Property</option>
                    <option value="investment" className="bg-[#1A1A1A] text-white">Investment Opportunity</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#999999]">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* How Did You Hear About Us? */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] sm:text-[15px] font-semibold text-white">
                  How Did You Hear About Us?
                </label>
                <div className="relative">
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-4 py-3.5 text-[14px] sm:text-[15px] text-white placeholder-[#666666] appearance-none focus:outline-none focus:border-[#703BF7] transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="text-[#666666]">Select</option>
                    <option value="social" className="bg-[#1A1A1A] text-white">Social Media</option>
                    <option value="search" className="bg-[#1A1A1A] text-white">Search Engine</option>
                    <option value="friend" className="bg-[#1A1A1A] text-white">Friend / Colleague</option>
                    <option value="advertisement" className="bg-[#1A1A1A] text-white">Advertisement</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#999999]">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Message Textarea */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] sm:text-[15px] font-semibold text-white">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message here..."
                className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[8px] p-4 text-[14px] sm:text-[15px] text-white placeholder-[#666666] focus:outline-none focus:border-[#703BF7] transition-colors resize-none h-[130px] sm:h-[150px]"
              />
            </div>

            {/* Bottom Row: Checkbox + Submit Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              
              {/* Custom Checkbox + Consent Text */}
              <div 
                onClick={() => setAgreed(!agreed)}
                className="flex items-center gap-3 cursor-pointer select-none group"
              >
                <div className={`w-5 h-5 bg-[#1A1A1A] border border-[#262626] rounded-[4px] flex items-center justify-center transition-colors shrink-0 ${agreed ? 'border-[#703BF7] bg-[#703BF7]' : 'group-hover:border-[#444]'}`}>
                  {agreed && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                </div>
                <span className="text-[13px] sm:text-[14px] font-medium text-[#999999]">
                  I agree with{" "}
                  <a href="#" className="text-white underline hover:text-[#703BF7]">Terms of Use</a>
                  {" "}and{" "}
                  <a href="#" className="text-white underline hover:text-[#703BF7]">Privacy Policy</a>
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#703BF7] hover:bg-[#5e31d4] text-white font-medium text-[14px] sm:text-[15px] py-3.5 px-8 rounded-[8px] transition-all shadow-md text-center"
              >
                Send Your Message
              </button>

            </div>

          </form>
        </div>

      </div>
    </section>
  );
}