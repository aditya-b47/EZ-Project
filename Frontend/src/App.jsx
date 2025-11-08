import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";
import ContactForm from "./components/ContactForm";
import Hero from "./components/hero";
import Navbar from "./components/NavBar";
import VFilmsLanding from "./components/VFilmsLanding";
import ShowcasePage from "./components/ShowcasePage";
import AboutTeam from "./components/AboutTeam/AboutTeam";
import Aboutus from "./components/AboutUs";

function AppContent() {
  const [activePolaroid, setActivePolaroid] = useState(null);
  const [hoveredPolaroid, setHoveredPolaroid] = useState(null);
  const [isHoverActivated, setIsHoverActivated] = useState(false); // To manage hover delay
  const hoverTimeoutRef = useRef(null);

  const handlePolaroidClick = (polaroidData) => {
    setActivePolaroid(polaroidData);
  };

  const handlePolaroidHover = (polaroidData) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Set a timeout to delay the hover effect for better UX
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredPolaroid(polaroidData);
      setIsHoverActivated(true);
    }, 300); // 300ms delay on hover
  };

  const handlePolaroidHoverLeave = () => {
    // Clear the timeout when mouse leaves
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHoverActivated(false);
    setHoveredPolaroid(null);
  };

  const handleBackToShowcase = () => {
    // Clear any pending timeouts when going back
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActivePolaroid(null);
    setIsHoverActivated(false);
    setHoveredPolaroid(null);
  };

  // Determine which component to show
  const shouldShowVFilmsLanding = activePolaroid || (isHoverActivated && hoveredPolaroid);

  return (
    <div
      className="min-h-screen w-full overflow-hidden relative"
      style={{
        backgroundColor: '#FFFFFF',
        backgroundImage: `
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='%23FDD0C1' opacity='1'/%3E%3C/svg%3E"),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='texture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23texture)' opacity='0.5'/%3E%3C/svg%3E")
        `
      }}
    >
      {/* Showcase Page */}
      <motion.div
        key="showcase"
        initial={{ opacity: 1 }}
        animate={{ opacity: shouldShowVFilmsLanding ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0"
        onMouseLeave={handlePolaroidHoverLeave}
      >
        <ShowcasePage 
          onPolaroidClick={handlePolaroidClick} 
          onPolaroidHover={handlePolaroidHover}
        />
      </motion.div>

      {/* VFilms Landing - Only show when clicked or hovered */}
      <AnimatePresence>
        {(activePolaroid || (isHoverActivated && hoveredPolaroid)) && (
          <motion.div
            key="vfilms"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <VFilmsLanding 
              polaroidData={activePolaroid || hoveredPolaroid} 
              onBackClick={handleBackToShowcase} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <Navbar />
        <AppContent />
        <Hero/>
      </>
    </Router>
    
  );
}

export default App;

