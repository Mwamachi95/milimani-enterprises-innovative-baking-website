import { useState, useEffect } from 'react';
import { AnimatedSection } from '../animations';
import { fadeInUp, staggerContainer, staggerItem } from '../animations';

const OurValues = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const values = [
    {
      id: 1,
      title: "QUALITY FIRST",
      content: "We never compromise on the standard of the product. Every product we deliver is tested for consistency, performance and freshness. Our commitment to quality is unwavering and forms the foundation of everything we do."
    },
    {
      id: 2,
      title: "CUSTOMER SUCCESS",
      content: "We are committed to ensuring our customers achieve their desired outcomes with our products. Your success is our success, and we work tirelessly to provide solutions that drive your business forward."
    },
    {
      id: 3,
      title: "INNOVATION EVERYDAY",
      content: "We foster a culture of continuous improvement and encourage our team to think outside the box. Innovation drives our product development, service delivery, and approach to solving industry challenges."
    },
    {
      id: 4,
      title: "INTEGRITY ALWAYS",
      content: "We uphold the highest standards of integrity in all our actions. Transparency, honesty, and ethical business practices guide every decision we make and every relationship we build."
    }
  ];


  const handleMouseEnter = (valueId) => {
    // Only use hover effect on larger screens
    if (!isMobile) {
      setActiveAccordion(valueId);
    }
  };

  const handleMouseLeave = () => {
    // Only use hover effect on larger screens
    if (!isMobile) {
      setActiveAccordion(null);
    }
  };

  const handleClick = (valueId, event) => {
    // Prevent event bubbling
    event.preventDefault();
    event.stopPropagation();
    
    // On mobile devices, use click to toggle
    if (isMobile) {
      setActiveAccordion(activeAccordion === valueId ? null : valueId);
    }
  };

  return (
    <section className="bg-wet-sand px-8 md:px-12 lg:px-16" id="our-values">
      {/* Header - Fixed at top */}
      <AnimatedSection variants={fadeInUp} className="pt-12 md:pt-20 lg:pt-24 pb-6 md:pb-12">
        {/* Subtitle */}
        <p className="text-sm md:text-base uppercase tracking-wider text-dark-hunter-green mb-4">
          OUR VALUES
        </p>
        
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-sora text-dark-hunter-green leading-tight">
          The principles that guide our commitment to excellence.
        </h2>
      </AnimatedSection>

      {/* Accordion sections */}
      <AnimatedSection 
        variants={staggerContainer} 
        className="pb-4 md:pb-20 lg:pb-24"
      >
        {values.map((value, index) => (
          <AnimatedSection
            key={value.id}
            variants={staggerItem}
            className={`border-b border-dark-hunter-green border-opacity-20 ${
              index === values.length - 1 ? 'border-b-0' : ''
            } transition-all duration-700 ease-out`}
          >
            {/* Value Title */}
            <div
              className="w-full flex items-center justify-between py-4 md:py-8 transition-colors duration-300 cursor-pointer"
              aria-expanded={activeAccordion === value.id}
              aria-controls={`value-content-${value.id}`}
              onMouseEnter={() => handleMouseEnter(value.id)}
              onMouseLeave={handleMouseLeave}
              onClick={(event) => handleClick(value.id, event)}
            >
              <span className="text-left text-lg md:text-xl lg:text-2xl font-sora font-semibold text-dark-hunter-green">
                {value.title}
              </span>
              
              {/* Dropdown Arrow */}
              <div
                className={`transform transition-transform duration-300 ${
                  activeAccordion === value.id ? 'rotate-180' : ''
                }`}
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-dark-hunter-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                activeAccordion === value.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
              id={`value-content-${value.id}`}
              style={{
                transition: 'max-height 1000ms cubic-bezier(0.4, 0, 0.2, 1), opacity 800ms ease-in-out'
              }}
            >
              <div className="pb-4 md:pb-8 pr-8 md:pr-12">
                <p className="text-dark-hunter-green font-sora text-base md:text-lg leading-relaxed max-w-4xl">
                  {value.content}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </AnimatedSection>
    </section>
  );
};

export default OurValues;
