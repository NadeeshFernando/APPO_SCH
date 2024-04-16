import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link component
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>DIABETES IS DANGEROUS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          to="/getStart"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          to="/watchVideo"
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
        >
          Watch Video <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
