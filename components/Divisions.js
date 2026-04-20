"use client";

import { motion } from "framer-motion";

const DIVISIONS = [
  {
    title: "Spinning",
    image: "https://sadaqatgroup.com/wp-content/uploads/2023/01/spining.png",
  },
  {
    title: "Weaving",
    image: "https://sadaqatgroup.com/wp-content/uploads/2023/01/weaving.png",
  },
  {
    title: "Yarn Dyeing",
    image: "https://sadaqatgroup.com/wp-content/uploads/2023/01/yarn_dyed.png",
  },
  {
    title: "Woven Garments",
    image: "https://sadaqatgroup.com/wp-content/uploads/2019/04/apparel2.png",
  },
  {
    title: "Knitted Garments",
    image: "https://sadaqatgroup.com/wp-content/uploads/2019/10/knitted-1.png",
  },
  {
    title: "Filled Products",
    image: "https://sadaqatgroup.com/wp-content/uploads/2019/10/filledd.png",
  },
];

export default function Divisions() {
  return (
    <section id="divisions" className="bg-[#060b12] py-20 md:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-semibold text-[#8a8f98] sm:text-5xl"
        >
          Divisions
        </motion.h2>

        {/* Mobile keeps 2 columns; desktop scales to 3 columns like the live layout */}
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
