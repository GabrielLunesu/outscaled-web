# Hero + TrustedLogos Specification

## Overview
- **Target files:** `src/components/Hero.tsx`, `src/components/TrustedLogos.tsx`
- **Screenshots:** `docs/design-references/endless-expectations-612180.framer.app/desktop-fresh-load.png` (top portion), `responsive-mobile.png`, `responsive-tablet.png`
- **Interaction model:** static (no scroll/click/hover behaviors observed on Hero itself; TrustedLogos is a static row, confirmed NOT animated via a 2-second time-lapse screenshot check)

## DOM Structure — Hero
- `<section>`: max-width 1280px, centered, padding 20px, height ~659px, flex column centered, gap 20px
  - Inner rounded card: width 1240px, height 619px, `border-radius: 24px`, `overflow: clip`, flex column centered, gap 10px, `position: relative` — this is the full-bleed painting background container
    - Background image fills the card (the painting), `object-fit: cover`
    - Text block (z-index 2, centered): max-width 892px, padding `0 109px`, flex column centered, gap 20px
      - Heading: "Stop doing jobs. Start giving them." — width ~871px block
      - Subtext paragraph: "Connect your store and the tools you already use, then create AI employees for any job, from product listers to creative strategists. They actively learn everything about your brand, so you can scale your AI fleet with confidence." — width ~687px block
      - CTA button "Get started free" (with small icon), width ~169px, height 44px

## Computed Styles — Hero
- Outer `<section>`: padding 20px, max-width 1280px, display flex column, justify-content center, align-items center, gap 20px
- Inner card: width 1240px (fluid, this is effectively `max-width: 1240px; width: 100%`), height 619px, border-radius 24px, overflow clip, position relative
- Text block: max-width 892px, padding `0 109px` (drop the horizontal padding at narrower viewports so text doesn't get cramped — reduce/remove at mobile), gap 20px, z-index 2, text-align center, color white (heading + subtext are white/light over the dark painting)
- Heading: large serif (Headland One) heading, white text, centered — approximate desktop size in the 40-48px range based on the screenshot (measure against the ~871px text block width and 2-line wrap in the screenshot; use `text-4xl md:text-5xl font-heading` as a starting point and adjust to match the screenshot proportions)
- Subtext: body font (Helvetica Neue stack), smaller, semi-transparent white (~`rgba(255,255,255,0.85)`), centered, max 3 lines per screenshot
- CTA button "Get started free": white/light pill button, dark text, rounded-full, ~44px tall, icon + label, per screenshot

## DOM Structure — TrustedLogos
- `<section>`: max-width 1280px, padding 40px 20px, flex column centered, gap 20px, height ~175px
  - "Trusted by 200+ businesses" label: 14px, weight 400, color `rgb(48,48,48)`, centered, `font-family: body font`
  - Logo row: max-width 860px, flex row centered, gap 20px, 5 items, each container 156×58px, `cursor: pointer` on each logo (likely just a hover affordance, no real link functionality needed — render as plain divs or `<a href="#">`)

## States & Behaviors
- **TrustedLogos is a STATIC row — confirmed NOT a marquee/carousel** via a 2-second time-lapse screenshot comparison (zero pixel movement). Do not add any scroll/auto-animation to this component. (This is different from the Integrations section later in the page, which IS an animated marquee — don't confuse the two.)
- No hover/scroll effects captured for Hero itself beyond standard entrance rendering.

## Assets
- Hero background painting image: `public/images/endless-expectations-612180.framer.app/BvP2CQBZpvSA9Mcp4n3LoGf0E.png` (natural 1672×941) — use as a `background-image` or absolutely-positioned `<img>` with `object-fit: cover` filling the rounded card.
- TrustedLogos wordmark SVGs (already extracted as standalone files, exact vector wordmarks — use as `<img src="...">`, each roughly 156×58px source viewBox, render at a proportional height ~24-32px to match the screenshot's smaller rendered logo size):
  - `public/images/endless-expectations-612180.framer.app/icons/logo-cloudplex.svg` — "Cloudplex"
  - `public/images/endless-expectations-612180.framer.app/icons/logo-tytotone.svg` — "TYTOTONE"
  - `public/images/endless-expectations-612180.framer.app/icons/logo-bloopglow.svg` — "Bloopglow"
  - `public/images/endless-expectations-612180.framer.app/icons/logo-zingzap.svg` — "Zingzap"
  - `public/images/endless-expectations-612180.framer.app/icons/logo-junotwig.svg` — "Junotwig" (this one renders in blue `rgb(38,132,255)`-ish brand color per screenshot, the other 4 render in muted gray `rgb(148,139,129)` — check the SVG file's own fill colors, they should already be correct since extracted with computed fill values baked in)
  - Order left-to-right per screenshot: Cloudplex, Tytotone, Bloopglow, Zingzap, Junotwig

## Text Content (verbatim)
- Hero heading: "Stop doing jobs. Start giving them."
- Hero subtext: "Connect your store and the tools you already use, then create AI employees for any job, from product listers to creative strategists. They actively learn everything about your brand, so you can scale your AI fleet with confidence."
- Hero CTA: "Get started free"
- TrustedLogos label: "Trusted by 200+ businesses"

## Responsive Behavior
- **Desktop (1440px):** as described, hero image full-bleed rounded card ~1240px wide, text max-width 892px centered with padding.
- **Tablet (768px):** per `responsive-tablet.png` — hero card scales down proportionally, text padding reduces, heading/subtext remain centered and legible, logo row stays a single static row (smaller).
- **Mobile (390px):** per `responsive-mobile.png` — hero card is a shorter/narrower rounded rectangle, heading wraps to 2-3 lines, text padding removed (no 109px side padding — use small consistent padding like 16-24px), CTA button remains centered below text. TrustedLogos row may wrap or shrink logos to fit.
- Use Tailwind responsive prefixes (`md:`, `lg:`) to implement breakpoint changes; base/mobile-first styles for the smallest viewport, then scale up.

## Implementation notes
- Both components are static/presentational — no client-side state needed, can be server components.
- Export named exports `Hero` and `TrustedLogos` from their respective files.
- Do NOT wire into `page.tsx` — that happens later during final assembly.
- Run `npx tsc --noEmit` before finishing.
