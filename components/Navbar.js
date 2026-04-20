"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const DESKTOP_NAV = [
  { label: "Home", href: "#home" },
  { label: "Divisions", href: "#divisions" },
  { label: "About", href: "#about" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Team", href: "#" },
  { label: "CSR", href: "#" },
  { label: "Career", href: "#" },
  { label: "Contact", href: "#footer" },
  { label: "Factory Tour", href: "#" },
];

const MOBILE_MENU = [
  "Achievements",
  "CEO's Messages",
  "Documentary",
  "Policy & Procedures",
  "CSR Video",
  "Certifications",
  "Annual Reports",
  "Investors Relation",
  "Sustainability Reports",
  "COC & Shareholding Pattern",
  "Apparel Product Portfolio",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/92 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
            : "bg-black/75"
        } backdrop-blur-md`}
      >
        <div className="section-shell flex h-20 items-center justify-between">
          <Logo className="shrink-0" />

          <div className="hidden items-center gap-5 xl:gap-6 lg:flex">
            {DESKTOP_NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium tracking-wide text-neutral-200 transition hover:text-[#cc1f34]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden flex-col items-end gap-1 text-[11px] text-neutral-300 lg:flex">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-[#cc1f34]" />
              <span className="whitespace-nowrap">+92 41-111-010-111</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-[#cc1f34]" />
              <span className="whitespace-nowrap">
                sadaqat.limited@sadaqatgroup.net
              </span>
            </div>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-neutral-600 p-2 text-white lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-black px-5 pb-8 pt-6 lg:hidden"
          >
            <div className="mx-auto max-w-md">
              <div className="mb-6 flex items-start justify-between border border-white/5 p-3">
                <Logo imageClassName="h-24 sm:h-24" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 inline-flex rounded-md border border-white/70 p-1 text-white"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="space-y-3">
                {MOBILE_MENU.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block w-full bg-[#7e0d1a] px-4 py-3 text-center text-base font-medium tracking-wide text-neutral-300 transition hover:bg-[#911022]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
