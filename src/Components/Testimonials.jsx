import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

// Swap these imports for your real photos
import t1 from "../assets/Images/apsabout.png";
import t2 from "../assets/Images/apsabout.png";
import t3 from "../assets/Images/apsabout.png";
import t4 from "../assets/Images/apsabout.png";
import t5 from "../assets/Images/apsabout.png";
import t6 from "../assets/Images/apsabout.png";

const testimonials = [
  {
    name: "Joseph M.",
    location: "Kumasi, Ghana",
    category: "Healing & Restoration",
    image: t1,
    quote:
      "I was healed from a chronic illness that doctors couldn't explain. What medicine couldn't do, God did in a moment. Jesus is still healing.",
  },
  {
    name: "Blessing O.",
    location: "Lagos, Nigeria",
    category: "Financial Breakthrough",
    image: t2,
    quote:
      "From debt to abundance God turned my situation around completely. Doors opened that I never even knocked on. I am living proof of His faithfulness.",
  },
  {
    name: "Thabo R.",
    location: "Johannesburg, South Africa",
    category: "Deliverance",
    image: t3,
    quote:
      "I was bound for years by things I couldn't explain. One encounter with God through this ministry and I walked out completely free. No chains.",
  },
  {
    name: "Jessica L.",
    location: "Miami, USA",
    category: "Salvation",
    image: t4,
    quote:
      "I came to the crusade out of curiosity. I left with a new life. I encountered Jesus in a way I never thought possible. Everything changed that night.",
  },
  {
    name: "Amara Osei",
    location: "Accra, Ghana",
    category: "Purpose & Calling",
    image: t5,
    quote:
      "I had been drifting for years with no real direction. The teaching here gave me clarity about who I am and what I was created to do. Priceless.",
  },
  {
    name: "Emmanuel B.",
    location: "London, UK",
    category: "Prophetic Word",
    image: t6,
    quote:
      "A word was spoken over my life that described things no one could have known. Six months later, every single thing has come to pass. God is not silent.",
  },
];

const Avatar = ({ t }) => (
  <img
    src={t.image}
    alt={t.name}
    className="h-20 w-20 rounded-full object-cover object-top ring-4 ring-white shadow-md"
  />
);

const TestiCard = ({ t }) => (
  <div className="flex flex-col items-center text-center px-6 pt-8 pb-7 bg-white rounded-sm border border-slate-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-300 h-full">
    <Avatar t={t} />

    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C8962B]">
      {t.category}
    </p>

    <div className="mt-3 h-px w-8 bg-[#C8962B]/40" />

    <p className="mt-4 text-[13.5px] leading-[1.75] text-slate-600 flex-1">
      "{t.quote}"
    </p>

    <div className="mt-6 pt-5 border-t border-slate-100 w-full">
      <p className="text-[13px] font-bold text-slate-900">{t.name}</p>
      <div className="flex items-center justify-center gap-1 mt-1">
        <MapPin size={10} className="text-[#C8962B] shrink-0" />
        <p className="text-[11px] text-slate-400 tracking-wide">{t.location}</p>
      </div>
    </div>
  </div>
);

const VISIBLE = 4;

