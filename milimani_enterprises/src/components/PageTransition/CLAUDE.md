**Prompt 1: Foundation & Page Transitions**

Install Framer Motion and create a page transition system for the React app.

Requirements:

- Install framer-motion package
- Create PageTransition wrapper component
- Setup AnimatePresence for route changes
- Apply fade transitions between Home, AboutUs, and ContactUs pages
- Maintain Navigation component overlay behavior
- 0.3s transition duration with ease-out timing

Integration: Wrap routes in App.jsx with PageTransition component.

**Prompt 2: Reusable Animation Components**
Create reusable animation wrapper components for consistent animations across the Milimani Enterprises website using Framer Motion.
Component Requirements:

Create animation wrappers folder structure:

Create animations folder inside components folder
Create AnimatedSection.jsx, AnimatedGrid.jsx, and AnimatedAccordion.jsx files
Create variants.js file for shared animation configurations
Export all components for easy importing

AnimatedSection Component:

Scroll-triggered section wrapper:

Purpose: Animate any section when it enters the viewport
Default animation: Fade in from bottom with slight upward movement
Trigger: When 30% of element is visible (once only)
Props accepted:

children (required)
className (optional - for additional Tailwind classes)
variants (optional - custom animation variants)
delay (optional - animation delay in seconds)

Default timing: 0.6s duration with ease-out easing

AnimatedGrid Component:

Staggered grid/card wrapper:

Purpose: Animate grid items with staggered timing (cards, team members, products)
Pattern: Container fades in, then children animate with stagger delay
Stagger timing: 0.1s delay between each child
Props accepted:

children (required)
className (optional)
staggerDelay (optional - default 0.1s)
gridVariants (optional - custom container variants)
itemVariants (optional - custom child variants)

Child handling: Automatically wraps each child with motion.div

AnimatedAccordion Component:

Accordion/dropdown wrapper:

Purpose: Handle expand/collapse animations for accordion-style components
Animation types: Height transition + opacity + arrow rotation
Props accepted:

isOpen (required - boolean state)
children (required - content to show/hide)
className (optional)
duration (optional - default 0.3s)
showArrow (optional - boolean, default false)
onToggle (optional - click handler function)

Features: Smooth height animation from 0 to auto, overflow handling

Animation Variants File:

Shared animation configurations (variants.js):

fadeInUp: Standard bottom-to-top fade entrance
fadeInDown: Top-to-bottom fade entrance
fadeInLeft/Right: Horizontal slide entrances
staggerContainer: Parent container for staggered children
staggerItem: Child item for staggered animations
scaleIn: Scale up from small to normal size
accordionContainer: Height-based accordion animations
rotateArrow: Arrow rotation for dropdowns (0° to 180°)

Technical Specifications:

Performance optimizations:

Use whileInView for scroll-triggered animations
Set viewport={{ once: true }} to prevent re-triggering
Use will-change: transform for smooth animations
Implement proper cleanup for event listeners

Responsive considerations:

Reduced motion support: Respect prefers-reduced-motion media query
Mobile optimization: Shorter durations on mobile devices
Breakpoint-aware: Allow different animations per screen size

Usage Examples:

Provide clear implementation examples:

AnimatedSection: Wrapping a hero section or content block
AnimatedGrid: Wrapping team member cards or product grid
AnimatedAccordion: Integration with OurValues dropdown functionality
Import statements: Show how to import and use each component
Props examples: Demonstrate different prop combinations

Integration Guidelines:

Component compatibility:

Work with existing Tailwind classes: Don't interfere with responsive design
Preserve functionality: Maintain click handlers, hover states, etc.
Flexible styling: Allow custom classes to be added
No breaking changes: Components should enhance, not replace existing behavior

Error handling and fallbacks:

Graceful degradation: Work without JavaScript if needed
Default values: Sensible defaults for all optional props
Type safety: Clear prop requirements and expected types
Accessibility: Maintain semantic HTML and ARIA attributes.

**Prompt 3: Component-Specific Animations**
Apply animations to ALL existing components across Home, AboutUs, and ContactUs pages using the animation wrappers created in the previous step. Focus on enhancing user experience without breaking current functionality.
Home Page Component Animations:

LandingHome Component Enhancement:

Sequential text reveals: Main heading "Milimani Enterprises" fade up with 0.2s delay
Subtitle animation: "East Africa's Trusted..." fade up with 0.4s delay
Background image: Subtle scale effect (1.0 to 1.02) on page load with 0.6s delay
Preserve existing: Text positioning (lower-left), responsive breakpoints, background image styling

SelectedProducts Component Enhancement:

