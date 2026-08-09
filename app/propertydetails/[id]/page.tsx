import React from "react";
import PropertyDetailsHero from "@/app/components/properties-detail/PropertyDetailsHero";
import CtaBanner from "@/app/components/home/CtaBanner";
import PropertyDescriptionAndAmenities from "@/app/components/properties-detail/PropertyDescriptionAndAmenities";
import PropertyInquiryForm from "@/app/components/properties-detail/PropertyInquiryForm";
import ComprehensivePricing from "@/app/components/properties-detail/ComprehensivePricing";
import Faqs from "@/app/components/home/Faqs";
import { client } from "@/sanity/lib/client";
import { singlePropertyQuery, SanityProperty } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>;
}

const staticCatalog: Record<string, any> = {
  "1": {
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
    price: "$1,250,000",
    rawPrice: 1250000,
    description:
      "Discover coastal luxury at Seaside Serenity Villa. Wake up to the soothing melody of waves and breathtaking panoramic views of the ocean. This exquisite property features modern architectural design, premium finishes, sprawling outdoor entertainment areas, and direct private beach access.",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 Square Feet",
    images: [
      "/images/propertyhero1.png",
      "/images/propertyhero2.png",
      "/images/house1.png",
      "/images/propertyhero1.png",
    ],
    amenities: [
      "Private Beach Access",
      "Infinity Swimming Pool",
      "State-of-the-Art Smart Home System",
      "Spacious Outdoor Terraces",
      "Custom Italian Kitchen",
      "Secure Gated Community with 24/7 Security",
    ],
  },
  "2": {
    title: "Metropolitan Haven",
    location: "Downtown Manhattan, New York",
    price: "$650,000",
    rawPrice: 650000,
    description:
      "Immerse yourself in the energy of the city. This modern apartment in the heart of metropolitan life features floor-to-ceiling glass walls with skyline views, sleek quartz countertops, automated smart climate control, and a private rooftop lounge.",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,450 Square Feet",
    images: [
      "/images/house2.png",
      "/images/propertyhero2.png",
      "/images/house1.png",
      "/images/propertyhero1.png",
    ],
    amenities: [
      "Panoramic Skyline Views",
      "24/7 Concierge & Doorman",
      "Rooftop Infinity Lounge",
      "Underground Heated Parking",
      "Private Fitness & Wellness Spa",
      "Keyless Biometric Entry",
    ],
  },
  "3": {
    title: "Rustic Retreat Cottage",
    location: "Aspen, Colorado",
    price: "$350,000",
    rawPrice: 350000,
    description:
      "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills and lush pine forests, offering a wood-burning stone fireplace, cedar-clad vaulted ceilings, and a wrap-around sun deck.",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,980 Square Feet",
    images: [
      "/images/house3.png",
      "/images/propertyhero1.png",
      "/images/house2.png",
      "/images/propertyhero2.png",
    ],
    amenities: [
      "Wood-Burning Stone Fireplace",
      "Wrap-Around Sun Deck",
      "Private Forest Trail Access",
      "Cedar Wood Sauna",
      "Solar Power Backup",
      "Heated Ski & Gear Storage",
    ],
  },
  "4": {
    title: "Urban Skyline Penthouse",
    location: "Brickell, Miami, Florida",
    price: "$1,250,000",
    rawPrice: 1250000,
    description:
      "Luxurious penthouse featuring soaring double-height ceilings, bespoke Italian marble, an oversized private balcony with bay views, and elite residential services.",
    bedrooms: 5,
    bathrooms: 5,
    area: "3,800 Square Feet",
    images: [
      "/images/house1.png",
      "/images/propertyhero1.png",
      "/images/propertyhero2.png",
      "/images/house3.png",
    ],
    amenities: [
      "Private Elevators & Foyer",
      "360-Degree Water Views",
      "Custom Marble Wine Cellar",
      "Heated Balcony Jacuzzi",
      "Private Yacht Slip Access",
      "Smart Lighting Automation",
    ],
  },
  "5": {
    title: "Suburban Family House",
    location: "Austin, Texas",
    price: "$620,000",
    rawPrice: 620000,
    description:
      "Spacious backyard, gourmet chef's kitchen, and a quiet family-friendly atmosphere located in a top-tier school district with neighborhood parks and pools.",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,900 Square Feet",
    images: [
      "/images/house2.png",
      "/images/propertyhero2.png",
      "/images/house1.png",
      "/images/house3.png",
    ],
    amenities: [
      "Fenced Landscaped Backyard",
      "Chef's Island Kitchen",
      "Two-Car Attached Garage",
      "Community Swimming Pool",
      "Covered Patio with BBQ Grill",
      "Dedicated Home Office",
    ],
  },
  "6": {
    title: "Minimalist Glass Residence",
    location: "Beverly Hills, California",
    price: "$890,000",
    rawPrice: 890000,
    description:
      "Architectural masterpiece surrounded by lush greenery and nature. Features floor-to-ceiling glass pavilions, polished concrete floors, and an integrated reflection pond.",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,650 Square Feet",
    images: [
      "/images/house3.png",
      "/images/propertyhero1.png",
      "/images/house2.png",
      "/images/propertyhero2.png",
    ],
    amenities: [
      "Zen Garden & Reflection Pond",
      "Polished Concrete Floors",
      "Designer Chef Kitchen",
      "Floor-to-Ceiling Glass Walls",
      "Smart Solar Integration",
      "Gated Security Entry",
    ],
  },
};

