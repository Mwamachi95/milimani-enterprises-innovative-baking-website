# Milimani Enterprises Website - Technical Documentation

## Project Overview

Milimani Enterprises is a modern, responsive website built for East Africa's leading baking ingredient supplier. The application is built using React with Vite as the build tool, featuring advanced animations, PWA capabilities, and comprehensive SEO optimization.

## Architecture

### Technology Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Animations**: Framer Motion 12.23.12
- **Routing**: React Router DOM 7.7.1
- **Testing**: Vitest 3.2.4 with React Testing Library
- **Deployment**: Vercel (configured with SPA routing)

### Project Structure

```
milimani_enterprises/
├── public/                     # Static assets and PWA files
│   ├── android-chrome-*.png    # PWA icons
│   ├── apple-touch-icon.png    # iOS icon
│   ├── favicon.ico             # Browser favicon
│   ├── site.webmanifest        # PWA manifest
│   ├── sw.js                   # Service worker
│   ├── register-sw.js          # SW registration
│   └── *.svg                   # Vector icons and assets
├── src/
│   ├── components/             # React components
│   │   ├── Navigation/         # Main navigation with animations
│   │   ├── Footer/             # Footer component
│   │   ├── animations/         # Reusable animation components
│   │   ├── SEO/                # SEO helmet component
│   │   ├── PWAStatus/          # PWA offline indicator
│   │   └── [...]               # Other feature components
│   ├── pages/                  # Route components
│   │   ├── home.jsx            # Landing page
│   │   ├── AboutUs.jsx         # Company information
│   │   └── contactUs.jsx       # Contact form
│   ├── assets/
│   │   └── images/             # Optimized images
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # App entry point
├── docs/                       # Documentation
│   ├── CLAUDE-PWA.md          # PWA implementation notes
│   └── CLAUDE-SEO.md          # SEO optimization guide
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── vercel.json               # Deployment configuration
```

## Key Features

### 1. Progressive Web App (PWA)
- **Service Worker**: Implements caching strategies for offline functionality
- **Web App Manifest**: Enables installation on mobile devices
- **Offline Indicator**: Real-time connection status with user feedback
- **App-like Experience**: Theme colors, splash screens, and mobile optimization

### 2. Advanced Navigation System
- **Scroll-based Animations**: Logo text typewriter effect on scroll
- **Responsive Design**: Adaptive mobile hamburger menu
- **Smooth Transitions**: Framer Motion page transitions
- **Smart Routing**: Same-page navigation handling with scroll to top

**Navigation Key Features**:
- Typewriter animation for logo text that reverses on scroll
- Backdrop blur effects with transparency gradients
- Mobile menu with overlay and accessibility features
- Context-aware styling based on current page

### 3. SEO Optimization
- **Meta Tags**: Comprehensive Open Graph, Twitter Card, Pinterest tags
- **Structured Data**: JSON-LD schema for Organization and LocalBusiness
- **Geographic SEO**: Location-based meta tags for Rwanda/Kigali
- **Dynamic SEO**: Page-specific meta tags via SEOHelmet component
- **Social Media Integration**: Optimized sharing cards for all platforms

### 4. Animation System
Built with Framer Motion for sophisticated user interactions:

- **AnimatedSection**: Fade-in animations on scroll
- **AnimatedGrid**: Staggered grid item animations  
- **AnimatedAccordion**: Smooth expand/collapse effects
- **PageTransition**: Route-based page transitions

### 5. Component Architecture

#### Core Components:
- **Navigation**: Advanced navigation with scroll effects (src/components/Navigation/Navigation.jsx:1)
- **Footer**: Company information and social links (src/components/Footer/Footer.jsx:1)
- **SEOHelmet**: Dynamic meta tag management (src/components/SEO/SEOHelmet.jsx:1)
- **PWAStatus**: Connection status and offline functionality (src/components/PWAStatus/PWAStatus.jsx:1)

#### Page Components:
- **Home**: Landing page with hero section (src/pages/home.jsx:10)
- **AboutUs**: Company story and team information
- **ContactUs**: Contact form and location details

#### Feature Components:
- **LandingHome**: Hero section with call-to-action
- **SelectedProducts**: Product showcase
- **ServicesSection**: Service offerings
- **MessageFromOwner**: Personal company message
- **CallToAction**: Conversion-focused section

## Development Workflow

### Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run test     # Run test suite
npm run lint     # Code linting
```

### Testing Strategy
- **Unit Tests**: Component testing with Vitest and React Testing Library
- **Test Coverage**: Components include corresponding .test.jsx files
- **Accessibility Testing**: Focus management and keyboard navigation
- **Mobile Testing**: Responsive design validation

### Build Optimization
- **Vite**: Lightning-fast HMR and optimized builds
- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Image optimization and compression
- **Bundle Analysis**: Size monitoring and optimization

## Performance Features

### 1. Image Optimization
- **WebP Support**: Modern image formats for better compression
- **Responsive Images**: Multiple sizes for different viewports
- **Lazy Loading**: Images load on demand
- **Asset Preloading**: Critical images preloaded

### 2. Caching Strategy
- **Service Worker**: Caches static assets and pages
- **CDN Integration**: Vercel Edge Network
- **Browser Caching**: Optimized cache headers
- **API Caching**: Strategic data caching

### 3. Loading Performance
- **Font Optimization**: Google Fonts with preconnect
- **Critical CSS**: Inline critical styles
- **Tree Shaking**: Unused code elimination
- **Compression**: Gzip/Brotli compression

## SEO Implementation

### Meta Tag Strategy
Comprehensive meta tags covering:
- **Primary SEO**: Title, description, keywords
- **Social Media**: Open Graph, Twitter Cards, Pinterest
- **Local SEO**: Geographic targeting for Rwanda
- **Technical SEO**: Robots, canonical URLs, language tags

### Structured Data
JSON-LD implementation for:
- **Organization Schema**: Company information
- **LocalBusiness Schema**: Location and hours
- **Product Schema**: Baking ingredients and equipment
- **Contact Schema**: Business contact information

### Content Strategy
- **Keyword Optimization**: "baking ingredients Rwanda", "commercial bakery supplies"
- **Local Focus**: Rwanda, Kigali, East Africa targeting
- **Industry Terms**: Baking, commercial, ingredients, equipment

## Security & Accessibility

### Security Features
- **Content Security Policy**: XSS protection
- **HTTPS Enforcement**: Secure connections only
- **Input Validation**: Form data sanitization
- **Dependency Scanning**: Regular security updates

### Accessibility (a11y)
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliance
- **Focus Management**: Logical focus flow

## Deployment

### Vercel Configuration
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Environment Setup
- **Production**: Automatic deployments from main branch
- **Preview**: Pull request preview deployments
- **Analytics**: Vercel Analytics integration
- **Monitoring**: Error tracking and performance monitoring

### Custom Domain
- **Primary Domain**: milimani.rw (configured)
- **SSL Certificate**: Automatic Let's Encrypt
- **CDN**: Global edge network
- **Performance**: Optimized for East Africa region

## Browser Support

### Supported Browsers
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation for older browsers

### Polyfills
- **ES6+ Features**: Automatic polyfill injection
- **Web APIs**: Service Worker, Intersection Observer
- **CSS Features**: Grid, Flexbox, Custom Properties

## Performance Metrics

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Additional Metrics
- **TTFB (Time to First Byte)**: < 600ms
- **FCP (First Contentful Paint)**: < 1.8s
- **Speed Index**: < 3.4s

## Maintenance & Updates

### Regular Tasks
- **Dependency Updates**: Monthly security and feature updates
- **Content Updates**: Regular product and service information updates
- **Performance Monitoring**: Weekly performance audits
- **SEO Monitoring**: Monthly search ranking analysis

### Monitoring Tools
- **Vercel Analytics**: Traffic and performance insights
- **Google Search Console**: SEO monitoring
- **Lighthouse CI**: Automated performance testing
- **Error Tracking**: Real-time error monitoring

## Future Enhancements

### Planned Features
1. **E-commerce Integration**: Product catalog with shopping cart
2. **Multi-language Support**: English/Kinyarwanda localization
3. **Advanced Analytics**: Custom event tracking
4. **Customer Portal**: Account management and order tracking
5. **API Integration**: Real-time product availability

### Technical Improvements
1. **GraphQL Integration**: Efficient data fetching
2. **Advanced Caching**: Redis-based caching layer
3. **Microservices**: Scalable backend architecture
4. **AI Integration**: Chatbot for customer support

## Contact & Support

### Development Team
- **Primary Developer**: Claude Code
- **Client**: Patricia Toroitich, Milimani Enterprises
- **Repository**: Git-based version control
- **Documentation**: Maintained in `/docs` directory

### Technical Support
- **Issues**: GitHub Issues for bug tracking
- **Updates**: Automated deployment pipeline
- **Monitoring**: 24/7 uptime monitoring
- **Backup**: Automated daily backups

---

*Last Updated: August 14, 2025*  
*Version: 1.0.0*  
*Framework: React 19.1.0 + Vite 7.0.4*