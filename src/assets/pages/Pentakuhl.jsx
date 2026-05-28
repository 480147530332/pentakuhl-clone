import { motion } from "framer-motion";
import heroVideo from "../video/hero.mp4";
import PentAbout from "../components/PentAbout";
import SeriesGuide from "../components/Seriesguide";
import Faq from "../components/Faq";
import Featuresticker from "../components/Featuresticker";
import Cta from "../components/Cta";
import Footprint from "../components/Footprint";
import SideLogo from "../components/SideLogo";

function Hero() {
  return (
    
    <section className="relative min-h-screen bg-black">
<SideLogo/>
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black/40"></div>

      {/* HERO CONTENT */}
      <div className="relative z-20 h-screen">

        

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold uppercase"
          >
          Ensuring Safe Transport for
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 text-lg md:text-xl max-w-2xl"
          >
            Temperature-Sensitive Products
            <hr />


          </motion.p>
          <p className="text-lg md:text-xl max-w-2xl mt-9">
            Explore our frequently asked questions to gain clarity about Penta Kuhl’s services and features
          </p>
          <button className="cta-btn">Explore</button>

        </div>

        {/* SCROLL DOWN */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-32 h-32 border border-white/40 rounded-full flex flex-col items-center justify-center text-white">

            <p className="text-sm uppercase tracking-widest">
              Scroll
            </p>

            <div className="mt-2 text-3xl animate-bounce">
              ↓
            </div>

          </div>
        </div>

        {/* SOUND BUTTON */}
        <button className="absolute bottom-10 right-10 bg-orange-500 w-16 h-16 rounded-full text-white text-2xl shadow-lg hover:scale-110 transition">
          🔊
        </button>

      </div>

      {/* ABOUT SECTION */}
      <div className="relative z-30 bg-white">
        <PentAbout />
      </div>
    
      <div className="relative z-30 bg-white">
        <SeriesGuide/>
      </div>
      <div className="relative z-30 bg-white">
        <Featuresticker/>
      </div>
      <div className="relative z-30 bg-white">
        <Faq/>
      </div>
      <div className="relative z-30 bg-white">
        <Cta/>
      </div>
      <div className="relative z-30 bg-white">
        <Footprint/>
      </div>

    </section>
  );
}

export default Hero;