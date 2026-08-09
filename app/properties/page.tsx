// src/app/properties/page.tsx
import PropertyHeroSearch from "@/app/components/properties/PropertyHeroSearch";
import PropertiesGrid from "../components/properties/PropertiesGrid";
import PropertiesCtaForm from "../components/properties/PropertiesCtaForm";
import CtaBanner from "@/app/components/home/CtaBanner";
import { client } from "@/sanity/lib/client";
import { allAvailablePropertiesQuery, SanityProperty } from "@/sanity/lib/queries";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

export default async function PropertiesPage() {
  let properties: SanityProperty[] = [];
  let soldIds: string[] = [];
  let soldTitles: string[] = [];

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      properties = await client.fetch(allAvailablePropertiesQuery);
    }
  } catch (err) {
    console.error("Sanity fetch error (falling back to default properties):", err);
  }

  try {
    const purchases = await prisma.purchase.findMany({
      select: { propertyId: true, propertyTitle: true },
    });
    soldIds = purchases.map((p) => p.propertyId).filter(Boolean);
    soldTitles = purchases.map((p) => p.propertyTitle).filter(Boolean) as string[];
  } catch (err) {
    // safe fallback
  }

  // Filter out any property that has status == "Sold" in Sanity OR has a purchase in the database
  const availableProperties = properties.filter(
    (p) =>
      p.status !== "Sold" &&
      !soldIds.includes(p._id) &&
      (!p.slug?.current || !soldIds.includes(p.slug.current)) &&
      (!p.title || !soldTitles.includes(p.title))
  );

  return (
    <main className="w-full bg-[#141414] min-h-screen">
      <PropertyHeroSearch />
      <PropertiesGrid sanityProperties={availableProperties} soldIds={soldIds} />
      <PropertiesCtaForm />
      <CtaBanner />
    </main>
  );
}