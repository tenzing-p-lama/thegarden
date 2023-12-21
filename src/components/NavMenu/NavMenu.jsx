import React from "react";
import "./NavMenu.scss";

const NavMenu = ({ isOpen, children }) => {
  return (
    <div className={`full-screen-overlay ${isOpen ? "open" : ""}`}>
      <div className="overlay-content">{children}</div>
    </div>
  );
};

export default NavMenu;
