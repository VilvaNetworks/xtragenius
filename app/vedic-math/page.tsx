import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Vedic Math - Learning made easy",
};

export default function VedicMathPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb & Title */}
        <section className="bg-white pt-6 pb-4">
          <div className="mx-auto max-w-[1200px] px-4">
            <nav aria-label="breadcrumb" className="text-center mb-8 mt-2">
              <span className="text-[13px] text-[#696969] font-medium tracking-wide">
                <Link href="/" className="transition-colors hover:text-[#ff6600]">Home</Link>
                <span className="mx-2">&gt;</span>
                <span>Vedic Math</span>
              </span>
            </nav>
            <h1 className="text-[44px] font-bold text-[#333333] text-center mb-0 tracking-tight">
              Vedic Math
            </h1>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pt-12 pb-24">
          <div className="mx-auto max-w-[1200px] px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
              
              {/* Left text */}
              <div className="flex-1 text-center lg:text-left max-w-[450px]">
                <h2 className="text-[46px] font-bold text-[#3F3A64] leading-[1.17] mb-[20px] tracking-tight">
                  Learn from the<br />leading <span className="text-[#ff6600]">Tutors</span>
                </h2>
                <p className="text-[15px] text-[#8c89a2] leading-[1.74] mb-[24px]">
                  Our priority is to create a curriculum that generates problem-solving, thinking out of the box and increases the confidence in your children.
                </p>
                <div className="flex items-center font-semibold text-[#8c89a2] text-[15px] justify-center lg:justify-start">
                  Wanna learn more?&nbsp;&nbsp;
                  <Link href="#courses" className="group/link relative inline-flex items-center gap-1 pb-[2px]">
                    <span className="absolute left-0 bottom-0 h-[1.5px] w-full bg-[#e6e6e6]"></span>
                    <span className="absolute left-0 bottom-0 h-[1.5px] w-full bg-[#ff6600] scale-x-0 origin-left transition-transform duration-300 group-hover/link:scale-x-100 z-10"></span>
                    <span className="font-semibold text-[#ff6600] relative z-20">Click here</span>
                    <span className="text-[#ff6600] relative z-20">→</span>
                  </Link>
                </div>
              </div>

              {/* Right image */}
              <div className="flex-1 relative w-full mt-10 lg:mt-0 flex justify-end">
                {/* Floating text - positioned absolutely to overlap slightly */}
                <div className="hidden lg:block absolute top-[10%] left-[-15%] z-20 w-[420px]">
                  <p className="text-[12px] text-[#696969] leading-[1.8] text-right bg-white/60 p-4 backdrop-blur-sm rounded-lg">
                    Vedic maths education helps in developing new and innovative methods of mastering calculations. It builds a strong confident arithmetical base and solves the problems easily. Through Vedic maths, one can divide without using a calculator, multiply two decimal numbers together quickly and easily, and square any number ending in 5 within 5 seconds. Well, this all sounds difficult, but it has been proved that by using this phenomenal method and technique one can successfully win over the fear of &ldquo;mathematics&rdquo;.
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -left-12 bottom-12 h-[180px] w-[180px] opacity-20 bg-[url('/images/shape-dots.png')] bg-contain bg-no-repeat -z-10" />
                <div className="absolute -right-8 top-[-20px] h-[180px] w-[180px] opacity-20 bg-[url('/images/shape-dots.png')] bg-contain bg-no-repeat -z-10" />
                <div className="absolute right-[-20px] top-[40%] h-16 w-16 rounded-full border-[3px] border-[#ff6600] border-l-transparent border-b-transparent -z-10 transform rotate-45" />
                <div className="absolute left-[10%] bottom-[10%] h-8 w-8 rounded-full border-[3px] border-[#e1d5cc] -z-10" />

                {/* Circular image */}
                <div className="relative w-full max-w-[480px] aspect-square rounded-full overflow-hidden ml-auto">
                  <Image
                    src="/images/vedic-math-books.jpg"
                    alt="Vedic Math"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 480px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vedic Maths Course */}
        <section className="bg-[#f5f7fa] py-24 relative overflow-hidden">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="text-center mb-16">
              <span className="text-[#8c89a2] font-semibold text-[13px] tracking-[0.1em] uppercase mb-3 block">
                CAN YOU KNOW...
              </span>
              <h2 className="text-[36px] font-bold text-[#3F3A64]">
                Our Vedic Maths Course
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left Side Info */}
              <div className="flex-1 lg:pl-12">
                <h3 className="text-[38px] font-bold text-[#3F3A64] mb-8 tracking-tight">
                  Vedic Maths
                </h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "Total levels: 12 levels",
                    "Duration per level: 3 months",
                    "Age appropriate from: 10 yrs+",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#696969] text-[16px]">
                      <span className="text-[#8c89a2] text-xl">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side Image */}
              <div className="flex-1 relative w-full h-[600px] shadow-sm">
                 <Image
                    src="/images/vedic-math-poster.png"
                    alt="Vedic Math Course"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
              </div>
            </div>
          </div>
        </section>

        <StatsSection />
        <VideoSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
