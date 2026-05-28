import { motion } from "framer-motion";
import heroVideo from "../video/hero.mp4";


function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* VIDEO */}
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
      <div className="absolute inset-0 bg-black/40"></div>

    



      {/* SCROLL DOWN */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-40 h-40 border border-white/40 rounded-full flex flex-col items-center justify-center text-white">
          <p className="text-sm uppercase">Scroll Down</p>

          <div className="mt-4 text-3xl animate-bounce">
            ↓
          </div>
        </div>
      </div>

      {/* SOUND BUTTON */}
      <button className="absolute bottom-10 right-10 z-20 bg-orange-500 w-20 h-20 rounded-full text-white text-3xl">
        🔊
      </button>
    </section>
  );
}

export default Hero;