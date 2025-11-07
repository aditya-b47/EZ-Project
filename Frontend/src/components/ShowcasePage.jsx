import React from "react";
import underline from "../assets/storyBoard/underline.svg";
import PaperTape from "../assets/storyBoard/PaperTape.svg";
import LeftImage from "../assets/storyBoard/LeftImage.svg";
import MiddleImage from "../assets/storyBoard/MiddleImage.svg";
import RightImage from "../assets/storyBoard/RightImage.svg";
import FrameBorder from "../assets/storyBoard/FrameBorder.svg";

const features = [
  {
    image: LeftImage,
    caption: "Film Production",
    rotation: "rotate-8",
    tapePosition: "-left-10 -top-7",
    tapeRotation: "-rotate-10"
  },
  {
    image: MiddleImage,
    caption: "Branding",
    rotation: "",
    tapePosition: "left-1/2 -translate-x-1/2 -top-6",
    tapeRotation: "rotate-3"
  },
  {
    image: RightImage,
    caption: "Art Curation",
    rotation: "-rotate-8",
    tapePosition: "-right-8 -top-7",
    tapeRotation: "rotate-35"
  },
];

export default function ShowcasePage() {
  return (
    <section
      className="relative min-h-screen bg-background flex items-center justify-center px-6 md:px-12 lg:px-24"
      style={{
        backgroundColor: "#FDD0C1",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="min-h-screen flex flex-col">
        {/* Decorative border at top */}
        <div className="h-6" />
        {/* Main header */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-halant mb-2 w-[793px] h-[63px]  left-[563px]">
            The storyboard reveals the breadth of our craft.
          </h1>
          <div/>
          <img
            src={underline}
            className=" w-[878.0505981445312px] h-[28.70549964904785px]  "
          />
        </div>
        {/* Polaroid photoframes */}
        <div className="flex justify-center gap-8 mt-12 mb-24">
          {features.map((feat) => (
            <div
              key={feat.caption}
              className={`relative bg-white shadow-lg border border-gray-200 w-64 p-4 flex flex-col items-center ${feat.rotation} transition-transform duration-300`}
              style={{ boxShadow: "0 8px 24px 0 rgb(0 0 0 / 0.07)" }}
            >
              {/* Paper tape positioned as specified */}
              <img
                src={PaperTape}
                alt="tape"
                className={`absolute w-32 ${feat.tapePosition} ${feat.tapeRotation} z-20`}
              />
              <img
                src={feat.image}
                alt={feat.caption}
                className="w-full h-72 object-cover mb-3 relative z-10"
              />
              <div className="text-center font-serif text-lg mt-2">
                {feat.caption}
              </div>
            </div>
          ))}
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
