import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { BackToTop, PageTransition } from './components'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import PWAStatus from './components/PWAStatus/PWAStatus'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/contactUs'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/aboutUs" element={
          <PageTransition>
            <AboutUs />
          </PageTransition>
        } />
        <Route path="/contactUs" element={
          <PageTransition>
            <ContactUs />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <PWAStatus />
        <AnimatedRoutes />
        <BackToTop />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App;