import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="m">M</span>
        <span className="i">I</span>
        <span className="l">L</span>
        <span className="a">A</span>
      </Link>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/food" onClick={() => setMenuOpen(false)}>Cuisine</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        {token && <NavLink to="/profile" onClick={() => setMenuOpen(false)}>My Profile</NavLink>}
      </nav>

      <div className="header-actions">
        {token ? (
          <button className="header-profile-btn" onClick={() => navigate("/profile")}>
            <span className="header-avatar">{(localStorage.getItem("username") || "U")[0].toUpperCase()}</span>
          </button>
        ) : (
          <>
            <button className="header-signin" onClick={() => navigate("/")}>Sign In</button>
            <button className="header-cta" onClick={() => navigate("/")}>Get Started</button>
          </>
        )}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
