import { Headphones, Radio, BookOpen } from "lucide-react";
import pastorImg from "../assets/Images/apsspotify.png";

const SpotifyCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-1/2"
          style={{
            backgroundImage: `url(${pastorImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-linear-to-r from-slate-900/30 via-slate-900/60 to-slate-900" />
        <div className="absolute inset-0 bg-slate-900/75 lg:hidden" />

        <div
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #C8962B 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-96 lg:min-h-105">

          <div className="hidden lg:block" />

          {/* Content (REDUCED SIZE ONLY) */}
          <div className="py-10 lg:py-12 lg:pl-12">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2.5">
               <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="#1DB954">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Now Streaming on Spotify
              </span>
            </div>

            {/* Headline (smaller) */}
            <h2 className="font-serif text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.1] text-white">
              Kingdom Truth.
              <br />
              <span className="italic" style={{ color: "#C8962B" }}>Everywhere</span>{" "}
              You Are.
            </h2>

            {/* Subtext */}
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/45">
              Powerful teachings. Revealing messages. Transforming lives — available anytime.
            </p>

            {/* Rule */}
            <div className="mt-5 h-px w-8" style={{ background: "#C8962B" }} />

            {/* Search */}
            <p className="mt-5 text-[12px] text-white/40">
              Search on Spotify:{" "}
              <span className="font-semibold" style={{ color: "#C8962B" }}>
                Dr. Cloudio (PhD)
              </span>
            </p>

            {/* Button (smaller) */}
            <a
              href="https://open.spotify.com"
              className="mt-6 inline-flex items-center gap-2 rounded-sm px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
              style={{ background: "#158F3E" }}
            >
                <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="#1DB954">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Listen on Spotify
            </a>

            {/* Features (smaller spacing) */}
            <div className="mt-7 flex flex-wrap gap-5">
              {[
                { icon: <Headphones size={14} />, label: "Listen Anytime" },
                { icon: <Radio size={14} />, label: "Be Inspired" },
                { icon: <BookOpen size={14} />, label: "Grow in Truth" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <span style={{ color: "#C8962B" }}>{f.icon}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
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