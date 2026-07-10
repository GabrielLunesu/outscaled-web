# OUTSCALED WEBSITE DESIGN SKILL
## For website design and frontend agents only

### Purpose

Use this skill whenever designing, rebuilding, or translating website sections for **Outscaled**.

The agent may receive inspiration screenshots, reference websites, copied HTML/CSS/React code, shadcn components, wireframes, rough section ideas, or existing Outscaled pages that need refinement.

The goal is **not** to reproduce the reference literally. Preserve the useful structural idea, interaction, or hierarchy, then rebuild it so the final result feels unmistakably Outscaled.

---

# 1. BRAND ESSENCE

Outscaled combines:

- Mediterranean sunset luxury
- high-performance agent software
- Rococo and late-Baroque visual culture
- modern product clarity
- calm confidence
- strong whitespace
- precise typography
- quiet but unmistakable digital details

The website should feel like:

> A private Mediterranean club for powerful software.

It must be premium, warm, spacious, modern, intelligent, and visually controlled.

It must never feel like generic AI SaaS, a crowded dashboard, a Web3 landing page, a template with Outscaled colors applied, a historical costume site, an overly ornamental luxury brand, or a playful startup.

---

# 2. NON-NEGOTIABLE DESIGN PRINCIPLES

## 2.1 Leave room around everything

Whitespace is part of the brand.

Every section should:
- have one clear visual idea
- use fewer elements than the inspiration when possible
- give headlines room to breathe
- avoid stacking many cards, badges, icons, and labels
- avoid filling empty space just because it exists
- preserve calm visual rhythm between sections

When uncertain, remove an element before adding one.

## 2.2 Strong hierarchy, low noise

Every section should have:
1. one dominant message
2. one supporting explanation
3. one visual or interactive proof
4. one clear action, only when necessary

Do not make all elements equally prominent.

## 2.3 Classical expression, modern operation

Use the serif for ideas, vision, and emotional statements.

Use the sans-serif for explanation, product behavior, navigation, buttons, labels, interface content, and technical information.

The page should feel culturally rich without sacrificing product clarity.

## 2.4 Gold is the signal

Gold is the signature activation color.

Use it to indicate intelligence, motion, selected states, agent activity, transformation, key interaction points, and important highlights.

Do not flood the page with gold.

## 2.5 The interface should feel effortless

Even when the product is highly capable, the frontend should look simple.

Show capability through clear outcomes, smooth transitions, concise product visuals, intelligent defaults, and restrained interface states.

Do not communicate power through clutter.

---

# 3. LOCKED COLOR SYSTEM

## Core palette

| Token | Hex | Purpose |
|---|---:|---|
| Club White | `#FFFEFB` | Main page background |
| Sunset Gold | `#FFB52E` | Primary brand signal |
| Solar Orange | `#F27624` | Energy, depth, gradients, motion |
| Outscaled Black | `#1B1919` | Primary text, dark sections, buttons |
| Sunbleached Sand | `#F1DEC1` | Warm secondary surfaces |

## Functional neutrals

```css
--border-soft: rgba(27, 25, 25, 0.10);
--border-strong: rgba(27, 25, 25, 0.18);
--text-muted: rgba(27, 25, 25, 0.62);
--text-faint: rgba(27, 25, 25, 0.42);
--surface-white: #FFFFFF;
--surface-warm: #FFF9F0;
--overlay-dark: rgba(27, 25, 25, 0.72);
```

## Usage hierarchy

Recommended page balance:
- 60–70% Club White / white space
- 15–20% Outscaled Black
- 8–12% warm image color and Sunbleached Sand
- 3–7% Sunset Gold
- 0–3% Solar Orange

## Color rules

Always:
- use Outscaled Black for primary copy on light backgrounds
- use white or Club White text on dark backgrounds
- use gold as an accent, not as body-copy color
- use black text on gold buttons or gold surfaces
- keep borders subtle and warm
- let paintings carry richer natural color

Never:
- introduce purple or electric blue gradients
- use cold gray as the dominant neutral
- use white text on bright gold for small text
- use several saturated accent colors in one section
- make every card or icon gold

Natural blue may appear inside classical sky imagery, but it is not a core interface color.

---

# 4. LOCKED TYPOGRAPHY

## Display and headings

**Typeface:** Headland One

Use for hero headlines, section titles, editorial statements, large quotes, and expressive campaign copy.

```css
font-family: "Headland One", Georgia, serif;
font-weight: 400;
letter-spacing: -0.035em;
line-height: 0.98;
```

Rules:
- sentence case
- regular weight
- compact line-height
- restrained negative tracking
- short line lengths
- no all-caps headlines

## Body and interface

**Typeface:** Helvetica Neue

Use for paragraphs, navigation, buttons, labels, product UI, cards, captions, and form controls.

