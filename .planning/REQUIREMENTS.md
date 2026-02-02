# Requirements: Moka Dijital Web Sitesi

**Defined:** 2026-02-02
**Core Value:** Ziyaretçileri potansiyel müşteriye dönüştüren, her hizmet sayfasında doğrudan iletişim imkanı sunan, ajansın yeteneklerini (özellikle n8n ile Potansiyel Müşteri Kazanımı sistemini) showcase eden dönüşüm odaklı web sitesi.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Ana Sayfa

- [ ] **HOME-01**: Ana sayfada hero section ile değer önerisi sunulur
- [ ] **HOME-02**: Ana sayfada 6 hizmetin özet kartları gösterilir
- [ ] **HOME-03**: Ana sayfada hakkımızda bölümü yer alır

### Hizmet Sayfaları

- [ ] **SERV-01**: Google İşletme Optimizasyonu sayfası oluşturulur
- [ ] **SERV-02**: Yerel SEO / Global SEO sayfası oluşturulur
- [ ] **SERV-03**: Potansiyel Müşteri Kazanımı sayfası oluşturulur
- [ ] **SERV-04**: Web sitesi geliştirme sayfası oluşturulur
- [ ] **SERV-05**: Dijital Reklam Yönetimi sayfası oluşturulur
- [ ] **SERV-06**: İşletme iş akışı ve yapay zeka otomasyonları sayfası oluşturulur

### Hizmet Sayfası İçeriği

- [ ] **CONT-01**: Her hizmet sayfasında hizmet açıklaması bölümü yer alır
- [ ] **CONT-02**: Her hizmet sayfasında faydalar bölümü yer alır
- [ ] **CONT-03**: Her hizmet sayfasında süreç gösterimi bölümü yer alır
- [ ] **CONT-04**: Her hizmet sayfasında net CTA butonları yer alır

### İletişim Formları

- [ ] **FORM-01**: Her hizmet sayfasında iletişim formu yer alır
- [ ] **FORM-02**: İletişim formları n8n webhook'una entegre edilir
- [ ] **FORM-03**: Formlarda React Hook Form + Zod validasyonu çalışır
- [ ] **FORM-04**: Formlarda success/error durumları gösterilir
- [ ] **FORM-05**: Formlarda loading state gösterilir

### PMK Demo Özellikleri

- [ ] **DEMO-01**: PMK sayfasında canlı n8n lead scoring demo çalışır
- [ ] **DEMO-02**: Lead'in hangi aşamada olduğunu gösteren real-time status tracking çalışır
- [ ] **DEMO-03**: n8n workflow'larının görsel gösterimi (workflow visualization) yer alır

### Teknik

- [ ] **TECH-01**: Site mobil uyumlu (responsive) tasarımına sahiptir
- [ ] **TECH-02**: Next.js statik export (`output: 'export'`) ile PHP hostinge deploy edilebilir
- [ ] **TECH-03**: Site performans optimize edilir (Core Web Vitals)
- [ ] **TECH-04**: Temel SEO implementasyonu yapılır (meta tags, sitemap, robots.txt)
- [ ] **TECH-05**: Tüm sayfalar Türkçe SEO-friendly URL yapısına sahiptir

### Navigasyon

- [ ] **NAV-01**: Site genelinde net ve kullanışlı navigasyon menüsü yer alır
- [ ] **NAV-02**: Header ve footer component'leri tüm sayfalarda tutarlıdır

### Görsel Tasarım

- [ ] **DSGN-01**: Mevcut Moka Dijital logosu kullanılır
- [ ] **DSGN-02**: Logo uyumlu renk paleti ve tipografi oluşturulur
- [ ] **DSGN-03**: Tüm sayfalarda tutarlı görsel tasarım dili uygulanır

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Ek Özellikler

- **V2-01**: ROI Calculator — Hizmetlerin ROI'sini hesaplayan interaktif araç
- **V2-02**: WhatsApp Integration — Form ile birlikte WhatsApp iletişim seçeneği
- **V2-03**: Case Studies — Sektörel başarı hikayeleri sayfaları
- **V2-04**: KVKK/Gizlilik sayfası — Yasal uyum sayfaları
- **V2-05**: İletişim bilgileri sayfası — Detaylı iletişim sayfası

