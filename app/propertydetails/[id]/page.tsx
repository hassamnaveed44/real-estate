import React from "react";
import PropertyDetailsHero from "@/app/components/properties-detail/PropertyDetailsHero";
import CtaBanner from "@/app/components/home/CtaBanner";
import PropertyDescriptionAndAmenities from "@/app/components/properties-detail/PropertyDescriptionAndAmenities";
import PropertyInquiryForm from "@/app/components/properties-detail/PropertyInquiryForm";
import ComprehensivePricing from "@/app/components/properties-detail/ComprehensivePricing";
import Faqs from "@/app/components/home/Faqs";

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  // You can fetch or filter property data based on params.id here if needed
  
  return (
    <main className="min-h-screen bg-[#141414] text-white">
      
      {/* Property Details Section */}
      <PropertyDetailsHero />
      <PropertyDescriptionAndAmenities />
      <PropertyInquiryForm />
      <ComprehensivePricing />
      <Faqs />

    <CtaBanner />
    </main>
  );
}