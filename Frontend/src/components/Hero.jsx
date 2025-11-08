import fullCircle from "../assets/hero/fullCircle.svg";
import { motion } from "framer-motion";
import VFilms_Logo from "../assets/logo/VFilms_Logo.svg";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-background flex items-center justify-center px-6 md:px-12 lg:px-24"
      style={{
        backgroundColor: "#FDDECF",
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='%23FDD0C1' opacity='1'/%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='texture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23texture)' opacity='0.5'/%3E%3C/svg%3E")
        `,
      }}
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Logo and Chakra */}
        <div className="flex items-center justify-center relative">
          <div className="relative w-full max-w-md aspect-square">
            <motion.div
              className="w-full h-full"
              style={{
                backgroundColor: "#FF6B3D", // Brighter, more vibrant orange
                opacity: 0.9,
                maskImage: `url(${fullCircle})`,
                WebkitMaskImage: `url(${fullCircle})`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={VFilms_Logo}
                alt="Varnam Films Logo"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-island italic text-centre leading-tight">
            Varnan is where stories find their voice and form
          </h2>

          <div className="flex gap-4 text-primary font-bold font-halant text-2xl ">
            <span>Films</span>
            <span>.</span>
            <span>Brands</span>
            <span>.</span>
            <span>Art</span>
          </div>

          <p className="text-foreground/80 text-sm md:text-base leading-relaxed max-w-lg">
            Since 2009, V've been telling stories - stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way - by listening with intention. V believes it takes
            trust, patience, and an eye for the unseen to capture what truly
            matters. V doesn't just tell stories - V honors them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
