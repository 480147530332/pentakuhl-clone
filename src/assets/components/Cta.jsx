import "../../index.css";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-overlay" />
      <div className="cta-content">
        <h2 className="cta-title">Protecting What Matters Most</h2>
        <p className="cta-sub">
          Get in touch to ensure safe and temperature-stable transit for your sensitive products.
        </p>
        <button className="cta-btn">Contact Us Today</button>
      </div>
    </section>
  );
};

export default CTA;