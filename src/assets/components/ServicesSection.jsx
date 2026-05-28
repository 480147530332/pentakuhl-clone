import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your media assets
import airImg from "../../assets/images/air.webp";
import seaImg from "../../assets/images/sea.jpeg";
import multiImg from "../../assets/images/multi.webp";
import projectcargo from "../../assets/images/project-cargo.webp";
import custombooking from "../../assets/images/custom-booking.jpg";
import warehouse from "../../assets/images/warehouse.jpg";

import "../../index.css"; 

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Air Freight",
    image: airImg,
    desc1: "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.",
    desc2: "Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and transit time with on-demand pickup, drop-off, and warehousing.",
    tags: ["Speed", "Efficiency", "Reliability", "Affordability"],
  },
  {
    title: "Sea Freight",
    image: seaImg,
    desc1: "Affordable global sea freight solutions with flexible shipping schedules. We handle complete container loads and port operations smoothly worldwide.",
    desc2: "Our reliable sea route networks maximize efficiency while securing cost-saving transport values for businesses looking for large-scale multi-port shipments.",
    tags: ["Scalable", "Affordable", "Global", "Secure"],
  },
  {
    title: "Multi Modal Transport",
    image: multiImg,
    desc1: "Integrated transport solutions optimizing transitions across multiple transportation modes efficiently without delays.",
    desc2: "We tie together logistics across air, sea, and land channels seamlessly, creating modern streamlined cargo handling end-to-end.",
    tags: ["Integrated", "Flexible", "Modern", "Efficient"],
  },
  {
    title: "Project Cargo",
    image: projectcargo,
    desc1: "Integrated transport solutions optimizing transitions across multiple transportation modes efficiently without delays.",
    desc2: "We tie together logistics across air, sea, and land channels seamlessly, creating modern streamlined cargo handling end-to-end.",
    tags: ["Integrated", "Flexible", "Modern", "Efficient"],
  },
  {
    title: "Custom Broking",
    image: custombooking,
    desc1: "Integrated transport solutions optimizing transitions across multiple transportation modes efficiently without delays.",
    desc2: "We tie together logistics across air, sea, and land channels seamlessly, creating modern streamlined cargo handling end-to-end.",
    tags: ["Integrated", "Flexible", "Modern", "Efficient"],
  },
  {
    title: "Transit Warehouse and Fleet",
    image: warehouse,
    desc1: "Comprehensive warehousing services with state-of-the-art facilities and advanced inventory management systems.",
    desc2: "Our strategically located warehouses provide secure storage and efficient order fulfillment for your business needs.",
    tags: ["Secure", "Efficient", "Strategic", "Advanced"],
  },
];

function ServicesSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    cards.forEach((card, index) => {
      if (index === 0) return;

      tl.fromTo(
        card,
        {
          yPercent: 100,
          opacity: 0.8,
        },
        {
          yPercent: 0,
          opacity: 1,
          ease: "none",
        },
        `card-${index}`
      );

      if (index > 0) {
        tl.to(
          cards[index - 1],
          {
            scale: 0.95,
            opacity: 0,
            yPercent: -10,
            ease: "none",
          },
          `card-${index}`
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-max-container">
        
        <div className="services-header-grid">
          <div className="services-header-left">
            <div className="services-tag-pill">
              <span className="services-tag-dot" />
              Services
            </div>
            <h2 className="services-main-title">
              Seamless Solutions for
              <br />
              <span className="services-title-muted">Every Logistics Need</span>
            </h2>
          </div>
          
          <div className="services-header-right">
            <p className="services-header-right-desc">
              Tailored logistics solutions for timely, cost-effective deliveries across air, sea, and multimodal transport.
            </p>
          </div>
        </div>

        <div className="services-cards-stack-track" ref={trackRef}>
          {services.map((service, index) => {
            const isEvenCard = index % 2 !== 0;
            
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="service-sticky-card-node"
                style={{ zIndex: index + 1 }}
              >
                <div className={`service-card-body-canvas ${isEvenCard ? "is-reversed" : ""}`}>
                  
                  {/* IMAGE CONTAINER */}
                  <div className="service-card-image-wrapper">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-card-img"
                    />
                    {/* The dynamic blur mask wrapper */}
                    <div className="service-card-center-shadow-mask" />
                  </div>

                  {/* TEXT PANEL */}
                  <div className="service-card-text-panel">
                    <h3 className="service-item-title">{service.title}</h3>
                    <p className="service-item-paragraph">{service.desc1}</p>
                    <p className="service-item-paragraph last-p">{service.desc2}</p>

                    <div className="service-tags-row-wrapper">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="service-capsule-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="service-action-cta-btn">Read More</button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;