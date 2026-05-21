import { useState } from "react";
import { useNavigate } from "react-router-dom";
import countries from "../data/countries";
import "../styles/home.css";

const heroImages = [
  "https://images.unsplash.com/photo-1539650116574-75c0c6d73f2f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [heroIdx] = useState(Math.floor(Math.random() * heroImages.length));
  const navigate = useNavigate();

  const allCountries = countries.flatMap(r => r.items);
  const filtered = search
    ? allCountries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    : null;

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="home-hero" style={{ backgroundImage: `url(${heroImages[heroIdx]})` }}>
        <div className="home-hero-overlay">
          <div className="home-hero-content">
            <span className="home-tag">✦ 195 Cultures · 700+ Lessons</span>
            <h1 className="home-headline">
              Discover the<br />
              <em>Living Cultures</em><br />
              of the World
            </h1>
            <p className="home-subheadline">
              Explore traditions, history, art, food, and stories from every corner of the globe.
            </p>
            <div className="home-search-bar">
              <span className="search-icon">🔍</span>
              <input
                placeholder="Search any country..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH RESULTS */}
      {filtered && (
        <section className="search-results">
          <div className="section-container">
            <h2>{filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{search}"</h2>
            <div className="country-grid">
              {filtered.map((c, i) => (
                <CountryCard key={i} country={c} navigate={navigate} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURED REGIONS */}
      {!filtered && countries.map((region) => (
        <section key={region.region} className="region-section">
          <div className="section-container">
            <div className="section-header">
              <h2>{region.region}</h2>
              <span className="section-count">{region.items.length} cultures</span>
            </div>
            <div className="country-grid">
              {region.items.map((c, i) => (
                <CountryCard key={i} country={c} navigate={navigate} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* STATS BANNER */}
      {!filtered && (
        <section className="stats-banner">
          <div className="stat-item"><span className="stat-num">195</span><span className="stat-label">Countries</span></div>
          <div className="stat-item"><span className="stat-num">700+</span><span className="stat-label">Lessons</span></div>
          <div className="stat-item"><span className="stat-num">5</span><span className="stat-label">Continents</span></div>
          <div className="stat-item"><span className="stat-num">12k+</span><span className="stat-label">Learners</span></div>
        </section>
      )}
    </div>
  );
}

function CountryCard({ country, navigate }) {
  return (
    <div className="c-card" onClick={() => navigate(`/country/${country.name}`)}>
      <div className="c-card-img-wrap">
        <img src={country.image} alt={country.name} className="c-card-img" />
        <div className="c-card-gradient" />
        <span className="c-card-landmark">📍 {country.landmark}</span>
      </div>
      <div className="c-card-body">
        <h3 className="c-card-name">{country.name}</h3>
        <span className="c-card-explore">Explore →</span>
      </div>
    </div>
  );
}
