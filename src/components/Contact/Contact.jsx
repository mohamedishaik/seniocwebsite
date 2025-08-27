import React from "react";
import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-desc">
          We’d love to hear from you. Reach us through any of the channels below.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>9057828535 , 4163211328</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span className="infoSenioc">info@senioc.ca</span>
          </div>
        <div className="contact-item">
        <FaMapMarkerAlt className="contact-icon" />
        <span className="contact-address">
          225 NUGGET AVENUE, UNIT 5 <br />
          SCARBOROUGH, ONTARIO, M1S 3L2
        </span>
      </div>
          <div className="contact-item">
            <FaInstagram className="contact-icon" />
            <span>
               <a href="https://www.instagram.com/senioc_ca?igsh=bnFsODN6cW1iNWMw" className="contact-item">Senioc_ca</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
