// src/app/properties/page.tsx
import PropertyHeroSearch from "@/app/components/properties/PropertyHeroSearch";
import PropertiesGrid from "../components/properties/PropertiesGrid";
import PropertiesCtaForm from "../components/properties/PropertiesCtaForm";
import CtaBanner from "@/app/components/home/CtaBanner";


export default function PropertiesPage() {
  return (
    <main className="w-full bg-[#141414] min-h-screen">
      <PropertyHeroSearch />
      <PropertiesGrid />
      <PropertiesCtaForm />
      <CtaBanner />
    </main>
  );
}