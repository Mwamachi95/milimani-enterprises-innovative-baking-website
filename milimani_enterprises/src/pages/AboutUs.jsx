import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import OurValues from "../components/OurValues/OurValues";
import OurTeam from "../components/OurTeam/OurTeam";
import AboutUsHero from "../components/AboutUsHero/AboutUsHero";
function AboutUs() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      
      {/* About Us Hero Section */}
      <AboutUsHero />
      
      {/* Our Values Section */}
      <OurValues />

      {/* Our Team Section */}
      <OurTeam />

      {/* Footer */}
      <Footer />
    </>
  );
}   

export default AboutUs;
