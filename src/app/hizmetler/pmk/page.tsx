import { Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ServicePageLayout from '@/components/services/ServicePageLayout'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceProcess from '@/components/services/ServiceProcess'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PmkPage() {
  const benefits = [
    {
      title: "Otomatik lead skorlama ile sıcak leadler",
      description: "n8n otomasyonları ile gelen potansiyel müşterileri anında değerlendirip sıcaklık skorlarıyla kategorize ederiz."
    },
    {
      title: "WhatsApp üzerinden etkileşim",
      description: "Lead'lerinizle otomatik WhatsApp mesajlarıyla etkileşime geçin, kişiselleştirilmiş iletişim kurun."
    },
    {
      title: "Satış ekibinin zaman tasarrufu",
      description: "Manuel takip yükünü azaltırken, ekibinizin en sıcak lead'lere odaklanmasını sağlayın."
    },
    {
      title: "Lead nurturing otomasyonu",
      description: "Farklı aşamadaki tüm lead'leri otomatik sistemle besleyip, satışa hazır hale getirin."
    },
    {
      title: "Görüşme ayarlama otomasyonu",
      description: "Satış ekibiniz için otomatik görüşme ayarlama ve takip sistemleri kurarak zamandan kazanın."
    },
    {
      title: "Detaylı lead analitiği",
      description: "Tüm lead hareketlerini analiz edin, dönüşüm oranlarını takip edin ve stratejilerinizi geliştirin."
    }
  ]

  const steps = [
    {
      step: 1,
      title: "Lead yakalama",
      description: "Web sitesi formları, landing sayfaları veya diğer kanallardan gelen potansiyel müşteri verilerini toplarız."
    },
    {
      step: 2,
      title: "Otomatik skorlama",
      description: "n8n workflow sistemimiz ile lead'leri otomatik olarak değerlendirir, sıcaklık skorları atar, öncelik sıralaması oluştururuz."
    },
    {
      step: 3,
      title: "WhatsApp ile etkileşim dizisi",
      description: "Skora göre önceliklendirilen lead'ler için otomatik WhatsApp mesajları gönderir, etkileşimi başlatırız."
    },
    {
      step: 4,
      title: "Görüşme ayarlama ve CRM entegrasyonu",
      description: "Satışa hazır lead'ler için görüşme ayarlar, takip sistemi oluşturur ve CRM sistemlerinize entegre ederiz."
    }
  ]

  return (
    <>
      <Header />
      <ServicePageLayout
        title="Potansiyel Müşteri Kazanımı"
        description="n8n workflow otomasyonları ile sıcak leadler elde edin, satış döngünüzü hızlandırın"
        icon={<Target className="w-10 h-10" />}
      >
        {/* Description Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Geleceğin Satış Sistemi: Akıllı Lead Kazanımı</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Moka Dijital'in uzmanlık alanı olan Potansiyel Müşteri Kazanımı (PMK) sistemi, n8n otomasyon platformu sayesinde
                web sitenizden gelen her ziyaretçiyi potansiyel müşteriye dönüştürür. Akıllı lead skorlama sistemi ile
                en sıcak müşterileri belirleyerek satış ekibinizin zamanını ve enerjisini verimli kullanmasını sağlıyoruz.
              </p>
              <p>
                WhatsApp entegrasyonumuz ile müşterilerinizle kişiselleştirilmiş ve anlık iletişim kurarak
                dönüşüm oranlarınızı katlayın. Bu sistem, Moka Dijital'in dijital pazarlamada rakipsiz avantajını
                sunan, özel geliştirdiğimiz çözümdür.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <ServiceBenefits benefits={benefits} />

        {/* Process Section */}
        <ServiceProcess steps={steps} />

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Satış Döngünüzü Hızlandırın</h2>
              <p className="text-xl text-muted-foreground mb-8">
                n8n tabanlı otomasyon sistemimizle daha çok sıcak müşteri edinin, satış sürenizi kısaltın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Demo Talep Edin
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Sistemi İnceleyin
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Yakında interaktif demo deneyimi eklenecek
              </p>
            </div>
          </div>
        </section>
      </ServicePageLayout>
      <Footer />
    </>
  )
}