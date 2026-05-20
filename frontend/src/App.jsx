import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import CountryPage from "./pages/CountryPage";
import FoodCuisine from "./pages/FoodCuisine";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="country/:name" element={<CountryPage />} />
        <Route path="food" element={<FoodCuisine />} />
      </Route>
    </Routes>
  );
}

export default App;