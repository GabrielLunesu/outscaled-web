# FinalCTA Specification

## Overview
- **Target file:** `src/components/FinalCTA.tsx`
- **Screenshot:** `docs/design-references/endless-expectations-612180.framer.app/desktop-fresh-load.png` (scroll to ~6820-7480px, the gray/photo band right before the footer)
- **Interaction model:** static

## DOM Structure
- Outer wrapper: 1280px wide, height 660px
  - `<section>`: padding 80px 20px, flex column centered, gap 20px, height 660px, full-bleed photographic background (ocean/sunset image) with a dark overlay so white text is legible
    - Inner content block: max-width 1240px, height 500px, flex column centered, gap 20px
      - Heading: "Meet your AI partner." (bold, white) + "Built for real work" (italic, lighter weight/opacity, same line or line below — per screenshot it reads as two lines, second line in italic serif)
      - Description paragraph: white/semi-transparent, centered, max-width narrower than full section
      - CTA button: "Get started free" — light/white pill button with icon, matches Hero's CTA button styling

## Computed Styles
- Background: full-bleed photo (`object-fit: cover`), warm sunset/ocean tones per screenshot, with enough dark overlay/gradient for white text contrast
- Heading: Headland One serif, white, large (similar scale to Hero heading), first line bold, second line italic
- Description: body font, `rgba(255,255,255,0.85)`-ish, centered, smaller
- CTA button: same visual treatment as Hero's "Get started free" button (light pill, dark text, icon)

## States & Behaviors
- Static, no interactions beyond the button link.

## Assets
- Background image candidates in `public/images/endless-expectations-612180.framer.app/`: `IsVu6rT6bqu5BoGXtiz6Yd36c4.png` or `6h9hjxX2S8heG57tvUchoA6dAM.png` (both large ~2320px wide "interface preview"/"logo" labeled images — open the screenshot and match visually to the warm sunset/ocean photo; these alt-text labels are mislabeled/generic in the source site's markup, so match by appearance, not by alt text).

## Text Content (verbatim)
- Heading line 1: "Meet your AI partner."
- Heading line 2 (italic): "Built for real work"
- Description: "Join 12,000+ professionals who use Parley as their daily partner. Set up in minutes. Cancel anytime. Your first 100 tasks are on us."
- CTA: "Get started free"

## Responsive Behavior
- Scales down proportionally on mobile/tablet per `responsive-mobile.png`/`responsive-tablet.png` — heading may wrap to more lines, padding reduces.

## Implementation notes
- Server component, no client state needed.
- Export named export `FinalCTA` from `src/components/FinalCTA.tsx`.
- Do NOT wire into `page.tsx` — happens later during final assembly.
- Run `npx tsc --noEmit` before finishing.
