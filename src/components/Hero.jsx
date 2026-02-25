import React from "react";
import heroImg from "../assets/hero.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full h-[805px] bg-[#F6ECD4] relative overflow-hidden">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-[135px] top-[100px] max-w-[658px]"
      >

        {/* Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[42px] md:text-[56px] font-extrabold leading-tight"
        >
          HI, I'M <span className="tracking-wide">TAYLER</span>
          <span className="bg-orange-500 text-white text-xs px-2 py-1 ml-3">
            BRANDING
          </span>
        </motion.h1>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[42px] md:text-[56px] font-extrabold mt-4"
        >
          CREATIVE DESIGNER
        </motion.h2>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[42px] md:text-[56px] font-extrabold mt-2"
        >
          BASED IN ITALY
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-gray-600 max-w-[491px]"
        >
          From My Experience, I Saw Individuals Perpetually Wish
          To Induce An Internet Site For Their Work Or One
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-10 mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-orange-500 text-white px-10 py-4 font-semibold"
          >
            Hire Me
          </motion.button>

          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="font-medium flex items-center gap-1"
          >
            Projects →
          </motion.a>
        </motion.div>

      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.img
        src={heroImg}
        alt="hero"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-[770px] w-[700px] h-[804px] object-cover object-top"
      />

      {/* STAR DESIGN */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-[422px] left-[623px] w-[150px] h-[150px] flex items-center justify-center"
      >

        {/* RADIAL LINES */}
        <div className="absolute w-full h-full flex items-center justify-center">
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[10px] bg-gray-400"
              style={{
                transform: `rotate(${i * 15}deg) translateY(-65px)`
              }}
            />
          ))}
        </div>

        {/* STAR */}
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-black text-xl relative z-10"
        >
          ✦
        </motion.span>

      </motion.div>

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col items-center text-center px-6 pt-20">
        <h1 className="text-3xl font-bold">
          HI, I'M TAYLER
        </h1>

        <img src={heroImg} alt="hero" className="w-[250px] mt-6" />

        <p className="mt-4 text-gray-600">
          Creative Designer Based In Italy
        </p>

        <button className="mt-6 bg-orange-500 text-white px-6 py-3">
          Hire Me
        </button>
      </div>

    </section>
  );
}