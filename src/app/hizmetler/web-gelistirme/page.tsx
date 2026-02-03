import { Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ServicePageLayout from '@/components/services/ServicePageLayout'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceProcess from '@/components/services/ServiceProcess'

export default function WebGelistirmePage() {
  const benefits = [
    {
      title: "Modern teknolojiler ile hızlı performans",
      description: "Next.js, React gibi modern teknolojilerle geliştirilen web siteleri ile hızlı ve performanslı kullanıcı deneyimi sunuyoruz."
    },
    {
      title: "Mobil uyumlu (responsive) tasarım",
      description: "Tüm cihazlarda mükemmel görünen, mobil odaklı responsive tasarım ile kullanıcıların istediği her yerden erişim imkanı."
    },
    {
      title: "SEO uyumlu yapı",
      description: "Arama motorları için optimize edilmiş yapı ile web sitenizi Google'da üst sıralarda görünür kılarız."
    },
    {
      title: "Dönüşüm odaklı UX tasarımı",
      description: "Kullanıcı davranışlarını analiz ederek dönüşümü maksimize eden kullanıcı deneyimi tasarımları sunuyoruz."
    },
    {
      title: "Kolay içerik yönetimi",
      description: "Intuitif içerik yönetim sistemi ile güncellemeleri kolayca yapabilir, sitenizi istediğiniz güncelleyebilirsiniz."
    },
    {
      title: "PHP hosting ile uyumlu statik export",
      description: "Statik export özelliği ile modern sitenizi mevcut PHP hosting'inizde sorunsuz çalıştırabilirsiniz."
    }
  ]

  const steps = [
    {
      step: 1,
      title: "İhtiyaç analizi ve planlama",
      description: "Hedeflerinizi, kitlelerinizi ve rekabet ortamını analiz ederek projenize özel strateji ve yol haritası oluştururuz."
    },
    {
      step: 2,
      title: "Tasarım ve prototipleme",
      description: "Modern ve kullanıcı dostu arayüz tasarımları oluştururuz. Figma prototipler ile tasarımı onaylatırız."
    },
    {
      step: 3,
      title: "Geliştirme ve entegrasyon",
      description: "Modern teknolojilerle kod yazımını tamamlayır, gerekli entegrasyonları (CRM, ödeme sistemleri vb.) yaparız."
    },
    {
      step: 4,
      title: "Test ve deploy",
      description: "Tüm cihazlarda ve tarayıcılarda kapsamlı testler yapar, ardından sitenizi yayınlarız."
    },
    {
      step: 5,
      title: "Eğitim ve destek",
      description: "Site yönetimi hakkında eğitim verir, sürekli teknik destek ve bakım hizmetleri sunarız."
    }
  ]

  return (
    <ServicePageLayout
      title="Web Sitesi Geliştirme"
      description="Modern, hızlı ve dönüşüm odaklı web siteleri ile işletmenizi dijital dünyada öne çıkarın"
      icon={<Code className="w-10 h-10" />}
    >
      <section className="mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Modern Teknolojilerle Dijital Dönüşüm</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              İnternet dünyasında var olmanın ilk adımı, profesyonel ve etkileyici bir web sitesine sahip olmaktır.
              Moka Dijital olarak, işletmenizin hedeflerine en uygun modern web sitelerini tasarlıyoruz ve geliştiriyoruz.
            </p>
            <p>
              Next.js, React gibi modern teknolojilerle geliştirdiğimiz web siteleri,
              hız yükleme süreleri, mükemmel SEO performansı ve kullanıcı dostu arayüzler sunar.
              Statik export özelliği sayesinde modern sitenizi mevcut PHP hosting'inizde sorunsuz çalıştırabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <ServiceBenefits benefits={benefits} />

      <ServiceProcess steps={steps} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projenizi Konuşalım</h2>
            <p className="text-xl text-muted-foreground mb-8">
              İşletmeniz için özel tasarlanmış modern web sitesi için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Proje Başlatalım
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Ücretsiz Teklif
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Form yakında eklenecek
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
