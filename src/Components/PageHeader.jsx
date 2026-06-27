import { ChevronRight } from "lucide-react";

const PageHeader = ({ title, crumbs = [] }) => (
  <div
    className="relative flex items-center justify-center overflow-hidden"
    style={{ minHeight: "320px" }}
  >
    {/* Bokeh / soft light background */}
    <div className="absolute inset-0 bg-[#F5F0E8]" />
    <div className="absolute inset-0"
         style={{
           background: `
             radial-gradient(ellipse 60% 70% at 20% 50%, rgba(255,255,255,0.85) 0%, transparent 70%),
             radial-gradient(ellipse 40% 50% at 75% 40%, rgba(255,248,230,0.7) 0%, transparent 65%),
             radial-gradient(ellipse 30% 40% at 55% 70%, rgba(255,255,255,0.5) 0%, transparent 60%),
             radial-gradient(ellipse 20% 30% at 85% 70%, rgba(169,124,47,0.06) 0%, transparent 60%)
           `
         }}
    />

    {/* Soft bokeh circles */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[
        { w:180, h:180, top:"10%",  left:"8%",  op:0.18 },
        { w:120, h:120, top:"55%",  left:"18%", op:0.12 },
        { w:200, h:200, top:"20%",  left:"60%", op:0.14 },
        { w: 90, h: 90, top:"65%",  left:"72%", op:0.10 },
        { w:140, h:140, top:"5%",   left:"82%", op:0.13 },
        { w: 70, h: 70, top:"75%",  left:"45%", op:0.09 },
      ].map((c, i) => (
        <div key={i} className="absolute rounded-full"
             style={{
               width: c.w, height: c.h,
               top: c.top, left: c.left,
               background: "rgba(255,255,255,1)",
               opacity: c.op,
               filter: "blur(32px)",
               transform: "translate(-50%,-50%)",
             }} />
      ))}
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center gap-4 text-center px-5">
      <h1 className="font-['DM_Serif_Display'] text-[#1A1209] leading-tight"
          style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>
        {title}
      </h1>

      {/* Breadcrumb */}
      {crumbs.length > 0 && (
        <div className="flex items-center gap-2" style={{ fontFamily: "Inter, sans-serif" }}>
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <ChevronRight size={13} className="text-[#C8962B]" strokeWidth={2.5} />}
              {crumb.href ? (
                <a href={crumb.href}
                   className="text-[13px] text-[#1A1209]/55 hover:text-[#1A1209] transition-colors">
                  {crumb.label}
                </a>
              ) : (
                <span className="text-[13px] text-[#1A1209]/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default PageHeader;