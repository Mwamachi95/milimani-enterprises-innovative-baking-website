## Navigation Transparent Background Enhancement

**Update the existing Navigation component to have a completely transparent background at page top that transitions to translucent as the user scrolls down.**

### **Current Navigation State**:

The Navigation component currently has `backdrop-blur-sm` always applied and uses `bg-transparent` when closed. The mobile menu functionality and scroll-based logo animations are working correctly.

### **Background Transition Requirements**:

1. **Initial state (page top)**:

   - **Completely transparent background**: Remove all background and backdrop blur
   - **No visual interference**: Navigation should be invisible, allowing hero sections to have full visual impact
   - **Logo and text visibility**: Maintain proper contrast for navigation elements

2. **Scroll state (after 20px scroll)**:

   - **Translucent background**: `bg-dark-hunter-green bg-opacity-90`
   - **Enhanced backdrop blur**: `backdrop-blur-md` for better readability
   - **Subtle shadow**: `shadow-lg` for depth and separation
   - **Smooth transition**: Use existing `duration-1000` timing

3. **Mobile menu state**:
   - **Solid background**: Keep existing `bg-dark-hunter-green backdrop-blur-sm`
   - **Full opacity**: Maintain readability for menu items

### **Implementation Strategy**:

4. **Enhanced background function**:

   ```jsx
   const getNavBackground = () => {
     if (isMobileMenuOpen) {
       return "bg-dark-hunter-green backdrop-blur-sm";
     }
     if (isScrolled) {
       return "bg-dark-hunter-green bg-opacity-90 backdrop-blur-md shadow-lg";
     }
     return "bg-transparent"; // Completely transparent at top
   };
   ```

5. **Navigation container update**:

   ```jsx
   <nav className={`sticky top-0 z-50 transition-all duration-1000 ${getNavBackground()}`}>
   ```

6. **Text contrast adjustments**:
   - **Logo text color logic**:
     ```jsx
     className={`font-bold leading-none ${
       isMobileMenuOpen
         ? 'text-white'
         : isScrolled
           ? 'text-wet-sand'    // Better contrast on dark translucent background
           : 'text-bokara-grey' // Original color for transparent state
     }`}
     ```

### **Specific Code Changes**:

7. **Replace current nav styling**:

   ```jsx
   // Current:
   className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-1000 ${
     isMobileMenuOpen ? 'bg-dark-hunter-green' : 'bg-transparent'
   }`}

   // New:
   className={`sticky top-0 z-50 transition-all duration-1000 ${getNavBackground()}`}
   ```

8. **Logo text color updates**:

   ```jsx
   // Company name text:
   className={`text-lg md:text-[1.5rem] lg:text-[2rem] font-bold leading-none ${
     isMobileMenuOpen
       ? 'text-white'
       : isScrolled
         ? 'text-wet-sand'
         : 'text-bokara-grey'
   }`}
   ```

9. **Logo background adjustments**:
   ```jsx
   // Logo icon container - consider removing background when transparent:
   className={`w-11 h-11 md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] transition-all duration-300 relative z-50 ${
     isScrolled
       ? 'bg-bokara-grey rounded-xl p-[7px] md:p-[7px] lg:p-[10px]'
       : 'md:bg-transparent' // Maintain transparency when nav is transparent
   }`}
   ```

### **Visual States Summary**:

10. **Page landing experience**:

    - **Navigation**: Completely invisible background
    - **Hero content**: Gets full visual attention and impact
    - **User focus**: Drawn to main content, not navigation

11. **Scrolling experience**:

    - **Smooth transition**: From transparent to translucent (1 second duration)
    - **Usable navigation**: Clear background for link readability
    - **Professional feel**: Subtle shadow and blur effects

12. **Mobile menu experience**:
    - **Solid background**: Maintains existing mobile menu functionality
    - **Full readability**: Dark background ensures menu visibility
    - **Consistent behavior**: No changes to mobile menu interactions

### **Benefits of This Enhancement**:

13. **Improved user experience**:

    - **Hero sections shine**: No navigation interference with landing content
    - **Progressive disclosure**: Navigation becomes prominent when needed
    - **Professional polish**: Smooth, modern transition effects

14. **Design consistency**:
    - **Maintains all existing functionality**: Logo animations, mobile menu, hover effects
    - **Preserves responsive behavior**: All breakpoints work correctly
    - **Keeps brand colors**: Uses existing color system (dark-hunter-green, wet-sand, etc.)

### **Testing Requirements**:

15. **Validation checklist**:
    - **Transparency at page top**: Verify complete background transparency
    - **Smooth scroll transition**: Test transition timing and smoothness
    - **Text readability**: Ensure proper contrast in all states
    - **Mobile menu preservation**: Confirm mobile functionality unchanged
    - **Logo animations**: Verify existing scroll-based logo animations work
    - **Responsive behavior**: Test across all breakpoints (mobile, tablet, desktop)

The result should be a sophisticated navigation that enhances rather than competes with hero sections, providing an elevated user experience while maintaining all existing functionality and responsive design.

---

_Last updated: [Current Date]_
_Components documented: 3_
