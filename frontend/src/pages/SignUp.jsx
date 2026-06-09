import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signup, login } from "../services/api";
import "../styles/auth.css";

export default function SignUp() {
  useEffect(() => { document.title = "Sign Up — MILA"; }, []);

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
          <h1 className="auth-title">Join MILA</h1>
          <p className="auth-subtitle">Create your account and start exploring</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input className="form-input" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} placeholder="Choose a username" required />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="At least 6 characters" required />
          </div>
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input className="form-input" type="password" value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} placeholder="Repeat your password" required />
          </div>
          <button type="submit" className="form-btn" disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
