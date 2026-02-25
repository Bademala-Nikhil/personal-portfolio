import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full px-6 md:px-20 py-6 flex items-center justify-between">

      {/* Logo */}
      <h1 className="text-xl font-bold">Portfolio</h1>

      {/* Menu */}
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <Link to="/" className="hover:text-orange-500">Home</Link>
        <Link to="/portfolio" className="text-orange-500">Portfolio</Link>
        <Link to="/" className="hover:text-orange-500">About</Link>
        <Link to="/" className="hover:text-orange-500">Projects</Link>
        <Link to="/" className="hover:text-orange-500">Service</Link>
      </nav>

      {/* Button */}
      <button className="hidden md:block bg-black text-white px-6 py-3 rounded-md">
        Let’s Work
      </button>

    </header>
  );
}