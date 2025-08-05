import ctaImage from '../../assets/images/home/cta/call_to_action.jpg';

const CallToAction = () => {
  return (
    <section className="relative h-[66vh]">
      {/* Background Image with integrated overlay using CSS gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${ctaImage})`,
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Content Section */}
            <div className="text-left">
              <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-2 md:mb-4">
                Interested?
              </h2>
              <p className="font-sora font-medium text-lg md:text-xl lg:text-2xl text-whisper-white">
                Let's Connect
              </p>
            </div>
            
            {/* Right Content Section */}
            <div className="text-left">
              <h3 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6">
                Feel free to reach out.
              </h3>
              <p className="font-sora font-medium text-lg md:text-xl lg:text-2xl text-white text-opacity-90 mb-8 md:mb-10">
                We would love to hear from you.
              </p>
              
              {/* Let's Talk Button */}
              <a 
                href="/contactUs"
                className="relative group bg-dark-hunter-green text-whisper-white font-sora font-bold text-[1.5rem] md:text-[1rem] lg:text-[1.5rem] px-4 md:px-3 lg:px-4 py-3 md:py-2 lg:py-3 rounded-xl flex items-center gap-6 overflow-hidden transition-all duration-300 inline-flex"
                aria-label="Contact us to discuss your baking needs"
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
                    className="md:w-5 md:h-5 lg:w-6 lg:h-6"
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
        </div>
      </div>
    </section>
  );
};

export default CallToAction;