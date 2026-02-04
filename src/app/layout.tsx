import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

// Base URL for absolute URL generation in metadata
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mokadijital.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Moka Dijital - Dönüşüm Odaklı Web Sitesi',
  description: 'Dijital pazarlama ajansı. Google İşletme, SEO, Potansiyel Müşteri Kazanımı ve web sitesi geliştirme hizmetleri.',
  keywords: ['moka dijital', 'dijital pazarlama', 'seo ajansı', 'google isletme', 'n8n otomasyon'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: 'Moka Dijital - Dönüşüm Odaklı Web Sitesi',
    description: 'Dijital pazarlama ajansı. Google İşletme, SEO, Potansiyel Müşteri Kazanımı ve web sitesi geliştirme hizmetleri.',
    siteName: 'Moka Dijital',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="moka-theme"
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
