# Harvey.ai — Design Specification

Source: https://www.harvey.ai/
Captured: June 2026

A reference for rebuilding or extending the Harvey marketing site. Harvey positions itself as "Professional Class AI" for legal and professional services. The design language is restrained, editorial, and trust-forward: warm near-black backgrounds, generous whitespace, serif-led headlines, and heavy use of customer logos as social proof.

---

## 1. Brand Identity

- **Name / wordmark:** Harvey, frequently rendered inline as `:Harvey:` in source content (a token replaced by the logo glyph in the UI).
- **Tagline:** "Practice Made Perfect" (hero), "Professional Class AI" (positioning line).
- **Voice:** Authoritative, precise, understated. Speaks to senior legal professionals. Avoids hype; emphasizes craft, trust, security, and measurable outcomes.
- **Positioning statement:** "Harvey is AI designed for legal and professional services. Advance your expertise on a secure platform that lets you focus on high-value work."

---

## 2. Color Palette

| Role | Value | Notes |
|------|-------|-------|
| Primary dark / theme | `#1F1D1A` | Declared site theme color. Warm near-black with a brown undertone, not pure black. Used for dark sections, footer, and key surfaces. |
| Background light | Warm off-white / cream | Observed primary page background; pairs with the warm black for an editorial, paper-like feel. |
| Text on light | Warm near-black | Same family as `#1F1D1A`. |
| Text on dark | Warm white / cream | High contrast against the dark surface. |
| Accent | Minimal / monochrome | The brand leans almost entirely neutral. Color is supplied by customer logos and imagery rather than a saturated accent. |

Design principle: a two-tone warm neutral system. Keep saturation near zero so client logos and product screenshots carry the visual interest.

---

## 3. Typography

- **Headlines:** Serif, editorial in character. Large, tightly set display sizes for hero and section titles (e.g. "Practice Made Perfect", "Real impact for real clients"). The serif choice signals tradition, authority, and the legal/print heritage of the audience.
- **Body and UI:** Clean sans-serif for paragraphs, navigation, labels, and stats.
- **Hierarchy pattern:**
  - H1 — hero statement, oversized serif.
  - H2 — section headers ("Enterprise-grade security and controls").
  - H3 — sub-section and footer column titles.
  - Body — sans, comfortable line length, muted weight.
  - Stats — very large numerals paired with small descriptive captions.

---

## 4. Layout & Grid

- Wide, centered content column with generous horizontal margins.
- Section-based vertical rhythm: each section is a distinct full-width band, alternating light and dark surfaces.
- Heavy whitespace; nothing is crowded.
- Responsive: collapses to a stacked mobile layout with a hamburger-driven nav containing the same Platform / Solutions / Resources / About groupings.

---

## 5. Navigation

**Top bar (persistent):**
- Logo (left).
- Primary menu with dropdown mega-menus: **Platform**, **Solutions**, **Customers**, **Security**, **Resources**, **About**.
- Right side: **Login** (with regional options US / EU / AU) and a primary CTA button **Request a Demo**.

**Platform dropdown items:**
Overview, Assistant, Vault, Knowledge, Agents, Harvey Mobile, Ecosystem, Contract Intelligence, Command Center, Shared Spaces, plus a featured "Harvey Agents" callout.

**Solutions dropdown items:**
Innovation, In-House, Transactional, Litigation, Mid-Sized Firms, plus a featured collaboration article.

**Resources dropdown items:**
Blog, Resources Hub, Press Kit, ROI Calculator (Law Firm), ROI Calculator (In House), Harvey Academy.

**About dropdown items:**
Company, Newsroom, 2025 Year in Review.

A thin top announcement bar promotes featured launches (e.g. "Harvey Agents execute legal work end-to-end — Learn more").

---

## 6. Page Sections (Homepage, top to bottom)

