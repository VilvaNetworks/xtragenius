import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const gilroy = localFont({
  src: "../public/font/Gilroy-Regular.ttf",
  variable: "--font-primary",
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Home - Learning made easy",
  description:
    "Welcome to Xtragenius! We empower young learners to achieve academic success through proven abacus training and cognitive skills development. Unlock your child's math genius with our expert-led abacus courses for kids, designed to boost confidence and mental arithmetic skills.",
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/seo/favicon-192x192.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    apple: { url: "/seo/apple-touch-icon.jpg" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gilroy.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
