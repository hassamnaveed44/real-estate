"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  MapPin,
  Landmark,
  Banknote,
  Box,
  Calendar,
  ChevronDown,
} from "lucide-react";

type FilterKey =
  | "location"
  | "propertyType"
  | "pricingRange"
  | "propertySize"
  | "buildYear";

export default function PropertyHeroSearch() {
  const [search, setSearch] = useState("");
  const [activeDropdown, setActiveDropdown] =
    useState<FilterKey | null>(null);

  const [filters, setFilters] = useState({
    location: "Location",
    propertyType: "Property Type",
    pricingRange: "Pricing Range",
    propertySize: "Property Size",
    buildYear: "Build Year",
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropdownOptions: Record<FilterKey, string[]> = {
    location: [
      "Malibu, California",
      "New York",
      "Los Angeles",
      "Miami",
      "Chicago",
    ],
    propertyType: [
      "Villa",
      "Apartment",
      "House",
      "Penthouse",
      "Commercial",
    ],
    pricingRange: [
      "Under $500,000",
      "$500,000 - $1,000,000",
      "$1,000,000 - $2,000,000",
      "$2,000,000+",
    ],
    propertySize: [
      "Under 1,000 Sq Ft",
      "1,000 - 2,000 Sq Ft",
      "2,000 - 3,000 Sq Ft",
      "3,000+ Sq Ft",
    ],
    buildYear: [
      "2025 - 2026",
      "2020 - 2024",
      "2015 - 2019",
      "Before 2015",
    ],
  };

  const toggleDropdown = (dropdown: FilterKey) => {
    setActiveDropdown((prev) =>
      prev === dropdown ? null : dropdown
    );
  };

  const selectOption = (key: FilterKey, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));

    setActiveDropdown(null);
  };

  const handleSearch = () => {
    const searchParams = new URLSearchParams();

    if (search.trim()) {
      searchParams.set("search", search.trim());
    }

    if (filters.location !== "Location") {
      searchParams.set("location", filters.location);
    }

    if (filters.propertyType !== "Property Type") {
      searchParams.set("propertyType", filters.propertyType);
    }

    if (filters.pricingRange !== "Pricing Range") {
      searchParams.set("pricingRange", filters.pricingRange);
    }

    if (filters.propertySize !== "Property Size") {
      searchParams.set("propertySize", filters.propertySize);
    }

    if (filters.buildYear !== "Build Year") {
      searchParams.set("buildYear", filters.buildYear);
    }

    const query = searchParams.toString();

    window.history.pushState(
      {},
      "",
      query ? `?${query}` : window.location.pathname
    );

    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      {/* Top Text & Search Section */}
      <div
        className="w-full border-b border-[#262626] px-4 sm:px-10 lg:pl-[162px] pt-[50px] sm:pt-[100px] lg:pt-[150px] pb-[50px] sm:pb-[130px] lg:pb-[160px] flex flex-col gap-4 sm:gap-3 lg:gap-[14px]"
        style={{
          background:
            "linear-gradient(95.93deg, #262626 -26.82%, rgba(38, 38, 38, 0) 40.46%), #141414",
        }}
      >
        <h1 className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-tight leading-[1.2] text-white">
          Find Your Dream Property
        </h1>

        <p className="w-full max-w-[1358px] text-[15px] sm:text-[16px] lg:text-[18px] font-medium text-[#999999] leading-[150%] tracking-[0%]">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey
        </p>
      </div>

      {/* Floating Search & Filter Container */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-10 lg:px-[162px] -mt-10 sm:-mt-12 lg:-mt-14 relative z-20 pb-16">
        <div className="flex flex-col gap-4">
          {/* Main Search Bar Pill */}
          <div className="bg-[#141414] border border-[#262626] rounded-t-[12px] sm:rounded-[12px] shadow-[0_0_0_4px_#191919] sm:shadow-[0_0_0_10px_#191919] p-4 sm:p-5 lg:px-6 lg:py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#666666] shrink-0" />

              <input
                type="text"
                placeholder="Search For A Property"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                className="bg-transparent text-white placeholder-[#666666] text-[18px] sm:text-[20px] lg:text-[24px] font-medium outline-none w-full"
              />
            </div>

            <button
              type="button"
              onClick={handleSearch}
              className="bg-[#703BF7] hover:bg-[#5e31d4] transition rounded-[10px] px-3 sm:px-6 py-3 sm:py-[18px] flex items-center justify-center gap-2 shrink-0 text-white font-medium text-[14px] sm:text-[18px]"
            >
              <Search className="w-5 h-5 block sm:hidden" />
              <span className="hidden sm:inline">Find Property</span>
            </button>
          </div>

          {/* Filter Row: 5 Fields */}
          <div
            ref={dropdownRef}
            className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-3 sm:p-[10px] flex flex-wrap lg:flex-nowrap justify-between gap-3 sm:gap-4"
          >
            {/* Field 1: Location */}
            <div className="relative flex-1 min-w-[220px] lg:min-w-0">
              <button
                type="button"
                onClick={() => toggleDropdown("location")}
                className="w-full bg-[#141414] border border-[#262626] rounded-[12px] p-[20px] h-[72px] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <MapPin className="w-6 h-6 text-[#999999] shrink-0" />

                  <span className="text-[16px] font-medium text-[#999999] leading-[150%] border-l border-[#262626] pl-3">
                    {filters.location}
                  </span>
                </div>

                <div className="w-[36px] h-[36px] rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
              </button>

              {activeDropdown === "location" && (
                <div className="absolute left-0 right-0 top-[80px] z-50 bg-[#141414] border border-[#262626] rounded-[12px] p-2 shadow-xl">
                  {dropdownOptions.location.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => selectOption("location", option)}
                      className="w-full text-left px-4 py-3 rounded-[8px] text-[16px] text-[#999999] hover:bg-[#1A1A1A] hover:text-white transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 2: Property Type */}
            <div className="relative flex-1 min-w-[220px] lg:min-w-0">
              <button
                type="button"
                onClick={() => toggleDropdown("propertyType")}
                className="w-full bg-[#141414] border border-[#262626] rounded-[12px] p-[20px] h-[72px] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Landmark className="w-6 h-6 text-[#999999] shrink-0" />

                  <span className="text-[16px] font-medium text-[#999999] leading-[150%] border-l border-[#262626] pl-3">
                    {filters.propertyType}
                  </span>
                </div>

                <div className="w-[36px] h-[36px] rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
              </button>

              {activeDropdown === "propertyType" && (
                <div className="absolute left-0 right-0 top-[80px] z-50 bg-[#141414] border border-[#262626] rounded-[12px] p-2 shadow-xl">
                  {dropdownOptions.propertyType.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        selectOption("propertyType", option)
                      }
                      className="w-full text-left px-4 py-3 rounded-[8px] text-[16px] text-[#999999] hover:bg-[#1A1A1A] hover:text-white transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 3: Pricing Range */}
            <div className="relative flex-1 min-w-[220px] lg:min-w-0">
              <button
                type="button"
                onClick={() => toggleDropdown("pricingRange")}
                className="w-full bg-[#141414] border border-[#262626] rounded-[12px] p-[20px] h-[72px] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Banknote className="w-6 h-6 text-[#999999] shrink-0" />

                  <span className="text-[16px] font-medium text-[#999999] leading-[150%] border-l border-[#262626] pl-3">
                    {filters.pricingRange}
                  </span>
                </div>

                <div className="w-[36px] h-[36px] rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
              </button>

              {activeDropdown === "pricingRange" && (
                <div className="absolute left-0 right-0 top-[80px] z-50 bg-[#141414] border border-[#262626] rounded-[12px] p-2 shadow-xl">
                  {dropdownOptions.pricingRange.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        selectOption("pricingRange", option)
                      }
                      className="w-full text-left px-4 py-3 rounded-[8px] text-[16px] text-[#999999] hover:bg-[#1A1A1A] hover:text-white transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 4: Property Size */}
            <div className="relative flex-1 min-w-[220px] lg:min-w-0">
              <button
                type="button"
                onClick={() => toggleDropdown("propertySize")}
                className="w-full bg-[#141414] border border-[#262626] rounded-[12px] p-[20px] h-[72px] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Box className="w-6 h-6 text-[#999999] shrink-0" />

                  <span className="text-[16px] font-medium text-[#999999] leading-[150%] border-l border-[#262626] pl-3">
                    {filters.propertySize}
                  </span>
                </div>

                <div className="w-[36px] h-[36px] rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
              </button>

              {activeDropdown === "propertySize" && (
                <div className="absolute left-0 right-0 top-[80px] z-50 bg-[#141414] border border-[#262626] rounded-[12px] p-2 shadow-xl">
                  {dropdownOptions.propertySize.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        selectOption("propertySize", option)
                      }
                      className="w-full text-left px-4 py-3 rounded-[8px] text-[16px] text-[#999999] hover:bg-[#1A1A1A] hover:text-white transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 5: Build Year */}
            <div className="relative flex-1 min-w-[220px] lg:min-w-0">
              <button
                type="button"
                onClick={() => toggleDropdown("buildYear")}
                className="w-full bg-[#141414] border border-[#262626] rounded-[12px] p-[20px] h-[72px] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Calendar className="w-6 h-6 text-[#999999] shrink-0" />

                  <span className="text-[16px] font-medium text-[#999999] leading-[150%] border-l border-[#262626] pl-3">
                    {filters.buildYear}
                  </span>
                </div>

                <div className="w-[36px] h-[36px] rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
              </button>

              {activeDropdown === "buildYear" && (
                <div className="absolute left-0 right-0 top-[80px] z-50 bg-[#141414] border border-[#262626] rounded-[12px] p-2 shadow-xl">
                  {dropdownOptions.buildYear.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        selectOption("buildYear", option)
                      }
                      className="w-full text-left px-4 py-3 rounded-[8px] text-[16px] text-[#999999] hover:bg-[#1A1A1A] hover:text-white transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}