"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function StudioPage() {
  return (
    <div className="w-full min-h-screen bg-[#141414]">
      <NextStudio config={config} />
    </div>
  );
}
