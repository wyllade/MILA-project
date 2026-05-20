import CountryCard from "./CountryCard";
import "../styles/region.css";

function RegionSection({ region, items }) {
  return (
    <div className="region-section">
      <h2 className="region-title">{region}</h2>
      <div className="region-grid">
        {items.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
}

export default RegionSection;