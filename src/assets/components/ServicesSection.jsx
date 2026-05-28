import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import airImg from "../../assets/images/air.webp";
import seaImg from "../../assets/images/sea.jpeg";
import multiImg from "../../assets/images/multi.webp";
import projectcargo from "../../assets/images/project-cargo.webp";
import custombooking from "../../assets/images/custom-booking.jpg";
import warehouse from "../../assets/images/warehouse.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [ /* ... your services array remains same ... */ ];

function ServicesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean);

    if (cards.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${cards.length * 120}%`,   // slightly increased
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card, index) => {
      if (index === 0) return;

      tl.fromTo(
        card,
        { yPercent: 100, opacity: 0.8 },
        { yPercent: 0, opacity: 1, ease: "none" },
        `card-${index}`
      );

      if (index > 0) {
        tl.to(
          cards[index - 1],
          { scale: 0.95, opacity: 0, yPercent: -10, ease: "none" },
          `card-${index}`
        );
      }
    });

    return () => {
      // Better cleanup
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-max-container">
        {/* Your header grid remains same */}

        <div className="services-cards-stack-track">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-sticky-card-node"
              style={{ zIndex: services.length - index }}   // reversed z-index for better stacking
            >
              <div className={`service-card-body-canvas ${index % 2 !== 0 ? "is-reversed" : ""}`}>
                <div className="service-card-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-img"
                    loading="lazy"
                  />
                  <div className="service-card-center-shadow-mask" />
                </div>

                <div className="service-card-text-panel">
                  <h3 className="service-item-title">{service.title}</h3>
                  <p className="service-item-paragraph">{service.desc1}</p>
                  <p className="service-item-paragraph last-p">{service.desc2}</p>

                  <div className="service-tags-row-wrapper">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="service-capsule-tag">{tag}</span>
                    ))}
                  </div>

                  <button className="service-action-cta-btn">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;