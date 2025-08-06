import Footer from "../components/Footer/footer";
import OurValues from "../components/OurValues/ourValues";
import OurTeam from "../components/OurTeam/OurTeam";
import AboutUsHero from "../components/AboutUsHero/AboutUsHero";
import NavBar from "../components/NavBar/NavBar";
import AboutUsWidgets from "../components/AboutUsWidgets/AboutUsWidgets";
import Slideshow from "../components/Slideshow/Slideshow";
import { motion } from 'framer-motion';

function aboutUs() {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavBar/> */}
      

      {/* About Us Hero Section */}
      <AboutUsHero />  
      

      {/* About Us Widgets */}
      <AboutUsWidgets />  
      
      
      {/* Our Values Section */}
      <OurValues />  
      

      {/* Our Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <OurTeam />  
      </motion.div>
      

      {/* Slideshow */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Slideshow />  
      </motion.div>
      

      {/* Footer */}
      <Footer />
    </>
  );
}   

export default aboutUs;
