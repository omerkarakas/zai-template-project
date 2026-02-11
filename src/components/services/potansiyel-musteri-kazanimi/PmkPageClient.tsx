'use client';

import { useState } from 'react';
import { Target } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceProcess from '@/components/services/ServiceProcess';
import { ContactModal } from '@/components/forms/ContactModal';

export default function PmkPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const serviceName = 'Potansiyel Müşteri Kazanımı';

  const benefits = [
    {
      title: 'Otomatik lead skorlama ile sıcak leadler',
      description:
        'n8n otomasyonları ile gelen potansiyel müşterileri anında değerlendirip sıcaklık skorlarıyla kategorize ederiz.',
    },
    {
      title: 'WhatsApp üzerinden etkileşim',
      description:
        "Lead'lerinizle otomatik WhatsApp mesajlarıyla etkileşime geçin, kişiselleştirilmiş iletişim kurun.",
    },
    {
      title: 'Satış ekibinin zaman tasarrufu',
      description:
        "Manuel takip yükünü azaltırken, ekibinizin en sıcak lead'lere odaklanmasını sağlayın.",
    },
    {
      title: 'Lead nurturing otomasyonu',
      description:
        "Farklı aşamadaki tüm lead'leri otomatik sistemle besleyip, satışa hazır hale getirin.",
    },
    {
      title: 'Görüşme ayarlama otomasyonu',
      description:
        'Satış ekibiniz için otomatik görüşme ayarlama ve takip sistemleri kurarak zamandan kazanın.',
    },
    {
      title: 'Detaylı lead analitiği',
      description:
        'Tüm lead hareketlerini analiz edin, dönüşüm oranlarını takip edin ve stratejilerinizi geliştirin.',
    },
  ];

  const steps = [
    {
      step: 1,
      title: 'Lead yakalama',
      description:
        'Web sitesi formları, landing sayfaları veya diğer kanallardan gelen potansiyel müşteri verilerini toplarız.',
    },
    {
      step: 2,
      title: 'WhatsApp ile etkileşim dizisi',
      description:
        "Lead'lere otomatik WhatsApp mesajları göndererek skora etki edecek sorular sorarız, ihtiyaçlarını ve bütçelerini anlarız.",
    },
    {
      step: 3,
      title: 'Otomatik skorlama',
      description:
        "WhatsApp cevaplarına göre n8n workflow sistemimiz lead'leri otomatik değerlendirir, sıcaklık skorları atar ve öncelik sıralaması oluşturur.",
    },
    {
      step: 4,
      title: 'Görüşme ayarlama ve CRM entegrasyonu',
      description:
        "Satışa hazır lead'ler için görüşme ayarlar, takip sistemi oluşturur ve CRM sistemlerinize entegre ederiz.",
    },
  ];

  return (
    <ServicePageLayout
      title="Potansiyel Müşteri Kazanımı"
      description="n8n workflow otomasyonları ile sıcak leadler elde edin, satış döngünüzü hızlandırın"
      icon={<Target className="w-10 h-10" />}
    >
      <section className="mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">
              Geleceğin Satış Sistemi: Akıllı Lead Kazanımı
            </span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Moka Dijital'in uzmanlık alanı olan Potansiyel Müşteri Kazanımı
              sistemi, n8n otomasyon platformu sayesinde web sitenizden
              gelen her ziyaretçiyi potansiyel müşteriye dönüştürür. Akıllı lead
              skorlama sistemi ile en sıcak müşterileri belirleyerek satış
              ekibinizin zamanını ve enerjisini verimli kullanmasını sağlıyoruz.
            </p>
            <p>
              WhatsApp entegrasyonumuz ile müşterilerinizle kişiselleştirilmiş
              ve anlık iletişim kurarak dönüşüm oranlarınızı katlayın. Bu
              sistem, Moka Dijital'in dijital pazarlamada rakipsiz avantajını
              sunan, özel geliştirdiğimiz çözümdür.
            </p>
          </div>
        </div>
      </section>

      <ServiceBenefits benefits={benefits} />

      <ServiceProcess steps={steps} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Satış Döngünüzü Hızlandırın</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Yapay zeka destekli otomasyon sistemimizle daha çok sıcak müşteri
              edinin, satış sürenizi kısaltın.
            </p>
            <h4 className="text-xl md:text-2xl font-bold mb-4">
              <span className="">
                Sizin için kurabileceğimiz sistemi canlı görün
              </span>
            </h4>
            <div className="flex justify-center">
              <ShinyButton
                className="px-8 py-3 text-base"
                onClick={() => setIsModalOpen(true)}
              >
                Hemen Başlayın
              </ShinyButton>
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
  );
}
