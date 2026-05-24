import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OnlineHeroSection from "@/components/online-competition/OnlineHeroSection";
import OnlineVideoSection from "@/components/online-competition/OnlineVideoSection";
import OnlineSeatsSection from "@/components/online-competition/OnlineSeatsSection";
import OnlineOpenCompetition from "@/components/online-competition/OnlineOpenCompetition";
import OnlineSubscribe from "@/components/online-competition/OnlineSubscribe";

export const metadata: Metadata = {
  title: "Online Competition - XTRAGENIUS",
};

export default function OnlineCompetitionPage() {
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
                <span className="text-[#333333]">Online Competition</span>
              </span>
            </nav>
          </div>
        </section>

        <OnlineHeroSection />
        
        <OnlineVideoSection />
        
        <OnlineSeatsSection />
        
        <OnlineOpenCompetition />
        
        <OnlineSubscribe />
      </main>
      
      <Footer />
    </div>
  );
}
