import graduationImage from "../assets/Images/apshero1.png";

const degrees = [
  {
    level:       "Doctor of Philosophy (PhD)",
    field:       "Theology & Ministry Leadership",
    institution: "Institution Name",
    year:        "2018",
    description: "Doctoral research focused on apostolic governance, Kingdom theology, and the role of prophetic ministry in transforming nations and establishing God's purposes in the earth.",
  },
  {
    level:       "Master of Divinity (MDiv)",
    field:       "Biblical Studies & Missiology",
    institution: "Institution Name",
    year:        "2012",
    description: "Graduate study in biblical exposition, systematic theology, and cross-cultural missions — equipping Dr Cloudio with a strong doctrinal foundation for global ministry.",
  },
  {
    level:       "Bachelor of Theology (BTh)",
    field:       "Pastoral Ministry",
    institution: "Institution Name",
    year:        "2008",
    description: "Foundational training in pastoral care, homiletics, and church leadership that laid the groundwork for a life of full-time ministry and apostolic service.",
  },
];

const Education = () => (
  <section className="overflow-hidden bg-[#FDFCFA] py-20 lg:py-28" style={{ fontFamily: "Inter, sans-serif" }}>
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
        <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#C8962B]">
            Academic Background
            </p>
            <h2 className="font-['DM_Serif_Display'] leading-[1.08] text-[#1A1209]"
                style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Rooted in the Word.<br />
            <em style={{ color: "#C8962B" }}>Grounded in Truth.</em>
            </h2>
        </div>
        <div className="lg:pb-2 lg:pl-12">
            <p className="max-w-md text-[14px] leading-[1.9] text-[#1A1209]/55">
            Dr Cloudio's academic journey reflects a deep commitment to understanding
            the Word of God with both intellectual rigour and spiritual depth — equipping
            him to teach, lead, and transform with authority and clarity.
            </p>
        </div>
        </div>

      {/* Main Grid — image left, degrees right */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">

        {/* Image — landscape */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 h-full w-full border border-[#A97C2F]/15 z-0" />
          <div className="relative z-10 overflow-hidden">
            <img
              src={graduationImage}
              alt="Dr Cloudio — Graduation"
              className="w-full object-cover object-center"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
          {/* Gold accent tag */}
          <div className="absolute -bottom-5 right-6 z-20 bg-[#A97C2F] px-6 py-4">
            <p className="font-['DM_Serif_Display'] text-[13px] italic text-white leading-snug">
              "Study to show thyself<br />approved unto God."
            </p>
            <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70">
              — 2 Timothy 2:15
            </p>
          </div>
        </div>

        {/* Degrees */}
        <div className="flex flex-col gap-0 divide-y divide-[#E8E3DA]">
          {degrees.map((d, i) => (
            <div key={i} className="py-8 first:pt-0">
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#C8962B] mb-1.5">
                    {d.field}
                  </p>
                  <h3 className="font-['DM_Serif_Display'] text-[20px] leading-snug text-[#1A1209]">
                    {d.level}
                  </h3>
                </div>
                <span className="shrink-0 mt-1 text-[11px] font-semibold text-[#C8962B]/50 border border-[#C8962B]/20 px-2.5 py-1">
                  {d.year}
                </span>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1A1209]/35 mb-3">
                {d.institution}
              </p>
              <p className="text-[13px] leading-[1.85] text-[#1A1209]/55">
                {d.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default Education;