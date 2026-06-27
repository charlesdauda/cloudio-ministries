import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/apslogo.png";

const navLinks = [
  { name: "Home",     href: "/",        type: "route" },
  { name: "About",    href: "/about",   type: "route" },
  { name: "Ministry", href: "/ministry",type: "route" },
  { name: "Sermons",  href: "/sermon",  type: "route" },
  { name: "Contact",  href: "/contact", type: "route" },
];

const Navbar = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (link) => {
    if (link.type === "route") return location.pathname === link.href;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-[0_1px_20px_rgba(0,0,0,0.07)]" : "shadow-none"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Cloudio Ministries"
            className="h-11 w-11 object-contain lg:h-13 lg:w-13"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-['DM_Serif_Display'] text-[18px] italic text-[#0A0A0A]">Cloudio</span>
            <span
              className="text-[9px] font-semibold tracking-[0.28em] text-[#C8962B] uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ministries
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.type === "route" ? (
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`relative pb-1 font-['DM_Serif_Display'] text-[15px] italic transition-colors duration-200 ${
                    isActive(link)
                      ? "text-[#0A0A0A]"
                      : "text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
                  }`}
                >
                  {link.name}
                  {isActive(link) && (
                    <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-[#C8962B]" />
                  )}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="relative pb-1 font-['DM_Serif_Display'] text-[15px] italic text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors duration-200"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen((v) => !v)} className="text-[#0A0A0A] lg:hidden">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#E5E5E5] bg-white px-6 pb-6 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.type === "route" ? (
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-2 py-2.5 font-['DM_Serif_Display'] text-[16px] italic ${
                      isActive(link) ? "text-[#C8962B]" : "text-[#0A0A0A]/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-2 py-2.5 font-['DM_Serif_Display'] text-[16px] italic text-[#0A0A0A]/70"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;