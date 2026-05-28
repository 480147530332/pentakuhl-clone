import React from 'react';
import '../../index.css';

const CertificatesSection = () => {
  const reviews = [
    {
      id: 1,
      logo: "https://logowik.com/content/uploads/images/lufthansa-cargo3879.logowik.com.webp",
      alt: "Lufthansa Cargo",
      text: "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market.",
      author: "Frank Naeve",
      role: "Vice President Asia Pacific"
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Logo_Sun_Pharmaceutical.png",
      alt: "Sun Pharma",
      text: "We highly regard Penta Freight's professionalism and knowledge in the freight field. Their team takes the work load and worry off our shoulders. For about two decades we have been satisfied by the flexible, reliable and trustworthy service and excellent quality of work. One key feature that Penta Freight portrays is that they understand our needs and put their best efforts in making things possible.",
      author: "Makarand Sane",
      role: "General Manager Head - Export Logistics"
    },
    {
      id: 3,
      logo: "https://media.knowde.com/image/upload/f_auto,q_auto/v1629292327/production/Brand/23999/logo/image",
      alt: "Watson Pharmaceuticals",
      text: "Penta Freight has been one of our export LSP's for several years and our experience with them has been consistently good. Besides having strong relationships with airlines to obtain competitive rates, Penta Freight has the ability to get things done in a compliant manner. In addition, an excellent service level and professional relationship was maintained throughout the course of export operations.",
      author: "Ryan Veigas",
      role: "Vice President - Supply Chain & Procurement"
    }
  ];

  return (
    <section className="testimonial-section-container">
      <div className="testimonial-grid-wrapper">
        
        {/* LEFT COLUMN: STAYS STATIC / STICKY */}
        <div className="left-sticky-column">
          <div className="sticky-content-box">
            <div className="pill-badge">
              <span className="pill-dot"></span>
              <span className="pill-text">Reviews</span>
            </div>
            <h2 className="section-title">
              Hear From Our Satisfied <span className="text-muted">Clients Worldwide.</span>
            </h2>
            <p className="section-description">
              Explore what industry leaders and long-term partners say about our commitment to excellence and innovation.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: SCROLLS UP */}
        <div className="right-scrolling-column">
          <div className="testimonials-masonry-grid">
            {reviews.map((review, index) => (
              <div 
                key={review.id} 
                className={`testimonial-card card-position-${index + 1}`}
              >
                <div className="card-logo-wrapper">
                  <img src={review.logo} alt={review.alt} className="partner-logo" />
                </div>
                <p className="card-quote">“{review.text}”</p>
                <div className="card-footer">
                  <h3 className="author-name">{review.author}</h3>
                  <p className="author-role">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CertificatesSection;