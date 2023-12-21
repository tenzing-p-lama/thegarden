import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ isOpen, onClick, isFooterHalfwayVisible }) => {
  return (
    <>
      <div className="hamburger" onClick={onClick}>
        {isOpen ? (
          <>
            <div
              className={`burger burger1 ${
                isFooterHalfwayVisible ? "footer-halfway-visible" : ""
              }`}
              style={{ transform: isOpen ? "rotate(10deg)" : "rotate(0)" }}
            ></div>
            <div
              className={`burger burger3 ${
                isFooterHalfwayVisible ? "footer-halfway-visible" : ""
              }`}
              style={{ transform: isOpen ? "rotate(-10deg)" : "rotate(0)" }}
            ></div>
          </>
        ) : (
          <>
            <div
              className={`burger ${
                isFooterHalfwayVisible ? "footer-halfway-visible" : ""
              }`}
            ></div>
            <div
              className={`burger ${
                isFooterHalfwayVisible ? "footer-halfway-visible" : ""
              }`}
            ></div>
          </>
        )}
      </div>
    </>
  );
};

export default Hamburger;
