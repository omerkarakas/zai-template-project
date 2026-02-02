# Moka Dijital Web Sitesi

## What This Is

Moka Dijital dijital ajansı için mevcut WordPress sitesinin yerine geçecek, müşteri kazanma odaklı modern bir web sitesi. Ana sayfa ve 6 hizmet sayfasından oluşan, Next.js statik export ile PHP hostingte çalışacak, tüm iletişim formlarının n8n workflow'una entegre olduğu lead generation sistemi.

## Core Value

Ziyaretçileri potansiyel müşteriye dönüştüren, her hizmet sayfasında doğrudan iletişim imkanı sunan, ajansın yeteneklerini (özellikle n8n ile Potansiyel Müşteri Kazanımı sistemini) showcase eden dönüşüm odaklı web sitesi.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Ana sayfa: Hero section + 6 hizmet özeti kartları
- [ ] Google İşletme Optimizasyonu sayfası + iletişim formu
- [ ] Yerel SEO / Global SEO sayfası + iletişim formu
- [ ] Potansiyel Müşteri Kazanımı sayfası + iletişim formu (n8n webhook, lead scoring demo)
- [ ] Web sitesi geliştirme sayfası + iletişim formu
- [ ] Dijital Reklam Yönetimi sayfası + iletişim formu
- [ ] İşletme iş akışı ve yapay zeka otomasyonları sayfası + iletişim formu
- [ ] Tüm iletişim formlarının n8n workflow'una entegrasyonu
- [ ] Mobil uyumlu (responsive) tasarım
- [ ] Next.js statik export ile PHP hostinge deploy

### Out of Scope

- Blog sistemi — v1'de statik hizmet sayfaları odaklı
- Admin panel — içerik doğrudan code üzerinden yönetilecek
- Kullanıcı hesapları/giriş sistemi — ajans sitesi, üyelik sistemi yok
- Çoklu dil desteği — Türkçe odaklı
- E-ticaret fonksiyonları — hizmet satışı, ürün satışı yok

## Context

**Mevcut durum:**
- mokadijital.com'da çalışan WordPress sitesi var
- İçerikler mevcut siteden esinlenerek yeniden oluşturulacak
- Moka Dijital logosu mevcut

**Teknik yetkinlikler:**
- n8n ile iş akışı otomasyonları (ajansın core yetkinliği)
- Potansiyel Müşteri Kazanımı sistemi: WhatsApp ile soru dizisi → skorlama → görüşme ayarlama (n8n'de hazır)

**PMK sayfasının özel rolü:**
- Bu hizmet hem ajansın yeteneği olarak sunuluyor
- Hem de bu sayfa demo/showcase olarak işlev görecek
- Ziyaretçi formu doldurduğunda gerçek lead scoring akışı başlayacak
- Bu, ajansın n8n yetkinliğini sergileme fırsatı

**Hedef kitle:**
- Türkiye'deki KOBİ'ler ve işletmeler
- Dijital dönüşüm yapmak isteyenler
- Local SEO, Google işletme optimizasyonu ihtiyacı olanlar
- İşletmelerini otomatize etmek isteyenler

## Constraints

- **Hosting**: PHP hosting (cPanel/Plesk) — Node.js sunucusu yok
- **Build**: Next.js statik export (`output: 'export'`) gerekiyor
- **Backend**: Backend yok, n8n webhook ile entegrasyon
- **İçerik**: Mevcut WordPress siteden esinlenecek, sıfırdan yazılacak
- **Logo**: Mevcut logo kullanılacak, tasarım kimliği bu logoya uyumlu olacak

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js statik export | PHP hosting kısıtlaması — Node.js sunucusu yok | — Pending |
| Tüm formlar aynı n8n workflow'una | Basit ve tutarlı lead yönetimi | — Pending |
| PMK sayfası demo + showcase | Ajansın core yetkinliğini sergileme, kendi ürününü kullanarak satma | — Pending |
| Her hizmet sayfasında form | Dönüşüm odaklı, ziyaretçiyi kaybetmemek için doğrudan iletişim imkanı | — Pending |

---
*Last updated: 2025-02-02 after initialization*
