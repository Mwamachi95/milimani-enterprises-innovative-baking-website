# Milimani Enterprises - Design System Documentation

This document outlines the UI/UX design principles, patterns, and practices implemented in the Milimani Enterprises website.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Component Library](#component-library)
5. [Animation System](#animation-system)
6. [Responsive Design](#responsive-design)
7. [Interaction Patterns](#interaction-patterns)
8. [Accessibility](#accessibility)
9. [Visual Effects](#visual-effects)

---

## Design Philosophy

The Milimani Enterprises website follows a **modern, clean, and professional** design approach that reflects the company's commitment to quality baking ingredients. The design emphasizes:

- **Trust & Reliability**: Professional color palette with earthy tones that convey stability
- **Warmth & Approachability**: Soft curves, inviting imagery, and friendly typography
- **Modern Professionalism**: Contemporary layout patterns with sophisticated animations
- **Mobile-First**: Responsive design that works seamlessly across all devices

---

## Color System

### Brand Palette

The color system is built around six carefully curated colors defined in Tailwind CSS theme configuration:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Luscious Lime** | `#7CBF00` | Primary accent, CTAs, hover states, success indicators |
| **Bright White** | `#F6F2F1` | Primary backgrounds, content areas |
| **Whisper White** | `#EAE2D3` | Secondary backgrounds, subtle contrast areas |
| **Wet Sand** | `#AE8F60` | Warm accents, buttons, form inputs, card highlights |
| **Bokara Grey** | `#2A2725` | Primary text, dark sections |
| **Dark Hunter Green** | `#153033` | Footer, headers, dark UI elements |

### Color Usage Guidelines

```css
/* Primary Background */
background-color: var(--color-bright-white);  /* #F6F2F1 */

/* Accent/CTA Buttons */
background-color: var(--color-wet-sand);      /* #AE8F60 */
hover: background-color: var(--color-luscious-lime);  /* #7CBF00 */

/* Dark Sections */
background-color: var(--color-dark-hunter-green);  /* #153033 */
background-color: var(--color-bokara-grey);        /* #2A2725 */
```

### Color Psychology

- **Green (Luscious Lime)**: Represents freshness, growth, and natural ingredients
- **Earth Tones (Wet Sand, Whisper White)**: Convey warmth, reliability, and artisanal quality
- **Dark Tones**: Provide contrast and professional authority

---

## Typography

### Font Family

**Primary Font**: Sora (Sans-serif)

Sora was chosen for its:
- Modern, geometric design
- Excellent readability at all sizes
- Professional yet approachable character
- Strong web performance

### Typography Scale

```css
/* Headings */
.heading1 { @apply text-6xl font-bold; }    /* 3.75rem - Hero titles */
.heading2 { @apply text-4xl font-bold; }    /* 2.25rem - Section headers */
.heading3 { @apply text-2xl font-semibold; } /* 1.5rem - Subsections */
.heading4 { @apply text-xl font-semibold; }  /* 1.25rem - Card titles */
.heading5 { @apply text-lg font-semibold; }  /* 1.125rem - Labels */

/* Body Text */
.text1 { @apply text-base font-normal; }  /* 1rem - Primary body */
.text2 { @apply text-sm font-normal; }    /* 0.875rem - Secondary/captions */
```

### Responsive Typography

Typography scales down on mobile devices using Tailwind's responsive prefixes:

```jsx
<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
  Hero Title
</h1>
```

---

## Component Library

### Button Components

#### Primary Button
```jsx
<button className="bg-wet-sand text-bright-white px-6 py-3 rounded-xl
                   hover:bg-luscious-lime transition-all duration-300">
  Get Started
</button>
```

#### Button with Slide Animation
Buttons feature a sophisticated sliding background effect with stacked text:
- Background slides from left on hover
- Text animates with a vertical stack effect
- Arrow icon provides directional affordance

### Card Components

#### Product Cards
- **Aspect Ratio**: 3:4 (portrait orientation)
- **Border Radius**: `rounded-2xl` (1rem)
- **Hover Effect**: Background color slides from left
- **Image**: Lazy-loaded with skeleton placeholder

#### Team Cards
- Image with 3:2 aspect ratio
- Name and role overlay
- Sliding background effect on hover
- Subtle shadow elevation

### Form Elements

```jsx
/* Input Fields */
<input className="w-full bg-wet-sand/20 rounded-lg px-4 py-3
                  focus:ring-2 focus:ring-luscious-lime outline-none
                  transition-all duration-300" />

/* Error State */
<input className="ring-2 ring-red-500" />
```

### Accordion Components

- **Expand/collapse animation**: Smooth height transition (0.3s)
- **Arrow rotation**: 180-degree rotation on open
- **Staggered reveal**: Content fades in with slight delay

---

## Animation System

### Animation Library

The project uses **Framer Motion** for all animations, providing:
- Declarative animation syntax
- Spring physics
- Gesture support
- Layout animations

### Animation Variants

Located in `src/components/animations/variants.js`:

```javascript
// Directional Fades
fadeInUp    // Fade in from bottom (60px)
fadeInDown  // Fade in from top (60px)
fadeInLeft  // Fade in from left (60px)
fadeInRight // Fade in from right (60px)

// Scale Animations
scaleIn     // Scale from 0.8 to 1.0 with fade

// Container Animations
staggerContainer  // Parent container with staggered children
staggerItem       // Individual staggered child items

// Interactive Animations
accordionContainer  // Height-based expand/collapse
rotateArrow         // 180-degree rotation for dropdowns
```

### Animation Components

#### AnimatedSection
Wrapper for scroll-triggered section animations:

```jsx
<AnimatedSection variants={fadeInUp}>
  <SectionContent />
</AnimatedSection>
```

#### AnimatedGrid
Staggered grid animations for card layouts:

```jsx
<AnimatedGrid>
  {products.map(product => <ProductCard />)}
</AnimatedGrid>
```

#### AnimatedAccordion
Expandable content with smooth transitions:

```jsx
<AnimatedAccordion title="Section Title">
  <AccordionContent />
</AnimatedAccordion>
```

### Performance Optimizations

- **Reduced Motion Support**: Respects `prefers-reduced-motion` media query
- **Mobile Optimization**: 30% faster animations on mobile devices
- **GPU Acceleration**: Uses `transform` and `opacity` for smooth performance

```javascript
// Reduced motion detection
export const getReducedMotionVariants = (variants) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  }
  return variants;
};
```

---

## Responsive Design

### Breakpoint System

Following Tailwind CSS defaults:

| Breakpoint | Min-Width | Target Devices |
|------------|-----------|----------------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Mobile-First Approach

All styles are written mobile-first with responsive overrides:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* 1 column mobile, 2 tablet, 4 desktop */}
</div>
```

### Navigation Patterns

**Desktop**: Horizontal navigation bar with glassmorphism effect
**Mobile**: Hamburger menu with full-screen overlay

```jsx
// Touch/Pointer detection
const isDesktop = window.matchMedia("(pointer: fine)").matches;
```

### Responsive Components

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Product Grid | 1 column | 2 columns | 4 columns |
| Team Grid | 1 column | 2 columns | 3-4 columns |
| Navigation | Hamburger | Hamburger | Horizontal |
| Hero Text | `text-3xl` | `text-5xl` | `text-6xl` |

---

## Interaction Patterns

### Hover States

All interactive elements have clear hover feedback:

```css
/* Standard hover transition */
transition-all duration-300

/* Button hover */
hover:bg-luscious-lime

/* Card hover */
hover:shadow-lg hover:-translate-y-1
```

### Focus States

Keyboard accessibility with visible focus indicators:

```css
focus:ring-2 focus:ring-luscious-lime focus:outline-none
```

### Click/Tap Feedback

- Buttons provide immediate visual feedback
- Touch targets meet minimum 44x44px requirement
- Active states with subtle scale reduction

### Scroll Behaviors

- **Smooth scrolling**: Native CSS smooth scroll
- **Scroll-to-top**: BackToTop button appears after scrolling
- **Scroll-triggered animations**: Elements animate into view

---

## Accessibility

### ARIA Implementation

```jsx
<button
  aria-label="Open navigation menu"
  aria-expanded={isOpen}
>
  <MenuIcon />
</button>
```

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Logical tab order maintained
- Focus trapping in modals/overlays

### Color Contrast

All text meets WCAG 2.1 AA contrast requirements:
- Dark text on light backgrounds: 7:1+ ratio
- Light text on dark backgrounds: 4.5:1+ ratio

### Motion Preferences

```javascript
// Respects user motion preferences
@media (prefers-reduced-motion: reduce) {
  animation: none;
  transition: none;
}
```

---

## Visual Effects

### Glassmorphism

Navigation uses glassmorphism effect:

```css
backdrop-blur-md bg-white/80
```

### Shadows

Consistent shadow scale:

```css
shadow-sm   /* Subtle elevation */
shadow-md   /* Default cards */
shadow-lg   /* Hover/emphasis */
shadow-xl   /* Modals/overlays */
```

### Gradients

Background overlays use gradient masks:

```css
bg-gradient-to-b from-black/50 to-transparent
```

### Border Radius System

| Size | Class | Usage |
|------|-------|-------|
| Small | `rounded-lg` | Inputs, small buttons |
| Medium | `rounded-xl` | Cards, buttons |
| Large | `rounded-2xl` | Hero sections, large cards |
| Full | `rounded-full` | Avatars, circular elements |

---

## Page-Specific Design

### Home Page

1. **Hero Section**: Full-width with gradient overlay and centered text
2. **Products Grid**: 4-column responsive grid with hover animations
3. **Services**: Accordion-based expandable sections
4. **Owner Message**: Two-column layout with photo
5. **CTA Section**: Full-width with strong call-to-action

### About Page

1. **Hero**: Company story with background image
2. **Values**: Accordion-style expandable values
3. **Team Grid**: Photo grid with role information

### Contact Page

1. **Form Section**: Two-column layout (description + form)
2. **Location**: Map integration with contact details

---

## Design Tokens Summary

```css
/* Colors */
--color-primary: #7CBF00;       /* Luscious Lime */
--color-secondary: #AE8F60;     /* Wet Sand */
--color-background: #F6F2F1;    /* Bright White */
--color-text: #2A2725;          /* Bokara Grey */
--color-dark: #153033;          /* Dark Hunter Green */

/* Spacing */
--spacing-section: 4rem;        /* py-16 */
--spacing-content: 1.5rem;      /* gap-6 */

/* Animation */
--duration-fast: 0.3s;
--duration-normal: 0.6s;
--easing: ease-out;

/* Border Radius */
--radius-small: 0.5rem;
--radius-medium: 0.75rem;
--radius-large: 1rem;
```

---

## Contributing to Design

When adding new components or modifying existing ones:

1. **Follow the color system** - Use defined color tokens
2. **Maintain typography scale** - Use heading/text utility classes
3. **Add animations thoughtfully** - Use existing variant patterns
4. **Test responsively** - Verify on all breakpoints
5. **Ensure accessibility** - Test with keyboard and screen readers

---

*Last updated: January 2026*
