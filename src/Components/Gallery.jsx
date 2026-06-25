import { useState, useRef, useCallback, useEffect } from "react";
import img1 from "../assets/Images/apshero1.png";
import img2 from "../assets/Images/apshero2.png";
import img3 from "../assets/Images/apshero3.png";
import img4 from "../assets/Images/apsabout.png";
import img5 from "../assets/Images/apshero2.png";
import img6 from "../assets/Images/apshero3.png";

const categories = ["All", "Teachings", "Prophecy", "Healing"];

const images = [
  { src: img1, category: "Teachings", label: "Apostolic Teaching Session"     },
  { src: img2, category: "Prophecy",  label: "Prophetic Night — Accra"        },
  { src: img3, category: "Healing",   label: "Healing & Deliverance Service"  },
  { src: img4, category: "Teachings", label: "Kingdom Mysteries Conference"   },
  { src: img5, category: "Prophecy",  label: "Word of the Lord — Lagos"       },
  { src: img6, category: "Healing",   label: "Revival Crusade — Johannesburg" },
];

const Gallery = () => {
  const [active,   setActive]   = useState("All");
  const [page,     setPage]     = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const dragX   = useRef(null);
  const autoRef = useRef(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);
  const pages    = filtered.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => { setPage(0); }, [active]);

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setPage((p) => (p + 1) % pages), 3000);
  }, [pages]);

  useEffect(() => {
    if (isMobile) startAuto();
    else clearInterval(autoRef.current);
    return () => clearInterval(autoRef.current);
  }, [isMobile, startAuto]);

  const goTo    = (n) => { setPage((n + pages) % pages); startAuto(); };
  const onStart = (x) => { dragX.current = x; clearInterval(autoRef.current); };
  const onEnd   = (x) => {
    const d = (dragX.current ?? x) - x;
    if (Math.abs(d) > 40) goTo(page + (d > 0 ? 1 : -1));
    else startAuto();
    dragX.current = null;
  };

  return (
    <section className="bg-white py-20 lg:py-28" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#A97C2F]">
              Gallery
            </p>
            <h2 className="font-['DM_Serif_Display'] leading-[1.08] text-[#1A1209]"
                style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
              Moments of Faith.<br />
              <em style={{ color: "#A97C2F" }}>Captured in Time.</em>
            </h2>
          </div>
          <div className="lg:pl-12 lg:pb-2">
            <p className="max-w-md text-[14px] leading-[1.9] text-[#1A1209]/55">
              A glimpse into the life of the ministry — crusades, teachings, encounters,
              and the countless lives being touched by the power of God across the nations.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] border transition-all duration-200 ${
                active === cat
                  ? "bg-[#A97C2F] border-[#A97C2F] text-white"
                  : "bg-transparent border-[#E8E3DA] text-[#1A1209]/55 hover:border-[#A97C2F] hover:text-[#A97C2F]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Mobile: swipe carousel ── */}
        <div className="block sm:hidden">
          <div
            className="overflow-hidden"
            onMouseDown={(e) => onStart(e.clientX)}
            onMouseUp={(e) => onEnd(e.clientX)}
            onTouchStart={(e) => onStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)]"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {filtered.map((img, i) => (
                <div key={i} className="relative w-full shrink-0 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    draggable="false"
                    className="w-full object-cover select-none"
                    style={{ aspectRatio: "16/9" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A97C2F]">
                      {img.category}
                    </span>
                    <p className="font-['DM_Serif_Display'] text-[15px] italic text-white leading-snug">
                      {img.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page ? "w-8 bg-[#A97C2F]" : "w-2 bg-[#A97C2F]/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop: bigger grid with overlays ── */}
        <div className="hidden sm:grid grid-cols-2 gap-4 lg:grid-cols-3">
          {filtered.map((img, i) => (
            <div key={i} className="group relative overflow-hidden">

              <img
                src={img.src}
                alt={img.label}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: "3/2" }}
              />

              {/* Dark gradient — always on */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Gold top accent line on hover */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#A97C2F] transition-all duration-500 group-hover:w-full" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 w-full p-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#A97C2F]">
                  {img.category}
                </span>
                <p className="font-['DM_Serif_Display'] text-[17px] italic text-white leading-snug mt-0.5">
                  {img.label}
                </p>
              </div>

              {/* Subtle gold shine on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, rgba(169,124,47,0.08) 0%, transparent 60%)" }}
              />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;