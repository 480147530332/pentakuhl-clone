import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footprint from '../components/Footprint';
import '../../index.css';
import cta from '../../assets/images/cta.jpeg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const industriesData = [
  { id: 1, title: 'Pharmaceuticals', icon: '💊', desc: 'The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.' },
  { id: 2, title: 'Chemicals', icon: '🧪', desc: 'We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience.' },
  { id: 3, title: 'Textiles', icon: '🧵', desc: 'We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services.' },
  { id: 4, title: 'Energy', icon: '⚡', desc: 'As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy.' },
  { id: 5, title: 'Automobile', icon: '🚗', desc: 'Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network.' },
  { id: 6, title: 'Packaging', icon: '📦', desc: 'The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers.' },
  { id: 7, title: 'Time Critical Cargo', icon: '⏱️', desc: 'We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo.' },
  { id: 8, title: 'Glassware', icon: '🍷', desc: 'Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise.' },
  { id: 9, title: 'Electronics', icon: '💻', desc: 'We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands.' }
];

const faqData = [
  { q: "What industries do you serve?", a: "We serve various industries including pharmaceuticals, chemicals, energy, packaging, textiles, and more, offering tailored logistics solutions for each." },
  { q: "How do you handle temperature-sensitive shipments?", a: "We provide temperature-controlled solutions to ensure the safe transport of sensitive goods, especially for the pharmaceutical industry." },
  { q: "What sets your logistics apart?", a: "We offer customized, transparent solutions with competitive rates and a deep understanding of unique global regulatory compliances." },
  { q: "How do you ensure compliance with regulations?", a: "We comply with international guidelines, working closely with authorities to provide a smooth, fully authorized clearance process." }
];

export default function IndustriesPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  
  const scrollTrackRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  // Split data into 2 tracks for the side-by-side sliding effect
  const leftColumnData = industriesData.filter((_, i) => i % 2 === 0);
  const rightColumnData = industriesData.filter((_, i) => i % 2 !== 0);

  useEffect(() => {
    // 1. Sticky Navbar scroll handler
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // 2. GSAP ScrollTrigger Matrix for Cross-sliding cards
    const ctx = gsap.context(() => {
      // Left column slides up at speed A
      gsap.fromTo(leftColRef.current, 
        { y: 150 },
        {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: scrollTrackRef.current,
            start: "top bottom", 
            end: "bottom top",   
            scrub: 1.2,
          }
        }
      );

      // Right column slides up faster/differently to create the moving offset
      gsap.fromTo(rightColRef.current, 
        { y: 400 },
        {
          y: -300,
          ease: "none",
          scrollTrigger: {
            trigger: scrollTrackRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        }
      );
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert(); // Clean up GSAP triggers on unmount
    };
  }, []);

  return (
    <div className="page-wrapper">
      {/* 1. STICKY NAVBAR */}
    

      {/* 2. HERO HEADER */}
      <section className="hero-section">
        <h1>INDUSTRIES</h1>
        <p className="hero-sub">
          Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
        </p>
      </section>

      {/* 3. SCROLL-DRIVEN INTERLOCKING COLUMNS */}
      <section className="scroll-container-wrapper" ref={scrollTrackRef}>
        <div className="twin-scroll-grid">
          
          {/* Left Track */}
          <div className="scroll-column left-column" ref={leftColRef}>
            {leftColumnData.map((item) => (
              <div key={item.id} className="pf-card">
                <div className="pf-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Track */}
          <div className="scroll-column right-column" ref={rightColRef}>
            {rightColumnData.map((item) => (
              <div key={item.id} className="pf-card">
                <div className="pf-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FAQ ACCORDION */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.</p>
          </div>
          <div className="faq-right">
            {faqData.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-toggle-icon">{openFaq === i ? '✕' : '▼'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PARALLAX CALL TO ACTION */}
    <section className="cta-banner" style={{ position: 'relative', height: '400px', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* 2. Direct Image Tag playing the role of a background */}
      <img 
        src={cta} 
        alt="CTA Background" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the image crops beautifully like background-size: cover
          zIndex: 1
        }}
      />
      
      {/* 3. Dark Overlay (Optional - makes text easier to read) */}
      <div className="cta-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 2 }}></div>
      
      {/* 4. Text Content Container */}
      <div className="cta-content" style={{ position: 'relative', zIndex: 3, color: '#ffffff', textAlign: 'center', padding: '0 20px' }}>
        <h2>Tailored Logistics for Every Industry</h2>
        <p>Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.</p>
        <button className="cta-btn">Contact Us Today</button>
      </div>

    </section>

<div>

            <Footprint/>
</div>
     
    </div>
  );
}