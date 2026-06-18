import { useState, useEffect } from "react";
import { Play, UserPlus, Globe, Users, Trophy, BookOpen } from "lucide-react";

import heroImageOne from "../assets/Images/apshero1.png";
import heroImageTwo from "../assets/Images/apshero3.png";

const images = [heroImageOne, heroImageTwo];

const slides = [
  {
    eyebrow: "TEACHING TRUTH. BUILDING LEADERS. TRANSFORMING NATIONS.",
    line1: "Inspiring Sermons.",
    line2Plain: "Rooted in The ",
    line2Gold: "Word.",
    paragraph:
      "Through the Gospel of Jesus Christ, we equip people with biblical truth and leadership wisdom to impact lives and transform nations.",
  },
  {
    eyebrow: "SOUND DOCTRINE. LASTING IMPACT. GLOBAL REACH.",
    line1: "Building Spiritual ",
    line2Plain: "Colossals For ",
    line2Gold: "Yeshuah.",
    paragraph:
      "From the pulpit to the nations, we proclaim Christ and disciple leaders who carry His message forward.",
  },
];

const heroStyles = `
  @keyframes kenburns {
    0% { transform: scale(1); }
    100% { transform: scale(1.12); }
  }
  .animate-kenburns {
    animation: kenburns 7s ease-out forwards;
  }
  @keyframes herofadein {
    0% { opacity: 0; transform: translateY(8px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-herofadein {
    animation: herofadein 800ms ease-out both;
  }
`;

const Stat = ({ icon, value, label }) => (
  <div className="flex items-center gap-3">
    <span className="text-slate-700">{icon}</span>
    <div>
      <p className="text-[15px] font-bold text-slate-900">{value}</p>
      <p className="text-[12px] text-slate-500">{label}</p>
    </div>
  </div>
);

const Divider = () => <span className="hidden h-8 w-px bg-slate-200 sm:block" />;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);
      const swap = setTimeout(() => {
        setActiveIndex((i) => (i + 1) % images.length);
      }, 280);
      const clearFlash = setTimeout(() => setFlash(false), 700);
      return () => {
        clearTimeout(swap);
        clearTimeout(clearFlash);
      };
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const current = slides[activeIndex];

  return (
    <section
      id="home"
      className="relative mt-18 overflow-hidden lg:mt-20 lg:min-h-170"
      style={{ minHeight: "calc(100svh - 4.5rem)" }}
    >
      <style>{heroStyles}</style>

      {/* Background images */}
      <div className="absolute inset-0 z-0">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
              idx === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              key={activeIndex === idx ? "active" : "idle"}
              className="h-full w-full bg-cover bg-center animate-kenburns"
              style={{ backgroundImage: `url(${src})` }}
            />
          </div>
        ))}
      </div>

      {/* Mobile only: dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/55 sm:hidden" />

      {/* Tablet + desktop: ivory-to-photo gradient */}
      <div className="absolute inset-0 z-10 hidden bg-linear-to-r from-[#FBF9F5] from-0% via-[#FBF9F5] via-40% to-transparent to-62% sm:block" />

      {/* Cinematic transition flash */}
      <div
        className={`pointer-events-none absolute inset-0 z-20 bg-white transition-opacity duration-500 ${
          flash ? "opacity-25" : "opacity-0"
        }`}
      />

      {/* Content layer */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-5 pb-12 pt-10 text-center sm:mx-auto sm:max-w-7xl sm:items-start sm:justify-start sm:px-8 sm:pt-20 sm:text-left lg:px-12 lg:pt-24">

        <div key={activeIndex} className="w-full max-w-[90%] animate-herofadein sm:max-w-md lg:max-w-xl">
          {/* Eyebrow */}
          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4 sm:justify-start">
            <span className="h-0.5 w-6 shrink-0 bg-[#C8962B] sm:w-8" />
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#C8962B] sm:text-[11px] lg:text-[12px]">
              {current.eyebrow}
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[32px] font-bold leading-tight text-white sm:text-[36px] sm:text-slate-900 lg:text-[50px]">
            <span className="block">{current.line1}</span>
            <span className="block">
              {current.line2Plain}
              <span className="text-[#C8962B]">{current.line2Gold}</span>
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mx-auto mt-4 max-w-sm text-[14px] leading-relaxed text-white/90 sm:mx-0 sm:mt-4 sm:max-w-xs sm:text-[14px] sm:text-slate-600 lg:max-w-md lg:text-[15px]">
            {current.paragraph}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-row items-center justify-center gap-3 sm:justify-start sm:gap-4">
          <button className="flex items-center justify-center gap-2 rounded-md bg-[#C8962B] px-5 py-3 text-[12px] font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#B3841F] sm:px-6 sm:text-[13px]">
            <Play size={14} fill="currentColor" className="sm:hidden" />
            <Play size={16} fill="currentColor" className="hidden sm:block" />
            Watch Messages
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md border border-white/60 bg-white/10 px-5 py-3 text-[12px] font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:border-slate-300 sm:bg-white sm:px-6 sm:text-[13px] sm:text-slate-800 sm:hover:bg-slate-50 sm:backdrop-blur-none lg:border-slate-300 lg:bg-white lg:text-slate-800 lg:hover:bg-slate-50">
            <UserPlus size={14} className="sm:hidden" />
            <UserPlus size={16} className="hidden sm:block" />
            Invite Pastor
          </button>
        </div>

        {/* Stats row — tablet + desktop */}
        <div className="mt-8 hidden max-w-3xl flex-wrap items-center gap-x-6 gap-y-5 border-t border-slate-200/70 pt-6 sm:flex lg:mt-12 lg:gap-x-8 lg:gap-y-6 lg:pt-7">
          <Stat icon={<Globe size={22} strokeWidth={1.5} />} value="10+" label="Countries Reached" />
          <Divider />
          <Stat icon={<Users size={22} strokeWidth={1.5} />} value="1K+" label="Lives Impacted" />
          <Divider />
          <Stat icon={<Trophy size={22} strokeWidth={1.5} />} value="25+" label="Years of Ministry" />
          <Divider />
          <div className="flex items-center gap-3">
            <BookOpen size={22} strokeWidth={1.5} className="text-slate-700 lg:hidden" />
            <BookOpen size={26} strokeWidth={1.5} className="hidden text-slate-700 lg:block" />
            <div>
              <p className="text-[13px] font-bold text-slate-900 lg:text-[14px]">Biblical Teaching</p>
              <p className="text-[11px] text-slate-500 lg:text-[12px]">Sound doctrine. Relevant. Timeless.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote overlay — tablet + desktop */}
      <div className="absolute bottom-10 right-6 z-30 hidden max-w-57.5 text-right sm:block lg:right-12">
        <p className="font-serif text-[13px] italic leading-snug text-white drop-shadow-md lg:text-[15px]">
          "Go into all the world and preach the gospel to all creation."
        </p>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-[#E3B458] lg:text-[12px]">
          — Mark 16:15
        </p>
      </div>
    </section>
  );
};

export default Hero;