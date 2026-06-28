import { useEffect, useState } from "react";
import drLogo from "../assets/Images/drsil.png";

const Loader = ({ onDone }) => {
  const [phase, setPhase] = useState("breathe"); // breathe → fade

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fade"), 3000);
    const doneTimer = setTimeout(() => onDone(),         3600);
    return () => [fadeTimer, doneTimer].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{
        opacity: phase === "fade" ? 0 : 1,
        transition: phase === "fade" ? "opacity 0.6s ease-in-out" : "none",
        pointerEvents: phase === "fade" ? "none" : "all",
      }}
    >
      <img
        src={drLogo}
        alt="Dr Cloudio"
        style={{
          width: "280px",
          animation: "breathe 2s ease-in-out infinite",
        }}
      />

      <style>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.5; transform: scale(0.96); }
          50%       { opacity: 1;   transform: scale(1.04); }
        }
      `}</style>
    </div>
  );
};

export default Loader;