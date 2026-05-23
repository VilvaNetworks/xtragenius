'use client'

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Inline SVGs for the Contact Info section
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2ba999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2ba999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2ba999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function ContactUsPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    qualification: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <section className="bg-white pt-6 pb-2">
          <div className="mx-auto max-w-[1200px] px-4">
            <nav aria-label="breadcrumb">
              <span className="text-[13px] text-[#696969] font-medium tracking-wide">
                <Link href="/" className="transition-colors hover:text-[#ff6600]">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span>Contact us</span>
              </span>
            </nav>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[700px] px-4">
            <AnimateOnScroll delay={0}>
              <h1 className="mb-14 text-center text-[34px] font-bold text-[#333333]">
                Get in Touch with us
              </h1>
            </AnimateOnScroll>

            {submitted ? (
              <AnimateOnScroll delay={100}>
                <div className="rounded-md p-8 text-center bg-[#f5f7fa]">
                  <p className="text-[18px] text-[#3F3A64] font-semibold">
                    Thank you! We&apos;ll be in touch soon.
                  </p>
                </div>
              </AnimateOnScroll>
            ) : (
              <AnimateOnScroll delay={100}>
                <form onSubmit={handleSubmit} noValidate>
                  {/* Name row */}
                  <div className="mb-6">
                    <label className="mb-2 block text-[15px] font-bold text-[#696969]">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-6">
                      <div className="flex-1">
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          className="w-full border border-[#e6e6e6] px-3 py-2.5 text-sm outline-none focus:border-[#ff6600] transition-colors"
                        />
                        <span className="mt-1 block text-[13px] text-[#696969]">First</span>
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          className="w-full border border-[#e6e6e6] px-3 py-2.5 text-sm outline-none focus:border-[#ff6600] transition-colors"
                        />
                        <span className="mt-1 block text-[13px] text-[#696969]">Last</span>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="mb-2 block text-[15px] font-bold text-[#696969]">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#e6e6e6] px-3 py-2.5 text-sm outline-none focus:border-[#ff6600] transition-colors"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="mb-6">
                    <label className="mb-2 block text-[15px] font-bold text-[#696969]">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      required
                      className="w-full sm:w-1/2 border border-[#e6e6e6] px-3 py-2.5 text-sm outline-none focus:border-[#ff6600] transition-colors"
                    />
                  </div>

                  {/* Qualification */}
                  <div className="mb-6">
                    <label className="mb-2 block text-[15px] font-bold text-[#696969]">
                      Qualification <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      value={form.qualification}
                      onChange={handleChange}
                      required
                      className="w-full sm:w-1/2 border border-[#e6e6e6] px-3 py-2.5 text-sm outline-none focus:border-[#ff6600] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="mb-2 block text-[15px] font-bold text-[#696969]">
                      Comment or Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border border-[#e6e6e6] px-3 py-2.5 text-sm outline-none focus:border-[#ff6600] transition-colors"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-[#e9e9e9] px-6 py-2.5 text-[14px] font-bold text-[#333333] transition-colors hover:bg-[#d0d0d0]"
                  >
                    Submit
                  </button>
                </form>
              </AnimateOnScroll>
            )}
          </div>
        </section>

        {/* Contact Info Header */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-[1200px] px-4">
            <AnimateOnScroll delay={0}>
              <h2 className="text-center text-[30px] font-bold text-[#333333] mb-16">
                We would love to hear from you !
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 max-w-[900px] mx-auto">
              
              {/* Address */}
              <AnimateOnScroll delay={100}>
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <MapPinIcon />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#3F3A64] mb-3">Address</h3>
                    <p className="text-[14px] text-[#696969] leading-[1.8]">
                      Xtragenius Learning Systems,<br />
                      No:9/60,Sowrashtra Nagar 10th cross st,<br />
                      Choolaimedu, Chennai - 600 094.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Contact */}
              <AnimateOnScroll delay={200}>
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#3F3A64] mb-3">Contact</h3>
                    <p className="text-[14px] text-[#696969] leading-[1.8]">
                      Mobile: <span className="font-bold">+91-9940633579/9840004161</span>
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Hours */}
              <AnimateOnScroll delay={300}>
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <ClockIcon />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#3F3A64] mb-3">Hour of operation</h3>
                    <p className="text-[14px] text-[#696969] leading-[1.8]">
                      Monday - Friday: 09:30 - 18:30<br />
                      Sunday CLOSED
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <AnimateOnScroll delay={100}>
          <section className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4357380183145!2d80.22238471482255!3d13.065147490786016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668571060935%3A0xc3f8373b75baec!2sXtragenius%20Learning%20Systems!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </AnimateOnScroll>
      </main>
      <Footer />
    </>
  );
}
