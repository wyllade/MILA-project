import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCultureById } from "../services/api";
import { getCountryByName, flagUrl } from "../data/countries";
import { FiHome, FiArrowLeft, FiMapPin, FiUsers, FiGlobe, FiDollarSign, FiClock, FiStar } from "react-icons/fi";
import "../styles/country.css";

const HERO_FALLBACK = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80";

const FUN_FACTS = {
  kenya: "Kenya is home to the Great Rift Valley, one of the most significant geological features on Earth.",
  egypt: "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years.",
  japan: "Japan has over 6,800 islands and the world's oldest monarchy dating back to 660 BC.",
  india: "India is the world's largest democracy and has 22 official languages.",
  france: "The Eiffel Tower was built for the 1889 World's Fair and was originally intended to be temporary.",
  brazil: "Brazil is home to the Amazon Rainforest, which produces 20% of the world's oxygen.",
  australia: "Australia has over 10,000 beaches — you could visit a new beach every day for 27 years.",
  nepal: "Nepal is home to Mount Everest, the world's highest peak at 8,848 meters.",
  peru: "Peru has 90% of the world's quinoa production and over 3,000 varieties of potato.",
  iceland: "Iceland has no army and is one of the most volcanically active countries on Earth.",
};

export default function CountryPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [cultureData, setCultureData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  const countryInfo = getCountryByName(name);
  const flagSrc = countryInfo?.code ? flagUrl(countryInfo.code) : null;

  useEffect(() => { document.title = `${name} — MILA`; }, [name]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCultureById(name.toLowerCase());
        setCultureData(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [name]);

  useEffect(() => { window.scrollTo(0, 0); }, [name]);

  const tabs = ["overview", "food", "art", "history", "traditions"];

  return (
    <div className="country-page">
      <div
        className="country-hero"
        style={{ backgroundImage: `url(${countryInfo?.image || HERO_FALLBACK})` }}
      >
        <div className="country-hero-overlay">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <FiArrowLeft size={18} style={{ marginRight: 6 }} /> Back
          </button>
          <div className="country-hero-content">
            <div className="country-hero-title-row">
              {flagSrc && <img src={flagSrc} alt={name} className="country-hero-flag" />}
              <div>
                <h1 className="country-hero-name">{name}</h1>
                {countryInfo?.landmark && (
                  <p className="country-hero-landmark">
                    <FiMapPin size={16} style={{ marginRight: 6, verticalAlign: "middle" }} />
                    {countryInfo.landmark}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="country-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "overview" && <FiHome size={14} style={{ marginRight: 6 }} />}
            {tab === "food" && "🍽 "}
            {tab === "art" && "🎨 "}
            {tab === "history" && "📜 "}
            {tab === "traditions" && "🏛 "}
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="country-content">
        {loading ? (
          <div className="loading-state">
            <div className="spinner" />
            <p>Discovering {name}...</p>
          </div>
        ) : (
          <>
            {activeTab === "overview" && (
              <div className="tab-panel fade-in">
                <h2>About {name}</h2>
                {cultureData?.country ? (
                  <>
                    <div className="quick-facts-bar">
                      {countryInfo?.capital && (
                        <div className="quick-fact">
                          <FiMapPin size={18} />
                          <span className="qf-label">Capital</span>
                          <span className="qf-value">{countryInfo.capital}</span>
                        </div>
                      )}
                      <div className="quick-fact">
                        <FiGlobe size={18} />
                        <span className="qf-label">Region</span>
                        <span className="qf-value">{cultureData.country.region || "—"}</span>
                      </div>
                      <div className="quick-fact">
                        <FiUsers size={18} />
                        <span className="qf-label">Population</span>
                        <span className="qf-value">{cultureData.country.population?.toLocaleString() || "—"}</span>
                      </div>
                      <div className="quick-fact">
                        <FiGlobe size={18} />
                        <span className="qf-label">Languages</span>
                        <span className="qf-value">{cultureData.country.languages ? Object.values(cultureData.country.languages).join(", ") : "—"}</span>
                      </div>
                      <div className="quick-fact">
                        <FiDollarSign size={18} />
                        <span className="qf-label">Currency</span>
                        <span className="qf-value">{cultureData.country.currencies ? Object.values(cultureData.country.currencies).map(c => c.name).join(", ") : "—"}</span>
                      </div>
                      <div className="quick-fact">
                        <FiClock size={18} />
                        <span className="qf-label">Timezone</span>
                        <span className="qf-value">{cultureData.country.timezones?.[0] || "—"}</span>
                      </div>
                    </div>

                    <div className="fun-fact-card">
                      <FiStar size={20} style={{ color: "#f5a623", flexShrink: 0 }} />
                      <div>
                        <strong>Did you know?</strong>
                        <p>{countryInfo?.funFact || FUN_FACTS[name.toLowerCase()] || `${name} has a rich and diverse cultural heritage spanning thousands of years.`}</p>
                      </div>
                    </div>

                    <div className="map-link-row">
                      <a
                        href={`https://www.google.com/maps/search/${encodeURIComponent(name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-link-btn"
                      >
                        <FiMapPin size={16} /> View on Google Maps
                      </a>
                    </div>
                  </>
                ) : (
                  <p className="no-data">No overview data available.</p>
                )}
              </div>
            )}

            {activeTab === "food" && (
              <div className="tab-panel fade-in">
                <h2>Cuisine of {name}</h2>
                {cultureData?.food?.meals?.length > 0 ? (
                  <div className="food-grid">
                    {cultureData.food.meals.slice(0, 8).map((meal, i) => (
                      <div key={i} className="food-card">
                        {meal.strMealThumb && (
                          <img src={meal.strMealThumb} alt={meal.strMeal} className="food-img" />
                        )}
                        <p className="food-name">{meal.strMeal}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-data">No cuisine data found for {name}.</p>
                )}
              </div>
            )}

            {activeTab === "art" && (
              <div className="tab-panel fade-in">
                <h2>Art & Culture</h2>
                {cultureData?.art?.data?.length > 0 ? (
                  <div className="art-grid">
                    {cultureData.art.data.slice(0, 6).map((piece, i) => (
                      <div key={i} className="art-card">
                        <p className="art-title">{piece.title}</p>
                        {piece.artist_title && <p className="art-artist">by {piece.artist_title}</p>}
                        {piece.date_display && <p className="art-date">{piece.date_display}</p>}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-data">No art data found for {name}.</p>
                )}
              </div>
            )}

            {activeTab === "history" && (
              <div className="tab-panel fade-in">
                <h2>History of {name}</h2>
                {cultureData?.history?.summary ? (
                  <p className="history-text">{cultureData.history.summary}</p>
                ) : (
                  <p className="no-data">No history data found for {name}.</p>
                )}
              </div>
            )}

            {activeTab === "traditions" && (
              <div className="tab-panel fade-in">
                <h2>Traditions & Heritage</h2>
                {cultureData?.traditions?.length > 0 ? (
                  <div className="traditions-list">
                    {cultureData.traditions.map((t, i) => (
                      <div key={i} className="tradition-card">
                        <h3>{t.title}</h3>
                        <p>{t.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-data">No traditions data found for {name}.</p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
