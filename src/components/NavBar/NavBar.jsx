import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar({ onFooterVisibilityChange }) {
  const [isFooterHalfwayVisible, setFooterHalfwayVisible] = useState(false);

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
          <p>RESTAURANT AND BAR</p>
        </Link>

        <div className="nav-hamburger">
          <a
            href="/menu"
            className={`nav-hamburger__item ${
              isFooterHalfwayVisible ? "footer-halfway-visible" : ""
            }`}
          >
            MENU
          </a>

          <a
            href="/contact"
            className={`nav-hamburger__item ${
              isFooterHalfwayVisible ? "footer-halfway-visible" : ""
            }`}
          >
            CONTACT
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
