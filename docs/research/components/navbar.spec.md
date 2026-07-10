# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/endless-expectations-612180.framer.app/nav-top.png` (desktop), `docs/design-references/endless-expectations-612180.framer.app/mobile-nav-closed.png` + `mobile-nav-open-crop.png` (mobile)
- **Interaction model:** static sticky bar (desktop); click-driven full-panel dropdown menu (mobile, < 768px)

## DOM Structure
- Outer wrapper: `position: sticky; top: 0; z-index: 4;` max-width 1280px, centered, height 72px
  - `<nav>`: white background `rgb(255,255,255)`, `backdrop-filter: blur(60px)`, padding `20px 20px 0px`, height 72px, flex row, content centered
    - Inner row: max-width 1240px, height 52px, `display:flex; justify-content:space-between; align-items:center;`
      - Logo block: 53×52px, flex centered — contains `<img>` logo (raster, not text)
      - Nav links row: ~446px wide, `display:flex; gap:24px; align-items:center;`
        - "Workflows" (has a dropdown/mega-menu — sub-links "Lead enrichment", "Inbound triage", "Ticket triage", confirmed present in mobile expanded view; desktop hover behavior not fully captured, implement as a simple hover-reveal dropdown showing the 3 sub-links)
        - "Pricing", "Contact", "Blog" — plain anchor links
      - "Hire Parley" CTA button, top-right: pill button, white bg, thin border, `»` double-chevron icon (pink `rgb(196,33,116)`) + text, rounded (use `rounded-full`), links to external hiring page

## Computed Styles

### Outer sticky wrapper
- position: sticky, top: 0, z-index: 4
- width: 1280px (max-width container, centered via mx-auto with page gutter)
- height: 72px

### `<nav>` bar
- backgroundColor: rgb(255, 255, 255)
- backdropFilter: blur(60px)
- padding: 20px 20px 0px
- height: 72px
- display: flex; justifyContent: center; alignItems: center

### Content row
- maxWidth: 1240px
- height: 52px
- display: flex; justifyContent: space-between; alignItems: center

### Nav links ("Workflows", "Pricing", "Contact", "Blog", "Hire Parley" label)
- fontSize: 14px
- fontWeight: 500
- fontFamily: body font (Helvetica Neue stack — see globals.css `--font-sans`)
- color: rgb(48, 48, 48)
- lineHeight: 16.8px (1.2)
- gap between links: 24px

## States & Behaviors

### Sticky scroll
- No dramatic visual change observed between scroll 0 and scroll 400 (screenshots `nav-top.png` vs `nav-scrolled.png` are visually identical aside from page content scrolling underneath). Implement as a plain `sticky top-0` bar — do not add shrink/shadow/hide-on-scroll effects.

### Mobile menu (< 768px)
- **Trigger:** hamburger icon (`MenuIcon` from `icons.tsx`) replaces the nav links row below ~768px.
- **State A (closed):** just logo + hamburger icon visible, per `mobile-nav-closed.png`.
- **State B (open):** clicking the hamburger opens a full-panel dropdown that pushes page content down (NOT an overlay/modal — it's inline content insertion). Panel shows: logo + close "×" icon (top row), then nav items stacked vertically. "Workflows" renders with its 3 sub-links always expanded inline beneath it ("Lead enrichment", "Inbound triage", "Ticket triage", each with a small orange square bullet), then "Pricing" below. See `mobile-nav-open-crop.png` for exact layout — sub-links are indented, small orange (`rgb(244,141,22)`) square bullet before each.
- Implement with local `useState` for open/closed; no animation details were captured — a simple instant toggle or short fade/slide is acceptable.

## Assets
- Logo image: `public/images/endless-expectations-612180.framer.app/h7fOCKCsvgnj6pswnDzTWfVkQ.png` (159×96 natural size, rendered ~53×52px in the nav — use `next/image` or plain `<img>` with explicit width/height matching rendered size)
- Icons: `MenuIcon`, `CloseIcon`, `DoubleChevronIcon` from `src/components/icons.tsx` (already created)

## Text Content (verbatim)
- Nav links: "Workflows", "Pricing", "Contact", "Blog"
- Workflows sub-links: "Lead enrichment", "Inbound triage", "Ticket triage"
- CTA button: "Hire Parley" (links to `#` / placeholder external URL — use `href="#"`)

## Responsive Behavior
- **Desktop (≥1024px):** full nav row as described above, logo left, links center-right, CTA button far right.
- **Tablet/Mobile (<768px, use Tailwind `md` breakpoint):** nav links row replaced by hamburger icon; "Hire Parley" CTA is NOT shown in the collapsed bar (only logo + hamburger — confirm against `mobile-nav-closed.png`, which shows just "Parley" wordmark + hamburger, no visible CTA button in the collapsed state).
- **Breakpoint:** switch at 768px (`md:` prefix in Tailwind).

## Implementation notes
- Use `position: sticky; top: 0; z-index: 40` (or similar high z-index — this must sit above all page content, and other sections will be built assuming the nav is the topmost fixed layer).
- This component will be imported into `src/app/page.tsx` at the very top of the page by the orchestrator during final assembly — export it as a named export `Navbar`.
- Verify with `npx tsc --noEmit` before finishing.
