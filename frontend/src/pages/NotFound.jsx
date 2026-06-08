import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiCompass, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => { document.title = "404 — Page Not Found | MILA"; }, []);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      background: "#faf7f2", padding: "32px"
    }}>
      <FiCompass size={80} style={{ color: "#f5a623", marginBottom: "24px" }} />
      <h1 style={{
        fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 10vw, 6rem)",
        fontWeight: 900, color: "#1a1a1a", marginBottom: "8px", lineHeight: 1
      }}>
        404
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#888", marginBottom: "8px" }}>
        Looks like you've wandered off the map.
      </p>
      <p style={{ fontSize: "0.95rem", color: "#aaa", marginBottom: "40px" }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <button
        onClick={() => navigate("/")}
        style={{
          background: "#1a1a1a", color: "#fff", border: "none",
          padding: "14px 36px", borderRadius: "30px", fontSize: "1rem",
          fontWeight: 700, cursor: "pointer", display: "inline-flex",
          alignItems: "center", gap: "8px", transition: "background 0.2s"
        }}
        onMouseEnter={e => e.currentTarget.style.background = "#f5a623"}
        onMouseLeave={e => e.currentTarget.style.background = "#1a1a1a"}
      >
        <FiArrowLeft size={18} /> Back Home
      </button>
    </div>
  );
}
