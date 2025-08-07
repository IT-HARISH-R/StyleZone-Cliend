import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // 🔥 Import Redux selector

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const user = useSelector((state) => state.user?.user); // 👈 Access user from Redux

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-600">
          StyleZone
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-purple-600">Services</Link>
          <Link to="/book" className="text-gray-700 hover:text-purple-600">Book</Link>
          <Link to="/login" className="text-gray-700 hover:text-purple-600">Admin</Link>

          {user ? (
            <Link to="/profile" className="text-gray-700 font-medium hover:text-purple-600">
              Profile
            </Link>
          ) : (
            <>
              <Link to="/login" className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700">
                Login
              </Link>
              <Link to="/signup" className="border border-purple-600 text-purple-600 px-3 py-1 rounded hover:bg-purple-50">
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-3 shadow">
          <Link to="/" className="block text-gray-700 hover:text-purple-600">Home</Link>
          <Link to="/services" className="block text-gray-700 hover:text-purple-600">Services</Link>
          <Link to="/book" className="block text-gray-700 hover:text-purple-600">Book</Link>
          <Link to="/login" className="block text-gray-700 hover:text-purple-600">Admin</Link>

          {user ? (
            <Link to="/profile" className="block text-gray-700 font-medium hover:text-purple-600">
              Profile
            </Link>
          ) : (
            <>
              <Link to="/login" className="block bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700">
                Login
              </Link>
              <Link to="/signup" className="block border border-purple-600 text-purple-600 px-3 py-1 rounded hover:bg-purple-50">
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
