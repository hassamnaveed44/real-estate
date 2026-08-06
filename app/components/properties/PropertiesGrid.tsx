// src/app/components/properties/PropertiesGrid.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Building2, ArrowLeft, ArrowRight } from "lucide-react";

const allProperties = [
  {
    id: "1",
    category: "Coastal Escapes - Where Waves Beckon",
    title: "Seaside Serenity Villa",
    description: "Wake up to the soothing melody of waves. This beachfront villa offers...",
    beds: "04-Bedroom",
    baths: "03-Bathroom",
    type: "Villa",
    price: "$1,250,000",
    image: "/images/house1.png",
  },
  {
    id: "2",
    category: "Urban Oasis - Life in the Heart of the City",
    title: "Metropolitan Haven",
    description: "Immerse yourself in the energy of the city. This modern apartment in the heart...",
    beds: "02-Bedroom",
    baths: "02-Bathroom",
    type: "Apartment",
    price: "$650,000",
    image: "/images/house2.png",
  },
  {
    id: "3",
    category: "Countryside Charm - Escape to Nature's Embrace",
    title: "Rustic Retreat Cottage",
    description: "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...",
    beds: "03-Bedroom",
    baths: "02-Bathroom",
    type: "Cottage",
    price: "$350,000",
    image: "/images/house3.png",
  },
  {
    id: "4",
    category: "Urban Skyline Penthouse",
    title: "Urban Skyline Penthouse",
    description: "Luxurious penthouse featuring open spaces and high-end modern finishes.",
    beds: "05-Bedroom",
    baths: "05-Bathroom",
    type: "Penthouse",
    price: "$1,250,000",
    image: "/images/house1.png",
  },
  {
    id: "5",
    category: "Suburban Family House",
    title: "Suburban Family House",
    description: "Spacious backyard, modern kitchen, and quiet family-friendly atmosphere.",
    beds: "04-Bedroom",
    baths: "03-Bathroom",
    type: "House",
    price: "$620,000",
    image: "/images/house2.png",
  },
  {
    id: "6",
    category: "Minimalist Glass Residence",
    title: "Minimalist Glass Residence",
    description: "Architectural masterpiece surrounded by lush greenery and nature.",
    beds: "03-Bedroom",
    baths: "03-Bathroom",
    type: "Villa",
    price: "$890,000",
    image: "/images/house3.png",
  },
];

export default function PropertiesGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allProperties.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentProperties = allProperties.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

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
            Discover a World of Possibilities
          </h2>

          <p className="w-full max-w-[1347px] text-[15px] sm:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-[150%] tracking-[0px]">
            Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.
          </p>
        </div>

        {/* Property Cards Grid (3 across) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]">
          {currentProperties.map((property) => (
            <div
              key={property.id}
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-6 hover:border-[#703BF7] transition-all shadow-sm"
            >
              <div className="space-y-5">
                {/* Image */}
                <div className="relative w-full h-[211px] sm:h-[250px] lg:h-[318px] rounded-[10px] overflow-hidden bg-[#1A1A1A]">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Category Pill */}
                <div className="inline-block max-w-full truncate bg-[#1A1A1A] border border-[#262626] rounded-[28px] px-3.5 py-2">
                  <span className="text-[12px] sm:text-[13px] lg:text-[15px] font-medium text-white truncate block">
                    {property.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-[20px] lg:text-[24px] font-semibold text-white tracking-wide">
                    {property.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] lg:text-[18px] font-medium text-[#999999] leading-[150%] line-clamp-2">
                    {property.description}{" "}
                    <Link href={`/properties/${property.id}`} className="text-white underline underline-offset-4 hover:text-[#703BF7] transition inline-block ml-1">
                      Read More
                    </Link>
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[28px] bg-[#1A1A1A] border border-[#262626] text-[12px] lg:text-[13px] font-medium text-white whitespace-nowrap">
                    <Bed className="w-3.5 h-3.5 text-[#703BF7] shrink-0" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[28px] bg-[#1A1A1A] border border-[#262626] text-[12px] lg:text-[13px] font-medium text-white whitespace-nowrap">
                    <Bath className="w-3.5 h-3.5 text-[#703BF7] shrink-0" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[28px] bg-[#1A1A1A] border border-[#262626] text-[12px] lg:text-[13px] font-medium text-white whitespace-nowrap">
                    <Building2 className="w-3.5 h-3.5 text-[#703BF7] shrink-0" />
                    <span>{property.type}</span>
                  </div>
                </div>
              </div>

              {/* Price Block & Action Button */}
              <div className="pt-5 border-t border-[#262626] flex items-center justify-between gap-3">
                <div className="shrink-0">
                  <p className="text-[12px] sm:text-[13px] lg:text-[16px] font-medium text-[#999999]">Price</p>
                  <p className="text-[16px] sm:text-[18px] lg:text-[22px] font-semibold text-white">{property.price}</p>
                </div>

                <Link
                  href={`/properties/${property.id}`}
                  className="px-3 py-2 sm:px-3.5 sm:py-2.5 lg:px-4 lg:py-3 rounded-[10px] bg-[#703BF7] text-white font-medium text-[11px] sm:text-[12px] lg:text-[14px] hover:bg-[#5e31d4] transition shadow-lg text-center whitespace-nowrap shrink-0"
                >
                  View Property Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Row */}
        <div className="pt-6 border-t border-[#262626] flex items-center justify-between">
          <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium">
            <span className="text-white font-semibold">0{currentIndex + 1}</span>
            <span className="text-[#999999]"> of 0{totalPages}</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={handlePrev}
              className="w-11 h-11 sm:w-[50px] sm:h-[50px] rounded-full border border-[#262626] bg-[#141414] hover:border-[#703BF7] flex items-center justify-center text-white transition p-[10px]"
              aria-label="Previous properties"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 sm:w-[50px] sm:h-[50px] rounded-full border border-[#262626] bg-[#141414] hover:border-[#703BF7] flex items-center justify-center text-white transition p-[10px]"
              aria-label="Next properties"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}