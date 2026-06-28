import { useState, useEffect, useRef, useCallback } from "react";
import { BookOpen, Users, Flame, Globe, Zap, Heart } from "lucide-react";
import pastorBanner from "../assets/Images/apsc.png";
import img1 from "../assets/Images/apsmandate.png";
import img2 from "../assets/Images/apsprophetic.png";
import img3 from "../assets/Images/apsahealing.png";
import img4 from "../assets/Images/apsmystical.png";
import img5 from "../assets/Images/apscounseling.png";
import img6 from "../assets/Images/apsbiblical.png";

const pillars = [
  { num:"01", img:img1, icon:<BookOpen size={22} strokeWidth={1.5}/>, title:"Apostolic Mandate",       body:"Grounded in the foundation of the apostles and prophets, Dr Cloudio carries a divine assignment to plant, establish, and govern God's purposes on the earth." },
  { num:"02", img:img2, icon:<Zap     size={22} strokeWidth={1.5}/>, title:"Prophetic Ministry",       body:"Through prophetic revelation and spiritual discernment, Dr Cloudio communicates the heart and mind of God, bringing direction, correction, and clarity to nations." },
  { num:"03", img:img3, icon:<Flame   size={22} strokeWidth={1.5}/>, title:"Healing & Revival",        body:"Through the power of the Holy Spirit, Dr Cloudio ministers healing, deliverance, and restoration bringing freedom to the oppressed and hope to the broken." },
  { num:"04", img:img4, icon:<Globe   size={22} strokeWidth={1.5}/>, title:"Mystical Teachings",       body:"With a unique grace for unveiling Kingdom mysteries, Dr Cloudio teaches profound spiritual realities that deepen believers' understanding of God and His purposes." },
  { num:"05", img:img5, icon:<Users   size={22} strokeWidth={1.5}/>, title:"Counseling & Mentorship",  body:"Through wisdom, mentorship, and pastoral counsel, Dr Cloudio guides individuals towards their purpose navigating their footsteps with faith, clarity, and conviction." },
  { num:"06", img:img6, icon:<Heart   size={22} strokeWidth={1.5}/>, title:"Biblical Exposition",      body:"With clarity and depth, Dr Cloudio unpacks the Scriptures in ways that challenge the mind, stir the spirit, and ignite a deeper hunger for the Word of God." },
];

const PillarCard = ({ p }) => (
  <div className="group overflow-hidden bg-white border border-[#E8E3DA] shadow-[0_1px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.09)] transition-all duration-300 cursor-grab active:cursor-grabbing select-none">
    <div className="overflow-hidden" style={{ height:"260px" }}>
      <img src={p.img} alt={p.title} draggable="false"
           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
    </div>
    <div className="px-7 py-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-[#C8962B]">{p.icon}</span>
        <span className="h-px flex-1 bg-[#E8E3DA]" />
        <span className="text-[11px] font-medium text-[#C8962B]/50" style={{ fontFamily:"Inter,sans-serif" }}>{p.num}</span>
      </div>
      <h3 className="font-['DM_Serif_Display'] mb-3 leading-snug text-[#1A1209]" style={{ fontSize:"21px" }}>
        {p.title}
      </h3>
      <p className="mb-6 text-[13px] leading-[1.85] text-[#1A1209]/55" style={{ fontFamily:"Inter,sans-serif" }}>{p.body}</p>
    </div>
  </div>
);

const Carousel = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const dragX = useRef(null);
  const autoRef = useRef(null);
  const total = pillars.length;
  const pages = Math.ceil(total / perPage);

  useEffect(() => {
    const check = () => setPerPage(window.innerWidth >= 1024 ? 3 : 1);
    check(); window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  useEffect(() => { setPage(0); }, [perPage]);

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setPage((p) => (p + 1) % pages), 4000);
  }, [pages]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoRef.current);
  }, [startAuto]);

  const goTo = (n) => { setPage((n+pages)%pages); startAuto(); };
  const onStart = (x) => { dragX.current = x; clearInterval(autoRef.current); };
  const onEnd = (x) => { const d=(dragX.current??x)-x; if(Math.abs(d)>40) goTo(page+(d>0?1:-1)); else startAuto(); dragX.current=null; };

  return (
    <div>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)]"
             style={{ transform:`translateX(-${page*100}%)` }}
             onMouseDown={(e)=>onStart(e.clientX)} onMouseUp={(e)=>onEnd(e.clientX)}
             onTouchStart={(e)=>onStart(e.touches[0].clientX)} onTouchEnd={(e)=>onEnd(e.changedTouches[0].clientX)}>
          {Array.from({length:pages},(_,pi)=>(
            <div key={pi} className="w-full shrink-0 grid gap-6" style={{gridTemplateColumns:`repeat(${perPage},1fr)`}}>
              {pillars.slice(pi*perPage,(pi+1)*perPage).map(p=><PillarCard key={p.num} p={p}/>)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-2">
        {Array.from({length:pages},(_,i)=>(
          <button key={i} onClick={()=>goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i===page?"w-8 bg-[#C8962B]":"w-2 bg-[#C8962B]/20"}`}/>
        ))}
      </div>
    </div>
  );
};

const Ministry = () => (
  <section id="ministry" className="scroll-mt-24 overflow-hidden bg-white">
    <div className="mx-auto max-w-7xl px-5 pt-24 pb-14 sm:px-8 lg:px-12 lg:pt-28 lg:pb-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#C8962B]"
             style={{ fontFamily:"Inter,sans-serif" }}>Ministry</p>
          <h2 className="font-['DM_Serif_Display'] leading-[1.08] text-[#1A1209]"
              style={{ fontSize:"clamp(34px, 4.5vw, 52px)" }}>
            Expressions of<br /><em style={{ color:"#C8962B" }}>the Mandate.</em>
          </h2>
        </div>
        <div className="lg:pb-2">
          <p className="max-w-md text-[14px] leading-[1.9] text-[#1A1209]/55" style={{ fontFamily:"Inter,sans-serif" }}>
            Rooted in the Word and empowered by the Holy Spirit, this ministry exists to restore lives,
            reveal Kingdom mysteries, raise transformational leaders, and advance God's purpose across nations.
          </p>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
      <Carousel />
    </div>

    <div className="relative overflow-hidden bg-[#0F0D0B]">

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-72 hidden lg:block"
        style={{ backgroundImage:`url(${pastorBanner})`, backgroundSize:"cover", backgroundPosition:"center top" }}
      >
        <div className="absolute inset-0" style={{ background:"linear-gradient(to right, transparent 0%, rgba(15,13,11,0.6) 65%, rgba(15,13,11,1) 100%)" }}/>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:pl-80 flex items-center justify-center lg:justify-start">
        <div className="max-w-xl text-center lg:text-left">
          <svg className="mx-auto lg:mx-0 mb-6 h-8 w-8 text-[#C8962B]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>

          <p
            className="font-['DM_Serif_Display'] italic leading-[1.7] text-white/85"
            style={{ fontSize:"clamp(18px, 2.5vw, 26px)" }}
          >
            Because it has been given unto you to know the mysteries of the kingdom of heaven.
          </p>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#C8962B]"
              style={{ fontFamily:"Inter,sans-serif" }}
            >
              Matthew 13:11
            </p>
          </div>

        </div>
      </div>
    </div>

    <div className="h-16 bg-white" />
  </section>
);

export default Ministry;