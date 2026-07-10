# HowItWorks Specification

## Overview
- **Target file:** `src/components/HowItWorks.tsx`
- **Screenshots:** `docs/design-references/endless-expectations-612180.framer.app/hiw-time-16.png` (tab 1 "Connect your tools" — Integrations picker, fully settled), `hiw-tab-brief.png` (tab 2 "Brief & customize" — Profiles panel), `hiw-tab-delegate.png` (tab 3 "Delegate everywhere" — Tasks panel)
- **Interaction model:** **CLICK-driven tabs**, confirmed via explicit clicks on each of the 3 pills — each shows completely distinct mockup content. NOT scroll-driven, NOT time-driven at the tab level (though tab 1's inner content has its own self-playing micro-animation, see below).
- **Depends on:** `src/components/IntegrationsPickerMockup.tsx`, `src/components/ProfilesPanelMockup.tsx`, `src/components/TasksPanelMockup.tsx` (built separately — see their own spec files). This wrapper imports and renders the active one based on which tab pill is selected.

## DOM Structure
- `<section>`: max-width 1280px, padding 80px 20px, flex column centered, height ~1266px
  - Inner container: max-width 1240px, flex column centered, gap 40px, height ~1106px
    - Header: 1240px wide, height ~125px, flex column centered, gap 20px — eyebrow "How it works" + `<h2>` "From ask to done. Without the back-and-forth." (both centered, no description paragraph this time — just the eyebrow+heading)
    - Content block: contains the 3 tab pills + the mac-window mockup, all sitting on a shared warm painterly background image with rounded corners (per screenshots — the whole content block has a textured background, and the mockup "window" floats on top of it)
      - Tab pills row: 3 pills "Connect your tools" / "Brief & customize" / "Delegate everywhere", centered at the top of the content block. Active pill has a white background; inactive pills are a translucent/muted gray pill on the textured background.
      - Mac-window mockup card: white rounded-rect card with traffic-light dots (red/yellow/green) top-left, positioned below the tab pills, overlapping the textured background. Contains a shared left sidebar ("Ravenpath" workspace nav: New task / Inbox / Tasks / Profiles / Integrations, with the item matching the active tab highlighted) + the tab-specific content panel on the right.

## Computed Styles
- Content block background: warm painterly/cloud texture image (same family of hero-style painting backgrounds used elsewhere on the page), rounded corners (~16-24px)
- Tab pills: rounded-full, active = white bg + dark text, inactive = translucent white/gray bg + muted text, small gap between pills, centered
- Mac-window card: white background, rounded corners (~12-16px), subtle shadow, traffic-light dots top-left (red/yellow/green circles, ~10-12px)
- Sidebar: light gray/cream background, ~250-280px wide, contains workspace switcher ("Ravenpath" + avatar), nav items with icons, "WORKSPACE"/"LIBRARY" section labels

## States & Behaviors
Click-driven, `useState<0 | 1 | 2>` for active tab (default 0).

### Tab 0: "Connect your tools" (default)
- Sidebar active item: "Integrations"
- Renders `<IntegrationsPickerMockup />` in the content panel

### Tab 1: "Brief & customize"
- Sidebar active item: "Profiles"
- Renders `<ProfilesPanelMockup />` in the content panel

### Tab 2: "Delegate everywhere"
- Sidebar active item: "Tasks"
- Renders `<TasksPanelMockup />` in the content panel

No transition timing captured for the tab switch itself — instant swap or a quick (150-200ms) fade is fine.

## Text Content (verbatim)
- Eyebrow: "How it works"
- Heading: "From ask to done. Without the back-and-forth."
- Tab labels: "Connect your tools", "Brief & customize", "Delegate everywhere"
- Sidebar (shared across all 3 tabs): workspace name "Ravenpath", nav items "New task", "Inbox" (badge "3"), "Tasks" (badge "12"), section label "LIBRARY", items "Profiles", "Integrations"

## Assets
- Content block background texture: `public/images/endless-expectations-612180.framer.app/g2Q0UEGYPma6FK2cD4vkNBVTXao.png` (or another warm painterly image from the downloaded set — match visually against the screenshot; several similar painterly textures were downloaded, pick the closest match)

## Responsive Behavior
- **Mobile/Tablet:** per `responsive-mobile.png`, likely scales down proportionally with the mac-window mockup shrinking; tabs may wrap or stay in a row — use judgment.

## Implementation notes
- Client component (`"use client"`) for the tab state.
- Export named export `HowItWorks` from `src/components/HowItWorks.tsx`.
- Import the 3 tab-content mockups from `./IntegrationsPickerMockup`, `./ProfilesPanelMockup`, `./TasksPanelMockup` — check with Read/Glob whether they exist in this worktree yet (other agents are building them in parallel). If missing, create a minimal placeholder stub for any missing one so this component type-checks; the orchestrator will replace stubs during final merge.
- Do NOT wire into `page.tsx` — happens later during final assembly.
- Run `npx tsc --noEmit` before finishing.
