"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import AnimateOnScroll from "../AnimateOnScroll";

export default function OfflineHeroSection() {
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
    <section className="relative overflow-hidden bg-white py-16 lg:py-24" style={{ minHeight: "600px" }}>
      <div className="mx-auto flex h-full max-w-[1200px] items-center px-4">
        <div className="flex h-full w-full items-center gap-12 max-md:flex-col max-md:h-auto max-md:py-10">

          {/* Left column – Text content */}
          <div className="relative flex flex-1 flex-col justify-center max-md:order-2 max-md:flex-none max-md:w-full">
            <AnimateOnScroll delay={0}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgb(140, 137, 162)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                }}
              >
                About The Event
              </p>
              <h2
                className="font-sans font-bold leading-[1.17] text-[#3f3a64]"
                style={{ fontSize: "40px", width: "100%", maxWidth: "500px" }}
              >
                23<sup>rd</sup> <mark className="bg-transparent text-[#ff6600]">National Level</mark> ABACUS &amp; VEDIC MATHS Competition
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgb(255, 102, 0)",
                  fontWeight: 600,
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
              >
                – 29th December 2019
              </p>
              <p
                className="font-medium text-[#8c89a2]"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.67",
                  marginBottom: "24px",
                  maxWidth: "460px",
                }}
              >
                We proudly announce that, Our yearly prestigious Abacus Competition is about to begin to discover more talents.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col gap-3">
                <p style={{ fontSize: "16px", fontWeight: 600, color: "#3F3A64" }}>
                  WHERE?&nbsp;&nbsp;<span style={{ color: "rgb(255, 102, 0)" }}>Chennai</span>
                </p>
                <p style={{ fontSize: "16px", fontWeight: 600, color: "#3F3A64" }}>
                  WHEN?&nbsp;&nbsp;<span style={{ color: "rgb(255, 102, 0)" }}>May 2019</span>
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right column – Hero image with decorations */}
          <div className="relative flex flex-1 items-center justify-center max-md:order-1 max-md:flex-none max-md:w-full pt-[40px]" style={{ minHeight: "500px" }}>
            {/* Main image */}
            <AnimateOnScroll delay={200} className="relative z-[2] w-full">
              <div className="relative overflow-hidden rounded-2xl w-full max-w-[500px] h-[350px] shadow-xl ml-auto mr-auto">
                <Image
                  src="/images/offline-competition/img1.jpeg"
                  alt="Xtragenius National Competition Event"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimateOnScroll>

            {/* Decorations */}
            <AnimateOnScroll delay={350} className="absolute left-[-20px] bottom-[50px] z-10 max-md:hidden">
              <div
                className="pointer-events-none transition-transform duration-300 ease-out"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "8px solid #ECC5AB",
                  transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                }}
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={400} className="absolute top-[20px] left-[-40px] z-0 max-md:hidden">
              <div className="transition-transform duration-300 ease-out"
                style={{ transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)` }}>
                <Image
                  src="/images/hero-dot.png"
                  alt="Dots decoration"
                  width={130}
                  height={130}
                  className="w-[130px] opacity-60"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={500} className="absolute bottom-[-30px] right-[-20px] z-10 max-md:hidden">
              <div className="transition-transform duration-300 ease-out"
                style={{ transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` }}>
                <Image
                  src="/images/hero-round.png"
                  alt="Blob decoration"
                  width={100}
                  height={100}
                  className="md:w-[130px] w-[100px]"
                />
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
