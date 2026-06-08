import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCultures } from "../services/api";
import "../styles/home.css";

const heroImages = [
  "https://images.unsplash.com/photo-1539650116574-75c0c6d73f2f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80",
];

const CONTINENT_MAP = {
  "Africa": "Africa",
  "America": "Americas",
  "Asia": "Asia",
  "Europe": "Europe",
  "Oceania": "Oceania",
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [heroIdx] = useState(Math.floor(Math.random() * heroImages.length));
  const [cultures, setCultures] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCultures() {
      try {
        const data = await getCultures();
        setCultures(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchCultures();
  }, []);

  const grouped = cultures.reduce((acc, c) => {
    const region = CONTINENT_MAP[c.continent] || c.continent;
    if (!acc[region]) acc[region] = [];
    acc[region].push(c);
    return acc;
  }, {});

  const allCultures = cultures.map(c => ({ name: c.name, id: c.id }));
  const filtered = search
    ? allCultures.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    : null;

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="home-hero" style={{ backgroundImage: `url(${heroImages[heroIdx]})` }}>
        <div className="home-hero-overlay">
          <div className="home-hero-content">
            <span className="home-tag">✦ {cultures.length || 195} Cultures · Global Heritage</span>
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

      {loading ? (
        <section className="region-section" style={{ padding: "60px 0", textAlign: "center", color: "#888" }}>
          <p>Loading cultures...</p>
        </section>
      ) : (
        <>
          {/* SEARCH RESULTS */}
          {filtered && (
            <section className="search-results">
              <div className="section-container">
                <h2>{filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{search}"</h2>
                <div className="country-grid">
                  {filtered.map((c, i) => (
                    <CountryCard key={i} name={c.name} navigate={navigate} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FEATURED REGIONS */}
          {!filtered && Object.entries(grouped).map(([region, items]) => (
            <section key={region} className="region-section">
              <div className="section-container">
                <div className="section-header">
                  <h2>{region}</h2>
                  <span className="section-count">{items.length} cultures</span>
                </div>
                <div className="country-grid">
                  {items.map((c, i) => (
                    <CountryCard key={i} name={c.name} navigate={navigate} />
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* STATS BANNER */}
          {!filtered && (
            <section className="stats-banner">
              <div className="stat-item"><span className="stat-num">{cultures.length}</span><span className="stat-label">Countries</span></div>
              <div className="stat-item"><span className="stat-num">5</span><span className="stat-label">Continents</span></div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

function CountryCard({ name, navigate }) {
  return (
    <div className="c-card" onClick={() => navigate(`/country/${name}`)}>
      <div className="c-card-body" style={{ padding: "20px", textAlign: "center" }}>
        <h3 className="c-card-name" style={{ margin: 0 }}>{name}</h3>
        <span className="c-card-explore">Explore →</span>
      </div>
    </div>
  );
}
