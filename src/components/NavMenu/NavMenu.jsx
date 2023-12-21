import React from "react";
import "./NavMenu.scss";

const NavMenu = ({ isOpen, children }) => {
  return (
    <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
      <div className="nav-overlay-content">{children}</div>
    </div>
  );
};

export default NavMenu;
