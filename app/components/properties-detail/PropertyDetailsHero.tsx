"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

import { purchaseProperty } from "@/app/actions/purchase";

interface PropertyDetailsHeroProps {
  propertyId?: string;
  isSold?: boolean;
  property?: {
    title: string;
    location: string;
    price: string;
    rawPrice?: number;
    description: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    images: string[];
    amenities: string[];
  };
}

export default function PropertyDetailsHero({
  propertyId = "1",
  isSold = false,
  property,
}: PropertyDetailsHeroProps) {
  const data = property || {
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
    price: "$1,250,000",
    rawPrice: 1250000,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState<{ success?: boolean; message?: string } | null>(null);

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

  const handlePurchase = async () => {
    setIsSubmitting(true);
    setPurchaseStatus(null);
    try {
      const numericPrice = data.rawPrice || 1250000;
      const res = await purchaseProperty({
        propertyId: propertyId || "1",
        pricePaid: numericPrice,
        propertyTitle: data.title,
        propertyLocation: data.location,
      });

      if (res.success) {
        setPurchaseStatus({
          success: true,
          message: res.message || "Purchase inquiry saved successfully!",
        });
      } else {
        setPurchaseStatus({
          success: false,
          message: res.error || "Please sign in to proceed with purchase.",
        });
      }
    } catch (err: any) {
      setPurchaseStatus({
        success: false,
        message: err?.message || "Failed to process transaction.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentImg = data.images[activeImageIndex] || data.images[0];
  const nextImg =
    data.images[(activeImageIndex + 1) % data.images.length] || data.images[1];

  return (
    <section className="w-full bg-[#141414] py-8 px-4 sm:px-8 lg:px-12 font-['Urbanist'] text-white">
      <div className="max-w-[1360px] mx-auto">
        {/* Top Title & Price Row */}
        <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-3">
            <h1 className="text-xl sm:text-2xl lg:text-[26px] font-semibold tracking-wide text-white">
              {data.title}
            </h1>
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#262626] rounded-[8px] px-3 py-1.5 w-fit">
              <MapPin className="w-4 h-4 text-white" />
              <span className="text-[13px] sm:text-[14px] text-[#999999] font-medium whitespace-nowrap">
                {data.location}
              </span>
            </div>
            {isSold && (
              <span className="px-2.5 py-0.5 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold rounded-full">
                SOLD OUT
              </span>
            )}
          </div>

          <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#262626]">
            <span className="text-[13px] sm:text-[14px] text-[#999999] font-medium">
              Price
            </span>
            <span className="text-lg sm:text-xl lg:text-[22px] font-semibold text-white">
              {data.price}
            </span>
            {isSold ? (
              <button
                type="button"
                disabled
                className="flex-shrink-0 px-4 py-2.5 rounded-[8px] bg-[#262626] text-[#777777] text-xs sm:text-sm font-medium cursor-not-allowed border border-[#333333]"
              >
                Sold Out
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setPurchaseStatus(null);
                  setShowBuyPopup(true);
                }}
                className="flex-shrink-0 px-4.5 py-2.5 rounded-[8px] bg-[#703BF7] hover:bg-[#5F2FE0] active:scale-95 text-white text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
              >
                Buy Now
              </button>
            )}
          </div>
        </div>

        {/* Gallery Container Card */}
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-4 sm:p-5 flex flex-col gap-4 mb-6">
          {/* Main Images Display */}
          <div className="flex flex-col-reverse lg:flex-col gap-4">
            {/* Thumbnail Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none bg-[#141414] p-2 sm:p-2.5 rounded-[8px]">
              {data.images.map((img, idx) => {
                const isSelected = idx === activeImageIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative flex-shrink-0 h-[40px] sm:h-[48px] lg:h-[54px] w-[56px] sm:w-[68px] lg:w-[76px] rounded-[6px] overflow-hidden transition-all ${
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
              <div className="relative h-[200px] sm:h-[260px] lg:h-[300px] w-full rounded-[10px] overflow-hidden border border-[#262626]">
                <Image
                  src={currentImg}
                  alt="Main property view 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative hidden lg:block h-[300px] w-full rounded-[10px] overflow-hidden border border-[#262626]">
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
          <div className="flex items-center justify-between w-full max-w-[240px] h-[58px] bg-[#141414] border border-[#262626] rounded-[100px] p-2 gap-2 mx-auto">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#262626] bg-[#1A1A1A] hover:bg-[#262626] text-white transition-colors flex-shrink-0"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex items-center gap-[3px] w-[110px] h-[4px] justify-center">
              {data.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-[4px] flex-1 rounded-[60px] transition-colors ${
                    idx === activeImageIndex ? "bg-[#703BF7]" : "bg-[#4D4D4D]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#262626] bg-[#1A1A1A] hover:bg-[#262626] text-white transition-colors flex-shrink-0"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {showBuyPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-[450px] rounded-[12px] border border-[#262626] bg-[#1A1A1A] p-6 sm:p-8 shadow-2xl">
            <h2 className="text-[22px] sm:text-[24px] font-semibold text-white">
              Interested in this property?
            </h2>

            <p className="mt-3 text-[14px] sm:text-[16px] leading-6 text-[#999999]">
              You are reserving{" "}
              <span className="text-white font-medium">{data.title}</span> for{" "}
              <span className="text-[#703BF7] font-semibold">{data.price}</span>.
            </p>

            {purchaseStatus && (
              <div
                className={`mt-4 p-3 rounded-[8px] text-[14px] ${
                  purchaseStatus.success
                    ? "bg-[#703BF7]/20 border border-[#703BF7] text-white"
                    : "bg-red-900/20 border border-red-500 text-red-300"
                }`}
              >
                {purchaseStatus.message}
              </div>
            )}

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => setShowBuyPopup(false)}
                className="rounded-[8px] border border-[#262626] bg-[#141414] px-5 py-3 text-[14px] sm:text-[16px] font-medium text-white transition-colors hover:bg-[#262626] cursor-pointer"
              >
                {purchaseStatus?.success ? "Close" : "Cancel"}
              </button>

              {!purchaseStatus?.success && (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handlePurchase}
                  className="rounded-[8px] bg-[#703BF7] px-5 py-3 text-[14px] sm:text-[16px] font-medium text-white transition-colors hover:bg-[#5F2FE0] cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Confirm & Proceed"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
