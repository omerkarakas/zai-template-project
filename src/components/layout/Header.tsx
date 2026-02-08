"use client";

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const services = [
  { name: 'Google İşletme SEO', href: '/hizmetler/google-isletme' },
  { name: 'Yerel SEO & Global SEO', href: '/hizmetler/seo' },
  { name: 'Potansiyel Müşteri Kazanımı', href: '/hizmetler/potansiyel-musteri-kazanimi' },
  { name: 'Web Sitesi Geliştirme', href: '/hizmetler/web-gelistirme' },
  { name: 'Dijital Reklam Yönetimi', href: '/hizmetler/reklam' },
  { name: 'İş Akışı ve AI Otomasyonları', href: '/hizmetler/otomasyon' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/moka-logo-text-bg.png"
              alt="Moka Dijital"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {/* Blog */}
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>

            {/* Hizmetler - Hover Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-5"
              >
                Hizmetler
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown panel */}
              <div className="absolute top-full right-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-64 rounded-lg border border-border bg-popover p-2 shadow-lg">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block rounded-md px-3 py-2.5 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <ThemeSwitcher />
          </nav>

          {/* Mobile menu button and theme switcher */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Menü</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="space-y-1 py-4">
              {/* Blog */}
              <Link
                href="/blog"
                className="block px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>

              {/* Hizmetler accordion */}
              <div>
                <button
                  className="w-full text-left px-3 py-2 text-sm font-medium text-foreground bg-transparent border-none flex items-center justify-between"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Hizmetler
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-6 pb-2 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
