'use client'

import React, { useRef, useState, useEffect } from 'react'
import { ShinyButton } from '@/components/ui/shiny-button'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onContactClick?: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    function loadVideo() {
      const video = videoRef.current
      if (!video) return
      video.src = '/videos/hero-video.mp4'
      video.load()
      video.play().catch(() => {})
    }

    // İlk paint'ten sonra videoyu yükle - kritik kaynakları engellememesi için
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = window.requestIdleCallback(loadVideo)
      return () => window.cancelIdleCallback(id)
    } else {
      const id = setTimeout(loadVideo, 200)
      return () => clearTimeout(id)
    }
  }, [])

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Video background - same for all themes */}
      <div className="absolute inset-0 -z-10">
        {/* Poster image - LCP element, preloaded in layout.tsx */}
        <img
          src="/images/hero-poster.jpg"
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in ${videoReady ? 'opacity-0' : 'opacity-70'}`}
        />
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in ${videoReady ? 'opacity-70' : 'opacity-0'}`}
        />
        {/* Gradient overlay - light theme */}
        <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-blue-50/70 via-indigo-50/70 to-purple-50/70" />
        {/* Gradient overlay - dark theme */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-slate-900/70 via-purple-950/70 to-slate-900/70" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal mb-6 text-foreground drop-shadow-md">
            Dijital Dönüşümünüzde
            <br />
            Güvenilir Partneriniz
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Moka Dijital olarak, işletmenizin dijital varlıklarını optimize ederek potansiyel müşteri kazanımınızı
            maksimize ediyoruz. Google İşletme optimizasyonundan AI otomasyonlarına kadar tüm çözümlerle
            işletmenizi büyütmenize yardımcı oluyoruz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ShinyButton
              className="px-8 py-3 text-base"
              onClick={onContactClick}
            >
              <span className="flex items-center gap-2">
                Hizmetlerimizi İnceleyin
                <ArrowRight className="h-4 w-4" />
              </span>
            </ShinyButton>

            <ShinyButton
              variant="inverted"
              className="px-8 py-3 text-base"
              onClick={() => window.location.href = '/hizmetler/potansiyel-musteri-kazanimi'}
            >
              Potansiyel Müşteri Kazanımı
            </ShinyButton>
          </div>
        </div>
      </div>
    </section>
  )
}
