# Claude Code Component Prompts

This file contains all the Claude Code prompts for creating the Contact section components in the Milimani Enterprises website.

## Table of Contents

- [Contact Page Component](#contact-page-component)

---

## Contact Page Component

**Create a responsive Contact page component with proper vertical alignment where the contact form starts at the same level as the company description text.**

### **File Structure Setup**:

1. **Create new component**:
   - Create `Contact.jsx` file in the `Contact` subfolder of the components folder
   - This will be the main content component for the contactUs page
   - Export as default component
   - Navigation and footer will be handled separately

### **Page Layout & Styling**:

2. **Container setup**:
   - **Background color**: `bg-dark-hunter-green`
   - **Full viewport height**: `min-h-screen`
   - **Responsive padding**: `px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24`
   - **Two-column grid**: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20`
   - **Items alignment**: `items-start` (not center, for proper vertical alignment)

### **Left Column - Content Structure**:

3. **"LET'S TALK" standalone block**:

   - **Separate, prominent section** (not a heading for the text below)
   - **Large, bold styling**: `text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sora`
   - **Color**: `text-white`
   - **Line height**: `leading-tight`
   - **Letter spacing**: `tracking-tight`
   - **Standalone margin**: `mb-8 md:mb-12 lg:mb-16` (generous space to next block)

4. **Company description block** (separate from LET'S TALK):
   - **Independent content block** positioned below LET'S TALK
   - **Professional messaging**:
   ```
   "We're Rwanda's trusted partner in baking—supplying bold bakers and food businesses with quality ingredients and tools that deliver results. From product to plate, we help you mix it, perfect it, and scale it—again and again."
   ```
   - **Text styling**: `text-base md:text-lg lg:text-xl leading-relaxed`
   - **Color**: `text-white text-opacity-90`
   - **Font**: Regular weight (not font-sora)
   - **Max width**: `max-w-lg` to control line length
   - **Line height**: `leading-relaxed`

### **Right Column - Contact Form Alignment**:

5. **Form vertical positioning**:

   - **Critical alignment**: Form must start at the same vertical level as the company description text
   - **Top margin calculation**: Add top margin to push form down to align with description
   - **Desktop alignment**: `lg:mt-[200px]` or similar (adjust based on LET'S TALK block height)
   - **Mobile behavior**: No top margin on mobile (stacked layout)

6. **Form container**:

   - **Background**: Transparent (no background color)
   - **Spacing**: Proper form field spacing
   - **Full width**: `w-full`
   - **Max width**: `max-w-md lg:max-w-lg` for optimal form width

7. **Form fields styling**:
   - **Input background**: `bg-wet-sand` (tan/beige color from reference)
   - **Text color**: `text-dark-hunter-green` or `text-gray-800`
   - **Placeholder color**: `placeholder-gray-600` or similar
   - **Border**: `border-none` (clean, borderless design)
   - **Rounded corners**: `rounded-lg`
   - **Padding**: `px-4 py-3 md:px-5 md:py-4`
   - **Font size**: `text-base md:text-lg`
   - **Focus state**: `focus:outline-none focus:ring-2 focus:ring-luscious-lime`

### **Form Field Specifications**:

8. **Form layout and fields**:

   - **First row (two columns)**:

     - First Name field: Placeholder "First Name\*", required
     - Last Name field: Placeholder "Last Name\*", required
     - Grid: `grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6`

   - **Email field**:

     - Placeholder: "Email\*"
     - Required field, type: email
     - Full width span, `mb-4 md:mb-6`

   - **Company field**:

     - Placeholder: "Company\*"
     - Required field
     - Full width span, `mb-4 md:mb-6`

   - **Message field**:
     - Placeholder: "Message\*"
     - Required textarea element
     - Large height: `h-32 md:h-40 lg:h-48`
     - Resize: `resize-none`
     - Margin bottom: `mb-6 md:mb-8`

### **Submit Button**:

9. **Button styling and behavior**:

   - **Base styling**: `relative group bg-wet-sand text-dark-hunter-green font-sora font-bold rounded-xl overflow-hidden`
   - **Responsive sizing**: `text-base md:text-lg px-6 py-3 md:px-8 md:py-4`
   - **Flex layout**: `flex items-center justify-center gap-4`
   - **Width**: `w-full md:w-auto` (full width on mobile, auto on desktop)
   - **Transition**: `transition-all duration-300`

10. **Button hover effects (matching navigation)**:

    - **Background slide animation**:

      ```jsx
      {
        /* Sliding background */
      }
      <div className="absolute bottom-0 left-0 w-full h-0 bg-luscious-lime group-hover:h-full transition-all duration-400 ease-out" />;
      ```

    - **Text stack animation**:

      ```jsx
      {
        /* Text Stack Animation */
      }
      <div className="relative z-10 overflow-hidden">
        <div className="transform group-hover:-translate-y-full transition-transform duration-300">
          Send Message
        </div>
        <div className="absolute top-full transform group-hover:-translate-y-full transition-transform duration-300">
          Send Message
        </div>
      </div>;
      ```

    - **Arrow icon animation**:
      ```jsx
      {
        /* Arrow Icon */
      }
      <div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 12H21M21 12L14 5M21 12L14 19"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>;
      ```

### **Layout Structure Implementation**:

11. **Component structure**:

    ```jsx
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-start">
      {/* Left Column */}
      <div>
        {/* LET'S TALK - Standalone block */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sora text-white leading-tight tracking-tight">
            LET'S TALK
          </h1>
        </div>

        {/* Company description block */}
        <div className="max-w-lg">
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white text-opacity-90">
            We're Rwanda's trusted partner in baking...
          </p>
        </div>
      </div>

      {/* Right Column - Form aligned with description */}
      <div className="lg:mt-[200px]">
        {" "}
        {/* Adjust this value to align with description */}
        {/* Contact Form */}
      </div>
    </div>
    ```

### **Responsive Behavior**:

12. **Mobile (default/sm:)**:

    - **Single column layout**: Content stacked vertically
    - **No form offset**: Remove top margin, natural stacking order
    - **Full-width form fields**: All inputs span full width
    - **Touch-friendly**: Adequate spacing and sizing for mobile

13. **Tablet (md:)**:

    - **Maintain single column** layout
    - **Two-column name fields**: First/Last name side by side
    - **Enhanced typography**: Larger, more readable text
    - **Better form spacing**: Optimize field spacing

14. **Desktop (lg:+)**:
    - **Two-column layout**: Text left, form right with proper alignment
    - **Form starts**: At same level as company description
    - **Full form functionality**: All hover effects and animations
    - **Optimal proportions**: Balanced content distribution

### **Form Functionality**:

15. **State management**:

    - **Form state**: useState for all form fields (firstName, lastName, email, company, message)
    - **Validation**: Basic required field validation
    - **Submit handling**: Form submission logic with proper error handling
    - **Loading states**: Button loading state during submission

16. **Form validation**:
    - **Required field indicators**: Visual indicators for required fields
    - **Email validation**: Proper email format validation
    - **Error messaging**: User-friendly error messages
    - **Success feedback**: Confirmation after successful submission

### **Integration Requirements**:

17. **Design consistency**:

    - Use existing color variables (dark-hunter-green, wet-sand, luscious-lime, white)
    - **Font-sora** for headings and buttons
    - **Button consistency**: Same hover mechanics as navigation
    - **Professional appearance**: Clean, trustworthy design

18. **Accessibility & Performance**:
    - **Form accessibility**: Proper labels, ARIA attributes
    - **Keyboard navigation**: Full keyboard support
    - **Screen reader support**: Semantic form structure
    - **Loading performance**: Optimize animations and transitions

The result should be a professional contact page where the form perfectly aligns with the company description text, creating a balanced and visually appealing layout that maintains brand consistency and provides excellent user experience.

---

_Last updated: [Current Date]_
_Components documented: 1_
