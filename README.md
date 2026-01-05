# Milimani Enterprises - Innovative Baking Website

A modern, responsive website for **Milimani Enterprises**, a premium baking ingredients supplier based in Rwanda, East Africa. Built with React 19 and featuring sophisticated animations, PWA capabilities, and comprehensive SEO optimization.

---

## About Milimani Enterprises

Milimani Enterprises is a leading supplier of high-quality baking ingredients in Rwanda and the East African region. The company provides professional bakers, pastry chefs, and home baking enthusiasts with premium products including:

- Flour varieties and baking mixes
- Chocolate and cocoa products
- Flavorings and essences
- Decorating supplies
- Baking equipment and tools

This website serves as the digital storefront and information hub for Milimani Enterprises, showcasing their products, services, and company values.

---

## Features

### Core Features

- **Responsive Design**: Mobile-first approach with fluid layouts across all devices
- **Progressive Web App**: Installable, works offline, fast loading
- **Advanced Animations**: Smooth scroll-triggered animations with Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, structured data, sitemap
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation and ARIA support

### Website Sections

| Page | Description |
|------|-------------|
| **Home** | Hero section, featured products, services, owner message, CTA |
| **About** | Company story, core values, team members |
| **Contact** | Contact form, location information, business hours |

### Technical Highlights

- React 19 with functional components and hooks
- Vite 7 for lightning-fast development and builds
- Tailwind CSS 4 with custom design tokens
- Framer Motion for declarative animations
- Service Worker for offline functionality
- Comprehensive test suite with Vitest

---

## Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/milimani-enterprises-innovative-baking-website.git

# Navigate to project directory
cd milimani-enterprises-innovative-baking-website/milimani_enterprises

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run unit tests with Vitest |
| `npm run lint` | Run ESLint for code quality |

---

## Technology Stack

### Core

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.0 | UI component library |
| Vite | 7.0.4 | Build tool and dev server |
| Tailwind CSS | 4.1.11 | Utility-first CSS framework |
| Framer Motion | 12.23.12 | Animation library |
| React Router | 7.7.1 | Client-side routing |

### Development

| Tool | Purpose |
|------|---------|
| Vitest | Unit testing |
| Testing Library | Component testing |
| ESLint | Code linting |
| PostCSS | CSS processing |
| Autoprefixer | Vendor prefixes |

---

## Project Structure

```
milimani_enterprises/
├── public/                 # Static assets, PWA files
│   ├── icons/              # App icons
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO
│   ├── sitemap.xml         # Site structure
│   └── sw.js               # Service worker
│
├── src/
│   ├── assets/images/      # Image assets
│   ├── components/         # React components
│   │   ├── animations/     # Animation wrappers
│   │   ├── Navigation/     # Site navigation
│   │   ├── Footer/         # Site footer
│   │   ├── LandingHome/    # Hero section
│   │   ├── SelectedProducts/
│   │   ├── ServicesSection/
│   │   ├── MessageFromOwner/
│   │   ├── CallToAction/
│   │   ├── AboutUsHero/
│   │   ├── OurValues/
│   │   ├── OurTeam/
│   │   ├── Contact/
│   │   ├── ContactLocation/
│   │   ├── SEO/
│   │   └── PWAStatus/
│   │
│   ├── pages/              # Route pages
│   │   ├── home.jsx
│   │   ├── AboutUs.jsx
│   │   └── contactUs.jsx
│   │
│   ├── App.jsx             # Root component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── eslint.config.js
```

---

## Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Luscious Lime | `#7CBF00` | Primary accent, CTAs |
| Bright White | `#F6F2F1` | Backgrounds |
| Whisper White | `#EAE2D3` | Secondary backgrounds |
| Wet Sand | `#AE8F60` | Warm accents |
| Bokara Grey | `#2A2725` | Primary text |
| Dark Hunter Green | `#153033` | Dark sections |

### Typography

**Font Family**: Sora (Google Fonts)

- Headings: Bold/Semibold weights
- Body: Regular weight
- Responsive scaling across breakpoints

### Animation System

The project uses a reusable animation system with Framer Motion:

```javascript
// Available variants
fadeInUp, fadeInDown, fadeInLeft, fadeInRight
scaleIn, staggerContainer, staggerItem
accordionContainer, rotateArrow
```

See `src/components/animations/variants.js` for full configuration.

---

## Component Architecture

### Reusable Animation Components

```jsx
// Wrap any section for scroll-triggered animation
<AnimatedSection variants={fadeInUp}>
  <YourContent />
</AnimatedSection>

// Staggered grid animations
<AnimatedGrid>
  {items.map(item => <Card key={item.id} />)}
</AnimatedGrid>

// Expandable accordion
<AnimatedAccordion title="Section">
  <Content />
</AnimatedAccordion>
```

### Page Composition

```jsx
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

---

## PWA Features

This website is a fully functional Progressive Web App:

- **Installable**: Add to home screen on mobile/desktop
- **Offline Support**: Core pages cached for offline access
- **Fast Loading**: Service worker caching strategy
- **App-like**: Standalone display mode

### Installation

On supported browsers, users will see an "Install" prompt or can manually install via browser menu.

---

## SEO Configuration

### Implemented Features

- Dynamic meta tags per page
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data
- XML sitemap
- robots.txt

### Page-Specific SEO

Each page has optimized metadata for:
- Title and description
- Keywords relevant to baking industry in East Africa
- Canonical URLs
- Social media preview images

---

## Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run with coverage
npm run test -- --coverage

# Watch mode
npm run test -- --watch
```

### Test Structure

Tests are co-located with components:

```
Component/
├── Component.jsx
└── Component.test.jsx
```

---

## Performance

### Optimizations

- **Code Splitting**: Automatic route-based chunking
- **Tree Shaking**: Unused code elimination
- **Image Lazy Loading**: Deferred image loading
- **GPU Animations**: Transform-based animations
- **Reduced Motion**: Respects user preferences

### Lighthouse Scores

Target scores:
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome for Android)

---

## Deployment

### Build for Production

```bash
npm run build
```

Output is generated in `/dist` directory.

### Hosting

The site can be deployed to any static hosting provider:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect to Git repository
- **Cloudflare Pages**: Connect to Git repository
- **AWS S3 + CloudFront**: Upload dist folder

### Environment Variables

Currently no environment variables required. For production, consider adding:
- `VITE_API_URL` - Backend API endpoint
- `VITE_GA_ID` - Google Analytics tracking ID

---

## Documentation

Detailed documentation is available:

- **[DESIGN.md](./DESIGN.md)** - UI/UX design system, color palette, typography, component patterns
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical architecture, project structure, patterns

---

## Contributing

### Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests: `npm run test`
4. Run linter: `npm run lint`
5. Commit with descriptive message
6. Push and create Pull Request

### Code Style

- Functional components with hooks
- Tailwind CSS for styling
- Framer Motion for animations
- Component files use PascalCase

---

## License

This project is proprietary software owned by Milimani Enterprises. All rights reserved.

---

## Contact

**Milimani Enterprises**
Kigali, Rwanda

- Website: [milimanienterprises.rw](https://milimanienterprises.rw)
- Email: info@milimanienterprises.rw

---

## Acknowledgments

Built with modern web technologies:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

*Last updated: January 2026*
