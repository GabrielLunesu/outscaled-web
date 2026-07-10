# ProfilesPanelMockup Specification

## Overview
- **Target file:** `src/components/ProfilesPanelMockup.tsx`
- **Screenshot:** `docs/design-references/endless-expectations-612180.framer.app/hiw-tab-brief.png`
- **Interaction model:** static
- **Used by:** `src/components/HowItWorks.tsx` (rendered as the "Brief & customize" tab's content panel — this component is JUST the right-hand content panel, not the sidebar or window chrome, which live in the parent)

## DOM Structure
Content panel (right side of the mac-window, sidebar is separate/provided by parent):
- Header row: "Profiles" (bold heading, left) + search input "Search 142 facts..." (right, with search icon)
- "Brief" card (full width, highlighted/bordered): diamond/gem icon (orange) + "Brief" (bold) + "Tell it your role, priorities, and working style — no forms, just a quick chat" (muted description) + "Start brief →" button (right side, orange outline, hover-cursor icon visible in screenshot) + a few small scattered decorative squares in the card's background (reuse `icon-dot-diamond.svg` visual language)
- "PEOPLE & ACCOUNTS" section label + horizontal rule
  - 2 cards side by side: "VIP ACCOUNT" (orange label) card with "Acme Corp" (bold) + "ARR" tag + "added 14d ago" (muted); "ON-CALL" (label) card with "Maya Chen" (bold) + "Wed" tag + "updated 4m ago" (muted)
- "PREFERENCES" section label + horizontal rule
  - 3 cards in a row: "VOICE" label + "Friendly, terse"; "WORKING HOURS" label + "Mon–Thu, 9–18 PT"; "LAST CONTEXT" label + "Q2 churn review · 3 open follow-ups, due Friday" + "updated 4m ago · auto-captured" (small muted line)
- Bottom line: small green dot + "Synced across 3 devices · Maya can edit any fact"

## Computed Styles (approximate from screenshot)
- "Brief" card: has a distinct border/highlight (orange-ish border per screenshot) vs the plain gray cards below
- "VIP ACCOUNT" card: orange-tinted border/background accent to distinguish it
- All cards: light gray `rgb(245,245,245)`-ish background, rounded corners, small padding
- Section labels: small uppercase, muted gray, with a horizontal rule extending to the right

## Text Content (verbatim)
See DOM Structure section above — all labels, names, and descriptions are listed there verbatim.

## Implementation notes
- Static server component, zero or minimal props.
- Export named export `ProfilesPanelMockup` from `src/components/ProfilesPanelMockup.tsx`.
- Use Tailwind utility classes; approximate spacing/sizing from the screenshot, exact pixel precision isn't critical (decorative UI-within-UI element).
- Do NOT wire into `HowItWorks.tsx` yourself — another agent is building that wrapper; just create this standalone file so it type-checks on its own.
- Run `npx tsc --noEmit` before finishing. Keep the diff scoped to this one file.
