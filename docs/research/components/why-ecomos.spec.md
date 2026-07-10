# WhyEcomOS Specification

## Overview
- **Target file:** `src/components/WhyEcomOS.tsx`
- **Screenshots:** `docs/design-references/endless-expectations-612180.framer.app/desktop-fresh-load.png` (desktop grid), `responsive-mobile.png` / `responsive-tablet.png` (stacked variant with hand imagery)
- **Interaction model:** scroll-triggered fade-in entrance per card (standard — no click/hover state switching)

## DOM Structure
- `<section>`: max-width 1280px, padding 80px 20px, white background, flex column centered
  - Inner container: max-width 1240px, flex column, gap 73px
    - Header row: 1240px wide, height ~125px, flex row, `justify-content: space-between; align-items: flex-end;`
      - Left: eyebrow "Why ecomOS" (small label) + `<h2>` "Real employees, not chatbots in disguise" (Headland One heading)
      - Right: description paragraph, narrower column, body font
    - Cards container: **THIS IS BREAKPOINT-SPECIFIC — see "Different content per breakpoint" below.**

## Computed Styles
- Section: padding 80px 20px (reduce to ~40-48px vertical / 20px horizontal on mobile)
- Inner container: max-width 1240px, gap 73px between header and cards
- Header row: justify-content space-between, align-items flex-end (heading block left-aligned, description right-aligned, both bottom-aligned)
- Eyebrow "Why ecomOS": small uppercase-ish label, muted color, body font, ~14px
- Heading: Headland One serif, dark `rgb(37,31,25)`-ish color, sits on the left
- Description paragraph (right side): body font, `rgb(102,102,102)`-ish muted color, narrower max-width so it doesn't span the full row

## States & Behaviors
- **CRITICAL: this section has genuinely different content per breakpoint, not just a layout reflow.** Confirmed by directly querying the DOM at both viewport widths — this is not a bug, it's two distinct content sets:
  - **Desktop (≥ ~1024-1280px):** 4-column grid, cards use "Knows your brand / Does real work / Works your whole stack / Gets better every run" copy with a different painting-of-a-person image per card (see Assets).
  - **Tablet/Mobile (≤ ~768px, use standard Tailwind `md` 768px breakpoint):** stacked single column, cards use "Always context-aware / Takes real action / Connects everything / Gets better over time" copy with a "Creation of Adam"-style hands painting (same image repeated on all 4 cards — see Assets).
  - Implement this as two separate mapped arrays of card data, one rendered in a `hidden md:grid md:grid-cols-4` container (desktop) and the other in a `grid md:hidden` container (mobile/tablet stacked), OR conditionally render via CSS visibility classes matching this pattern — either approach is fine as long as the correct copy shows at the correct breakpoint.
- Card entrance: fades/slides in on scroll-into-view (standard IntersectionObserver-style reveal — implement with a simple CSS transition + `IntersectionObserver` hook, or a lightweight approach like a `whileInView`-style effect). Stagger between the 4 cards is a nice-to-have, not critical.

## Assets
### Desktop card images (one distinct painting per card, natural sizes vary — use `object-fit: cover` in a portrait-oriented frame):
- Card 1 "Knows your brand": likely `public/images/endless-expectations-612180.framer.app/pC12ErCmiABgUXftWqc8KsQZluM.png` or `jF7w5PT9lgaSIDfasrXaHSMrK4U.png` (both alt="Orange mosaic" 1080×1080 — these are candidates; verify against screenshot which shows a woman-with-book painting, a Prometheus/torch painting, etc. and match by cropping/comparing to `desktop-fresh-load.png`)
- The 4 desktop card images are among: `pC12ErCmiABgUXftWqc8KsQZluM.png`, `jF7w5PT9lgaSIDfasrXaHSMrK4U.png`, `5M8NQwtBDMwHm87dfXtDX1TOQ.png`, `EHl1CtlUBN1riBQS4dJqgiTwMog.png` (all in `public/images/endless-expectations-612180.framer.app/`) — assign in left-to-right screenshot order (Knows your brand / Does real work / Works your whole stack / Gets better every run). If exact assignment is ambiguous, open `desktop-fresh-load.png` and match each card's visible thumbnail to the closest downloaded file by content.

### Mobile/tablet card image (same image repeated on all 4 cards):
- `public/images/endless-expectations-612180.framer.app/CpfLkhgt7FpnO01s75GIa7DPZo8.jpg` (appears 4× in the page's image list at this breakpoint, confirming it's reused for all 4 cards)

## Text Content (verbatim)

### Header (same at all breakpoints)
- Eyebrow: "Why ecomOS"
- Heading: "Real employees, not chatbots in disguise"
- Description: "Most AI tools wait for prompts. ecomOS agents take ownership of their job, doing the work across your store and reporting back with results, not suggestions."

### Desktop cards
1. "01." / "Knows your brand" / "Every agent learns from your brand voice, products, and rules before it writes a single word. The work sounds like you, because it was trained on you."
2. "02." / "Does real work" / "Beyond suggestions, your agents execute. Listing products, drafting campaigns, watching your numbers, handling the busywork across all your connected tools."
3. "03." / "Works your whole stack" / "ecomOS sits on top of Shopify and the tools you already use. One team, every app, no switching tabs."
4. "04." / "Gets better every run" / "Agents remember feedback, learn your preferences, and sharpen with every task. The employee you hire today is the junior version of the one you'll have next month."

### Mobile/tablet cards
1. "01." / "Always context-aware" / "Parley remembers your preferences, priorities, and past decisions — so you never have to repeat yourself. It understands your work the way a long-time colleague would."
2. "02." / "Takes real action" / "Beyond suggestions, Parley executes — sending emails, booking meetings, updating records, and managing tasks across all your tools without constant hand-holding."
3. "03." / "Connects everything" / "Slack, Notion, HubSpot, GitHub — all in one place. Parley connects to 60+ tools. One conversation updates everything, no extra work."
4. "04." / "Gets better over time" / "The longer you work together, the less you explain. Parley learns your tone, shortcuts, and rules. Today's prompts become tomorrow's one-word commands."

(Note: the mobile copy literally says "Parley" while desktop copy says "your agents"/"ecomOS" — this is a real inconsistency in the source site's content, not a transcription error. Reproduce verbatim, don't harmonize the brand name.)

## Responsive Behavior
- **Desktop (≥1024px, or your chosen `lg`/`md` cutoff matching the ~768-1280px gap observed):** 4-column grid of cards, each with number label + title + description + image below.
- **Tablet/Mobile (≤768px):** single column, stacked cards, different copy set as above (this is the breakpoint switch — treat 768px as the cutoff).
- **Breakpoint:** 768px (`md:` in Tailwind) — content and image set differ, not just column count.

## Implementation notes
- Export named export `WhyEcomOS` from `src/components/WhyEcomOS.tsx`. Can be a client component only if you implement scroll-entrance via IntersectionObserver (`"use client"` in that case).
- Do NOT wire into `page.tsx` — happens later during final assembly.
- Run `npx tsc --noEmit` before finishing.
