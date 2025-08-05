import Navigation from "../components/Navigation/Navigation";
import LandingHome from "../components/LandingHome/LandingHome";
import SelectedProducts from "../components/SelectedProducts/SelectedProducts";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import MessageFromOwner from "../components/MessageFromOwner/MessageFromOwner";

function Home(){
    return (
        <>
            <Navigation />
            <LandingHome />
            <SelectedProducts />
            <ServicesSection />
            <MessageFromOwner />
        </>
    )
}
export default Home;