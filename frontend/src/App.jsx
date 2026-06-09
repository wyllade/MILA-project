import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import CountryPage from "./pages/CountryPage";
import FoodCuisine from "./pages/FoodCuisine";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error("React error:", error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 60, textAlign: "center", fontFamily: "sans-serif" }}>
          <h1 style={{ color: "#e84c2b" }}>Something went wrong</h1>
          <pre style={{ color: "#666", marginTop: 20, whiteSpace: "pre-wrap" }}>
            {this.state.error.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile" element={<Profile />} />
            <Route path="country/:name" element={<CountryPage />} />
            <Route path="food" element={<FoodCuisine />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;