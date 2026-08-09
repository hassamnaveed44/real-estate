// src/components/home/FeaturedListings.tsx
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

interface FeaturedListingsProps {
  sanityProperties?: SanityProperty[];
  soldIds?: string[];
}

export default function FeaturedListings({ sanityProperties, soldIds = [] }: FeaturedListingsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const fallbackProperties = defaultProperties.filter(
    (p) => !soldIds.includes(p.id) && !soldIds.includes(p.title)
  );

  // Use dynamic Sanity properties if available, otherwise seamlessly fallback to default mock array
  const displayProperties =
    sanityProperties && sanityProperties.length > 0
      ? sanityProperties.map((p, idx) => ({
          id: p._id,
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
    <section className="w-full bg-[#141414] text-white py-12 lg:py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1360px] mx-auto space-y-10">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="space-y-1.5 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight text-white">
              Featured Properties
            </h2>
            <p className="text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.
            </p>
          </div>

          <Link
            href="/properties"
            className="px-5 py-3 rounded-[10px] bg-[#1A1A1A] border border-[#262626] text-white font-medium text-[14px] hover:bg-[#222222] transition whitespace-nowrap self-start md:self-auto shadow-sm"
          >
            View All Properties
          </Link>
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

                {/* Title & Description */}
                <div className="space-y-1">
                  <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-semibold text-white tracking-tight">
                    {property.title}
                  </h3>
                  <p className="text-[12px] sm:text-[12.5px] lg:text-[13px] font-medium text-[#999999] leading-snug line-clamp-2">
                    {property.description}{" "}
                    <button className="text-white underline underline-offset-4 hover:text-[#A685FA] transition inline-block ml-1">
                      Read More
                    </button>
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A1A1A] border border-[#262626] text-[11px] sm:text-[11.5px] font-medium text-white">
                    <Bed className="w-3 h-3 text-[#703BF7]" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A1A1A] border border-[#262626] text-[11px] sm:text-[11.5px] font-medium text-white">
                    <Bath className="w-3 h-3 text-[#703BF7]" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A1A1A] border border-[#262626] text-[11px] sm:text-[11.5px] font-medium text-white">
                    <Building2 className="w-3 h-3 text-[#703BF7]" />
                    <span>{property.type}</span>
                  </div>
                </div>
              </div>

              {/* Price Block & Action Button */}
              <div className="pt-3 border-t border-[#262626] flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-medium text-[#999999]">Price</p>
                  <p className="text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-white tracking-tight">{property.price}</p>
                </div>

                <Link
                  href={`/propertydetails/${property.id}`}
                  className="px-3.5 py-2 rounded-[6px] bg-[#703BF7] hover:bg-[#5e31d4] text-white font-medium text-[12px] sm:text-[12.5px] transition shadow-md text-center whitespace-nowrap"
                >
                  View Property Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Row */}
        <div className="pt-5 border-t border-[#262626] flex items-center justify-between">
          <div className="text-[14px] lg:text-[15px] font-medium">
            <span className="text-white">0{currentIndex + 1}</span>
            <span className="text-[#999999]"> of 0{totalPages}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#222222] flex items-center justify-center text-white transition shadow-sm"
              aria-label="Previous properties"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#262626] bg-[#1A1A1A] hover:bg-[#222222] flex items-center justify-center text-white transition shadow-sm"
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