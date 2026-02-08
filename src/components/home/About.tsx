import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Moka Dijital Hakkında</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dijital dönüşüm yolculuğunuzda size rehberlik ediyoruz
            </p>
          </div>

          {/* Two-column layout for desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Biz Kimiz?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Moka Dijital, dijital pazarlama ve otomasyon konularında
                  uzmanlaşmış, yenilikçi bir dijital ajanstır. Kurulduğumuz
                  günden bu yana, işletmelerin dijital varlıklarını optimize
                  ederek büyümelerine katkı sağlıyoruz. Ekip olarak,
                  teknolojinin gücünü stratejik çözümler birleştirerek,
                  işletmenizin potansiyelini tam olarak ortaya çıkarıyoruz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Uzmanlık Alanlarımız
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Google İşletme optimizasyonu, yerel ve global SEO, potansiyel
                  müşteri kazanımı sistemleri, web geliştirme ve dijital reklam
                  yönetimi gibi alanlarda uzman ekibimizle hizmet veriyoruz.
                  Özellikle n8n ile entegre iş akışı otomasyonları ve AI tabanlı
                  çözümlerle işletmenizin verimliliğini artırıyoruz. Dijital
                  dönüşüm süreçlerinize end-to-end çözümler sunuyoruz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Yaklaşımımız</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Takımımız, her projeye müşteri odaklı bir yaklaşımla
                  yaklaşıyor. Sadece hizmet sunmakla kalmıyor, aynı zamanda
                  işletmenizin hedeflerine ulaşmasına gerçekçi ve ölçülebilir
                  stratejiler geliştiriyoruz. Veri odaklı kararlarla
                  dönüşümlerinizi maksimize ediyor ve rekabet avantajınızı
                  kalıcı hale getiriyoruz. Müşterilerimizin başarısı bizim
                  başarımız.
                </p>
              </div>
            </div>

            {/* Stats/Highlights */}
            <div className="bg-muted/30 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    100+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Başarı Projesi
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    5+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Yıl Deneyim
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Mutlu Müşteri
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Destek Hizmeti
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-3">İletişim</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    📧{' '}
                    <a
                      href="mailto:iletisim@mokadijital.com"
                      className="hover:text-foreground transition-colors"
                    >
                      iletisim@mokadijital.com
                    </a>
                  </p>
                  <p>
                    📞{' '}
                    <a
                      href="tel:+905545377751"
                      className="hover:text-foreground transition-colors"
                    >
                      +90 (554) 537 77 51
                    </a>
                  </p>
                  <p>
                    📍 Kızılay, Fevzi Çakmak-1 Sk. No:11, 06420 Çankaya/Ankara
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
