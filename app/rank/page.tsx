import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RankGallery from "@/components/rang/RankGallery";

export const metadata: Metadata = {
  title: "Rank - XTRAGENIUS",
};

export default function RankPage() {
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
                <span className="text-[#333333]">Rank</span>
              </span>
            </nav>
          </div>
        </section>

        {/* Page Title */}
        <section className="bg-white pt-12 pb-4 text-center">
          <div className="mx-auto max-w-[1200px] px-4">
            <h1 className="text-[44px] font-bold text-[#333333]">
              Rank
            </h1>
          </div>
        </section>

        <RankGallery />

      </main>
      
      <Footer />
    </div>
  );
}
