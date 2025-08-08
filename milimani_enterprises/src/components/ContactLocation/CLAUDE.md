# Claude Code Component Prompts

This file contains all the Claude Code prompts for creating components in the Milimani Enterprises website.

## Table of Contents

## Contact Location Page Component

**Create a responsive Contact Location section component featuring a modern architectural building image with location details and elegant typography.**

### **File Structure Setup**:

1. **Create new component**:
   - Create `ContactLocation` folder inside `components` folder
   - Create `ContactLocation.jsx` file inside the `ContactLocation` folder
   - Import location image from `assets/images/location/` folder (or appropriate folder)
   - Export as default component
   - This component will be added to the contactUs page alongside the Contact component

### **Section Layout & Styling**:

2. **Container setup**:

   - **Background color**: `bg-dark-hunter-green`
   - **Full width section**: Proper responsive padding
   - **Responsive padding**: `px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24`
   - **Max width container**: `max-w-7xl mx-auto` for content constraint

3. **Main heading styling**:
   - **"LOCATION" title**:
   - **Large, bold styling**: `text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sora`
   - **Color**: `text-white`
   - **Line height**: `leading-tight`
   - **Letter spacing**: `tracking-tight`
   - **Margin bottom**: `mb-8 md:mb-12 lg:mb-16`
   - **Position**: Left-aligned, above the image card

### **Image Card Section**:

4. **Card container**:

   - **Background**: Clean white or subtle background
   - **Rounded corners**: `rounded-2xl lg:rounded-3xl` for modern feel
   - **Shadow**: `shadow-xl lg:shadow-2xl` for depth and elevation
   - **Overflow**: `overflow-hidden` for clean rounded corners
   - **Aspect ratio**: Maintain natural proportions of the architectural image
   - **Position**: Centered within the container

5. **Image specifications**:

   - **Source**: Modern architectural building (Kigali Convention Centre style)
   - **Image styling**: `w-full h-full object-cover`
   - **Alt text**: "Kigali Convention Centre - Location landmark"
   - **Loading**: `loading="lazy"` for performance
   - **Object position**: `object-center` for proper focal point

6. **Image overlay content**:
   - **Convention Centre label**:
     - **Text**: "CONVENTION CENTRE"
     - **Position**: Center of image with overlay
     - **Styling**: `text-white font-sora font-bold text-xl md:text-2xl lg:text-3xl`
     - **Background**: Semi-transparent dark overlay for readability
     - **Positioning**: Absolute centered overlay

### **Location Details Section**:

7. **Location info container**:

   - **Position**: Bottom section of the card or below the image
   - **Background**: Dark section at bottom of card
   - **Padding**: `p-6 md:p-8`
   - **Layout**: Flex layout for location details

8. **Location details styling**:

   - **"KIGALI, RWANDA" main location**:

     - **Font**: `font-sora font-bold`
     - **Size**: `text-lg md:text-xl lg:text-2xl`
     - **Color**: `text-white`
     - **Margin bottom**: `mb-2`

   - **Address details**:
     - **"KN7 Road" and "Industrial Area"** (or actual address)
     - **Font**: Regular weight
     - **Size**: `text-sm md:text-base`
     - **Color**: `text-white text-opacity-80`
     - **Line spacing**: Proper vertical rhythm

### **Card Layout Structure**:

9. **Complete card structure**:
   ```jsx
   <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl overflow-hidden">
     {/* Image section with overlay */}
     <div className="relative h-64 md:h-80 lg:h-96">
       <img
         src={locationImage}
         alt="Kigali Convention Centre"
         className="w-full h-full object-cover"
       />

       {/* Center overlay text */}
       <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
         <h3 className="text-white font-sora font-bold text-xl md:text-2xl lg:text-3xl text-center">
           CONVENTION CENTRE
         </h3>
       </div>
     </div>

     {/* Location details section */}
     <div className="bg-dark-hunter-green p-6 md:p-8">
       <h4 className="font-sora font-bold text-lg md:text-xl lg:text-2xl text-white mb-2">
         KIGALI, RWANDA
       </h4>
       <p className="text-sm md:text-base text-white text-opacity-80">
         KN7 Road
         <br />
         Industrial Area
       </p>
     </div>
   </div>
   ```

### **Responsive Behavior**:

10. **Mobile (default/sm:)**:

    - **Single column layout**: Full width card
    - **Readable typography**: Appropriate text sizes for mobile
    - **Touch-friendly**: Adequate spacing and sizing
    - **Image aspect**: Maintain good proportions on small screens

11. **Tablet (md:)**:

    - **Enhanced card size**: Larger, more prominent display
    - **Better typography**: Increased text sizes
    - **Improved spacing**: More generous padding and margins

12. **Desktop (lg:+)**:
    - **Maximum impact**: Large, impressive card display
    - **Full typography**: Largest text sizes
    - **Premium spacing**: Generous whitespace and padding
    - **Optimal proportions**: Perfect image and content balance

### **Visual Polish**:

13. **Card interactions** (optional):

    - **Subtle hover effect**: Slight scale or shadow enhancement
    - **Smooth transitions**: For any interactive elements
    - **Image quality**: Ensure high-resolution architectural image

14. **Typography hierarchy**:
    - **LOCATION heading**: Largest, white, font-sora bold
    - **CONVENTION CENTRE**: Medium, white, font-sora bold, overlay
    - **KIGALI, RWANDA**: Smaller, white, font-sora bold
    - **Address details**: Smallest, white with opacity, regular weight

### **Integration Requirements**:

15. **Design consistency**:

    - Use existing color variables (dark-hunter-green, white)
    - **Font-sora** for all headings and important text
    - **Maintain design system** throughout
    - **Seamless integration** with Contact component on contactUs page

16. **Performance & Accessibility**:
    - **Optimized image loading**: Proper sizing and lazy loading
    - **Alt text**: Descriptive alt text for the architectural image
    - **Semantic HTML**: Proper heading hierarchy and structure
    - **Loading performance**: Optimize image and animations

### **Content Specifications**:

17. **Location information**:
    - **Main location**: "KIGALI, RWANDA"
    - **Address details**: Use actual business address or representative location
    - **Landmark reference**: "CONVENTION CENTRE" as recognizable landmark
    - **Professional presentation**: Clean, trustworthy location display

The result should be a sophisticated location showcase that builds trust and provides clear geographic context for potential clients, featuring modern architectural imagery representative of Kigali's business district.

---

_Last updated: [Current Date]_
_Components documented: 2_
