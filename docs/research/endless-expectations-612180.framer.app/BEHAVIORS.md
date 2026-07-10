# Behaviors — endless-expectations-612180.framer.app

Findings from the mandatory interaction sweep (scroll / click / hover / responsive) before any component was built.

## Global

- **Smooth scroll library:** none detected (no `.lenis`/`.locomotive-scroll` markers). Native browser scroll.
- **Nav (`Navbar`):** `position: sticky`, top of page. No dramatic style change observed between scroll 0 and scroll 400 (stays white background, hairline bottom border, "Hire Parley" CTA always visible top-right). Treat as a simple sticky bar, not a shrink/hide-on-scroll nav.
- **Mobile nav:** below ~768px the nav link row is replaced by a hamburger icon (`≡`) at top-right. Clicking it opens a **full-viewport dropdown panel** pushing page content down (not an overlay/modal) — shows logo + close "×" icon at top, then nav items stacked vertically. "Workflows" is a mega-menu-style item: on mobile its 3 sub-links (Lead enrichment, Inbound triage, Ticket triage) render inline/expanded under the "Workflows" label. Desktop hover behavior for "Workflows" dropdown not fully captured — assume standard hover-reveal dropdown, verify during desktop nav build if time allows.
- **Section entrance animations:** most sections (Benefits, Features, Testimonials) are invisible/blank in a fresh full-page screenshot taken without scrolling — content fades/slides in via scroll-triggered (IntersectionObserver-style) entrance animation the first time each section enters the viewport. Not a bug — must implement entrance transitions (opacity/translateY) on scroll-into-view for these sections.
- **Font loading:** Headland One (serif, headings) + Inter/Geist (site's own body font) confirmed via computed styles. **Per explicit user instruction: use Headland One for headings (matches site) and Helvetica Neue for body text (override — site actually uses Inter/Geist, but user wants Helvetica Neue).**

## Section-by-section

### Hero
- Static full-bleed painting background image behind heading + subtext + "Get started free" CTA. No parallax detected during scroll testing.

### TrustedLogos ("social trusted")
- **Static row**, NOT a marquee. 5 logos (Cloudplex, Tytotone, Bloopglow, Zingzap, Junotwig), confirmed via 2s time-lapse screenshot — zero movement.
- (An earlier screenshot taken after rapid programmatic scroll-jumping showed what looked like duplicated/shifted logos — this was a rendering artifact of the aggressive scroll test, not real behavior. Disregard.)

### WhyEcomOS ("Benefits")
- **Different content per breakpoint** — not a bug, confirmed via responsive screenshots:
  - **Desktop (≥ ~1280px):** 4-column grid, cards titled "Knows your brand / Does real work / Works your whole stack / Gets better every run", each with a portrait-orientation painting of a person (different painting per card) below the text.
  - **Tablet/Mobile (≤ ~768px, breakpoint not more precisely isolated — treat as the standard `md` 768px breakpoint):** cards titled "Always context-aware / Takes real action / Connects everything / Gets better over time", each with a "Creation of Adam"-style hands painting (same/similar image, possibly identical across cards) and different body copy. Stacked vertically, one column.
  - Scroll-triggered fade-in entrance per card.

### BuiltByAsking ("Features")
- **Interaction model: CLICK-driven**, confirmed by explicitly testing scroll-through (no change over the full section scroll range) then click (immediate content swap). NOT scroll-driven.
- Left column: 3 clickable list items, one always "active" (bold, » marker, italic description shown, others gray/collapsed no description):
  1. "From sentence to working agent" (default active on load) — right panel shows a static painting image (person with laptop, golden light path).
  2. "You decide the leash" — right panel swaps to a UI mockup: "Proposed work" card (checklist + Approve/Edit limits buttons) + "Autonomy level" 4-stop slider (Review every step → Approve batches → Auto-run safe tasks → Run within limits) + "Limits" tag row.
  3. "A team that remembers" — right panel swaps to a UI mockup: "Brand memory" network diagram — center card (Tone of voice / Product rules / Brand preferences / Approved examples) connected via dotted lines to 4 agent avatar nodes (Support Agent, Email Agent, etc.) + a "New preference saved" toast + bottom caption "Train one agent. The whole team gets smarter."
- Right panel image/mockup area is visually `position: sticky` while the left list is the taller scrollable column (standard sticky-scroll layout), but the actual state switching itself is click-triggered, not scroll-position-triggered.
- Transition style between states not precisely measured — treat as a simple opacity crossfade unless closer inspection during build shows otherwise.

### Testimonials
- Blank on initial page load screenshot (below the fold), but **not a carousel/marquee** — confirmed static 4-column grid (avatar photo, name, title/company, quote) that simply fades in on scroll-into-view like other sections.

### Pricing
- Monthly/Annual pill toggle, click-driven. Clicking "Annual" swaps displayed prices and gives the toggle an active white pill background.
  - **Note (verbatim site content, not a fix-worthy bug):** Monthly shows Pro at "$49 / month, billed monthly"; Annual shows Pro at "$169" while the caption text still literally reads "per month, billed monthly" (unchanged) — reproduce exactly as displayed, do not "fix" the apparent copy inconsistency.
  - Solo: $0 both states. Teams: $89/seat/month (Monthly) → $299/seat/month (Annual, caption unchanged "per seat / month").
- 3 cards (Solo / Pro / Teams), Pro card has a warm cloud-photo background (the other two are flat cream `rgb(238,237,230)`-style background).

### HowItWorks
- **Interaction model: CLICK-driven tabs**, 3 pills: "Connect your tools" (default active) / "Brief & customize" / "Delegate everywhere". Confirmed via explicit clicks — each shows a completely distinct mac-window app mockup:
  1. **Connect your tools:** "Integrations" panel — Featured cards (Automation/Analytics/Calendar/Communication) + "Most Popular" connect cards (Google Calendar/Gmail/Slack, each with a "Connect" button). This tab additionally has a **self-playing scripted micro-demo** on a loop/timer: after the mockup finishes its entrance animation (~8-10s), a "Connect" button on one card automatically cycles through "Connect" → "Connecting…" → connected (green toast "Gmail connected — Ready to use in tasks", connected-count badge increments "CONNECTED - N"). Treat as a nice-to-have decorative autoplay; exact timing/sequence isn't critical, but the 3 visual states (idle/connecting/connected-toast) should exist.
  2. **Brief & customize:** "Profiles" panel — search bar, "Brief" card with "Start brief →" button, "People & Accounts" (VIP Account / On-call cards), "Preferences" (Voice / Working hours / Last context cards).
  3. **Delegate everywhere:** "Tasks / New task" panel — task input field with a submitted task string, "Intent" line with match %, 5 numbered workflow steps each tagged with a source app pill (Hub Spot / Google Drive / Gmail / Slack).
  - All 3 mockups share the same mac-window chrome (traffic-light dots top-left) and the same left sidebar (Ravenpath workspace nav: New task / Inbox / Tasks / Profiles / Integrations — active item highlighted per tab) sitting on the same warm painterly background.

### FAQ
- Standard **single-open accordion**, click-driven. Confirmed: opening question 2 auto-closes question 1. Closed rows show a "+" icon; the open row shows "×". 5 questions total.

### Integrations
- App-logo grid is a **2-row horizontal auto-scrolling marquee** (continuous, edge-fade mask left/right), confirmed via 2s time-lapse — logos visibly shifted position. Both rows scroll left continuously; duplicate/looping icon set for seamless wrap. NOT the same as TrustedLogos (which is static).

### FinalCTA
- Static gray-toned band, ocean/sunset photo background, heading + CTA button. No interaction beyond the button link observed.

### Footer
- Static. Logo, 3 nav columns (Workflows/Company/Legal), oversized "Parley" wordmark watermark graphic at the bottom, cropped by viewport.
