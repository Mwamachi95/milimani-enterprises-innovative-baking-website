import { useState, useEffect, useRef } from 'react';
import logoIcon from '../../assets/images/logos/Milimani Enterprises Logo.svg';

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [fadeTriggered, setFadeTriggered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Bidirectional fade animation based on scroll position
      if (currentScrollY >= 50) {
        setFadeTriggered(true);
      } else {
        setFadeTriggered(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu interactions
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) && 
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscKey);
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isScrolled = scrollY > 20;

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-1000 ${
      isMobileMenuOpen ? 'bg-dark-hunter-green' : 'bg-transparent'
    }`}>
      <div className={`flex justify-between items-center px-8 md:px-6 lg:px-8 transition-all duration-1000 ${
        isScrolled 
          ? 'py-4' 
          : 'pt-8 pb-4 md:pt-12 md:pb-4 lg:pt-8 lg:pb-4'
      }`}>
        
        {/* Logo Container */}
        <a 
          href="/" 
          className="flex items-center gap-2 md:gap-3 lg:gap-4 cursor-pointer group"
        >
          {/* Logo Icon */}
          <div className={`w-11 h-11 md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] transition-all duration-300 relative z-50 ${
            isScrolled 
              ? 'bg-bokara-grey rounded-xl p-[7px] md:p-[7px] lg:p-[10px]' 
              : 'md:bg-transparent'
          }`}>
            <img 
              src={logoIcon} 
              alt="Milimani Enterprises Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Logo Text Container */}
          <div 
            className="whitespace-nowrap relative z-0"
            style={{
              opacity: fadeTriggered ? 0 : 1,
              transform: `translateX(-${fadeTriggered ? (window.innerWidth >= 768 && window.innerWidth < 1024 ? 65 : 90) : 0}px)`,
              transition: 'opacity 1s ease-out, transform 1s ease-out'
            }}
          >
            <div className="font-sora">
              <div className={`text-lg md:text-[1.5rem] lg:text-[2rem] font-bold leading-none ${
                isMobileMenuOpen ? 'text-white' : 'text-bokara-grey'
              }`}>
                Milimani Enterprises
              </div>
              <div className="text-sm md:text-[1rem] lg:text-[1.5rem] font-medium text-luscious-lime leading-none">
                Innovative Baking
              </div>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links Container */}
        <div className="hidden md:flex items-center gap-x-4 md:gap-x-3 lg:gap-x-4">
          
          {/* Company Link */}
          <a 
            href="/aboutUs"
            className="relative group bg-dark-hunter-green text-whisper-white font-sora text-[1.5rem] md:text-[1rem] lg:text-[1.5rem] font-bold px-4 md:px-3 lg:px-4 py-3 md:py-2 lg:py-3 rounded-xl h-full flex items-center overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">
              Company
              <div className="absolute top-full left-0 w-0 h-0.5 bg-whisper-white group-hover:w-full transition-all duration-300"></div>
            </span>
          </a>

          {/* Let's Talk Button */}
          <a 
            href="/contactUs"
            className="relative group bg-wet-sand text-whisper-white font-sora text-[1.5rem] md:text-[1rem] lg:text-[1.5rem] font-bold px-4 md:px-3 lg:px-4 py-3 md:py-2 lg:py-3 rounded-xl h-full flex items-center gap-6 overflow-hidden transition-all duration-300"
          >
            {/* Background Animation */}
            <div className="absolute bottom-0 left-0 w-full h-0 bg-luscious-lime group-hover:h-full transition-all duration-400 ease-out"></div>
            
            {/* Text Stack Animation */}
            <div className="relative z-10 overflow-hidden">
              <div className="transform group-hover:-translate-y-full transition-transform duration-300">
                Let's Talk
              </div>
              <div className="absolute top-full transform group-hover:-translate-y-full transition-transform duration-300">
                Let's Talk
              </div>
            </div>
            
            {/* Arrow Icon */}
            <div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
              <svg 
                width="20" 
                height="20" 
                className="md:w-4 md:h-4 lg:w-5 lg:h-5"
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M3 12H21M21 12L14 5M21 12L14 19" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
          
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          ref={hamburgerButtonRef}
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center w-11 h-11 bg-wet-sand rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luscious-lime focus:ring-offset-2 relative z-50"
          aria-expanded={isMobileMenuOpen}
          aria-label="Menu"
          aria-controls="mobile-menu"
        >
          <div className="w-6 h-6 relative flex flex-col items-center justify-center">
            <span
              className={`absolute block w-5 h-0.5 bg-whisper-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              className={`absolute block w-5 h-0.5 bg-whisper-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`absolute block w-5 h-0.5 bg-whisper-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            ></span>
          </div>
        </button>
        
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`md:hidden fixed left-0 w-full bg-dark-hunter-green bg-opacity-95 backdrop-blur-sm transition-all duration-400 z-40 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        style={{
          top: '100%',
          height: 'calc(100vh - 100px)',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="flex flex-col justify-start h-full pt-8 px-8">
          
          {/* Company Link Mobile */}
          <a 
            href="/aboutUs"
            onClick={closeMobileMenu}
            className="w-screen text-2xl font-semibold text-white py-6 hover:bg-white hover:bg-opacity-10 transition-all duration-200 border-b border-white border-opacity-20 -ml-8 pl-8"
          >
            Company
          </a>

          {/* Let's Talk Link Mobile */}
          <a 
            href="/contactUs"
            onClick={closeMobileMenu}
            className="w-screen text-2xl font-semibold text-white py-6 hover:bg-white hover:bg-opacity-10 transition-all duration-200 -ml-8 pl-8"
          >
            Let's Talk
          </a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;