import React, { useEffect } from "react";
import "./visuals.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Visuals = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    
    window.addEventListener('load', AOS.refresh);

    return () => {
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);

  return (
    <div className="visual">
      <div className="textv" data-aos="fade-up">
        <h1>OUR MODEL</h1>
      </div>
      <div className="imagev">
        <img src="https://i.ibb.co/yBq5CXk/Whats-App-Image-2024-10-24-at-2-25-03-AM.jpg" alt="" data-aos="zoom-in" />
        <img src="https://i.ibb.co/2q7CXdt/Whats-App-Image-2024-10-24-at-2-24-48-AM.jpg" alt="" data-aos="fade-up" />
        <img src="https://i.ibb.co/RvK6VrX/Whats-App-Image-2024-10-24-at-2-25-05-AM.jpg" alt="" data-aos="fade-up" />
        <img src="https://i.ibb.co/5nJGm3P/Whats-App-Image-2024-10-24-at-2-24-49-AM-2.jpg" alt="" data-aos="fade-up" />
        <img src="https://i.ibb.co/K9snkLB/Whats-App-Image-2024-10-24-at-2-25-03-AM-2.jpg" alt="" data-aos="fade-up" />
        <img src="https://i.ibb.co/gvDDqWX/Whats-App-Image-2024-10-24-at-2-25-05-AM-1.jpg" alt="" data-aos="fade-up" />
      </div>
    </div>
  );
};

export default Visuals;
