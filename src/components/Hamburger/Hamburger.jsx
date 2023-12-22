import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ isOpen, onClick, isFooterHalfwayVisible, hamburger }) => {
  return (
    <>
      <div className="hamburger" onClick={onClick}>
        {isOpen ? (
          <>
            <div
              className={`burger burger1 ${
                isFooterHalfwayVisible && !hamburger
                  ? "footer-halfway-visible"
                  : ""
              }`}
              style={{ transform: isOpen ? "rotate(25deg)" : "rotate(0)" }}
            ></div>
            <div
              className={`burger burger2 ${
                isFooterHalfwayVisible && !hamburger
                  ? "footer-halfway-visible"
                  : ""
              }`}
              style={{ transform: isOpen ? "rotate(-25deg)" : "rotate(0)" }}
            ></div>
          </>
        ) : (
          <>
            <div
              className={`burger ${
                isFooterHalfwayVisible && !hamburger
                  ? "footer-halfway-visible"
                  : ""
              }`}
            ></div>
            <div
              className={`burger ${
                isFooterHalfwayVisible && !hamburger
                  ? "footer-halfway-visible"
                  : ""
              }`}
            ></div>
          </>
        )}
      </div>
    </>
  );
};

export default Hamburger;
