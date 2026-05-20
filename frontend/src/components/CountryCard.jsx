import { useNavigate } from "react-router-dom";
import "../styles/cards.css";

function CountryCard({ country }) {
  const navigate = useNavigate();

  return (
    <div className="country-card" onClick={() => navigate(`/country/${country.name}`)}>
      <div className="country-image-wrapper">
        <img className="country-image" src={country.image} alt={country.landmark || country.name} />
        <div className="country-image-overlay">
          <span className="landmark-badge">📍 {country.landmark}</span>
        </div>
      </div>
      <div className="country-info">
        <div className="country-name">{country.name}</div>
        <div className="country-landmark">{country.landmark}</div>
      </div>
    </div>
  );
}

export default CountryCard;
