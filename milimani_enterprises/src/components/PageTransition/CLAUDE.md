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
Apply animations to existing components using the animation wrappers:

1. OurTeam component: Wrap team member cards with AnimatedGrid for stagger effect
2. AboutUsHero component: Add sequential text reveals (heading → description → button)
3. Footer component: Subtle fade-in when scrolled into view

Requirements:

- Don't break existing functionality or styling
- Use consistent timing (0.6s duration, 0.1s stagger)
- Animations trigger once when elements enter viewport
- Maintain responsive behavior across breakpoints
