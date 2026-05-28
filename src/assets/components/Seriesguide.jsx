import { useState } from "react";
import "../../index.css";

const series = [
  {
    name: "SERIES 4",
    tempRange: "2°C - 8°C",
    usage: "Typically used for products that require refrigeration.",
    idealFor: "Ideal for vaccines, insulin, biologics, and other temperature-sensitive pharmaceuticals.",
  },
  {
    name: "SERIES 22",
    tempRange: "15°C - 25°C",
    usage: "Designed for ambient temperature products requiring controlled conditions.",
    idealFor: "Ideal for oral medicines, diagnostics, and general healthcare products.",
  },
  {
    name: "SERIES 20M",
    tempRange: "-20°C ± 5°C",
    usage: "Used for products requiring deep-refrigerated transport.",
    idealFor: "Suitable for frozen biologics, plasma, and specialty pharmaceuticals.",
  },
  {
    name: "SERIES 50M",
    tempRange: "-50°C ± 10°C",
    usage: "Designed for ultra-cold supply chain transport needs.",
    idealFor: "Ideal for cell and gene therapies, mRNA vaccines, and critical biologics.",
  },
];

const SeriesGuide = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="series-guide">
      <div className="series-inner">
        <p className="series-intro">
          This guide outlines temperature-controlled packaging solutions designed for the safe transport and
          storage of sensitive products, like vaccines and biologics, across various thermal conditions,
          from refrigerated to deep-freeze.
        </p>

        <div className="series-tabs">
          {series.map((s, i) => (
            <button
              key={s.name}
              className={`series-tab ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="series-content">
          <p className="series-row">
            <strong>Temperature Range:</strong> {series[active].tempRange}
          </p>
          <p className="series-row">
            <strong>Usage &amp; Applications:</strong> {series[active].usage}
          </p>
          <p className="series-row">
            <strong>Ideal For:</strong> {series[active].idealFor}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeriesGuide;