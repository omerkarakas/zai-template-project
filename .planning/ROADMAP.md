# Roadmap: Moka Dijital Web Sitesi

## Overview

Modern dijital ajans web sitesi geliştirme projesi: Next.js statik export ile PHP hostinge deploy edilebilir, 7 sayfalı (ana sayfa + 6 hizmet sayfası), n8n webhook entegrasyonlu lead generation sistemi. Temel kurulumdan başlayıp sayfa yapısına, form entegrasyonuna, SEO optimizasyonuna ve dönüşüm odaklı PMK demo özelliklerine kadar ilerleyen doğrusal bir yolculuk.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Proje Kurulumu & Temel Konfigürasyon** - Next.js statik export ile çalışacak proje yapısı kurulur
- [ ] **Phase 2: Sayfa Yapısı & İçerik** - Ana sayfa ve 6 hizmet sayfası oluşturulur, tasarım dili uygulanır
- [ ] **Phase 3: Form Entegrasyonu & n8n Webhook** - Tüm sayfalara iletişim formları eklenir ve n8n'a bağlanır
- [ ] **Phase 4: SEO & Performans Optimizasyonu** - Meta veriler, sitemap ve performans optimizasyonu yapılır
- [ ] **Phase 5: Test & Deploy** - Mobil uyumluluk testi, cPanel deploy ve son kontroller yapılır
- [ ] **Phase 6: PMK Lead Scoring Demo** - Potansiyel Müşteri Kazanımı sayfasına interaktif demo eklenir

## Phase Details

### Phase 1: Proje Kurulumu & Temel Konfigürasyon
**Goal**: Next.js statik export ile PHP hostinge deploy edilebilen çalışan proje yapısı kurulur
**Depends on**: Nothing (first phase)
**Requirements**: TECH-02
**Success Criteria** (what must be TRUE):
  1. Next.js 15 projesi `output: 'export'` konfigürasyonuyla statik HTML/CSS/JS olarak build alabilir
  2. TypeScript, Tailwind CSS ve temel UI component library kurulur ve çalışır
  3. `next-export-optimize-images` plugin'i ile görseller build time'da optimize edilir
  4. Proje lokal development ortamında (`npm run dev`) hatasız çalışır
**Plans**: 1 plan

Plans:
- [ ] 01-01-PLAN.md — Initialize Next.js 15 project with TypeScript, Tailwind CSS, and static export configuration

### Phase 2: Sayfa Yapısı & İçerik
**Goal**: Ana sayfa ve 6 hizmet sayfası oluşturulur, tutarlı tasarım dili ve navigasyon uygulanır
**Depends on**: Phase 1
**Requirements**: HOME-01, HOME-02, HOME-03, SERV-01, SERV-02, SERV-03, SERV-04, SERV-05, SERV-06, CONT-01, CONT-02, CONT-03, CONT-04, NAV-01, NAV-02, DSGN-01, DSGN-02, DSGN-03
**Success Criteria** (what must be TRUE):
  1. Ana sayfada hero section, 6 hizmet özeti kartları ve hakkımızda bölümü gösterilir
  2. Her 6 hizmet sayfası (Google İşletme, SEO, PMK, Web Geliştirme, Reklam, Otomasyon) açılır ve içeriği görünür
  3. Her hizmet sayfasında hizmet açıklaması, faydalar, süreç gösterimi ve net CTA butonları yer alır
  4. Tüm sayfalarda Moka Dijital logosu, tutarlı renk paleti ve tipografi kullanılır
  5. Header menüsünden tüm sayfalara navigasyon yapılabilir, footer tüm sayfalarda tutarlıdır
**Plans**: TBD

### Phase 3: Form Entegrasyonu & n8n Webhook
**Goal**: Her hizmet sayfasına iletişim formu eklenir ve n8n workflow'una entegre edilir
**Depends on**: Phase 2
**Requirements**: FORM-01, FORM-02, FORM-03, FORM-04, FORM-05
**Success Criteria** (what must be TRUE):
  1. Her hizmet sayfasında çalışan bir iletişim formu yer alır
  2. Form提交ıldığında veri n8n webhook'una POST edilir ve n8n workflow çalışır
  3. Form validasyonu (React Hook Form + Zod) çalışır, geçersiz veri gönderilemez
  4. Form提交ıldığında loading state gösterilir, başarılı/başarısız durumları kullanıcıya bildirilir
**Plans**: TBD

### Phase 4: SEO & Performans Optimizasyonu
**Goal**: SEO için meta veriler, sitemap ve performans optimizasyonu yapılır
**Depends on**: Phase 2
**Requirements**: TECH-03, TECH-04, TECH-05
**Success Criteria** (what must be TRUE):
  1. Her sayfa için meta title, description ve Open Graph tags tanımlanır
  2. Sitemap.xml ve robots.txt build time'da oluşturulur ve erişilebilir
  3. Tüm sayfalar Türkçe SEO-friendly URL yapısına sahiptir (/hizmetler/google-isletme-optimizasyonu gibi)
  4. Site Core Web Vitals metriklerini geçer (LCP, FID, CLS)
**Plans**: TBD

### Phase 5: Test & Deploy
**Goal**: Mobil uyumluluk test edilir, PHP hostinge deploy edilir ve tüm fonksiyonlar doğrulanır
**Depends on**: Phase 3, Phase 4
**Requirements**: TECH-01
**Success Criteria** (what must be TRUE):
  1. Site mobil, tablet ve desktop cihazlarda responsive olarak çalışır
  2. Statik export build'i cPanel/Plesk PHP hostinge upload edilebilir ve çalışır
  3. Tüm formlar production ortamında n8n'a başarıyla veri gönderir
  4. Tüm sayfalar farklı tarayıcılarda (Chrome, Firefox, Safari) hatasız açılır
**Plans**: TBD

### Phase 6: PMK Lead Scoring Demo
**Goal**: Potansiyel Müşteri Kazanımı sayfasında interaktif lead scoring demo çalışır
**Depends on**: Phase 3, Phase 5
**Requirements**: DEMO-01, DEMO-02, DEMO-03
**Success Criteria** (what must be TRUE):
  1. PMK sayfasında ziyaretçi demo formu doldurduğunda canlı lead scoring akışı başlar
  2. Lead'in hangi aşamada olduğunu gösteren real-time status tracking görünür
  3. n8n workflow'larının görsel gösterimi (workflow visualization) yer alır ve ajansın yetkinliğini sergiler
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Proje Kurulumu & Temel Konfigürasyon | 0/1 | Planning complete | - |
| 2. Sayfa Yapısı & İçerik | 0/TBD | Not started | - |
| 3. Form Entegrasyonu & n8n Webhook | 0/TBD | Not started | - |
| 4. SEO & Performans Optimizasyonu | 0/TBD | Not started | - |
| 5. Test & Deploy | 0/TBD | Not started | - |
| 6. PMK Lead Scoring Demo | 0/TBD | Not started | - |
