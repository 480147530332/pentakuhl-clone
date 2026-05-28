import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const CountingNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isNumeric = !isNaN(parseFloat(value));
  const targetNumber = isNumeric ? parseFloat(value) : 0;
  
  const roundedTransform = useTransform(motionValue, (latest) => Math.floor(latest));
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && isNumeric) {
      const controls = animate(motionValue, targetNumber, { duration: 2.2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, targetNumber, isNumeric]);

  useEffect(() => {
    if (!isNumeric && ref.current) {
      ref.current.textContent = value;
    } else {
      return roundedTransform.on("change", (latest) => {
        if (ref.current) ref.current.textContent = latest + suffix;
      });
    }
  }, [roundedTransform, value, suffix, isNumeric]);

  return <span ref={ref}>0</span>;
};

function AchievementsCounter() {
  const stats = [
    { id: 1, value: "7", suffix: "+", label: "Strategic Domestic Offices" },
    { id: 2, value: "USA", suffix: "", label: "Global presence" },
    { id: 3, value: "200", suffix: "+", label: "Logistics Experts" },
    { id: 4, value: "50", suffix: "+", label: "Awards & Accolades" }
  ];

  return (
    <section 
      className="achievements-section"
      style={{ 
        // Background topographic contour vector layer overlay matching image canvas exactly
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1400' height='500' viewBox='0 0 1400 500'%3E%3Cpath d='M-100,150 C400,80 700,280 1500,120 M-100,240 C500,160 800,380 1500,200 M-100,340 C400,290 900,420 1500,310' fill='none' stroke='%23ffffff' strokeWidth='1' opacity='0.05'/%3E%3C/svg%3E")`
      }}
    >
      <div className="achievements-flex-wrapper">
        
        {/* LEFT BRAND TEXT COLUMN CONTAINER */}
        <div className="achievements-text-side">
          <h2 className="achievements-heading-orange">Our Achievements</h2>
          <p className="achievements-para-gray">
            Over 31+ years of excellence, trusted globally, delivering reliable logistics solutions with precision.
          </p>
        </div>

        {/* RIGHT NUMERIC 2X2 SPLIT MATRIX CONTAINER */}
        <div className="achievements-stats-side">
          {stats.map((stat) => (
            <div key={stat.id} className="single-stat-node">
              <div className="single-stat-number">
                <CountingNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="single-stat-caption">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AchievementsCounter;