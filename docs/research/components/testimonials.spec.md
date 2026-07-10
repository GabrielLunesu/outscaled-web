# Testimonials Specification

## Overview
- **Target file:** `src/components/Testimonials.tsx`
- **Screenshot:** `docs/design-references/endless-expectations-612180.framer.app/bba-scroll-2693.png` (shows the section right as it enters view — cards partially visible at edges) and `desktop-fresh-load.png` won't show this section revealed; use the scroll screenshot as primary reference.
- **Interaction model:** scroll-triggered fade-in reveal, **static row — NOT a carousel/marquee, NOT click-driven**. Confirmed static via direct DOM query; the row is simply wider than the 1240px container so the leftmost/rightmost cards clip at the edges (`overflow: clip`) — a purely decorative "there's more" visual hint, no scroll/drag interaction needed.

## DOM Structure
- `<section>`: max-width 1280px, padding 80px 20px, flex column centered, height ~729px
  - Inner container: max-width 1240px, flex column, gap 40px
    - Header block: 1240px wide, height ~183px, flex column centered, gap 20px
      - Eyebrow "What people say"
      - `<h2>` "Teams that work with Parley, not around it" (Headland One)
      - Subtext: "From solo founders to enterprise teams — here's what our users have to say after making Parley their daily partner."
    - Cards row: 1240px wide, height 346px, flex row, `justify-content: flex-start; align-items: center; gap: 10px; border-radius: 10px; overflow: clip;` — 5 testimonial cards in a row, each card contains: quote text, avatar photo, name, title/company. The row is visually wider than the container so cards clip at the left/right edges (per screenshot).

## Computed Styles
- Section padding: 80px 20px (reduce on mobile)
- Header gap: 20px; cards row gap: 10px; container gap: 40px
- Card row: `overflow: clip`, `border-radius: 10px` on the row itself
- Quote text: body font, dark color, sits above avatar+name block within each card
- Avatar: small circular photo (~40-48px based on screenshot proportions) next to name/title text
- Name: bold/medium weight, dark color; title/company line below in muted gray

## States & Behaviors
- Scroll-triggered fade-in entrance for the whole cards row (or staggered per card) — standard IntersectionObserver-style reveal, matching the pattern used elsewhere on the page (WhyEcomOS cards, etc.).
- No hover, click, or auto-scroll behavior — build this as a plain static flex row, do not add carousel/slider logic.

## Assets
Each card also references a repeated decorative background image `public/images/endless-expectations-612180.framer.app/CpfLkhgt7FpnO01s75GIa7DPZo8.jpg` behind the avatar — this is subtle in the screenshot; include it as a faint background on the avatar area if easy, but it is low-priority and can be omitted if it doesn't visibly affect fidelity.

Avatars (in testimonial order, all in `public/images/endless-expectations-612180.framer.app/`):
1. James R. → `Savle5DZHOWqtAcOxHiJI3UY.png`
2. Sophie K. → `XFKsIZRI4mxNoJj3C4tv0S9qk.png`
3. Daniel M. → `FcQKk42EHfLdnZvoj6ItkuQFQ.png`
4. Paul M. → `KnorwvqN1HtowWhMecWMyaG6dws.png`
5. Emily C. → `8z52bh95AkYVEkLdscJpmO2iPbk.png`

## Text Content (verbatim)
- Eyebrow: "What people say"
- Heading: "Teams that work with Parley, not around it"
- Subtext: "From solo founders to enterprise teams — here's what our users have to say after making Parley their daily partner."

### Testimonials (5, in order)
1. "Parley does what every other AI tool promised but never delivered — it actually takes things off my plate. My inbox went from 200 unread to zero, daily." — **James R.**, CEO, CloudPlex
2. "I was skeptical about 'AI partners' — but Parley learned my communication style in a week and now drafts emails I barely need to edit. Genuinely impressive." — **Sophie K.**, VP Marketing, Tytotone
3. "The CRM follow-up workflow alone saved our sales team 12 hours a week. And the meeting notes are better than anything our team was writing manually." — **Daniel M.**, Head of Sales, Bloopglow
4. "Parley is the first AI tool that actually reduces my workload. I stay on top of emails, clients, and meetings without the usual chaos" — **Paul M.**, Operations Director, ZingZap
5. "Parley feels like the assistant I always needed. It keeps conversations organized, handles follow-ups, and saves me hours every week." — **Emily C.**, Head of Client Success, Junotwig

## Responsive Behavior
- **Desktop:** row of 5 cards as described, edges clipped by container.
- **Mobile/Tablet:** per `responsive-mobile.png`/`responsive-tablet.png`, the row likely still scrolls horizontally or stacks — since no carousel interaction was found on desktop, a reasonable mobile approach is to let the row become horizontally scrollable (`overflow-x-auto`) or stack to a single column; use judgment matching the general stacking pattern of other sections (prefer stacking to a single column list on mobile for simplicity and consistency with the rest of the page).

## Implementation notes
- Export named export `Testimonials` from `src/components/Testimonials.tsx`.
- Do NOT wire into `page.tsx` — happens later during final assembly.
- Run `npx tsc --noEmit` before finishing.
