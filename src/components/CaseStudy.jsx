import React from "react";
import { motion } from "framer-motion";
import { FaBehance, FaTwitter, FaLinkedin } from "react-icons/fa";

import img1 from "../assets/project3.jpg";
import img2 from "../assets/project3.jpg";
import img3 from "../assets/project2.jpg";

export default function CaseStudy() {

  // container animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // text animation
  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  // image animation
  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section className="w-full bg-white py-32">

      <motion.div
        className="max-w-[1400px] mx-auto px-6 md:px-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* LEFT SIDE */}
          <motion.div variants={fadeLeft}>

            {/* SMALL TITLE */}
            <motion.p
              variants={fadeLeft}
              className="text-orange-500 font-semibold mb-6"
            >
              Case Studies
            </motion.p>

            {/* HEADING */}
            <motion.h2
              variants={fadeLeft}
              className="text-3xl md:text-5xl font-bold leading-tight max-w-[440px]"
            >
              Dotpixel Agency Website
              <br /> & Branding Design
            </motion.h2>

            {/* ICONS */}
            <motion.div
              variants={fadeLeft}
              className="flex gap-4 mt-8 text-gray-600 text-lg"
            >
              {[FaBehance, FaTwitter, FaLinkedin].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="cursor-pointer hover:text-black"
                >
                  <Icon />
                </motion.div>
              ))}
            </motion.div>

            {/* BUTTON */}
            <motion.button
              variants={fadeLeft}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-orange-500 text-white px-10 py-4 font-semibold hover:bg-orange-600 transition"
            >
              Hire Me
            </motion.button>

          </motion.div>

          {/* RIGHT SIDE IMAGES */}
          <motion.div
            variants={fadeRight}
            className="relative h-[500px]"
          >

            {/* BACK IMAGE 3 */}
            <motion.img
              src={img3}
              alt=""
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="absolute left-0 top-[100px] w-[600px] rotate-[8deg] shadow-xl"
            />

            {/* BACK IMAGE 2 */}
            <motion.img
              src={img2}
              alt=""
              initial={{ opacity: 0, y: -60, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute right-0 top-0 w-[600px] -rotate-[3deg] shadow-xl"
            />

            {/* FRONT IMAGE */}
            <motion.img
              src={img1}
              alt=""
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.08 }}
              className="absolute left-[50px] top-[40px] w-[600px] shadow-2xl"
            />

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}