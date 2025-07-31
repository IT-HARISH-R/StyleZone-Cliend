// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-300 to-purple-400 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to StyleZone</h1>
          <p className="text-lg md:text-xl mb-6">
            Your one-stop destination for modern haircuts, grooming, and styling.
          </p>
          <Link
            to="/book"
            className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-purple-100 transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* You can map real data later */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Men’s Haircut</h3>
              <p className="text-sm text-gray-600">Modern and classic styles tailored to your look.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Beard Trim</h3>
              <p className="text-sm text-gray-600">Clean and stylish beard grooming services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Hair Spa</h3>
              <p className="text-sm text-gray-600">Relaxing treatment for strong, shiny hair.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Optional Testimonials or Contact */}
    </div>
  );
};

export default Home;
