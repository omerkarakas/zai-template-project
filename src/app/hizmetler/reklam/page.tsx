'use client'

import { useState } from 'react'
import { Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ServicePageLayout from '@/components/services/ServicePageLayout'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceProcess from '@/components/services/ServiceProcess'
import ContactModal from '@/components/forms/ContactModal'

export default function ReklamPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const serviceName = 'Dijital Reklam Yönetimi'

  const benefits = [
    {
      title: "Hedef kitleye hassas hedefleme",
      description: "Demografik, coğrafi ve davranışsal hedefleme ile reklamlarınızı doğru kitleye ulaştırın, yatırımınızı maksimize edin."
    },
    {
      title: "Bütçe optimizasyonu ve maliyet kontrolü",
      description: "Akıllık teklif stratejileri ve bütçe yönetimi ile en düşük maliyetle en fazla dönüşümü elde edin."
    },
    {
      title: "A/B testleri ile performans artışı",
      description: "Sürekli test ve optimizasyon ile reklam performansınızı artırın, ROI'nizi maksimize edin."
    },
    {
      title: "Detaylı raporlama ve analitik",
      description: "Haftalık ve aylık detaylı raporlar ile kampanya performansını takip edin, stratejilerinizi buna göre şekillendirin."
    },
    {
      title: "Reklam creative tasarımı",
      description: "Görsel ve metin tasarımlarımız ile dikkat çeken, dönüşüm odaklı reklamlar hazırlarız."
    },
    {
      title: "Yeniden pazarlama (retargeting)",
      description: "Potansiyel müşterilerinizi yeniden yakalayarak dönüşüm oranlarınızı artırın, müşteri tabanınızı büyütün."
    }
  ]

  const steps = [
    {
      step: 1,
      title: "Hedef belirleme ve strateji",
      description: "Hedeflerinizi analiz eder, bütçenizi belirler, hedef kitle ve platform stratejisi oluştururuz."
    },
    {
      step: 2,
      title: "Kampanya kurulumu ve hedefleme",
      description: "Google Ads, Meta Ads, LinkedIn Ads platformlarında kampanyaları kurar, hedeflemeyi optimize ederiz."
    },
    {
      step: 3,
      title: "Creative tasarımı ve kopya yazımı",
      description: "Dikkat çeken görseller ve etkileyici metinler ile reklam tasarımlarını hazırlar, testler yaparız."
    },
    {
      step: 4,
      title: "Yayına alma ve optimizasyon",
      description: "Kampanyaları yayınlar, performansı izler, gerektiğinde teklifleri, bütçeleri ve hedeflemeyi optimize ederiz."
    },
    {
      step: 5,
      title: "Raporlama ve iyileştirme",
      description: "Haftalık ve aylık raporlar sunar, analizler yapar, gelecek stratejiler için öneriler sunarız."
    }
  ]

  return (
    <ServicePageLayout
      title="Dijital Reklam Yönetimi"
      description="Google Ads, Meta Ads ve LinkedIn reklamları ile hedef kitlenize ulaşın, ROI'nizi artırın"
      icon={<Megaphone className="w-10 h-10" />}
    >
      <section className="mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Veri Odaklı Reklam Stratejileri</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Dijital dünyada doğru zamanda, doğru kitleye, doğru mesajla ulaşmak başarının anahtarıdır.
              Moka Dijital olarak, Google Ads, Meta Ads ve LinkedIn Ads platformlarında profesyonel reklam yönetimi hizmetleri sunuyoruz.
            </p>
            <p>
              Veri odaklı yaklaşımımız ile reklamlarınızın performansını sürekli izler, optimize eder.
              Hedef kitle analizi, A/B testleri ve bütçe optimizasyonu ile markanızı dijital alanda öne çıkarıyor,
              ROI'nizi maksimize ediyoruz.
            </p>
          </div>
        </div>
      </section>

      <ServiceBenefits benefits={benefits} />

      <ServiceProcess steps={steps} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reklam Danışmanlığı Alın</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Reklam bütçenizden en iyi şekilde yararlanmak için uzman desteği alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8"
                onClick={() => setIsModalOpen(true)}
              >
                Hemen Başlayın
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8"
                onClick={() => setIsModalOpen(true)}
              >
                Ücretsiz Danışmanlık
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        serviceName={serviceName}
      />
    </ServicePageLayout>
  )
}
