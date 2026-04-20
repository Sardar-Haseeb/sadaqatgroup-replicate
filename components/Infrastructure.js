"use client";

import { motion } from "framer-motion";

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="bg-[#0b1017] py-20 md:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-4xl font-bold uppercase tracking-wide text-[#8a8f98] sm:text-5xl"
        >
          Infrastructure
        </motion.h2>

        {/* On mobile this stays single-column and full width, matching the stacked screenshot */}
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="my-4 bg-[#8f0f1f] py-2 text-center text-xl font-semibold tracking-wide text-[#c7c9cf] sm:my-5"
          >
            PRE-TREATMENT
          </motion.div>

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
