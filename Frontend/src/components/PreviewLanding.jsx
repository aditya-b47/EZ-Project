import React from 'react';

// Asset Imports (same as VFilmsLanding)
// Film Production Assets
import Camera01 from "../assets/VFilmsLanding/Camera01.svg";
import Camera02 from "../assets/VFilmsLanding/Camera02.svg";
import Camera03 from "../assets/VFilmsLanding/Camera03.svg";

// Branding Assets
import BrandingVector01 from "../assets/VFilmsLanding/BrandingVector01.svg";
import BrandingVector02 from "../assets/VFilmsLanding/BrandingVector02.svg";
import BrandingVector03 from "../assets/VFilmsLanding/BrandingVector03.svg";

// Art Curation Assets
import ArtCurationIcons01 from "../assets/VFilmsLanding/ArtCurationIcons01.svg";
import ArtCurationIcons02 from "../assets/VFilmsLanding/ArtCurationIcons02.svg";
import ArtCurationIcons03 from "../assets/VFilmsLanding/ArtCurationIcons03.svg";

// This map provides the images for the preview.
const previewContentMap = {
  0: {
    title: "Film Production",
    images: [Camera01, Camera02, Camera03],
  },
  1: {
    title: "Branding & Identity",
    images: [BrandingVector01, BrandingVector02, BrandingVector03],
  },
  2: {
    title: "Art Curation",
    images: [ArtCurationIcons01, ArtCurationIcons02, ArtCurationIcons03],
  },
};

const PreviewLanding = ({ id }) => {
  const content = previewContentMap[id];

  if (!content) {
    return null; // Or a default preview
  }

  return (
    <div className="w-64 h-auto bg-white rounded-lg shadow-2xl p-4 pointer-events-none">
      <h4 className="text-lg font-bold font-halant text-gray-800 mb-3">{content.title}</h4>
      <div className="grid grid-cols-3 gap-2">
        {content.images.map((img, index) => (
          <div key={index} className="bg-gray-100 p-1 rounded-md flex items-center justify-center">
            <img src={img} alt={`${content.title} preview ${index + 1}`} className="w-full h-auto object-contain" />
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3 font-sans">Click to explore this category.</p>
    </div>
  );
};

export default PreviewLanding;