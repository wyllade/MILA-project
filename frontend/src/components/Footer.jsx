import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            <span style={{color:"#C9733D"}}>M</span>
            <span style={{color:"#65784D"}}>I</span>
            <span style={{color:"#8C684B"}}>L</span>
            <span style={{color:"#5C8D89"}}>A</span>
          </span>
          <p>Explore the world's living cultures — through art, food, history, and traditions.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/food">Cuisine</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <Link to="/profile">My Profile</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="https://github.com/ifilsan266-afk/MILA-project" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MILA — World's Living Cultures. Built with ❤️ in Nairobi.</p>
      </div>
    </footer>
  );
}
