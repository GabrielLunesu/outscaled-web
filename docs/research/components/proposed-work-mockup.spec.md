# ProposedWorkMockup Specification

## Overview
- **Target file:** `src/components/ProposedWorkMockup.tsx`
- **Screenshot:** `docs/design-references/endless-expectations-612180.framer.app/bba-click-leash.png` (right panel is the reference — ignore the left list column, that belongs to `BuiltByAsking`)
- **Interaction model:** static visual (this component itself has no interactivity — it's the "state 2" content rendered inside `BuiltByAsking`, shown when the user clicks "You decide the leash")
- **Used by:** `src/components/BuiltByAsking.tsx`

## DOM Structure
A card-style UI mockup, ~600px wide, containing two stacked white/cream rounded-corner cards on a transparent or subtly-textured backdrop:

1. **"Proposed work" card** (top):
   - Header: bold heading "Proposed work"
   - Checklist (3 items, each with a small gray bullet dot): "Rewrite 24 product titles", "Update missing descriptions", "Flag risky changes for approval"
   - Button row: "✓ Approve" (dark/filled button) + "✎ Edit limits" (outline button), side by side

2. **"Autonomy level" card** (below, separate rounded card):
   - Header: bold heading "Autonomy level"
   - A horizontal 4-stop slider/progress track: 4 circular nodes connected by a line, with the line filled (blue/dark) up to the active node (2nd of 4, "Approve batches"). Labels below each node: "Review every step", "Approve batches" (bold, active), "Auto-run safe tasks", "Run within limits"
   - "Limits" sub-header + 3 small pill/tag chips below it, each with a tiny icon: "Max 25 changes/day", "Never publish without approval", "Alert on failed steps"

## Computed Styles (approximate from screenshot — use judgment for exact pixel values)
- Cards: white/very-light background, rounded corners (~12-16px), subtle border or shadow, padding ~20-24px
- "Proposed work" card: checklist items in a vertical list with small gap, gray dot bullets, small muted text
- Buttons: "Approve" is a solid dark button with checkmark icon; "Edit limits" is an outline/ghost button with a pencil icon — both pill-shaped or rounded-rect, sit side by side with a gap
- Autonomy slider: horizontal line with 4 evenly-spaced circular nodes; filled/active portion of the line is blue (`rgb(37, 99, 235)`-ish or similar blue), inactive portion is light gray; the active node (2nd) is a larger filled blue circle, others are smaller gray/white outlined circles
- Limits tags: small rounded-pill chips, light gray/white background, thin border, small icon + text, arranged in a row

## Text Content (verbatim)
- Card 1 title: "Proposed work"
- Checklist: "Rewrite 24 product titles", "Update missing descriptions", "Flag risky changes for approval"
- Buttons: "Approve", "Edit limits"
- Card 2 title: "Autonomy level"
- Slider labels: "Review every step", "Approve batches" (active/selected), "Auto-run safe tasks", "Run within limits"
- "Limits" sub-header
- Limit tags: "Max 25 changes/day", "Never publish without approval", "Alert on failed steps"

## Assets
- Use Lucide React icons for: checkmark (Approve button), pencil (Edit limits button), and small icons for the 3 limit tags (a clock/gauge icon, a shield icon, a bell icon — approximate, exact glyph isn't critical).

## Implementation notes
- This is a purely presentational component — no props needed unless you want to accept none at all (simplest: a zero-prop component).
- Export named export `ProposedWorkMockup` from `src/components/ProposedWorkMockup.tsx`.
- Server component (static, no interactivity of its own).
- Use Tailwind utility classes; approximate spacing/sizing from the screenshot is acceptable since exact computed CSS wasn't extracted for this nested mockup (it's a decorative UI-within-UI element, not real page chrome).
- Run `npx tsc --noEmit` before finishing.
- Keep the diff scoped to this one file.
