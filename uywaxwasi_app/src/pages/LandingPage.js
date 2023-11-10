import React from "react";
import NavBarLp from "../components/shared/NavBarLp";
import Cta from "../components/landing_page/Cta";
import Services from "../components/landing_page/Services";
import ContactBar from "../components/shared/ContactBar";
import Footer from "../components/shared/Footer";
import "../css/lp_styles.css"
import Testimonies from "../components/landing_page/Testimonies";

const LandingPage = () => {
    return (
        <div>
            <NavBarLp/>
            <div className="container">
                <Cta/>
                <div className="subtitles">            
                    <h2>Servicios</h2>
                </div>
                <Services/>
                <div className="subtitles">            
                    <h2>Testimonios</h2>
                </div>
                <Testimonies/>
                <ContactBar/>
            </div>
            <Footer/>
        </div>
    )
}

export default LandingPage