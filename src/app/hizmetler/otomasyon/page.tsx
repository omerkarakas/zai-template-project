import { Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ServicePageLayout from '@/components/services/ServicePageLayout'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceProcess from '@/components/services/ServiceProcess'

export default function OtomasyonPage() {
  const benefits = [
    {
      title: "Manuel işlerin otomasyonu ile zaman tasarrufu",
      description: "Tekrarlayan görevleri otomatikleştirerek zamanınızı stratejik işlere odaklayın, işletme verimliliğinizi artırın."
    },
    {
      title: "Hata oranının azalması",
      description: "İnsan hatasını ortadan kaldırarak süreçlerinizi daha güvenilir ve tutarlı hale getirin, kalite standartlarınızı yükseltin."
    },
    {
      title: "7/24 çalışan sistemler",
      description: "İş akışlarınızı sürekli çalışır durumda tutun, geceleri ve hafta sonları bile otomatik görevleri yerine getirin."
    },
    {
      title: "Entegre sistemler (CRM, e-posta, SMS, etc.)",
      description: "Mevcut sistemlerinizle tam entegre çalışan otomasyonlar oluşturarak veri akışını ve iş akışlarını optimize edin."
    },
    {
      title: "AI ile zenginleştirilmiş workflow'lar",
      description: "Yapay zeka entegrasyonları ile akıllık ve otomatik kararlar alın, iş akışlarınızdaki karmaşıklığı azaltın."
    },
    {
      title: "Ölçeklenebilir büyüme",
      description: "İşletmeniz büyüdükçe otomasyon sistemlerinizi kolayca ölçekleyin, yeni entegrasyonları ve süreçleri hızla ekleyin."
    }
  ]

  const steps = [
    {
      step: 1,
      title: "Süreç analizi ve otomasyon fırsatları",
      description: "Mevcut iş akışlarınızı analiz eder, otomasyona uygun olanları belirler, maliyet ve fayda analizi yaparız."
    },
    {
      step: 2,
      title: "Workflow tasarımı ve prototipleme",
      description: "n8n platformunda workflow tasarımları oluşturur, prototipler hazırlar ve işletme ile onay alırız."
    },
    {
      step: 3,
      title: "Entegrasyon ve geliştirme",
      description: "Gerekli API entegrasyonlarını kurar, özel node'lar geliştirir, workflow'ları test edip optimize ederiz."
    },
    {
      step: 4,
      title: "Test ve deploy",
      description: "Kapsamlı testler yapar, hataları düzeltir, canlıya alır ve izleme sistemleri kurarız."
    },
    {
      step: 5,
      title: "İzleme ve optimizasyon",
      description: "Performansı sürekli izler, raporlar sunar, gerektiğinde workflow'ları iyileştirir ve yeni fırsatlar sunarız."
    }
  ]

  return (
    <ServicePageLayout
        title="İş Akışı ve AI Otomasyonları"
        description="n8n ile işletmenizin manuel süreçlerini otomatikleştirin, zaman ve maliyet tasarrufu sağlayın"
        icon={<Bot className="w-10 h-10" />}
      >
        {/* Description Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">İşletmenizi Geleceğe Taşıyın</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Manuel süreçler, işletmenizin büyümesini yavaşlatan en büyük engellerden biridir.
                Moka Dijital olarak, n8n otomasyon platformunu kullanarak işletmenizin tüm tekrarlayan görevlerini otomatikleştiriyoruz.
              </p>
              <p>
                Potansiyel müşteri kazanımından sipariş yönetimine, müşteri ilişkilerinden raporlamaya kadar tüm süreçlerinizi otomatize ederek
                zaman ve maliyet tasarrufu sağlıyoruz. Yapay zeka entegrasyonları ile akıllık ve otomatik kararlar almanızı sağlıyoruz.
                Bu bizim uzmanlık alanımızdır - işletmenizi daha akıllı, daha hızlı ve daha verimli hale getiriyoruz.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Otomasyon Danışmanlığı Alın</h2>
              <p className="text-xl text-muted-foreground mb-8">
                İşletmenizi otomatikleştirmek için n8n uzmanlığımızdan yararlanın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Başlayın
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Ücretsiz Değerlendirme
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Form yakında eklenecek
              </p>
            </div>
          </div>
        </section>
      </ServicePageLayout>
    </>
}