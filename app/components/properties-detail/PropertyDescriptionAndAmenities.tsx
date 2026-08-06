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
    <section className="w-full bg-[#141414] py-[40px] px-4 sm:px-6 lg:px-[162px] font-['Urbanist'] text-white">
      <div className="max-w-[1596px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-start">
        
        {/* Left Container: Description */}
        <div className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-5 sm:p-8 lg:p-[50px] flex flex-col gap-6 lg:gap-[40px]">
          
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-white leading-[150%]">
              Description
            </h2>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#999999] font-medium leading-[150%]">
              {data.description}
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-[#262626] pt-5 gap-4">
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-[#999999] text-[13px] sm:text-[16px] font-medium">
                <Bed className="w-4 h-4 text-gray-600" />
                <span>Bedrooms</span>
              </div>
              <span className="text-[20px] sm:text-[20px] lg:text-[24px] font-semibold text-white">
                {String(data.bedrooms).padStart(2, '0')}
              </span>
            </div>

            <div className="flex flex-col gap-2 border-l sm:border-x border-[#262626] pl-4 sm:px-4">
              <div className="flex items-center gap-1.5 text-[#999999] text-[13px] sm:text-[16px] font-medium">
                <Bath className="w-4 h-4 text-gray-600" />
                <span>Bathrooms</span>
              </div>
              <span className="text-[20px] sm:text-[20px] lg:text-[24px] font-semibold text-white">
                {String(data.bathrooms).padStart(2, '0')}
              </span>
            </div>

            <div className="flex flex-col gap-2 col-span-2 sm:col-span-1 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#262626] sm:pl-4">
              <div className="flex items-center gap-1.5 text-[#999999] text-[13px] sm:text-[16px] font-medium">
                <Maximize2 className="w-4 h-4 text-gray-600" />
                <span>Area</span>
              </div>
              <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-white truncate">
                {data.area}
              </span>
            </div>

          </div>
        </div>

        {/* Right Container: Key Features and Amenities */}
        <div className="w-full bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-5 sm:p-8 lg:p-[50px] flex flex-col gap-6 lg:gap-[40px]">
          
          <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-white leading-[150%]">
            Key Features and Amenities
          </h2>

          <div className="flex flex-col gap-3 sm:gap-[16px]">
            {data.amenities.map((amenity, index) => (
              <div
                key={index}
                style={{
                  background: "linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)",
                }}
                className="border-l-[1px] border-[#703BF7] rounded-r-[10px] py-[14px] sm:py-[16px] px-4 sm:px-[24px] flex items-center gap-[14px]"
              >
                <Zap className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#999999] font-medium leading-[150%]">
                  {amenity}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}