import { Link } from "react-router-dom";
import { FiHome, FiGlobe, FiInfo, FiUser, FiMail, FiGithub, FiExternalLink } from "react-icons/fi";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            <span style={{ color: "#C9733D" }}>M</span>
            <span style={{ color: "#65784D" }}>I</span>
            <span style={{ color: "#8C684B" }}>L</span>
            <span style={{ color: "#5C8D89" }}>A</span>
          </span>
          <p>Explore the world's living cultures — through art, food, history, and traditions.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Explore</h4>
            <Link to="/"><FiHome size={13} style={{ marginRight: 6 }} /> Home</Link>
            <Link to="/food"><FiGlobe size={13} style={{ marginRight: 6 }} /> Cuisine</Link>
            <Link to="/about"><FiInfo size={13} style={{ marginRight: 6 }} /> About</Link>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <Link to="/profile"><FiUser size={13} style={{ marginRight: 6 }} /> My Profile</Link>
            <Link to="/contact"><FiMail size={13} style={{ marginRight: 6 }} /> Contact Us</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://github.com/ifilsan266-afk/MILA-project" target="_blank" rel="noreferrer">
              <FiGithub size={13} style={{ marginRight: 6 }} /> GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FiExternalLink size={13} style={{ marginRight: 6 }} /> Twitter / X
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FiExternalLink size={13} style={{ marginRight: 6 }} /> Instagram
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
