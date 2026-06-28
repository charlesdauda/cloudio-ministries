import { MapPin, Clock, Calendar } from "lucide-react";

const services = [
  {
    day:   "Sunday",
    name:  "Word Alive Service",
    time:  "7:30 AM – 10:00 AM",
    icon:  <Calendar size={15} strokeWidth={1.5} />,
    desc:  "Begin your week in the presence of God. Expect powerful worship, revelatory teaching, and a move of the Holy Spirit.",
  },
  {
    day:   "Friday",
    name:  "Friday Tarry Hour Service",
    time:  "6:00 PM – 8:00 PM",
    icon:  <Clock size={15} strokeWidth={1.5} />,
    desc:  "End your week in fire. Friday nights are marked by prophetic ministry, intercession, and supernatural encounters.",
  },
];

const ChurchSection = () => (
  <section className="bg-white py-16 lg:py-20" style={{ fontFamily: "Inter, sans-serif" }}>
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

      {/* Header */}
      <div className="mb-10">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#C8962B]">
          The Main Auditorium
        </p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-['DM_Serif_Display'] leading-[1.08] text-[#1A1209]"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}>
            Find a Home.{" "}
            <em style={{ color: "#C8962B" }}>Join the House.</em>
          </h2>
          <p className="max-w-sm text-[13px] leading-[1.8] text-[#1A1209]/50 lg:text-right">
            Mystery Embassy International Weija Tatop, Accra.
            A house of prayer, teaching, and encounter.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

        {/* Service Cards */}
        {services.map((s) => (
          <div key={s.day}
               className="border border-[#E8E3DA] p-7 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[#A97C2F]">{s.icon}</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A97C2F]/50">
                {s.day}
              </span>
            </div>
            <h3 className="font-['DM_Serif_Display'] text-[20px] leading-snug text-[#1A1209] mb-3">
              {s.name}
            </h3>
            <div className="flex items-center gap-1.5 mb-4">
              <Clock size={11} className="text-[#A97C2F]" strokeWidth={1.5} />
              <span className="text-[11px] font-semibold text-[#A97C2F]">{s.time}</span>
            </div>
            <div className="h-px w-8 bg-[#A97C2F]/30 mb-4" />
            <p className="text-[13px] leading-[1.85] text-[#1A1209]/55">{s.desc}</p>
          </div>
        ))}

        {/* Location Card */}
        <div className="border border-[#E8E3DA] p-7 flex flex-col justify-between gap-8">
          <div>
            <div className="flex h-10 w-10 items-center justify-center border border-[#A97C2F]/30 text-[#A97C2F] mb-5">
              <MapPin size={17} strokeWidth={1.5} />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A97C2F] mb-2">
              Location
            </p>
            <p className="font-['DM_Serif_Display'] text-[20px] text-[#1A1209] leading-snug mb-1">
              Mystery Embassy International
            </p>
            <div className="h-px w-8 bg-[#C8962B]/30 my-4" />
            <p className="text-[13px] text-[#1A1209]/45 leading-relaxed">
              Weija Tatop, Accra — Ghana
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://maps.app.goo.gl/zM2kBNHcbGgS2NoHA?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#C8962B] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C8962B] transition-all hover:bg-[#C8962B] hover:text-white"
            >
              <MapPin size={12} strokeWidth={1.5} /> Get Directions
            </a>
            <a
              href="https://wa.me/233244496968"
              className="inline-flex items-center justify-center gap-2 bg-[#1A1209] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:opacity-80"
            >
              Plan Your Visit
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ChurchSection;