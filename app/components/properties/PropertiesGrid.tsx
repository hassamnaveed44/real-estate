// src/app/components/properties/PropertiesGrid.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Building2, ArrowLeft, ArrowRight } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import type { SanityProperty } from "@/sanity/lib/queries";

const defaultProperties = [
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

interface PropertiesGridProps {
  sanityProperties?: SanityProperty[];
  soldIds?: string[];
}

export default function PropertiesGrid({ sanityProperties, soldIds = [] }: PropertiesGridProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const fallbackProperties = defaultProperties.filter(
    (p) => !soldIds.includes(p.id) && !soldIds.includes(p.title)
  );

  const displayProperties =
    sanityProperties && sanityProperties.length > 0
      ? sanityProperties.map((p, idx) => ({
          id: p._id,
          category: `${p.propertyType || "Property"} - ${p.location || "Prime Location"}`,
          title: p.title,
          description: p.description,
          beds: p.bedrooms || "04-Bedroom",
          baths: p.bathrooms || "03-Bathroom",
          type: p.propertyType || "Villa",
          price: typeof p.price === "number" ? `$${p.price.toLocaleString()}` : String(p.price),
          image: p.images?.[0] ? urlForImage(p.images[0])?.url() || "/images/house1.png" : defaultProperties[idx % defaultProperties.length].image,
        }))
      : fallbackProperties;

  const totalPages = Math.max(1, Math.ceil(displayProperties.length / itemsPerPage));

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentProperties = displayProperties.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="w-full bg-[#141414] text-white py-12 lg:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-8 lg:gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2.5">
          <div className="flex items-center gap-1 text-gray-700">
            <span className="text-lg">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-sm">✦</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight leading-[1.2] text-white">
            Discover a World of Possibilities
          </h2>

          <p className="w-full max-w-[1200px] text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
            Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.
          </p>
        </div>

        {/* Property Cards Grid (3 across) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {currentProperties.map((property) => (
            <div
              key={property.id}
              className="bg-[#141414] border border-[#262626] rounded-[12px] p-4 sm:p-4.5 flex flex-col justify-between space-y-3 hover:border-[#703BF7] transition-all shadow-md group"
            >
              <div className="space-y-3">
                {/* Horizontal Property Image */}
                <div className="relative w-full h-[120px] sm:h-[125px] lg:h-[130px] rounded-[8px] overflow-hidden bg-[#1A1A1A]">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Category Pill */}
                <div className="inline-block max-w-full truncate bg-[#1A1A1A] border border-[#262626] rounded-full px-2.5 py-0.5">
                  <span className="text-[11px] sm:text-[11.5px] font-medium text-white truncate block">
                    {property.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1">
                  <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-semibold text-white tracking-tight">
                    {property.title}
                  </h3>
                  <p className="text-[12px] sm:text-[12.5px] lg:text-[13px] font-medium text-[#999999] leading-snug line-clamp-2">
                    {property.description}{" "}
                    <Link href={`/propertydetails/${property.id}`} className="text-white underline underline-offset-4 hover:text-[#703BF7] transition inline-block ml-1">
                      Read More
                    </Link>
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A1A1A] border border-[#262626] text-[11px] sm:text-[11.5px] font-medium text-white whitespace-nowrap">
                    <Bed className="w-3 h-3 text-[#703BF7] shrink-0" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A1A1A] border border-[#262626] text-[11px] sm:text-[11.5px] font-medium text-white whitespace-nowrap">
                    <Bath className="w-3 h-3 text-[#703BF7] shrink-0" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A1A1A] border border-[#262626] text-[11px] sm:text-[11.5px] font-medium text-white whitespace-nowrap">
                    <Building2 className="w-3 h-3 text-[#703BF7] shrink-0" />
                    <span>{property.type}</span>
                  </div>
                </div>
              </div>

              {/* Price Block & Action Button */}
              <div className="pt-3 border-t border-[#262626] flex items-center justify-between gap-3">
                <div className="shrink-0">
                  <p className="text-[11px] font-medium text-[#999999]">Price</p>
                  <p className="text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-white tracking-tight">{property.price}</p>
                </div>

                <Link
                  href={`/propertydetails/${property.id}`}
                  className="px-3.5 py-2 rounded-[6px] bg-[#703BF7] hover:bg-[#5e31d4] text-white font-medium text-[12px] sm:text-[12.5px] transition shadow-md text-center whitespace-nowrap shrink-0"
                >
                  View Property Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Row */}
        <div className="pt-5 border-t border-[#262626] flex items-center justify-between">
          <div className="text-[14px] sm:text-[15px] font-medium">
            <span className="text-white font-semibold">0{currentIndex + 1}</span>
            <span className="text-[#999999]"> of 0{totalPages}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#262626] bg-[#141414] hover:border-[#703BF7] flex items-center justify-center text-white transition"
              aria-label="Previous properties"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#262626] bg-[#141414] hover:border-[#703BF7] flex items-center justify-center text-white transition"
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