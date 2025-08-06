import { useState } from 'react';
import { motion } from 'framer-motion';


function OurValues() {
  const values = [
    {
      title: 'Quality First',
      description:
        'We never compromise on the standard of the product, every product is tested for consistency, performance and freshness.',
    },
    {
      title: 'Customer Success',
      description:
        'We are committed to ensuring our customers achieve their desired outcomes with our products.',
    },
    {
      title: 'Innovation Everyday',
      description:
        'We foster a culture of continuous improvement and encourage our team to think outside the box.',
    },
    {
      title: 'Integrity Always',
      description:
        'We uphold the highest standards of integrity in all our actions.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full lg:w-screen min-w-50 p-8 sm:p-15 bg-[#143e45]" id="our-values">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col gap-20 overflow-x-auto">
          {/* Heading */}
          <h1 className="heading1">Our Values</h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Values dropdown */}
            <div className="max-w-7xl">
              {values.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 mb-6">
                  {/* Toggle header */}
                  <div
                    className="flex items-center justify-between gap-3 cursor-pointer"
                    onClick={() => toggle(index)}
                  >
                    <p className="text-2xl font-semibold text-white">{item.title}</p>
                    <img
                      src="arrowDown.svg"
                      alt="arrow"
                      className={`w-10 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Animated dropdown content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text1 mt-2 text-white">{item.description}</p>
                  </div>

                  {/* Separator */}
                  <hr className="border-white-900 my-5" />
                </div>
              ))}
            </div>  
          </motion.div>

          
        </div>
      </div>
    </div>
  );
}

export default OurValues;
