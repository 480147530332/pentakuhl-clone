import React from 'react';
import '../../index.css';

const Certifications = () => {
  // Array of your certification logos
  const certificates = [
    { id: 1, name: "Fiata", src: "http://fiata.org/imgs/fiata.svg" },
    { id: 2, name: "IATA", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/IATAlogo.svg/1280px-IATAlogo.svg.png" }, // Replace with your exact asset paths
    { id: 3, name: "ISO", src: "https://img.magnific.com/premium-vector/iso-international-organization-standardization-logo-vector_1166422-961.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 4, name: "FFI", src: "https://www.kangaroologistics.co.in/wp-content/uploads/2019/05/ffi-logo.jpg" },
    { id: 5, name: "ACFI", src: "https://www.acfi.in/wp-content/uploads/al_opt_content/IMAGE/www.acfi.in/wp-content/uploads/2020/08/ACFI-LOGO.png.bv_resized_mobile.png.bv.webp?bv_host=www.acfi.in" }
  ];

  // We duplicate the array to ensure a perfect seamless visual loop gap transition
  const extendedCertificates = [...certificates, ...certificates, ...certificates];

  return (
    <section className="certifications-section-container">
      <div className="certifications-content-wrapper">
        
        {/* Header Block */}
        <h2 className="certifications-main-title">Certifications</h2>
        <p className="certifications-sub-text">
          Certified excellence, ensuring compliance, quality, and global logistics reliability.
        </p>

        {/* Marquee Viewport Rail */}
        <div className="marquee-viewport-rail">
          <div className="marquee-track-motion">
            {extendedCertificates.map((cert, index) => (
              <div key={`${cert.id}-${index}`} className="certification-card-node">
                <div className="image-rendering-canvas">
                  <img 
                    src={cert.src} 
                    alt={cert.name} 
                    className="actual-certificate-logo" 
                    onError={(e) => {
                      // Fallback placeholder formatting if an image fails to resolve
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<span class="fallback-text-label">${cert.name}</span>`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;