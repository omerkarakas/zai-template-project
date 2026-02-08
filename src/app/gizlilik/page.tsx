import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mokadijital.com';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası - Moka Dijital',
  description:
    'Moka Dijital gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme.',
  openGraph: {
    title: 'Gizlilik Politikası - Moka Dijital',
    description:
      'Moka Dijital gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme.',
    url: `${baseUrl}/gizlilik`,
    siteName: 'Moka Dijital',
    locale: 'tr_TR',
    type: 'website',
  },
  alternates: { canonical: `${baseUrl}/gizlilik` },
};

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-normal mb-8 text-foreground">
            Gizlilik Politikası
          </h1>

          <p>
            {metadata.openGraph?.siteName} olarak kişisel gizlilik haklarınıza
            saygı duyuyor ve sitemizde geçirdiğiniz süre zarfında bunu sağlamak
            için çaba sarf ediyoruz. Kişisel bilgilerinizin güvenliği ile ilgili
            açıklamalar aşağıda açıklanmış ve bilginize sunulmuştur.
          </p>
          <p>
            Kayıt dosyaları birçok standart web sunucusunda olduğu gibi &nbsp;
            {baseUrl}’da istatistiksel amaçlı log dosyaları kaydı tutmaktadır.
            Bu dosyalar; IP adresiniz, internet servis sağlayıcınız,
            tarayıcınızın özellikleri, işletim sisteminiz ve siteye giriş-çıkış
            sayfalarınız gibi standart bilgileri içermektedir. Log dosyaları
            kesinlikle istatistiksel amaçlar dışında kullanılmamakta ve
            mahremiyetinizi ihlal etmemektedir. Ip adresiniz ve diğer bilgiler,
            şahsi bilgileriniz ile ilişkilendirilmemektedir.
          </p>
          <p>
            Çerezler (Cookies) ”Cookie – Çerez” kelimesi web sayfası sunucusunun
            sizin bilgisayarınızın hard diskine yerleştirdiği ufak bir text
            dosyasını tanımlamak için kullanılmaktadır. Sitemizin bazı
            bölümlerinde kullanıcı kolaylığı sağlamak için çerez kullanılıyor
            olabilir. Ayrıca sitede mevcut bulunan reklamlar aracılığıyla,
            reklam verilerinin toplanması için cookie ve web beacon kullanılıyor
            olabilir. Bu tamamen sizin izninizle gerçekleşiyor olup, isteğiniz
            dahilinde internet tarayıcınızın ayarlarını değiştirerek bunu
            engellemeniz mümkündür.
          </p>
          <p>
            Kişisel Bilgilerin Toplanması ve Paylaşımı&nbsp; {baseUrl} isimli
            internet sayfamızda veya bu sayfamızın tanıtımını yaptığımız reklam
            çalışmalarında sizin girmiş olduğunuz isim, soy isim, telefon
            numarası ve adres bilgileri 3. Parti şahıs ya da işletmelerle
            kesinlikle paylaşmayacağımızı ve sadece şirketimiz {baseUrl}{' '}
            tarafından onayladığınız taktirde kampanya ve bilgi gönderimi
            amacıyla kullanılacağını temin ederiz.
          </p>
          <p>
            Websitemizde uygulanan gizlilik politikası ile ilgili her türlü
            soru, görüş ve düşüncelerinizi <a href={baseUrl}>{baseUrl}</a>{' '}
            adresindeki formu doldurarak iletebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
