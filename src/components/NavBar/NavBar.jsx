import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import useIntersectionObserver from "../ScrollObserver/useIntersectionObserver";

function NavBar({ onFooterVisibilityChange }) {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    onFooterVisibilityChange && onFooterVisibilityChange(isIntersecting);
  }, [isIntersecting, onFooterVisibilityChange]);

  // const navRef = useRef(null);
  // const [isFooterHalfwayVisible, setFooterHalfwayVisible] = useState(false);

  // useEffect(() => {
  //   const handleIntersect = (entries) => {
  //     const halfwayVisible = entries[0].isIntersecting;
  //     setFooterHalfwayVisible(halfwayVisible);
  //   };

  //   const observer = new IntersectionObserver(handleIntersect, {
  //     threshold: 0.5,
  //   });

  //   if (navRef.current) {
  //     observer.observe(navRef.current);
  //   }

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <div className={`navbar ${isIntersecting ? "footer-halfway-visible" : ""}`}>
      <nav className="nav" ref={targetRef}>
        <Link className="nav-logo" to="/">
          <div className="logo-name">the garden</div>
          <p>RESTAURANT AND BAR</p>
        </Link>

        <div className="nav-hamburger">
          <a href="/" className="nav__menu">
            MENU
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
