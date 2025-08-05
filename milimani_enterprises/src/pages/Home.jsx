import Navigation from "../components/Navigation/Navigation";
import LandingHome from "../components/LandingHome/LandingHome";
import SelectedProducts from "../components/SelectedProducts/SelectedProducts";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import MessageFromOwner from "../components/MessageFromOwner/MessageFromOwner";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";

function Home(){
    return (
        <>
            <Navigation />
            <LandingHome />
            <SelectedProducts />
            <ServicesSection />
            <MessageFromOwner />
            <CallToAction />
            <Footer />
        </>
    )
}
export default Home;