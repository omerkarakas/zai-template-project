import { Search } from 'lucide-react'
import ServicePageLayout from '@/components/services/ServicePageLayout'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceProcess from '@/components/services/ServiceProcess'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function SeoPage() {
  const benefits = [
    {
      title: "Google arama sonuçlarında üst sıralara yükselme",
      description: "Hedeflediğiniz anahtar kelimelerde Google'da ilk sayfada ve üst sıralarda yer alarak organik trafik kazanın."
    },
    {
      title: "Hedef kitleye uygun anahtar kelime stratejisi",
      description: "Sektörünüze ve hedef kitlenize özel derinlemesine anahtar kelime analizi yaparak doğru kitleye ulaşın."
    },
    {
      title: "Teknik SEO optimizasyonu",
      description: "Site hızı, mobil uyumluluk, URL yapısı ve diğer teknik faktörleri optimize ederek Google'ın sizi daha iyi indekslemesini sağlayın."
    },
    {
      title: "İçerik SEO ve blog stratejisi",
      description: "SEO odaklı blog yazıları ve içeriklerle sitenizi otorite haline getirin, kullanıcıların ihtiyaçlarını karşılayın."
    },
    {
      title: "Rakip analizi ve fırsat tespiti",
      description: "Rakiplerinizi analiz ederek atlanılan fırsatları belirleyin, rekabet avantajı elde edin."
    },
    {
      title: "Aylık performans raporları",
      description: "Kapsamlı SEO raporlarıyla ilerlemeyi takip edin, ROI'yi ölçün ve stratejiyi geliştirin."
    }
  ]

  const steps = [
    {
      step: 1,
      title: "SEO denetimi ve mevcut durum analizi",
      description: "Web sitenizin mevcut SEO durumunu kapsamlı olarak analiz ederiz. Teknik sorunları, içeriği ve back profilini değerlendiririz."
    },
    {
      step: 2,
      title: "Anahtar kelime araştırması ve strateji",
      description: "Hedef kitlenizin aradığı tüm ilgili anahtar kelimeleri analiz eder, rekabet düzeylerini değerlendirir ve strateji oluştururuz."
    },
    {
      step: 3,
      title: "On-page ve teknik SEO optimizasyonu",
      description: "Başlıkları, meta etiketleri, URL yapıları, resim optimizasyonu ve teknik SEO faktörlerini optimize ederiz."
    },
    {
      step: 4,
      title: "İçerik planlaması ve link building",
      description: "SEO odaklı içerikler üretir, iç link yapılarını optimize ederir. Kapsamlı link building kampanyaları yönetiriz."
    },
    {
      step: 5,
      title: "Takip ve raporlama",
      description: "Haftalık performans takibi yapar, aylık detaylı raporlar sunar ve stratejiyi sürekli optimize ederiz."
    }
  ]

  return (
    <>
      <Header />
      <ServicePageLayout
        title="Yerel SEO & Global SEO"
        description="Hedef kitlenize ulaşın: Yerel işletmeler için yerel SEO, global markalar için uluslararası SEO"
        icon={<Search className="w-10 h-10" />}
      >
        {/* Description Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Güçlü Bir Online Varlık için SEO Stratejisi</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                SEO (Search Engine Optimization), web sitenizin Google ve diğer arama motorlarında daha yüksek sıralarda yer almasını
                sağlayan dijital pazarlama stratejilerinin tümüdür. Moka Dijital olarak, hem yerel işletmeler için Yerel SEO
                hem de global markalar için Uluslararası SEO hizmetleri sunuyoruz.
              </p>
              <p>
                Doğru SEO stratejisi ile işletmenizin hedef kitlesine doğrudan ulaşabilir, organik trafiğinizi artırabilir
                ve satışlarınızı önemli ölçüde artırabilirsiniz. Uzman ekibimiz ile rekabetin önde yer alın.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO Performansınızı Hemen Artırın</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Uzman SEO ekibimiz ile hedef kitlenize ulaşın, organik trafiğinizi katlayın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Ücretsiz SEO Analizi İsteyin
                </button>
                <button className="px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300">
                  SEO Stratejisi Oluşturun
                </button>
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