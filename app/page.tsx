// src/app/page.tsx
import Hero from "@/app/components/home/Hero";
import FeaturedListings from "@/app/components/home/FeaturedListings";
import Testimonials from "@/app/components/home/Testimonials";
import Faqs from "@/app/components/home/Faqs";
import CtaBanner from "@/app/components/home/CtaBanner";

export default function Home() {
  return (
    <main className="w-full bg-[#141414] min-h-screen">
      <Hero />
      <FeaturedListings />
      <Testimonials />
      <Faqs />
      <CtaBanner />
    </main>
  );
}