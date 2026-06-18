import pastorImage from "../assets/Images/apsabout.png"; 

const credentials = [
  {
    label: "Ministry",
    value: "25+ Years in Full-Time Ministry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C8962B" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "Voice",
    value: "Author, Teacher & Mentor",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C8962B" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
        <path d="M4 19V6a2 2 0 012-2h12a2 2 0 012 2v13" />
        <path d="M4 19h16M9 10h6M9 14h4" />
      </svg>
    ),
  },
  {
    label: "Leadership",
    value: "Founder, Mystery Embassy International",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C8962B" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
        <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    label: "Family",
    value: "Married to Yeshuah, blessed with the mantle of Moses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C8962B" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section id="about" className="bg-[#FBF9F5] py-24 px-5 overflow-hidden lg:py-32">
      <div className="max-w-7xl mx-auto">

        {/* Mobile eyebrow */}
        <div className="flex items-center gap-3 mb-6 lg:hidden">
          <span className="h-0.5 w-8 bg-[#C8962B] shrink-0" />
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C8962B]">
            About Dr Cloudio
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* IMAGE COLUMN */}
          <div className="relative mb-14 lg:mb-0">
            {/* Gold offset border — desktop only */}
            <div className="hidden lg:block absolute -top-5 -left-5 w-[calc(100%-48px)] h-[calc(100%-48px)] border border-[#C8962B] z-0" />

            <div className="relative z-10">
              <img
                src={pastorImage}
                alt="Dr Cloudio"
                className="w-full max-h-120 object-cover object-top lg:max-h-none lg:aspect-3/4"
              />

              {/* 25+ years badge */}
              <div className="absolute bottom-0 right-0 bg-[#C8962B] text-[#FBF9F5] px-6 py-5 text-center min-w-25">
                <span className="block font-serif text-[40px] font-bold leading-none tracking-tight">25+</span>
                <span className="block text-[10px] font-semibold uppercase tracking-widest mt-1 opacity-90 leading-tight">
                  Years of<br />Ministry
                </span>
              </div>
            </div>

            {/* Floating stat card — desktop only */}
            <div className="hidden lg:flex absolute -bottom-6 -left-6 z-20 bg-white border border-[#e0d9ce] px-5 py-4 items-center gap-4">
              <div>
                <p className="font-serif text-[34px] font-bold text-[#C8962B] leading-none">40+</p>
                <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Countries Reached</p>
              </div>
              <div className="w-px h-10 bg-[#e0d9ce]" />
              <div>
                <p className="font-serif text-[34px] font-bold text-[#C8962B] leading-none">1M+</p>
                <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Lives Impacted</p>
              </div>
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="lg:pl-4">

            {/* Eyebrow — desktop */}
            <div className="hidden lg:flex items-center gap-3 mb-5">
              <span className="h-0.5 w-8 bg-[#C8962B] shrink-0" />
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C8962B]">
                About Dr Cloudio
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[46px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
              Transforming Lives<br />
              <span className="text-[#C8962B]">Restoring Destinies.</span>
            </h2>

            {/* Gold rule */}
            <div className="w-12 h-0.75 bg-[#C8962B] mb-6" />

            {/* Body copy */}
            <p className="text-[14px] lg:text-[15px] leading-relaxed text-slate-600 mb-4">
             Apostle Dr Cloudio is a passionate preacher, teacher, and visionary leader
              with a heart to see the Gospel of Yeshuah{" "}
              <strong className="font-semibold text-slate-900">transform lives and nations</strong>.
            </p>
            <p className="text-[14px] lg:text-[15px] leading-relaxed text-slate-600">
              With a deep commitment to the Word and the Holy Spirit, he has ministered in over{" "}
              <strong className="font-semibold text-slate-900">40 countries</strong>, equipping
              believers and igniting revival everywhere he goes.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-[3px] border-[#C8962B] pl-5 my-7">
              <p className="font-serif italic text-[16px] lg:text-[17px] leading-relaxed text-slate-700">
                "God did not call me to be comfortable. He called me to be faithful
                to preach, to build, and to send."
              </p>
            </blockquote>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-px bg-[#e0d9ce] border border-[#e0d9ce]">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="bg-[#FBF9F5] px-4 py-4 flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full border border-[#C8962B] flex items-center justify-center shrink-0 mt-0.5">
                    {cred.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.07em] text-slate-400 mb-0.5">
                      {cred.label}
                    </p>
                    <span className="text-[13px] font-medium text-slate-800 leading-snug">
                      {cred.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-8 flex flex-wrap items-center gap-4 gap-y-3">
              <div>
                <p className="font-serif italic text-[21px] text-slate-900 leading-none">
                  Apostle Dr Cloudio
                </p>
                <p className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold mt-1.5">
                  General Overseer &amp; Founder
                </p>
              </div>
              <div className="w-px h-10 bg-[#C8962B] opacity-50" />
              <p className="text-[12px] italic text-slate-400 leading-relaxed max-w-40">
                "Teaching truth, building spiritual colossals, transforming nations."
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;