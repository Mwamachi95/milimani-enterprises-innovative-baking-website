import { useState } from 'react';
import { AnimatedSection } from '../animations';
import { staggerContainer, staggerItem } from '../animations/variants';

const ServicesSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const services = [
    {
      id: 1,
      title: "MANUFACTURING & SUPPLY OF BAKING INGREDIENTS",
      content: "We specialize in the production and distribution of premium baking ingredients sourced from the finest suppliers across East Africa. Our state-of-the-art facilities ensure consistent quality and freshness in every product we deliver. From vanilla extracts to specialty cake mixes, we provide the essential components that make exceptional baking possible."
    },
    {
      id: 2,
      title: "BAKING EQUIPMENT SUPPLY",
      content: "Our comprehensive equipment solutions cover everything from industrial mixers to precision measuring tools. We partner with leading manufacturers to bring you reliable, high-performance baking equipment that meets the demands of modern commercial bakeries. Professional installation, training, and ongoing support ensure your operations run smoothly."
    },
    {
      id: 3,
      title: "COLLABORATIVE SUPPORT & LONG-TERM PARTNERSHIPS",
      content: "We believe in building lasting relationships with our clients through dedicated support and collaborative problem-solving. Our experienced team works closely with bakeries to understand their unique challenges and develop customized solutions that drive growth and operational excellence."
    },
    {
      id: 4,
      title: "INNOVATIVE & CUSTOMER-FOCUSED SOLUTIONS",
      content: "Innovation drives everything we do, from developing new ingredient formulations to implementing cutting-edge supply chain technologies. We continuously invest in research and development to bring you the latest advancements in baking science, ensuring your products stay ahead of market trends and customer expectations."
    }
  ];

  const handleToggle = (serviceId) => {
    setActiveAccordion(activeAccordion === serviceId ? null : serviceId);
  };

  const handleMouseEnter = (serviceId) => {
    // Only use hover effect on larger screens
    if (window.innerWidth >= 768) {
      setActiveAccordion(serviceId);
    }
  };

  const handleMouseLeave = () => {
    // Only use hover effect on larger screens
    if (window.innerWidth >= 768) {
      setActiveAccordion(null);
    }
  };

  return (
    <AnimatedSection>
      <section className="bg-dark-hunter-green px-8 sm:px-15">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          {/* Header - Fixed at top */}
          <AnimatedSection className="pt-12 md:pt-20 lg:pt-24 pb-6 md:pb-12" delay={0.2}>
        {/* Subtitle */}
        <p className="text-sm md:text-base uppercase tracking-wider text-wet-sand mb-4">
          OUR SERVICES
        </p>
        
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-sora text-wet-sand leading-tight">
          Driving baking value across every step of the customer journey.
        </h2>
      </AnimatedSection>

      {/* Accordion sections */}
      <AnimatedSection 
        variants={staggerContainer} 
        className="pb-4 md:pb-20 lg:pb-24"
      >
        {services.map((service, index) => (
          <AnimatedSection
            key={service.id}
            variants={staggerItem}
            className={`border-b border-whisper-white border-opacity-20 ${
              index === services.length - 1 ? 'border-b-0' : ''
            } transition-all duration-700 ease-out`}
            onMouseEnter={() => handleMouseEnter(service.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleToggle(service.id)}
          >
            {/* Service Title */}
            <div
              className="w-full flex items-center justify-between py-4 md:py-8 transition-colors duration-300 cursor-pointer"
              aria-expanded={activeAccordion === service.id}
              aria-controls={`service-content-${service.id}`}
            >
              <span className="text-left text-lg md:text-xl lg:text-2xl font-sora font-semibold text-whisper-white">
                {service.title}
              </span>
              
              {/* Dropdown Arrow */}
              <div
                className={`transform transition-transform duration-300 ${
                  activeAccordion === service.id ? 'rotate-180' : ''
                }`}
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-whisper-white"
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
                activeAccordion === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
              id={`service-content-${service.id}`}
              style={{
                transition: 'max-height 1000ms cubic-bezier(0.4, 0, 0.2, 1), opacity 800ms ease-in-out'
              }}
            >
              <div className="pb-4 md:pb-8 pr-8 md:pr-12">
                <p className="text-whisper-white font-sora text-base md:text-lg leading-relaxed max-w-4xl">
                  {service.content}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </AnimatedSection>
        </div>
      </div>
      </section>
    </AnimatedSection>
  );
};

export default ServicesSection;