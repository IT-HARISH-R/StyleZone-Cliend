// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* About */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-2">StyleZone</h2>
                    <p className="text-sm">
                        Your trusted salon for stylish haircuts, grooming, and personalized care.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-md font-semibold text-white mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/book" className="hover:text-white">Book Appointment</Link></li>
                        <li><Link to="/login" className="hover:text-white">Admin</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-md font-semibold text-white mb-2">Contact Us</h3>
                    <p className="text-sm">📍 Mettur, Salem District</p>
                    <p className="text-sm">📞 +91 98765 43210</p>
                    <p className="text-sm">✉️ stylezone@gmail.com</p>
                </div>
            </div>

            <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} StyleZone. All rights reserved. <br />
                Developed with ❤️ by <a href="https://mernharish.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 font-semibold underline">Harish</a>

            </div>
        </footer>
    );
};

export default Footer;
