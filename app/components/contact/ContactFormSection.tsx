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
    <section className="w-full bg-[#141414] py-[80px] md:py-[100px] px-4 sm:px-6 md:px-16 lg:px-[162px] border-b border-[#262626]">
      <div className="max-w-[1596px] mx-auto flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">
        
        {/* Text Container (Heading + Paragraph with Decorative Sparkles) */}
        <div className="flex flex-col gap-4 lg:pr-[300px] relative">
          {/* Decorative Sparkle Icons */}
          <div className="flex items-center gap-1.5 text-gray-600 mb-[-4px]">
            <span className="text-[12px]">✦</span>
            <span className="text-[16px]">✦</span>
            <span className="text-[20px]">✦</span>
          </div>

          <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-semibold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-relaxed">
            We&apos;re excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you&apos;re a prospective client, partner, or simply curious about our services, we&apos;re here to answer your questions and provide the assistance you need.
          </p>
        </div>

        {/* Form Card Container */}
        <div className="bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-8 md:p-12 lg:p-[100px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]">
            
            {/* Row 1: First Name, Last Name, Email */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[50px]">
              {/* First Name */}
              <div className="flex flex-col gap-[10px] lg:gap-[16px]">
                <label className="text-[16px] lg:text-[20px] font-semibold text-white whitespace-nowrap">
                  First Name
                </label>
                <input 
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[6px] lg:rounded-[8px] px-5 py-[16px] lg:py-[24px] text-[14px] lg:text-[18px] text-white placeholder-[#666666] focus:outline-none focus:border-[#703BF7] transition-colors"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-[10px] lg:gap-[16px]">
                <label className="text-[16px] lg:text-[20px] font-semibold text-white whitespace-nowrap">
                  Last Name
                </label>
                <input 
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[6px] lg:rounded-[8px] px-5 py-[16px] lg:py-[24px] text-[14px] lg:text-[18px] text-white placeholder-[#666666] focus:outline-none focus:border-[#703BF7] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[10px] lg:gap-[16px]">
                <label className="text-[16px] lg:text-[20px] font-semibold text-white whitespace-nowrap">
                  Email
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[6px] lg:rounded-[8px] px-5 py-[16px] lg:py-[24px] text-[14px] lg:text-[18px] text-white placeholder-[#666666] focus:outline-none focus:border-[#703BF7] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Phone, Inquiry Type, How Did You Hear About Us? */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[50px]">
              {/* Phone */}
              <div className="flex flex-col gap-[10px] lg:gap-[16px]">
                <label className="text-[16px] lg:text-[20px] font-semibold text-white whitespace-nowrap">
                  Phone
                </label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[6px] lg:rounded-[8px] px-5 py-[16px] lg:py-[24px] text-[14px] lg:text-[18px] text-white placeholder-[#666666] focus:outline-none focus:border-[#703BF7] transition-colors"
                />
              </div>

              {/* Inquiry Type */}
              <div className="flex flex-col gap-[10px] lg:gap-[16px]">
                <label className="text-[16px] lg:text-[20px] font-semibold text-white whitespace-nowrap">
                  Inquiry Type
                </label>
                <div className="relative">
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[6px] lg:rounded-[8px] px-5 py-[16px] lg:py-[24px] text-[14px] lg:text-[18px] text-white placeholder-[#666666] appearance-none focus:outline-none focus:border-[#703BF7] transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="text-[#666666]">Select Inquiry Type</option>
                    <option value="buying" className="bg-[#1A1A1A] text-white">Buying Property</option>
                    <option value="selling" className="bg-[#1A1A1A] text-white">Selling Property</option>
                    <option value="renting" className="bg-[#1A1A1A] text-white">Renting Property</option>
                    <option value="investment" className="bg-[#1A1A1A] text-white">Investment Opportunity</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                </div>
              </div>

              {/* How Did You Hear About Us? */}
              <div className="flex flex-col gap-[10px] lg:gap-[16px]">
                <label className="text-[16px] lg:text-[20px] font-semibold text-white whitespace-nowrap">
                  How Did You Hear About Us?
                </label>
                <div className="relative">
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[6px] lg:rounded-[8px] px-5 py-[16px] lg:py-[24px] text-[14px] lg:text-[18px] text-white placeholder-[#666666] appearance-none focus:outline-none focus:border-[#703BF7] transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="text-[#666666]">Select</option>
                    <option value="social" className="bg-[#1A1A1A] text-white">Social Media</option>
                    <option value="search" className="bg-[#1A1A1A] text-white">Search Engine</option>
                    <option value="friend" className="bg-[#1A1A1A] text-white">Friend / Colleague</option>
                    <option value="advertisement" className="bg-[#1A1A1A] text-white">Advertisement</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Message Textarea */}
            <div className="flex flex-col gap-[10px] lg:gap-[16px]">
              <label className="text-[16px] lg:text-[20px] font-semibold text-white whitespace-nowrap">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message here..."
                className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[6px] lg:rounded-[8px] p-5 text-[14px] lg:text-[18px] text-white placeholder-[#666666] focus:outline-none focus:border-[#703BF7] transition-colors resize-none h-[120px] md:h-[150px] lg:h-[170px]"
              />
            </div>

            {/* Bottom Row: Checkbox + Submit Button */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-4">
              
              {/* Custom Checkbox + Consent Text */}
              <div 
                onClick={() => setAgreed(!agreed)}
                className="flex items-center gap-3 cursor-pointer select-none group"
              >
                <div className={`w-[24px] h-[24px] lg:w-[28px] lg:h-[28px] bg-[#1A1A1A] border border-[#262626] rounded-[4px] flex items-center justify-center transition-colors ${agreed ? 'border-[#703BF7] bg-[#703BF7]/10' : 'group-hover:border-[#444]'}`}>
                  {agreed && <Check className="w-4 h-4 text-[#703BF7]" />}
                </div>
                <span className="text-[14px] lg:text-[18px] font-medium text-[#999999]">
                  I agree with{" "}
                  <a href="#" className="text-[#999999] underline hover:text-[#703BF7]">Terms of Use</a>
                  {" "}and{" "}
                  <a href="#" className="text-[#999999] underline hover:text-[#703BF7]">Privacy Policy</a>
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full lg:w-auto bg-[#703BF7] hover:bg-[#5e31d4] text-white font-medium text-[14px] lg:text-[18px] py-[14px] lg:py-[18px] px-[34px] lg:px-[46px] rounded-[6px] lg:rounded-[10px] transition-all shadow-lg text-center"
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