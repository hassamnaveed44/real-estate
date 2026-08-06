// src/app/components/home/CtaBanner.tsx
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="w-full bg-[#141414] border-t border-b border-[#262626] py-[80px] lg:py-[100px] px-6 sm:px-12 lg:px-[162px] relative overflow-hidden">
      
      {/* Background Shadowy Isometric Grid Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 -top-20 w-[600px] h-[400px] bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] transform -rotate-12" />
        <div className="absolute -right-20 -bottom-20 w-[600px] h-[400px] bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] transform rotate-12" />
      </div>

      {/* Main Container with increased gap between text and button */}
      <div className="max-w-[1920px] mx-auto relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 lg:gap-32">
        
        {/* Text Container with reduced font sizes */}
        <div className="flex flex-col gap-3 max-w-[950px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-white tracking-normal whitespace-nowrap">
            Start Your Real Estate Journey Today
          </h2>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium text-[#999999] leading-[150%] max-w-[850px]">
            Your dream property is just a click away. Whether you&apos;re looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
          </p>
        </div>

        {/* CTA Button */}
        <div className="shrink-0">
          <Link
            href="/properties"
            className="px-8 py-[18px] rounded-[10px] bg-[#703BF7] text-white font-medium text-[16px] hover:bg-[#5e31d4] transition shadow-lg shadow-[#703BF7]/30 whitespace-nowrap inline-block text-center"
          >
            Explore Properties
          </Link>
        </div>

      </div>
    </section>
  );
}