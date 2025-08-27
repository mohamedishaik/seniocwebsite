import React, { useState } from "react";
import "./Materials.scss";

const Materials = () => {
  const [showFact, setShowFact] = useState(false);

  return (
    <section id="materials" className="materials">
      <div className="materials-card">
        <h2 className="materials-title">What We Use ?</h2>
        <p className="materials-desc">
          We specialize in creating versatile polybags designed to contain,
          protect, and transport a wide range of goods. Our products are made
          using high-quality materials with distinct properties to meet various needs.
        </p>

        <h3 className="materials-subtitle">Key Materials</h3>
        <div className="materials-grid">
          <div className="material-card">
            <h4 className="material-name">Low-Density Polyethylene (LDPE)</h4>
            <p>
              Flexible, lightweight, and puncture-resistant. Ideal for
              general-purpose bags, food packaging, and garment bags.
            </p>
          </div>
          <div className="material-card">
            <h4 className="material-name">Linear Low-Density Polyethylene (LLDPE)</h4>
            <p>
              Superior tensile strength and puncture resistance compared to LDPE,
              making it the perfect choice for heavy-duty applications.
            </p>
          </div>
        </div>

        {/* 👇 Button */}
        <button className="did-you-know-btn" onClick={() => setShowFact(true)}>
          Did You Know ?
        </button>

        {/* 👇 Extraordinary Modal */}
        {showFact && (
          <div className="fact-overlay" onClick={() => setShowFact(false)}>
            <div
              className="fact-modal"
              onClick={(e) => e.stopPropagation()} // prevent closing on inner click
            >
              <h3 className="fact-title">A Canadian Story</h3>
              <p className="fact-text">
                Did you know that the journey of <b>LDPE resin</b> in Canada begins with natural gas? 
               
                Ethane, a key component of natural gas, is transformed into <b>ethylene</b>—the essential ingredient for LDPE. 
               
                This process typically takes place at petrochemical facilities in <b>Alberta</b> and <b>Ontario</b>.
              </p>
              <button className="fact-close" onClick={() => setShowFact(false)}>
                Close ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Materials;