```css
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 400;
letter-spacing: -0.015em;
line-height: 1.45;
```

Use weight `500` selectively for buttons, navigation, labels, and important UI states.

Avoid heavy bold text unless a specific functional hierarchy requires it.

## Type scale

| Role | Size |
|---|---:|
| Hero display | `clamp(3.5rem, 6.5vw, 6.75rem)` |
| Large section title | `clamp(2.75rem, 4.5vw, 5rem)` |
| Standard section title | `clamp(2rem, 3vw, 3.5rem)` |
| Card title | `1.25rem–1.75rem` |
| Large body | `1.125rem–1.25rem` |
| Body | `1rem–1.0625rem` |
| UI label | `0.75rem–0.875rem` |
| Button | `0.875rem–1rem` |

## Line-length rules

- headline: usually 8–12 words
- body width: `36rem–44rem`
- avoid full-width paragraphs
- never center long paragraphs

---

# 5. SPACING AND LAYOUT

## Core spacing scale

```text
4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 160
```

## Section spacing

Current implementation, applied flat (no separate tablet step) unless noted:
- default vertical section padding: `80px` (`py-20`) — this is the standard for nearly every section, not a max
- sections that do scale by breakpoint step from `40px` to `80px` (`py-10 md:py-20`)
- the one "major" moment on the page (final CTA band) is the sole section that pushes past `80px`, up to `96px` desktop (`py-16 sm:py-20 md:py-24`)

Mobile:
- `40–80px` — largely the same values as desktop, since padding is flat rather than tiered by device

## Container widths

```css
--page-max: 1280px;
--content-max: 1240px;
--copy-max: 680px;
--narrow-copy-max: 560px;
```

Default horizontal page padding:
- flat `20px` (`px-5`) at every breakpoint — the current implementation does not tier this by device

## Grid behavior

Prefer:
- asymmetrical two-column compositions
- large image + compact copy
- editorial offsets
- controlled overlaps
- one dominant module per section
- a 12-column layout underneath, visually simplified on the surface

Avoid:
- identical grids repeated section after section
- equal-sized content blocks with no visual priority
- full-bleed content without margins unless deliberate

A four-column card grid is acceptable for a single flagship feature section (see the "Why ecomOS" pattern: `grid-cols-4` on desktop, collapsing to a single-column stack on mobile) as long as the pattern is not repeated elsewhere on the page. Do not use three- or four-column grids as a default, repeatable section pattern.

## Breathing-room rule

Minimum recommended gaps:
- eyebrow to heading: `16–24px`
- heading to body: `24–32px`
- body to action: `28–40px`
- card internal padding: `24–36px`
- large media to nearby text: `48–96px`

---

# 6. SECTION DESIGN LANGUAGE

## Hero sections

A hero should usually contain:
- one short Headland One statement
- one concise Helvetica Neue paragraph
- one primary action
- one strong image, illustration, or product demonstration

Do not include multiple competing CTAs, many badges, a row of logos under every hero, excessive decorative copy, or dense feature lists.

The hero should create atmosphere first, then explain.

## Feature sections

Each feature section should focus on one idea.

Preferred patterns:
- text beside one large visual
- one large product panel with a short explanation
- editorial split layout
- visual sequence of 2–3 steps
- one central object surrounded by minimal supporting states

Avoid six-card feature grids unless the content genuinely requires six distinct concepts.

## Product UI mockups

Product visuals should feel modern, calm, high-fidelity, shadcn-influenced, Apple-like in spacing, light by default, structurally simple, and capable beneath the surface.

Use subtle borders, soft warm shadows, restrained radii, clear hierarchy, few visible controls, realistic product content, and generous empty space.

Do not make mockups look like Dribbble dashboards, analytics walls, generic AI chat windows, neon control panels, or over-designed glassmorphism.

## Cards

Cards are not the default solution.

Use a card only when content needs a bounded interactive surface, it represents a product object, or grouping improves comprehension.

```css
background: rgba(255, 254, 251, 0.88);
border: 1px solid rgba(27, 25, 25, 0.10);
border-radius: 18px;
box-shadow: 0 18px 60px rgba(27, 25, 25, 0.08);
```

On dense interface components, smaller radii such as `10–14px` are preferred.

Avoid putting every piece of content inside a card.

## Buttons

Primary:
- Outscaled Black background
- Club White text
- subtle gold or orange interaction state

Secondary:
- transparent or white surface
- dark border
- Outscaled Black text

Gold button:
- reserved for high-signal moments
- black text
- no white text
- do not repeat within the same viewport

