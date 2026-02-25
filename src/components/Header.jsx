import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-6 md:px-20 py-6 flex items-center justify-between"
    >

      {/* Logo */}
      <motion.h1
        whileHover={{ scale: 1.1 }}
        className="text-xl font-bold cursor-pointer"
      >
        Portfolio
      </motion.h1>

      {/* Menu */}
      <nav className="hidden md:flex gap-8 text-sm font-medium">

        {[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: "About", path: "/" },
          { name: "Projects", path: "/" },
          { name: "Service", path: "/" }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -2 }}
            className="relative group"
          >
            <Link
              to={item.path}
              className="hover:text-orange-500 transition"
            >
              {item.name}
            </Link>

            {/* Underline Animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.div>
        ))}

      </nav>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-black text-white px-6 py-3 rounded-md hover:bg-orange-500 transition"
      >
        Let’s Work
      </motion.button>

    </motion.header>
  );
}