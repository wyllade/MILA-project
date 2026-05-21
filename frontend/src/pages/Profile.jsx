import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("progress");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/"); return; }

    async function fetchProfile() {
      const headers = { Authorization: `Bearer ${token}` };
      try {
        const [uRes, pRes, fRes] = await Promise.all([
          fetch("/api/user/profile", { headers }),
          fetch("/api/user/progress", { headers }),
          fetch("/api/user/favorites", { headers }),
        ]);
        const uData = await uRes.json();
        const pData = await pRes.json();
        const fData = await fRes.json();
        setUser(uData.user || uData);
        setProgress(pData.progress || []);
        setFavorites(fData.favorites || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [navigate]);

  function handleSignOut() {
    localStorage.removeItem("token");
    navigate("/");
  }

  const completed = progress.filter(p => p.completed).length;
  const topics = [...new Set(progress.map(p => p.culture_id))].length;

  if (loading) return (
    <div className="profile-loading">
      <div className="profile-spinner" />
      <p>Loading your profile...</p>
    </div>
  );

  if (!user) return null;

  return (
    <div className="profile-page">
      {/* BANNER */}
      <div className="profile-banner">
        <div className="profile-banner-bg" />
        <div className="profile-banner-content">
          <div className="profile-avatar">
            {user.username?.[0]?.toUpperCase() || "U"}
          </div>
          <div className="profile-identity">
            <h1>{user.username}</h1>
            <p>{user.email}</p>
            <span className="profile-joined">
              Joined {new Date(user.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
          </div>
          <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>

      {/* STATS */}
      <div className="profile-stats">
        <div className="pstat">
          <span className="pstat-num">{topics}</span>
          <span className="pstat-label">Cultures Explored</span>
        </div>
        <div className="pstat">
          <span className="pstat-num">{completed}</span>
          <span className="pstat-label">Topics Completed</span>
        </div>
        <div className="pstat">
          <span className="pstat-num">{favorites.length}</span>
          <span className="pstat-label">Favourites</span>
        </div>
        <div className="pstat">
          <span className="pstat-num">{progress.length}</span>
          <span className="pstat-label">Total Activities</span>
        </div>
      </div>

      {/* TABS */}
      <div className="profile-tabs-wrap">
        <div className="profile-tabs">
          {["progress", "favorites"].map(t => (
            <button key={t} className={`ptab ${activeTab === t ? "active" : ""}`} onClick={() => setActiveTab(t)}>
              {t === "progress" ? "📊 My Progress" : "❤️ Favourites"}
            </button>
          ))}
        </div>

        <div className="profile-tab-content">
          {activeTab === "progress" && (
            <div className="progress-section fade-in">
              {progress.length === 0 ? (
                <div className="empty-state">
                  <span>🌍</span>
                  <h3>No progress yet</h3>
                  <p>Start exploring cultures to track your learning journey!</p>
                  <button onClick={() => navigate("/")} className="explore-btn">Start Exploring</button>
                </div>
              ) : (
                <div className="progress-list">
                  {progress.map((p, i) => (
                    <div key={i} className="progress-item" onClick={() => navigate(`/country/${p.culture_id}`)}>
                      <div className="progress-info">
                        <h3>{p.culture_id.charAt(0).toUpperCase() + p.culture_id.slice(1)}</h3>
                        <span className="progress-topic">{p.topic}</span>
                      </div>
                      <span className={`progress-badge ${p.completed ? "done" : "pending"}`}>
                        {p.completed ? "✅ Completed" : "🔄 In Progress"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "favorites" && (
            <div className="favorites-section fade-in">
              {favorites.length === 0 ? (
                <div className="empty-state">
                  <span>❤️</span>
                  <h3>No favourites yet</h3>
                  <p>Explore cultures and save your favourites here!</p>
                  <button onClick={() => navigate("/")} className="explore-btn">Start Exploring</button>
                </div>
              ) : (
                <div className="favorites-list">
                  {favorites.map((f, i) => (
                    <div key={i} className="favorite-item">
                      <span className="fav-type">{f.favorite_type}</span>
                      <span className="fav-id">{f.external_id}</span>
                      <span className="fav-date">{new Date(f.created_at).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
