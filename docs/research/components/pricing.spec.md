# Pricing Specification

## Overview
- **Target file:** `src/components/Pricing.tsx`
- **Screenshots:** `docs/design-references/endless-expectations-612180.framer.app/desktop-fresh-load.png` (Monthly state), `pricing-annual.png` (Annual state, full section visible)
- **Interaction model:** click-driven Monthly/Annual toggle (no other interactivity)

## DOM Structure
- `<section>`: max-width 1280px, padding 80px 20px, flex column centered, height ~973px
  - Inner `<section>`: max-width 1240px, flex column, gap 40px, `overflow: clip`
    - Header row: 1240px wide, height ~125px, flex row `justify-content: space-between; align-items: flex-end;`
      - Left (540px): eyebrow "Pricing" + `<h2>` "Simple, transparent pricing. No surprises." — gap 12px
      - Right (420px, right-aligned): description paragraph + Monthly/Annual toggle pill, gap 20px, `align-items: flex-end`
    - Cards row: 1240px wide, height ~648px, flex row centered, gap 40px, 3 pricing cards (Solo / Pro / Teams)

## Computed Styles
- Header: justify-content space-between, align-items flex-end (heading block bottom-aligned with toggle block)
- Left column width: 540px, gap 12px between eyebrow+heading
- Right column width: 420px, right-aligned (`align-items: flex-end`), gap 20px between description and toggle
- Cards row gap: 40px, 3 equal-width cards
- Card styling (from screenshot): rounded corners (~16-20px), padding ~32-40px, cream/light background `rgb(238,237,230)` for Solo & Teams, warm photographic cloud background for the Pro (middle) card with white text, each card has: tier name (Headland One or bold sans), price (large), billing caption (small muted), description paragraph, feature list (checkmark or muted/unchecked rows), CTA button at bottom.
- Feature rows: small orange square bullet/checkmark icon (`rgb(244,141,22)`) when included; muted gray text with no icon (or a dimmed square) when NOT included in that tier.

## States & Behaviors
- **Monthly/Annual toggle:** pill-shaped segmented control, click-driven. "Monthly" and "Annual  -15%" as two segments; the active segment has a white background pill (per screenshot). Clicking swaps the displayed price + billing caption on the Pro and Teams cards (Solo stays "$0 / Free forever" in both states).
- **Reproduce the source site's pricing numbers verbatim, including an apparent inconsistency:** in the Annual state, the Pro card shows price "$169" but the caption text still reads "per month, billed monthly" (unchanged from the Monthly state's caption) — this looks like a copy bug in the original site, but per pixel-perfect fidelity rules, reproduce it exactly as displayed rather than "fixing" it.
- No hover states or other interactions captured on cards themselves.

## Assets
- Pro card background image: `public/images/endless-expectations-612180.framer.app/izM6Io4LYERFIddIZdCV0bYEH5k.png` (natural 746×1120, warm cloud/sunset texture, `object-fit: cover` filling the card, white text on top)
- Solo & Teams cards: flat background color `rgb(238,237,230)` (the `--cream` token), no image.

## Text Content (verbatim)

### Header
- Eyebrow: "Pricing"
- Heading: "Simple, transparent pricing. No surprises."
- Description: "Start free, scale as you grow. Every plan includes core features — upgrade when you need more power or seats."
- Toggle: "Monthly" / "Annual  -15%"

### Solo card (identical in both Monthly/Annual states)
- Name: "Solo"
- Price: "$0"
- Caption: "Free forever"
- Description: "Perfect for individuals getting started with AI-powered productivity. No credit card required."
- Features (included, checked): "1 connected workspace", "Up to 5 integrations", "100 AI tasks / month", "Basic memory (30 days)", "Email + calendar workflows"
- Features (NOT included, muted/unchecked): "Custom workflows", "Priority support", "Team features"
- CTA: "Get started free"

### Pro card
- Name: "Pro"
- **Monthly:** Price "$49", caption "per month, billed monthly"
- **Annual:** Price "$169", caption "per month, billed monthly" (unchanged text — reproduce verbatim, see note above)
- Description: "The full Parley experience for professionals who want a true AI partner in their work."
- Features (included): "1 connected workspace", "Up to 5 integrations", "100 AI tasks / month", "Basic memory (30 days)", "Email + calendar workflows"
- Features (NOT included): "Custom workflows", "Priority support", "Team features"
- CTA: "Get started free"

### Teams card
- Name: "Teams"
- **Monthly:** Price "$89", caption "per seat / month"
- **Annual:** Price "$299", caption "per seat / month"
- Description: "For growing teams that want shared intelligence, role-based access, and centralized control."
- Features (ALL included/checked — no muted items on this tier): "1 connected workspace", "Up to 5 integrations", "100 AI tasks / month", "Long-term memory (forever)", "All workflow templates", "Custom workflows & automations", "Priority support", "Team features"
- CTA: "Talk to sales"

## Responsive Behavior
- **Desktop:** 3-column row as described.
- **Mobile/Tablet:** stack to a single column (standard pattern matching other sections on this page), toggle and header likely stack/center too — use judgment matching the page's general mobile stacking pattern (see `responsive-mobile.png`).

## Implementation notes
- This is a client component (`"use client"`) — needs `useState` for the monthly/annual toggle.
- Export named export `Pricing` from `src/components/Pricing.tsx`.
- Do NOT wire into `page.tsx` — happens later during final assembly.
- Run `npx tsc --noEmit` before finishing.
