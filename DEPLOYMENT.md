# Deployment Guide

This guide covers deploying the Moka Dijital website to PHP hosting (cPanel, shared hosting, etc.) using static export.

## Overview

The site is built as a static export using Next.js `output: 'export'`. The build output is a self-contained `out/` folder that can be uploaded to any web server.

## Prerequisites

- Access to hosting control panel (cPanel, Plesk, etc.) or FTP/SFTP credentials
- Node.js installed locally (for building)
- Git installed locally (optional, for cloning)

---

## Pre-Deploy Checklist

Complete these steps before deploying to production:

- [ ] **n8n workflow activated**
  - Go to https://ai.mokadijital.com
  - Navigate to Workflows -> "Lead Registration - Moka Dijital"
  - Click "Active" toggle to enable the workflow
  - Copy the Production URL from the Webhook node

- [ ] **Environment configured**
  - Copy `.env.production.example` to `.env.local`
  - Update `NEXT_PUBLIC_N8N_WEBHOOK_URL` with production webhook URL
  - Verify `NEXT_PUBLIC_BASE_URL=https://mokadijital.com`

- [ ] **Dependencies installed**
  - Run `npm install` to ensure all dependencies are present

- [ ] **Build succeeds**
  - Run `npm run build`
  - Verify no errors occur
  - Check that `out/` folder is created

- [ ] **Local test passed**
  - Run `npx serve@latest out`
  - Visit http://localhost:3000
  - Test form submission, navigation, and all pages

- [ ] **Build artifacts verified**
  - `out/index.html` exists
  - `out/hizmetler/` directory exists with 6 service pages
  - `out/_next/static/` contains optimized assets
  - `out/robots.txt` and `out/sitemap.xml` are present

---

## Build Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Build for Production

```bash
npm run build
```

Expected output:
- Build completes with 0 errors
- `out/` folder created with static files
- Build time: ~30-60 seconds depending on system

### 3. Verify Build Output

```bash
# Check key files exist
ls out/index.html
ls out/hizmetler/
ls out/_next/static/
ls out/robots.txt
ls out/sitemap.xml
ls out/404.html
```

---

## Upload Methods

Choose one of the following methods to upload the site:

### Option A: cPanel File Manager

1. **Zip the build output:**
   ```bash
   # From project root
   cd out
   zip -r ../site-build.zip .
   cd ..
   ```

2. **Upload via cPanel:**
   - Log in to cPanel
   - Navigate to File Manager
   - Go to `public_html` or your domain's root directory
   - Delete existing files (backup first if needed)
   - Upload `site-build.zip`
   - Extract the zip file
   - Ensure files are in the root (not in a subfolder)

3. **Verify:**
   - Check that `index.html` is in `public_html/`
   - Check that `hizmetler/` folder exists

### Option B: FTP/SFTP (Command Line)

1. **Upload using lftp:**
   ```bash
   lftp -u username,password -e "mirror -R out/ /public_html/; quit" ftp.mokadijital.com
   ```

2. **Or using sftp:**
   ```bash
   sftp username@mokadijital.com
   put -r out/* /public_html/
   ```

### Option C: FileZilla (GUI)

1. **Download FileZilla:** https://filezilla-project.org/

2. **Configure connection:**
   - Host: ftp.mokadijital.com (or your FTP host)
   - Username: (your FTP username)
   - Password: (your FTP password)
   - Port: 21 (FTP) or 22 (SFTP)

3. **Upload:**
   - Connect to server
   - Navigate to `public_html` on remote server
   - Navigate to `out/` on local machine
   - Select all files in `out/`
   - Drag and drop to `public_html/`
   - Wait for upload to complete

---

## Upload Location

### Target Directory

- **cPanel:** `public_html/`
- **Plesk:** `httpdocs/` or `public_html/`
- **Custom:** Your domain's document root

### Upload Strategy

**Full replacement (recommended):**

1. Backup existing files (if any)
2. Delete all files in target directory
3. Upload contents of `out/` folder
4. Preserve `.htaccess` if it contains custom rules

**Preserve .htaccess:**

If you have custom `.htaccess` rules (redirects, security headers, etc.):

1. Download existing `.htaccess`
2. Upload new files
3. Re-upload `.htaccess` to avoid overwriting

---

## Post-Deploy Verification

After uploading, verify the site is working correctly:

### 1. Homepage Loads

- Visit https://mokadijital.com
- Verify homepage renders without errors
- Check all sections are visible (Hero, Services, About)

### 2. Service Pages Accessible

Test all 6 service pages:

- [ ] https://mokadijital.com/hizmetler/google-isletme-optimizasyonu
- [ ] https://mokadijital.com/hizmetler/yerel-seo-global-seo
- [ ] https://mokadijital.com/hizmetler/potansiyel-musteri-kazanimi
- [ ] https://mokadijital.com/hizmetler/web-sitesi-gelistirme
- [ ] https://mokadijital.com/hizmetler/dijital-reklam-yonetimi
- [ ] https://mokadijital.com/hizmetler/is-akisi-ve-ai-otomasyonlari

