import { MapPin, Clock, Calendar } from "lucide-react";
import sundayFlyer from "../assets/Images/wordalive.png";
import fridayFlyer from "../assets/Images/tarry.png";

const services = [
  {
    day:   "Sunday",
    name:  "Sunday Worship Service",
    time:  "7:30 AM – 10:00 AM",
    flyer: sundayFlyer,
    icon:  <Calendar size={15} strokeWidth={1.5} />,
  },
  {
    day:   "Friday",
    name:  "Friday Night Power Service",
    time:  "6:00 PM – 8:00 PM",
    flyer: fridayFlyer,
    icon:  <Clock size={15} strokeWidth={1.5} />,
  },
];

const ChurchSection = () => (
  <section className="bg-white py-16 lg:py-20" style={{ fontFamily: "Inter, sans-serif" }}>
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

      {/* Header */}
      <div className="mb-10">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#A97C2F]">
          The Local Church
        </p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-['DM_Serif_Display'] leading-[1.08] text-[#1A1209]"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}>
            Find a Home.{" "}
            <em style={{ color: "#A97C2F" }}>Join the House.</em>
          </h2>
          <p className="max-w-sm text-[13px] leading-[1.8] text-[#1A1209]/50 lg:text-right">
            Mystery Embassy International — Weija Taptoe, Accra.
            A house of prayer, teaching, and encounter.
          </p>
        </div>
      </div>

      {/* Cards + Location in one row on desktop */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

        {/* Service Cards */}
        {services.map((s) => (
          <div key={s.day}
               className="group border border-[#E8E3DA] overflow-hidden hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300">

            {/* Flyer — full natural height, nothing cropped */}
            <div className="overflow-hidden bg-[#F5F0E8]">
              <img
                src={s.flyer}
                alt={s.name}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[#A97C2F]">{s.icon}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A97C2F]/50">
                  {s.day}
                </span>
              </div>
              <h3 className="font-['DM_Serif_Display'] text-[18px] leading-snug text-[#1A1209] mb-1">
                {s.name}
              </h3>
              <div className="flex items-center gap-1.5">
                <Clock size={11} className="text-[#A97C2F]" strokeWidth={1.5} />
                <span className="text-[11px] font-semibold text-[#A97C2F]">{s.time}</span>
              </div>
            </div>

          </div>
        ))}

        {/* Location Card */}
        <div className="border border-[#E8E3DA] p-6 flex flex-col justify-between gap-6">
          <div>
            <div className="flex h-10 w-10 items-center justify-center border border-[#A97C2F]/30 text-[#A97C2F] mb-4">
              <MapPin size={17} strokeWidth={1.5} />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A97C2F] mb-1">
              Location
            </p>
            <p className="font-['DM_Serif_Display'] text-[18px] text-[#1A1209] leading-snug mb-1">
              Mystery Embassy International
            </p>
            <p className="text-[13px] text-[#1A1209]/45">
              Weija Taptoe, Accra — Ghana
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#A97C2F] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A97C2F] transition-all hover:bg-[#A97C2F] hover:text-white"
            >
              <MapPin size={12} strokeWidth={1.5} /> Get Directions
            </a>
            <a
              href="#contact"
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