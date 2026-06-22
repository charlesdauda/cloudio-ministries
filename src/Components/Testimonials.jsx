import { useState, useEffect, useRef, useCallback } from "react";
import { MapPin, Quote } from "lucide-react";

const testimonials = [
  { name:"Joseph M.",   location:"Kumasi, Ghana",              category:"Healing & Restoration",  quote:"I was healed from a chronic illness that doctors couldn't explain. What medicine couldn't do, God did in a moment. Jesus is still healing." },
  { name:"Blessing O.", location:"Lagos, Nigeria",             category:"Financial Breakthrough",  quote:"From debt to abundance God turned my situation around completely. Doors opened that I never even knocked on. I am living proof of His faithfulness." },
  { name:"Thabo R.",    location:"Johannesburg, South Africa", category:"Deliverance",             quote:"I was bound for years by things I couldn't explain. One encounter with God through this ministry and I walked out completely free. No chains." },
  { name:"Jessica L.",  location:"Miami, USA",                 category:"Salvation",               quote:"I came to the crusade out of curiosity. I left with a new life. I encountered Jesus in a way I never thought possible. Everything changed that night." },
  { name:"Amara Osei",  location:"Accra, Ghana",               category:"Purpose & Calling",       quote:"I had been drifting for years with no real direction. The teaching here gave me clarity about who I am and what I was created to do. Priceless." },
  { name:"Emmanuel B.", location:"London, UK",                 category:"Prophetic Word",          quote:"A word was spoken over my life that described things no one could have known. Six months later, every single thing has come to pass. God is not silent." },
];

const initials = (name) => name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

const TestiCard = ({ t }) => (
  <div className="flex h-full flex-col bg-[#FAFAF7] border border-[#E8E3DA] shadow-[0_1px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 p-7 select-none">

      <Quote size={30} strokeWidth={0} fill="#A97C2F" className="mb-4" />

      <p className="mb-4 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#A97C2F]"
         style={{ fontFamily:"Inter,sans-serif" }}>{t.category}</p>
      <p className="font-['DM_Serif_Display'] flex-1 text-[16px] italic leading-[1.8] text-[#1A1209]/75">
        "{t.quote}"
      </p>
      <div className="my-6 h-px bg-[#E8E3DA]" />
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#A97C2F]/40 font-['DM_Serif_Display'] text-[13px] italic text-[#A97C2F]">
          {initials(t.name)}
        </div>
        <div>
          <p className="text-[13px] font-semibold text-[#1A1209]" style={{ fontFamily:"Inter,sans-serif" }}>{t.name}</p>
          <div className="mt-0.5 flex items-center gap-1">
            <MapPin size={9} className="text-[#A97C2F] shrink-0" />
            <p className="text-[11px] text-[#1A1209]/40" style={{ fontFamily:"Inter,sans-serif" }}>{t.location}</p>
          </div>
        </div>
      </div>
  </div>
);

const Carousel = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const dragX = useRef(null);
  const autoRef = useRef(null);
  const total = testimonials.length;
  const pages = Math.ceil(total / perPage);

  useEffect(() => {
    const check = () => setPerPage(window.innerWidth >= 1024 ? 3 : 1);
    check(); window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  useEffect(() => { setPage(0); }, [perPage]);

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setPage((p) => (p + 1) % pages), 4200);
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
            <div key={pi} className="w-full shrink-0 grid gap-5" style={{gridTemplateColumns:`repeat(${perPage},1fr)`}}>
              {testimonials.slice(pi*perPage,(pi+1)*perPage).map(t=><TestiCard key={t.name} t={t}/>)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-2">
        {Array.from({length:pages},(_,i)=>(
          <button key={i} onClick={()=>goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i===page?"w-8 bg-[#A97C2F]":"w-2 bg-[#A97C2F]/20"}`}/>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => (
  <section id="testimonials" className="overflow-hidden bg-[#FAFAF7] py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[#A97C2F]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#A97C2F]"
               style={{ fontFamily:"Inter,sans-serif" }}>Testimonials</p>
          </div>
          <h2 className="font-['DM_Serif_Display'] leading-[1.08] text-[#1A1209]"
              style={{ fontSize:"clamp(30px, 4vw, 48px)" }}>
            Lives Changed.<br /><em style={{ color:"#A97C2F" }}>Stories Told.</em>
          </h2>
        </div>
        <div className="lg:pb-2">
          <p className="max-w-md text-[14px] leading-[1.9] text-[#1A1209]/55" style={{ fontFamily:"Inter,sans-serif" }}>
            Through the ministry of Apostle Dr Cloudio, lives have been transformed,
            destinies restored, and hearts awakened to the reality of God's power and purpose.
          </p>
        </div>
      </div>
      <Carousel />
    </div>
  </section>
);

export default Testimonials;