For a Corporate Website / Web Development Agency Website, I recommend a clean, modern layout with generous whitespace, consistent alignment, and a structured grid. The goal is to communicate professionalism, trust, and technical expertise.

## 1. Recommended spacing system

Use an 8px-based spacing system for your main design, with 4px available for smaller adjustments.

## Spacing scale

Recommended

### 4

px

Micro spacing

Icon-to-text, tiny adjustments

### 8

px

Tight spacing

Related labels and elements

### 16

px

Standard spacing

Buttons, form fields, card elements

### 24

px

Component spacing

Between related content groups

### 32

px

Large component spacing

Between cards or content blocks

### 48

px

Section spacing

Between headings and content groups

### 64

px

Large section spacing

Between major content sections

### 96

px

Hero / major section spacing

Large desktop section separation

These are recommended starting values. Use 4px increments where necessary, and adjust for responsive layouts.

## 2. Spacing for each website section

Digital Agency Website Clean & Modern UI/UX Design by Orbiq Studio on Dribbble

[dribbble.com](<https://dribbble.com/shots/27047565-Digital-Agency-Website-Clean-Modern-UI-UX-Design?utm_source=chatgpt.com>)

Here is a practical specification you can use when building your website.

| Website element | Recommended spacing |
| --- | --- |
| Header height | 72–88px |
| Header horizontal padding | 24px mobile, 32–64px desktop |
| Hero top/bottom padding | 64–96px mobile, 96–144px desktop |
| Hero heading to paragraph | 16–24px |
| Paragraph to CTA buttons | 24–32px |
| Between CTA buttons | 12–16px |
| Section top/bottom padding | 64–80px mobile, 96–120px desktop |
| Section heading to description | 12–16px |
| Heading block to card grid | 32–48px |
| Card internal padding | 24–32px |
| Gap between cards | 24–32px |
| Footer top padding | 48–64px mobile, 64–96px desktop |

You don't need to use the maximum values everywhere. Give the hero and major sections more room, while keeping closely related content compact.

## 3. Recommended alignment and grid

For a corporate or agency website, use a 12-column desktop grid and a simpler 4-column mobile grid.

### Desktop grid — 1440px viewport

1

2

3

4

5

6

7

8

9

10

11

12

12 columns · equal-width columns · consistent gutters

#### Suggested layout dimensions

1200px

Max content width

Use approximately 1200px for the main content container; 1280px also works for wider designs.

24px

Grid gutter

A good starting gap between desktop columns and cards.

12 cols

Hero layout

Use 6 columns for text and 6 for an illustration, screenshot, or product visual.

For alignment, follow these rules:

- Header: Logo left, navigation in the middle or toward the right, primary CTA at the far right.
- Hero: Left-align the headline and body copy. Pair them with a visual on the right for a split layout.
- Services: Align cards to a shared top edge and keep their padding consistent.
- Case studies: Align images, headings, and descriptions to a common grid.
- Testimonials: Keep text and author details consistently aligned.
- Footer: Use aligned columns with consistent spacing and clear grouping.

Center-aligned hero sections can also work well if you want a minimalist, bold agency aesthetic.

## 4. Responsive spacing

Your spacing should change with the available screen width rather than simply shrinking the entire desktop design.

Mobile

320–767px

Tablet

768–1023px

Desktop

1024px+

Suggested responsive values

| Property | Mobile | Desktop |
| --- | --- | --- |
| Side padding | 20–24px | 40–64px |
| Hero vertical padding | 64–80px | 100–144px |
| Section vertical padding | 64px | 96–120px |
| Card gap | 16px | 24–32px |
| Card padding | 20–24px | 24–32px |

## 5. Example CSS spacing tokens

You can implement these recommendations in your design system using CSS custom properties.

css

```

:root {
  /* Spacing scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;

  /* Layout */
  --container-width: 1200px;
  --page-gutter: 24px;
  --grid-gap: 24px;

  /* Components */
  --header-height: 80px;
  --card-padding: 32px;
  --section-padding: 112px;
}

.container {
  width: min(
    var(--container-width),
    calc(100% - 2 * var(--page-gutter))
  );
  margin-inline: auto;
}

.section {
  padding-block: var(--section-padding);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--grid-gap);
}

@media (max-width: 767px) {
  :root {
    --page-gutter: 20px;
    --card-padding: 24px;
    --section-padding: 64px;
    --grid-gap: 16px;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }
}
```

## My final recommendation

For a professional web development agency website, start with these five core rules:

1. Use a 1200px maximum content width on desktop.
2. Use a 24px standard gutter between cards and grid columns.
3. Use 96–120px vertical section spacing on desktop.
4. Keep cards, headings, and content aligned to the same grid.
5. Reduce spacing and stack columns appropriately on mobile.

These values give you a solid foundation. Refine them based on your typography, visual style, content density, and actual screen designs.