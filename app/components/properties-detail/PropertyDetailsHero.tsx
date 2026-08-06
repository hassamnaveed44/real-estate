"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Bed, 
  Bath, 
  Maximize2, 
  CheckCircle2 
} from "lucide-react";

interface PropertyDetailsHeroProps {
  property?: {
    title: string;
    location: string;
    price: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    images: string[];
    amenities: string[];
  };
}

export default function PropertyDetailsHero({ property }: PropertyDetailsHeroProps) {
  // Fallback default mock data matching "Seaside Serenity Villa" spec if no props are passed
  const data = property || {
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
    price: "$1,250,000",
    description: "Discover coastal luxury at Seaside Serenity Villa. Wake up to the soothing melody of waves and breathtaking panoramic views of the ocean. This exquisite property features modern architectural design, premium finishes, sprawling outdoor entertainment areas, and direct private beach access. Perfect as an exclusive sanctuary or a high-end investment.",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 Square Feet",
    images: [
      "/images/propertyhero1.png",
      "/images/propertyhero2.png",
      "/images/propertyhero1.png",
      "/images/propertyhero2.png",
      "/images/propertyhero1.png",
      "/images/propertyhero2.png",
      "/images/propertyhero1.png",
      "/images/propertyhero2.png",
      "/images/propertyhero2.png",
    ],
    amenities: [
      "Private Beach Access",
      "Infinity Swimming Pool",
      "State-of-the-Art Smart Home System",
      "Spacious Outdoor Terraces",
      "Custom Italian Kitchen",
      "Secure Gated Community with 24/7 Security"
    ]
  };

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
  };

  // Get current and secondary image for the 2-image desktop view
  const currentImg = data.images[activeImageIndex] || data.images[0];
  const nextImg = data.images[(activeImageIndex + 1) % data.images.length] || data.images[1];

  return (
    <section className="w-full bg-[#141414] py-[40px] px-4 sm:px-6 lg:px-[162px] font-['Urbanist'] text-white">
      {/* Top Title & Price Row */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <h1 className="text-[20px] sm:text-[24px] lg:text-[30px] font-semibold tracking-wide text-white">
            {data.title}
          </h1>
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3 py-1.5 w-fit">
            <MapPin className="w-4 h-4 text-[#703BF7]" />
            <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium whitespace-nowrap">
              {data.location}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:items-end">
          <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">Price</span>
          <span className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-white">
            {data.price}
          </span>
        </div>
      </div>

      {/* Gallery Container Card */}
      <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-4 sm:p-6 lg:p-[50px] flex flex-col gap-6 lg:gap-[30px] mb-8">
        
        {/* Thumbnail Strip */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none bg-[#141414] p-3 sm:p-[14px] lg:p-[20px] rounded-[12px]">
          {data.images.map((img, idx) => {
            const isSelected = idx === activeImageIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative flex-shrink-0 h-[50px] sm:h-[65px] lg:h-[94px] w-[70px] sm:w-[90px] lg:w-[130px] rounded-[8px] overflow-hidden transition-all ${
                  isSelected ? "border-2 border-[#703BF7]" : "border border-[#262626]"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
                {!isSelected && (
                  <div className="absolute inset-0 bg-[rgba(10,10,10,0.5)] transition-opacity" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Images Display (2 side-by-side on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[30px]">
          <div className="relative h-[220px] sm:h-[350px] lg:h-[583px] w-full rounded-[10px] overflow-hidden border border-[#262626]">
            <Image
              src={currentImg}
              alt="Main property view 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative hidden lg:block h-[583px] w-full rounded-[10px] overflow-hidden border border-[#262626]">
            <Image
              src={nextImg}
              alt="Main property view 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Carousel Navigation Bar */}
        <div className="flex items-center justify-between bg-[#141414] rounded-[100px] p-2 sm:p-2.5 lg:p-[10px] px-6">
          <button
            onClick={handlePrev}
            className="p-2 sm:p-2.5 lg:p-3 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#262626] text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 lg:w-[30px] lg:h-[30px]" />
          </button>

          {/* Progress Indicator Segments */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {data.images.map((_, idx) => (
              <div
                key={idx}
                className={`h-[5px] w-6 sm:w-10 lg:w-12 rounded-[60px] transition-colors ${
                  idx === activeImageIndex ? "bg-[#703BF7]" : "bg-[#4D4D4D]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 sm:p-2.5 lg:p-3 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#262626] text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 lg:w-[30px] lg:h-[30px]" />
          </button>
        </div>

      </div>

      {/* Description and Amenities Cards Grid */}
     
    </section>
  );
}