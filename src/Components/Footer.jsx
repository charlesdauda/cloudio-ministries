import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";

const footerLinks = {
  "Ministry": [
    { label: "About Dr Cloudio",  href: "#about"       },
    { label: "Ministry Pillars",  href: "#ministry"    },
    { label: "Testimonials",      href: "#testimonials" },
    { label: "Invite the Apostle",href: "#contact"     },
  ],
  "Resources": [
    { label: "Watch Sermons",      href: "#sermons" },
    { label: "Listen to Messages", href: "#sermons" },
    { label: "Upcoming Events",    href: "#events"  },
    { label: "Books & Media",      href: "#media"   },
  ],
  "Connect": [
    { label: "Partner With Us",  href: "#partner" },
    { label: "Prayer Requests",  href: "#prayer"  },
    { label: "Give / Tithe",     href: "#give"    },
    { label: "Contact Us",       href: "#contact" },
  ],
};

const socials = [
  { icon: <FaInstagram size={15} />, href: "#", label: "Instagram" },
  { icon: <FaFacebookF size={14} />, href: "#", label: "Facebook"  },
  { icon: <FaYoutube   size={15} />, href: "#", label: "YouTube"   },
  { icon: <FaXTwitter  size={15} />, href: "#", label: "X/Twitter" },
];

const Footer = () => (
  <footer className="bg-[#0A0A0A]" style={{ fontFamily: "Inter, sans-serif" }}>

    {/* ── Newsletter Banner ── */}
    <div className="border-b border-white/8">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#C8962B] mb-2">
              Stay Connected
            </p>
            <h3 className="font-['DM_Serif_Display'] text-white leading-snug"
                style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>
              Receive Prophetic Updates &{" "}
              <em style={{ color: "#C8962B" }}>Kingdom Insights.</em>
            </h3>
          </div>

          <div className="flex w-full min-w-0 max-w-md lg:ml-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 border border-white/10 bg-white/5 px-4 py-3 text-[13px] text-white placeholder:text-white/30 outline-none focus:border-[#C8962B]/60 transition-colors"
            />
            <button className="shrink-0 bg-[#C8962B] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* ── Main Footer Body ── */}
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

        {/* Brand Column */}
        <div>
          <div className="mb-6">
            <p className="font-['DM_Serif_Display'] text-[22px] text-white leading-none">Cloudio</p>
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#C8962B] mt-1">Ministries</p>
          </div>
          <p className="text-[13px] leading-[1.85] text-white/40 max-w-65">
            A global apostolic ministry committed to revealing Kingdom truths, transforming
            destinies, and raising spiritual leaders for the nations.
          </p>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <p className="mb-6 text-[9.5px] font-semibold uppercase tracking-[0.24em] text-[#C8962B]">
              {heading}
            </p>
            <ul className="space-y-3.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                     className="text-[13px] text-white/40 transition-colors hover:text-white/80">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>

    {/* ── Bottom Bar ── */}
    <div className="border-t border-white/8">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-[11px] text-white/25 text-center sm:text-left">
            © {new Date().getFullYear()} Cloudio Ministries. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                 className="flex h-8 w-8 items-center justify-center text-white/30 transition-colors hover:text-[#C8962B]">
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use"].map((t) => (
              <a key={t} href="#"
                 className="text-[11px] text-white/25 transition-colors hover:text-white/60">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;