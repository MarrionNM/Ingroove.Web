import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

import { useEffect, useState } from 'react';
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import LoginPage from "./pages/LoginPage";

import HubDashboard from "./pages/Dashboard/HubDashboard";
import HubsPage from "./pages/Dashboard/HubsPage";
import EventsPage from "./pages/Dashboard/EventsPage";
import WalletPage from "./pages/Dashboard/WalletPage";
import ReportsPage from "./pages/Dashboard/ReportsPage";

function App() {
  const [darkMode, setDarkMode] = useState(true); // default dark theme

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-backgroundColor_Dark text-text_Dark">
        {/* Header */}
        <Header />

        {/* Main content with padding top so it's not hidden behind the fixed header */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Hub Dashboard */}
            <Route path="/dashboard" element={<HubDashboard />}>
              <Route index element={<Navigate to="hubs" replace />} />
              <Route path="hubs" element={<HubsPage />} />
              <Route path="events" element={<EventsPage />} />
              <Route path="reports" element={<ReportsPage />} />
              <Route path="wallet" element={<WalletPage />} />
            </Route>

          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
