import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProfile, getProgress, getFavorites, logout, getToken } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { FiUser, FiMail, FiCalendar, FiLogOut, FiGlobe, FiStar, FiHeart, FiActivity, FiCheckCircle, FiClock, FiArrowRight } from "react-icons/fi";
import "../styles/profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const { logout: authLogout } = useAuth();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("progress");

  useEffect(() => { document.title = "My Profile — MILA"; }, []);

  useEffect(() => {
    const token = getToken();
    if (!token) { navigate("/login"); return; }

    async function fetchProfile() {
      try {
        const [uData, pData, fData] = await Promise.all([
          getProfile(),
          getProgress(),
          getFavorites(),
        ]);
        setUser(uData);
        setProgress(pData);
        setFavorites(fData);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [navigate]);

  function handleSignOut() {
    logout();
    authLogout();
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
      <div className="profile-banner">
        <div className="profile-banner-bg" />
        <div className="profile-banner-content">
          <div className="profile-avatar">
            {user.username?.[0]?.toUpperCase() || "U"}
          </div>
          <div className="profile-identity">
            <h1>
              <FiUser size={20} style={{ marginRight: 8, verticalAlign: "middle", opacity: 0.6 }} />
              {user.username}
            </h1>
            <p>
              <FiMail size={14} style={{ marginRight: 6, verticalAlign: "middle", opacity: 0.5 }} />
              {user.email}
            </p>
            <span className="profile-joined">
              <FiCalendar size={14} style={{ marginRight: 6, verticalAlign: "middle" }} />
              Joined {new Date(user.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
          </div>
          <button className="signout-btn" onClick={handleSignOut}>
            <FiLogOut size={16} style={{ marginRight: 6, verticalAlign: "middle" }} /> Sign Out
          </button>
        </div>
      </div>

      <div className="profile-stats">
        <div className="pstat">
          <FiGlobe size={22} className="pstat-icon" />
          <span className="pstat-num">{topics}</span>
          <span className="pstat-label">Cultures Explored</span>
        </div>
        <div className="pstat">
          <FiCheckCircle size={22} className="pstat-icon" />
          <span className="pstat-num">{completed}</span>
          <span className="pstat-label">Completed</span>
        </div>
        <div className="pstat">
          <FiHeart size={22} className="pstat-icon" />
          <span className="pstat-num">{favorites.length}</span>
          <span className="pstat-label">Favourites</span>
        </div>
        <div className="pstat">
          <FiActivity size={22} className="pstat-icon" />
          <span className="pstat-num">{progress.length}</span>
          <span className="pstat-label">Activities</span>
        </div>
      </div>

      <motion.div
        className="profile-tabs-wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="profile-tabs">
          {["progress", "favorites"].map(t => (
            <button
              key={t}
              className={`ptab ${activeTab === t ? "active" : ""}`}
              onClick={() => setActiveTab(t)}
            >
              {t === "progress" ? (
                <>                  <FiStar size={16} className="icon-mr" /> My Progress</>
              ) : (
                <><FiHeart size={16} className="icon-mr" /> Favourites</>
              )}
            </button>
          ))}
        </div>

        <div className="profile-tab-content">
          {activeTab === "progress" && (
            <div className="progress-section fade-in">
              {progress.length === 0 ? (
                <div className="empty-state">
                  <FiGlobe size={48} style={{ color: "#f5a623" }} />
                  <h3>No progress yet</h3>
                  <p>Start exploring cultures to track your learning journey!</p>
                  <button onClick={() => navigate("/")} className="explore-btn">Start Exploring</button>
                </div>
              ) : (
                <div className="progress-list">
                  {progress.map((p, i) => (
                    <div key={i} className="progress-item" onClick={() => navigate(`/country/${p.culture_id}`)}>
                      <div className="progress-info">
                        <h3>{p.culture_id.replace(/\b\w/g, c => c.toUpperCase())}</h3>
                        <span className="progress-topic">
                          <FiClock size={12} style={{ marginRight: 4, verticalAlign: "middle" }} />
                          {p.topic}
                        </span>
                      </div>
                      <span className={`progress-badge ${p.completed ? "done" : "pending"}`}>
                        {p.completed ? "Completed" : "In Progress"}
                        <FiArrowRight size={14} style={{ marginLeft: 6, verticalAlign: "middle" }} />
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
                  <FiHeart size={48} style={{ color: "#f5a623" }} />
                  <h3>No favourites yet</h3>
                  <p>Explore cultures and save your favourites here!</p>
                  <button onClick={() => navigate("/")} className="explore-btn">Start Exploring</button>
                </div>
              ) : (
                <div className="favorites-list">
                  {favorites.map((f, i) => (
                    <div key={i} className="favorite-item">
                      <FiHeart size={16} className="fav-icon" />
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
      </motion.div>
    </div>
  );
}
