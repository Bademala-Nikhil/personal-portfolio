import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
}

export default function Stats() {

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="w-full bg-black text-white py-12">

      <motion.div
        className="max-w-[1200px] mx-auto px-6 md:px-10"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-center md:text-left">

          {/* LEFT */}
          <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start">

            <motion.h2
              className="text-4xl font-bold"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              +<Counter end={100} />
            </motion.h2>

            <p className="text-gray-400 mt-2 max-w-[220px]">
              Client Works Developed In World-Wide
            </p>
          </motion.div>

          {/* MIDDLE */}
          <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start">

            <motion.h2
              className="text-4xl font-bold"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Counter end={457} />
            </motion.h2>

            <p className="text-gray-400 mt-2">
              Projects Completed
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start">

            <h3 className="text-lg font-semibold mb-4">
              PROJECT STATISTICS 2022
            </h3>

            <div className="w-full space-y-3 text-sm">

              {[
                { name: "Mobile Application", value: 60 },
                { name: "Branding Design", value: 100 },
                { name: "Projects Completed", value: 48 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 5 }}
                  className="flex justify-between border-b border-gray-700 pb-2 cursor-pointer"
                >
                  <span>{item.name} ↗</span>
                  <span>{item.value}</span>
                </motion.div>
              ))}

            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-yellow-400 text-black px-6 py-2 font-semibold hover:bg-yellow-300 transition"
            >
              Case Studies
            </motion.button>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}