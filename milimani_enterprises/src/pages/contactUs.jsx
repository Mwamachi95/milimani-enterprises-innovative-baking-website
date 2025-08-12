import Navigation from "../components/Navigation/Navigation";
import Contact from "../components/Contact/Contact";
import ContactLocation from "../components/ContactLocation/ContactLocation";
import Footer from "../components/Footer/Footer";
import SEOHelmet from "../components/SEO/SEOHelmet";

function ContactUs(){
    return (
        <>
            <SEOHelmet 
                title="Contact Milimani Enterprises - Kigali, Rwanda Baking Suppliers"
                description="Get in touch with Milimani Enterprises for premium baking ingredients and equipment. Located in Kigali, Rwanda. Contact us for wholesale orders and business partnerships."
                keywords="contact Milimani Enterprises, Kigali baking suppliers, Rwanda commercial bakery contact, wholesale baking ingredients"
            />
            <Navigation />
            <Contact />
            <ContactLocation />
            <Footer />
        </>
    )
}
export default ContactUs;
