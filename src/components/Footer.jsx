import React from "react";
import { FaBehance, FaTwitter, FaLinkedinIn, FaDribbble, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="w-full bg-[#262626] text-white relative py-20 overflow-hidden">

      {/* STAR */}
      <div className="absolute left-[50px] top-[100px] w-[180px] h-[180px] flex items-center justify-center">

        {/* LINES */}
        <div className="absolute w-full h-full flex items-center justify-center">
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[12px] bg-gray-400"
              style={{
                transform: `rotate(${i * 15}deg) translateY(-80px)`
              }}
            />
          ))}
        </div>

        {/* STAR ICON */}
        <span className="text-orange-500 text-3xl relative z-10">
          ✦
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-between items-start gap-10">

        {/* LEFT SPACE (EMPTY FOR DESIGN BALANCE) */}
        <div className="hidden md:block w-[200px]" />

        {/* MIDDLE SECTION */}
        <div className="space-y-5 md:ml-[-50px]">

          <p className="font-semibold text-lg hover:text-orange-400 cursor-pointer">
            About Me
          </p>

          <p className="text-gray-400 hover:text-white cursor-pointer">
            Contact
          </p>

          <p className="text-gray-400 hover:text-white cursor-pointer">
            Portfolio
          </p>

          <p className="text-gray-400 hover:text-white cursor-pointer">
            Privacy Policy
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-6">

            {[FaBehance, FaTwitter, FaLinkedinIn, FaDribbble, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                className="bg-yellow-400 text-black p-3 rounded-full hover:scale-110 transition"
              >
                <Icon />
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:ml-[-100px]">

          <h3 className="text-lg font-semibold mb-6">
            Subscribe
          </h3>

          {/* INPUT */}
          <div className="flex items-center w-full md:w-[400px] h-[52px] bg-orange-500 px-4">

            <input
              type="text"
              placeholder="Enter Email Address Here"
              className="w-full bg-transparent outline-none text-white placeholder-white text-sm"
            />

            <span className="ml-2">✉</span>

          </div>

          {/* COPYRIGHT */}
          <p className="text-gray-400 text-sm mt-16">
            © Copyright 2022 All Rights Reserved.
          </p>

        </div>

      </div>

    </section>
  );
}