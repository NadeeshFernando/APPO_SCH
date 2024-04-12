import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import { Button } from "./Button";
import "./NAV.css";

function NAV() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobioeMenue = () => setClick(false);
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
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobioeMenue}>
          ARTIFICIAL INTELLIGENCE <i className="fab fa-typo3" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active " : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMobioeMenue}>
              What is Diabetes?
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Diabetes"
              className="nav-link"
              onClick={closeMobioeMenue}
            >
              Diabetes Predict System
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobioeMenue}
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {button && <Button buttonStyle="btns">What is Diabetes?</Button>}
      </div>
    </nav>
  );
}

export default NAV;
