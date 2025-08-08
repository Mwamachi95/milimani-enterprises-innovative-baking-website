// Shared animation variants for consistent animations across the website

// Standard fade in from bottom
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Fade in from top
export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Fade in from left
export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Fade in from right
export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Container for staggered children animations
export const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

// Individual items for staggered animations
export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Scale up from small to normal size
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Height-based accordion animations
export const accordionContainer = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Arrow rotation for dropdowns
export const rotateArrow = {
  closed: {
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  open: {
    rotate: 180,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Utility function to check for reduced motion preference
export const getReducedMotionVariants = (variants) => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.1 }
      }
    };
  }
  return variants;
};

// Mobile optimized variants (shorter durations)
export const getMobileOptimizedVariants = (variants, isMobile = false) => {
  if (isMobile) {
    const mobileVariants = JSON.parse(JSON.stringify(variants));
    if (mobileVariants.visible?.transition) {
      mobileVariants.visible.transition.duration *= 0.7; // 30% faster on mobile
    }
    return mobileVariants;
  }
  return variants;
};