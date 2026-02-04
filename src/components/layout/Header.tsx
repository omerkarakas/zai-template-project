"use client";

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Services for dropdown
  const services = [
    { name: 'Google İşletme Optimizasyonu', href: '/hizmetler/google-isletme' },
    { name: 'Yerel SEO & Global SEO', href: '/hizmetler/seo' },
    { name: 'Potansiyel Müşteri Kazanımı', href: '/hizmetler/pmk' },
    { name: 'Web Sitesi Geliştirme', href: '/hizmetler/web-gelistirme' },
    { name: 'Dijital Reklam Yönetimi', href: '/hizmetler/reklam' },
    { name: 'İş Akışı ve AI Otomasyonları', href: '/hizmetler/otomasyon' },
  ];

  // Main navigation
  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetler', hasDropdown: true },
  ];

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
            {navigation.map((item) =>
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {services.map((service) => (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link
                          href={service.href}
                          className="text-sm cursor-pointer"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                item.href && (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                )
              )
            )}
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
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      className="w-full text-left px-3 py-2 text-sm font-medium text-foreground bg-transparent border-none flex items-center justify-between"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
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
                  </div>
                ) : (
                  item.href && (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}