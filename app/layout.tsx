// src/app/layout.tsx
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estatein - Real Estate Business Website",
  description: "Discover your dream property with Estatein",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#703BF7",
          colorBackground: "#1A1A1A",
        },
        elements: {
          userButtonPopoverCard: "bg-[#1A1A1A] border border-[#262626] text-white shadow-2xl rounded-[14px]",
          userPreviewMainIdentifier: "text-white font-semibold text-[15px]",
          userPreviewSecondaryIdentifier: "text-[#A1A1AA] text-[13px]",
          userButtonPopoverActionButton: "text-white hover:bg-[#262626] hover:text-[#703BF7] transition py-2.5 px-3",
          userButtonPopoverActionButtonText: "text-white font-medium text-[14px]",
          userButtonPopoverActionButtonIcon: "text-[#703BF7]",
          userButtonPopoverFooter: "hidden",
        },
      }}
    >
      <html lang="en" className="dark">
        <body className={`${urbanist.className} bg-[#141414] text-white antialiased flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}