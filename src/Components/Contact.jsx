import { useRef, useState, useEffect, useCallback } from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaGlobe, } from "react-icons/fa6";

const socials = [
  {
    icon:    <FaFacebook size={22} />,
    label:   "Facebook",
    handle:  "Dr Cloudio",
    href:    "https://www.facebook.com/share/1Lnhxva2Pv/?mibextid=wwXIfr",
    color:   "#1877F2",
  },
  {
    icon:    <FaTiktok size={22} />,
    label:   "TikTok",
    handle:  "@drcloudio",
    href:    "https://www.tiktok.com/@dr.cloudio",
    color:   "#010101",
  },
  {
    icon:    <FaInstagram size={22} />,
    label:   "Instagram",
    handle:  "@drcloudio",
    href:    "https://www.instagram.com/pscloudio",
    color:   "#E1306C",
  },
];

function MobileCarousel({ children, autoInterval = 4000 }) {
  const [active, setActive] = useState(0);
  const count = children.length;
  const startX = useRef(null);
  const isDragging = useRef(false);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (idx) => setActive((idx + count) % count),
    [count]
  );

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(active + 1), autoInterval);
    return () => clearInterval(timerRef.current);
  }, [active, goTo, autoInterval]);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
    clearInterval(timerRef.current);
  };
  const onTouchEnd = (e) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? active + 1 : active - 1);
    isDragging.current = false;
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {children.map((child, i) => (
          <div key={i} className="min-w-full px-1">
            {child}
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width:        i === active ? 20 : 6,
              height:       6,
              borderRadius: 3,
              background:   i === active ? "#A97C2F" : "#E8E3DA",
              border:       "none",
              padding:      0,
              cursor:       "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const SectionHeading = ({ eyebrow, title }) => (
  <div className="mb-10">
    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#C8962B] mb-2">
      {eyebrow}
    </p>
    <div className="h-px w-10 bg-[#C8962B] mb-6" />
    {title && (
      <h2
        className="font-['DM_Serif_Display'] text-[#1A1209]"
        style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
      >
        {title}
      </h2>
    )}
  </div>
);

function ContactCard({ c }) {
  return (
    <a
      href={c.href}
      className="group flex flex-col gap-4 border border-[#E8E3DA] p-6 transition-all duration-300 hover:border-[#C8962B] hover:shadow-[0_6px_24px_rgba(200,150,43,0.08)]"
    >
      <div className="flex h-10 w-10 items-center justify-center border border-[#E8E3DA] text-[#C8962B] transition-colors duration-300 group-hover:border-[#C8962B]">
        {c.icon}
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8962B] mb-1">
          {c.label}
        </p>
        <p className="text-sm text-[#1A1209] font-medium leading-[1.6] break-all">
          {c.value}
        </p>
      </div>
      <span className="mt-auto text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1209]/25 transition-colors duration-300 group-hover:text-[#C8962B]">
        Contact →
      </span>
    </a>
  );
}

function SocialCard({ s }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 border border-[#E8E3DA] p-6 transition-all duration-300 hover:border-[#C8962B] hover:shadow-[0_6px_24px_rgba(200,150,43,0.08)]"
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#E8E3DA] transition-colors duration-300 group-hover:border-current"
        style={{ color: s.color }}
      >
        {s.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8962B] mb-0.5">
          {s.label}
        </p>
        <p className="text-sm font-semibold text-[#1A1209] truncate">{s.handle}</p>
        <p className="text-xs text-[#1A1209]/40 mt-0.5">{s.desc}</p>
      </div>
      <span className="shrink-0 text-[#1A1209]/15 transition-all duration-300 group-hover:text-[#C8962B] group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

const Contact = () => (
  <div className="bg-white">
    <div className="relative border-b border-[#E8E3DA]">
      <div className="mx-auto max-w-7xl px-5 pt-24 pb-20 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 mb-8">
          <FaGlobe size={11} className="text-[#C8962B]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8962B]">
            International Ministry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-end">
          <div>
            <h1
              className="font-['DM_Serif_Display'] leading-[1.06] text-[#1A1209] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 62px)" }}
            >
              Connect With<br />
              <em style={{ color: "#C8962B" }}>Dr Cloudio.</em>
            </h1>
            <p className="text-sm leading-loose text-[#1A1209]/50 max-w-sm">
              Dr Cloudio's apostolic ministry spans continents. Whether you are reaching
              out from Africa, Europe, the Americas, or beyond every inquiry is
              received with the same care and urgency.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-px bg-[#E8E3DA] border border-[#E8E3DA] lg:ml-auto lg:w-full">
            {[
              { num: "6+",   desc: "Nations Reached"  },
              { num: "10K+", desc: "Global Followers"  },
              { num: "5+",   desc: "Platforms Active"  },
            ].map((s) => (
              <div key={s.desc} className="bg-white px-6 py-8 text-center">
                <p
                  className="font-['DM_Serif_Display'] text-[#1A1209] mb-1"
                  style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                >
                  {s.num}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1A1209]/40">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="h-px bg-[#E8E3DA]" />
    </div>

    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <SectionHeading eyebrow="Social Media" title="Follow the Ministry" />

      <div className="hidden sm:grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {socials.map((s) => (
          <SocialCard key={s.label} s={s} />
        ))}
      </div>

      <div className="sm:hidden">
        <MobileCarousel autoInterval={3500}>
          {socials.map((s) => <SocialCard key={s.label} s={s} />)}
        </MobileCarousel>
      </div>
    </div>

  </div>
);

export default Contact;