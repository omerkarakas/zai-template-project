'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onContactClick?: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Background pattern with theme-specific colors */}
      <div className="absolute inset-0 -z-10">
        {/* Light theme background */}
        <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        {/* Grid pattern overlay */}
        <div className="dark:hidden absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Dark theme background */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        {/* Dark grid pattern */}
        <div className="hidden dark:block absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, #4c1d95 1px, transparent 1px), linear-gradient(to bottom, #4c1d95 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Dark glow effect */}
        <div className="hidden dark:block absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="hidden dark:block absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Dijital Dönüşümünüzde</span>
            <br />
            <span className="gradient-text">Güvenilir Partneriniz</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Moka Dijital olarak, işletmenizin dijital varlıklarını optimize ederek potansiyel müşteri kazanımınızı
            maksimize ediyoruz. Google İşletme optimizasyonundan AI otomasyonlarına kadar tüm çözümlerle
            işletmenizi büyütmenize yardımcı oluyoruz.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group"
              onClick={onContactClick}
            >
              Hizmetlerimizi İnceleyin
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/hizmetler/pmk'}
            >
              Potansiyel Müşteri Kazanımı
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
