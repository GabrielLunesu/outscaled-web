# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/endless-expectations-612180.framer.app/desktop-fresh-load.png` (bottom of page, ~7480-7935px)
- **Interaction model:** static

## DOM Structure
- `<footer>`: white background, padding `40px 20px 0px`, flex column centered, gap 37px, height ~455px
  - Inner container: max-width 1240px, flex column, `align-items: flex-end`, gap 20px, 3 children:
    1. Top row: logo ("Parley" wordmark/logo image, same as Navbar logo) on the left + brief tagline paragraph "Your AI partner for email, calendar, research, and everything in between. Built for people who want to do their best work" + nav link columns (Workflows / Company / Legal) on the right — per screenshot this is a row with logo+tagline on the left and 3 link columns on the right
    2. Large oversized "Parley" wordmark watermark graphic spanning the full width, bottom-aligned, cropped by the viewport edge (decorative, very large light-gray text, per screenshot)
    3. Bottom copyright bar: "© 2026 Parley. AI Agent template · Designed by Apollo Studio" (left) + "Terms & Conditions" link (right)

## Computed Styles
- Footer background: white `rgb(255,255,255)`
- Link columns: 3 columns (Workflows, Company, Legal), each with a bold column header and 2-3 links below in muted gray, body font ~14px
- Watermark "Parley" text: very large (spans most of the 1240px width), light gray/cream color, likely `text-[180px]` or larger, `font-heading` (matches nav logo wordmark style), positioned so only the top portion is visible (bottom cropped by page end) — treat as decorative, approximate size to match the screenshot's visual weight
- Copyright bar: small muted text, flex row justify-between

## States & Behaviors
- Static, no interactions.

## Assets
- Logo image: same as Navbar — `public/images/endless-expectations-612180.framer.app/h7fOCKCsvgnj6pswnDzTWfVkQ.png`
- The oversized "Parley" watermark is very likely just large text (not an image) — render as literal text at a very large font size rather than searching for an image asset, matching the "Parley" wordmark style/font used in the nav logo area (Headland One or a bold display treatment — check the screenshot; if it visually differs from Headland One, approximate with a bold sans-serif).

## Text Content (verbatim)
- Tagline: "Your AI partner for email, calendar, research, and everything in between. Built for people who want to do their best work"
- Column "Workflows": links "Lead enrichment", "Inbound triage", "Ticket triage"
- Column "Company": links "Blog", "Contact"
- Column "Legal": links "404", "Waitlist" (verbatim from source — reproduce as-is even though "404"/"Waitlist" read oddly as legal links, this is the site's actual content)
- Watermark text: "Parley"
- Copyright: "© 2026 Parley. AI Agent template · Designed by Apollo Studio"
- Bottom link: "Terms & Conditions"

## Responsive Behavior
- Stacks to a single column on mobile (logo/tagline above link columns, columns may stack or go 2-up) — see `responsive-mobile.png` bottom section for reference.

## Implementation notes
- Server component, no client state needed.
- Export named export `Footer` from `src/components/Footer.tsx`.
- Do NOT wire into `page.tsx` — happens later during final assembly.
- Run `npx tsc --noEmit` before finishing.
