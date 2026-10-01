import './globals.css';
import './learning-lab.css';
import localFont from 'next/font/local';
import ExtensionHydrationGuard from '../components/ExtensionHydrationGuard';

const bodyFont = localFont({ src: '../public/fonts/font-0.woff2', variable: '--font-body', weight: '400 700', display: 'swap' });
const displayFont = localFont({ src: '../public/fonts/font-1.woff2', variable: '--font-heading', weight: '400 800', display: 'swap' });

export const metadata = {
  title: 'Xtragenius — The potential is already there.',
  description: '25+ years of shaping confident learners. Explore Xtragenius cognitive learning programmes in abacus, mental mathematics, memory and more for ages 4–14.',
  icons: { icon: '/favicon.ico', apple: '/seo/apple-touch-icon.jpg' },
};
export const viewport = { themeColor: '#192e4e' };

export default function RootLayout({ children }) {
  return <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}><body>{children}<ExtensionHydrationGuard /></body></html>;
}
