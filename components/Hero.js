"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden pt-24 md:min-h-[92vh]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://sadaqatgroup.com/wp-content/uploads/2019/04/head.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="grain-overlay absolute inset-0 opacity-35" />

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
