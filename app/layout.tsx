import type { Metadata } from 'next';
import { Inter, Fraunces, Urbanist } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { Toaster } from 'sonner';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz'],
});

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: {
    default: 'Clean Marines — Cleaner oceans, healthier futures',
    template: '%s | Clean Marines',
  },
  description:
    'Clean Marines is a leading international ocean conservation non-profit. We clean oceans, educate communities, and repair marine ecosystems.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Clean Marines',
    title: 'Clean Marines — Cleaner oceans, healthier futures',
    description: 'Join us in keeping our oceans clean for future generations.',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable} ${urbanist.variable}`}>
      <body className="min-h-dvh bg-background text-foreground font-sans antialiased">
        <NextTopLoader color="#3d52a0" showSpinner={false} height={3} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
