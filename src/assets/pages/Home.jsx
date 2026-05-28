import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import planeImg from "../images/plane.jpg";
import "../../index.css";
import AchievementsCounter from '../components/AchievementsCounter';
import CertificatesSection from '../components/CertificatesSection';
import Certifications from '../components/Certifications';
import AwardsSection from '../components/AwardsSection';
import GlobalResources from '../components/GlobalResources';
import Footprint from '../components/Footprint';
import SideLogo from '../components/SideLogo';

function Home() {
    return (
        <>
         <SideLogo />
            <Hero />

            {/* ========== PLANE IMAGE SECTION ========== */}
            <section className="plane-section">
                <div className="plane-container">
                    <img
                        src={planeImg}
                        alt="Cargo Plane"
                        className="plane-image"
                    />

                    {/* Optional: Left vertical logo / text area */}
                    <div className="left-vertical-text">
                        {/* You can add text or logo here if needed */}
                    </div>
                </div>
            </section>

            {/* ========== OUR PHILOSOPHY SECTION ========== */}
            <section className="philosophy-section">
                <div className="philosophy-container">
                    <h2 className="philosophy-heading">Our Philosophy</h2>

                    <p className="philosophy-text">
                        Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with 
                        precision, care, and professionalism. With expert resources, we ensure safe, timely transport, 
                        building lasting partnerships founded on trust and excellence.
                    </p>

                    <button className="philosophy-button">
                        Read more
                    </button>
                </div>
            </section>

            <ServicesSection/>

            <WhyChooseUs />

            <AchievementsCounter />

            <CertificatesSection/>

            <Certifications/>

            <AwardsSection/>

            <GlobalResources/>

            <Footprint/>
        </>
    );
}

export default Home;