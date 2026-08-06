// src/components/home/Testimonials.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const allTestimonials = [
  {
    id: "1",
    title: "Exceptional Service!",
    content: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    clientName: "Wade Warren",
    clientLocation: "USA, California",
    clientImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "2",
    title: "Efficient and Reliable",
    content: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    clientName: "Emelie Thomson",
    clientLocation: "USA, Florida",
    clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "3",
    title: "Trusted Advisors",
    content: "The Estatein team guided us through the entire buying process. Their knowledge and commitment were unmatched. Thank you for your amazing support!",
    clientName: "John Doe",
    clientLocation: "USA, New York",
    clientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "4",
    title: "Smooth & Transparent",
    content: "Finding an investment property can be stressful, but Estatein simplified every step of the transaction with unmatched clarity.",
    clientName: "Sarah Johnson",
    clientLocation: "USA, Texas",
    clientImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "5",
    title: "Extremely Professional",
    content: "From the initial consultation to closing day, the support was phenomenal. Truly a premier real estate agency experience.",
    clientName: "Michael Brown",
    clientLocation: "USA, Nevada",
    clientImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "6",
    title: "Beyond Expectations",
    content: "They went above and beyond to secure our commercial office lease. Their negotiation expertise saved us valuable time and money.",
    clientName: "Jessica Taylor",
    clientLocation: "USA, Chicago",
    clientImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allTestimonials.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentReviews = allTestimonials.slice(
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
              What Our Clients Say
            </h2>
            <p className="text-[15px] lg:text-[17px] font-medium text-[#999999] leading-relaxed">
              Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate journey.
            </p>
          </div>

          <Link
            href="/testimonials"
            className="px-6 py-[16px] rounded-[10px] bg-[#1A1A1A] border border-[#262626] text-white font-medium text-[15px] hover:bg-[#222222] transition whitespace-nowrap self-start md:self-auto shadow-sm"
          >
            View All Testimonials
          </Link>
        </div>

        {/* Testimonial Cards Row (3 across) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-6 lg:p-8 flex flex-col justify-between space-y-6 hover:border-[#703BF7] transition-all shadow-md"
            >
              {/* Star Rating Icons */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full bg-[#1A1A1A] border border-[#262626] flex items-center justify-center"
                  >
                    <Star className="w-5 h-5 fill-[#FFC700] text-[#FFC700]" />
                  </div>
                ))}
              </div>

              {/* Review Text Block */}
              <div className="space-y-3">
                <h3 className="text-[20px] lg:text-[22px] font-semibold text-white tracking-wide">
                  {review.title}
                </h3>
                <p className="text-[15px] lg:text-[16px] font-medium text-[#999999] leading-relaxed line-clamp-4">
                  {review.content}
                </p>
              </div>

              {/* Reviewer Info Row */}
              <div className="pt-5 border-t border-[#262626] flex items-center gap-4">
                <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden border border-[#262626] bg-[#1A1A1A] flex-shrink-0">
                  <Image
                    src={review.clientImage}
                    alt={review.clientName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold text-white">
                    {review.clientName}
                  </h4>
                  <p className="text-[14px] font-medium text-[#999999]">
                    {review.clientLocation}
                  </p>
                </div>
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
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#222222] flex items-center justify-center text-white transition shadow-sm"
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}