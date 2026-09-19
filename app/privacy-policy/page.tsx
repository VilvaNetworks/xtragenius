import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Xtragenius",
};

const sections = [
  {
    heading: "Information We Collect",
    body: "When you fill out a form on this website — such as a partner/franchise enquiry, contact form, or course registration — we may collect information like your name, phone number, email address and location. We do not knowingly collect any sensitive personal information beyond what is needed to respond to your enquiry.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use the information you provide to respond to your enquiries, process registrations, share relevant programme or franchise details, and improve our services. We do not use your information for any purpose beyond what is reasonably expected from your interaction with us.",
  },
  {
    heading: "Children's Privacy",
    body: "Our programmes are designed for children, but our website is intended to be used by parents, guardians or franchise enquirers, not directly by children. Any information submitted through our forms is expected to be provided by a parent or guardian on the child's behalf.",
  },
  {
    heading: "Cookies",
    body: "This website may use basic cookies or similar technologies to remember your preferences and understand how visitors use our site. You can control or disable cookies through your browser settings at any time.",
  },
  {
    heading: "Sharing of Information",
    body: "We do not sell or rent your personal information to third parties. We may share relevant enquiry details with the specific Xtragenius franchise centre closest to you, solely for the purpose of following up on your enquiry.",
  },
  {
    heading: "Data Security",
    body: "We take reasonable measures to protect the information you share with us from unauthorized access, alteration or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "Your Rights",
    body: "You may contact us at any time to ask what information we hold about you, to request a correction, or to request that it be deleted, subject to any legal or legitimate business requirements to retain it.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. We encourage you to review this page periodically.",
  },
];

export default function PrivacyPolicyPage() {
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
                <span className="text-[#333333]">Privacy Policy</span>
              </span>
            </nav>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[800px] px-4">
            <h1 className="text-[36px] font-bold text-[#333333] mb-4">Privacy Policy</h1>
            <p className="text-[15px] leading-relaxed text-[#8c89a2] mb-10">
              Your privacy matters to us. This page explains what information we collect through
              this website and how we use it.
            </p>

            <div className="flex flex-col gap-8">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-[20px] font-bold text-[#3F3A64] mb-2">{s.heading}</h2>
                  <p className="text-[15px] leading-relaxed text-[#696969]">{s.body}</p>
                </div>
              ))}
            </div>

            <p className="text-[15px] leading-relaxed text-[#696969] mt-10 pt-8 border-t border-[#eee]">
              If you have any questions about this Privacy Policy or how your information is
              handled, please{" "}
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
