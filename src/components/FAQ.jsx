import React from "react";
import { motion } from "framer-motion";

export default function FAQ() {

  // Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="w-full bg-[#1a1a1a] text-white py-24">

      {/* CONTAINER */}
      <motion.div
        className="max-w-[1400px] mx-auto px-6 md:px-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* HEADING */}
        <motion.h2
          variants={fadeUp}
          className="text-yellow-400 text-3xl md:text-4xl font-bold"
        >
          FAQs
        </motion.h2>

        {/* LINE */}
        <motion.div
          variants={fadeUp}
          className="w-full h-[1px] bg-gray-600 mt-6 mb-12"
        />

        {/* CONTENT */}
        <div className="grid md:grid-cols-[1fr_420px] gap-16">

          {/* LEFT SIDE */}
          <motion.div variants={fadeLeft}>

            <motion.h3
              variants={fadeUp}
              className="text-xl md:text-2xl font-semibold mb-6 hover:text-orange-400 transition"
            >
              What Is Average Cost Of The Project? ↗
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 leading-relaxed mb-8 max-w-[450px]"
            >
              From My Experience, I Saw Individuals Perpetually Wish
              To Induce An Internet Site For Their Work Or One
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 leading-relaxed max-w-[450px]"
            >
              From My Experience, I Saw Individuals Perpetually Wish
              To Induce An Internet Site For Their Work Or One
            </motion.p>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeRight}
            className="flex flex-col gap-6"
          >

            {[
              "How Can I Work With You?",
              "What Kind Of Work You Completed Recently",
              "Have You Done Any Kind Of National Work",
              "Hey I’m Nick Nice Yo Meet You",
              "Perpetually Wish To Induce An Intern"
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 10 }}
                className="flex justify-between items-center border-b border-gray-700 pb-3 cursor-pointer group"
              >
                <span className="group-hover:text-orange-400 transition">
                  {item}
                </span>

                <motion.span
                  whileHover={{ rotate: 45 }}
                  className="text-orange-500"
                >
                  ↗
                </motion.span>
              </motion.div>
            ))}

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}