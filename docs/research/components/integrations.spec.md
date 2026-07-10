# Integrations Specification

## Overview
- **Target file:** `src/components/Integrations.tsx`
- **Screenshot:** `docs/design-references/endless-expectations-612180.framer.app/integrations-section.png`
- **Interaction model:** time-driven, continuously auto-scrolling horizontal marquee (2 rows). Confirmed via a 2-second time-lapse screenshot comparison — icon positions visibly shifted leftward between captures.

## DOM Structure
- `<section>`: max-width 1280px, padding 80px 20px, flex column centered, height ~630px
  - Inner container: max-width 1240px, flex column centered, gap 40px
    - Header block: 1240px wide, height ~203px, flex column centered, gap 20px — eyebrow + heading + description
    - Marquee box: 800px wide, 227px tall, `border-radius: 12px`, `overflow: hidden`, centered, contains 2 rows of app-icon tiles that scroll horizontally on a continuous loop. The box has a **radial-gradient CSS mask** applied: `mask-image: radial-gradient(50% 122%, rgb(0,0,0) 0%, rgba(0,0,0,0.8) 80.6%, rgba(0,0,0,0) 100%)` — this fades the icons out toward all edges of the box (not just left/right), giving a soft vignette/oval fade rather than a hard edge or simple side-fade.

## Computed Styles
- Marquee box: width 800px, height 227px, border-radius 12px, overflow hidden, `mask-image` as above (use Tailwind arbitrary value or inline style for the mask — `mask-image` isn't a standard Tailwind utility, so use `style={{ maskImage: '...', WebkitMaskImage: '...' }}` or a CSS module class)
- Icon tiles: square rounded-corner tiles (~72-80px based on screenshot), light gray background `rgb(245,245,245)`-ish, centered icon glyph, arranged in a horizontal row with small gaps, 2 rows stacked

## States & Behaviors
- **Continuous auto-scroll marquee**, both rows scroll leftward continuously (confirmed via time-lapse, not click/hover driven). Implement with a CSS `@keyframes` translateX loop (duplicate the icon list so the loop is seamless — a common marquee pattern: render the icon array twice back-to-back inside a flex row with `animation: marquee 20s linear infinite`, `will-change: transform`). Exact speed wasn't measured — pick something visually smooth (~20-30s per full loop is reasonable).
- The icons themselves are generic/decorative app-style glyphs (not necessarily exact trademarked logos — the source site uses unlabeled generic icon placeholders here, distinct from the labeled real app logos used elsewhere on the page like Google Calendar/Gmail/Slack in the HowItWorks section). Build a set of ~8 colorful rounded-square icon tiles using simple shapes/Lucide icons in varied brand-like colors (blue, purple, orange, green) to approximate the visual rhythm — exact icon glyph matching is NOT required here, this is a decorative pattern.

## Assets
- No specific downloaded assets required for the marquee icons (generic decorative glyphs, approximate is fine per above).

## Text Content (verbatim)
- Eyebrow: "Integrations"
- Heading: "Connect your workflow. Parley meets you there."
- Description: "Slack, Linear, Notion, GitHub and 60+ more. Parley triggers actions, fetches context, and keeps things in sync — right where your team already works."

## Responsive Behavior
- Marquee box likely shrinks proportionally on smaller viewports (max-width scales down with page padding) — keep it responsive with a `max-w-[800px] w-full` pattern rather than a fixed 800px on mobile.

## Implementation notes
- Client component not strictly required if using pure CSS animation (`@keyframes` in a `<style>` tag or Tailwind config) — can be a server component with CSS-only animation.
- Export named export `Integrations` from `src/components/Integrations.tsx`.
- Do NOT wire into `page.tsx` — happens later during final assembly.
- Run `npx tsc --noEmit` before finishing.
