"use client";
import React from 'react';
import Link from 'next/link';
import { MapPin, Search, Users, Code, Megaphone, Bot, ArrowRight } from 'lucide-react';
import { Boxes } from '@/components/ui/background-boxes';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export default function ServiceCards() {
  const services: ServiceCard[] = [
    {
      title: 'Google İşletme SEO',
      description: 'Google İşletme profilinizi optimize ederek yerel arama sonuçlarında ön plana çıkın.',
      icon: <MapPin className="h-8 w-8" />,
      href: '/hizmetler/google-isletme'
    },
    {
      title: 'Yerel SEO / Global SEO',
      description: 'Yerel ve global arama motoru optimizasyonu ile online görünürlüğünüzü artırın.',
      icon: <Search className="h-8 w-8" />,
      href: '/hizmetler/seo'
    },
    {
      title: 'Potansiyel Müşteri Kazanımı',
      description: 'n8n otomasyonu ile potansiyel müşteri akışınızı otomatikleştirin ve artırın.',
      icon: <Users className="h-8 w-8" />,
      href: '/hizmetler/potansiyel-musteri-kazanimi'
    },
    {
      title: 'Web Sitesi Geliştirme',
      description: 'Modern, responsive ve dönüşüm odaklı web siteleri ile dijital varlığınızı güçlendirin.',
      icon: <Code className="h-8 w-8" />,
      href: '/hizmetler/web-gelistirme'
    },
    {
      title: 'Dijital Reklam Yönetimi',
      description: 'Google Ads ve sosyal medya reklamları ile hedef kitlenize ulaşın.',
      icon: <Megaphone className="h-8 w-8" />,
      href: '/hizmetler/reklam'
    },
    {
      title: 'İş Akışı ve AI Otomasyonları',
      description: 'n8n ve AI ile iş akışlarınızı otomatikleştirin, verimliliği maksimize edin.',
      icon: <Bot className="h-8 w-8" />,
      href: '/hizmetler/otomasyon'
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Background Boxes */}
      <div className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              İşletmenizin dijital dönüşümü için ihtiyaç duyduğunuz tüm çözümler tek çatı altında
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block p-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 text-primary-foreground">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                  Detaylı Bilgi
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
