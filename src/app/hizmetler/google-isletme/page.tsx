import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ServicePageLayout from '@/components/services/ServicePageLayout'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceProcess from '@/components/services/ServiceProcess'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function GoogleIsletmePage() {
  const benefits = [
    {
      title: "Yerel aramalarda üst sıralarda görünme",
      description: "İşletmenizin bulunduğunuz bölgede yapılan aramalarda ilk sıralarda yer alarak daha çok müşteriye ulaşın."
    },
    {
      title: "Müşteri yorumlarını yönetme ve artırma",
      description: "Güncel ve pozitif yorumlar toplayarak işletme güvenilirliğinizi artırın ve potansiyel müşterileri etkileyin."
    },
    {
      title: "Post ve güncelleme ile etkileşim artışı",
      description: "Düzenli yayınlar ve güncellemeler ile profilinizi canlı tutun, müşteri etkileşimlerini artırın."
    },
    {
      title: "Rakip analizi ve strateji",
      description: "Rakiplerinizin performansını analiz ederek öne geçecek stratejiler geliştirin."
    },
    {
      title: "Detaylı performans raporlama",
      description: "Ayda bir gönderdiğimiz raporlarla profilinizin performansını ve ilerlemenizi takip edin."
    },
    {
      title: "Daha çok görüşme ve yönlendirme",
      description: "Optimize edilmiş profiliniz sayesinde daha çok telefon görüşmesi ve siteye yönlendirme elde edin."
    }
  ]

  const steps = [
    {
      step: 1,
      title: "Mevcut durum analizi",
      description: "Mevcut Google İşletme Profilinizi detaylı olarak analiz ederiz. Kategori seçimi, açıklama, fotoğraflar ve bilgilerin mevcut durumunu kontrol eder."
    },
    {
      step: 2,
      title: "Profil optimizasyonu",
      description: "Doğru kategori seçimi, etkileyici açıklama yazma, fotoğraf optimizasyonu ve iletişim bilgilerini güncelleyerek profilinizi optimize ederiz."
    },
    {
      step: 3,
      title: "İçerik stratejisi ve post planlaması",
      description: "İşletmenize uygun içerik stratejisi oluştururuz. Düzenli postlar, güncellemeler ve etkinlik duyurularıyla profilinizi canlı tutarız."
    },
    {
      step: 4,
      title: "Yönetim ve raporlama",
      description: "Müşteri yorumlarını yönetir, sorulara hızlı cevaplar veririz. Ayda bir detaylı performans raporu sunarız."
    }
  ]

  return (
    <>
      <Header />
      <ServicePageLayout
        title="Google İşletme Optimizasyonu"
        description="İşletmenizin Google İşletme Profili'ni optimize ederek yerel aramalarda öne çıkarın"
        icon={<MapPin className="w-10 h-10" />}
      >
        {/* Description Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Google İşletme ile Yerel Pazarda Öne Çıkın</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Google İşletme Profili, işletmenizin Google Arama ve Haritalar'da görünür olmasını sağlayan ücretsiz bir araçtır.
                Moka Dijital olarak, işletmenizin yerel aramalarda üst sıralarda yer alması için profesyonel optimizasyon hizmetleri sunuyoruz.
              </p>
              <p>
                Güncel istatistiklere göre, %81'i müşteri yorumlarını okumadan alışveriş kararını alıyor.
                Optimize edilmiş bir Google İşletme Profili ile işletmeniz güvenilirliğini artırırken,
                potansiyel müşterilerin sizi bulmasını kolaylaştırıyoruz.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Başlamak İçin Doğru Zaman</h2>
              <p className="text-xl text-muted-foreground mb-8">
                İşletmenizi yerel aramalarda birincil sıraya taşıyacak profesyonel hizmetlerden faydalanın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Hemen Başlayın
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Ücretsiz Danışmanlık
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Form yakında eklenecek
              </p>
            </div>
          </div>
        </section>
      </ServicePageLayout>
      <Footer />
    </>
  )
}