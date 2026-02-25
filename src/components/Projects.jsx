import React from "react";
import leftImg from "../assets/project1.jpg";
import midImg from "../assets/project2.jpg";
import rightImg from "../assets/project3.jpg";

export default function Projects() {
  return (
    <section className="w-full bg-white text-white relative overflow-hidden py-28">

      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">

        {/* HEADLINE */}
        <p className="text-orange-500 font-semibold mb-3">
          Make It Live
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-400">
          Websites <span className="text-yellow-400">•</span> Branding{" "}
          <span className="text-yellow-400">•</span> Apps
        </h2>
      </div>

      {/* PROJECT AREA */}
      <div className="relative mt-20 h-[600px] overflow-hidden">

        {/* LEFT IMAGE (PARTIALLY HIDDEN) */}
        <div className="absolute -left-[200px] top-[220px] w-[510px] h-[348px]">
          <img
            src={leftImg}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute right-[-120px] top-[100px]">
            <p className="text-gray-400 text-sm">Agency</p>
            <p className="text-xl font-semibold">Website</p>
            <p className="text-orange-500 mt-2">Projects ↗</p>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[510px] h-[348px] z-20">

          <img
            src={midImg}
            alt=""
            className="w-full h-full object-cover shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          />

          {/* OVERLAY TEXT */}
          <div className="absolute -left-[180px] top-[110px]">
            <p className="text-gray-400 text-sm">Agency</p>
            <h3 className="text-2xl font-bold">
              Branding Website
            </h3>
            <p className="text-orange-500 mt-2">Projects ↗</p>
          </div>
        </div>

        {/* RIGHT IMAGE (PARTIALLY HIDDEN) */}
        <div className="absolute -right-[200px] top-[260px] w-[510px] h-[348px]">

          <img
            src={rightImg}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute left-[-150px] top-[120px]">
            <p className="text-gray-400 text-sm">Agency</p>
            <p className="text-orange-500 mt-2">Projects ↗</p>
          </div>
        </div>

        {/* CENTER STAR */}
<div className="absolute left-1/2 -translate-x-1/2 bottom-[10px]">

  <div className="relative w-[180px] h-[180px] flex items-center justify-center">

    {/* RADIAL LINES */}
    <div className="absolute w-full h-full flex items-center justify-center">
      {[...Array(24)].map((_, i) => (
        <span
          key={i}
          className="absolute w-[2px] h-[12px] bg-gray-500"
          style={{
            transform: `rotate(${i * 15}deg) translateY(-80px)`
          }}
        />
      ))}
    </div>

    {/* CENTER STAR */}
    <span className="text-orange-500 text-2xl relative z-10">
      ✦
    </span>

  </div>

</div>

        {/* RIGHT SIDE INDEX */}
        <div className="hidden md:flex flex-col gap-3 absolute right-20 top-10 text-gray-600 text-lg">
          <span className="text-orange-500">01</span>
          <span>01</span>
          <span>01</span>
          <span>01</span>
        </div>

      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden px-6 mt-10 space-y-6">
        <img src={midImg} className="w-full rounded-lg" />
        <img src={leftImg} className="w-full rounded-lg" />
        <img src={rightImg} className="w-full rounded-lg" />
      </div>

    </section>
  );
}