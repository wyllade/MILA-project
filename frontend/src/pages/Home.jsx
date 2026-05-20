import { useState } from "react";
import "../styles/home.css";
import countries from "../data/countries";
import RegionSection from "../components/RegionSection";

function Home() {
  const [search, setSearch] = useState("");

  const filteredCountries = countries.map((region) => {
    const filteredItems = region.items.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );

    return {
      ...region,
      items: filteredItems
    };
  });

  return (
    <div className="home-container">
      <div className="search-wrapper">
        <input
          className="search-box"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        {filteredCountries.map((regionData) =>
          regionData.items.length > 0 ? (
            <RegionSection
              key={regionData.region}
              region={regionData.region}
              items={regionData.items}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Home;