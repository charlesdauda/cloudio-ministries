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
    paragraph:
      "Through revelatory teaching and biblical exposition, Dr. Cloudio unveils Kingdom truths that transform lives, restore destinies, and strengthen believers in their walk with Yeshuah.",
  },
  {
    eyebrow: "Sound Doctrine · Lasting Impact · Global Reach",
    line1: "Building ",
    line2Plain: " Spiritual Colossals For ",
    line2Gold: "Yeshuah.",
    paragraph:
      "Through teaching, discipleship, and spiritual impartation, Dr. Cloudio is raising spiritual colossals who carry the life, power, and message of Yeshuah.",
  },
];

const heroStyles = `
  @keyframes kenburns-in {
    0%   { transform: scale(1);    opacity: 0; }
    8%   { opacity: 1; }
    100% { transform: scale(1.12); opacity: 1; }
  }
  @keyframes kenburns-out {
    0%   { transform: scale(1.12); opacity: 1; }
    92%  { opacity: 1; }
    100% { transform: scale(1.2);  opacity: 0; }
  }
  .kb-enter { animation: kenburns-in 8s ease-out forwards; }
  .kb-exit  { animation: kenburns-out 1.2s ease-in forwards; }

  @keyframes hfade {
    0%   { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .hfade { animation: hfade 700ms ease-out both; }
`;

const Stat = ({ icon, value, label }) => (
  <div className="flex items-center gap-3">
    <span className="text-white/40">{icon}</span>
    <div>
      <p className="text-[15px] font-['DM_Serif_Display'] italic text-white">{value}</p>
      <p className="text-[11px] text-white/50 tracking-wide" style={{ fontFamily: "Inter,sans-serif" }}>
        {label}
      </p>
    </div>
  </div>
);

const Divider = () => <span className="hidden h-7 w-px bg-white/20 sm:block" />;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setPrevIndex(activeIndex);
      setExiting(true);

      const next = setTimeout(() => {
        setActiveIndex((i) => (i + 1) % images.length);
        setExiting(false);
        setPrevIndex(null);
      }, 1200);

      return () => clearTimeout(next);
    }, 7000);
    return () => clearInterval(id);
  }, [activeIndex]);

  const current = slides[activeIndex];

  return (
    <section
      id="home"
      className="relative mt-16 overflow-hidden lg:mt-18"
      style={{ minHeight: "calc(100svh - 4rem)" }}
    >
      <style>{heroStyles}</style>

      {/* ── Mobile: plain white background (hidden on sm+) ── */}
      <div className="absolute inset-0 z-0 bg-white sm:hidden" />

      {/* ── BG images: tablet & desktop only ── */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        {exiting && prevIndex !== null && (
          <div key={`exit-${prevIndex}`} className="absolute inset-0">
            <div
              className="h-full w-full bg-cover bg-center kb-exit"
              style={{ backgroundImage: `url(${images[prevIndex]})` }}
            />
          </div>
        )}
        <div key={`enter-${activeIndex}`} className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center kb-enter"
            style={{ backgroundImage: `url(${images[activeIndex]})` }}
          />
        </div>
      </div>

      {/* ── Dark overlays: tablet & desktop only (unchanged) ── */}
      <div
        className="absolute inset-0 z-10 hidden sm:block"
        style={{
          background:
            "linear-gradient(to right, rgba(15,10,4,0.82) 0%, rgba(15,10,4,0.65) 38%, rgba(15,10,4,0.30) 62%, rgba(15,10,4,0.15) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden sm:block"
        style={{
          background:
            "linear-gradient(to top, rgba(10,7,2,0.55) 0%, transparent 30%)",
        }}
      />

      {/* ── Content ── */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-5 pb-10 pt-10 text-center sm:mx-auto sm:max-w-7xl sm:items-start sm:justify-start sm:px-8 sm:pt-20 sm:text-left lg:px-12 lg:pt-24">
        <div key={activeIndex} className="w-full max-w-[88%] hfade sm:max-w-md lg:max-w-xl">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
            <span className="h-px w-6 shrink-0 bg-[#C8962B]" />
            <p
              className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#C8962B]"
              style={{ fontFamily: "Inter,sans-serif" }}
            >
              {current.eyebrow}
            </p>
          </div>

          {/* Headline — dark on mobile, white on sm+ */}
          <h1
            className="font-['DM_Serif_Display'] leading-[1.1] text-[#0A0A0A] sm:text-white"
            style={{ fontSize: "clamp(36px, 5.5vw, 60px)" }}
          >
            <span className="block">{current.line1}</span>
            <span className="block">
              {current.line2Plain}
              <em style={{ color: "#C8962B", fontStyle: "italic" }}>{current.line2Gold}</em>
            </span>
          </h1>

          {/* Paragraph — muted dark on mobile, white/70 on sm+ */}
          <p
            className="mx-auto mt-5 max-w-sm text-[13.5px] leading-[1.85] text-[#5C5C5C] sm:mx-0 sm:text-white/70 lg:max-w-sm"
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            {current.paragraph}
          </p>
        </div>

        {/* Buttons — outline button adapts on mobile */}
        <div
          className="mt-8 flex flex-row items-center justify-center gap-3 sm:justify-start"
          style={{ fontFamily: "Inter,sans-serif" }}
        >
          <button
            className="flex items-center gap-2 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:opacity-90"
            style={{ background: "#A97C2F" }}
          >
            <Play size={13} fill="currentColor" /> Watch Messages
          </button>
          <button className="flex items-center gap-2 border border-[#0A0A0A]/25 bg-transparent px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A0A0A] transition-all hover:bg-[#0A0A0A]/5 sm:border-white/40 sm:bg-white/10 sm:text-white sm:backdrop-blur-sm sm:hover:bg-white/20">
            <UserPlus size={13} /> Invite Pastor
          </button>
        </div>

        {/* Stats — desktop/tablet only, unchanged */}
        <div className="mt-10 hidden flex-wrap items-center gap-x-7 gap-y-5 border-t border-white/20 pt-7 sm:flex lg:mt-14">
          <Stat icon={<Globe size={20} strokeWidth={1.4} />} value="10+" label="Countries Reached" />
          <Divider />
          <Stat icon={<Users size={20} strokeWidth={1.4} />} value="1K+" label="Lives Impacted" />
          <Divider />
          <Stat icon={<Trophy size={20} strokeWidth={1.4} />} value="21+" label="Years of Ministry" />
          <Divider />
          <div className="flex items-center gap-3">
            <BookOpen size={20} strokeWidth={1.4} className="text-white/40" />
            <div>
              <p className="font-['DM_Serif_Display'] text-[15px] italic text-white">Biblical Teaching</p>
              <p className="text-[11px] text-white/50" style={{ fontFamily: "Inter,sans-serif" }}>
                Sound doctrine. Timeless.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scripture — sm+ only, unchanged */}
      <div className="absolute bottom-8 right-6 z-30 hidden max-w-65 text-right sm:block lg:right-12">
        <p className="font-['DM_Serif_Display'] text-[13px] italic leading-relaxed text-white/75 drop-shadow lg:text-[15px]">
          "Because it has been given unto you to know the mysteries of the kingdom of heaven."
        </p>
        <p
          className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8962B]"
          style={{ fontFamily: "Inter,sans-serif" }}
        >
          — Matthew 13:11
        </p>
      </div>
    </section>
  );
};

export default Hero;