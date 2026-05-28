import { useState } from "react";
import "../../index.css";

const faqs = [
  {
    q: "What is Penta Kuhl?",
    a: "Penta Kuhl is an innovative logistics solution that integrates technology to provide seamless temperature-controlled transport across the globe, ensuring product integrity.",
  },
  {
    q: "How does Penta Kuhl ensure cargo safety?",
    a: "We use advanced temperature-monitoring systems, certified packaging, and trained personnel to ensure cargo remains within specified temperature ranges throughout its journey.",
  },
  {
    q: "What types of cargo can Penta Kuhl handle?",
    a: "We handle pharmaceuticals, biologics, vaccines, food products, chemicals, and other temperature-sensitive products across various industries.",
  },
  {
    q: "Is there customer support available for Penta Kuhl users?",
    a: "Yes, our dedicated customer support team is available to assist you with any queries 24/7 across all our major India and USA locations.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-left">
          <h2 className="faq-title">
            Frequently Asked <span className="faq-highlight">Questions</span>
          </h2>
          <p className="faq-sub">
            Explore our frequently asked questions to gain clarity about Penta Kuhl's
            services and features.
          </p>
        </div>

        <div className="faq-right">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq-icon">{open === i ? "▲" : "▾"}</span>
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;