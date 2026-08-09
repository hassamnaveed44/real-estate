import React from "react";
import { Bed, Bath, Maximize2, Zap } from "lucide-react";

interface PropertyDescriptionAndAmenitiesProps {
  property?: {
    description: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    amenities: string[];
  };
}

export default function PropertyDescriptionAndAmenities({ property }: PropertyDescriptionAndAmenitiesProps) {
  const data = property || {
    description: "Discover your own piece of paradise with the Seaside Serenity Villa. With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 Square Feet",
    amenities: [
      "Expansive oceanfront terrace for outdoor entertaining",
      "Gourmet kitchen with top-of-the-line appliances",
      "Private beach access for morning strolls and sunset views",
      "Master suite with a spa-inspired bathroom and ocean-facing balcony",
      "Private garage and ample storage space"
    ]
  };

  return (
    <section className="w-full bg-[#141414] pb-10 px-4 sm:px-8 lg:px-12 font-['Urbanist'] text-white">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left Card: Description & Stats */}
        <div className="bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-7 flex flex-col gap-6">
          {/* Description Block */}
          <div className="flex flex-col gap-2.5">
            <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-white">
              Description
            </h2>
            <p className="text-[13px] sm:text-[14px] font-medium text-[#999999] leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#262626]" />

          {/* Stats Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {/* Bedrooms */}
            <div className="border-r border-[#262626] pr-2 last:border-none flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-[#999999]">
                <Bed className="w-4 h-4 text-[#999999]" />
                <span className="text-xs sm:text-[13px] font-medium">Bedrooms</span>
              </div>
              <span className="text-base sm:text-lg lg:text-[20px] font-semibold text-white">
                {String(data.bedrooms).padStart(2, "0")}
              </span>
            </div>

            {/* Bathrooms */}
            <div className="border-r border-[#262626] pr-2 last:border-none flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-[#999999]">
                <Bath className="w-4 h-4 text-[#999999]" />
                <span className="text-xs sm:text-[13px] font-medium">Bathrooms</span>
              </div>
              <span className="text-base sm:text-lg lg:text-[20px] font-semibold text-white">
                {String(data.bathrooms).padStart(2, "0")}
              </span>
            </div>

            {/* Area */}
            <div className="flex flex-col gap-1 col-span-2 sm:col-span-1 border-t sm:border-t-0 border-[#262626] pt-2 sm:pt-0">
              <div className="flex items-center gap-1.5 text-[#999999]">
                <Maximize2 className="w-4 h-4 text-[#999999]" />
                <span className="text-xs sm:text-[13px] font-medium">Area</span>
              </div>
              <span className="text-base sm:text-lg lg:text-[20px] font-semibold text-white">
                {data.area}
              </span>
            </div>
          </div>
        </div>

        {/* Right Card: Key Features and Amenities */}
        <div className="bg-[#141414] border border-[#262626] rounded-[12px] p-5 sm:p-7 flex flex-col gap-5">
          <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-white">
            Key Features and Amenities
          </h2>

          <div className="flex flex-col gap-3">
            {data.amenities.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 sm:p-3.5 rounded-[8px] bg-gradient-to-r from-[#1A1A1A] to-[#141414] border-l-2 border-[#703BF7] border-y border-r border-[#262626]"
              >
                <Zap className="w-4 h-4 text-[#703BF7] flex-shrink-0" />
                <span className="text-[13px] sm:text-[14px] text-[#999999] font-medium">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}