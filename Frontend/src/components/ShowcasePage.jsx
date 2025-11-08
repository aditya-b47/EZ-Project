import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Local Assets
import underline from "../assets/storyBoard/underline.svg";
import PaperTape from "../assets/storyBoard/PaperTape.svg";
import LeftImage from "../assets/storyBoard/LeftImage.svg";
import MiddleImage from "../assets/storyBoard/MiddleImage.svg";
import RightImage from "../assets/storyBoard/RightImage.svg";
import FrameBorder from "../assets/storyBoard/FrameBorder.svg";

// Components
import PreviewLanding from "./PreviewLanding";

// Data for the polaroids
const showcaseData = [
  {
    id: 0,
    title: "Film Production",
    description: `Who says films are just an escape? We see them as a way to live many lives... V crafts: Documentaries, Corporate Videos, 2D/3D Animation Videos.`,
    svgImage: LeftImage,
    imageTitle: "Film Production",
  },
  {
    id: 1,
    title: "Branding",
    description: `A brand isn’t just what you see - it’s what you remember... V creates: Branding & Communication, Market Mapping, Content & Social Media Management, Rebranding.`,
    svgImage: MiddleImage,
    imageTitle: "Brand Identity",
  },
  {
    id: 2,
    title: "Art Curation",
    description: `Art isn’t meant to sit on distant walls - it’s meant to belong... V curates: Art Festivals, Live Performances, Community Events, Cultural Storytelling.`,
    svgImage: RightImage,
    imageTitle: "Art Curation",
  },
];

export default function ShowcasePage({ onPolaroidClick, onPolaroidHover }) {
  const [hoveredId, setHoveredId] = useState(null);

  const handlePolaroidClick = (polaroidData) => {
    onPolaroidClick(polaroidData);
  };

  const handlePolaroidHover = (polaroidData) => {
    if (onPolaroidHover) {
      onPolaroidHover(polaroidData);
    }
    setHoveredId(polaroidData.id);
  };
  
  const handlePolaroidHoverLeave = () => {
    setHoveredId(null);
  };

  return (
    <section
      className="relative min-h-screen bg-background flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{
        backgroundColor: "#FDD0C1",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="text-center mt-12 relative top-10">
          <h1 className="text-4xl font-halant mb-2">
            The storyboard reveals the breadth of our craft.
          </h1>
          <img
            src={underline}
            alt="underline"
            className="mx-auto"
            style={{ width: "878px", height: "28px" }}
          />
        </div>

        {/* Polaroids and Preview Container */}
        <div
          className="relative flex-grow flex items-center justify-center"
        >
          {/* Polaroid photoframes */}
          <div className="flex justify-center gap-8" onMouseLeave={() => setHoveredId(null)}>
            {showcaseData.map((feat, index) => (
              <div
                key={feat.id}
                className="relative" // Container for polaroid and its preview
                onMouseEnter={() => handlePolaroidHover(feat)}
                onMouseLeave={handlePolaroidHoverLeave}
              >
                <motion.div
                  className={`bg-white shadow-lg border border-gray-200 w-64 p-4 flex flex-col items-center ${
                    index === 0 ? "rotate-8" : index === 2 ? "-rotate-8" : ""
                  } transition-transform duration-300 cursor-pointer hover:scale-105`}
                  style={{ boxShadow: "0 8px 24px 0 rgb(0 0 0 / 0.07)" }}
                  onClick={() => handlePolaroidClick(feat)}
                >
                  <img
                    src={PaperTape}
                    alt="tape"
                    className={`absolute w-32 ${
                      index === 0
                        ? "-left-10 -top-7 -rotate-10"
                        : index === 1
                        ? "left-1/2 -translate-x-1/2 -top-6 rotate-3"
                        : "-right-8 -top-7 rotate-35"
                    } z-20`}
                  />
                  <img
                    src={feat.svgImage}
                    alt={feat.imageTitle}
                    className="w-full h-72 object-cover mb-3 relative z-10"
                  />
                  <div className="text-center font-serif text-lg mt-2">
                    {feat.title}
                  </div>
                </motion.div>

                {/* Animated Preview Panel */}
                <AnimatePresence>
                  {hoveredId === feat.id && (
                    <motion.div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <PreviewLanding id={hoveredId} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed lower border */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24"
        style={{
          backgroundImage: `url(${FrameBorder})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "bottom",
          zIndex: 50,
        }}
      />
    </section>
  );
}
