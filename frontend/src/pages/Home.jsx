import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getCultures } from "../services/api";
import regionData, { getCountryByName, flagUrl } from "../data/countries";
import { FiSearch, FiX, FiGlobe, FiStar, FiArrowRight } from "react-icons/fi";
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

const CONTINENTS = ["Africa", "Asia", "Europe", "Americas", "Oceania", "Middle East", "South Asia", "Caribbean & Central America"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [heroIdx] = useState(Math.floor(Math.random() * heroImages.length));
  const [cultures, setCultures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { document.title = "MILA — World's Living Cultures"; }, []);
  const [filterContinent, setFilterContinent] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const localCultures = regionData.flatMap(r =>
    r.items.map(c => ({
      name: c.name,
      id: c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      continent: r.region,
    }))
  );

  const activeCultures = cultures.length > 0 ? cultures : localCultures;

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

  const grouped = activeCultures.reduce((acc, c) => {
    const region = CONTINENT_MAP[c.continent] || c.continent;
    if (!acc[region]) acc[region] = [];
    acc[region].push(c);
    return acc;
  }, {});

  const allCultures = activeCultures.map(c => ({ name: c.name, id: c.id, continent: c.continent }));

  const searchResults = search
    ? allCultures
        .filter(c => {
          const match = c.name.toLowerCase().includes(search.toLowerCase());
          if (!filterContinent) return match;
          return match && (CONTINENT_MAP[c.continent] === filterContinent || c.continent === filterContinent);
        })
        .slice(0, 20)
    : null;

  function handleKeyDown(e) {
    if (!searchResults || searchResults.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx(prev => Math.min(prev + 1, searchResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx(prev => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && selectedIdx >= 0) {
      navigate(`/country/${searchResults[selectedIdx].name}`);
    } else if (e.key === "Escape") {
      setSearch("");
      setShowFilters(false);
    }
  }

  function clearSearch() {
    setSearch("");
    setSelectedIdx(-1);
    searchRef.current?.focus();
  }

  return (
    <div className="home-page">
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${heroImages[heroIdx]})` }}
      >
        <div className="home-hero-overlay">
          <div className="home-hero-content">
            <span className="home-tag">
              <FiGlobe size={14} style={{ marginRight: 6, verticalAlign: "middle" }} />
              {activeCultures.length} Cultures · Global Heritage
            </span>
            <h1 className="home-headline">
              Discover the<br />
              <em>Living Cultures</em><br />
              of the World
            </h1>
            <p className="home-subheadline">
              Explore traditions, history, art, food, and stories from every corner of the globe.
            </p>

            <div className="home-search-wrapper">
              <div className="home-search-bar">
                <FiSearch size={18} className="search-icon" />
                <input
                  ref={searchRef}
                  placeholder="Search any country..."
                  value={search}
                  onChange={e => { setSearch(e.target.value); setSelectedIdx(-1); }}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setShowFilters(true)}
                />
                {search && (
                  <button className="search-clear" onClick={clearSearch}>
                    <FiX size={18} />
                  </button>
                )}
              </div>

              {searchResults && searchResults.length > 0 && (
                <div className="search-dropdown">
                  {searchResults.map((c, i) => {
                    const info = getCountryByName(c.name);
                    return (
                      <div
                        key={c.id}
                        className={`search-result-item ${i === selectedIdx ? "selected" : ""}`}
                        onClick={() => navigate(`/country/${c.name}`)}
                        onMouseEnter={() => setSelectedIdx(i)}
                      >
                        {info?.code && (
                          <img src={flagUrl(info.code)} alt="" className="sr-flag" />
                        )}
                        <div className="sr-info">
                          <span className="sr-name">{c.name}</span>
                          <span className="sr-continent">{c.continent}</span>
                        </div>
                        <FiArrowRight className="sr-arrow" />
                      </div>
                    );
                  })}
                </div>
              )}

              {searchResults && searchResults.length === 0 && (
                <div className="search-dropdown search-empty">
                  <FiSearch size={20} />
                  <p>No countries found for "{search}"</p>
                  <span>Try a different name or check spelling</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {!loading && !search && (
        <div className="continent-bar">
          <div className="continent-filters">
            <button
              className={`filter-chip ${!filterContinent ? "active" : ""}`}
              onClick={() => setFilterContinent("")}
            >
              All
            </button>
            {CONTINENTS.map(cont => (
              <button
                key={cont}
                className={`filter-chip ${filterContinent === cont ? "active" : ""}`}
                onClick={() => setFilterContinent(cont)}
              >
                {cont}
              </button>
            ))}
          </div>
        </div>
      )}

      {loading ? (
        <section className="region-section" style={{ padding: "60px 0", textAlign: "center" }}>
          <p>Loading cultures...</p>
        </section>
      ) : (
        <>
          {!search && Object.entries(grouped)
            .filter(([region]) => !filterContinent || region === filterContinent)
            .map(([region, items], ri) => (
            <motion.section
              key={region}
              className="region-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: ri * 0.08 }}
            >
              <div className="section-container">
                <div className="section-header">
                  <h2>
                    <FiGlobe size={20} className="icon-mr icon-saffron" />
                    {region}
                  </h2>
                  <span className="section-count">{items.length} cultures</span>
                </div>
                <div className="country-grid">
                  {items.map((c, i) => (
                    <CountryCard key={i} name={c.name} navigate={navigate} />
                  ))}
                </div>
              </div>
            </motion.section>
          ))}

          {!search && (
            <motion.section
              className="stats-banner"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="stat-item">
                <FiGlobe size={28} className="icon-saffron" />
                <span className="stat-num">{activeCultures.length}</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-item">
                <FiStar size={28} className="icon-saffron" />
                <span className="stat-num">5</span>
                <span className="stat-label">Continents</span>
              </div>
            </motion.section>
          )}
        </>
      )}
    </div>
  );
}

function CountryCard({ name, navigate }) {
  const info = getCountryByName(name);
  return (
    <div
      className="c-card"
      onClick={() => navigate(`/country/${name}`)}
      style={{
        background: info?.image
          ? `linear-gradient(rgba(11,14,26,0.7), rgba(11,14,26,0.9)), url(${info.image}) center/cover`
          : "#161b2e",
      }}
    >
      <div className="c-card-body">
        {info?.code && (
          <img src={flagUrl(info.code)} alt="" className="c-card-flag" />
        )}
        <h3 className="c-card-name">{name}</h3>
        {info?.landmark && (
          <span className="c-card-landmark">
            <FiMapPin size={12} style={{ marginRight: 4 }} />
            {info.landmark}
          </span>
        )}
      </div>
    </div>
  );
}
