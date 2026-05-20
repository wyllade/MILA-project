import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Culture Explorer</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/food">Cuisine</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}