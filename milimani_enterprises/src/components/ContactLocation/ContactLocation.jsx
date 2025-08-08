import kigaliImage from '../../assets/images/home/contact/kigali.jpg';
import { AnimatedSection } from '../animations';
import { fadeInUp } from '../animations';

const ContactLocation = () => {
  return (
    <div className="bg-dark-hunter-green px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <AnimatedSection variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sora text-white leading-tight tracking-tight mb-8 md:mb-12 lg:mb-16">
          LOCATION
          </h2>
        </AnimatedSection>

        {/* Image card section */}
        <AnimatedSection variants={fadeInUp} delay={0.2}>
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl overflow-hidden">
          {/* Image section */}
          <div className="h-64 md:h-80 lg:h-96">
            <img
              src={kigaliImage}
              alt="Kigali Convention Centre - Location landmark"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Location details section */}
          <div className="bg-dark-hunter-green p-6 md:p-8">
            <h4 className="font-sora font-bold text-lg md:text-xl lg:text-2xl text-white mb-2">
              KIGALI, RWANDA
            </h4>
            <p className="text-sm md:text-base text-white text-opacity-80">
              KN7 Road
              <br />
              Industrial Area
            </p>
          </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactLocation;