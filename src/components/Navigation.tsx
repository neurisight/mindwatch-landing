import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHashClick = (e, hash) => {
    e.preventDefault();

    // If we're not on the home page, navigate there first
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/logo1-trans.png" alt="NeuriSight Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-black">Neuri</span>
            <span className="text-xl font-bold text-teal-600 -ml-2">Sight</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-gray-900 hover:text-teal-400"
            >
              Home
            </Link>
            <a
              href="#how"
              onClick={(e) => handleHashClick(e, "#how")}
              className="text-gray-900 hover:text-teal-400 cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleHashClick(e, "#benefits")}
              className="text-gray-900 hover:text-teal-400 cursor-pointer"
            >
              Benefits
            </a>
            <Link to="/research" className="text-gray-900 hover:text-teal-900">
              Research
            </Link>
            <Link to="/team" className="text-gray-900 hover:text-teal-400">
              Our Team
            </Link>
            <a
              href="#contact"
              onClick={(e) => handleHashClick(e, "#contact")}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Partner With Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black"
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
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-900 hover:text-teal-400"
            >
              Home
            </Link>
            <a
              href="#how"
              onClick={(e) => handleHashClick(e, "#how")}
              className="block py-2 text-gray-900 hover:text-teal-400 cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleHashClick(e, "#benefits")}
              className="block py-2 text-gray-900 hover:text-teal-400 cursor-pointer"
            >
              Benefits
            </a>
            <Link
              to="/research"
              className="block py-2 text-gray-900 hover:text-teal-400"
            >
              Research
            </Link>
            <Link
              to="/team"
              className="block py-2 text-gray-900 hover:text-teal-400"
            >
              Our Team
            </Link>
            <a
              href="#contact"
              onClick={(e) => handleHashClick(e, "#contact")}
              className="w-full mt-2 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Partner With Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
