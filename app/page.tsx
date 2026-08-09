// src/app/page.tsx
import Hero from "@/app/components/home/Hero";
import FeaturedListings from "@/app/components/home/FeaturedListings";
import Testimonials from "@/app/components/home/Testimonials";
import Faqs from "@/app/components/home/Faqs";
import CtaBanner from "@/app/components/home/CtaBanner";
import { client } from "@/sanity/lib/client";
import { featuredPropertiesQuery, SanityProperty } from "@/sanity/lib/queries";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

export default async function Home() {
  let properties: SanityProperty[] = [];
  let soldIds: string[] = [];
  let soldTitles: string[] = [];

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      properties = await client.fetch(featuredPropertiesQuery);
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
      <Hero />
      <FeaturedListings sanityProperties={availableProperties} soldIds={soldIds} />
      <Testimonials />
      <Faqs />
      <CtaBanner />
    </main>
  );
}