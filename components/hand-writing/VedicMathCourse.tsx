"use client";

import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";

export default function VedicMathCourse() {
  return (
    <section className="bg-[#f8f9fa] py-[60px]">
      <div className="mx-auto max-w-[1200px] px-4">

        {/* Section Headings */}
        <div className="text-center mb-16">
          <AnimateOnScroll delay={0}>
            <p className="text-[13px] font-semibold tracking-widest text-[#8c89a2] uppercase mb-3">
              LET YOU KNOW...
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#3F3A64]">
              Online Courses Details
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between  gap-12 md:gap-20">

          {/* Left Text */}
          <div className="flex-1 w-full max-w-[450px]">
            <AnimateOnScroll delay={300}>
              <h3 className="text-[32px] font-bold text-[#3F3A64] mb-8">
                Hand Writing
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#8c89a2] mr-3 text-lg leading-tight">•</span>
                  <span className="text-[#8c89a2] text-[15px]">Total levels : 8 Levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8c89a2] mr-3 text-lg leading-tight">•</span>
                  <span className="text-[#8c89a2] text-[15px]">Duration per level : 3 months</span>
                </li>

              </ul>
            </AnimateOnScroll>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <AnimateOnScroll delay={300}>
              <p>Good handwriting is more than neat letters — it builds fine motor control, focus and confidence in young children. Our Hand Writing programme guides kids step by step from correct pencil grip and letter formation through to cursive writing, helping them write faster, neater and with less effort in the classroom.</p>
            </AnimateOnScroll>
          </div>

        </div>

        {/* View All Courses Button */}


      </div>
      <div className="mt-16 flex justify-center">
        <AnimateOnScroll delay={400}>
          <button className="bg-[#ff6600] hover:bg-[#e65c00] text-white font-medium py-3 px-8 rounded-md flex items-center justify-center gap-2 transition-colors shadow-sm">
            View all courses <span>→</span>
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
