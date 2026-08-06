import React from "react";
import Footer from "@/app/components/layout/Footer";
import PropertyDetailsHero from "@/app/components/properties-detail/PropertyDetailsHero";

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  // You can fetch or filter property data based on params.id here if needed
  
  return (
    <main className="min-h-screen bg-[#141414] text-white">
      
      {/* Property Details Section */}
      <PropertyDetailsHero />

      <Footer />
    </main>
  );
}