import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCultures } from "../services/api";
import "../styles/home.css";

const featuredFoods = [
  { name: "Jollof Rice", country: "Nigeria", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80", desc: "West Africa's beloved one-pot rice dish." },
  { name: "Sushi", country: "Japan", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80", desc: "Japan's iconic vinegared rice with fish." },
  { name: "Tagine", country: "Morocco", image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=800&q=80", desc: "Slow-cooked North African stew." },
  { name: "Tacos", country: "Mexico", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80", desc: "Mexico's street food icon." },
  { name: "Biryani", country: "India", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80", desc: "Aromatic spiced rice with meat." },
  { name: "Croissant", country: "France", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80", desc: "France's buttery, flaky pastry." },
];

export default function FoodCuisine() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [cultures, setCultures] = useState([]);

  useEffect(() => {
    getCultures().then(setCultures).catch(console.error);
  }, []);

  const allCountries = cultures.map(c => ({ name: c.name }));
  const filtered = allCountries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ background: "#faf7f2", minHeight: "100vh" }}>
      <div style={{
        background: "linear-gradient(135deg, #2d1b00 0%, #5c3a00 50%, #8b5e00 100%)",
        padding: "100px 32px 80px", textAlign: "center", color: "#fff"
      }}>
        <span style={{
          display: "inline-block", background: "#f5a623", color: "#000",
          fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.15em",
          textTransform: "uppercase", padding: "6px 16px", borderRadius: "30px", marginBottom: "24px"
        }}>World Cuisine</span>
        <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", fontWeight: 900, margin: "0 0 20px", lineHeight: 1.1 }}>
          Taste the World
        </h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", maxWidth: "500px", margin: "0 auto 40px" }}>
          Every culture tells its story through food. Explore the flavours that define civilisations.
        </p>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 32px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "32px" }}>Featured Dishes</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px", marginBottom: "80px" }}>
          {featuredFoods.map((f, i) => (
            <div key={i} style={{
              borderRadius: "20px", overflow: "hidden", background: "#fff",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)", cursor: "pointer",
              transition: "transform 0.2s"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "none"}
              onClick={() => navigate(`/country/${f.country}`)}
            >
              <img src={f.image} alt={f.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "6px" }}>{f.name}</h3>
                <span style={{
                  display: "inline-block", background: "#fff3dc", color: "#b07800",
                  fontSize: "0.75rem", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", marginBottom: "10px"
                }}>{f.country}</span>
                <p style={{ color: "#777", fontSize: "0.9rem", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "16px" }}>Explore by Country</h2>
        <input
          placeholder="Search a country..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%", padding: "14px 20px", border: "2px solid #e8e0d5",
            borderRadius: "12px", fontSize: "1rem", background: "#fff",
            outline: "none", marginBottom: "32px", boxSizing: "border-box"
          }}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
          {filtered.map((c, i) => (
            <div key={i}
              onClick={() => navigate(`/country/${c.name}`)}
              style={{
                background: "#fff", borderRadius: "14px", overflow: "hidden",
                cursor: "pointer", border: "1px solid #e8e0d5", transition: "all 0.2s",
                padding: "20px 16px", textAlign: "center"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "#f5a623"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "#e8e0d5"; }}
            >
              <p style={{ fontWeight: 700, fontSize: "0.95rem", margin: 0 }}>{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
