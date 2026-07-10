# FAQ Specification

## Overview
- **Target file:** `src/components/FAQ.tsx`
- **Screenshots:** `docs/design-references/endless-expectations-612180.framer.app/faq-open.png` (Q1 open), `faq-second-open.png` (Q2 open, Q1 auto-closed)
- **Interaction model:** click-driven single-open accordion

## DOM Structure
- `<section>`: max-width 1280px, padding 80px 20px, flex row centered, height ~530px
  - Inner row: max-width 1240px, flex row centered, gap 40px, `align-items: flex-start`
    - Decorative scattered-squares graphic: absolutely positioned, bottom-left area of the section (behind/beside the left column) — small orange/cream squares in a loose scattered pattern (see screenshot). Use `public/images/endless-expectations-612180.framer.app/icons/icon-dot-diamond.svg` repeated/scattered, or approximate with a handful of small `rounded-sm` divs in orange/cream shades at varied opacity — this is a minor decorative detail, low priority, approximate is fine.
    - Left column (600px): flex column, `justify-content: flex-end`, gap 20px
      - Eyebrow "FAQ" + `<h2>` "Questions answered." (gap 12px)
      - "Still curious?" label + pill button "Chat with us" (with a small arrow icon)
    - Right column (600px): flex column, `align-items: flex-end`, gap 8px — 5 accordion rows

## Computed Styles
- Accordion row: full-width (600px) cream/light background `rgb(238,237,230)`-ish (`--cream` token), rounded corners, padding, closed height ~64-82px (varies with question text wrapping to 1 vs 2 lines)
- Question text: body font, medium weight, dark color, with a "+" icon (`PlusIcon`) on the right when closed
- When open: icon changes to "×" (`CloseIcon`), answer paragraph appears below the question in the same row (muted gray body text), row height grows
- Only ONE row open at a time — opening a new row closes whichever was previously open (confirmed via screenshot: opening Q2 auto-closed Q1)

## States & Behaviors
- Click-driven accordion, single-open. Implement with a single `useState<number | null>` tracking the open index.
- No transition timing captured — a simple height/opacity transition (200-300ms) is reasonable.

## Assets
- `PlusIcon`, `CloseIcon` from `src/components/icons.tsx` (already exist — import, don't redefine)
- Decorative scattered squares: `public/images/endless-expectations-612180.framer.app/icons/icon-dot-diamond.svg` (low priority, approximate acceptable)

## Text Content (verbatim)

### Header
- Eyebrow: "FAQ"
- Heading: "Questions answered."
- "Still curious?" label + button "Chat with us"

### Accordion items (5, in order — question / answer)
1. **"How is Parley different from ChatGPT and Copilot?"** — "Parley isn't a chatbot — it's an action-taking agent. While tools like ChatGPT generate text responses, Parley connects to your real tools, executes multi-step tasks, remembers your context across sessions, and proactively manages your work. It's the difference between answering a question and doing the job."
2. **"Is my data safe with Parley?"** — "Yes — and it's not a checkbox answer. Your data is encrypted in transit and at rest, never used to train shared models, and stays inside your workspace. Parley is SOC 2 Type II and GDPR-compliant, with EU data residency available on request. You own every record we touch, and you can delete it from us in one click."
3. **"What happens if Parley makes a mistake?"** — "Every action Parley takes is logged with field-level reasoning, so mistakes are traceable, not mysterious. High-impact actions stay in human-approval mode by default — Parley drafts, you confirm. If something does slip through, one-click undo reverses the change in your connected tools, and Parley learns from the correction so the same mistake doesn't ship twice."
4. **"How long does setup take?"** — "About 8 minutes for your first workflow. Connect one tool (HubSpot, Slack, or Zendesk to start), pick a template, run it in test mode against a real record. No implementation calls, no four-week pilot. The teams shipping fastest have a workflow running before lunch on day one — and a second one before they head home."
5. **"Can I build custom workflows without code?"** — "Yes — describe what you do in plain English and Parley drafts the workflow for you to review. Edit any step the same way: \"skip leads from competitors,\" \"only ping me about deals over $50k.\" Templates are forkable on a Friday afternoon. Engineers stay in their queue; RevOps, Support, and Ops own their workflows directly."

(Note: question 5's source text has a double-space between "build" and "custom" — normalize to a single space, that's clearly a source typo, not intentional.)

## Responsive Behavior
- **Desktop:** 2-column layout as described (header/CTA left, accordion right).
- **Mobile/Tablet:** stack to single column, header block above accordion list (standard pattern matching other sections).

## Implementation notes
- Client component (`"use client"`) for accordion state.
- Export named export `FAQ` from `src/components/FAQ.tsx`.
- Do NOT wire into `page.tsx` — happens later during final assembly.
- Run `npx tsc --noEmit` before finishing.
