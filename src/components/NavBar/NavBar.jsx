import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <div className="logo-name">the garden</div>
        <p>RESTAURANT AND BAR</p>
      </div>

      <div className="hamburger">
        <li>menu</li>
        <li>about</li>
      </div>
    </nav>
  );
}

export default NavBar;
