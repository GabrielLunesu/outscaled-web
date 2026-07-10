# BuiltByAsking Specification

## Overview
- **Target file:** `src/components/BuiltByAsking.tsx`
- **Screenshots:** `docs/design-references/endless-expectations-612180.framer.app/bba-scroll-1900.png` (state 1, default), `bba-click-leash.png` (state 2), `bba-click-remembers.png` (state 3)
- **Interaction model:** **CLICK-driven**, NOT scroll-driven — confirmed by explicitly scrolling through the entire section (no change) then clicking each list item (immediate content swap). The right panel visually looks sticky/fixed on screen but that's just because the section is only slightly taller than the viewport, not because of scroll-linked switching.
- **Depends on:** `src/components/ProposedWorkMockup.tsx` and `src/components/BrandMemoryMockup.tsx` (built separately — see their own spec files `proposed-work-mockup.spec.md` and `brand-memory-mockup.spec.md`). This wrapper imports and renders both, swapping between them (and a plain image for state 1) based on which list item is active.

## DOM Structure
- `<section>`: max-width 1280px, padding 80px 20px, flex column centered, height ~1007px
  - Inner container: max-width 1240px, flex column, gap 40px, height ~847px
    - Header row: 1240px wide, height ~125px, flex row `justify-content: flex-start; align-items: flex-end; gap: 20px;`
      - Eyebrow "Built by asking" + `<h2>` "Say it once. It gets done." (left column)
      - Description paragraph (right column): "Describe what you need in plain words and ecomOS turns it into a working agent. It plans the job, picks the right skills and apps, and shows you every step before anything runs."
    - Content row: 1240px wide, height ~682px, 2 columns side by side (roughly 50/50 split, ~600px each based on screenshot proportions)
      - **Left column:** 3 clickable list items stacked vertically, each `cursor: pointer`. The active item shows: a pink `»` marker (`DoubleChevronIcon`, color `rgb(196,33,116)`) + bold title + italic description paragraph below it. Inactive items show only a plain gray/muted title, no marker, no description.
      - **Right column:** the state-dependent visual (~600×640px based on screenshot), rounded corners. Renders one of: a static image (state 1), `<ProposedWorkMockup />` (state 2), or `<BrandMemoryMockup />` (state 3).

## Computed Styles
- Header: justify-content flex-start (NOT space-between — heading and description sit close together on the left side per the gap:20px, unlike other section headers on this page which use space-between)
- List items: vertical stack, generous gap between items (~40-48px based on screenshot spacing)
- Active item title: bold, dark `rgb(37,31,25)`-ish, Headland One or bold sans — check screenshot, looks like a serif/heading treatment
- Active item description: italic, smaller, muted gray, appears only for the active item
- Inactive item title: plain gray/muted `rgb(156,156,156)`-ish, no bold, no marker
- Right panel: rounded corners (~16-24px per screenshot), fixed aspect ratio roughly square/portrait, `overflow: hidden`

## States & Behaviors
Click-driven, `useState<0 | 1 | 2>` for which item is active (default 0).

### State 0 (default): "From sentence to working agent"
- List item active with description: "ecomOS breaks your request into a clear plan: what the agent does, which apps it uses, what it needs from you. You see the whole job before it starts."
- Right panel: static image, `public/images/endless-expectations-612180.framer.app/g2Q0UEGYPma6FK2cD4vkNBVTXao.png` (a painting of a person with a laptop, golden light path — natural 2320×1600, use `object-fit: cover`)

### State 1: "You decide the leash"
- List item active with description: "Every agent starts by proposing its work for review. As trust grows, you give it more room, until it runs on its own within the limits you set."
- Right panel: renders `<ProposedWorkMockup />`

### State 2: "A team that remembers"
- List item active with description: "Your agents share what they learn about your brand, products, and preferences. Train one, and the whole team gets smarter."
- Right panel: renders `<BrandMemoryMockup />`

No transition timing was captured — a simple opacity crossfade (200-300ms) between right-panel states is reasonable; instant swap is also acceptable if simpler.

## Text Content (verbatim)
- Eyebrow: "Built by asking"
- Heading: "Say it once. It gets done."
- Description: "Describe what you need in plain words and ecomOS turns it into a working agent. It plans the job, picks the right skills and apps, and shows you every step before anything runs."
- List item titles (in order): "From sentence to working agent", "You decide the leash", "A team that remembers"
- (Descriptions listed under "States & Behaviors" above)

## Responsive Behavior
- **Mobile/Tablet:** per `responsive-mobile.png`, stacks to a single column — list above, image/mockup below (or vice versa), full width.

## Implementation notes
- Client component (`"use client"`) for the click state.
- Export named export `BuiltByAsking` from `src/components/BuiltByAsking.tsx`.
- Import `ProposedWorkMockup` from `./ProposedWorkMockup` and `BrandMemoryMockup` from `./BrandMemoryMockup` — these files may not exist yet when you start; if so, create minimal placeholder stub files for them (a simple div with a TODO comment) so this component type-checks, OR check if they already exist and use them directly. **Check first** with a file existence check before assuming.
- Do NOT wire into `page.tsx` — happens later during final assembly.
- Run `npx tsc --noEmit` before finishing.
