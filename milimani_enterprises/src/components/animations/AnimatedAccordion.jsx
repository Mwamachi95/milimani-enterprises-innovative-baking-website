import { motion, AnimatePresence } from 'framer-motion';
import { accordionContainer, rotateArrow, getReducedMotionVariants, getMobileOptimizedVariants } from './variants';
import { useState, useEffect } from 'react';

const AnimatedAccordion = ({ 
  isOpen,
  children,
  className = "",
  duration = 0.3,
  showArrow = false,
  onToggle,
  arrowClassName = ""
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
  const finalAccordionVariants = getReducedMotionVariants(
    getMobileOptimizedVariants(accordionContainer, isMobile)
  );
  
  const finalArrowVariants = getReducedMotionVariants(
    getMobileOptimizedVariants(rotateArrow, isMobile)
  );

  // Customize duration
  const accordionVariantsWithDuration = {
    closed: {
      ...finalAccordionVariants.closed,
      transition: {
        ...finalAccordionVariants.closed.transition,
        duration
      }
    },
    open: {
      ...finalAccordionVariants.open,
      transition: {
        ...finalAccordionVariants.open.transition,
        duration
      }
    }
  };

  const arrowVariantsWithDuration = {
    closed: {
      ...finalArrowVariants.closed,
      transition: {
        ...finalArrowVariants.closed.transition,
        duration
      }
    },
    open: {
      ...finalArrowVariants.open,
      transition: {
        ...finalArrowVariants.open.transition,
        duration
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {showArrow && (
        <motion.div
          className={`inline-block ${arrowClassName}`}
          variants={arrowVariantsWithDuration}
          animate={isOpen ? "open" : "closed"}
          onClick={onToggle}
          style={{ cursor: onToggle ? 'pointer' : 'default' }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={className}
            variants={accordionVariantsWithDuration}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              overflow: 'hidden',
              willChange: 'height, opacity'
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedAccordion;