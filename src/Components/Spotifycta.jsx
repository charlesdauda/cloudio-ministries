import { Headphones, Radio, BookOpen } from "lucide-react";
import pastorImg from "../assets/Images/apshero1.png";

const SpotifyIcon = ({ className = "h-5 w-5", color = "#1DB954" }) => (
  <svg viewBox="0 0 24 24" className={className} fill={color}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const features = [
  { icon: <Headphones size={16} strokeWidth={1.5} />, label: "Listen Anytime" },
  { icon: <Radio size={16} strokeWidth={1.5} />, label: "Be Inspired" },
  { icon: <BookOpen size={16} strokeWidth={1.5} />, label: "Grow in Truth" },
];

const SpotifyCTA = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0F0D0B" }}>
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-[52%]"
          style={{
            backgroundImage: `url(${pastorImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

        <div
          className="absolute inset-y-0 left-0 hidden w-[52%] lg:block"
          style={{
            background: "linear-gradient(to right, rgba(15,13,11,0.1) 0%, rgba(15,13,11,0.55) 60%, rgba(15,13,11,1) 100%)",
          }}
        />

        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: "rgba(15,13,11,0.72)" }}
        />

        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #A97C2F 0%, transparent 65%)" }}
        />

        <div
          className="pointer-events-none absolute -bottom-10 right-0 h-56 w-56 rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #1DB954 0%, transparent 65%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ minHeight: "420px" }}>

          <div className="hidden lg:block" />

          {/* Right col */}
          <div className="py-12 lg:py-16 lg:pl-10">

            <div className="mb-6 flex items-center gap-2.5">
              <SpotifyIcon className="h-5 w-5" color="#1DB954" />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.26em]"
                style={{ color: "#A97C2F", fontFamily: "Inter,sans-serif" }}
              >
                Now Streaming on Spotify
              </span>
            </div>

            <h2
              className="font-['DM_Serif_Display'] leading-[1.08] text-white"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Kingdom Truth.
              <br />
              <em style={{ color: "#A97C2F", fontStyle: "italic" }}>Everywhere</em>{" "}
              You Are.
            </h2>

            <p
              className="mt-4 max-w-xs text-[13px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Inter,sans-serif" }}
            >
              Powerful teachings. Revealing messages. Transforming lives available anytime, anywhere.
            </p>

            <div className="mt-5 h-px w-8" style={{ background: "#A97C2F" }} />

            <p
              className="mt-5 text-[12px]"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Inter,sans-serif" }}
            >
              Search on Spotify:{" "}
              <span className="font-semibold" style={{ color: "#A97C2F" }}>
                Dr. Cloudio (PhD)
              </span>
            </p>

            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-none px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{ background: "#1DB954", fontFamily: "Inter,sans-serif" }}
            >
              <SpotifyIcon className="h-4 w-4" color="white" />
              Listen on Spotify
            </a>

            <div className="mt-8 mb-6 h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }} />

            <div className="flex flex-wrap gap-x-7 gap-y-4">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <div
                    className="flex h-9 w-9 items-center justify-center border transition-all"
                    style={{ borderColor: "rgba(169,124,47,0.3)", color: "#A97C2F" }}
                  >
                    {f.icon}
                  </div>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter,sans-serif" }}
                  >
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifyCTA;