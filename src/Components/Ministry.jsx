import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, BookOpen, Users, Flame, Globe, Zap, Heart } from "lucide-react";

import worldMap    from "../assets/Images/dottedmap.png";
import pastorBanner from "../assets/Images/apshero1.png";

import img1 from "../assets/Images/apshero1.png";
import img2 from "../assets/Images/apshero2.png";
import img3 from "../assets/Images/apshero3.png";
import img4 from "../assets/Images/apsabout.png";
import img5 from "../assets/Images/apshero2.png";
import img6 from "../assets/Images/apshero3.png";

const pillars = [
  {
    num: "01", img: img1,
    icon: <BookOpen size={26} strokeWidth={1.6} />,
    title: "Apostolic Mandate",
    body: "Grounded in the foundation of the apostles and prophets, we carry a divine assignment to plant, establish, and govern God's purposes in the earth.",
  },
  {
    num: "02", img: img2,
    icon: <Zap size={26} strokeWidth={1.6} />,
    title: "Prophetic Ministry",
    body: "We hear what the Spirit is saying to the Church and declare it with clarity and boldness — calling forth destinies and aligning seasons.",
  },
  {
    num: "03", img: img3,
    icon: <Flame size={26} strokeWidth={1.6} />,
    title: "Healing & Revival",
    body: "Signs, wonders, and the tangible presence of God mark our gatherings. Healing — body, soul, and spirit — is the children's bread.",
  },
  {
    num: "04", img: img4,
    icon: <Globe size={26} strokeWidth={1.6} />,
    title: "Mystical Teachings",
    body: "We go beyond the surface of Scripture into deep Kingdom mysteries — unlocking revelation that transforms the mind and renews the spirit.",
  },
  {
    num: "05", img: img5,
    icon: <Users size={26} strokeWidth={1.6} />,
    title: "Counseling & Care",
    body: "Through Spirit-led counsel and pastoral care, we walk with individuals into wholeness, identity, and personal breakthrough.",
  },
  {
    num: "06", img: img6,
    icon: <Heart size={26} strokeWidth={1.6} />,
    title: "Nations & Missions",
    body: "From Accra to the ends of the earth — we take the Gospel beyond borders, equipping local carriers and sending teams worldwide.",
  },
];

const bannerLinks = [
  {
    icon: <BookOpen size={26} strokeWidth={1.4} className="text-[#C8962B]" />,
    label: "Watch\nSermons", href: "#sermons",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C8962B" strokeWidth="1.4" className="h-6.5 w-6.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    label: "Join a\nCommunity", href: "#events",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C8962B" strokeWidth="1.4" className="h-6.5 w-6.5">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    label: "Request\nPrayer", href: "#contact",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C8962B" strokeWidth="1.4" className="h-6.5 w-6.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    label: "Attend an\nEvent", href: "#events",
  },
  /*{
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C8962B" strokeWidth="1.4" className="h-6.5 w-6.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Partner\nWith Us", href: "#contact",
  }, */
];

/* ─── Single card ───────────────────────────────────────────────────── */
const PillarCard = ({ p }) => (
  <div className="group shrink-0 w-[78vw] sm:w-[52vw] lg:w-auto rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-shadow duration-300 hover:shadow-[0_6px_32px_rgba(0,0,0,0.13)]">
    <div className="relative">
      <div className="relative h-52 overflow-hidden rounded-t-2xl">
        <img
          src={p.img}
          alt={p.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/15" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10
                      flex h-14 w-14 items-center justify-center rounded-full
                      bg-slate-900 text-[#C8962B] shadow-lg ring-4 ring-white">
        {p.icon}
      </div>
    </div>
    <div className="px-6 pt-10 pb-8 text-center">
      <h3 className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-slate-900">
        {p.title}
      </h3>
      <div className="mx-auto mb-4 h-0.5 w-8 bg-[#C8962B]" />
      <p className="mb-7 text-[13px] leading-relaxed text-slate-500">
        {p.body}
      </p>
      <a
        href="#about"
        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#C8962B] transition-all duration-200 group-hover:gap-3"
      >
        Learn More <ArrowRight size={13} />
      </a>
    </div>
  </div>
);

/* ─── Auto-swipe carousel (mobile/tablet) ───────────────────────────── */
const MobileCarousel = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const intervalRef = useRef(null);
  const total = pillars.length;

  // scroll-padding-left on the track makes scrollIntoView respect the 20px gap
  const GAP = 20;

  const scrollToCard = useCallback((idx) => {
    const track = trackRef.current;
    const card = cardRefs.current[idx];
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - GAP,
      behavior: "smooth",
    });
    setCurrent(idx);
  }, []);

  const startAuto = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = prev >= total - 1 ? 0 : prev + 1;
        const track = trackRef.current;
        const card = cardRefs.current[next];
        if (track && card) {
          track.scrollTo({ left: card.offsetLeft - GAP, behavior: "smooth" });
        }
        return next;
      });
    }, 3000);
  }, [total]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, [startAuto]);

  const handleTouchStart = () => clearInterval(intervalRef.current);
  const handleTouchEnd   = () => startAuto();

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    for (let i = 0; i < pillars.length; i++) {
      const card = cardRefs.current[i];
      const best = cardRefs.current[closest];
      if (!card || !best) continue;
      if (Math.abs(card.offsetLeft - GAP - track.scrollLeft) <
          Math.abs(best.offsetLeft - GAP - track.scrollLeft)) {
        closest = i;
      }
    }
    setCurrent(closest);
  }, []);

  return (
    <div className="lg:hidden">
      <div
        ref={trackRef}
        onScroll={onScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          // scroll-padding ensures snap targets honour the left gap
          scrollPaddingLeft: `${GAP}px`,
        }}
      >
        <style>{`#ministry-track::-webkit-scrollbar{display:none}`}</style>

        {/* ✅ THIS is what actually creates the visual gap on the left.
            A proper flex child that browsers cannot collapse. */}
        <div className="flex-none" style={{ width: `${GAP}px`, minWidth: `${GAP}px` }} aria-hidden="true" />

        {pillars.map((p, i) => (
          <div
            key={p.num}
            ref={(el) => (cardRefs.current[i] = el)}
            className="snap-start shrink-0"
          >
            <PillarCard p={p} />
          </div>
        ))}

        {/* Right breathing room */}
        <div className="flex-none" style={{ width: `${GAP}px`, minWidth: `${GAP}px` }} aria-hidden="true" />
      </div>

      {/* Pill dots */}
      <div className="flex justify-center gap-2 pt-4 pb-12">
        {pillars.map((_, i) => (
          <button
            key={i}
            onClick={() => { scrollToCard(i); clearInterval(intervalRef.current); startAuto(); }}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-7 bg-[#C8962B]" : "w-2 bg-[#C8962B]/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ─── Ministry Section ──────────────────────────────────────────────── */
const Ministry = () => {
  return (
    <section id="ministry" className="scroll-mt-24 overflow-hidden bg-[#FBF9F5]">

      {/* ── HEADLINE + MAP ─────────────────────────────────────────────── */}
      <div className="relative px-5 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div
          className="pointer-events-none absolute top-0 right-0 h-full w-[60%] bg-top-right bg-no-repeat opacity-30 lg:opacity-40"
          style={{ backgroundImage: `url(${worldMap})`, backgroundSize: "contain" }}
        />
        <svg className="pointer-events-none absolute top-8 right-0 hidden h-64 w-[55%] lg:block" viewBox="0 0 600 260" fill="none">
          <circle cx="300" cy="80"  r="4" fill="#C8962B" opacity="0.8"/>
          <circle cx="490" cy="140" r="4" fill="#C8962B" opacity="0.8"/>
          <circle cx="160" cy="180" r="4" fill="#C8962B" opacity="0.8"/>
          <circle cx="390" cy="210" r="4" fill="#C8962B" opacity="0.8"/>
          <path d="M300 80 Q400 30 490 140"  stroke="#C8962B" strokeWidth="1" opacity="0.5" fill="none"/>
          <path d="M490 140 Q450 200 390 210" stroke="#C8962B" strokeWidth="1" opacity="0.5" fill="none"/>
          <path d="M300 80 Q220 140 160 180"  stroke="#C8962B" strokeWidth="1" opacity="0.5" fill="none"/>
          <path d="M160 180 Q260 200 390 210" stroke="#C8962B" strokeWidth="1" opacity="0.4" fill="none"/>
        </svg>
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C8962B]">
            Our Ministry
          </p>
          <h2 className="mb-4 max-w-xl font-serif text-[34px] font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-[44px] lg:text-[54px]">
            Raising Leaders.{" "}
            <br className="hidden sm:block" />
            Reaching{" "}
            <span className="font-serif italic text-[#C8962B]">Nations.</span>
          </h2>
          <div className="mb-3 h-0.5 w-10 bg-[#C8962B]" />
          <p className="max-w-md text-[15px] leading-relaxed text-slate-500">
            Everything we do flows from one mission — to glorify God by teaching
            the Word, transforming lives, raising leaders, and taking the Gospel
            to the nations.
          </p>
        </div>
      </div>

      {/* ── MOBILE / TABLET CAROUSEL ────────────────────────────────────── */}
      <MobileCarousel />

      {/* ── DESKTOP 3-COL GRID ──────────────────────────────────────────── */}
      <div className="hidden lg:block px-6 pb-20">
        <div className="mx-auto max-w-7xl grid grid-cols-3 gap-8">
          {pillars.map((p) => (
            <PillarCard key={p.num} p={p} />
          ))}
        </div>
      </div>

      {/* ── DARK BANNER ─────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-slate-900">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-65 hidden lg:block"
          style={{
            backgroundImage: `url(${pastorBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-slate-900/60 to-slate-900" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:pl-75">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="lg:w-56 shrink-0">
              <svg className="mb-3 h-8 w-8 text-[#C8962B]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="font-serif text-[17px] italic leading-relaxed text-white/90">
                Go into all the world and preach the gospel to all creation."
              </p>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C8962B]">
                — Mark 16:15
              </p>
            </div>
            <div className="hidden h-28 w-px bg-white/10 lg:block" />
            <div className="grid grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 flex-1">
              {bannerLinks.map((item) => (
                <a key={item.label} href={item.href} className="group flex flex-col items-center gap-3 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C8962B]/40 bg-[#C8962B]/10 transition-colors duration-200 group-hover:bg-[#C8962B]/25">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest leading-snug text-white/70 transition-colors group-hover:text-white whitespace-pre-line">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 bg-[#FBF9F5]" />
    </section>
  );
};

export default Ministry;