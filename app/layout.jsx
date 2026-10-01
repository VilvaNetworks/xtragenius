import './globals.css';
import './learning-lab.css';
import { Inter, Sora } from 'next/font/google';
import ExtensionHydrationGuard from '../components/ExtensionHydrationGuard';

const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const displayFont = Sora({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });

export const metadata = {
  title: 'Xtragenius — The potential is already there.',
  description: '25+ years of shaping confident learners. Explore Xtragenius cognitive learning programmes in abacus, mental mathematics, memory and more for ages 4–14.',
  icons: { icon: '/favicon.ico', apple: '/seo/apple-touch-icon.jpg' },
};
export const viewport = { themeColor: '#192e4e' };

export default function RootLayout({ children }) {
  return <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}><body>{children}<ExtensionHydrationGuard /></body></html>;
}
