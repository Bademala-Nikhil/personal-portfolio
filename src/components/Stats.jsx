import React from "react";

export default function Stats() {
  return (
    <section className="w-full bg-black text-white py-12">

      {/* CENTER CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-center md:text-left">

          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold">+100</h2>
            <p className="text-gray-400 mt-2 max-w-[220px]">
              Client Works Developed In World-Wide
            </p>
          </div>

          {/* MIDDLE */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold">457</h2>
            <p className="text-gray-400 mt-2">
              Projects Completed
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">
              PROJECT STATISTICS 2022
            </h3>

            <div className="w-full space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>Mobile Application ↗</span>
                <span>60</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>Branding Design ↗</span>
                <span>100</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>Projects Completed ↗</span>
                <span>48</span>
              </div>
            </div>

            <button className="mt-6 bg-yellow-400 text-black px-6 py-2 font-semibold hover:bg-yellow-300 transition">
              Case Studies
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}