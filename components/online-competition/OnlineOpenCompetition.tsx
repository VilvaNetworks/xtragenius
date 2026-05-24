"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import AnimateOnScroll from "../AnimateOnScroll";

export default function OnlineOpenCompetition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Text Content */}
          <div className="flex-1 w-full relative z-10">
            {/* Decorative ring */}
            <div className="absolute -top-6 right-20 w-12 h-12 border-4 border-orange-200 rounded-full opacity-60"></div>

            <AnimateOnScroll delay={100}>
              <p className="text-[13px] font-semibold text-[#8c89a2] uppercase tracking-[1px] mb-2">
                About The XTRAGENIUS Event
              </p>
              <h2 className="mb-8 text-[36px] font-bold text-[#3F3A64]">
                Open <mark className="bg-transparent text-[#ff6600]">Competition</mark>
              </h2>
            </AnimateOnScroll>

            <div className="space-y-6">
              <AnimateOnScroll delay={200}>
                <div className="flex gap-3 items-start">
                  <div className="mt-2 w-1.5 h-1.5 bg-[#ff6600] rounded-full flex-shrink-0"></div>
                  <p className="text-[#696969] text-[15px] leading-relaxed">
                    Xtragenius invites Abacus Learned Students from various centres across the country eligible to participate in this open competition.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <div className="flex gap-3 items-start">
                  <div className="mt-2 w-1.5 h-1.5 bg-[#ff6600] rounded-full flex-shrink-0"></div>
                  <p className="text-[#696969] text-[15px] leading-relaxed">
                    It allows the student to Compete at a Common Platform (National Level) and develop a healthy competitive spirit amongst the students while giving them an opportunity to showcase their talent in the field of Abacus based Mental Arithmetic program.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={400}>
                <div className="flex gap-3 items-start">
                  <div className="mt-2 w-1.5 h-1.5 bg-[#ff6600] rounded-full flex-shrink-0"></div>
                  <p className="text-[#696969] text-[15px] leading-relaxed font-medium">
                    We cordially invite you to participate in this event &amp; explore your kid's Arithmetical Calculation Skills.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

          </div>

          {/* Right: Images Content */}
          <div className="relative flex flex-1 md:!w-6/12 w-full items-center justify-center max-md:order-1 max-md:flex-none max-md:w-full"
            style={{ minHeight: "580px" }}>

            {/* Main circular hero image with subtle border */}
            <AnimateOnScroll delay={200} className="relative z-[2]">
              <div className="relative">
                <img
                  src="/images/online-competition/img5.jpg"
                  alt="Child learning abacus"
                  className="max-w-full h-auto rounded-[8px]"
                />
                <img
                  src="/images/online-competition/img6.jpg"
                  alt="Child learning abacus"
                  className="max-w-full h-auto absolute -top-[60px] -right-10 rounded-[8px]"
                />

              </div>
            </AnimateOnScroll>

            {/* Pink/beige circle stroke – bottom-left of image */}
            <AnimateOnScroll delay={350} className="absolute left-0 top-0 z-10">
              <div
                aria-hidden="true"
                className="pointer-events-none transition-transform duration-300 ease-out"
                style={{
                  left: "60px",
                  bottom: "90px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "8px solid #ECC5AB",
                  transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                }}
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={400} className="absolute bottom-[80px] left-0 z-0">
              <div className="transition-transform duration-300 ease-out"
                style={{ transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)` }}>
                <Image
                  src="/images/hero-dot.png"
                  alt="Child learning abacus"
                  width={200}
                  height={200}
                  className=" w-[130px]"
                  priority
                />
                {/* <Image
                                          src="/images/hero-dot.png"
                                          alt="Child learning abacus"
                                          width={200}
                                          height={200}
                                          className="mt-2 w-[130px]"
                                          priority
                                        /> */}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={450} className="absolute top-[50px] right-[160px] z-0">
              <div className="transition-transform duration-300 ease-out"
                style={{ transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)` }}>
                <Image
                  src="/images/hero-star.png"
                  alt="Child learning abacus"
                  width={200}
                  height={200}
                  className="mt-2 w-[130px]"
                  priority
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={500} className="absolute bottom-[100px] right-[0px] z-10">
              <div className="transition-transform duration-300 ease-out"
                style={{ transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` }}>
                <Image
                  src="/images/hero-round.png"
                  alt="Child learning abacus"
                  width={200}
                  height={200}
                  className="mt-2 md:w-[130px] w-[100px]"
                  priority
                />
              </div>
            </AnimateOnScroll>
          </div>

        </div>

        {/* For Registration Button Block */}
        <div className="mt-16 text-center">
          <AnimateOnScroll delay={500}>
            <p className="text-[18px] font-semibold text-[#ff6600] mb-6">
              For Registration :
            </p>
            <a
              href="tel:+919940633579"
              className="inline-flex items-center gap-2 rounded-md bg-[#ff6600] px-10 py-4 text-lg font-bold text-white transition-transform hover:-translate-y-1 hover:shadow-xl shadow-md"
            >
              +91 9940633579
            </a>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
}
