import React from "react";
import "./navbar.css"
const Navbar = () =>{
    return(
        <nav className="navbar">
        <div className="logo">
          <img src="https://i.ibb.co/3pbkQt5/walklogoo-removebg-preview.png" alt="Logo" />
        </div>
        <div className="lists">
        <ul className="nav-links">
          <li>About Us</li>
          <li>Contact</li>
          <li>Models</li>
          <li>Academy</li>
        </ul>
        </div>

      </nav>
    )
}

export default Navbar