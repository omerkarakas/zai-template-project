/**
 * Centralized metadata constants for Moka Dijital website
 * Used for SEO meta tags, sitemap generation, and Open Graph data
 */

export interface ServiceMetadata {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

/**
 * Homepage metadata
 * Title format: Dijital Pazarlama Ajansı | Moka Dijital - Google İşletme, SEO, PMK
 */
export const HOMEPAGE_METADATA: ServiceMetadata = {
  slug: '',
  title: 'Dijital Pazarlama Ajansı | Moka Dijital - Google İşletme, SEO, PMK',
  description: 'Google İşletme, SEO, PMK ve dijital pazarlama çözümleri ile işletmenizi büyütün. Yerel aramalarda öne çıkın.',
  keywords: [
    'dijital pazarlama',
    'seo ajansı',
    'google isletme',
    'potansiyel müşteri kazanımı',
    'moka dijital',
  ],
  ogImage: '/og-image.jpg',
  changeFrequency: 'weekly',
  priority: 1,
};

/**
 * Service page metadata for all 6 services
 * Titles follow format: [Service Name] Hizmeti | [Category] | Moka Dijital
 * Descriptions are 150-160 characters with keyword-first placement
 */
export const SERVICE_METADATA: Record<string, ServiceMetadata> = {
  'google-isletme': {
    slug: 'google-isletme',
    title: 'Google İşletme SEO Hizmeti Türkiye | Moka Dijital',
    description: 'Google İşletme profilinizi optimize ederek yerel aramalarda öne çıkın. Müşteri incelemeleri, fotoğraf yönetimi ve yerel SEO ile görünürlüğünüzü artırın.',
    keywords: [
      'google isletme optimizasyonu',
      'google business profile',
      'yerel seo',
      'google maps optimizasyonu',
      'musteri incelemeleri yonetimi',
    ],
    ogImage: '/og-image.jpg',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  seo: {
    slug: 'seo',
    title: 'SEO Hizmetleri | Yerel SEO & Global SEO | Moka Dijital',
    description: 'SEO hizmetleri ile organik arama sıralamanızı yükseltin. Anahtar kelime analizi, backlink stratejisi ve teknik SEO ile dijital görünürlük kazanın.',
    keywords: [
      'seo hizmetleri',
      'yerel seo',
      'global seo',
      'anahtar kelime analizi',
      'backlink stratejisi',
    ],
    ogImage: '/og-image.jpg',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  pmk: {
    slug: 'potansiyel-musteri-kazanimi',
    title: 'Potansiyel Müşteri Kazanımı Hizmeti | n8n Otomasyon | Moka Dijital',
    description: 'n8n otomasyon ile potansiyel müşteri kazanın. Lead scoring, otomatik takip ve CRM entegrasyonu ile dönüşüm oranlarınızı maksimize edin.',
    keywords: [
      'potansiyel müşteri kazanımı',
      'lead generation',
      'n8n otomasyon',
      'lead scoring',
      'crm entegrasyonu',
    ],
    ogImage: '/og-image.jpg',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  'web-gelistirme': {
    slug: 'web-gelistirme',
    title: 'Web Sitesi Geliştirme Hizmeti | Next.js | Moka Dijital',
    description: 'Özel web sitesi geliştirme ile modern, hızlı ve mobil uyumlu siteler. Next.js, responsive tasarım ve SEO optimizasyonu ile dijital varlığınızı güçlendirin.',
    keywords: [
      'web sitesi geliştirme',
      'next.js',
      'responsive tasarım',
      'mobil uyumlu web sitesi',
      'custom web development',
    ],
    ogImage: '/og-image.jpg',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  reklam: {
    slug: 'reklam',
    title: 'Dijital Reklam Yönetimi Hizmeti | Google Ads | Moka Dijital',
    description: 'Google Ads ve Meta reklamları ile hedef kitlenize ulaşın. ROAS optimizasyonu, A/B testleri ve bütçe yönetimi ile reklam verimliliğinizi artırın.',
    keywords: [
      'dijital reklam yonetimi',
      'google ads',
      'meta reklamlari',
      'facebook reklamlari',
      'roas optimizasyonu',
    ],
    ogImage: '/og-image.jpg',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  otomasyon: {
    slug: 'otomasyon',
    title: 'İş Akışı Otomasyonları Hizmeti | n8n | Moka Dijital',
    description: 'n8n ile iş akışı otomasyonları ve AI entegrasyonu. Manuel işleri otomatize edin, verimliliği artırın ve operasyonel maliyetleri düşürün.',
    keywords: [
      'is akisi otomasyonu',
      'n8n',
      'ai entegrasyonu',
      'is otomasyonu',
      'workflow automation',
    ],
    ogImage: '/og-image.jpg',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
};

/**
 * Get all services as array for iteration
 */
export const getAllServices = (): ServiceMetadata[] => {
  return Object.values(SERVICE_METADATA);
};

/**
 * Get service metadata by slug
 */
export const getServiceBySlug = (slug: string): ServiceMetadata | undefined => {
  return SERVICE_METADATA[slug];
};
