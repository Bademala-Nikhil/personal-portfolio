import React from "react";
import { motion } from "framer-motion";
import mainImg from "../assets/test2.png";
import sideImg from "../assets/test1.png";

export default function Testimonials() {

  // TEXT ANIMATION
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section className="w-full bg-white relative h-[750px] overflow-hidden">

      {/* CONTAINER */}
      <motion.div
        className="max-w-[1400px] mx-auto relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* TOP LEFT HEADING */}
        <motion.div
          variants={fadeLeft}
          className="absolute left-[135px] top-[60px]"
        >

          <p className="text-orange-500 mb-2 text-sm">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            What They Say <br />
            About Me <span className="text-yellow-500">•</span>
          </h2>

        </motion.div>

        {/* TOP RIGHT TEXT */}
        <motion.p
          variants={fadeRight}
          className="absolute right-[135px] top-[80px] w-[350px] text-gray-500 text-sm"
        >
          From My Experience, I Saw Individuals Perpetually Wish
          To Induce An Internet Site For Their Work Or One
        </motion.p>

        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeLeft}
          className="absolute left-[135px] top-[220px]"
        >

          {/* GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
            className="absolute w-[420px] h-[420px] bg-yellow-300/40 blur-[120px] rounded-full"
          ></motion.div>

          <motion.img
            src={mainImg}
            alt=""
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-[380px] h-[400px] object-cover rounded-md"
          />
        </motion.div>

        {/* MIDDLE TEXT */}
        <motion.div
          variants={fadeUp}
          className="absolute left-[600px] top-[300px] w-[420px]"
        >

          {/* NAME */}
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-[2px] bg-orange-500"></span>
            <h3 className="text-xl font-semibold text-black">
              Robarto Alex
            </h3>
          </div>

          {/* TEXT */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            From My Experience, I Saw Individuals Perpetually Wish
            To Induce An Internet Site For Their Work Or One
          </p>

          <p className="text-gray-600 leading-relaxed">
            From My Experience, I Saw Individuals Perpetually Wish
            To Induce An Internet Site For Their Work Or One
          </p>

          {/* RATING */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-1 mt-6 text-yellow-500 text-lg"
          >
            ★★★★★
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          variants={fadeRight}
          src={sideImg}
          alt=""
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="absolute right-[100px] top-[250px] w-[200px] h-[190px] object-cover rounded-md shadow-lg"
        />

        {/* STAR DESIGN */}
        <motion.div
          className="absolute right-[120px] bottom-[60px]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-[110px] h-[110px] border border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-blue-400 text-xl">✦</span>
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
}