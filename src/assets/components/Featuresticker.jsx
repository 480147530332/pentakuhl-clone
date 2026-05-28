import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../../index.css";

const features = [
  "Tailored Freight Solutions",
  "Robust Load Security",
  "Expert Logistics Support",
  "End-to-End Supply Chain Management",
  "Flexible Shipping Schedules",
  "Volume Discounts",
];

const FeaturesTicker = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Moves row 1 left (-300px to 0) and row 2 right (300px to 0)
  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  
  // Scales from 0.8 to 1.1 as it scrolls into view
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  return (
    <motion.div ref={containerRef} className="ticker-wrapper" style={{ scale }}>
      <motion.div style={{ x: x1 }} className="ticker-row">
        {[...features, ...features].map((f, i) => (
          <div key={i} className="ticker-item">{f}</div>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="ticker-row">
        {[...features, ...features].map((f, i) => (
          <div key={i} className="ticker-item">{f}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};  

export default FeaturesTicker;