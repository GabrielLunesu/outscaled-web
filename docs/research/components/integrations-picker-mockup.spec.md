# IntegrationsPickerMockup Specification

## Overview
- **Target file:** `src/components/IntegrationsPickerMockup.tsx`
- **Screenshots:** `docs/design-references/endless-expectations-612180.framer.app/hiw-time-16.png` (fully-loaded state), `hiw-time-22.png` (shows the auto-play "Gmail connected" toast + connected count)
- **Interaction model:** static layout with an optional self-playing decorative micro-animation (nice-to-have, not critical)
- **Used by:** `src/components/HowItWorks.tsx` (rendered as the "Connect your tools" tab's content panel — this component is JUST the right-hand content panel, not the sidebar or window chrome, which live in the parent)

## DOM Structure
Content panel (right side of the mac-window, sidebar is separate/provided by parent):
- Header row: "Integrations" (bold heading, left) + search input "Search integrations..." (right, with search icon)
- "FEATURED" section label (small, muted, with a horizontal rule) + left/right chevron nav arrows (small circular buttons, top-right of this row)
  - 4 cards in a row: "Automation" (7 apps), "Analytics" (5 apps), "Calendar" (3 apps), "Communication" (6 apps) — each card has a light gray background with a scattered small colored-square decorative pattern (reuse the same visual language as `icon-dot-diamond.svg`), title bold, subtitle muted small text
- "MOST POPULAR" section label + horizontal rule
  - 3 cards in a row: "Google Calendar" (icon + description + "Connect" button), "Gmail" (icon + description + "Connect" button), "Slack" (icon + description + "Connect" button)
    - Descriptions: Google Calendar — "Google Calendar is a time-management and scheduling service that helps users organize events, set reminders, and share calendars"; Gmail — "Gmail is an email service by Google that allows users to send, receive, and organize emails securely across devices."; Slack — "Slack is a business communication platform that enables teams to collaborate through messaging, file sharing, and organized channels in real time."
- Bottom row: "CONNECTED - 3" (or similar counter text) + a horizontal rule, small pagination-style dots below

## Computed Styles (approximate from screenshot)
- Card backgrounds: light gray `rgb(245,245,245)`-ish
- "Connect" buttons: outline/ghost pill buttons, dark text, thin border
- Icons: Google Calendar (blue/red/green/yellow calendar icon), Gmail (red/blue/green/yellow envelope "M" icon), Slack (colorful 4-color hash/pound icon) — use simple recognizable colored icon representations (Lucide doesn't have brand icons; approximate with colored shapes or simple SVGs, exact brand-mark fidelity isn't critical for this decorative mockup)

## States & Behaviors (optional, nice-to-have)
- The reference site has a self-playing decorative loop: after the mockup settles, the Gmail "Connect" button cycles through "Connect" → "Connecting…" → a green toast appears reading "Gmail connected — Ready to use in tasks" and the "CONNECTED - N" counter increments. This is purely decorative flourish — implement it if straightforward with a `useState` + `useEffect`/`setTimeout` loop (client component), but a fully static version without the animation is also acceptable if you want to keep this simple. If you skip the animation, just render the static "settled" state shown in `hiw-time-16.png`.

## Text Content (verbatim)
See DOM Structure section above for all card titles/subtitles/descriptions.

## Implementation notes
- If implementing the optional animation, mark `"use client"`. Otherwise this can be a static server component.
- Export named export `IntegrationsPickerMockup` from `src/components/IntegrationsPickerMockup.tsx`.
- Zero or minimal props.
- Use Tailwind utility classes; approximate spacing/sizing from the screenshot, exact pixel precision isn't critical (decorative UI-within-UI element).
- Do NOT wire into `HowItWorks.tsx` yourself — another agent is building that wrapper; just create this standalone file so it type-checks on its own.
- Run `npx tsc --noEmit` before finishing. Keep the diff scoped to this one file.
