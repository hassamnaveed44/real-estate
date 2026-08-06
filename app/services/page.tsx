import React from "react";
import ServiceHero from "@/app/components/services/ServiceHero";
import PropertyValue from "@/app/components/services/PropertyValue";
import PropertyManagement from "@/app/components/services/PropertyManagement";
import SmartInvestments from "../components/services/SmartInvestments";
import CtaBanner from "../components/home/CtaBanner";



export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white overflow-x-hidden">
      
      <main>
        <ServiceHero />
        <PropertyValue />
        <PropertyManagement />
        <SmartInvestments />
        <CtaBanner />
      </main>
      
    </div>
  );
}