Two button families in practice:
- **Marketing CTAs** (hero, nav, final CTA, pricing toggle) — fully rounded pill (`rounded-full`) is the default shape, not the exception. They frequently pair a small icon "chip" (a `size-9` square, `rounded-lg`, contrasting fill) with the label inside the same pill: `[icon chip] label`. Treat this chip + label construction as the default primary-CTA shape.
- **Product-UI controls** (buttons inside interface mockups simulating the app) — small and rectangular, `rounded-lg` (~10px), no icon chip. Use this family only inside product/interface visuals, never for page-level marketing CTAs.

Recommended height:
- standard marketing CTA (nav, hero, final CTA): `44px`
- pricing/card CTA with larger padding around the icon chip: `~52px`
- product-UI control: `28–36px`

Recommended radius:
- marketing CTA: fully rounded (`rounded-full`) by default
- icon chip inside a CTA: `10–14px` (`rounded-lg`)
- product-UI control: `8–12px`

---

# 7. IMAGE AND ILLUSTRATION DNA

Outscaled’s custom illustrations are not generic decorative art.

## Locked visual world

- high-fidelity Rococo / late-Baroque oil painting
- large golden sunset skies
- vivid, genuinely painted pigment
- Mediterranean or classical landscape
- youthful aristocratic operator
- honey-blond curls
- ivory and blush drapery
- coral folds
- gold trim
- MacBook as the only modern object
- visible old-master paint character at close range
- detailed, luminous, vibrant rendering

## Locked face treatment

The operator’s face is intentionally pixelated.

The pixelation:
- covers only the facial area
- uses dense square blocks
- obscures identity while preserving head shape
- stays visually integrated with the painting
- never spreads into hair, neck, hands, clothing, body, or MacBook

The rest of the character remains pristine and classically painted.

## Background computation

ASCII and pixel structures may appear in:
- sky
- clouds
- distant atmosphere
- horizon haze
- distant architecture
- symbolic background animals
- rising swarms and trails

They must not affect the operator’s body, clothing, hands, MacBook, or nearby foreground objects.

The coded elements should feel painted into the pigment, not placed as a digital overlay.

## Website placement rules

When using a large illustration:
- give it space
- do not crowd text over the important character area
- preserve readable negative space for copy
- avoid covering the operator’s silhouette
- let the artwork establish the emotional tone of the section
- crop carefully across breakpoints
- use rounded corners only when the image behaves like a framed asset
- use full-bleed imagery only for major cinematic moments

Avoid placing several large Rococo illustrations close together. Alternate artwork with clean product sections.

---

# 8. PIXEL MOTIFS

Pixel elements are a supporting brand language, not a universal effect.

Use them for:
- subtle motion trails
- agent activity indicators
- loading or completion states
- image transitions
- masks and reveals
- small brand accents
- occasional illustrative symbols
- structured swarms

Pixel motifs should feel dense, intentional, geometric, rising or moving forward, and premium rather than retro.

Avoid 8-bit game styling, random pixel noise, glitch effects, low-resolution UI, pixelating body text or controls, or covering entire sections with pixel patterns.

---

# 9. MOTION AND INTERACTION

Motion should feel calm, expensive, and purposeful.

Preferred:
- gentle parallax in large illustrations
- slow mask reveals
- controlled fade and vertical movement
- small pixel trails gathering into place
- gold light passing subtly across an active element
- staggered agent-state transitions
- smooth section entrances
- restrained hover depth

Timing:
- micro-interaction: `160–240ms`
- component transition: `240–420ms`
- editorial reveal: `500–900ms`
- atmospheric image movement: slow and subtle

Easing:
```css
cubic-bezier(0.22, 1, 0.36, 1)
```

Avoid bouncy motion, excessive scroll-jacking, constant ambient animation, spinning gradient orbs, floating cards without purpose, aggressive cursor effects, or fast glitch transitions.

Motion should clarify hierarchy or communicate system activity.

---

# 10. COMMUNICATION STYLE

Outscaled copy should feel:
- direct
- calm
- confident
- ambitious
- precise
- human
- understated

Use short declarative headings, plain language, outcome-led explanations, concrete verbs, minimal qualifiers, and strong contrast between headline and explanation.

Examples:
- “Stop doing jobs. Start giving them.”
- “From sentence to working agent.”
- “You decide the leash.”
- “A team that remembers.”

Avoid:
- “Revolutionize your workflow”
- “Unlock the power of AI”
- “Next-generation solutions”
- “Seamless synergy”
- inflated claims
- long technical explanations above the fold
- too many words inside visuals

The headline should create desire.
The body should remove ambiguity.
The product visual should prove the claim.

---

# 11. TRANSLATING INSPIRATION INTO OUTSCALED

Whenever inspiration code, a screenshot, or a reference section is provided, follow this process.

## Step 1 — Identify the useful idea

Extract:
- the section’s purpose
- information hierarchy
- interaction pattern
- layout logic
- emotional effect
- responsive behavior
- what specifically makes it effective

