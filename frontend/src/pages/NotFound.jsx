import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiCompass, FiArrowLeft } from "react-icons/fi";
import "../styles/notfound.css";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => { document.title = "404 — Page Not Found | MILA"; }, []);

  return (
    <div className="notfound-page">
      <FiCompass size={80} className="notfound-icon" />
      <h1 className="notfound-code">404</h1>
      <p className="notfound-text">Looks like you've wandered off the map.</p>
      <p className="notfound-sub">The page you're looking for doesn't exist or has moved.</p>
      <button onClick={() => navigate("/")} className="notfound-btn">
        <FiArrowLeft size={18} /> Back Home
      </button>
    </div>
  );
}
