Create a "Back to Top" button component that matches the existing design system and integrates smoothly with the current navigation behavior.
Component Requirements:

Create new component:

Create BackToTop folder inside components folder
Create BackToTop.jsx file inside the BackToTop folder
Export as default component for easy integration across pages

Design & Styling:

Button appearance:

Background color: Use bg-luscious-lime to match brand colors
Shape: Circular design with rounded corners
Icon: Up arrow (chevron-up style) in white color
Size: Touch-friendly dimensions for mobile and desktop
Shadow: Subtle shadow for depth and floating appearance
Positioning: Fixed position in bottom-right corner with proper spacing from edges

Functionality & Behavior:

Visibility logic:

Hidden by default: Button should not appear when page is at the top
Show trigger: Appear when user scrolls down past 400px (or similar threshold)
Smooth transitions: Fade in/fade out animations when appearing/disappearing
Scroll behavior: Smooth scroll to top when clicked

Responsive design:

Mobile positioning: Appropriate spacing from screen edges on small screens
Desktop positioning: Larger size and spacing for desktop users
Touch targets: Ensure button is easily tappable on mobile devices

Integration & Performance:

Event handling:

Scroll listener: Monitor scroll position to show/hide button
Click handler: Smooth scroll to page top functionality
Performance optimization: Debounced scroll events to prevent excessive re-renders
Cleanup: Proper event listener removal on component unmount

Animation & Polish:

Smooth interactions:

Entrance animation: Subtle fade-in when button appears
Exit animation: Smooth fade-out when button disappears
Hover effects: Slight scale or color change on hover/focus
Click feedback: Brief animation or visual feedback when clicked
Timing consistency: Match existing animation durations used in Navigation

Accessibility & UX:

User experience:

ARIA labels: Proper accessibility attributes for screen readers
Keyboard support: Focus states and keyboard navigation
Visual feedback: Clear indication when button is interactive
Non-intrusive: Button shouldn't interfere with page content or other UI elements

Design System Consistency:

Brand alignment:

Color scheme: Use existing color variables (luscious-lime, white)
Animation timing: Match the duration and easing of existing transitions
Visual hierarchy: Complement rather than compete with Navigation component
Professional appearance: Clean, modern look that enhances overall site quality

The result should be a polished, professional "Back to Top" button that enhances user navigation while maintaining consistency with the existing Milimani Enterprises design system and providing smooth, accessible functionality across all device types.
