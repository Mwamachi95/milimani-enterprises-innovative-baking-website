import Footer from "../components/Footer/footer";
import OurValues from "../components/OurValues/ourValues";
import OurTeam from "../components/OurTeam/OurTeam";
import AboutUsHero from "../components/AboutUsHero/AboutUsHero";
import NavBar from "../components/NavBar/NavBar";
import AboutUsWidgets from "../components/AboutUsWidgets/AboutUsWidgets";
import Slideshow from "../components/Slideshow/Slideshow";
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
      <OurTeam />

      {/* Slideshow */}
      <Slideshow />

      {/* Footer */}
      <Footer />
    </>
  );
}   

export default aboutUs;
