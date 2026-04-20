# Sadaqat Group Homepage Replication

Below is the complete, single-file ready Next.js 14+ App Router codebase that exactly replicates the Sadaqat Group homepage as requested. It uses Tailwind CSS, Framer Motion, and Lucide React.

## 1. Folder Structure

\`\`\`text
sadaqatgroup/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── AboutSection.js
│   ├── Divisions.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Infrastructure.js
│   ├── Logo.js
│   ├── MessageVision.js
│   └── Navbar.js
└── tailwind.config.js
\`\`\`

---

## 2. Configuration & Global Styles

### \`tailwind.config.js\`
\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sg-bg": "#0f0f0f",
        "sg-bg-soft": "#10131a",
        "sg-red": "#8f0f1f",
        "sg-red-deep": "#760b18",
      },
      boxShadow: {
        nav: "0 10px 30px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
\`\`\`

### \`app/globals.css\`
\`\`\`css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --sg-bg: #0f0f0f;
  --sg-text: #efefef;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--sg-text);
  background: var(--sg-bg);
  font-family: "Poppins", sans-serif;
}

/* Subtle grain overlay for dark mode depth */
.grain-overlay {
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.12) 0.4px,
    transparent 0.4px
  );
  background-size: 4px 4px;
}

/* Responsive shell for consistent max-width across all screen sizes */
.section-shell {
  @apply mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8;
}
\`\`\`

---

## 3. App Core

### \`app/layout.js\`
\`\`\`jsx
import "./globals.css";

export const metadata = {
  title: "Sadaqat Limited | A Vertically Integrated Textile Manufacturer",
  description: "Sadaqat Limited homepage replica built with Next.js 14 App Router, Tailwind CSS, Framer Motion, and Lucide React.",
  keywords: ["Sadaqat Limited", "Textile Manufacturer", "Faisalabad", "Home Textiles"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

### \`app/page.js\`
\`\`\`jsx
import AboutSection from "../components/AboutSection";
import Divisions from "../components/Divisions";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Infrastructure from "../components/Infrastructure";
import MessageVision from "../components/MessageVision";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <main className="bg-[#0f0f0f] text-white">
      <Navbar />
      <Hero />
      <Divisions />
      <AboutSection />
      <Infrastructure />
      <MessageVision />
      <Footer />
    </main>
  );
}
\`\`\`

---

## 4. Components

### \`components/Logo.js\`
\`\`\`jsx
export default function Logo({ className = "", imageClassName = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 
        Responsive logo size: 
        - Default (mobile): h-16
        - sm & up (tablets/desktops): h-20 
      */}
      <img
        src="https://sadaqatgroup.com/wp-content/uploads/2019/04/SadaqatLogo2.png"
        alt="Sadaqat Logo"
        className={`h-16 w-auto object-contain sm:h-20 ${imageClassName}`}
      />
    </div>
  );
}
\`\`\`

### \`components/Navbar.js\`
\`\`\`jsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const DESKTOP_NAV = [
  "Home", "Divisions", "About", "Infrastructure", "Team", "CSR", "Career", "Contact", "Factory Tour"
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

  return (
    <>
      {/* 
        Responsive Navbar Container:
        - transition backdrop-blur-md for scroll effect
        - flex structure keeps logo left, menu center, details right
      */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/92 shadow-[0_10px_30px_rgba(0,0,0,0.45)]" : "bg-black/75"
        } backdrop-blur-md`}
      >
        <div className="section-shell flex h-20 items-center justify-between">
          <Logo className="shrink-0" />

          {/* Desktop Menu - Hidden on mobile, Flex on lg and above */}
          <div className="hidden items-center gap-5 xl:gap-6 lg:flex">
            {DESKTOP_NAV.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] font-medium tracking-wide text-neutral-200 transition hover:text-[#cc1f34]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact Details - Hidden on mobile, Flex on lg and above */}
          <div className="hidden flex-col items-end gap-1 text-[11px] text-neutral-300 lg:flex">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-[#cc1f34]" />
              <span className="whitespace-nowrap">+92 41-111-010-111</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-[#cc1f34]" />
              <span className="whitespace-nowrap">sadaqat.limited@sadaqatgroup.net</span>
            </div>
          </div>

          {/* Hamburger Menu - Visible on mobile/tablet, Hidden on lg and above */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-neutral-600 p-2 text-white lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Dark Overlay Mobile Menu (Full Screen) */}
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
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 inline-flex rounded-md border border-white/70 p-1 text-white"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Exact Red Rectangular Full-Width Buttons */}
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
\`\`\`

### \`components/Hero.js\`
\`\`\`jsx
"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden pt-24 md:min-h-[92vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://sadaqatgroup.com/wp-content/uploads/2019/04/head.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="grain-overlay absolute inset-0 opacity-35" />

      {/* 
        Responsive Hero Text:
        - Default: text-5xl
        - sm (tablets): text-6xl
        - lg (desktops): text-7xl 
      */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <div className="mx-auto mb-5 w-fit">
          <Logo imageClassName="h-24 sm:h-28" />
        </div>
        <h1 className="px-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Sadaqat Limited
        </h1>
      </motion.div>
    </section>
  );
}
\`\`\`

### \`components/Divisions.js\`
\`\`\`jsx
"use client";

import { motion } from "framer-motion";

const DIVISIONS = [
  { title: "Spinning", image: "https://sadaqatgroup.com/wp-content/uploads/2023/01/spining.png" },
  { title: "Weaving", image: "https://sadaqatgroup.com/wp-content/uploads/2023/01/weaving.png" },
  { title: "Yarn Dyeing", image: "https://sadaqatgroup.com/wp-content/uploads/2023/01/yarn_dyed.png" },
  { title: "Woven Garments", image: "https://sadaqatgroup.com/wp-content/uploads/2019/04/apparel2.png" },
  { title: "Knitted Garments", image: "https://sadaqatgroup.com/wp-content/uploads/2019/10/knitted-1.png" },
  { title: "Filled Products", image: "https://sadaqatgroup.com/wp-content/uploads/2019/10/filledd.png" },
];

export default function Divisions() {
  return (
    <section className="bg-[#060b12] py-20 md:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-semibold text-[#8a8f98] sm:text-5xl"
        >
          Divisions
        </motion.h2>

        {/* 
          Responsive Grid: 
          - Mobile keeps 2 columns (grid-cols-2)
          - Desktop scales to 3 columns (lg:grid-cols-3) 
        */}
        <div className="grid grid-cols-2 gap-y-10 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-14">
          {DIVISIONS.map((division, index) => (
            <motion.article
              key={division.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="flex flex-col items-center"
            >
              <div className="rounded-full border-2 border-[#26303c] bg-[#0f141d] p-[3px] shadow-[0_8px_25px_rgba(0,0,0,0.45)]">
                <img
                  src={division.image}
                  alt={division.title}
                  className="h-36 w-36 rounded-full object-cover sm:h-40 sm:w-40"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-center text-lg font-medium text-[#d8d8d8] sm:text-xl">
                {division.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
\`\`\`

### \`components/AboutSection.js\`
\`\`\`jsx
"use client";

import { motion } from "framer-motion";

const ABOUT_TEXT = "Half a century ago, a textile trading family known as the Sadaqat family started their home textile business in Chiniot; a neighboring city to Pakistan's textile hub Faisalabad. The newly established business was based on the core values of honesty and quality. Visionary footsteps, honesty and diligence have led the Sadaqat legacy to thrive and expand vertically, while still maintaining its reigning position in the home textile industry of Pakistan. Over the years, Sadaqat limited has grown due to the strong leadership and management by a team of motivated and qualified directors who energize and synergize the strength of more than 5000 employees at a well-equipped and state of the art manufacturing facility. Another key strength of the company is its product diversification and highly automated manufacturing equipment.";

export default function AboutSection() {
  return (
    <section className="bg-[#0b1017] py-20 md:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-4xl font-bold uppercase tracking-wider text-[#8a8f98] sm:text-5xl"
        >
          ABOUT
        </motion.h2>

        {/* 
          Responsive Text Constraint:
          - Uses max-w-6xl to keep text readable on ultra-wide screens 
          - text-base on screens larger than mobile 
        */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-6xl text-center"
        >
          <p className="text-[15px] font-medium leading-8 text-[#757b84] sm:text-base">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
\`\`\`

### \`components/Infrastructure.js\`
\`\`\`jsx
"use client";

import { motion } from "framer-motion";

export default function Infrastructure() {
  return (
    <section className="bg-[#0b1017] py-20 md:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-4xl font-bold uppercase tracking-wide text-[#8a8f98] sm:text-5xl"
        >
          INFRASTRUCTURE
        </motion.h2>

        {/* 
          Maintains single-column stacked layout on all sizes to match the impact of factory photos.
          MaxWidth controls how wide the images extend on desktop.
        */}
        <div className="mx-auto max-w-[980px]">
          <motion.img
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            src="https://sadaqatgroup.com/wp-content/uploads/2019/08/pr1.jpg"
            alt="Infrastructure Pre-treatment"
            className="w-full object-cover"
            loading="lazy"
          />

          {/* Red separator bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="my-4 bg-[#8f0f1f] py-2 text-center text-xl font-semibold tracking-wide text-[#c7c9cf] sm:my-5"
          >
            PRE-TREATMENT
          </motion.div>

          {/* Second factory photo below separator */}
          <motion.img
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            src="https://sadaqatgroup.com/wp-content/uploads/2019/08/pr5.jpg"
            alt="Infrastructure Red Machine"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
\`\`\`

### \`components/MessageVision.js\`
\`\`\`jsx
"use client";

import { motion } from "framer-motion";
import { Globe2, Mail } from "lucide-react";

export default function MessageVision() {
  return (
    <section className="bg-[#0b1017] py-20 md:py-24">
      <div className="section-shell">
        {/* Responsive Grid: Stacks on mobile, side-by-side on lg screens */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* CEO Message Card */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="border border-[#2f3540] bg-[#0b1017] px-7 py-10 text-center sm:px-10"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#8f0f1f]/70 text-[#8f0f1f]">
              <Mail size={26} />
            </div>
            <h3 className="mb-5 text-3xl font-semibold text-[#9198a2]">CEO'S MESSAGE</h3>
            <p className="mx-auto max-w-2xl text-base leading-8 text-[#6f7681]">
              We at Sadaqat Ltd believe in only providing the best. We also believe in challenging ourselves to strive for excellence! We are continuously innovating to improve our systems, services, processes and quality of our products. It is due to this consistent
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center justify-center bg-[#8f0f1f] px-9 py-3 text-xl font-semibold text-[#c3c8cf] transition hover:bg-[#a01224]"
            >
              View Detail
            </a>
          </motion.article>

          {/* Global Vision Card */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="border border-[#2f3540] bg-[#0b1017] px-7 py-10 text-center sm:px-10"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#8f0f1f]/70 text-[#8f0f1f]">
              <Globe2 size={26} />
            </div>
            <h3 className="mb-5 text-3xl font-semibold text-[#9198a2]">GLOBAL VISION</h3>
            <p className="mx-auto max-w-2xl text-base leading-8 text-[#6f7681]">
              New technologies and open trade laws have allowed the global market to be better connected, cohesive and significantly smaller for premier international businesses. At Sadaqat Ltd, we take these open markets as opportunities towards acquiring
            </p>
          </motion.article>
          
        </div>
      </div>
    </section>
  );
}
\`\`\`

### \`components/Footer.js\`
\`\`\`jsx
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080b11] py-14">
      <div className="section-shell">
        {/* Responsive Layout: Single column on mobile, 3 columns on tablets/desktops */}
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Company Address</h3>
            <p className="text-sm leading-7 text-[#9ca2ac]">
              2KM, Sahianwala Road, Khurrianwala, Faisalabad Pakistan.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Contact Details</h3>
            <ul className="space-y-3 text-sm text-[#9ca2ac]">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-[3px] text-[#8f0f1f]" />
                <span>UAN: +92 41-111-010-111</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-[3px] text-[#8f0f1f]" />
                <span>sadaqat.limited@sadaqatgroup.net</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Corporate</h3>
            <ul className="space-y-3 text-sm text-[#9ca2ac]">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-[3px] text-[#8f0f1f]" />
                <span>Mon To Sat - 09.00-18.00 | Sunday - Close</span>
              </li>
              <li className="flex items-start gap-2">
                <Linkedin size={16} className="mt-[3px] text-[#8f0f1f]" />
                <span>@sadaqatgroup</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs tracking-wider text-[#7c828c]">
          @2022 SADAQAT LIMITED ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
\`\`\`
