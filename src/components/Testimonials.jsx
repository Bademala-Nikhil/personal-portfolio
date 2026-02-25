import React from "react";
import mainImg from "../assets/test2.png";
import sideImg from "../assets/test1.png";

export default function Testimonials() {
  return (
    <section className="w-full bg-white relative h-[750px] overflow-hidden">

      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto relative">

        {/* TOP LEFT HEADING */}
        <div className="absolute left-[135px] top-[60px]">

          <p className="text-orange-500 mb-2 text-sm">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            What They Say <br />
            About Me <span className="text-yellow-500">•</span>
          </h2>

        </div>

        {/* TOP RIGHT TEXT */}
        <p className="absolute right-[135px] top-[80px] w-[350px] text-gray-500 text-sm">
          From My Experience, I Saw Individuals Perpetually Wish
          To Induce An Internet Site For Their Work Or One
        </p>

        {/* LEFT IMAGE (FIXED POSITION) */}
        <div className="absolute left-[135px] top-[220px]">

          {/* GLOW */}
          <div className="absolute w-[420px] h-[420px] bg-yellow-300/40 blur-[120px] rounded-full"></div>

          <img
            src={mainImg}
            alt=""
            className="relative w-[380px] h-[400px] object-cover rounded-md"
          />
        </div>

        {/* MIDDLE TEXT */}
        <div className="absolute left-[600px] top-[300px] w-[420px]">

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
          <div className="flex gap-1 mt-6 text-yellow-500 text-lg">
            ★★★★★
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <img
          src={sideImg}
          alt=""
          className="absolute right-[100px] top-[250px] w-[200px] h-[190px] object-cover rounded-md shadow-lg"
        />

        {/* STAR DESIGN */}
        <div className="absolute right-[120px] bottom-[60px]">
          <div className="w-[110px] h-[110px] border border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-blue-400 text-xl">✦</span>
          </div>
        </div>

      </div>

    </section>
  );
}