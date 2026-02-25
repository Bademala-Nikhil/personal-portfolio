import React from "react";
import { FaBehance, FaTwitter, FaLinkedinIn, FaDribbble, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="w-full h-[560px] bg-[#262626] text-white relative overflow-hidden">

      {/* LEFT STAR */}
<div className="absolute left-[50px] top-[115px] w-[190px] h-[190px] flex items-center justify-center">

  {/* LINES */}
  <div className="absolute w-full h-full flex items-center justify-center">
    {[...Array(24)].map((_, i) => (
      <span
        key={i}
        className="absolute w-[2px] h-[12px] bg-gray-400"
        style={{
          transform: `rotate(${i * 15}deg) translateY(-85px)`
        }}
      />
    ))}
  </div>

  {/* STAR */}
  <span className="text-orange-500 text-3xl relative z-10">
    ✦
  </span>

        {/* LEFT MENU */}
        <div className="absolute left-[506px] top-[110px] space-y-6 text-lg">

          <p className="font-semibold hover:text-orange-400 cursor-pointer">
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

            <div className="bg-yellow-400 text-black p-3 rounded-full">
              <FaBehance />
            </div>

            <div className="bg-yellow-400 text-black p-3 rounded-full">
              <FaTwitter />
            </div>

            <div className="bg-yellow-400 text-black p-3 rounded-full">
              <FaLinkedinIn />
            </div>

            <div className="bg-yellow-400 text-black p-3 rounded-full">
              <FaDribbble />
            </div>

            <div className="bg-yellow-400 text-black p-3 rounded-full">
              <FaInstagram />
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="absolute left-[1024px] top-[110px]">

          {/* SUBSCRIBE */}
          <h3 className="text-lg font-semibold mb-6">
            Subscribe
          </h3>

          {/* INPUT BUTTON */}
          <div className="flex items-center w-[441px] h-[52px] bg-orange-500 px-4">

            <input
              type="text"
              placeholder="Enter Email Address Here"
              className="w-full bg-transparent outline-none text-white placeholder-white text-sm"
            />

            <span className="ml-2">✉</span>

          </div>

          {/* COPYRIGHT */}
          <p className="text-gray-400 text-sm mt-24">
            © Copyright 2022 All Rights Reserved.
          </p>

        </div>

      </div>

    </section>
  );
}