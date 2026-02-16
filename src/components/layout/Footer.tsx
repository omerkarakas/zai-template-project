'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Boxes } from '@/components/ui/background-boxes';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative w-full border-t border-border bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* Background Boxes */}
      <div className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      {/* Google Maps */}
      <div className="container px-4 pt-8 max-w-6xl mx-auto text-center relative z-30">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Bize Ulaşın</span>
        </h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.8604403930854!2d32.84986900365568!3d39.92367664282088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34effc8ffac81%3A0xe9b87f07136449b8!2zS8SxesSxbGF5LCBGZXZ6aSDDh2FrbWFrLTEgU2suIE5vOjExLzEzLCAwNjQyMCDDh2Fua2F5YS9BbmthcmE!5e1!3m2!1str!2str!4v1770814577430!5m2!1str!2str"
        className="w-full h-[300px] md:h-[400px] relative z-30"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Moka Dijital Konum"
      />

      <div className="container px-4 py-8 max-w-6xl mx-auto relative z-30">
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
                href="/hizmetler/potansiyel-musteri-kazanimi"
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
