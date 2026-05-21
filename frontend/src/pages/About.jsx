import "../styles/about.css";

export default function About() {
  const team = [
    { name: "Person 1", role: "Frontend UI/Design", emoji: "🎨", desc: "Crafts beautiful layouts and visual components." },
    { name: "Person 2", role: "Frontend Logic", emoji: "⚙️", desc: "Handles state management and API integrations." },
    { name: "Person 3", role: "Backend/API", emoji: "🛠️", desc: "Builds the Flask API and data services." },
    { name: "Person 4", role: "QA + Integration", emoji: "🔗", desc: "Testing, bug fixes, and deployment." },
  ];

  const values = [
    { icon: "🌍", title: "Cultural Respect", desc: "We present every culture with accuracy, depth, and dignity." },
    { icon: "📚", title: "Education First", desc: "Learning should be engaging, not boring. We make it fun." },
    { icon: "🤝", title: "Inclusivity", desc: "Every corner of the globe deserves to be celebrated." },
    { icon: "✨", title: "Beautiful Design", desc: "We believe great design makes learning more memorable." },
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
                <span className="value-icon">{v.icon}</span>
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
                <div className="team-avatar">{m.emoji}</div>
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
