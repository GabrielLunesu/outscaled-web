# TasksPanelMockup Specification

## Overview
- **Target file:** `src/components/TasksPanelMockup.tsx`
- **Screenshot:** `docs/design-references/endless-expectations-612180.framer.app/hiw-tab-delegate.png`
- **Interaction model:** static
- **Used by:** `src/components/HowItWorks.tsx` (rendered as the "Delegate everywhere" tab's content panel — this component is JUST the right-hand content panel, not the sidebar or window chrome, which live in the parent)

## DOM Structure
Content panel (right side of the mac-window, sidebar is separate/provided by parent):
- Breadcrumb header: "Tasks / **New task**" (left, muted "Tasks/" + bold "New task") + a small "draft" status pill (right, partially cropped in screenshot)
- Task input row: a `>` chevron icon + text "close out the Acme deal — log the call, update the stage, send the contract" with a blinking-cursor-style vertical bar at the end (render as static text, no need for actual cursor animation), inside a rounded input-like container
- Intent line: "Intent" (bold) + "· deal-close workflow · 5 steps" (muted) + "95% ma[tch]" (green text, right-aligned, partially cropped)
- 5 numbered workflow steps, each a row with: number badge (1-5), step description, and a small app-source pill on the right (colored icon + label):
  1. "Log call notes for Acme Corp" — "Hub Spot" pill
  2. "Move deal to \"Proposal sent\"" — "Hub Spot" pill
  3. "Generate contract from template" — "Google Drive" pill
  4. "Send contract to maya@acmecorp.com" — "Gmail" pill
  5. "Post deal update in #sales" — "Slack" pill

## Computed Styles (approximate from screenshot)
- Task input row: rounded rectangle, light background, orange chevron icon
- Step rows: light gray `rgb(245,245,245)`-ish background, rounded corners, number badge is a small circle/square with the number, app-source pill sits right-aligned with a small colored icon + label
- App pills: "Hub Spot" (orange), "Google Drive" (multi-color triangle icon), "Gmail" (red/multi-color envelope icon), "Slack" (multi-color hash icon) — approximate with simple colored icon representations, exact brand-mark fidelity isn't critical for this decorative mockup

## Text Content (verbatim)
- Breadcrumb: "Tasks" / "New task"
- Task input text: "close out the Acme deal — log the call, update the stage, send the contract"
- Intent line: "Intent" / "deal-close workflow" / "5 steps" / "95% match" (the "match" text was cropped in the reference screenshot at "95% ma" — complete it as "95% match", a reasonable completion)
- Steps: "Log call notes for Acme Corp" (Hub Spot), "Move deal to \"Proposal sent\"" (Hub Spot), "Generate contract from template" (Google Drive), "Send contract to maya@acmecorp.com" (Gmail), "Post deal update in #sales" (Slack)

## Implementation notes
- Static server component, zero or minimal props.
- Export named export `TasksPanelMockup` from `src/components/TasksPanelMockup.tsx`.
- Use Tailwind utility classes; approximate spacing/sizing from the screenshot, exact pixel precision isn't critical (decorative UI-within-UI element).
- Do NOT wire into `HowItWorks.tsx` yourself — another agent is building that wrapper; just create this standalone file so it type-checks on its own.
- Run `npx tsc --noEmit` before finishing. Keep the diff scoped to this one file.
