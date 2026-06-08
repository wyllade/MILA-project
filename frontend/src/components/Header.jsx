import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getUsername } from "../services/api";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

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
        {isAuthenticated && <NavLink to="/profile" onClick={() => setMenuOpen(false)}>My Profile</NavLink>}
      </nav>

      <div className="header-actions">
        {isAuthenticated ? (
          <button className="header-profile-btn" onClick={() => navigate("/profile")}>
            <span className="header-avatar">{(getUsername() || "U")[0].toUpperCase()}</span>
          </button>
        ) : (
          <>
            <button className="header-signin" onClick={() => navigate("/login")}>Sign In</button>
            <button className="header-cta" onClick={() => navigate("/signup")}>Get Started</button>
          </>
        )}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
