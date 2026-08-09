// src/app/components/home/CtaBanner.tsx
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="w-full bg-[#141414] border-t border-b border-[#262626] py-12 lg:py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      
      {/* Background Shadowy Isometric Grid Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 -top-20 w-[600px] h-[400px] bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] transform -rotate-12" />
        <div className="absolute -right-20 -bottom-20 w-[600px] h-[400px] bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] transform rotate-12" />
      </div>

      {/* Main Container */}
      <div className="max-w-[1360px] mx-auto relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
        
        {/* Text Container */}
        <div className="flex flex-col gap-2.5 max-w-[850px]">
          <h2 className="text-xl sm:text-2xl lg:text-[30px] font-semibold text-white tracking-normal">
            Start Your Real Estate Journey Today
          </h2>
          <p className="text-xs sm:text-sm lg:text-[14px] font-medium text-[#999999] leading-relaxed max-w-[780px]">
            Your dream property is just a click away. Whether you&apos;re looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way.
          </p>
        </div>

        {/* CTA Button */}
        <div className="shrink-0">
          <Link
            href="/properties"
            className="px-6 py-3 rounded-[10px] bg-[#703BF7] text-white font-medium text-sm lg:text-[14px] hover:bg-[#5e31d4] transition shadow-md shadow-[#703BF7]/30 whitespace-nowrap inline-block text-center"
          >
            Explore Properties
          </Link>
        </div>

      </div>
    </section>
  );
}