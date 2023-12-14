import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <div>
          <Link className="nav-logo" to="/">
            <div className="logo-name">the garden</div>
            <p>RESTAURANT AND BAR</p>
          </Link>
        </div>

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
