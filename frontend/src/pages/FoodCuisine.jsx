import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getCultures } from "../services/api";
import { getCountryByName, flagUrl } from "../data/countries";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import "../styles/food.css";

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
    document.title = "World Cuisine — MILA";
    getCultures().then(setCultures).catch(console.error);
  }, []);

  const allCountries = cultures.map(c => ({ name: c.name }));
  const filtered = allCountries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="food-page">
      <div className="food-hero">
        <span className="food-hero-tag">World Cuisine</span>
        <h1 className="food-hero-title">Taste the World</h1>
        <p className="food-hero-sub">
          Every culture tells its story through food. Explore the flavours that define civilisations.
        </p>
      </div>

      <div className="food-body">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="food-section-title">Featured Dishes</h2>
          <div className="food-featured-grid">
          {featuredFoods.map((f, i) => (
            <div
              key={i}
              className="food-featured-card"
              onClick={() => navigate(`/country/${f.country}`)}
            >
              <img src={f.image} alt={f.name} className="food-featured-img" />
              <div className="food-featured-info">
                <h3>{f.name}</h3>
                <span className="food-badge">{f.country}</span>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="food-section-title">Explore by Country</h2>
        <div className="food-search-wrap">
          <FiSearch size={18} className="food-search-icon" />
          <input
            className="food-search-input"
            placeholder="Search a country..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="food-country-grid">
          {filtered.map((c, i) => {
            const info = getCountryByName(c.name);
            return (
              <div
                key={i}
                className="food-country-card"
                onClick={() => navigate(`/country/${c.name}`)}
              >
                {info?.code && (
                  <img src={flagUrl(info.code)} alt="" className="food-country-flag" />
                )}
                <span className="food-country-name">{c.name}</span>
                <FiChevronRight className="food-country-arrow" size={16} />
              </div>
            );
          })}
        </div>
        </motion.div>
      </div>
    </div>
  );
}
