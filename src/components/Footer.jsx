import React from "react";
import { motion } from "framer-motion";
import { FaBehance, FaTwitter, FaLinkedinIn, FaDribbble, FaInstagram } from "react-icons/fa";

export default function Footer() {

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="w-full bg-[#262626] text-white relative py-20 overflow-hidden">

      {/* STAR */}
      <motion.div
        className="absolute left-[50px] top-[100px] w-[180px] h-[180px] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >

        {/* ROTATING LINES */}
        <motion.div
          className="absolute w-full h-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[12px] bg-gray-400"
              style={{
                transform: `rotate(${i * 15}deg) translateY(-80px)`
              }}
            />
          ))}
        </motion.div>

        {/* STAR ICON */}
        <motion.span
          className="text-orange-500 text-3xl relative z-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✦
        </motion.span>

      </motion.div>

      {/* MAIN CONTENT */}
      <motion.div
        className="max-w-[1200px] mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-between items-start gap-10"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* LEFT SPACE */}
        <div className="hidden md:block w-[200px]" />

        {/* MIDDLE SECTION */}
        <motion.div
          className="space-y-5 md:ml-[-50px]"
          variants={stagger}
        >

          {["About Me", "Contact", "Portfolio", "Privacy Policy"].map((item, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              whileHover={{ x: 8, color: "#fb923c" }}
              className={`cursor-pointer ${
                i === 0 ? "font-semibold text-lg" : "text-gray-400"
              }`}
            >
              {item}
            </motion.p>
          ))}

          {/* SOCIAL ICONS */}
          <motion.div className="flex gap-4 pt-6" variants={fadeUp}>

            {[FaBehance, FaTwitter, FaLinkedinIn, FaDribbble, FaInstagram].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-yellow-400 text-black p-3 rounded-full cursor-pointer"
              >
                <Icon />
              </motion.div>
            ))}

          </motion.div>

        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          className="md:ml-[-100px]"
          variants={stagger}
        >

          <motion.h3
            variants={fadeUp}
            className="text-lg font-semibold mb-6"
          >
            Subscribe
          </motion.h3>

          {/* INPUT */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="flex items-center w-full md:w-[400px] h-[52px] bg-orange-500 px-4 shadow-lg"
          >

            <input
              type="text"
              placeholder="Enter Email Address Here"
              className="w-full bg-transparent outline-none text-white placeholder-white text-sm"
            />

            <motion.span
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="ml-2"
            >
              ✉
            </motion.span>

          </motion.div>

          {/* COPYRIGHT */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-sm mt-16"
          >
            © Copyright 2022 All Rights Reserved.
          </motion.p>

        </motion.div>

      </motion.div>

    </section>
  );
}