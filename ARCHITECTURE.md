# Milimani Enterprises - Technical Architecture

This document provides a comprehensive overview of the technical architecture, patterns, and specifications of the Milimani Enterprises website.

---

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Project Structure](#project-structure)
3. [Build System](#build-system)
4. [Component Architecture](#component-architecture)
5. [Routing](#routing)
6. [State Management](#state-management)
7. [Styling Architecture](#styling-architecture)
8. [Animation Architecture](#animation-architecture)
9. [PWA Implementation](#pwa-implementation)
10. [SEO Strategy](#seo-strategy)
11. [Testing Framework](#testing-framework)
12. [Performance Optimization](#performance-optimization)
13. [Development Workflow](#development-workflow)

---

## Technology Stack

### Core Technologies

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | React | 19.1.0 | UI component library |
| **Build Tool** | Vite | 7.0.4 | Development server & bundler |
| **Styling** | Tailwind CSS | 4.1.11 | Utility-first CSS framework |
| **Animation** | Framer Motion | 12.23.12 | Declarative animations |
| **Routing** | React Router DOM | 7.7.1 | Client-side routing |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@vitejs/plugin-react` | 4.6.0 | React support for Vite |
| `@tailwindcss/vite` | 4.1.11 | Tailwind Vite integration |
| `@tailwindcss/postcss` | 4.1.11 | PostCSS processing |
| `vitest` | 3.2.4 | Unit testing framework |
| `@testing-library/react` | 16.3.0 | React component testing |
| `@testing-library/jest-dom` | 6.6.4 | Custom DOM matchers |
| `eslint` | 9.30.1 | Code linting |
| `postcss` | 8.5.6 | CSS post-processing |
| `autoprefixer` | 10.4.21 | Vendor prefix automation |

---

## Project Structure

```
milimani_enterprises/
├── public/                    # Static assets
│   ├── icons/                 # PWA icons (192x192, 512x512)
│   ├── images/                # Public images
│   ├── favicon.svg            # Site favicon
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt             # Search engine directives
│   ├── sitemap.xml            # Site structure for SEO
│   └── sw.js                  # Service worker
│
├── src/
│   ├── assets/
│   │   └── images/            # Component-specific images
│   │
│   ├── components/
│   │   ├── animations/        # Reusable animation components
│   │   │   ├── AnimatedSection.jsx
│   │   │   ├── AnimatedGrid.jsx
│   │   │   ├── AnimatedAccordion.jsx
│   │   │   └── variants.js    # Shared animation configs
│   │   │
│   │   ├── Navigation/        # Site navigation
│   │   ├── Footer/            # Site footer
│   │   ├── LandingHome/       # Hero section
│   │   ├── SelectedProducts/  # Product showcase
│   │   ├── ServicesSection/   # Services accordion
│   │   ├── MessageFromOwner/  # CEO message
│   │   ├── CallToAction/      # CTA section
│   │   ├── AboutUsHero/       # About page hero
│   │   ├── OurValues/         # Company values
│   │   ├── OurTeam/           # Team members
│   │   ├── Contact/           # Contact form
│   │   ├── ContactLocation/   # Location info
│   │   ├── BackToTop/         # Scroll-to-top button
│   │   ├── ScrollToTop/       # Auto-scroll on route change
│   │   ├── PageTransition/    # Page transition wrapper
│   │   ├── PWAStatus/         # Offline indicator
│   │   ├── SEO/               # Meta tag management
│   │   └── Logo/              # Logo component
│   │
│   ├── pages/
│   │   ├── home.jsx           # Home page
│   │   ├── AboutUs.jsx        # About page
│   │   └── contactUs.jsx      # Contact page
│   │
│   ├── App.jsx                # Root component with routing
│   ├── App.css                # Global styles (minimal)
│   ├── index.css              # Tailwind imports & theme
│   └── main.jsx               # Application entry point
│
├── dist/                      # Production build output
├── docs/                      # Additional documentation
├── node_modules/              # Dependencies
│
├── .gitignore
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Project manifest
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── vitest.config.js           # Test configuration
```

---

## Build System

### Vite Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{js,jsx,ts,tsx}']
  }
})
```

### Build Commands

```bash
# Development server with HMR
npm run dev         # http://localhost:5173

# Production build
npm run build       # Output to /dist

# Preview production build
npm run preview     # http://localhost:4173

# Run tests
npm run test        # Vitest with jsdom

# Lint code
npm run lint        # ESLint check
```

### PostCSS Pipeline

```javascript
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
}
```

---

## Component Architecture

### Design Patterns

#### Functional Components with Hooks

All components are functional, using React hooks for state and effects:

```jsx
function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = useMediaQuery('(pointer: fine)');

  return (
    <motion.div
      onHoverStart={() => isDesktop && setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Component content */}
    </motion.div>
  );
}
```

#### Component Composition

Components are built using composition patterns:

```jsx
// Page composition
function HomePage() {
  return (
    <PageTransition>
      <Navigation />
      <LandingHome />
      <SelectedProducts />
      <ServicesSection />
      <MessageFromOwner />
      <CallToAction />
      <Footer />
    </PageTransition>
  );
}
```

#### Animation Wrapper Pattern

Reusable animation components wrap content:

```jsx
// Animation wrapper
function AnimatedSection({ children, variants = fadeInUp }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
```

### Component Categories

| Category | Components | Purpose |
|----------|------------|---------|
| **Layout** | Navigation, Footer, PageTransition | Page structure |
| **Sections** | LandingHome, SelectedProducts, ServicesSection | Page content blocks |
| **Interactive** | BackToTop, Contact, AnimatedAccordion | User interactions |
| **Utility** | ScrollToTop, PWAStatus, SEOHelmet | Functional helpers |
| **Animation** | AnimatedSection, AnimatedGrid | Animation wrappers |

---

## Routing

### React Router Configuration

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <BackToTop />
    </BrowserRouter>
  );
}
```

### Route Structure

| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Landing page with products, services, CTA |
| `/about` | AboutPage | Company story, values, team |
| `/contact` | ContactPage | Contact form, location |

### Page Transitions

```jsx
// PageTransition.jsx
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
```

---

## State Management

### Local State Strategy

The application uses React's built-in state management:

```jsx
// Component-level state
const [isOpen, setIsOpen] = useState(false);
const [formData, setFormData] = useState({ name: '', email: '' });
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
```

### State Categories

| State Type | Usage | Example |
|------------|-------|---------|
| **UI State** | Toggles, modals, menus | `isMenuOpen`, `activeTab` |
| **Form State** | Input values, validation | `formData`, `errors` |
| **Scroll State** | Scroll position tracking | `scrollY`, `showBackToTop` |
| **Device State** | Responsive detection | `isMobile`, `isDesktop` |

### Device Detection Pattern

```jsx
function Navigation() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isDesktop ? <DesktopNav /> : <MobileNav />;
}
```

---

## Styling Architecture

### Tailwind CSS Configuration

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-luscious-lime: #7CBF00;
  --color-bright-white: #F6F2F1;
  --color-whisper-white: #EAE2D3;
  --color-wet-sand: #AE8F60;
  --color-bokara-grey: #2A2725;
  --color-dark-hunter-green: #153033;

  --font-family-sora: Sora, sans-serif;
}
```

### Utility Class Patterns

```jsx
// Responsive layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

// Transitions
<button className="transition-all duration-300 hover:bg-luscious-lime">

// Responsive text
<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
```

### Typography Utilities

```css
/* Custom typography classes */
.heading1 { @apply text-6xl font-bold; }
.heading2 { @apply text-4xl font-bold; }
.heading3 { @apply text-2xl font-semibold; }
.heading4 { @apply text-xl font-semibold; }
.heading5 { @apply text-lg font-semibold; }
.text1 { @apply text-base font-normal; }
.text2 { @apply text-sm font-normal; }
```

### CSS-in-JS for Dynamic Styles

```jsx
// Dynamic inline styles for computed values
<div
  style={{
    backgroundImage: `url(${imageUrl})`,
    transform: `translateY(${offset}px)`
  }}
/>
```

---

## Animation Architecture

### Framer Motion Integration

#### Variant System

```javascript
// src/components/animations/variants.js

// Standard animations
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Container for staggered children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Accordion animations
export const accordionContainer = {
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1 }
};
```

#### Animation Components

| Component | Purpose | Trigger |
|-----------|---------|---------|
| `AnimatedSection` | Fade-in sections | Scroll into view |
| `AnimatedGrid` | Staggered grid items | Scroll into view |
| `AnimatedAccordion` | Expand/collapse | User click |
| `PageTransition` | Page enter/exit | Route change |

### Performance Considerations

```javascript
// Reduced motion support
export const getReducedMotionVariants = (variants) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.1 } }
    };
  }
  return variants;
};

// Mobile optimization (30% faster)
export const getMobileOptimizedVariants = (variants, isMobile) => {
  if (isMobile && variants.visible?.transition) {
    variants.visible.transition.duration *= 0.7;
  }
  return variants;
};
```

---

## PWA Implementation

### Service Worker

```javascript
// public/sw.js
const CACHE_NAME = 'milimani-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

### Web App Manifest

```json
// public/manifest.json
{
  "name": "Milimani Enterprises",
  "short_name": "Milimani",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F6F2F1",
  "theme_color": "#7CBF00",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### PWA Status Component

```jsx
// src/components/PWAStatus/PWAStatus.jsx
function PWAStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return <div className="offline-indicator">You're offline</div>;
}
```

---

## SEO Strategy

### SEOHelmet Component

```jsx
// src/components/SEO/SEOHelmet.jsx
function SEOHelmet({
  title,
  description,
  keywords,
  image,
  url
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
}
```

### SEO Files

| File | Purpose |
|------|---------|
| `robots.txt` | Search engine crawl directives |
| `sitemap.xml` | Site structure for indexing |
| Meta tags | Page-specific SEO data |
| Structured data | JSON-LD schema markup |

---

## Testing Framework

### Vitest Configuration

```javascript
// vite.config.js
export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    setupFiles: ['./src/setupTests.js']
  }
});
```

### Test Structure

```
src/components/
├── Navigation/
│   ├── Navigation.jsx
│   └── Navigation.test.jsx
├── Footer/
│   ├── Footer.jsx
│   └── Footer.test.jsx
└── Logo/
    ├── Logo.jsx
    └── Logo.test.jsx
```

### Testing Patterns

```jsx
// Component test example
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
```

---

## Performance Optimization

### Image Optimization

- **Lazy Loading**: Images load on scroll
- **Skeleton Screens**: Placeholder UI during load
- **Optimized Formats**: WebP/AVIF where supported

```jsx
<img
  src={imageUrl}
  loading="lazy"
  alt={description}
  className="w-full h-full object-cover"
/>
```

### Code Splitting

Vite automatically code-splits at route boundaries:

```jsx
// Routes are automatically chunked
<Route path="/about" element={<AboutPage />} />
```

### Bundle Optimization

- **Tree Shaking**: Unused code eliminated
- **Minification**: Production builds minified
- **Compression**: Gzip/Brotli on server

### Animation Performance

- Use `transform` and `opacity` for GPU acceleration
- Avoid animating layout properties (width, height, top, left)
- Implement `will-change` for complex animations

---

## Development Workflow

### Environment Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

### Code Quality

```javascript
// eslint.config.js
export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    }
  }
];
```

### Git Workflow

```bash
# Branch naming
feature/component-name
fix/bug-description
refactor/improvement-area

# Commit format
feat: add new product card component
fix: resolve navigation scroll issue
style: update button hover colors
```

---

## Security Considerations

### Content Security

- No inline scripts in production
- External resources from trusted CDNs
- Form validation on client and server

### Dependencies

- Regular `npm audit` checks
- Lock file for consistent installs
- Minimal dependency footprint

---

## Deployment

### Build Output

```bash
npm run build
# Output: /dist
#   ├── index.html
#   ├── assets/
#   │   ├── index-[hash].js
#   │   └── index-[hash].css
#   ├── manifest.json
#   └── sw.js
```

### Hosting Requirements

- Static file hosting
- HTTPS enabled
- Gzip/Brotli compression
- Proper cache headers

### Recommended Platforms

- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront

---

## Future Considerations

### Potential Enhancements

1. **CMS Integration**: Headless CMS for content management
2. **i18n**: Internationalization for multiple languages
3. **Analytics**: Performance and user behavior tracking
4. **E-commerce**: Product ordering capabilities
5. **Authentication**: User accounts if needed

### Technical Debt

- Consider TypeScript migration for type safety
- Add E2E testing with Playwright
- Implement error boundaries for resilience

---

*Last updated: January 2026*
