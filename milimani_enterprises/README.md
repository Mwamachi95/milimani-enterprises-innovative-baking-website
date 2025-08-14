# Milimani Enterprises Website

> East Africa's Trusted Manufacturer & Supplier of Baking Ingredients and Equipment

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.12-0055FF.svg)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000.svg)](https://vercel.com/)

A modern, responsive website for Milimani Enterprises, featuring advanced animations, PWA capabilities, and comprehensive SEO optimization for the commercial baking industry in East Africa.

## ✨ Features

### 🚀 Progressive Web App (PWA)
- **Offline Functionality**: Service worker with intelligent caching
- **Installable**: Add to home screen on mobile devices  
- **Real-time Status**: Connection status indicator
- **App-like Experience**: Native app feel with custom theme colors

### 🎨 Advanced Animations
- **Framer Motion Integration**: Smooth page transitions and micro-interactions
- **Scroll-based Effects**: Dynamic logo animations and content reveals
- **Responsive Animations**: Optimized for all screen sizes
- **Performance Optimized**: Hardware-accelerated animations

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Adaptive Navigation**: Hamburger menu with smooth transitions
- **Flexible Grid System**: Tailwind CSS responsive utilities
- **Cross-browser Compatible**: Modern browser support

### 🔍 SEO Optimized
- **Comprehensive Meta Tags**: Open Graph, Twitter Cards, Pinterest
- **Structured Data**: JSON-LD schema for search engines
- **Local SEO**: Geographic targeting for Rwanda and East Africa
- **Social Media Ready**: Optimized sharing cards

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19.1.0 |
| **Build Tool** | Vite 7.0.4 |
| **Styling** | Tailwind CSS 4.1.11 |
| **Animations** | Framer Motion 12.23.12 |
| **Routing** | React Router DOM 7.7.1 |
| **Testing** | Vitest 3.2.4 + React Testing Library |
| **Deployment** | Vercel |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd milimani_enterprises
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run test suite with Vitest |
| `npm run lint` | Run ESLint for code quality |

## 📁 Project Structure

```
milimani_enterprises/
├── public/                     # Static assets and PWA files
│   ├── android-chrome-*.png    # PWA icons
│   ├── site.webmanifest        # PWA manifest
│   ├── sw.js                   # Service worker
│   └── *.svg                   # Vector graphics
├── src/
│   ├── components/             # React components
│   │   ├── Navigation/         # Advanced navigation system
│   │   ├── animations/         # Reusable animation components
│   │   ├── SEO/                # SEO optimization
│   │   └── [...]               # Feature components
│   ├── pages/                  # Route components
│   ├── assets/                 # Images and static files
│   └── App.jsx                 # Main application
├── docs/                       # Documentation
└── TECHNICAL_DOCUMENTATION.md  # Detailed technical guide
```

## 🎯 Key Components

### Navigation System
Advanced navigation with:
- Typewriter logo animation on scroll
- Responsive mobile menu with overlay
- Smooth page transitions
- Context-aware styling

### PWA Features
- Service worker for offline caching
- Web app manifest for installation
- Real-time connection status
- Mobile-optimized experience

### SEO Implementation
- Dynamic meta tag management
- Structured data (JSON-LD)
- Local business optimization
- Social media integration

## 🌍 SEO & Marketing

### Target Keywords
- "baking ingredients Rwanda"
- "commercial bakery supplies East Africa"
- "cake mix supplier Kigali"
- "professional baking equipment"

### Local Optimization
- **Location**: Kigali, Rwanda
- **Service Area**: East Africa
- **Business Hours**: Monday-Friday 8:00-17:00
- **Contact**: info@milimani.rw

### Social Media Integration
- Facebook: facebook.com/milimani.biz
- Instagram: @milimani.enterprises
- Optimized sharing cards for all platforms

## ⚡ Performance

### Core Web Vitals
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)  
- **CLS**: < 0.1 (Cumulative Layout Shift)

### Optimization Features
- Image optimization and lazy loading
- Code splitting and tree shaking
- Service worker caching
- CDN delivery via Vercel Edge

## 🧪 Testing

### Test Strategy
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Testing Stack
- **Unit Tests**: Vitest + React Testing Library
- **Component Tests**: Individual component testing
- **Accessibility Tests**: a11y compliance validation

## 🚀 Deployment

### Vercel Deployment
1. Connect repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main

### Environment Variables
No environment variables required for basic deployment.

### Custom Domain
Configure custom domain in Vercel dashboard for production use.

## 📊 Analytics & Monitoring

### Integrated Tools
- Vercel Analytics for traffic insights
- Google Search Console for SEO monitoring  
- Lighthouse CI for performance tracking
- Error tracking and monitoring

### Performance Monitoring
- Real-time performance metrics
- Core Web Vitals tracking
- User experience monitoring
- Uptime monitoring

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `main`
2. Make changes following code style guidelines
3. Run tests: `npm run test`
4. Run linting: `npm run lint`
5. Submit pull request

### Code Style
- ESLint configuration for consistent code
- Tailwind CSS for styling
- Component-based architecture
- Comprehensive testing

## 📝 Documentation

- **Technical Guide**: [TECHNICAL_DOCUMENTATION.md](./TECHNICAL_DOCUMENTATION.md)
- **PWA Implementation**: [docs/CLAUDE-PWA.md](./docs/CLAUDE-PWA.md)
- **SEO Strategy**: [docs/CLAUDE-SEO.md](./docs/CLAUDE-SEO.md)
- **Component Documentation**: Individual CLAUDE.md files in component directories

## 🔧 Browser Support

### Supported Browsers
- **Desktop**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **PWA**: All modern browsers supporting service workers

### Progressive Enhancement
- Core functionality works in older browsers
- Enhanced features for modern browsers
- Graceful degradation strategy

## 📞 Support & Contact

### Business Contact
- **Email**: info@milimani.rw
- **Phone**: +250788760923
- **Address**: KN 1 Rd, Kigali, Rwanda
- **Hours**: Monday-Friday, 8:00 AM - 5:00 PM

### Technical Support
- **Issues**: Use GitHub Issues for bug reports
- **Documentation**: Check `/docs` directory
- **Updates**: Follow release notes for updates

---

## 📄 License

This project is proprietary software for Milimani Enterprises.

---

**Built with ❤️ for East Africa's baking industry**

*Milimani Enterprises - Innovative Baking Solutions Since [Year]*