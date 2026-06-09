import { Link } from "react-router-dom";
import { FiHome, FiGlobe, FiInfo, FiUser, FiMail, FiGithub, FiExternalLink } from "react-icons/fi";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            <span className="m">M</span>
            <span className="i">I</span>
            <span className="l">L</span>
            <span className="a">A</span>
          </span>
          <p>Explore the world's living cultures — through art, food, history, and traditions.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Explore</h4>
            <Link to="/"><FiHome size={13} className="icon-mr" /> Home</Link>
            <Link to="/food"><FiGlobe size={13} className="icon-mr" /> Cuisine</Link>
            <Link to="/about"><FiInfo size={13} className="icon-mr" /> About</Link>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <Link to="/profile"><FiUser size={13} className="icon-mr" /> My Profile</Link>
            <Link to="/contact"><FiMail size={13} className="icon-mr" /> Contact Us</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://github.com/ifilsan266-afk/MILA-project" target="_blank" rel="noreferrer">
              <FiGithub size={13} className="icon-mr" /> GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FiExternalLink size={13} className="icon-mr" /> Twitter / X
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FiExternalLink size={13} className="icon-mr" /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MILA — World's Living Cultures. Built with ❤️ in Nairobi.</p>
      </div>
    </footer>
  );
}