### İleri Özellikler

- **V2-06**: Blog/News section — İçerik pazarlaması için blog
- **V2-07**: Client Portal — Müşteri self-service portalı
- **V2-08**: Multi-language Support — İngilizce ve diğer diller
- **V2-09**: AI Chat Assistant — 24/7 destek asistanı
- **V2-10**: Video Explanations — Hizmetleri açıklayan videolar
- **V2-11**: Automated Meeting Scheduler — Calendar entegrasyonu
- **V2-12**: Dark Mode — Koyu tema desteği

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Blog sistemi (v1) | Statik hizmet sayfaları odaklı, blog içerik yönetimi gerektirir |
| Admin panel | İçerik doğrudan code üzerinden yönetilecek |
| Kullanıcı hesapları/giriş sistemi | Ajans sitesi, üyelik sistemi yok |
| Çoklu dil desteği (v1) | Türkçe odaklı, dil lokalizasyonu v2'ye ertelendi |
| E-ticaret fonksiyonları | Hizmet satışı, ürün satışı yok |
| API Routes | Next.js statik export ile uyumsuz |
| Server-side rendering | Next.js statik export ile uyumsuz |
| Middleware | Next.js statik export ile uyumsuz |
| Dynamic routes | generateStaticParams gerektirir, statik sayfalar yeterli |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| HOME-01 | Phase 2 | Pending |
| HOME-02 | Phase 2 | Pending |
| HOME-03 | Phase 2 | Pending |
| SERV-01 | Phase 2 | Pending |
| SERV-02 | Phase 2 | Pending |
| SERV-03 | Phase 2 | Pending |
| SERV-04 | Phase 2 | Pending |
| SERV-05 | Phase 2 | Pending |
| SERV-06 | Phase 2 | Pending |
| CONT-01 | Phase 2 | Pending |
| CONT-02 | Phase 2 | Pending |
| CONT-03 | Phase 2 | Pending |
| CONT-04 | Phase 2 | Pending |
| NAV-01 | Phase 2 | Pending |
| NAV-02 | Phase 2 | Pending |
| DSGN-01 | Phase 2 | Pending |
| DSGN-02 | Phase 2 | Pending |
| DSGN-03 | Phase 2 | Pending |
| FORM-01 | Phase 3 | Pending |
| FORM-02 | Phase 3 | Pending |
| FORM-03 | Phase 3 | Pending |
| FORM-04 | Phase 3 | Pending |
| FORM-05 | Phase 3 | Pending |
| TECH-02 | Phase 1 | Pending |
| TECH-04 | Phase 4 | Pending |
| TECH-05 | Phase 4 | Pending |
| TECH-03 | Phase 4 | Pending |
| TECH-01 | Phase 5 | Pending |
| DEMO-01 | Phase 6 | Pending |
| DEMO-02 | Phase 6 | Pending |
| DEMO-03 | Phase 6 | Pending |

**Coverage:**
- v1 requirements: 31 total
- Mapped to phases: 31
- Unmapped: 0 ✓

**Phase Distribution:**
- Phase 1 (Proje Kurulumu): 1 requirement (TECH-02)
- Phase 2 (Sayfa Yapısı & İçerik): 17 requirements (HOME-01/02/03, SERV-01/02/03/04/05/06, CONT-01/02/03/04, NAV-01/02, DSGN-01/02/03)
- Phase 3 (Form Entegrasyonu): 5 requirements (FORM-01/02/03/04/05)
- Phase 4 (SEO & Performans): 3 requirements (TECH-03/04/05)
- Phase 5 (Test & Deploy): 1 requirement (TECH-01)
- Phase 6 (PMK Demo): 3 requirements (DEMO-01/02/03)

---
*Requirements defined: 2026-02-02*
*Last updated: 2026-02-02 after roadmap creation*
