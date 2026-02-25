import React from "react";

export default function About() {
  return (
    <section className="w-full bg-white py-24">

      <div className="max-w-[1400px] mx-auto px-6 md:px-20">

        {/* GRID */}
        <div className="grid md:grid-cols-[200px_1fr_320px] gap-10 items-start">

          {/* LEFT */}
          <div className="pt-2">
            <p className="text-orange-500 font-semibold uppercase text-sm tracking-wide">
              WHO I AM
            </p>
          </div>

          {/* MIDDLE */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-[600px]">
              From My Experience, I Saw Individuals Perpetually Wish To Induce An Internet Site For Their Work Or One Always Be Great
            </h2>

            <button className="mt-12 border border-orange-500 px-10 py-4 font-medium hover:bg-orange-500 hover:text-white transition">
              More About Me
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-start">

            <div className="mb-8">
              <h4 className="font-semibold">ZXC Studio</h4>
              <p className="text-gray-500 text-sm">Washington, NYC</p>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
              From My Experience, I Saw Individuals Perpetually Wish To Induce An Internet Site For Their Work Or One
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}