import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";
import Hamburger from "../Hamburger/Hamburger";

function NavBar({ onFooterVisibilityChange }) {
  const location = useLocation();

  const [isFooterHalfwayVisible, setFooterHalfwayVisible] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById("footerId");

      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        const halfwayVisible =
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2;

        setFooterHalfwayVisible(halfwayVisible);
        onFooterVisibilityChange && onFooterVisibilityChange(halfwayVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onFooterVisibilityChange]);

  //hamburger
  const toggleHamburger = () => {
    setHamburger(!hamburger);
    setMenuItemsVisible(!menuItemsVisible);
  };

  useEffect(() => {
    setHamburger(false);
    setMenuItemsVisible(false);
  }, [location.pathname]);

  return (
    <div className="navbar">
      <nav className="nav">
        <Link
          className={`nav-logo ${
            isFooterHalfwayVisible ? "footer-halfway-visible" : ""
          }`}
          to="/"
        >
          <div className="logo-name">the garden</div>
          <p className="logo-restaurant">RESTAURANT AND BAR</p>
        </Link>

        <div onClick={toggleHamburger} className="nav-section">
          <div className={`nav-hamburger ${hamburger ? "open" : ""}`}>
            {menuItemsVisible && (
              <>
                <Link
                  to="/menu"
                  className={`nav-hamburger__item ${
                    isFooterHalfwayVisible ? "footer-halfway-visible" : ""
                  }`}
                >
                  MENU
                </Link>

                <Link
                  to="/contact"
                  className={`nav-hamburger__item ${
                    isFooterHalfwayVisible ? "footer-halfway-visible" : ""
                  }`}
                >
                  CONTACT
                </Link>
              </>
            )}
          </div>

          <Hamburger
            isOpen={hamburger}
            onClick={() => setHamburger(!hamburger)}
            isFooterHalfwayVisible={isFooterHalfwayVisible}
          />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