1. **Announcement bar** — single-line promo with link.
2. **Hero** — background video (`impact-hero` .webm with a .webp poster fallback), serif headline "Practice Made Perfect", supporting sentence, and a **Request a Demo** CTA.
3. **Logo wall** — auto-scrolling marquee of customer logos (Vinson & Elkins, A&O Shearman, PwC UK, Deutsche Telekom, KKR, Comcast, P&G, Dentons, and many more) rendered as monochrome SVGs. Links to "Our Customers".
4. **Positioning statement** — large serif paragraph defining what Harvey is, followed by a rotating list of use cases (Legal Research, Deal Management, Due Diligence, Fund Formation, Contract Analysis, Complex Workflows, Document Storage) and an **Explore Platform** link.
5. **Testimonial cards** — portrait image + pull quote + name, title, company, and a "Customer Story →" link. Featured voices: Dr. Claudia Junker (Deutsche Telekom), Rich Robbins (Reed Smith), Marie-Cécile Martin (Syngenta).
6. **"Real impact for real clients"** — video case-study carousel with customer logos (Syngenta, Repsol, Cuatrecasas, The Adecco Group, CMS, Burges Salmon) and a "See more videos" link.
7. **Stats band** — "Helping teams stay focused and see measurable results" with oversized metrics:
   - 20+ average hours saved per month
   - 142,000+ professionals using Harvey
   - 1,500+ law firms and in-house teams
   - 60 countries
   - 65+ AmLaw 100 firms
   (Note: the source markup pairs labels and numbers in an offset order; verify label-to-number mapping against the live render.)
8. **Security & compliance** — "Enterprise-grade security and controls" with badge row: SOC 2 Type II, CCPA, ISO 27001, GDPR, ISO 27701, ISO 42001, each linking to the relevant standard. Copy emphasizes SAML SSO, audit logs, IP allow-listing, and data lifecycle management. CTA: **More About Security**.
9. **Final CTA** — "Unlock Professional Class AI for Your Firm" with **Request a Demo**.
10. **Footer** — four link columns (Platform, Solutions, About, Resources), a Follow column (X, LinkedIn, YouTube), and copyright "© 2026 Harvey AI Corporation."

---

## 7. Components & Patterns

- **Primary button:** "Request a Demo" — solid, high-contrast, appears in the nav, hero, and closing CTA. The single dominant conversion action across the page.
- **Text link with arrow:** "Customer Story →", "Explore Platform", "See more videos" — used for secondary navigation.
- **Logo marquee:** continuously scrolling monochrome client logos, duplicated set for seamless looping.
- **Testimonial card:** image, quote, attribution block, optional story link.
- **Stat block:** large numeral over small caption.
- **Compliance badge:** circular/shield icon, standard name, "Details" link out.
- **Mega-menu:** multi-column dropdown with item title + one-line description per entry.
- **Featured callout:** a highlighted card inside dropdowns promoting a flagship item (e.g. Harvey Agents).

---

## 8. Imagery & Media

- **Hero video:** ambient, professional, muted; used as a moving backdrop rather than a literal product demo.
- **Customer logos:** vector SVGs, normalized to a single ink color for a uniform monochrome wall.
- **Portraits:** high-resolution square headshots for testimonials.
- **Case-study videos:** customer-named clips in the impact carousel.
- Assets are served via a Sanity CDN and Next.js image optimization (`/_next/image`), indicating a **Next.js + Sanity CMS** stack.

---

## 9. Tone & Content Guidelines

- Lead with the customer and the outcome, not the technology.
- Quantify impact (hours saved, firms onboarded, countries reached).
- Foreground trust signals: named blue-chip clients, named executives, and formal security certifications.
- Keep prose concise and senior; avoid casual or playful phrasing.
- Reserve a single, repeated primary CTA ("Request a Demo") to keep conversion focused.

---

## 10. Technical Notes

- **Framework:** Next.js (image optimization, route structure under `/platform`, `/solutions`, etc.).
- **CMS:** Sanity (`cdn.sanity.io` asset paths).
- **Meta / SEO:** descriptive title and OG/Twitter cards configured; `theme-color` `#1F1D1A`; `robots: index, follow`.
- **Regional apps:** separate login surfaces for US (`app.harvey.ai`), EU (`eu.app.harvey.ai`), AU (`au.app.harvey.ai`).
- **Accessibility to verify on rebuild:** contrast ratios on the warm-neutral palette, marquee pause/reduced-motion handling, and video captions/poster fallbacks.

---

## Quick Reference

- Theme color: `#1F1D1A`
- Type: serif headlines + sans body
- Palette: warm near-black + cream, near-zero saturation
- Primary CTA: Request a Demo
- Signature sections: video hero, logo marquee, testimonials, big-number stats, compliance badges
- Stack: Next.js + Sanity
