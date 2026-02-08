'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-muted/50">
      <div className="container px-4 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Moka Dijital</h3>
            <p className="text-sm text-muted-foreground">
              Profesyonel dijital çözümler ve potansiyel müşteri kazanımı
              sistemleri ile işletmenizi büyütün.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                📧{' '}
                <a
                  href="mailto:iletisim@mokadijital.com"
                  className="hover:text-foreground transition-colors"
                >
                  iletisim@mokadijital.com
                </a>
              </p>
              <p>
                📞{' '}
                <a
                  href="tel:+905545377751"
                  className="hover:text-foreground transition-colors"
                >
                  +90 (554) 537 77 51
                </a>
              </p>
              <p>📍 Kızılay, Fevzi Çakmak-1 Sk. No:11, 06420 Çankaya/Ankara</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetler</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/hizmetler/google-isletme"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Google İşletme SEO
              </Link>
              <Link
                href="/hizmetler/seo"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Yerel SEO & Global SEO
              </Link>
              <Link
                href="/hizmetler/pmk"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Potansiyel Müşteri Kazanımı
              </Link>
              <Link
                href="/hizmetler/web-gelistirme"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Web Sitesi Geliştirme
              </Link>
              <Link
                href="/hizmetler/reklam"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Dijital Reklam Yönetimi
              </Link>
              <Link
                href="/hizmetler/otomasyon"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                İş Akışı ve AI Otomasyonları
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Moka Dijital. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
