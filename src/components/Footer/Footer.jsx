import React, { useState, useEffect } from "react";
import "./Footer.scss";

function Footer({ onFooterVisibilityChange }) {
  const [isHalfwayVisible, setHalfwayVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById("footerId");
      const logoJapElement = document.getElementById("logoJapId");

      if (footerElement && logoJapElement) {
        const rect = footerElement.getBoundingClientRect();
        const halfwayVisible =
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2;

        setHalfwayVisible(halfwayVisible);
        onFooterVisibilityChange && onFooterVisibilityChange(halfwayVisible); // Notify parent component if the callback is provided

        logoJapElement.classList.toggle("halfway-visible", halfwayVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onFooterVisibilityChange]);

  useEffect(() => {
    if (isHalfwayVisible) {
      document.body.classList.add("halfway-visible");
    } else {
      document.body.classList.remove("halfway-visible");
    }
  }, [isHalfwayVisible]);

  return (
    <footer id="footerId" className="footer">
      <div className="footer-left">
        <div className="footer-section">
          <h4 className="title">THE GARDEN</h4>

          <p className="address">1108 Cortelyou Rd, Brooklyn, NY 11218, USA</p>

          <p className="tel">Tel +13473652968</p>
        </div>

        <div className="footer-section">
          <div className="desc__text-hours">
            <p className="desc__text-hours_day">Monday</p>
            <p className="dec__text-content">Closed</p>
          </div>

          <div className="desc__text-hours">
            <p className="desc__text-hours_day">Tuesday</p>
            <p className="dec__text-content">12pm - 10pm</p>
          </div>

          <div className="desc__text-hours">
            <p className="desc__text-hours_day">Wednesday</p>
            <p className="dec__text-content">12pm - 10pm</p>
          </div>

          <div className="desc__text-hours">
            <p className="desc__text-hours_day">Thursday</p>
            <p className="dec__text-content">12pm - 10pm</p>
          </div>

          <div className="desc__text-hours">
            <p className="desc__text-hours_day">Friday</p>
            <p className="dec__text-content">12pm - 10pm</p>
          </div>

          <div className="desc__text-hours">
            <p className="desc__text-hours_day">Saturday</p>
            <p className="dec__text-content">12pm - 10pm</p>
          </div>

          <div className="desc__text-hours">
            <p className="desc__text-hours_day">Sunday</p>
            <p className="dec__text-content">12pm - 10pm</p>
          </div>
        </div>

        <div className="footer-section">
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-section">
          <a
            href="https://www.instagram.com/thegardenatditmas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

        <p className="copyright">©TheGardenAtDitmas</p>
      </div>

      <div className="footer-right">
        <div className="logo-jap" id="logoJapId">
          庭
        </div>
        <div className="logo-name">the garden</div>
      </div>
    </footer>
  );
}

export default Footer;
