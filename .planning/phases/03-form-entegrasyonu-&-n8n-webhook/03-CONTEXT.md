# Phase 3: Form Entegrasyonu & n8n Webhook - Context

**Gathered:** 2026-02-03
**Status:** Ready for planning

## Phase Boundary

Her hizmet sayfasına iletişim formu eklenir, React Hook Form + Zod ile validasyon yapılır, form verileri n8n webhook'una POST edilir, loading ve feedback gösterilir. Modal popup içinde form çalışır.

## Implementation Decisions

### Form fields & layout
- **Form alanları:** İsim, telefon, email, şirket adı, şirket web sitesi (opsiyonel), mesaj (opsiyonel), gizlilik politikası checkbox
- **Zorunlu alanlar:** İsim, telefon, email, şirket adı, gizlilik checkbox (mesaj ve website opsiyonel)
- **Form sunumu:** Modal popup — Hero CTA ve sayfa sonu CTA butonları aynı modal'ı açar
- **Sayfa bağlamı:** Gizli alandan hangi hizmet sayfasından geldiği otomatik yakalanır
- **Modal kapatma:** X butonu + dış tıklama + ESC tuşu ile kapatılabilir
- **Scroll davranışı:** Modal açıkken arka plan scroll serbest bırakılır

### n8n webhook entegrasyonu
- **Gönderim yöntemi:** Client-side'tan doğrudan fetch ile n8n webhook URL'sine POST
- **Webhook URL:** Environment variable ile (`NEXT_PUBLIC_N8N_WEBHOOK_URL`)
- **Veri formatı:** Form verileri + metadata (timestamp, page, source bilgileri)
- **Hata yönetimi:** Basit hata mesajı gösterilir ("Bir sorun oluştu, lütfen tekrar deneyin")

### Form validasyon davranışı
- **Validasyon zamanlaması:** Claude takdirinde (on blur/onSubmit kombinasyonu önerilir)
- **Email validasyonu:** Standart regex ile geçerli email formatı kontrolü
- **Hata gösterimi:** Her hatalı alanın altında kırmızı text ile gösterilir

### Form UI/UX durumları
- **Loading durumu:** Modal'ın üstünde full overlay spinner gösterilir
- **Başarılı durum:** Success mesajı + 3 saniye sonra otomatik kapanma
- **Submit sonrası:** Modal tamamen kapanır
- **Gizlilik politikası:** Checkbox text'ine tıklayınca gizlilik politikası sayfası link ile açılır

### Claude's Discretion
- Modal içinde form alanları düzeni (tek/iki sütun) — mobil uyumlu en iyi düzen
- Validasyon zamanlaması (on blur vs onChange vs onSubmit)
- Hata mesajı metinleri ve tonlama
- Spinner tasarımı ve animasyonu
- Success mesajı içeriği ve tasarımı

## Specific Ideas

- Modal form — hem Hero'da hem sayfa sonunda aynı form açılacak
- Lead tracking için gizli service alanı
- Full overlay spinner ile modern loading deneyimi

## Deferred Ideas

None — discussion stayed within phase scope

---

*Phase: 03-form-entegrasyonu-&-n8n-webhook*
*Context gathered: 2026-02-03*
