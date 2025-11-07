import React, { useState } from 'react';
import { Film, Video, Clapperboard, Camera } from 'lucide-react';
import VFilmsLandingCamera01 from '../assets/VFilmsLanding/Camera01.svg';


export default function VFilmsLanding() {
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5e6d3] relative overflow-x-hidden">
      {/* Decorative Icons */}
      <div className="fixed top-[15%] right-[10%] opacity-20 pointer-events-none hidden lg:block">
        <Video size={60} className="text-gray-700" />
      </div>
      <div className="fixed bottom-[30%] right-[8%] opacity-20 pointer-events-none hidden lg:block">
        <Film size={60} className="text-gray-700" />
      </div>
      <div className="fixed bottom-[15%] right-[12%] opacity-20 pointer-events-none hidden lg:block">
        <Clapperboard size={60} className="text-gray-700" />
      </div>
      <div className="fixed top-[50%] left-[5%] opacity-20 pointer-events-none hidden lg:block">
        <Camera size={60} className="text-gray-700" />
      </div>

      {/* Quote Section */}
      <div className="text-center px-5 pt-16 pb-10 relative">
        <p className="text-2xl md:text-3xl italic text-gray-800 max-w-4xl mx-auto font-serif">
          "Filmmaking is a chance to live many lifetimes." - Robert Altman
        </p>
        <div className="w-full max-w-2xl h-5 mx-auto mt-8 bg-gradient-to-r from-transparent via-[#2c5c7f] to-transparent opacity-70 rounded-full"></div>
      </div>

      {/* Back Button */}
      <button 
        onClick={() => window.history.back()}
        className="absolute left-10 top-44 px-6 py-2 border-2 border-[#d35400] bg-transparent text-[#d35400] rounded-full hover:bg-[#d35400] hover:text-white transition-all duration-300 flex items-center gap-2 text-sm"
      >
        <span>←</span> Back
      </button>

      {/* Main Content */}
      <div className="flex flex-wrap justify-center items-start px-10 py-16 gap-10 lg:gap-20">
        {/* Film Card */}
        <div 
          className={`bg-white rounded-2xl shadow-xl overflow-hidden max-w-md transition-transform duration-300 ${isCardHovered ? '-translate-y-3' : ''}`}
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
        >
          <div className="w-full h-80 bg-gradient-to-br from-[#0a5c3d] to-[#1a8c5e] relative flex items-center justify-center">
            {/* Simulating a green screen studio */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full grid grid-cols-4 gap-2 p-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="bg-[#00ff00] opacity-30"></div>
                ))}
              </div>
            </div>
            <VFilmsLandingCamera01 width={80} height={80} className="text-white opacity-50 relative z-10" />
          </div>
          <div className="text-center py-8 px-6 bg-white">
            <h3 className="text-2xl text-gray-800 font-serif">Film Production</h3>
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-xl">
          <h2 className="text-xl md:text-2xl mb-6 text-gray-800 leading-relaxed font-serif">
            Who says films are just an escape?<br />
            We see them as a way to live many lives - to feel, to explore, and to tell stories that stay.<br />
            And with each film, we carry new memories and new reasons to keep creating.
          </h2>
          
          <p className="text-base mb-8 text-gray-700 font-serif">
            <strong>V crafts:</strong>
          </p>
          
          <ul className="mb-12 space-y-3">
            {['Documentaries', 'Corporate Videos', '2D Animation Videos', '3D Animation Videos'].map((service, index) => (
              <li key={index} className="text-base text-gray-800 pl-6 relative font-serif">
                <span className="absolute left-0 text-[#d35400] text-xl">•</span>
                {service}
              </li>
            ))}
          </ul>

          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onMouseEnter={() => setIsExploreHovered(true)}
            onMouseLeave={() => setIsExploreHovered(false)}
            onClick={() => alert('Exploring V Films projects...')}
          >
            <span className="text-lg text-[#d35400] font-serif">Explore Now</span>
            <div 
              className={`w-20 h-10 bg-gradient-to-r from-[#d35400] to-[#e67e22] transition-transform duration-300 ${isExploreHovered ? 'translate-x-2' : ''}`}
              style={{
                clipPath: 'polygon(0 50%, 70% 50%, 70% 0, 100% 50%, 70% 100%, 70% 50%)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );

  
}
