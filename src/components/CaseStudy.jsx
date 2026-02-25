import React from "react";
import { FaBehance, FaTwitter, FaLinkedin } from "react-icons/fa";

import img1 from "../assets/project3.jpg"; // front image
import img2 from "../assets/project3.jpg"; // rotated back
import img3 from "../assets/project2.jpg"; // rotated bottom

export default function CaseStudy() {
  return (
    <section className="w-full bg-white py-32">

      <div className="max-w-[1400px] mx-auto px-6 md:px-20">

        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* LEFT SIDE */}
          <div>

            {/* SMALL TITLE */}
            <p className="text-orange-500 font-semibold mb-6">
              Case Studies
            </p>

            {/* HEADING */}
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-[440px]">
              Dotpixel Agency Website
              <br /> & Branding Design
            </h2>

            {/* ICONS */}
            <div className="flex gap-4 mt-8 text-gray-600 text-lg">
              <FaBehance className="cursor-pointer hover:text-black" />
              <FaTwitter className="cursor-pointer hover:text-black" />
              <FaLinkedin className="cursor-pointer hover:text-black" />
            </div>

            {/* BUTTON */}
            <button className="mt-10 bg-orange-500 text-white px-10 py-4 font-semibold hover:bg-orange-600 transition">
              Hire Me
            </button>

          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="relative h-[500px]">

            {/* BACK IMAGE 3 */}
            <img
              src={img3}
              alt=""
              className="absolute left-0 top-[100px] w-[600px] rotate-[8deg] shadow-xl"
            />

            {/* BACK IMAGE 2 */}
            <img
              src={img2}
              alt=""
              className="absolute right-0 top-0 w-[600px] -rotate-[3deg] shadow-xl"
            />

            {/* FRONT IMAGE */}
            <img
              src={img1}
              alt=""
              className="absolute left-[50px] top-[40px] w-[600px] shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}