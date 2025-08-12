import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import OurValues from "../components/OurValues/OurValues";
import OurTeam from "../components/OurTeam/OurTeam";
import AboutUsHero from "../components/AboutUsHero/AboutUsHero";
import SEOHelmet from "../components/SEO/SEOHelmet";
function AboutUs() {
  return (
    <>
      <SEOHelmet 
        title="About Milimani Enterprises - Professional Baking Team & Company Story"
        description="Meet our experienced team and learn about Milimani Enterprises' journey as East Africa's leading baking ingredient manufacturer. Professional expertise driving innovation in Rwanda's baking industry."
        keywords="Milimani Enterprises team, baking company Rwanda, Patricia Toroitich founder, professional baking expertise"
      />
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
