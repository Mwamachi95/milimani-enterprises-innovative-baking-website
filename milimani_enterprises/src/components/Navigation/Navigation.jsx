import { useState, useEffect } from 'react';
import logoIcon from '../../assets/images/logos/Milimani Enterprises Logo.svg';

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [fadeTriggered, setFadeTriggered] = useState(false);

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

  const isScrolled = scrollY > 20;

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-sm transition-all duration-1000">
      <div className={`flex justify-between items-center px-8 md:px-6 lg:px-8 transition-all duration-1000 ${
        isScrolled 
          ? 'py-4' 
          : 'pt-8 pb-4 md:pt-12 md:pb-4 lg:pt-8 lg:pb-4'
      }`}>
        
        {/* Logo Container */}
        <a 
          href="/" 
          className="flex items-center gap-4 md:gap-3 lg:gap-4 cursor-pointer group"
        >
          {/* Logo Icon */}
          <div className={`w-[70px] h-[70px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] transition-all duration-300 relative z-10 ${
            isScrolled 
              ? 'bg-dark-hunter-green rounded-xl p-[10px] md:p-[7px] lg:p-[10px]' 
              : ''
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
              <div className="text-[2rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-bokara-grey leading-none">
                Milimani Enterprises
              </div>
              <div className="text-[1.5rem] md:text-[1rem] lg:text-[1.5rem] font-medium text-luscious-lime leading-none">
                Innovative Baking
              </div>
            </div>
          </div>
        </a>

        {/* Navigation Links Container */}
        <div className="flex items-center gap-x-4 md:gap-x-3 lg:gap-x-4">
          
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
        
      </div>
    </nav>
  );
};

export default Navigation;