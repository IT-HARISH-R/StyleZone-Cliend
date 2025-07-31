// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-600">
          StyleZone
        </Link>

        {/* Menu */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-purple-600">
            Home
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-purple-600">
            Services
          </Link>
          <Link to="/book" className="text-gray-700 hover:text-purple-600">
            Book
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-purple-600">
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button (optional later) */}
        {/* You can add hamburger icon and drawer for mobile responsiveness later */}
      </div>
    </nav>
  );
};

export default Navbar;
