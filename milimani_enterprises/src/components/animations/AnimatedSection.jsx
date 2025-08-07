import { motion } from 'framer-motion';
import { fadeInUp, getReducedMotionVariants, getMobileOptimizedVariants } from './variants';
import { useState, useEffect } from 'react';

const AnimatedSection = ({ 
  children, 
  className = "", 
  variants = fadeInUp, 
  delay = 0 
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Apply reduced motion and mobile optimizations
  const finalVariants = getReducedMotionVariants(
    getMobileOptimizedVariants(variants, isMobile)
  );

  // Add delay to transition if provided
  const variantsWithDelay = delay > 0 ? {
    ...finalVariants,
    visible: {
      ...finalVariants.visible,
      transition: {
        ...finalVariants.visible.transition,
        delay
      }
    }
  } : finalVariants;

  return (
    <motion.div
      className={className}
      variants={variantsWithDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true,
        margin: "-30%"
      }}
      style={{
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;