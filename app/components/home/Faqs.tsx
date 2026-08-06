// src/app/components/home/Faqs.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const allFaqs = [
  {
    id: "1",
    question: "How do I search for properties on Estatein?",
    answer: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    id: "2",
    question: "What documents do I need to sell my property through Estatein?",
    answer: "Find out what documentation is required to list and sell your property with us smoothly.",
  },
  {
    id: "3",
    question: "How can I contact an Estatein agent?",
    answer: "Get in touch with our expert real estate agents to get personalized assistance and support.",
  },
  {
    id: "4",
    question: "Are there any hidden fees when buying through Estatein?",
    answer: "We believe in 100% transparency. All potential costs and service fees are outlined clearly from the start.",
  },
  {
    id: "5",
    question: "Can I schedule a virtual tour for a property?",
    answer: "Yes! Many of our listings offer immersive virtual walkthroughs so you can explore properties from anywhere.",
  },
  {
    id: "6",
    question: "What financing options are available for buyers?",
    answer: "We partner with trusted financial institutions to help you find competitive mortgage and loan rates.",
  },
];

export default function Faqs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allFaqs.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentFaqs = allFaqs.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="w-full bg-[#141414] text-white py-16 lg:py-24 px-6 sm:px-10 lg:px-16 border-t border-[#262626]">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] lg:text-[17px] font-medium text-[#999999] leading-relaxed">
              Got questions? We&apos;ve got answers. Check out our FAQ section to find valuable insights about buying, selling, and working with Estatein.
            </p>
          </div>

          <Link
            href="/faqs"
            className="px-6 py-[16px] rounded-[10px] bg-[#1A1A1A] border border-[#262626] text-white font-medium text-[15px] hover:bg-[#222222] transition whitespace-nowrap self-start md:self-auto shadow-sm"
          >
            View All FAQ&apos;s
          </Link>
        </div>

        {/* FAQ Cards Row (3 across) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-6 lg:p-8 flex flex-col justify-between space-y-6 hover:border-[#703BF7] transition-all shadow-md min-h-[300px]"
            >
              <div className="space-y-4">
                <h3 className="text-[20px] lg:text-[22px] font-semibold text-white tracking-wide leading-snug">
                  {faq.question}
                </h3>
                <p className="text-[15px] lg:text-[16px] font-medium text-[#999999] leading-relaxed line-clamp-3">
                  {faq.answer}
                </p>
              </div>

              <div>
                <Link
                  href={`/faqs/${faq.id}`}
                  className="inline-flex px-5 py-3 rounded-[10px] bg-[#1A1A1A] border border-[#262626] text-white font-medium text-[14px] hover:bg-[#222222] hover:border-[#703BF7] transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Row */}
        <div className="pt-6 border-t border-[#262626] flex items-center justify-between">
          <div className="text-[16px] lg:text-[18px] font-medium">
            <span className="text-white">0{currentIndex + 1}</span>
            <span className="text-[#999999]"> of 0{totalPages}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#222222] flex items-center justify-center text-white transition shadow-sm"
              aria-label="Previous FAQs"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#222222] flex items-center justify-center text-white transition shadow-sm"
              aria-label="Next FAQs"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}