Do not begin by copying colors, fonts, radii, or decorative details.

## Step 2 — Separate structure from styling

Preserve only what is useful:
- composition
- sequence
- interaction
- content relationship
- visual priority
- pacing

Discard:
- the reference brand’s color system
- typefaces
- icons
- gradients
- visual noise
- unnecessary cards
- decorative effects that do not fit Outscaled

## Step 3 — Simplify

Before rebuilding:
- remove repeated labels
- combine redundant cards
- reduce visible controls
- shorten copy
- increase whitespace
- identify one dominant visual
- make the intended action obvious

The Outscaled version should often use 20–40% fewer visible elements than the reference.

## Step 4 — Apply Outscaled DNA

Translate the section using:
- Headland One for expressive headings
- Helvetica Neue for everything operational
- Club White as the main canvas
- Outscaled Black for structure
- Sunset Gold as the signal
- Solar Orange only for added intensity
- Sunbleached Sand for warm surfaces
- editorial spacing
- restrained product UI
- Rococo artwork or pixel motifs only when conceptually relevant

## Step 5 — Make it breathe

Check:
- Is the headline isolated enough?
- Is the text column too wide?
- Are there too many cards?
- Is the visual large enough to matter?
- Does each element have a clear role?
- Could one element be removed?
- Does the section have a calm outer margin?

## Step 6 — Rebuild, do not reskin

Do not merely replace the colors in the original code.

The final code should be restructured when necessary so it behaves like a native Outscaled section.

## Step 7 — Validate against the full page

Check:
- Does it repeat the previous section’s composition?
- Is there enough rhythm between dark, light, visual, and product-led moments?
- Is another large artwork too close?
- Is gold appearing too often?
- Does the section advance the story?
- Does it preserve visual calm?

---

# 12. IMPLEMENTATION RULES

Assume a modern React / Next.js / Tailwind / shadcn environment unless instructed otherwise.

## Code quality

- use semantic HTML
- create reusable components when patterns repeat
- keep content separate from presentation when useful
- preserve accessibility
- support keyboard navigation
- respect reduced-motion preferences
- use responsive image handling
- avoid unnecessary dependencies
- avoid one-off hardcoded layouts that collapse on mobile
- use clean component names based on purpose, not appearance

## Responsive behavior

Desktop layouts should not simply shrink.

On mobile:
- preserve headline prominence
- stack asymmetrical layouts intentionally
- reduce decorative layers
- keep body text readable
- retain generous spacing
- move actions closer to the relevant copy
- crop illustrations around the subject
- simplify product mockups rather than showing illegible desktop UI

## Accessibility

- maintain readable text contrast
- do not use color alone to communicate state
- provide visible focus states
- ensure buttons and links have clear labels
- use alt text that describes the purpose of imagery
- decorative pixel patterns should be hidden from assistive technology
- avoid motion that interferes with reading

---

# 13. OUTPUT PROTOCOL FOR DESIGN AGENTS

When asked to build or translate a section, provide:

## A. Design interpretation
Briefly state:
- what the reference is doing well
- what will be retained
- what will be changed for Outscaled

## B. Final section structure
Describe:
- headline
- supporting copy
- visual
- interaction
- CTA
- responsive behavior

## C. Implementation
Return complete, usable code rather than fragments unless only ideation was requested.

## D. Visual audit
Before finishing, verify:
- correct fonts
- correct colors
- sufficient whitespace
- restrained gold usage
- minimal cards
- readable hierarchy
- no generic AI visual language
- no blue-purple SaaS gradients
- no clutter
- mobile behavior is considered

Do not explain every minor design decision in the final response. Let the design and code demonstrate the system.

---

# 14. QUICK DO / DO NOT

## Do

- make white space visibly intentional
- use large short serif statements
- make product copy compact
- use gold as a rare signal
- use warm dark text
- create editorial composition
- keep interfaces calm
- use one dominant visual per section
- let sections alternate in rhythm
- rebuild inspiration into the Outscaled system
- preserve custom painting DNA precisely

## Do not

- clone inspiration literally
- use generic SaaS blue
- use purple AI gradients
- place everything in cards
- use tiny centered copy everywhere
- overload a section with badges
- use gold on every control
- rely on visual effects instead of hierarchy
- crowd artwork with text
- apply ASCII or pixelation randomly
- pixelate any part of the operator except the face
- make the site feel like a theme template

---

# 15. FINAL DECISION RULE

When there are several possible design choices, choose the option that feels:

1. simpler
2. more spacious
3. warmer
4. more editorial
5. more premium
6. more legible
7. less like generic SaaS
8. more recognizably Outscaled

The final website should look restrained at first glance and reveal depth through detail, motion, typography, product behavior, and art direction.