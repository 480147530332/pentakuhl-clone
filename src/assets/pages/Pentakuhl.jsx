import { motion } from "framer-motion";
import heroVideo from "../video/hero.mp4";
import PentAbout from "../components/PentAbout";
import SeriesGuide from "../components/Seriesguide";   // Fixed path
import Faq from "../components/Faq";
import Featuresticker from "../components/Featuresticker";
import Cta from "../components/Cta";
import Footprint from "../components/Footprint";
import SideLogo from "../components/SideLogo";

function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <SideLogo />

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 md:bg-black/40"></div>

      {/* HERO CONTENT */}
      <div className="relative z-20 min-h-screen flex flex-col">

        {/* CENTER CONTENT */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 pb-16 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight tracking-tight"
          >
            Ensuring Safe Transport for
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl text-white/90"
          >
            Temperature-Sensitive Products
          </motion.p>

          <p className="mt-8 text-base sm:text-lg max-w-2xl text-white/80 px-4">
            Explore our frequently asked questions to gain clarity about Penta Kuhl’s services and features
          </p>

          <button className="cta-btn mt-10 px-10 py-4 text-lg font-semibold">
            Explore
          </button>
        </div>

        {/* SCROLL DOWN INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white">
          <p className="text-xs uppercase tracking-widest mb-2">Scroll</p>
          <div className="text-4xl animate-bounce">↓</div>
        </div>

        {/* SOUND BUTTON - Mobile Friendly */}
        <button className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-orange-500 hover:bg-orange-600 w-14 h-14 md:w-16 md:h-16 rounded-full text-white text-2xl shadow-xl transition-all active:scale-95 z-30">
          🔊
        </button>
      </div>

      {/* Other Sections */}
      <div className="relative z-30 bg-white">
        <PentAbout />
      </div>
      <div className="relative z-30 bg-white">
        <SeriesGuide />
      </div>
      <div className="relative z-30 bg-white">
        <Featuresticker />
      </div>
      <div className="relative z-30 bg-white">
        <Faq />
      </div>
      <div className="relative z-30 bg-white">
        <Cta />
      </div>
      <div className="relative z-30 bg-white">
        <Footprint />
      </div>
    </section>
  );
}

export default Hero;