const Testimonials = () => {
  const [start, setStart] = useState(0);
  const [mobileCurrent, setMobileCurrent] = useState(0);
  const mobileTrackRef = useRef(null);
  const mobileCardRefs = useRef([]);
  const mobileIntervalRef = useRef(null);
  const desktopIntervalRef = useRef(null);
  const GAP = 20;
  const total = testimonials.length;

  const startDesktopAuto = useCallback(() => {
    clearInterval(desktopIntervalRef.current);
    desktopIntervalRef.current = setInterval(() => {
      setStart((prev) => (prev + 1) % total);
    }, 4000);
  }, [total]);

  useEffect(() => {
    startDesktopAuto();
    return () => clearInterval(desktopIntervalRef.current);
  }, [startDesktopAuto]);

  const prev = () => { setStart((s) => (s - 1 + total) % total); startDesktopAuto(); };
  const next = () => { setStart((s) => (s + 1) % total); startDesktopAuto(); };

  const visibleCards = Array.from({ length: VISIBLE }, (_, i) => testimonials[(start + i) % total]);

  const startMobileAuto = useCallback(() => {
    clearInterval(mobileIntervalRef.current);
    mobileIntervalRef.current = setInterval(() => {
      setMobileCurrent((prev) => {
        const next = prev >= total - 1 ? 0 : prev + 1;
        const track = mobileTrackRef.current;
        const card = mobileCardRefs.current[next];
        if (track && card) track.scrollTo({ left: card.offsetLeft - GAP, behavior: "smooth" });
        return next;
      });
    }, 3500);
  }, [total]);

  useEffect(() => {
    startMobileAuto();
    return () => clearInterval(mobileIntervalRef.current);
  }, [startMobileAuto]);

  const scrollMobileTo = useCallback((idx) => {
    const track = mobileTrackRef.current;
    const card = mobileCardRefs.current[idx];
    if (track && card) track.scrollTo({ left: card.offsetLeft - GAP, behavior: "smooth" });
    setMobileCurrent(idx);
  }, []);

  const onMobileScroll = useCallback(() => {
    const track = mobileTrackRef.current;
    if (!track) return;
    let closest = 0;
    for (let i = 0; i < total; i++) {
      const card = mobileCardRefs.current[i];
      const best = mobileCardRefs.current[closest];
      if (!card || !best) continue;
      if (Math.abs(card.offsetLeft - GAP - track.scrollLeft) <
          Math.abs(best.offsetLeft - GAP - track.scrollLeft)) closest = i;
    }
    setMobileCurrent(closest);
  }, [total]);

  return (
    <section id="testimonials" className="bg-[#FAFAF8] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-0.5 w-8 bg-[#C8962B]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C8962B]">
                Testimonials
              </p>
            </div>
            <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[46px] font-bold leading-tight text-slate-900">
              Lives Changed.{" "}
              <span className="italic text-[#C8962B]">Stories Told.</span>
            </h2>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-slate-500">
              Through the ministry of Apostle Dr. Cloudio, lives have been transformed, destinies restored, 
              and hearts awakened to the reality of God's power and purpose.
            </p>
          </div>

          {/* Arrow controls — desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-[#C8962B] hover:text-[#C8962B]"
              aria-label="Previous"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-[#C8962B] hover:text-[#C8962B]"
              aria-label="Next"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Desktop — 4 cards */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-5">
          {visibleCards.map((t, i) => (
            <TestiCard key={`${t.name}-${start}-${i}`} t={t} />
          ))}
        </div>

        {/* Tablet — 2×2 */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-5 lg:hidden">
          {testimonials.slice(0, 4).map((t) => (
            <TestiCard key={t.name} t={t} />
          ))}
        </div>

        {/* Mobile — carousel */}
        <div className="sm:hidden">
          <div
            ref={mobileTrackRef}
            onScroll={onMobileScroll}
            onTouchStart={() => clearInterval(mobileIntervalRef.current)}
            onTouchEnd={() => startMobileAuto()}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollPaddingLeft: `${GAP}px` }}
          >
            <div className="flex-none" style={{ width: `${GAP}px`, minWidth: `${GAP}px` }} aria-hidden="true" />
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                ref={(el) => (mobileCardRefs.current[i] = el)}
                className="snap-start shrink-0 w-[78vw]"
              >
                <TestiCard t={t} />
              </div>
            ))}
            <div className="flex-none" style={{ width: `${GAP}px`, minWidth: `${GAP}px` }} aria-hidden="true" />
          </div>
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { scrollMobileTo(i); clearInterval(mobileIntervalRef.current); startMobileAuto(); }}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === mobileCurrent ? "w-7 bg-[#C8962B]" : "w-2 bg-[#C8962B]/25"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop dots */}
        <div className="hidden lg:flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setStart(i); startDesktopAuto(); }}
              aria-label={`Go to ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === start ? "w-7 bg-[#C8962B]" : "w-2 bg-[#C8962B]/25"
              }`}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default Testimonials;