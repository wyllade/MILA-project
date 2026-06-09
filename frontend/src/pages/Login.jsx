import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login } from "../services/api";
import "../styles/auth.css";

export default function Login() {
  useEffect(() => { document.title = "Sign In — MILA"; }, []);

  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await login(form.username, form.password);
      if (data.access_token) {
        authLogin(data.user.username);
        navigate("/profile");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-box">
        <div className="auth-logo">
          <span className="auth-logo-text">
            <span className="auth-logo-m">M</span>
            <span className="auth-logo-i">I</span>
            <span className="auth-logo-l">L</span>
            <span className="auth-logo-a">A</span>
          </span>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to continue exploring cultures</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="form-btn"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/signup" className="auth-link">Get Started</Link>
        </p>
      </div>
    </div>
  );
}
