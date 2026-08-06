// src/components/home/FeaturedListings.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Building2, ArrowLeft, ArrowRight } from "lucide-react";

const allProperties = [
  {
    id: "1",
    title: "Seaside Serenity Villa",
    description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
    beds: "04-Bedroom",
    baths: "03-Bathroom",
    type: "Villa",
    price: "$550,000",
    image: "/images/house1.png",
  },
  {
    id: "2",
    title: "Metropolitan Haven",
    description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
    beds: "02-Bedroom",
    baths: "02-Bathroom",
    type: "Apartment",
    price: "$350,000",
    image: "/images/house2.png",
  },
  {
    id: "3",
    title: "Rustic Retreat Cottage",
    description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
    beds: "03-Bedroom",
    baths: "02-Bathroom",
    type: "Cottage",
    price: "$450,000",
    image: "/images/house3.png",
  },
  {
    id: "4",
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
    title: "Minimalist Glass Residence",
    description: "Architectural masterpiece surrounded by lush greenery and nature.",
    beds: "03-Bedroom",
    baths: "03-Bathroom",
    type: "Villa",
    price: "$890,000",
    image: "/images/house3.png",
  },
];

export default function FeaturedListings() {
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
    <section className="w-full bg-[#141414] text-white py-16 lg:py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-tight text-white">
              Featured Properties
            </h2>
            <p className="text-[15px] lg:text-[17px] font-medium text-[#999999] leading-relaxed">
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click &quot;View Details&quot; for more information.
            </p>
          </div>

          <Link
            href="/properties"
            className="px-6 py-[16px] rounded-[10px] bg-[#1A1A1A] border border-[#262626] text-white font-medium text-[15px] hover:bg-[#222222] transition whitespace-nowrap self-start md:self-auto shadow-sm"
          >
            View All Properties
          </Link>
        </div>

        {/* Property Cards Grid (3 across) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProperties.map((property) => (
            <div
              key={property.id}
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-6 lg:p-8 flex flex-col justify-between space-y-5 hover:border-[#703BF7] transition-all shadow-md"
            >
              <div className="space-y-5">
                {/* Image */}
                <div className="relative w-full h-[260px] lg:h-[280px] rounded-[10px] overflow-hidden bg-[#1A1A1A]">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-[20px] lg:text-[22px] font-semibold text-white tracking-wide">
                    {property.title}
                  </h3>
                  <p className="text-[15px] lg:text-[16px] font-medium text-[#999999] leading-relaxed line-clamp-2">
                    {property.description}{" "}
                    <button className="text-white underline underline-offset-4 hover:text-[#A685FA] transition inline-block ml-1">
                      Read More
                    </button>
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[28px] bg-[#1A1A1A] border border-[#262626] text-[13px] lg:text-[14px] font-medium text-white">
                    <Bed className="w-4 h-4 text-[#703BF7]" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[28px] bg-[#1A1A1A] border border-[#262626] text-[13px] lg:text-[14px] font-medium text-white">
                    <Bath className="w-4 h-4 text-[#703BF7]" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[28px] bg-[#1A1A1A] border border-[#262626] text-[13px] lg:text-[14px] font-medium text-white">
                    <Building2 className="w-4 h-4 text-[#703BF7]" />
                    <span>{property.type}</span>
                  </div>
                </div>
              </div>

              {/* Price Block & Action Button */}
              <div className="pt-5 border-t border-[#262626] flex items-center justify-between gap-3">
                <div>
                  <p className="text-[15px] lg:text-[16px] font-medium text-[#999999]">Price</p>
                  <p className="text-[20px] lg:text-[22px] font-semibold text-white">{property.price}</p>
                </div>

                <Link
                  href={`/properties/${property.id}`}
                  className="px-4 lg:px-5 py-3.5 rounded-[10px] bg-[#703BF7] text-white font-medium text-[14px] lg:text-[15px] hover:bg-[#5e31d4] transition shadow-lg shadow-[#703BF7]/30 text-center whitespace-nowrap"
                >
                  View Property Details
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
              className="w-11 h-11 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#222222] flex items-center justify-center text-white transition shadow-sm"
              aria-label="Previous properties"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#222222] flex items-center justify-center text-white transition shadow-sm"
              aria-label="Next properties"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}