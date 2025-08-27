import React, { useState } from "react";
import "./Header.scss";
import {
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../assets/PNG/Website-Favicon-Color.png";



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const products = [
    { title: "Poly Tubing Rolls"},
    { title: "Clear Poly Bags"},
    { title: "Gusseted Bags"},
     { title: "Custom Printed Bags"},
     { title: "Custom Boutique Bags"},
    { title: "Butterfly Hole Bags" },
     { title: "Punch Hole Bags"}, 
   
  ];

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="SENIOC Logo" className="logo-img" />
        <h1 className="logo-text">SENIOC</h1>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={menuOpen ? "nav open" : "nav"}>
        <ul>
          <li>
            <a href="#hero"><FaHome className="nav-icon" /> Home</a>
          </li>
          <li>
            <a href="#about"><FaInfoCircle className="nav-icon" /> About Us</a>
          </li>

          {/* Products Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#services">
              <FaBoxOpen className="nav-icon" /> Products
            </a>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                {products.map((product, index) => (
                  <li key={index}>
                    <a href="#services">{product.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <a href="#contact"><FaPhoneAlt className="nav-icon" /> Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
