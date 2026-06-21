import pastorImage from "../assets/Images/apsabout.png";

const checkItems = [
  "21 Years in Full-Time Ministry",
  "Author, Teacher & Mentor",
  "Founder of Mystery Embassy International",
  "Married to Yeshuah & Blessed with the Mantle of Moses",
  "Ministered in 10+ Countries",
  "Apostolic & Prophetic Mandate",
];

const Check = () => (
  <svg viewBox="0 0 18 18" className="mt-0.5 h-4 w-4 shrink-0" fill="none">
    <circle cx="9" cy="9" r="8.25" stroke="#A97C2F" strokeWidth="1.1" />
    <path d="M5.5 9.5l2.5 2.5 4.5-5.5" stroke="#A97C2F" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const About = () => (
  <section id="about" className="overflow-hidden bg-[#FAFAF7] px-5 py-20 sm:px-8 lg:py-28 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Text */}
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#A97C2F]"
             style={{ fontFamily:"Inter,sans-serif" }}>
            About Dr Cloudio
          </p>

          {/* Headline — exactly like the screenshot: large, elegant, italic gold part */}
          <h2 className="font-['DM_Serif_Display'] mb-6 leading-[1.1] text-[#1A1209]"
              style={{ fontSize:"clamp(36px, 4.5vw, 54px)" }}>
            The Man Behind<br />
            <em style={{ color:"#A97C2F" }}>The Mandate.</em>
          </h2>

          <div className="mb-7 h-px w-10 bg-[#A97C2F]" />

          <p className="mb-9 max-w-lg text-[14px] leading-[1.9] text-[#1A1209]/58"
             style={{ fontFamily:"Inter,sans-serif" }}>
            Apostle Dr Cloudio is a passionate preacher, teacher, and visionary leader
            with a heart to see the Gospel of Yeshuah transform lives and nations. With
            a deep commitment to the Word, he has ministered across the globe equipping
            believers and igniting revival everywhere he goes.
          </p>

          {/* Checklist */}
          <div className="mb-10 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2"
               style={{ fontFamily:"Inter,sans-serif" }}>
            {checkItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check />
                <span className="text-[13px] leading-snug text-[#1A1209]/60">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="#contact"
             className="inline-flex items-center border border-[#A97C2F] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A97C2F] transition-all hover:bg-[#A97C2F] hover:text-white"
             style={{ fontFamily:"Inter,sans-serif" }}>
            Read More
          </a>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <div className="absolute -bottom-4 -right-4 h-full w-full border border-[#A97C2F]/20" />
          <div className="relative z-10 overflow-hidden">
            <img src={pastorImage} alt="Apostle Dr Cloudio"
                 className="w-full object-cover object-top" style={{ aspectRatio:"3/4" }} />
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;