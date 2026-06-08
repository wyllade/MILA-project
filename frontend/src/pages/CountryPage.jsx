import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCultureById } from "../services/api";
import countries from "../data/countries";
import "../styles/country.css";

export default function CountryPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [cultureData, setCultureData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  const countryInfo = countries
    .flatMap((r) => r.items)
    .find((c) => c.name.toLowerCase() === name.toLowerCase());

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

  const tabs = ["overview", "food", "art", "history", "traditions"];

  return (
    <div className="country-page">
      <div
        className="country-hero"
        style={{ backgroundImage: `url(${countryInfo?.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"})` }}
      >
        <div className="country-hero-overlay">
          <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
          <div className="country-hero-content">
            <h1 className="country-hero-name">{name}</h1>
            {countryInfo?.landmark && (
              <p className="country-hero-landmark">📍 {countryInfo.landmark}</p>
            )}
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
                  <div className="overview-grid">
                    <div className="overview-card">
                      <span className="overview-icon">🌍</span>
                      <span className="overview-label">Region</span>
                      <span className="overview-value">{cultureData.country.region || "—"}</span>
                    </div>
                    <div className="overview-card">
                      <span className="overview-icon">👥</span>
                      <span className="overview-label">Population</span>
                      <span className="overview-value">{cultureData.country.population?.toLocaleString() || "—"}</span>
                    </div>
                    <div className="overview-card">
                      <span className="overview-icon">🗣️</span>
                      <span className="overview-label">Languages</span>
                      <span className="overview-value">{cultureData.country.languages ? Object.values(cultureData.country.languages).join(", ") : "—"}</span>
                    </div>
                    <div className="overview-card">
                      <span className="overview-icon">💰</span>
                      <span className="overview-label">Currency</span>
                      <span className="overview-value">{cultureData.country.currencies ? Object.values(cultureData.country.currencies).map(c => c.name).join(", ") : "—"}</span>
                    </div>
                  </div>
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
