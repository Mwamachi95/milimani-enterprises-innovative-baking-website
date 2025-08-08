import Navigation from "../components/Navigation/Navigation";
import LandingHome from "../components/LandingHome/LandingHome";
import SelectedProducts from "../components/SelectedProducts/SelectedProducts";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import MessageFromOwner from "../components/MessageFromOwner/MessageFromOwner";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import SEOHelmet from "../components/SEO/SEOHelmet";

function Home(){
    return (
        <>
            <SEOHelmet 
                title="Milimani Enterprises - East Africa's Trusted Baking Ingredient Supplier"
                description="Premium baking ingredients and equipment for commercial bakeries across Rwanda. Quality cake mixes, vanilla extracts, and professional baking tools from East Africa's leading supplier."
                keywords="baking ingredients Rwanda, commercial bakery supplies, cake mix supplier East Africa, vanilla extract, baking equipment Kigali"
            />
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