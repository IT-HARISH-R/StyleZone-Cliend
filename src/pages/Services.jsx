// src/pages/Services.jsx
import React from "react";

const services = [
  {
    id: 1,
    title: "Men's Haircut",
    description: "Stylish and clean haircut tailored to your face shape.",
    price: 300,
    duration: "30 mins",
  },
  {
    id: 2,
    title: "Beard Trim",
    description: "Professional beard shaping and grooming.",
    price: 150,
    duration: "15 mins",
  },
  {
    id: 3,
    title: "Hair Spa",
    description: "Relaxing hair treatment for smooth and shiny hair.",
    price: 500,
    duration: "45 mins",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{service.description}</p>
              <p className="text-purple-600 font-semibold">₹{service.price}</p>
              <p className="text-sm text-gray-500">⏱ {service.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
