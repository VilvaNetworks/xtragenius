import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions - Xtragenius",
};

const sections = [
  {
    heading: "Acceptance of Terms",
    body: "By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use this website or our services.",
  },
  {
    heading: "Use of Our Website",
    body: "This website and its content are provided for general information about our courses, programmes, competitions and franchise opportunities. You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this site by any third party.",
  },
  {
    heading: "Enrollment & Programmes",
    body: "Enrollment in any course or programme is subject to availability and acceptance by us or our franchise partner. Course structure, schedules, fees and materials may vary by centre and are communicated directly at the time of enrollment. We reserve the right to modify course content, schedules or format to improve the learning experience.",
  },
  {
    heading: "Intellectual Property",
    body: "All content on this website — including text, graphics, logos, course material and the Xtragenius name and branding — is the property of Xtragenius or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works from this content without our prior written consent.",
  },
  {
    heading: "Franchise & Partner Terms",
    body: "Any partnership or franchise arrangement with Xtragenius is governed by a separate, dedicated agreement signed between the parties. Information on this website about franchise opportunities is indicative only and does not itself constitute a binding offer.",
  },
  {
    heading: "Limitation of Liability",
    body: "While we make every effort to keep information on this website accurate and up to date, we make no warranties about the completeness or accuracy of this content. Xtragenius shall not be held liable for any indirect, incidental or consequential loss arising from the use of this website or our services.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these Terms & Conditions from time to time to reflect changes in our services or for legal and regulatory reasons. Continued use of this website after any changes constitutes acceptance of the revised terms.",
  },
  {
    heading: "Governing Law",
    body: "These Terms & Conditions are governed by and construed in accordance with the laws of India.",
  },
];

export default function TermsConditionsPage() {
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
                <span className="text-[#333333]">Terms & Conditions</span>
              </span>
            </nav>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[800px] px-4">
            <h1 className="text-[36px] font-bold text-[#333333] mb-4">Terms &amp; Conditions</h1>
            <p className="text-[15px] leading-relaxed text-[#8c89a2] mb-10">
              Please read these Terms &amp; Conditions carefully before using our website or enrolling
              in any Xtragenius programme.
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
              If you have any questions about these Terms &amp; Conditions, please{" "}
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
