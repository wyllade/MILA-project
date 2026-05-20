import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="m">M</span>
        <span className="i">I</span>
        <span className="l">L</span>
        <span className="a">A</span>
      </div>

      <nav className="nav">
        <NavLink to="/" end>HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
        <NavLink to="/profile">PROFILE</NavLink>
      </nav>
    </header>
  );
}

export default Header;