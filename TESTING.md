# Testing Documentation

## Overview

This document provides a comprehensive testing checklist for the Moka Dijital website. Use this guide to verify responsive design, cross-browser compatibility, and functionality across all devices and browsers before production deployment.

**Test Coverage:**
- 7 pages (Homepage + 6 service pages)
- 4+ device breakpoints
- 4 major browsers
- Form and modal functionality
- Touch target accessibility

---

## Responsive Testing Breakpoints

### Mobile (Portrait)
- **320px** - iPhone SE (smallest practical mobile viewport)
- **375px** - iPhone 12/13/14 (standard mobile reference)
- **414px** - iPhone 14 Pro Max (large mobile)

### Tablet
- **768px** - iPad Mini (standard tablet breakpoint)
- **834px** - iPad Pro (large tablet)
- **1024px** - iPad Pro landscape (tablet-desktop boundary)

### Desktop
- **1280px** - Standard laptop
- **1440px** - Standard desktop (most common)
- **1920px** - Full HD desktop

---

## Pages to Test

- [ ] **Homepage** (`/`)
- [ ] **Google Isletme Optimizasyonu** (`/hizmetler/google-isletme-optimizasyonu`)
- [ ] **SEO Hizmetleri** (`/hizmetler/seo`)
- [ ] **Potansiyel Musteri Kazanimi (PMK)** (`/hizmetler/pmk`)
- [ ] **Web Gelisdirme** (`/hizmetler/web-gelistirme`)
- [ ] **Reklam Yonetimi** (`/hizmetler/reklam`)
- [ ] **Otomasyon** (`/hizmetler/otomasyon`)

---

## Checklist per Page

For each page above, verify the following at **mobile (375px)**, **tablet (768px)**, and **desktop (1440px)** breakpoints:

### Layout & Structure
- [ ] Header logo is visible and properly sized
- [ ] Navigation menu is accessible
  - [ ] Mobile: Verify hamburger menu (if implemented)
  - [ ] Desktop: All navigation links visible in header
- [ ] Hero section text is readable and properly aligned
- [ ] Service cards/content sections stack vertically on mobile
- [ ] Footer information is readable and accessible
- [ ] No horizontal scrolling (scroll horizontally to check body width)

### Typography & Spacing
- [ ] Text is readable without zooming
- [ ] Line height is sufficient for comfortable reading
- [ ] Headings have proper hierarchy (h1 > h2 > h3)
- [ ] No text overflow or clipping

### Images & Media
- [ ] Images scale correctly (use Next.js Image component with `sizes` prop)
- [ ] No distorted or stretched images
- [ ] Alt text present for accessibility

### Interactive Elements
- [ ] Contact form button is visible and tappable
- [ ] Buttons have minimum 44x44px touch target (WCAG 2.1 AAA)
- [ ] Links are clearly identifiable
- [ ] Hover states visible on desktop
- [ ] Modal opens and closes properly on touch devices

---

## Browser Testing

Test the homepage and 2-3 service pages in each browser:

- [ ] **Chrome** (latest version) - Primary browser
- [ ] **Firefox** (latest version) - Secondary browser
- [ ] **Safari** (if available - iOS and macOS)
- [ ] **Edge** (if available - Windows)

### Browser-Specific Checks
- [ ] Layout consistency across all browsers
- [ ] Fonts render correctly
- [ ] Gradients and colors display consistently
- [ ] JavaScript functionality works (form submission, modals)

---

## Form Testing on Mobile

Test the contact form on mobile devices (375px viewport):

### Input Fields
- [ ] Form fields are tappable (minimum 44x44px touch targets)
- [ ] Virtual keyboard doesn't hide form inputs when focused
- [ ] Input fields have proper labels (not just placeholders)
- [ ] Required field indicators visible

### Validation & Feedback
- [ ] Validation messages appear inline (not browser defaults)
- [ ] Error messages are visible after field blur
- [ ] Success message appears after submission
- [ ] Loading state shows during submission

### Submission
- [ ] Submit button is easily tappable
- [ ] Form submits without errors
- [ ] Webhook receives data (check browser Network tab for POST request)
- [ ] Modal closes automatically after successful submission (3 seconds)

---

## DevTools Instructions

### Chrome DevTools (Recommended for Testing)

1. **Open DevTools:** Press `F12` or `Ctrl+Shift+I`
2. **Toggle Device Toolbar:** Press `Ctrl+Shift+M` or click device icon
3. **Select Device:** Choose from presets or enter custom dimensions
4. **Rotate Device:** Click rotate icon to test landscape/portrait
5. **Network Throttling:** Test 3G/4G speeds in Network tab
6. **Lighthouse Audit:** Run Lighthouse for performance score

### Firefox Responsive Design Mode

1. **Open:** `Ctrl+Shift+M` or `Tools > Browser Tools > Responsive Design Mode`
2. Test with same breakpoints as Chrome

### Safari DevTools (macOS/iOS)

1. **Enable:** Develop > Enter Responsive Design Mode
2. Test on iOS Simulator if available

---

## Orientation Testing

For each page, test both orientations on mobile (375px / 812px):

- [ ] **Portrait** (375x812px) - Standard mobile usage
- [ ] **Landscape** (812x375px) - Rotated device

### Landscape-Specific Checks
- [ ] Navigation doesn't break layout
- [ ] Modal fits within viewport
- [ ] No horizontal scrolling
- [ ] Content remains readable

---

## Performance Checks

Run Lighthouse audit on homepage:

- [ ] Performance score: 90+ (green)
- [ ] Accessibility score: 90+ (green)
- [ ] Best Practices score: 90+ (green)
- [ ] SEO score: 90+ (green)

### Performance Budgets
- [ ] First Contentful Paint (FCP): < 1.8s
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] First Input Delay (FID): < 100ms

---

## Accessibility Quick Checks

- [ ] Keyboard navigation works (Tab through page)
- [ ] Focus indicators visible on all interactive elements
- [ ] Screen reader announces page title and content structure
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] No images missing alt text

---

## Known Issues & Notes

Record any issues found during testing:

| Page | Breakpoint | Browser | Issue | Status |
|------|-----------|---------|-------|--------|
|      |           |         |       |        |

---

## Test Results Summary

**Date:** ___________________

**Tester:** ___________________

**Environment:** _________________

### Overall Status

- [ ] **Mobile (320-768px)**: Pass / Fail
- [ ] **Tablet (768-1024px)**: Pass / Fail
- [ ] **Desktop (1024px+)**: Pass / Fail
- [ ] **Cross-browser**: Pass / Fail
- [ ] **Forms**: Pass / Fail
- [ ] **Performance**: Pass / Fail

### Notes

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________
