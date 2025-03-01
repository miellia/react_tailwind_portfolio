import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link"; // HashLink for updating URL
import { FaBars, FaTimes } from "react-icons/fa";

// Define menu items for navigation
const menuItems = [
  { name: "Home", to: "#" },
  { name: "About", to: "#about" },
  { name: "Portfolio", to: "#portfolio" },
  { name: "Contact", to: "#contact" },
];

// Component for Hire Me dropdown menu
const HireMenu = ({ isOpen }) =>
  isOpen && (
    <div className="absolute right-0 mt-2 w-40 bg-blue-900 border border-gray-700 rounded-lg shadow-lg">
      {[
        { name: "Fiverr", link: "https://www.fiverr.com" },
        { name: "Upwork", link: "https://www.upwork.com" },
        { name: "PeoplePerHour", link: "https://www.peopleperhour.com" },
      ].map(({ name, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 text-white hover:bg-purple-500"
        >
          {name}
        </a>
      ))}
    </div>
  );

// Main Navbar Component
const Navbar = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // State for Hire Me dropdown menu
  const [isHireMenuOpen, setIsHireMenuOpen] = useState(false);
  // Refs to detect outside clicks
  const hireMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Effect to close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hireMenuRef.current && !hireMenuRef.current.contains(event.target)) {
        setIsHireMenuOpen(false);
      }
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-4 px-6 z-50 flex justify-between items-center">
      {/* Logo (Clickable, Scrolls to Top) */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.history.pushState(null, null, "/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-3xl font-bold text-purple-400 font-signature flex items-center cursor-pointer"
      >
        Ellia <span className="ml-1">🖊️</span>
      </a>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Navigation Menu */}
      <ul className="hidden md:flex space-x-6">
        {menuItems.map(({ name, to }) => (
          <li key={name} className="cursor-pointer">
            <a
              href={to}
              onClick={(e) => {
                if (to === "#") {
                  e.preventDefault();
                  window.history.pushState(null, null, "/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              {name}
            </a>
          </li>
        ))}
        {/* Hire Me Button with Dropdown */}
        <li className="relative" ref={hireMenuRef}>
          <button
            onClick={() => setIsHireMenuOpen(!isHireMenuOpen)}
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-400 transition"
          >
            Hire Me
          </button>
          <HireMenu isOpen={isHireMenuOpen} />
        </li>
      </ul>

      {/* Mobile Navigation Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 w-3/4 h-full bg-gradient-to-b from-blue-900 to-blue-500 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        {/* Close Button for Mobile Menu */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
          {menuItems.map(({ name, to }) => (
            <li key={name} className="cursor-pointer">
              <a
                href={to}
                onClick={(e) => {
                  if (to === "#") {
                    e.preventDefault();
                    window.history.pushState(null, null, "/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setIsOpen(false);
                }}
              >
                {name}
              </a>
            </li>
          ))}
          {/* Hire Me Button in Mobile Menu */}
          <li>
            <button
              onClick={() => setIsHireMenuOpen(!isHireMenuOpen)}
              className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-400 transition"
            >
              Hire Me
            </button>
            <HireMenu isOpen={isHireMenuOpen} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
