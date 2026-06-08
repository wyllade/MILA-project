import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signup, login } from "../services/api";

export default function SignUp() {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const data = await signup(form.username, form.email, form.password);
      if (data.error) {
        setError(data.error);
      } else {
        const loginData = await login(form.username, form.password);
        authLogin(loginData.user.username);
        navigate("/profile");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box"
  };

  const labelStyle = {
    color: "rgba(255,255,255,0.7)",
    fontSize: "0.82rem",
    fontWeight: 600,
    display: "block",
    marginBottom: "8px"
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #0b0e1a 0%, #1a1040 50%, #0b0e1a 100%)",
      padding: "24px"
    }}>
      <div style={{
        background: "#161b2e",
        borderRadius: "24px",
        padding: "48px 40px",
        width: "100%",
        maxWidth: "420px",
        border: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: "2.5rem", fontWeight: 900, letterSpacing: "-0.03em" }}>
            <span style={{ color: "#f5a623" }}>M</span>
            <span style={{ color: "#fff" }}>I</span>
            <span style={{ color: "#f5a623" }}>L</span>
            <span style={{ color: "#fff" }}>A</span>
          </span>
          <h1 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginTop: "24px", marginBottom: "8px" }}>Join MILA</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", margin: 0 }}>Create your account and start exploring</p>
        </div>

        {error && (
          <div style={{
            background: "rgba(255,77,77,0.1)",
            border: "1px solid rgba(255,77,77,0.3)",
            color: "#ff4d4d",
            padding: "12px 16px",
            borderRadius: "12px",
            fontSize: "0.88rem",
            marginBottom: "20px",
            textAlign: "center"
          }}>{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Username</label>
            <input value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} placeholder="Choose a username" required style={inputStyle} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Email</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" required style={inputStyle} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Password</label>
            <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="At least 6 characters" required style={inputStyle} />
          </div>
          <div style={{ marginBottom: "28px" }}>
            <label style={labelStyle}>Confirm Password</label>
            <input type="password" value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} placeholder="Repeat your password" required style={inputStyle} />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              background: loading ? "#555" : "#f5a623",
              color: loading ? "#999" : "#000",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer"
            }}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.88rem", textAlign: "center", marginTop: "28px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#f5a623", textDecoration: "none", fontWeight: 600 }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
}