Header section: "SELECTED PRODUCTS" and rotating text slider fade in with 0.3s delay
Product grid: Wrap with AnimatedGrid for staggered card reveals (0.1s stagger)
Animation sequence: Header appears first, then product cards animate one by one
Preserve existing: 3:4 aspect ratio images, hover effects (bokara grey slide-down), responsive grid layout

ServicesSection Component Enhancement:

Wrap entire section with AnimatedSection for fade-in when scrolled into view
Header content: "OUR SERVICES" and main heading fade up with 0.2s delay
Accordion items: Subtle fade-in for each accordion header with 0.1s stagger
Preserve existing: Upward expansion functionality, hover states, accordion interactions

MessageFromOwner Component Enhancement:

Text content: Staggered text reveals (heading → message → owner info) with 0.2s increments
Owner image: Fade in from right side with 0.6s delay
Layout preservation: Maintain two-column desktop layout, single-column mobile
Preserve existing: Image styling, responsive behavior, text hierarchy

CallToAction Component Enhancement:

Left content: "Interested?" and "Let's Connect" staggered fade-up (0.2s apart)
Right content: Main CTA text and button sequential animation (0.4s, 0.6s delays)
Button enhancement: Enhance existing hover animations with subtle motion effects
Preserve existing: Background image overlay, button functionality, text stack animations

AboutUs Page Component Animations:

AboutUsHero Component Enhancement:

Sequential text reveals: Main heading → description → button → illustration
Animation delays: 0.2s, 0.4s, 0.6s, 0.8s respectively
Preserve existing: Responsive layout, button functionality, baker illustration positioning

OurValues Component Enhancement:

Section header: "Our Values" fade-in with 0.2s delay
Values list: Each accordion item fades in with 0.1s stagger
Integration: Work with existing accordion functionality (when implemented)
Preserve existing: Dropdown behavior, separator lines, text content

OurTeam Component Enhancement:

Section title: "We are the people who make up Milimani Enterprises" staggered reveal
Team grid: Wrap with AnimatedGrid for card stagger (0.1s delay between members)
Preserve existing: Grid responsiveness, image overlays, team member information

ContactUs Page Component Animations:

Contact Component Enhancement:

Left column: "LET'S TALK" standalone block fade-in with 0.2s delay
Company description: Fade-up animation with 0.4s delay
Form fields: Sequential fade-in for each form field (first name, last name, email, company, message)
Submit button: Enhance existing hover animations with motion effects
Preserve existing: Form alignment with description text, all form functionality, button hover effects

ContactLocation Component Enhancement:

Section heading: "LOCATION" fade-in with 0.2s delay
Location card: Slide up from bottom with subtle shadow enhancement
Image overlay: "CONVENTION CENTRE" text fade-in after card animation
Preserve existing: Card styling, image aspect ratio, location information

Shared Component Animations:

Navigation Component Enhancement:

DO NOT MODIFY: Keep existing sophisticated scroll animations and mobile menu functionality
Integration only: Ensure Navigation works with page transitions
Preserve existing: Logo text fade, glassmorphism effects, mobile menu behavior

Footer Component Enhancement:

Wrap entire footer with AnimatedSection for subtle entrance
Animation: Simple fade-in from bottom when footer enters viewport (0.6s duration)
Preserve existing: All navigation functionality, responsive layout, social media links, hover effects

BackToTop Component Enhancement (when integrated):

Show animation: Fade-in with slight scale when appearing
Hide animation: Fade-out when scrolling back to top
Hover effects: Subtle scale or color transition enhancements
Preserve existing: Scroll position logic, smooth scroll functionality

Cross-Page Animation Guidelines:

Consistent timing across all pages:

Standard duration: 0.6s for main animations
Stagger delays: 0.1s for grid items, 0.2s for text sequences
Scroll triggers: 30% visibility threshold for most components
Mobile optimization: Same timing, ensure smooth performance

Page-specific considerations:

Home page: Focus on hero impact and product showcase
AboutUs page: Emphasize team and values presentation
ContactUs page: Highlight form usability and location clarity
All pages: Maintain professional, cohesive animation language

Performance and Integration Requirements:

Component compatibility:

Work with ALL existing Tailwind classes and responsive design
Preserve ALL interactive functionality (forms, navigation, hover states)
Maintain existing animations (don't conflict with button hovers, scroll effects)
Cross-browser consistency across all components and pages

Animation optimization:

Use whileInView with viewport={{ once: true }} for all scroll-triggered animations
Stagger children appropriately for grid layouts (SelectedProducts, OurTeam)
Sequential delays for text-heavy components (heroes, content sections)
Subtle enhancements for interactive elements without breaking functionality

The result should be a cohesive, professional animation system that enhances user experience across the entire website while maintaining all existing functionality, responsive design, and interactive elements on every page.
