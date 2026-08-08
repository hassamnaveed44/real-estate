"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

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

export default function PropertyDetailsHero({
  property,
}: PropertyDetailsHeroProps) {
  const data = property || {
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
    price: "$1,250,000",
    description:
      "Discover coastal luxury at Seaside Serenity Villa. Wake up to the soothing melody of waves and breathtaking panoramic views of the ocean. This exquisite property features modern architectural design, premium finishes, sprawling outdoor entertainment areas, and direct private beach access. Perfect as an exclusive sanctuary or a high-end investment.",
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
      "Secure Gated Community with 24/7 Security",
    ],
  };
  const [showBuyPopup, setShowBuyPopup] = useState(false);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrev = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? data.images.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveImageIndex((prev) =>
      prev === data.images.length - 1 ? 0 : prev + 1,
    );
  };

  const currentImg = data.images[activeImageIndex] || data.images[0];
  const nextImg =
    data.images[(activeImageIndex + 1) % data.images.length] || data.images[1];

  return (
    <section className="w-full bg-[#141414] py-[40px] px-4 sm:px-6 lg:px-[162px] font-['Urbanist'] text-white">
      {/* Top Title & Price Row */}
      <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-3">
          <h1 className="text-[22px] sm:text-[24px] lg:text-[30px] font-semibold tracking-wide text-white">
            {data.title}
          </h1>
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3 py-1.5 w-fit">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium whitespace-nowrap">
              {data.location}
            </span>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#262626]">
          <span className="text-[14px] sm:text-[16px] text-[#999999] font-medium">
            Price
          </span>
          <span className="text-[20px] sm:text-[20px] lg:text-[24px] font-semibold text-white">
            {data.price}
          </span>
          <button
            type="button"
            onClick={() => setShowBuyPopup(true)}
            className="flex-shrink-0 px-5 py-3 rounded-[8px] bg-[#703BF7] hover:bg-[#5F2FE0] active:scale-95 text-white text-[14px] sm:text-[16px] font-medium transition-all duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Gallery Container Card */}
      <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-4 sm:p-6 lg:p-[50px] flex flex-col gap-6 lg:gap-[30px] mb-8">
        {/* Main Images Display (Reordered: Big Image first on mobile via flex-col-reverse on mobile or DOM reordering) */}
        <div className="flex flex-col-reverse lg:flex-col gap-6 lg:gap-[30px]">
          {/* Thumbnail Strip (Moved below main image on small screens) */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none bg-[#141414] p-3 sm:p-[14px] lg:p-[20px] rounded-[12px]">
            {data.images.map((img, idx) => {
              const isSelected = idx === activeImageIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 h-[50px] sm:h-[65px] lg:h-[94px] w-[70px] sm:w-[90px] lg:w-[130px] rounded-[8px] overflow-hidden transition-all ${
                    isSelected
                      ? "border-2 border-[#703BF7]"
                      : "border border-[#262626]"
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

          {/* Main Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[30px]">
            <div className="relative h-[250px] sm:h-[350px] lg:h-[583px] w-full rounded-[10px] overflow-hidden border border-[#262626]">
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
        </div>

        {/* Carousel Navigation Bar */}
        <div className="flex items-center justify-between w-full max-w-[296px] h-[78px] bg-[#141414] border border-[#262626] rounded-[100px] p-[10px] gap-[10px] mx-auto">
          <button
            onClick={handlePrev}
            style={{ width: "58px", height: "58px", borderRadius: "69px" }}
            className="flex items-center justify-center border border-[#262626] bg-[#1A1A1A] hover:bg-[#262626] text-white transition-colors flex-shrink-0 p-[14px]"
            aria-label="Previous image"
          >
            <ChevronLeft
              style={{ width: "30px", height: "30px" }}
              className="text-white"
            />
          </button>

          <div className="flex items-center gap-[4px] w-[140px] h-[5px] justify-center">
            {data.images.map((_, idx) => (
              <div
                key={idx}
                className={`h-[5px] flex-1 rounded-[60px] transition-colors ${
                  idx === activeImageIndex ? "bg-[#703BF7]" : "bg-[#4D4D4D]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            style={{ width: "58px", height: "58px", borderRadius: "69px" }}
            className="flex items-center justify-center border border-[#262626] bg-[#1A1A1A] hover:bg-[#262626] text-white transition-colors flex-shrink-0 p-[14px]"
            aria-label="Next image"
          >
            <ChevronRight
              style={{ width: "30px", height: "30px" }}
              className="text-white"
            />
          </button>
        </div>
      </div>
      {showBuyPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-[450px] rounded-[12px] border border-[#262626] bg-[#1A1A1A] p-6 sm:p-8 shadow-2xl">
            <h2 className="text-[22px] sm:text-[24px] font-semibold text-white">
              Interested in this property?
            </h2>

            <p className="mt-3 text-[14px] sm:text-[16px] leading-6 text-[#999999]">
              You are interested in purchasing{" "}
              <span className="text-white font-medium">{data.title}</span>.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowBuyPopup(false)}
                className="rounded-[8px] border border-[#262626] bg-[#141414] px-5 py-3 text-[14px] sm:text-[16px] font-medium text-white transition-colors hover:bg-[#262626]"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() => setShowBuyPopup(false)}
                className="rounded-[8px] bg-[#703BF7] px-5 py-3 text-[14px] sm:text-[16px] font-medium text-white transition-colors hover:bg-[#5F2FE0]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
