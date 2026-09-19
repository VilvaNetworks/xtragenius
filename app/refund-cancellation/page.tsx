import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund & Cancellation - Xtragenius",
};

export default function RefundCancellationPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="border-b border-[#ebebeb] bg-white py-4">
          <div className="mx-auto max-w-[1200px] px-4">
            <nav aria-label="breadcrumb">
              <span className="text-sm text-[#696969] font-medium">
                <Link href="/" className="transition-colors hover:text-[#ff6600]">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-[#333333]">Refund & Cancellation</span>
              </span>
            </nav>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[800px] px-4">
            <h1 className="text-[36px] font-bold text-[#333333] mb-6">Refund &amp; Cancellation</h1>
            <p className="text-[16px] leading-relaxed text-[#696969]">
              This page is being finalized. Our full Refund &amp; Cancellation Policy will be
              published here shortly. For any questions in the meantime, please{" "}
              <Link href="/contact-us/" className="text-[#ff6600] font-semibold hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
