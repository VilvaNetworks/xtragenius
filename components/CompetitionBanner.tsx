"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CompetitionBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0b1c3a] py-14 lg:py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-4 md:flex-row">
        {/* Left: Poster */}
        <AnimateOnScroll delay={0} className="w-full max-w-[300px] flex-shrink-0 md:max-w-[280px]">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/offline-competition/ofline-com-img.jpeg"
              alt="Xtragenius 25th National Level Offline Abacus Competition poster"
              fill
              className="object-contain"
            />
          </div>
        </AnimateOnScroll>

        {/* Right: Content */}
        <div className="flex-1 text-center md:text-left">
          <AnimateOnScroll delay={100}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#ff6600",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "10px",
              }}
            >
              LIVE, IN-PERSON &middot; 11th OCTOBER 2026
            </p>
            <h2 className="text-[28px] font-bold leading-tight text-white md:text-[34px]">
              25<sup>th</sup> National Level{" "}
              <mark className="bg-transparent text-[#ff6600]">Offline Abacus Competition</mark>
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-relaxed text-[#c7cbe0] md:mx-0">
              At Annai Velankanni&apos;s School &amp; College, Chennai. Celebrating a
              25-year legacy, open to all institutes. Win an iPad (Toppers), with
              trophies &amp; certificates for every participant. Registrations close
              20th September — limited spots!
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={250}>
            <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row md:justify-start justify-center">
              <a
                href="https://wa.me/919840004162"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "rgb(255, 102, 0)",
                  color: "white",
                  borderRadius: "5px",
                  padding: "14px 32px",
                  fontSize: "14px",
                  fontWeight: 600,
                  display: "inline-block",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                className="hover:opacity-90"
              >
                Register Now on WhatsApp
              </a>
              <Link
                href="/offline-competition"
                style={{
                  color: "white",
                  borderRadius: "5px",
                  padding: "13px 30px",
                  fontSize: "14px",
                  fontWeight: 600,
                  display: "inline-block",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  transition: "border-color 0.2s",
                }}
                className="hover:border-white"
              >
                View Details
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
