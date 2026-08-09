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
        className="w-full border-b border-[#262626] px-4 sm:px-8 lg:px-12 pt-[40px] sm:pt-[60px] lg:pt-[70px] pb-[40px] sm:pb-[60px] lg:pb-[70px] flex flex-col gap-3"
        style={{
          background:
            "linear-gradient(95.93deg, #262626 -26.82%, rgba(38, 38, 38, 0) 40.46%), #141414",
        }}
      >
        <div className="max-w-[1360px] mx-auto w-full flex flex-col gap-2.5">
          <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-tight leading-[1.2] text-white">
            Find Your Dream Property
          </h1>

          <p className="w-full max-w-[1100px] text-sm lg:text-[15px] font-medium text-[#999999] leading-relaxed">
            Welcome to Estatein, where your dream property awaits in every corner
            of our beautiful world. Explore our curated selection of properties,
            each offering a unique story and a chance to redefine your life.
          </p>
        </div>
      </div>

      {/* Floating Search & Filter Container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 -mt-6 sm:-mt-8 relative z-20 pb-10">
        <div className="flex flex-col gap-3">
          {/* Main Search Bar Pill */}
          <div className="bg-[#141414] border border-[#262626] rounded-t-[12px] sm:rounded-[12px] shadow-[0_0_0_4px_#191919] sm:shadow-[0_0_0_6px_#191919] p-3 sm:p-4 lg:px-5 lg:py-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 w-full">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#666666] shrink-0" />

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
                className="bg-transparent text-white placeholder-[#666666] text-base sm:text-lg lg:text-[18px] font-medium outline-none w-full"
              />
            </div>

            <button
              type="button"
              onClick={handleSearch}
              className="bg-[#703BF7] hover:bg-[#5e31d4] transition rounded-[8px] px-3.5 sm:px-5 py-2.5 sm:py-3 flex items-center justify-center gap-2 shrink-0 text-white font-medium text-xs sm:text-sm"
            >
              <Search className="w-4 h-4 block sm:hidden" />
              <span className="hidden sm:inline">Find Property</span>
            </button>
          </div>

          {/* Filter Row: 5 Fields */}
          <div
            ref={dropdownRef}
            className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] p-2 sm:p-2.5 flex flex-wrap lg:flex-nowrap justify-between gap-2.5 sm:gap-3"
          >
            {/* Field 1: Location */}
            <div className="relative flex-1 min-w-[160px] lg:min-w-0">
              <button
                type="button"
                onClick={() => toggleDropdown("location")}
                className="w-full bg-[#141414] border border-[#262626] rounded-[8px] p-3 h-[52px] flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <MapPin className="w-4 h-4 text-[#999999] shrink-0" />

                  <span className="text-[13px] sm:text-[14px] font-medium text-[#999999] border-l border-[#262626] pl-2 truncate">
                    {filters.location}
                  </span>
                </div>

                <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <ChevronDown className="w-3.5 h-3.5 text-white" />
                </div>
              </button>

              {activeDropdown === "location" && (
                <div className="absolute left-0 right-0 top-[58px] z-50 bg-[#141414] border border-[#262626] rounded-[10px] p-1.5 shadow-xl">
                  {dropdownOptions.location.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => selectOption("location", option)}
                      className="w-full text-left px-3 py-2 rounded-[6px] text-[13px] text-[#999999] hover:bg-[#1A1A1A] hover:text-white transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 2: Property Type */}
            <div className="relative flex-1 min-w-[160px] lg:min-w-0">
              <button
                type="button"
                onClick={() => toggleDropdown("propertyType")}
                className="w-full bg-[#141414] border border-[#262626] rounded-[8px] p-3 h-[52px] flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Landmark className="w-4 h-4 text-[#999999] shrink-0" />

                  <span className="text-[13px] sm:text-[14px] font-medium text-[#999999] border-l border-[#262626] pl-2 truncate">
                    {filters.propertyType}
                  </span>
                </div>

                <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <ChevronDown className="w-3.5 h-3.5 text-white" />
                </div>
              </button>

              {activeDropdown === "propertyType" && (
                <div className="absolute left-0 right-0 top-[58px] z-50 bg-[#141414] border border-[#262626] rounded-[10px] p-1.5 shadow-xl">
                  {dropdownOptions.propertyType.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        selectOption("propertyType", option)
                      }
                      className="w-full text-left px-3 py-2 rounded-[6px] text-[13px] text-[#999999] hover:bg-[#1A1A1A] hover:text-white transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 3: Pricing Range */}
            <div className="relative flex-1 min-w-[160px] lg:min-w-0">
              <button
                type="button"
                onClick={() => toggleDropdown("pricingRange")}
                className="w-full bg-[#141414] border border-[#262626] rounded-[8px] p-3 h-[52px] flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Banknote className="w-4 h-4 text-[#999999] shrink-0" />

                  <span className="text-[13px] sm:text-[14px] font-medium text-[#999999] border-l border-[#262626] pl-2 truncate">
                    {filters.pricingRange}
                  </span>
                </div>

                <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <ChevronDown className="w-3.5 h-3.5 text-white" />
                </div>
              </button>

              {activeDropdown === "pricingRange" && (
                <div className="absolute left-0 right-0 top-[58px] z-50 bg-[#141414] border border-[#262626] rounded-[10px] p-1.5 shadow-xl">
                  {dropdownOptions.pricingRange.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        selectOption("pricingRange", option)
                      }
                      className="w-full text-left px-3 py-2 rounded-[6px] text-[13px] text-[#999999] hover:bg-[#1A1A1A] hover:text-white transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 4: Property Size */}
            <div className="relative flex-1 min-w-[160px] lg:min-w-0">
              <button
                type="button"
                onClick={() => toggleDropdown("propertySize")}
                className="w-full bg-[#141414] border border-[#262626] rounded-[8px] p-3 h-[52px] flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Box className="w-4 h-4 text-[#999999] shrink-0" />

                  <span className="text-[13px] sm:text-[14px] font-medium text-[#999999] border-l border-[#262626] pl-2 truncate">
                    {filters.propertySize}
                  </span>
                </div>

                <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <ChevronDown className="w-3.5 h-3.5 text-white" />
                </div>
              </button>

              {activeDropdown === "propertySize" && (
                <div className="absolute left-0 right-0 top-[58px] z-50 bg-[#141414] border border-[#262626] rounded-[10px] p-1.5 shadow-xl">
                  {dropdownOptions.propertySize.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        selectOption("propertySize", option)
                      }
                      className="w-full text-left px-3 py-2 rounded-[6px] text-[13px] text-[#999999] hover:bg-[#1A1A1A] hover:text-white transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 5: Build Year */}
            <div className="relative flex-1 min-w-[160px] lg:min-w-0">
              <button
                type="button"
                onClick={() => toggleDropdown("buildYear")}
                className="w-full bg-[#141414] border border-[#262626] rounded-[8px] p-3 h-[52px] flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Calendar className="w-4 h-4 text-[#999999] shrink-0" />

                  <span className="text-[13px] sm:text-[14px] font-medium text-[#999999] border-l border-[#262626] pl-2 truncate">
                    {filters.buildYear}
                  </span>
                </div>

                <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <ChevronDown className="w-3.5 h-3.5 text-white" />
                </div>
              </button>

              {activeDropdown === "buildYear" && (
                <div className="absolute left-0 right-0 top-[58px] z-50 bg-[#141414] border border-[#262626] rounded-[10px] p-1.5 shadow-xl">
                  {dropdownOptions.buildYear.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        selectOption("buildYear", option)
                      }
                      className="w-full text-left px-3 py-2 rounded-[6px] text-[13px] text-[#999999] hover:bg-[#1A1A1A] hover:text-white transition"
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