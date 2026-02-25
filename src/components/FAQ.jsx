import React from "react";

export default function FAQ() {
  return (
    <section className="w-full bg-[#1a1a1a] text-white py-24">

      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">

        {/* HEADING */}
        <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold">
          FAQs
        </h2>

        {/* LINE */}
        <div className="w-full h-[1px] bg-gray-600 mt-6 mb-12"></div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-[1fr_420px] gap-16">

          {/* LEFT SIDE */}
          <div>

            {/* QUESTION */}
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              What Is Average Cost Of The Project? ↗
            </h3>

            {/* ANSWERS */}
            <p className="text-gray-400 leading-relaxed mb-8 max-w-[450px]">
              From My Experience, I Saw Individuals Perpetually Wish
              To Induce An Internet Site For Their Work Or One
            </p>

            <p className="text-gray-400 leading-relaxed max-w-[450px]">
              From My Experience, I Saw Individuals Perpetually Wish
              To Induce An Internet Site For Their Work Or One
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            <div className="flex justify-between items-center border-b border-gray-700 pb-3">
              <span>How Can I Work With You?</span>
              <span className="text-orange-500">↗</span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-700 pb-3">
              <span>What Kind Of Work You Completed Recently</span>
              <span className="text-orange-500">↗</span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-700 pb-3">
              <span>Have You Done Any Kind Of National Work</span>
              <span className="text-orange-500">↗</span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-700 pb-3">
              <span>Hey I’m Nick Nice Yo Meet You</span>
              <span className="text-orange-500">↗</span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-700 pb-3">
              <span>Perpetually Wish To Induce An Intern</span>
              <span className="text-orange-500">↗</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}