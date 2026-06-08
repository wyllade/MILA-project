import { useEffect } from "react";
import { FiGlobe, FiBookOpen, FiHeart, FiLayers, FiCode, FiLayout, FiServer, FiCheckCircle } from "react-icons/fi";
import "../styles/about.css";

const TEAM_ICONS = [FiCode, FiLayout, FiServer, FiCheckCircle];

export default function About() {
  useEffect(() => { document.title = "About — MILA"; }, []);

  const team = [
    { name: "Amina W.", role: "Frontend UI/Design", icon: FiLayout, desc: "Crafts beautiful, responsive layouts and ensures every pixel has purpose." },
    { name: "Carlos M.", role: "Frontend Logic", icon: FiCode, desc: "Handles state management, API integrations, and smooth user interactions." },
    { name: "Priya K.", role: "Backend/API", icon: FiServer, desc: "Builds the Flask API, data services, and ensures reliable server-side performance." },
    { name: "James O.", role: "QA + Deployment", icon: FiCheckCircle, desc: "Testing, bug squashing, and keeping deployments running smoothly." },
  ];

  const values = [
    { icon: FiGlobe, title: "Cultural Respect", desc: "We present every culture with accuracy, depth, and dignity." },
    { icon: FiBookOpen, title: "Education First", desc: "Learning should be engaging, not boring. We make it fun." },
    { icon: FiHeart, title: "Inclusivity", desc: "Every corner of the globe deserves to be celebrated." },
    { icon: FiLayers, title: "Beautiful Design", desc: "We believe great design makes learning more memorable." },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-content">
          <span className="about-tag">Our Story</span>
          <h1>Built by curious minds,<br />for curious minds</h1>
          <p>MILA is a platform born from a simple idea — the world is full of incredible cultures, and everyone deserves to explore them.</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-container">
          <h2>Our Mission</h2>
          <p className="mission-text">
            We built MILA to bridge the gap between cultures through education, storytelling, and interactive learning. 
            From the streets of Nairobi to the temples of Kyoto — every culture has a story worth telling.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-container">
          <h2>What We Stand For</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <v.icon size={36} className="value-icon" />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="about-container">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar-wrap">
                  <m.icon size={28} />
                </div>
                <h3>{m.name}</h3>
                <span className="team-role">{m.role}</span>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
