import { useNavigate, useLocation } from "react-router-dom";

function Footer(){
    // Get the current year for copyright
    const d = new Date();
    let year = d.getFullYear();

    // Import necessary hooks from react-router-dom
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div style={{ backgroundColor: '#163033' }} 
                className="w-full fixed bottom-0 left-0 p-10 flex flex-col gap-10 text-white">

                {/* Footer content */}
                <div className="lg:w-full flex flex-col lg:flex-row gap-10 justify-between">
                    {/* Logo */}
                    <div className="flex gap-3 items-center justify-center">
                        <img className="w-30 sm:w-43" src="logo.svg" alt="logo" />
                        <div className="">
                            <h1 className="font-bold sm:text-4xl text-2xl">Milimani<br/>Enterprises</h1>
                            <p className="font-regular text-lg text-white">Innovative Baking</p>    
                        </div>
                    </div>
                    
                    {/* Company information */}
                    <div className="flex sm:flex-row flex-col sm:gap-15 gap-10 justify-center items-top text-center sm:text-left">

                        {/* Contact us */}
                        <div className="flex flex-col items-center gap-3">
                            <p className="font-semibold text-xl">Contact</p>
                            {/* Number */}
                            <div className="flex gap-2">
                                <img src="call.svg" alt="phone" />
                                <p>+250 788 760 923</p>
                            </div>
                            {/* Email */}
                            <div className="flex gap-2">
                                <img src="mail.svg" alt="email" />
                                <p>info@milimani.rw</p>
                            </div>
                            {/* Social media */}
                            <div className="flex sm:justify-start justify-center gap-3">
                                <img src="facebook.svg" alt="facebook" />
                                <img src="instagram.svg" alt="instagram" />
                            </div>
                        </div>

                        {/* Address us */}
                        <div className="flex flex-col items-center gap-3">
                            <p className="font-semibold text-xl">Address</p>
                            {/* Shop address */}
                            <div className="flex items-start gap-2">
                                <img src="store.svg" alt="store" />
                                <p>Kigali, Rwanda<br/>KN 1 Rd</p>
                            </div>
                            {/* Factory address */}
                            <div className="flex items-start gap-2">
                                <img src="factory.svg" alt="factory" />
                                <p>Kigali, Rwanda<br/>Industrial Area</p>
                            </div>
                        </div>

                        {/* Pages */}
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold text-xl">Pages</p>
                            <li onClick={() => navigate("/")} className="list-none">
                                <a>Home</a>
                            </li>
                            <li onClick={() => navigate("/aboutUs")} className="list-none">
                                <a>About Us</a>
                            </li>
                            <li onClick={() => navigate("/contactUs")} className="list-none">
                                <a>Contact</a>
                            </li>    
                        </div>

                    </div>
                </div>                

                {/* Divider */}
                <hr className="footerDivider" />

                {/* Copyright */}
                <p className="font-regular text-sm text-white text-center lg:text-left lg:w-full">
                    &copy; {year} Milimani Enterprises. All rights reserved.
                </p>
            
            </div>
        </>
    );
}
export default Footer;