import { useState } from "react";

import "./App.css";
import ContactForm from "./components/ContactForm";
import Hero from "./components/hero";
import Navbar from "./components/NavBar";
import VFilmsLanding from "./components/VFilmsLanding";
import ShowcasePage from "./components/ShowcasePage";
import AboutTeam from "./components/AboutTeam/AboutTeam";
import Aboutus from "./components/AboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen"
        style={{
          backgroundColor: "#FFFFFF",
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='%23FDD0C1' opacity='0.8'/%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='texture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23texture)' opacity='0.15'/%3E%3C/svg%3E")
          `,
        }}
      >
        {/* <ContactForm/> */}
        <Hero />
        {/* <VFilmsLanding/> */}
        <ShowcasePage />
        <AboutTeam />
        <Aboutus />
      </div>
    </>
  );
}

export default App;
