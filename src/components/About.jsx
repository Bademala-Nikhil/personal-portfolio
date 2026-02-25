import React from "react";
import { motion } from "framer-motion";

export default function About() {

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
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

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="w-full bg-white py-24">

      <motion.div
        className="max-w-[1400px] mx-auto px-6 md:px-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* GRID */}
        <div className="grid md:grid-cols-[200px_1fr_320px] gap-10 items-start">

          {/* LEFT */}
          <motion.div variants={fadeLeft} className="pt-2">
            <p className="text-orange-500 font-semibold uppercase text-sm tracking-wide">
              WHO I AM
            </p>
          </motion.div>

          {/* MIDDLE */}
          <motion.div variants={stagger}>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold leading-tight max-w-[600px]"
            >
              From My Experience, I Saw Individuals Perpetually Wish To Induce An Internet Site For Their Work Or One Always Be Great
            </motion.h2>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 border border-orange-500 px-10 py-4 font-medium hover:bg-orange-500 hover:text-white transition"
            >
              More About Me
            </motion.button>

          </motion.div>

          {/* RIGHT */}
          <motion.div variants={fadeRight} className="flex flex-col justify-start">

            <motion.div variants={fadeUp} className="mb-8">
              <h4 className="font-semibold">ZXC Studio</h4>
              <p className="text-gray-500 text-sm">Washington, NYC</p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-sm leading-relaxed max-w-[260px]"
            >
              From My Experience, I Saw Individuals Perpetually Wish To Induce An Internet Site For Their Work Or One
            </motion.p>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}