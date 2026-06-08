import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSent(true);
      } else {
        setError(data.error || "Failed to send message");
      }
    } catch (err) {
      setError("Network error — please try again later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Have a question, suggestion, or just want to say hello? We'd love to hear from you.</p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <h2>Contact Info</h2>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <strong>Email</strong>
              <p>hello@mila-cultures.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🌍</span>
            <div>
              <strong>Based in</strong>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💬</span>
            <div>
              <strong>Response Time</strong>
              <p>Within 24 hours</p>
            </div>
          </div>
          <div className="contact-socials">
            <a href="#" className="social-btn">Twitter</a>
            <a href="#" className="social-btn">Instagram</a>
            <a href="#" className="social-btn">GitHub</a>
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="sent-state">
              <span className="sent-icon">✅</span>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll get back to you soon.</p>
              <button onClick={() => setSent(false)} className="send-btn">Send Another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send a Message</h2>
              {error && <div className="form-error" style={{ color: "#ff4d4d", marginBottom: "16px", fontSize: "0.9rem" }}>{error}</div>}
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us what's on your mind..." rows={5} required />
              </div>
              <button type="submit" className="send-btn" disabled={loading}>{loading ? "Sending..." : "Send Message →"}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
