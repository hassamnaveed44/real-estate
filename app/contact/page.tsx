import React from "react";
import CtaBanner from "../components/home/CtaBanner";
import ContactHero from "../components/contact/ContactHeroCards";
import ContactFormSection from "../components/contact/ContactFormSection";
import OfficeLocationsSection from "../components/contact/OfficeLocationsSection";
import OfficeGallerySection from "../components/contact/OfficeGallerySection";



export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white overflow-x-hidden">
      
      <main>
       <ContactHero />
       <ContactFormSection />
       <OfficeLocationsSection />
       <OfficeGallerySection />
        <CtaBanner />
      </main>
      
    </div>
  );
}