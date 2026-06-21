import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Images/apslogo.png";

const navLinks = [
  { name: "Home",     href: "#home" },
  { name: "About",    href: "#about" },
  { name: "Ministry", href: "#ministry" },
  { name: "Sermons",  href: "#sermons" },
  { name: "Events",   href: "#events" },
  { name: "Contact",  href: "#contact" },
];

const Navbar = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active,     setActive]     = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FAFAF7] transition-all duration-300 ${
        scrolled ? "shadow-[0_1px_20px_rgba(0,0,0,0.07)]" : "shadow-none"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Cloudio Ministries" className="h-9 w-9 object-contain lg:h-10 lg:w-10" />
          <span className="flex flex-col leading-tight">
            <span className="font-['DM_Serif_Display'] text-[16px] italic text-[#1A1209]">
              Cloudio
            </span>
            <span className="text-[9px] font-semibold tracking-[0.28em] text-[#A97C2F] uppercase"
                  style={{ fontFamily: "Inter, sans-serif" }}>
              Ministries
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`relative pb-1 text-[12px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                  active === link.name
                    ? "text-[#1A1209]"
                    : "text-[#1A1209]/45 hover:text-[#1A1209]"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {link.name}
                {active === link.name && (
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-[#A97C2F]" />
                )}
              </a>
            </li>
          ))}
        </ul>


        {/* Mobile burger */}
        <button onClick={() => setMobileOpen((v) => !v)} className="text-[#1A1209] lg:hidden">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E8E3DA] bg-[#FAFAF7] px-6 pb-6 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => { setActive(link.name); setMobileOpen(false); }}
                  className={`block px-2 py-2.5 text-[13px] font-medium uppercase tracking-[0.12em] ${
                    active === link.name ? "text-[#A97C2F]" : "text-[#1A1209]/55"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;