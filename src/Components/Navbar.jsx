import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Place your logo file inside src/assets/ and update this path/filename
import logo from "../assets/Images/apslogo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Ministry", href: "#ministry" },
  { name: "Sermons", href: "#sermons" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div
        className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Michael E. Adams Ministries"
            className="h-9 w-9 object-contain lg:h-10 lg:w-10"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-[14px] font-bold tracking-wide text-slate-900 sm:text-[16px]">
             Cloudio
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#C8962B] sm:text-[11px]">
              MINISTRIES
            </span>
          </span>
        </a>

        {/* Centered nav links - desktop. Absolute + translate guarantees true
            center regardless of logo width or right-side content. */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`relative pb-1 text-[12.5px] font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  active === link.name
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.name}
                {active === link.name && (
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-[#C8962B]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="text-slate-800 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setMobileOpen(false);
                }}
                className={`block rounded-md px-2 py-2.5 text-sm font-semibold uppercase tracking-wide ${
                  active === link.name
                    ? "bg-[#C8962B]/10 text-[#C8962B]"
                    : "text-slate-600"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;