### 3. Contact Forms Work

- [ ] Click "Hemen Teklif Al" button on any page
- [ ] Contact modal opens
- [ ] Fill out form fields (name, phone, email, etc.)
- [ ] Submit form
- [ ] Success message appears

### 4. n8n Webhook Receives Data

- [ ] Go to https://ai.mokadijital.com
- [ ] Open "Lead Registration - Moka Dijital" workflow
- [ ] Check executions log
- [ ] Verify new lead appears with all form data

### 5. Mobile Responsive

- [ ] Test on mobile device or browser DevTools (mobile view)
- [ ] Verify layout adapts to small screens
- [ ] Check navigation works on mobile
- [ ] Verify forms are usable on mobile

### 6. Browser Console Clean

- [ ] Open browser DevTools (F12)
- [ ] Check Console tab for errors
- [ ] Check Network tab for failed requests
- [ ] Verify no mixed content errors (HTTP/HTTPS)

### 7. SEO Files Accessible

- [ ] https://mokadijital.com/robots.txt exists
- [ ] https://mokadijital.com/sitemap.xml exists
- [ ] sitemap.xml contains all pages

---

## Troubleshooting

### 404 Errors on Pages

**Symptom:** Navigating to service pages shows 404 error

**Possible causes:**
- Files not uploaded correctly
- Incorrect server configuration
- Missing `.htaccess` for clean URLs

**Solutions:**
1. Verify `hizmetler/` folder exists on server
2. Check that `index.html` files exist in each service subfolder
3. Ensure server supports directory indexes (most do by default)
4. Check `.htaccess` for redirect rules that might interfere

### Form Not Submitting

**Symptom:** Contact form submit button shows loading, but no success/error message

**Possible causes:**
- Webhook URL not configured
- n8n workflow not active
- CORS or network issues

**Solutions:**
1. Check `.env.local` contains correct `NEXT_PUBLIC_N8N_WEBHOOK_URL`
2. Verify n8n workflow is active (check in n8n dashboard)
3. Open browser DevTools Network tab
4. Submit form and check for webhook request
5. If request fails, check CORS configuration in n8n

### Images Not Loading

**Symptom:** Images show broken image icon or don't display

**Possible causes:**
- Missing public folder upload
- Incorrect image paths

**Solutions:**
1. Verify images were optimized and included in build
2. Check `_next/static/` folder exists on server
3. Verify public images (if any) were uploaded
4. Check browser console for 404 errors on image requests

### Site Not Loading at All

**Symptom:** Blank page or server error

**Possible causes:**
- Server configuration issue
- Missing index.html
- DNS not propagated

**Solutions:**
1. Verify `index.html` exists in document root
2. Check server error logs (cPanel -> Metrics -> Errors)
3. Verify DNS points to correct server (propagation can take 24-48 hours)
4. Test with temporary URL if available

### Mixed Content Warnings

**Symptom:** Browser shows "Mixed Content" warning

**Possible causes:**
- HTTP resources on HTTPS page

**Solutions:**
1. Ensure all assets use HTTPS
2. Check for absolute URLs in code
3. Verify `.env.local` has `NEXT_PUBLIC_BASE_URL=https://` (not http://)

---

## Environment Variables Reference

See `.env.production.example` for all available environment variables:

| Variable | Purpose | Required |
|----------|---------|----------|
| `NEXT_PUBLIC_BASE_URL` | Production domain (https://mokadijital.com) | Yes |
| `NEXT_PUBLIC_N8N_WEBHOOK_URL` | n8n webhook URL for form submissions | Yes |

---

## Build Reference

**Build command:** `npm run build`

**Output location:** `out/`

**Output structure:**
```
out/
├── index.html              # Homepage
├── 404.html                # Custom 404 page
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
├── hizmetler/              # Service pages directory
│   ├── google-isletme-optimizasyonu/
│   │   └── index.html
│   ├── yerel-seo-global-seo/
│   │   └── index.html
│   ├── potansiyel-musteri-kazanimi/
│   │   └── index.html
│   ├── web-sitesi-gelistirme/
│   │   └── index.html
│   ├── dijital-reklam-yonetimi/
│   │   └── index.html
│   └── is-akisi-ve-ai-otomasyonlari/
│       └── index.html
└── _next/                  # Next.js static assets
    └── static/
        ├── chunks/         # JavaScript bundles
        ├── css/            # Optimized CSS
        └── media/          # Images and fonts
```

---

## Support

For issues or questions:
- n8n Dashboard: https://ai.mokadijital.com
- Project repository: [your repository URL]

---

Last updated: 2026-02-04
