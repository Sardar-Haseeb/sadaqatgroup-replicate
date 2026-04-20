"use client";

import { motion } from "framer-motion";
import { Globe2, Mail } from "lucide-react";

const CARDS = [
  {
    icon: Mail,
    title: "CEO'S MESSAGE",
    text: "We at Sadaqat Ltd believe in only providing the best.We also believe in challenging ourselves to strive for excellence! We are continuously innovating to improve our systems, services, processes and quality of our products.It is due to this consistent",
    button: "View Detail",
  },
  {
    icon: Globe2,
    title: "GLOBAL VISION",
    text: "New technologies and open trade laws have allowed the global market to be better connected, cohesive and significantly smaller for premier international businesses.At Sadaqat Ltd, we take these open markets as opportunities towards acquiring",
  },
];

export default function MessageVision() {
  return (
    <section className="bg-[#0b1017] py-20 md:py-24">
      <div className="section-shell">
        {/* Cards stack on mobile and sit side-by-side on large screens */}
        <div className="grid gap-8 lg:grid-cols-2">
          {CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="border border-[#2f3540] bg-[#0b1017] px-7 py-10 text-center sm:px-10"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#8f0f1f]/70 text-[#8f0f1f]">
                  <Icon size={26} />
                </div>
                <h3 className="mb-5 text-3xl font-semibold text-[#9198a2]">
                  {card.title}
                </h3>
                <p className="mx-auto max-w-2xl text-base leading-8 text-[#6f7681]">
                  {card.text}
                </p>
                {card.button ? (
                  <a
                    href="#"
                    className="mt-7 inline-flex items-center justify-center bg-[#8f0f1f] px-9 py-3 text-xl font-semibold text-[#c3c8cf] transition hover:bg-[#a01224]"
                  >
                    {card.button}
                  </a>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
