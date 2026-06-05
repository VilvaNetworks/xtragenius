import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap - Xtragenius Learning Systems",
  description:
    "Navigate through the pages of Xtragenius Learning Systems. Find all our courses, programs, competitions, company profiles, and support links.",
};

const sitemapGroups = [
  {
    title: "Company Profile",
    links: [
      { label: "Home Page", href: "/" },
      { label: "Company Overview", href: "/company/" },
      { label: "MD's Message", href: "/mds-message/" },
      { label: "Our Team", href: "/our-team/" },
      { label: "Our Culture", href: "/our-culture/" },
      { label: "Partner / Franchise Enquiry", href: "/partner-with-us/" },
    ],
  },
  {
    title: "Academic Programs",
    links: [
      { label: "All Courses", href: "/courses/" },
      { label: "Abacus Course", href: "/courses/abacus/" },
      { label: "Vedic Mathematics", href: "/vedic-math/" },
      { label: "Mind Dart Memory Program", href: "/mind-dart/" },
      { label: "Handwriting Improvement", href: "/hand-writing/" },
      { label: "Short Courses Archive", href: "/courses/" },
      { label: "Online Learning Portal", href: "http://portal.xtragenius.com/" },
    ],
  },
  {
    title: "Student Competitions",
    links: [
      { label: "Offline National Competition", href: "/offline-competition/" },
      { label: "Online Global Competition", href: "/online-competition/" },
      { label: "Competition Leaderboard / Rank", href: "/rank/" },
      { label: "Student Portal Login", href: "https://student.xtragenius.com/login" },
    ],
  },
  {
    title: "Support & Legal",
    links: [
      { label: "Contact Us", href: "/contact-us/" },
      { label: "Frequently Asked Questions", href: "/faqs/" },
      { label: "Terms & Conditions", href: "/terms-conditions/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Refund & Cancellation Policy", href: "/refund-cancellation/" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Breadcrumb Section */}
      <section className="bg-white border-b border-[#ebebeb] py-3">
        <div className="mx-auto max-w-[1400px] px-4">
          <nav aria-label="breadcrumb">
            <span className="text-sm text-[#696969]">
              <Link href="/" className="transition-colors hover:text-[#ff6600]">
                Home
              </Link>
              <span className="mx-1">/</span>
              <span>Sitemap</span>
            </span>
          </nav>
        </div>
      </section>

      {/* Main Sitemap Content */}
      <main className="flex-1 bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Website Sitemap
            </h1>
            <p className="text-gray-500 max-w-[600px] mx-auto">
              Find and navigate quickly across all section areas, programs,
              courses, and resources of Xtragenius Learning Systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sitemapGroups.map((group) => (
              <div
                key={group.title}
                className="bg-[#f8f9fa] rounded-lg p-8 border border-gray-100 shadow-sm flex flex-col"
              >
                <h2 className="text-[20px] font-bold text-[#3F3A64] mb-6 border-b border-[#ff6600]/20 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-[#ff6600]">
                  {group.title}
                </h2>
                <ul className="m-0 list-none p-0 flex flex-col gap-4">
                  {group.links.map((link) => {
                    const isExternal = link.href.startsWith("http");
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="text-[#696969] hover:text-[#ff6600] text-[15px] font-medium transition-colors flex items-center gap-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="opacity-60 text-[#ff6600]"
                          >
                            <circle cx="12" cy="12" r="12" />
                          </svg>
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
