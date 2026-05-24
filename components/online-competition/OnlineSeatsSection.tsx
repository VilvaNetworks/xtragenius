"use client";

import AnimateOnScroll from "../AnimateOnScroll";

const stats = [
  { value: "39", label: "Professional\nCourses" },
  { value: "16k+", label: "Enrolled\nLearners" },
  { value: "209", label: "Professional\nCourses" },
  { value: "100%", label: "Satisfaction\nRate" },
];

export default function OnlineSeatsSection() {
  return (
    <section className="bg-[#2A1E6A] py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimateOnScroll delay={100 + index * 100} key={index}>
              <div className="text-center">
                <p className="text-[42px] md:text-[48px] font-bold text-[#ff6600] leading-none mb-3">
                  {stat.value}
                </p>
                <p className="text-[14px] text-white/90 leading-[1.4] whitespace-pre-line font-medium">
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
