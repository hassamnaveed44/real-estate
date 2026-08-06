import React from "react";
import ServiceHero from "@/app/components/services/ServiceHero";
import PropertyValue from "@/app/components/services/PropertyValue";
import PropertyManagement from "@/app/components/services/PropertyManagement";



export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white overflow-x-hidden">
      
      <main>
        <ServiceHero />
        <PropertyValue />
        <PropertyManagement />
      </main>
      
    </div>
  );
}