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
      {/* Light theme background */}
      <div className="dark:hidden absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="absolute inset-0 opacity-[0.3]" style={{
          backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Dark theme background */}
      <div className="hidden dark:block absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950/50 to-slate-900" />
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: 'linear-gradient(to right, #6d28d9 1px, transparent 1px), linear-gradient(to bottom, #6d28d9 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
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
