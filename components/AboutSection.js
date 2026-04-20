"use client";

import { motion } from "framer-motion";

const ABOUT_PARAGRAPHS = [
  "Half a century ago, a textile trading family known as the Sadaqat family started their home textile business in Chiniot; a neighboring city to Pakistan's textile hub Faisalabad. The newly established business was based on the core values of honesty and quality. Visionary footsteps, honesty and diligence have led the Sadaqat legacy to thrive and expand vertically, while still maintaining its reigning position in the home textile industry of Pakistan. Over the years, Sadaqat limited has grown due to the strong leadership and management by a team of motivated and qualified directors who energize and synergize the strength of more than 5000 employees at a well-equipped and state of the art manufacturing facility. Another key strength of the company is its product diversification and highly automated manufacturing equipment.",
  "In 2018 Sadaqat Limited added new business line diversifying its portfolio with the introduction of state-of-the-art Garment Manufacturing unit producing Woven (Denim/Non Denim) and Knitted Garments.",
  "We source our raw materials both locally and globally, ensuring our products are of the highest quality standards whilst remaining competitively priced. Regular overseas travel ensures consistent product research and development and latest trend updates. Our design centers are equipped with CAD technology to offer innovative and fashionable product ranges. At Sadaqat Limited, we combine the skill and workmanship of our culture with the globally recognized best practices to deliver products of exceptional quality to all of our global and domestic customer base.",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0b1017] py-20 md:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-4xl font-bold uppercase tracking-wider text-[#8a8f98] sm:text-5xl"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-6xl text-center"
        >
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mb-6 text-[15px] font-medium leading-8 text-[#757b84] sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
