import React, { useState } from "react";
import "./navbar.css";
import menu from "../../assets/menu.png";  // Importing menu icon
import close from "../../assets/close.png"; // Importing close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  const handleMenuToggle = () => {
    setIsOpen(!isOpen); // Toggle the menu open or closed
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://i.ibb.co/3pbkQt5/walklogoo-removebg-preview.png"
          alt="Logo"
        />
      </div>
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={handleMenuToggle}>
        {/* Menu icon (hamburger or close) */}
        <img
          src={isOpen ? close : menu} // Use imported image variables
          alt={isOpen ? "Close" : "Menu"}
          style={{ width: "30px", height: "30px" }} // Add size to ensure visibility
        />
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>About Us</li>
        <li>Contact</li>
        <li>Models</li>
        <li>Academy</li>
      </ul>
    </nav>
  );
};

export default Navbar;
