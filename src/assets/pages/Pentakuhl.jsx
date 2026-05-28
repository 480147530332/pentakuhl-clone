import { motion } from "framer-motion";
import { useState } from "react";
import heroVideo from "../video/hero.mp4";
import PentAbout from "../components/PentAbout";
import SeriesGuide from "/src/assets/components/Seriesguide";
import Faq from "../components/Faq";
import Featuresticker from "../components/Featuresticker";
import Cta from "../components/Cta";
import Footprint from "../components/Footprint";
import SideLogo from "../components/SideLogo";
import "../../index.css";

function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  const handleSoundToggle = () => {
    const video = document.getElementById("hero-video");
    if (video) {
      video.muted = !video.muted;
      setIsMuted((prev) => !prev);
    }
  };

  return (
    <section className="hero-section">

      {/* SIDE LOGO */}
      <div className="side-logo-wrapper">
        <SideLogo />
      </div>

      {/* VIDEO BACKGROUND */}
      <video
        id="hero-video"
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="hero-overlay" />

      {/* HERO CONTENT */}
      <div className="hero-content">

        {/* CENTER CONTENT */}
        <div className="hero-center">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            Ensuring Safe Transport for
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="hero-subtitle"
          >
            Temperature-Sensitive Products
          </motion.p>

          <motion.hr
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hero-divider"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="hero-description"
          >
            Explore our frequently asked questions to gain clarity about
            Penta Kuhl's services and features
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="cta-btn"
          >
            Explore
          </motion.button>

        </div>

        {/* BOTTOM BAR */}
        <div className="hero-bottom">

          {/* SCROLL INDICATOR */}
          <div className="scroll-ring">
            <p className="scroll-ring__label">Scroll</p>
            <div className="scroll-ring__arrow">↓</div>
          </div>

          {/* SOUND BUTTON */}
          <button
            className="sound-btn"
            onClick={handleSoundToggle}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>

        </div>
      </div>

      {/* PAGE SECTIONS */}
      <div className="page-section"><PentAbout /></div>
      <div className="page-section"><SeriesGuide /></div>
      <div className="page-section"><Featuresticker /></div>
      <div className="page-section"><Faq /></div>
      <div className="page-section"><Cta /></div>
      <div className="page-section"><Footprint /></div>

    </section>
  );
}

export default Hero;