import "../../index.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <p className="about-eyebrow">ABOUT</p>
          <h2 className="about-title">PENTA KUHL</h2>
        </div>
        <div className="about-right">
          <p className="about-text">
            At <strong>Pentakuhl</strong>, we specialize in providing durable, effective packaging
            solutions that maintain temperature <strong>stability</strong> during transit,{" "}
            <strong>protecting</strong> your valuable products. Our innovative designs cater to
            various industries, including pharmaceuticals, food, and biotechnology.
          </p>
        </div>
      </div>

      {/* Pelican BioThermal */}
      <div className="pelican-section">
        <div className="pelican-card">
          <div className="pelican-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="32,4 56,18 56,46 32,60 8,46 8,18" fill="none" stroke="#2a6b8a" strokeWidth="2"/>
              <text x="32" y="30" textAnchor="middle" fontSize="18" fill="#2a6b8a" fontWeight="bold">❄</text>
              <text x="32" y="46" textAnchor="middle" fontSize="10" fill="#2a6b8a">🧬</text>
            </svg>
          </div>
          <p className="pelican-brand">PELi BIOTHERMAL™</p>
        </div>
        <h3 className="pelican-heading">
          Authorized Distributors for Pelican BioThermal<sup>™</sup> Products
        </h3>
        <button className="pelican-btn">Read more</button>
      </div>
    </section>
  );
};

export default About;