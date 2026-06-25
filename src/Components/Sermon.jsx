import { useEffect, useRef, useState, useCallback } from "react";
import { FaSpotify, FaTelegram, FaFacebook, FaYoutube, FaPlay, FaTiktok } from "react-icons/fa6";
import sermonFlyer from "../assets/Images/apsabout.png";

// ── Replace with your actual podcast flyer image ──
import podcastFlyer from "../assets/Images/apsabout.png";

const spotifySermons = [
  {
    id:   "1FOfCwZ4w9zpKGwUabCNpQ",
    title: "Sermon Title One",
    desc:  "A powerful word on the apostolic mandate and the mysteries of the Kingdom.",
  },
  {
    id:   "359ATPI5pCVtEPqrXoFpZo",
    title: "Sermon Title Two",
    desc:  "Prophetic insights that bring clarity to your calling and destiny in God.",
  },
  {
    id:   "1CoHzgpNzZyQC4SVCHqmVi",
    title: "Sermon Title Three",
    desc:  "Revelatory teaching on healing, wholeness, and the power of Yeshuah.",
  },
];

const youtubeSermons = [
  {
    id:   "Ty0OfddxCm0",
    title: "Kingdom Authority",
    desc:  "Understanding your authority as a believer in Yeshuah.",
  },
  {
    id:   "tHV8ZQQorbs",
    title: "The Prophetic Word",
    desc:  "How to receive and walk in the prophetic word over your life.",
  },
  {
    id:   "kOf0cq8ikiU",
    title: "Fire of Revival",
    desc:  "A message that ignites passion and hunger for the presence of God.",
  },
];

// ── Update these with your actual podcast schedule & links ──
const podcastPlatforms = [
  {
    icon:  <FaFacebook size={18} />,
    label: "Facebook Live",
    color: "#1877F2",
    url:   "https://web.facebook.com/YOUR_PAGE",
  },
  {
    icon:  <FaTiktok size={18} />,
    label: "TikTok Live",
    color: "#000000",
    url:   "https://www.tiktok.com/@YOUR_HANDLE",
  },
];