export default async function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 1. Check if we have mock catalog data for this id
  let propertyData: any = staticCatalog[id] || staticCatalog["1"];

  // 2. Fetch live Sanity data if available
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const sanityProp: SanityProperty = await client.fetch(singlePropertyQuery, { id });
      if (sanityProp) {
        propertyData = {
          title: sanityProp.title,
          location: sanityProp.location || "Prime Location",
          price: typeof sanityProp.price === "number" ? `$${sanityProp.price.toLocaleString()}` : String(sanityProp.price),
          rawPrice: typeof sanityProp.price === "number" ? sanityProp.price : 1250000,
          description: sanityProp.description,
          bedrooms: parseInt(sanityProp.bedrooms) || 4,
          bathrooms: parseInt(sanityProp.bathrooms) || 3,
          area: sanityProp.area || "2,500 Square Feet",
          images: sanityProp.images?.length
            ? sanityProp.images.map((img) => urlForImage(img)?.url() || "/images/propertyhero1.png")
            : [
                "/images/propertyhero1.png",
                "/images/propertyhero2.png",
                "/images/house1.png",
                "/images/house2.png",
              ],
          amenities: sanityProp.amenities?.length
            ? sanityProp.amenities
            : [
                `Modern ${sanityProp.propertyType || "Villa"} Architectural Design`,
                "Smart Climate & Automated Lighting Controls",
                "High-End Gourmet Kitchen with Island",
                "Private Landscaped Garden & Patio",
                "Dedicated High-Speed Electric Vehicle Charger",
                "24/7 Gated Security & Video Surveillance",
              ],
        };
      }
    }
  } catch (err) {
    console.error("Error fetching single property from Sanity:", err);
  }

  // 3. Check if property is already purchased or marked Sold
  let isSold = false;
  try {
    const { prisma } = await import("@/lib/prisma");
    const purchase = await prisma.purchase.findFirst({
      where: {
        OR: [{ propertyId: id }, { propertyTitle: propertyData?.title }],
      },
    });
    if (purchase || propertyData?.status === "Sold") {
      isSold = true;
    }
  } catch (err) {
    if (propertyData?.status === "Sold") isSold = true;
  }

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      {/* Property Details Section */}
      <PropertyDetailsHero propertyId={id} isSold={isSold} property={propertyData} />
      <PropertyDescriptionAndAmenities property={propertyData} />
      <PropertyInquiryForm
        propertyName={propertyData?.title}
        propertyLocation={propertyData?.location}
      />
      <ComprehensivePricing
        propertyName={propertyData?.title}
        listingPrice={propertyData?.price}
      />
      <Faqs />
      <CtaBanner />
    </main>
  );
}