// src/app/about/page.tsx
import OurJourney from "@/app/components/about/OurJourney";
import OurValues from "@/app/components/about/OurValues";
import OurAchievements from "@/app/components/about/OurAchievements";
import NavigatingExperience from "@/app/components/about/NavigatingExperience";
import MeetTeam from "@/app/components/about/MeetTeam";
import ValuedClients from "@/app/components/about/ValuedClients";
import CtaBanner from "@/app/components/home/CtaBanner";

export default function AboutPage() {
  return (
    <main className="w-full bg-[#141414] min-h-screen">
      <OurJourney />
      <OurValues />
      <OurAchievements />
      <NavigatingExperience />
      <MeetTeam />
      <ValuedClients />
      <CtaBanner />
    </main>
  );
}