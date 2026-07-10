# Page Topology — endless-expectations-612180.framer.app

Single page (`/`). Built with Framer. Page total height: ~7935px @ 1440px viewport width.

## Structure (top to bottom)

| # | Framer name | Working name | Height (1440px) | Top offset | Notes |
|---|---|---|---|---|---|
| 0 | (nav) | `Navbar` | 72px | 0 (sticky) | `position: sticky`, top of stacking context |
| — | (JSON-LD) | — | 0 | — | `<script type="application/ld+json">` Organization schema, not visual |
| 1 | `hero section` | `Hero` | 659px | 73px | Full-bleed painting background image, heading, CTA buttons |
| 2 | `social trusted` | `TrustedLogos` | 175px | 732px | "Trusted by 200+ businesses" + logo strip |
| 3 | `Benefits` | `WhyEcomOS` | 779px | 907px | "Why ecomOS" — 4 feature cards with images |
| 4 | `Features` | `BuiltByAsking` | 1007px | 1686px | "Built by asking" — scroll/click driven list + sticky image (needs interaction-model test) |
| 5 | `testimonials` | `Testimonials` | 729px | 2693px | "Teams that work with Parley" — cards, renders blank until scrolled into view (entrance animation) |
| 6 | `pricing` | `Pricing` | 973px | 3422px | 3-tier cards (Solo/Pro/Teams) + Monthly/Annual toggle |
| 7 | `How it works` | `HowItWorks` | 1266px | 4395px | Tabbed section: Connect your tools / Brief & customize / Delegate everywhere, with app-picker UI mockup |
| 8 | `FAQ` | `FAQ` | 530px | 5660px | Accordion, 5 questions |
| 9 | `integrations` | `Integrations` | 630px | 6190px | "Connect your workflow" + logo grid |
| 10 | (unnamed) | `FinalCTA` | 660px | 6820px | Gray "Meet your AI partner. Built for real work" band |
| 11 | (unnamed) | `Footer` | 455px | 7480px | Logo, nav columns, large "Parley" wordmark watermark |

Also present:
- `#overlay` div (height 0 at rest) — likely a modal/lightbox mount point, top 7480. Needs click-sweep to determine trigger (possibly the "Chat with us" FAQ button).
- Framer badge container (`__framer-badge-container`) — Framer's own branding badge, NOT part of the site design, excluded from clone.

## Layout notes
- Single scrolling column, `max-width` content container centered (to be measured per-section).
- Nav is `position: sticky` — need scroll-triggered style diff (background/shadow change threshold).
- No visible CSS Grid multi-column page layout — sections stack vertically, each section internally uses flex/grid for its content.

## Known gaps to resolve during extraction sweep
- Sections 4 (BuiltByAsking), 5 (Testimonials) render with 0 visible content in the resting full-page screenshot — confirms scroll-triggered entrance animations (opacity/transform). Must scroll to each and capture the "revealed" state.
- Section 6 (Pricing) has a Monthly/Annual toggle — click-test both states.
- Section 7 (HowItWorks) has 3 tabs — click-test each for distinct app-picker content.
- Section 8 (FAQ) is an accordion — click-test open/close state and transition.
