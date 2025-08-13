import { useState, useEffect, useCallback } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY > 400);
  }, []);

  const scrollToTop = useCallback(() => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 600);
  }, []);

  useEffect(() => {
    let timeoutId = null;
    
    const throttledHandleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 16);
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  }, [scrollToTop]);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      className={`fixed bottom-24 right-4 sm:right-6 md:bottom-28 md:right-8 lg:right-10 z-40 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-luscious-lime hover:bg-wet-sand text-white rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center group hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-luscious-lime focus:ring-opacity-50 active:scale-95 ${
        isScrolling ? 'opacity-70' : 'opacity-100'
      } animate-fadeIn`}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg
        className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300 ${
          isScrolling ? 'animate-pulse' : 'group-hover:scale-125 group-hover:-translate-y-1'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default BackToTop;