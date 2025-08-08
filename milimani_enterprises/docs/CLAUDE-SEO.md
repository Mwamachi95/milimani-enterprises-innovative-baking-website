# Claude SEO Optimization Prompts

This file contains Claude Code prompts for implementing comprehensive SEO optimization and social media sharing features for the Milimani Enterprises website.

## Table of Contents

- [Complete SEO and Social Media Implementation](#complete-seo-and-social-media-implementation)

---

## Complete SEO and Social Media Implementation

**Implement comprehensive SEO optimization and social media sharing features for the Milimani Enterprises website with meta tags, Open Graph, Twitter Cards, and structured data.**

### **Package Installation Requirements:**

1. **Install React Helmet Async**:
   - **Install package**: `npm install react-helmet-async`
   - **Purpose**: Dynamic meta tag management for React
   - **Usage**: Enable page-specific SEO optimization

### **SEO Component Creation:**

2. **Create SEOHelmet Component**:
   - **Create folder**: `components/SEO/`
   - **Create file**: `SEOHelmet.jsx` inside SEO folder
   - **Component purpose**: Reusable meta tag management for all pages
   - **Props accepted**:
     - `title` (string, required)
     - `description` (string, required)
     - `keywords` (string, optional)
     - `ogImage` (string, optional - defaults to main og-image)
     - `url` (string, optional - auto-detects current URL)
     - `type` (string, optional - defaults to "website")

### **Update App.jsx with Helmet Provider:**

3. **Wrap App with HelmetProvider**:
   - **Import**: `import { HelmetProvider } from 'react-helmet-async'`
   - **Wrap**: Entire App component with `<HelmetProvider>`
   - **Structure**:
     ```jsx
     <HelmetProvider>
       <BrowserRouter>{/* existing app content */}</BrowserRouter>
     </HelmetProvider>
     ```

### **Social Media Meta Tags Implementation:**

4. **Add comprehensive social media meta tags to index.html**:

   - **Basic SEO tags**:

     - Meta description for Milimani Enterprises
     - Meta keywords: "baking ingredients, Rwanda, commercial bakery, cake mix, vanilla extract, baking equipment, East Africa"
     - Meta author: "Milimani Enterprises"
     - Meta robots: "index, follow"
     - Canonical URL structure

   - **Open Graph tags** (Facebook, LinkedIn, WhatsApp, Instagram, Discord, Slack):

     - `og:title`: Page-specific titles
     - `og:description`: Compelling descriptions for each page
     - `og:image`: "/og-image.jpg" (1200x630px)
     - `og:url`: Dynamic current page URL
     - `og:type`: "website"
     - `og:site_name`: "Milimani Enterprises"
     - `og:locale`: "en_US"

   - **Twitter Card tags** (Twitter/X only):

     - `twitter:card`: "summary_large_image"
     - `twitter:title`: Same as og:title
     - `twitter:description`: Same as og:description
     - `twitter:image`: "/twitter-image.jpg" (1200x600px)
     - `twitter:site`: "@milimanienterprises" (if Twitter account exists)

   - **Optional Pinterest tags** (if relevant for food/baking content):
     - `pinterest:title`: Same as og:title
     - `pinterest:description`: Same as og:description

### **Structured Data Implementation:**

5. **Add JSON-LD structured data to index.html**:

   - **Organization Schema**:

     - Name: "Milimani Enterprises"
     - Description: "East Africa's trusted manufacturer & supplier of baking ingredients and equipment"
     - URL: Dynamic base URL
     - Logo: "/logo-structured-data.png"

   - **Local Business Schema**:

     - Address: Kigali, Rwanda location
     - Contact: "+250 788 760 923"
     - Email: "info@milimani.rw"
     - Business type: "Manufacturer"

   - **Product/Service Categories**:
     - Baking ingredients manufacturing
     - Baking equipment supply
     - Commercial bakery support

### **Page-Specific SEO Implementation:**

6. **Add SEOHelmet to each page component**:

   **Home Page (pages/home.jsx)**:

   - **Title**: "Milimani Enterprises - East Africa's Trusted Baking Ingredient Supplier"
   - **Description**: "Premium baking ingredients and equipment for commercial bakeries across Rwanda. Quality cake mixes, vanilla extracts, and professional baking tools from East Africa's leading supplier."
   - **Keywords**: "baking ingredients Rwanda, commercial bakery supplies, cake mix supplier East Africa, vanilla extract, baking equipment Kigali"

   **AboutUs Page (pages/aboutUs.jsx)**:

   - **Title**: "About Milimani Enterprises - Professional Baking Team & Company Story"
   - **Description**: "Meet our experienced team and learn about Milimani Enterprises' journey as East Africa's leading baking ingredient manufacturer. Professional expertise driving innovation in Rwanda's baking industry."
   - **Keywords**: "Milimani Enterprises team, baking company Rwanda, Patricia Torotich founder, professional baking expertise"

   **ContactUs Page (pages/contactUs.jsx)**:

   - **Title**: "Contact Milimani Enterprises - Kigali, Rwanda Baking Suppliers"
   - **Description**: "Get in touch with Milimani Enterprises for premium baking ingredients and equipment. Located in Kigali, Rwanda. Contact us for wholesale orders and business partnerships."
   - **Keywords**: "contact Milimani Enterprises, Kigali baking suppliers, Rwanda commercial bakery contact, wholesale baking ingredients"

### **Social Media Image Requirements:**

7. **Social media image specifications**:

   - **Open Graph image** (`/og-image.jpg`):

     - Size: 1200x630 pixels
     - Location: `public/og-image.jpg`
     - Content: Milimani logo + "East Africa's Trusted Baking Partner" tagline + professional background
     - Usage: Facebook, LinkedIn, WhatsApp, Instagram, Discord, Slack, Telegram

   - **Twitter image** (`/twitter-image.jpg`):

     - Size: 1200x600 pixels
     - Location: `public/twitter-image.jpg`
     - Content: Similar to OG image but optimized for Twitter's 2:1 aspect ratio
     - Usage: Twitter/X only

   - **Logo for structured data** (`/logo-structured-data.png`):
     - Size: 512x512 pixels
     - Location: `public/logo-structured-data.png`
     - Content: Clean Milimani logo on transparent/white background

### **Technical SEO Enhancements:**

8. **Improve existing components for SEO**:
   - **Add proper alt text** to all images across components
   - **Implement semantic HTML** structure (proper h1, h2, h3 hierarchy)
   - **Add structured navigation** with breadcrumbs if applicable
   - **Optimize image loading** with proper sizing and lazy loading
   - **Ensure proper heading hierarchy** on all pages

### **Dynamic URL Handling:**

9. **URL and canonical tag management**:
   - **Auto-detect current URL** for Open Graph url property
   - **Generate canonical URLs** for each page
   - **Handle trailing slashes** consistently
   - **Support for future subdomain** or domain changes

### **Platform Coverage:**

10. **Social media platform support**:
    - **Open Graph**: Facebook, LinkedIn, WhatsApp, Instagram, Discord, Slack, Telegram (95% of social sharing)
    - **Twitter Cards**: Twitter/X specifically
    - **Pinterest**: Optional tags for food/baking industry relevance
    - **Total coverage**: 95%+ of all social media link sharing scenarios

### **Testing and Validation:**

11. **SEO testing preparation**:
    - **Structure for easy testing** with Facebook Debugger, Twitter Card Validator
    - **Console logging** for meta tag verification during development
    - **Fallback handling** for missing images or content
    - **Error boundaries** for SEO components

### **Performance Considerations:**

12. **Optimization requirements**:
    - **Minimal impact** on page load speed
    - **Efficient image sizing** for social media images (og-image.jpg under 1MB)
    - **Proper image compression** for all social media images
    - **Lazy loading** for non-critical SEO images

### **Expected Results:**

13. **Professional social media previews**:
    - **WhatsApp**: Rich link preview with branded image and description
    - **Facebook**: Large image card with company branding
    - **LinkedIn**: Professional business link preview
    - **Twitter**: Summary card with large image
    - **Google Search**: Enhanced search results with structured data

The result should be professional search engine results and social media previews that enhance brand credibility, improve search rankings, and increase click-through rates when links are shared across all major social media platforms including Facebook, LinkedIn, WhatsApp, Instagram, Twitter, Discord, Slack, and Telegram.

---

_Last updated: [Current Date]_
_SEO Components documented: 1_
