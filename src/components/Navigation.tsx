import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/logo1.png" alt="NeuriSight Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">NeuriSight</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-teal-600">
              Home
            </Link>
            <Link to="/#how" className="text-gray-700 hover:text-teal-600">
              How It Works
            </Link>
            <Link to="/#benefits" className="text-gray-700 hover:text-teal-600">
              Benefits
            </Link>
            <Link to="/#use-cases" className="text-gray-700 hover:text-teal-600">
              Use Cases
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-teal-600">
              Our Team
            </Link>
            <Link to="/#contact" className="text-gray-700 hover:text-teal-600">
              Contact
            </Link>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
              Partner With Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="text-gray-700 hover:text-teal-600">
              Home
            </Link>

            <Link
              to="#how"
              className="block py-2 text-gray-700 hover:text-teal-600"
            >
              How It Works
            </Link>
            <Link
              to="#benefits"
              className="block py-2 text-gray-700 hover:text-teal-600"
            >
              Benefits
            </Link>
            <Link
              to="#use-cases"
              className="block py-2 text-gray-700 hover:text-teal-600"
            >
              Use Cases
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-teal-600">Our Team</Link>
            <Link
              to="#contact"
              className="block py-2 text-gray-700 hover:text-teal-600"
            >
              Contact
            </Link>
            <button className="w-full mt-2 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
              Partner With Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
