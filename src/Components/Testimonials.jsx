import { useState, useEffect, useRef, useCallback } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { category:"Healing & Restoration",  quote:"I was healed from a chronic illness that doctors couldn't explain. What medicine couldn't do, God did in a moment. Yeshuah is still healing." },
  { category:"Financial Breakthrough",  quote:"From debt to abundance God turned my situation around completely. Doors opened that I never even knocked on. I am living proof of His faithfulness." },
  { category:"Deliverance",             quote:"I was bound for years by things I couldn't explain. One encounter with God through this ministry and I walked out completely free. No chains." },
  { category:"Salvation",               quote:"I came to the tarry hour service out of curiosity. I left with a new life. I encountered Yeshuah in a way I never thought possible. Everything changed that night." },
  { category:"Purpose & Calling",       quote:"I had been drifting for years with no real direction. The teachings here gave me clarity about who I am and what I was created to do. Priceless." },
  { category:"Prophetic Word",          quote:"A word was spoken over my life that described things no one could have known. Six months later, every single thing has come to pass. God is not silent." },
];

const TestiCard = ({ t }) => (
  <div className="flex h-full flex-col bg-white border border-[#E8E3DA] shadow-[0_1px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 p-7 select-none">
    <Quote size={30} strokeWidth={0} fill="#C8962B" className="mb-4" />
    <p className="mb-4 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#C8962B]"
       style={{ fontFamily:"Inter,sans-serif" }}>{t.category}</p>
    <p className="font-['DM_Serif_Display'] flex-1 text-[16px] italic leading-[1.8] text-[#1A1209]/75">
      "{t.quote}"
    </p>
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

  const goTo = (n) => { setPage((n + pages) % pages); startAuto(); };
  const onStart = (x) => { dragX.current = x; clearInterval(autoRef.current); };
  const onEnd = (x) => { const d = (dragX.current ?? x) - x; if (Math.abs(d) > 40) goTo(page + (d > 0 ? 1 : -1)); else startAuto(); dragX.current = null; };

  return (
    <div>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)]"
             style={{ transform:`translateX(-${page * 100}%)` }}
             onMouseDown={(e) => onStart(e.clientX)} onMouseUp={(e) => onEnd(e.clientX)}
             onTouchStart={(e) => onStart(e.touches[0].clientX)} onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}>
          {Array.from({ length: pages }, (_, pi) => (
            <div key={pi} className="w-full shrink-0 grid gap-5" style={{ gridTemplateColumns:`repeat(${perPage},1fr)` }}>
              {testimonials.slice(pi * perPage, (pi + 1) * perPage).map((t, i) => <TestiCard key={i} t={t} />)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-2">
        {Array.from({ length: pages }, (_, i) => (
          <button key={i} onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === page ? "w-8 bg-[#C8962B]" : "w-2 bg-[#C8962B]/20"}`} />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => (
  <section id="testimonials" className="overflow-hidden bg-white py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[#C8962B]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#C8962B]"
               style={{ fontFamily:"Inter,sans-serif" }}>Testimonies</p>
          </div>
          <h2 className="font-['DM_Serif_Display'] leading-[1.08] text-[#1A1209]"
              style={{ fontSize:"clamp(30px, 4vw, 48px)" }}>
            Lives Changed.<br /><em style={{ color:"#C8962B" }}>Stories Told.</em>
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