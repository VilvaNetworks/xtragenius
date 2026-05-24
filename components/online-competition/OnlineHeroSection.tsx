"use client";

import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";
import { useState, useEffect } from "react";

export default function OnlineHeroSection() {
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
    <section className="bg-white pb-16 pt-8">
      {/* Page Title */}
      <div className="mx-auto max-w-[1200px] px-4 text-center mb-12">
        <AnimateOnScroll delay={0}>
          <h1 className="text-[40px] md:text-[44px] font-bold text-[#333333]">
            ONLINE COMPETITION
          </h1>
        </AnimateOnScroll>
      </div>

      {/* Hero Poster */}
      <div className="mx-auto max-w-[800px] px-4 mb-20">
        <AnimateOnScroll delay={100}>
          <div className="relative w-full md:aspect-square overflow-hidden mx-auto">
            <Image
              src="/images/online-competition/img1.png"
              alt="Global Abacus Wiz 2025 Poster"
              fill
              className="object-contain"
              priority
            />
          </div>
        </AnimateOnScroll>
      </div>

      {/* Sub Heading */}
      <div className="mx-auto max-w-[1200px] px-4 text-center mb-20">
        <AnimateOnScroll delay={200}>
          <p className="text-[13px] font-semibold text-[#ff6600] uppercase tracking-[1px] mb-2">
            August 17th 2025
          </p>
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#3F3A64] mb-2">
            XTRAGENIUS GLOBAL ABACUS OLYMPIAD-2025
          </h2>
          <p className="text-[14px] font-semibold text-gray-500">
            Date: 17-08-2025
          </p>
        </AnimateOnScroll>
      </div>

      {/* Event Details Section (Text Left, Image Right) */}
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 relative">

          {/* Left Text */}
          <div className="flex-1 w-full relative z-10">
            {/* Decorative circle */}
            <div className="absolute -top-4 right-10 w-12 h-12 border-4 border-orange-200 rounded-full opacity-50 z-0"></div>

            <AnimateOnScroll delay={300}>
              <p className="text-[13px] font-semibold text-[#8c89a2] uppercase tracking-[1px] mb-2">
                About The Event
              </p>
              <h3 className="text-[36px] font-bold text-[#3F3A64] mb-6 relative z-10">
                XTRAGENIUS <mark className="bg-transparent text-[#ff6600]">EVENT</mark>
              </h3>
              <p className="text-[#696969] text-[16px] leading-relaxed max-w-[500px]">
                The primary focus of this event is to bring all the students of every level on a single International platform and assess their Mental Arithmetic and Brain skills. Thus it provides a healthy competition and also enables indirect quality recognition. The champions and participating students are recognized with certificates, medals, trophies & gifts.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Right Image */}
          <div className="relative flex flex-1 md:!w-6/12 w-full items-center justify-center max-md:order-1 max-md:flex-none max-md:w-full"
            style={{ minHeight: "580px" }}>

            {/* Main circular hero image with subtle border */}
            <AnimateOnScroll delay={200} className="relative z-[2]">
              <div className="relative">
                <img
                  src="/images/online-competition/img2.jpeg"
                  alt="Child learning abacus"
                  className="max-w-full h-auto rounded-[8px]"
                />
                <img
                  src="/images/online-competition/img3.jpg"
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
      </div>
    </section>
  );
}
