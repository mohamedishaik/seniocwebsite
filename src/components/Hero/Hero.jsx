import React from "react";
import "./Hero.scss";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>LEGACY OF TRUST AND INNOVATION</h1>
        <p>
          For over 40 years, SENIOC Plastics has delivered durable, sustainable, 
          and premium packaging solutions for industries worldwide.
        </p>
        <a href="#services" className="hero-btn">
          Explore Products <FaArrowRight className="btn-icon" />
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#about" className="scroll-down">
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Hero;
