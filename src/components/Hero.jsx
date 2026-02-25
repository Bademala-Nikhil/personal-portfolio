import React from "react";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="w-full h-[805px] bg-[#F6ECD4] relative overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="absolute left-[135px] top-[100px] max-w-[658px]">

        <h1 className="text-[42px] md:text-[56px] font-extrabold leading-tight">
          HI, I'M <span className="tracking-wide">TAYLER</span>
          <span className="bg-orange-500 text-white text-xs px-2 py-1 ml-3">
            BRANDING
          </span>
        </h1>

        <h2 className="text-[42px] md:text-[56px] font-extrabold mt-4">
          CREATIVE DESIGNER
        </h2>

        <h2 className="text-[42px] md:text-[56px] font-extrabold mt-2">
          BASED IN ITALY
        </h2>

        <p className="mt-6 text-gray-600 max-w-[491px]">
          From My Experience, I Saw Individuals Perpetually Wish
          To Induce An Internet Site For Their Work Or One
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-10 mt-10">
          <button className="bg-orange-500 text-white px-10 py-4 font-semibold">
            Hire Me
          </button>

          <a href="#" className="font-medium flex items-center gap-1">
            Projects →
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE (EXACT FIGMA POSITION) */}
      <img
        src={heroImg}
        alt="hero"
        className="absolute top-0 left-[770px] w-[700px] h-[804px] object-cover object-top"
      />

      {/* STAR DESIGN */}
      <div className="absolute top-[422px] left-[623px] w-[150px] h-[150px] flex items-center justify-center">

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
  <span className="text-black text-xl relative z-10">
    ✦
  </span>

</div>

      {/* ✅ MOBILE VIEW */}
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