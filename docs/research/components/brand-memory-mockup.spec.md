# BrandMemoryMockup Specification

## Overview
- **Target file:** `src/components/BrandMemoryMockup.tsx`
- **Screenshot:** `docs/design-references/endless-expectations-612180.framer.app/bba-click-remembers.png` (right panel is the reference — ignore the left list column, that belongs to `BuiltByAsking`)
- **Interaction model:** static visual (this component itself has no interactivity — it's the "state 3" content rendered inside `BuiltByAsking`, shown when the user clicks "A team that remembers")
- **Used by:** `src/components/BuiltByAsking.tsx`

## DOM Structure
A network/node-diagram UI mockup, ~600px wide, on a transparent or subtly-textured backdrop:

- **Center card:** "Brand memory" (bold heading) + "Shared across agents" (small muted subheading), containing a 2×2 grid of small tag chips, each with a tiny icon: "Tone of voice", "Product rules", "Brand preferences", "Approved examples"
- **4 satellite avatar nodes**, positioned around/below the center card, each connected to it by a thin dotted line:
  - Top-left area (partially cropped in the reference screenshot, visible at the very top edge): an avatar chip with label "Learned tone"
  - Top-right area (also partially cropped): an avatar chip with label "Uses examples"
  - Bottom-left: "Support Agent" card with small avatar image + "Knows policies" status line (green dot)
  - Bottom-right: "Email Agent" card with small avatar image + "Matches voice" status line (green dot)
- **Toast notification** (upper-left area, floating): green checkmark icon + "New preference saved" text, small rounded card
- **Bottom caption** (centered, below everything): pill/badge shape with a small sparkle icon + text "Train one agent. The whole team gets smarter."

## Computed Styles (approximate from screenshot — use judgment for exact pixel values)
- Center "Brand memory" card: white/light rounded card, centered, padding ~24px, the 2×2 tag grid uses small rounded chips with icon + label, light gray background, thin border
- Satellite nodes ("Support Agent", "Email Agent", and the two smaller cropped ones): small rounded cards with a circular avatar thumbnail (~32-40px) + bold name + small status line with a green dot + muted text
- Connecting lines: thin dotted/dashed gray lines from each satellite node to the center card, with small dots at the connection points
- Toast: white rounded card, green circular checkmark icon, small text, positioned upper-left, slight shadow
- Bottom caption: pill-shaped badge, light background, small purple/violet sparkle icon, centered text

## Text Content (verbatim)
- Center card: "Brand memory" / "Shared across agents"
- Tag chips: "Tone of voice", "Product rules", "Brand preferences", "Approved examples"
- Toast: "New preference saved"
- Satellite node labels (partially visible in reference, cropped at top): "Learned tone", "Uses examples"
- "Support Agent" card: "Support Agent" / "Knows policies"
- "Email Agent" card: "Email Agent" / "Matches voice"
- Bottom caption: "Train one agent. The whole team gets smarter."

## Assets
- Avatar thumbnails for the agent nodes: use any 2 of the downloaded testimonial-style avatar images as generic placeholder avatars (e.g. `public/images/endless-expectations-612180.framer.app/FcQKk42EHfLdnZvoj6ItkuQFQ.png` and `KnorwvqN1HtowWhMecWMyaG6dws.png`), or simple colored circular initials avatars if you prefer — exact avatar image isn't critical here, this is a decorative mockup.
- Use a Lucide sparkle/stars icon for the bottom caption badge, a Lucide check-circle icon (green) for the toast.

## Implementation notes
- This is a purely presentational component — zero or minimal props.
- Export named export `BrandMemoryMockup` from `src/components/BrandMemoryMockup.tsx`.
- Server component (static, no interactivity of its own).
- Use Tailwind utility classes with `absolute`/`relative` positioning to place the satellite nodes and connecting lines around the center card, approximating the screenshot layout — exact pixel positions aren't critical since this is a decorative UI-within-UI element.
- Run `npx tsc --noEmit` before finishing.
- Keep the diff scoped to this one file.
