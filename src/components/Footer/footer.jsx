import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-info">
                        <p className="description">Walkerolarry Models is dedicated to discovering and empowering the next generation of African modeling talent.</p>
                        <div className="contact">
                            <h4>Contact</h4>
                            <p>info@walkerolarrymodels.com</p>
                            <p>+234 801 234 5678</p>
                        </div>
                        <div className="menu">
                            <h4>Menu</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/academy">Academy</a></li>
                                <li><a href="/models">Models</a></li>
                                <li><a href="/contact">Get in Touch</a></li>
                                <li><a href="https://instagram.com/walkerolarrymodels">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
