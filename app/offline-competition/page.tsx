import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OfflineHeroSection from "@/components/offline-competition/OfflineHeroSection";
import OfflineVideoSection from "@/components/offline-competition/OfflineVideoSection";
import OfflineHighlightsSection from "@/components/offline-competition/OfflineHighlightsSection";

export const metadata: Metadata = {
  title: "Offline Competition - Learning made easy",
};

export default function OfflineCompetitionPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="border-b border-[#ebebeb] bg-white py-4">
          <div className="mx-auto max-w-[1200px] px-4">
            <nav aria-label="breadcrumb">
              <span className="text-sm text-[#696969] font-medium">
                <Link href="/" className="transition-colors hover:text-[#ff6600]">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-[#333333]">Offline Competition</span>
              </span>
            </nav>
          </div>
        </section>

        {/* Page Title */}
        <section className="bg-white pt-12 pb-6 text-center">
          <div className="mx-auto max-w-[1200px] px-4">
            <h1 className="text-[44px] font-bold text-[#333333]">
              Offline Competition
            </h1>
          </div>
        </section>

        <OfflineHeroSection />
        
        <OfflineVideoSection />
        
        <OfflineHighlightsSection />
      </main>
      
      <Footer />
    </div>
  );
}
