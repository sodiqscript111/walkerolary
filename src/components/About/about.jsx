import React, { useEffect, useRef } from "react";
import "./about.css";

const About = () => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  // Function to split text into words and wrap each word in a span
  const splitWords = (element) => {
    const text = element.textContent; // Get the text content (instead of innerHTML)
    const words = text.split(" ");
    element.textContent = ""; // Clear the original text content

    // Create span for each word and append it to the element
    words.forEach((word) => {
      const span = document.createElement("span");
      span.classList.add("word");
      span.textContent = word; // Set the text inside the span
      element.appendChild(span);
      element.appendChild(document.createTextNode(" ")); // Add space after each word
    });
  };

  useEffect(() => {
    // Apply splitWords to h1 and h2
    if (h1Ref.current) splitWords(h1Ref.current);
    if (h2Ref.current) splitWords(h2Ref.current);

    // Intersection Observer callback for the animation
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const words = entry.target.querySelectorAll(".word");
          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add("reveal"); // Add the reveal class with a delay
            }, index * 200); // Delay each word
          });
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(callback, { threshold: 0.5 });

    // Observe h1 and h2
    if (h1Ref.current) observer.observe(h1Ref.current);
    if (h2Ref.current) observer.observe(h2Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="abouta">
      <div className="texta">
        <h1 ref={h1Ref}>ABOUT US</h1>
        <h2 ref={h2Ref}>Unveiling the Future of African Fashion</h2>
        <h3>
          <b>At Walkerolarry Models</b>, we are dedicated to discovering and
          empowering the next generation of African models. Our mission is to
          provide aspiring talents with the platform, resources, and mentorship
          they need to excel in the global fashion industry.
        </h3>
        <p>
          <b>Walkerolarry Models</b> is more than just a modeling agency; we are
          a gateway to success, where rising stars can thrive and make their
          mark on the international fashion stage.
        </p>
      </div>
      <div className="imagea">
        <img
          src="https://i.ibb.co/2q7CXdt/Whats-App-Image-2024-10-24-at-2-24-48-AM.jpg"
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default About;
