import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, getReducedMotionVariants, getMobileOptimizedVariants } from './variants';
import { useState, useEffect, Children } from 'react';

const AnimatedGrid = ({ 
  children, 
  className = "",
  staggerDelay = 0.1,
  gridVariants = staggerContainer,
  itemVariants = staggerItem
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
  const finalGridVariants = getReducedMotionVariants(
    getMobileOptimizedVariants(gridVariants, isMobile)
  );
  
  const finalItemVariants = getReducedMotionVariants(
    getMobileOptimizedVariants(itemVariants, isMobile)
  );

  // Customize stagger delay
  const gridVariantsWithStagger = {
    ...finalGridVariants,
    visible: {
      ...finalGridVariants.visible,
      transition: {
        ...finalGridVariants.visible.transition,
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={gridVariantsWithStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true,
        margin: "-20%"
      }}
      style={{
        willChange: 'transform, opacity'
      }}
    >
      {Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={finalItemVariants}
          style={{
            willChange: 'transform, opacity'
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedGrid;