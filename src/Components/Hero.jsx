import { useState, useEffect } from "react";
import { Play, UserPlus, Globe, Users, Trophy, BookOpen } from "lucide-react";
import heroImageOne from "../assets/Images/apshero1.png";
import heroImageTwo from "../assets/Images/apshero3.png";

const images = [heroImageOne, heroImageTwo];

const slides = [
  {
    eyebrow: "Teaching Truth · Building Leaders · Transforming Nations",
    line1: "Revealing Truth.",
    line2Plain: "Transforming ",
    line2Gold: "Destinies.",
    paragraph: "Through revelatory teaching and biblical exposition, Dr. Cloudio unveils Kingdom truths that transform lives, restore destinies, and strengthen believers in their walk with Yeshuah.",
  },
  {
    eyebrow: "Sound Doctrine · Lasting Impact · Global Reach",
    line1: "Building ",
    line2Plain: " Spiritual Colossals For ",
    line2Gold: "Yeshuah.",
    paragraph: "Through teaching, discipleship, and spiritual impartation, Dr. Cloudio is raising spiritual colossals who carry the life, power, and message of Yeshuah.",
  },
];

const heroStyles = `
  @keyframes kenburns { 0%{transform:scale(1)} 100%{transform:scale(1.1)} }
  .kburn { animation: kenburns 8s ease-out forwards; }
  @keyframes hfade { 0%{opacity:0;transform:translateY(10px)} 100%{opacity:1;transform:translateY(0)} }
  .hfade { animation: hfade 700ms ease-out both; }
`;

const Stat = ({ icon, value, label }) => (
  <div className="flex items-center gap-3">
    <span className="text-[#1A1209]/35">{icon}</span>
    <div>
      <p className="text-[15px] font-['DM_Serif_Display'] italic text-[#1A1209]">{value}</p>
      <p className="text-[11px] text-[#1A1209]/45 tracking-wide" style={{ fontFamily:"Inter,sans-serif" }}>{label}</p>
    </div>
  </div>
);

const Divider = () => <span className="hidden h-7 w-px bg-[#E8E3DA] sm:block" />;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFlash(true);
      const s = setTimeout(() => setActiveIndex((i) => (i + 1) % images.length), 280);
      const c = setTimeout(() => setFlash(false), 700);
      return () => { clearTimeout(s); clearTimeout(c); };
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const current = slides[activeIndex];

  return (
    <section id="home" className="relative mt-16 overflow-hidden lg:mt-18"
             style={{ minHeight: "calc(100svh - 4rem)" }}>
      <style>{heroStyles}</style>

      {/* BG images */}
      <div className="absolute inset-0 z-0">
        {images.map((src, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-1200 ${idx === activeIndex ? "opacity-100" : "opacity-0"}`}>
            <div key={activeIndex === idx ? "a" : "i"} className="h-full w-full bg-cover bg-center kburn"
                 style={{ backgroundImage:`url(${src})` }} />
          </div>
        ))}
      </div>

      {/* Tablet + desktop gradient */}
      <div className="absolute inset-0 z-10 hidden sm:block"
           style={{ background:"linear-gradient(to right, #FAFAF7 0%, #FAFAF7 33%, rgba(250,250,247,0.82) 50%, transparent 65%)" }} />

      {/* Flash */}
      <div className={`pointer-events-none absolute inset-0 z-20 bg-white transition-opacity duration-500 ${flash?"opacity-20":"opacity-0"}`} />

      {/* Content */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-5 pb-10 pt-10 text-center sm:mx-auto sm:max-w-7xl sm:items-start sm:justify-start sm:px-8 sm:pt-20 sm:text-left lg:px-12 lg:pt-24">
        <div key={activeIndex} className="w-full max-w-[88%] hfade sm:max-w-md lg:max-w-xl">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
            <span className="h-px w-6 shrink-0 bg-[#A97C2F]" />
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#A97C2F]"
               style={{ fontFamily:"Inter,sans-serif" }}>
              {current.eyebrow}
            </p>
          </div>

          {/* Headline — DM Serif Display, not bold, italic on gold part */}
          <h1 className="font-['DM_Serif_Display'] leading-[1.1] text-white sm:text-[#1A1209]"
              style={{ fontSize:"clamp(36px, 5.5vw, 60px)" }}>
            <span className="block">{current.line1}</span>
            <span className="block">
              {current.line2Plain}
              <em style={{ color:"#A97C2F", fontStyle:"italic" }}>{current.line2Gold}</em>
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mx-auto mt-5 max-w-sm text-[13.5px] leading-[1.85] text-white/75 sm:mx-0 sm:text-[#1A1209]/55 lg:max-w-sm"
             style={{ fontFamily:"Inter,sans-serif" }}>
            {current.paragraph}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:justify-start"
             style={{ fontFamily:"Inter,sans-serif" }}>
          <button className="flex items-center gap-2 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:opacity-90"
                  style={{ background:"#A97C2F" }}>
            <Play size={13} fill="currentColor" /> Watch Messages
          </button>
          <button className="flex items-center gap-2 border border-white/50 bg-white/10 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:border-[#E8E3DA] sm:bg-[#FAFAF7] sm:text-[#1A1209] sm:backdrop-blur-none sm:hover:bg-[#F0EBE3]">
            <UserPlus size={13} /> Invite Pastor
          </button>
        </div>

        {/* Stats */}
        <div className="mt-10 hidden flex-wrap items-center gap-x-7 gap-y-5 border-t border-[#E8E3DA] pt-7 sm:flex lg:mt-14">
          <Stat icon={<Globe size={20} strokeWidth={1.4}/>}  value="10+" label="Countries Reached" />
          <Divider />
          <Stat icon={<Users size={20} strokeWidth={1.4}/>}  value="1K+" label="Lives Impacted" />
          <Divider />
          <Stat icon={<Trophy size={20} strokeWidth={1.4}/>} value="21+" label="Years of Ministry" />
          <Divider />
          <div className="flex items-center gap-3">
            <BookOpen size={20} strokeWidth={1.4} className="text-[#1A1209]/35" />
            <div>
              <p className="font-['DM_Serif_Display'] text-[15px] italic text-[#1A1209]">Biblical Teaching</p>
              <p className="text-[11px] text-[#1A1209]/45" style={{ fontFamily:"Inter,sans-serif" }}>Sound doctrine. Timeless.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scripture */}
      <div className="absolute bottom-8 right-6 z-30 hidden max-w-65 text-right sm:block lg:right-12">
        <p className="font-['DM_Serif_Display'] text-[13px] italic leading-relaxed text-white/80 drop-shadow lg:text-[15px]">
          "Because it has been given unto you to know the mysteries of the kingdom of heaven."
        </p>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A97C2F]"
           style={{ fontFamily:"Inter,sans-serif" }}>— Matthew 13:11</p>
      </div>
    </section>
  );
};

export default Hero;