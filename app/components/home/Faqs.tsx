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
  {
    id: "7",
    question: "What makes Estatein different from other agencies?",
    answer: "Our commitment to client satisfaction, extensive market knowledge, and cutting-edge tech set us apart.",
  },
  {
    id: "8",
    question: "How often are new property listings updated?",
    answer: "Our database is updated in real-time to ensure you see the freshest properties available.",
  },
  {
    id: "9",
    question: "Can Estatein help with property management after purchase?",
    answer: "Yes, we offer comprehensive property management services for investors and homeowners.",
  },
  {
    id: "10",
    question: "What is the typical timeline for closing a property deal?",
    answer: "Closing timelines vary depending on financing and paperwork, typically ranging from 30 to 45 days.",
  },
];

export default function Faqs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = allFaqs.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentFaq = allFaqs[currentIndex];

  return (
    <section className="w-full bg-[#141414] text-white py-12 lg:py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1360px] mx-auto space-y-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-1">
              <span className="text-gray-600 text-sm">✦</span>
              <span className="text-gray-600 text-xs opacity-75">✦</span>
              <span className="text-gray-600 text-[10px] opacity-50">✦</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
              Find answers to common questions about Estatein&apos;s services, property listings, and the real estate process. We&apos;re here to provide clarity and assist you every step of the way.
            </p>
          </div>

          {/* Desktop View All button */}
          <Link
            href="/faqs"
            className="hidden lg:inline-flex px-5 py-3 rounded-[10px] bg-[#1A1A1A] border border-[#262626] text-white font-medium text-[14px] hover:bg-[#222222] transition whitespace-nowrap shadow-sm"
          >
            View All FAQ&apos;s
          </Link>
        </div>

        {/* Desktop Grid View (3 across) */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {[0, 1, 2].map((offset) => {
            const faq = allFaqs[(currentIndex + offset) % allFaqs.length];
            return (
              <div
                key={faq.id}
                className="bg-[#141414] border border-[#262626] rounded-[12px] p-6 flex flex-col justify-between space-y-4 hover:border-[#703BF7] transition-all shadow-md min-h-[220px]"
              >
                <div className="space-y-2.5">
                  <h3 className="text-[17px] lg:text-[18px] font-semibold text-white tracking-wide leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-[13px] lg:text-[14px] font-medium text-[#999999] leading-relaxed line-clamp-3">
                    {faq.answer}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/faqs/${faq.id}`}
                    className="inline-flex px-4 py-2 rounded-[8px] bg-[#1A1A1A] border border-[#262626] text-white font-medium text-[13px] hover:bg-[#222222] hover:border-[#703BF7] transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Single Card View */}
        <div className="block lg:hidden space-y-5">
          <div className="bg-[#141414] border border-[#262626] rounded-[12px] p-5 flex flex-col justify-between space-y-4 min-h-[200px]">
            <div className="space-y-2.5">
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-white tracking-wide leading-snug">
                {currentFaq.question}
              </h3>
              <p className="text-[13px] sm:text-[14px] font-medium text-[#999999] leading-relaxed">
                {currentFaq.answer}
              </p>
            </div>

            <div>
              <Link
                href={`/faqs/${currentFaq.id}`}
                className="inline-flex px-4 py-2 rounded-[8px] bg-[#1A1A1A] border border-[#262626] text-white font-medium text-[13px] hover:bg-[#222222] transition"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Mobile Bottom Row */}
          <div className="pt-4 border-t border-[#262626] flex items-center justify-between gap-3">
            <Link
              href="/faqs"
              className="px-4 py-2 rounded-[8px] bg-[#1A1A1A] border border-[#262626] text-white font-medium text-[13px] hover:bg-[#222222] transition whitespace-nowrap"
            >
              View All FAQ&apos;s
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#222222] flex items-center justify-center text-white transition shadow-sm"
                aria-label="Previous FAQs"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <span className="text-[13px] font-medium whitespace-nowrap">
                <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="text-[#999999]"> of {String(totalPages).padStart(2, '0')}</span>
              </span>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#222222] flex items-center justify-center text-white transition shadow-sm"
                aria-label="Next FAQs"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Pagination Row */}
        <div className="hidden lg:flex pt-5 border-t border-[#262626] items-center justify-between">
          <div className="text-[14px] lg:text-[15px] font-medium">
            <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-[#999999]"> of {String(totalPages).padStart(2, '0')}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#222222] flex items-center justify-center text-white transition shadow-sm"
              aria-label="Previous FAQs"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#222222] flex items-center justify-center text-white transition shadow-sm"
              aria-label="Next FAQs"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}