/* ─────────────────────────────────────────────
   Swipeable carousel – auto-advances every 4 s,
   pauses on hover/touch, supports manual swipe
───────────────────────────────────────────── */
const Carousel = ({ items, renderCard, autoPlay = true, interval = 4000 }) => {
  const [current, setCurrent]   = useState(0);
  const [paused,  setPaused]    = useState(false);
  const touchStartX             = useRef(null);
  const timerRef                = useRef(null);
  const total                   = items.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  // auto-play
  useEffect(() => {
    if (!autoPlay || paused) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, paused, next, interval]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; setPaused(true); };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
    setPaused(false);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, i) => (
          <div key={i} className="w-full shrink-0">
            {renderCard(item)}
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="mt-5 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width:      i === current ? "24px" : "6px",
              background: i === current ? "#A97C2F" : "#E8E3DA",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const SectionLabel = ({ icon, label, color }) => (
  <div className="mb-8 flex items-center gap-3">
    <span style={{ color }}>{icon}</span>
    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#A97C2F]">
      {label}
    </p>
    <span className="h-px flex-1 bg-[#E8E3DA]" />
  </div>
);

const Sermons = () => (
  <div className="bg-white">

    {/* ── Intro ── */}
    <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#A97C2F]">
            The Word
          </p>
          <h2 className="font-['DM_Serif_Display'] leading-[1.08] text-[#1A1209]"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Sound Doctrine.<br />
            <em style={{ color: "#A97C2F" }}>Timeless Truth.</em>
          </h2>
        </div>
        <div className="lg:pl-12">
          <p className="max-w-md text-[14px] leading-[1.9] text-[#1A1209]/55">
            Dr Cloudio's messages carry a rare depth — rooted in Scripture, revealed by the Spirit,
            and delivered with apostolic authority. Access his teachings across all platforms and
            allow the Word to transform your life.
          </p>
        </div>
      </div>
    </div>

    {/* ── Featured Flyer ── */}
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
      <div className="relative overflow-hidden">
        <img
          src={sermonFlyer}
          alt="Featured Sermon"
          className="w-full object-cover"
          style={{ aspectRatio: "21/9" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-14">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#A97C2F]">
            Featured Message
          </p>
          <h3 className="font-['DM_Serif_Display'] text-white leading-snug mb-3"
              style={{ fontSize: "clamp(22px, 3.5vw, 40px)" }}>
            The Mystery of<br />
            <em style={{ color: "#A97C2F" }}>Kingdom Authority.</em>
          </h3>
          <p className="max-w-xs text-[13px] leading-[1.8] text-white/60 mb-6">
            A landmark teaching on apostolic governance, spiritual authority,
            and the believer's dominion mandate in the earth.
          </p>
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 bg-[#A97C2F] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90"
          >
            <FaPlay size={11} /> Listen Now
          </a>
        </div>
      </div>
    </div>

    {/* ── Spotify ── */}
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
      <SectionLabel icon={<FaSpotify size={20} />} label="Now on Spotify" color="#1DB954" />

      {/* desktop: grid | mobile: carousel */}
      <div className="hidden lg:grid grid-cols-3 gap-5">
        {spotifySermons.map((s) => (
          <SpotifyCard key={s.id} s={s} />
        ))}
      </div>
      <div className="lg:hidden">
        <Carousel items={spotifySermons} renderCard={(s) => <SpotifyCard s={s} />} />
      </div>
    </div>

    {/* ── YouTube ── */}
    <div className="bg-[#FDFCFA] py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionLabel icon={<FaYoutube size={20} />} label="Watch on YouTube" color="#FF0000" />

        <div className="hidden lg:grid grid-cols-3 gap-5">
          {youtubeSermons.map((v) => (
            <YoutubeCard key={v.id} v={v} />
          ))}
        </div>
        <div className="lg:hidden">
          <Carousel items={youtubeSermons} renderCard={(v) => <YoutubeCard v={v} />} />
        </div>
      </div>
    </div>

    {/* ── Word Unmuted Podcast ── */}
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
      <SectionLabel icon={<FaFacebook size={20} />} label="Word Unmuted — Live Podcast" color="#1877F2" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">

        {/* Flyer */}
        <div className="overflow-hidden border border-[#E8E3DA]">
          <img
            src={podcastFlyer}
            alt="Word Unmuted Podcast"
            className="w-full object-cover"
            style={{ aspectRatio: "4/3" }}
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-['DM_Serif_Display'] text-[#1A1209] leading-snug mb-3"
                style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
              Word Unmuted.<br />
              <em style={{ color: "#A97C2F" }}>Raw. Real. Revelatory.</em>
            </h3>
            {/* ── Replace placeholder text below with your own description ── */}
            <p className="text-sm leading-[1.9] text-[#1A1209]/55 mb-4">
              Join Dr Cloudio live for <em>Word Unmuted</em> — an unfiltered conversation
              about faith, purpose, and the Kingdom of God. No scripts, no rehearsals;
              just the Spirit speaking through a yielded vessel in real time.
            </p>

            {/* Schedule */}
            <div className="border-l-2 border-[#A97C2F] pl-4 mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A97C2F] mb-2">
                Live Schedule
              </p>
              {/* ── Replace DAY / TIME / TIMEZONE with your actual schedule ── */}
              <p className="text-sm text-[#1A1209]/70 leading-[1.8]">
                Facebook &amp; TikTok<br />
                Every Wednesday · 7:00 PM – 8:30 PM (GMT+0)
              </p>
            </div>
          </div>

          {/* Platform buttons */}
          <div className="flex flex-wrap gap-3">
            {podcastPlatforms.map((p) => (
              <a
                key={p.label}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#E8E3DA] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1209] transition-all duration-200 hover:border-[#A97C2F] hover:text-[#A97C2F]"
              >
                <span style={{ color: p.color }}>{p.icon}</span>
                {p.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-[#1A1209]/40">
            Tune in live — or catch the replay on YouTube
          </p>
        </div>
      </div>
    </div>

    {/* ── Telegram Banner ── */}
    <div className="bg-[#FDFCFA] py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="border border-[#E8E3DA] p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#229ED9]/25 text-[#229ED9]">
              <FaTelegram size={28} />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#A97C2F] mb-2">
                Telegram Channel
              </p>
              <h3 className="font-['DM_Serif_Display'] text-[#1A1209] mb-3"
                  style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>
                Hundreds of Messages<br />
                <em style={{ color: "#A97C2F" }}>Waiting for You.</em>
              </h3>
              {/* ── Replace placeholder text below with your own ── */}
              <p className="max-w-lg text-sm leading-[1.9] text-[#1A1209]/55">
                Our Telegram channel is home to a rich archive of audio teachings,
                prophetic words, and daily devotionals from Dr Cloudio — messages
                that go deep and stay with you long after you've heard them.
                Join the community and let the Word find you wherever you are.
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://t.me/YOUR_CHANNEL"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 bg-[#229ED9] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
          >
            <FaTelegram size={15} /> Join on Telegram
          </a>

        </div>
      </div>
    </div>

  </div>
);

/* ── Extracted card components so Carousel can reuse them ── */

const SpotifyCard = ({ s }) => (
  <div className="flex flex-col gap-4 border border-[#E8E3DA] p-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300">
    <iframe
      src={`https://open.spotify.com/embed/episode/${s.id}?utm_source=generator&theme=0`}
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-none"
    />
    <div>
      <h4 className="font-['DM_Serif_Display'] text-[17px] text-[#1A1209] mb-1">{s.title}</h4>
      <p className="text-xs leading-[1.8] text-[#1A1209]/50">{s.desc}</p>
    </div>
    <a
      href={`https://open.spotify.com/episode/${s.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1DB954] hover:opacity-70 transition-opacity"
    >
      <FaSpotify size={13} /> Open in Spotify
    </a>
  </div>
);

const YoutubeCard = ({ v }) => (
  <div className="flex flex-col gap-4 border border-[#E8E3DA] bg-white p-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300">
    <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
      <iframe
        src={`https://www.youtube.com/embed/${v.id}`}
        title={v.title}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
    <div>
      <h4 className="font-['DM_Serif_Display'] text-[17px] text-[#1A1209] mb-1">{v.title}</h4>
      <p className="text-xs leading-[1.8] text-[#1A1209]/50">{v.desc}</p>
    </div>
    <a
      href={`https://youtu.be/${v.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF0000] hover:opacity-70 transition-opacity"
    >
      <FaYoutube size={13} /> Watch on YouTube
    </a>
  </div>
);

export default Sermons;