import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-background py-20 md:py-32">
      {/* Optional: Subtle gradient background */}
      <div className="absolute inset-0 -z-10 gradient-bg opacity-5" />

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
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '#services';
                }
              }}
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
  );
}