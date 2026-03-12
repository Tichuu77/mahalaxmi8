# SEO Audit & Implementation Plan (2025)

This document maps each identified issue to a practical fix for a modern Next.js website.

## 1) Weak Meta Tags
- Define unique, keyword-aligned `title` and `description` per page.
- Add Open Graph + Twitter cards.
- Implemented in `app/layout.tsx` and blog route metadata.

## 2) Low Keyword Usage
- Expand homepage intro copy to include transactional + local keywords naturally.
- Create content clusters in blog articles.

## 3) No SEO-Optimized Blog
- Add `/blog` index and article pages (`/blog/[slug]`) with internal links and unique metadata.

## 4) Weak Internal Linking
- Add contextual links between homepage sections, blog, and contact.
- Add blog link to header and footer navigation.

## 5) Missing Image SEO
- Add descriptive alt text for all visible images.
- Use keyword-oriented filenames (`nagpur-residential-plot-mihan.jpg`) for new media uploads.
- Prefer modern formats (`webp`, `avif`) and responsive sizing.

## 6) Local SEO Missing
- Add NAP consistency and map listing links.
- Create and optimize Google Business Profile:
  - Primary category: Real Estate Developer / Agent
  - Service areas: Nagpur, MIHAN, Wardha Road, Hingna
  - Weekly photos, offer posts, FAQ content

## 7) No Schema Markup
- Add `RealEstateAgent` JSON-LD in global layout.
- Add `BlogPosting` schema on blog detail pages in next iteration.

## 8) Weak Content
- Homepage now includes richer buyer-intent summary content.
- Expand with location pages in next sprint (`/locations/mihan`, `/locations/wardha-road`).

## 9) No Backlink Authority
- Publish linkable assets: market reports, ROI calculators, legal checklists.
- Acquire local backlinks from directories, chambers, and local media mentions.

## 10) Slow Page Speed
- Use Next Image component for LCP images where feasible.
- Compress media, preconnect critical origins, and limit third-party scripts.
- Track Core Web Vitals in Search Console + PageSpeed Insights.

## 11) Missing Favicon
- Mapped favicon metadata icons to existing brand asset in `public/` (no new binary file added).

## 12) Canonical Tag Missing
- Added canonical definitions via Next metadata API.

## 13) Hreflang Missing
- Added language alternates (`en-IN`, `en`, `hi`) in global metadata.

## 14) No Sitemap
- Added dynamic sitemap generator at `app/sitemap.ts`.

## 15) No Robots.txt
- Added robots config at `app/robots.ts`.

## 16) No Google Analytics
- Added GA integration via `gtag.js` script loading conditioned on `NEXT_PUBLIC_GA_ID`.

## Monitoring Stack (Recommended)
- Google Search Console
- Google Analytics 4
- Google Business Profile Insights
- Bing Webmaster Tools
- Ahrefs / Semrush
- Screaming Frog
- PageSpeed Insights + Lighthouse CI

## 2025 SEO Best-Practice Checklist
- [ ] Every indexable page has unique title + description
- [ ] Canonical + hreflang are valid and self-referencing
- [ ] XML sitemap and robots are live and discoverable
- [ ] JSON-LD implemented and validated
- [ ] CWV: LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Internal links from high-authority pages to money pages
- [ ] Fresh blog content aligned to search intent and local demand
- [ ] GA4 + Search Console conversion tracking configured
- [ ] Monthly backlink outreach and citation updates
- [ ] Quarterly technical crawl + content pruning
