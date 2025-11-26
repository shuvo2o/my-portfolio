import { div } from "framer-motion/client";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6 relative ">
        {/* LEFT EMAIL */}
        <div className="flex items-center gap-2">
          <span className="p-2 bg-gray-800 rounded-full">
            <IoMailOutline className="text-white" />
          </span>
          <span className={`${isMenuOpen ? "hidden" : "block"}`}>
            shuvodas340985@gmail.com
          </span>
        </div>

        {/* MIDDLE MENU ITEMS */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8 text-gray-300 font-medium">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/partner" className="hover:text-white">
                Partner
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-white">
                Service
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT SOCIAL LINKS (unchanged) */}

        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li className="flex items-center">
              <a
                href="https://www.linkedin.com/in/shuvo-chandra-das-54b4a3224/"
                className="text-gray-300 hover:text-white flex items-center gap-1"
                target="_blank"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </li>

            <li className="flex items-center">
              <a
                href="https://wa.me/8801776132641"
                className="text-gray-300 hover:text-white flex items-center gap-1"
                target="_blank"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </li>

            <li className="flex items-center">
              <a
                href="https://www.instagram.com/itz.shuvo_2.0/"
                className="text-gray-300 hover:text-white flex items-center gap-1"
                target="_blank"
              >
                <FaInstagram className="text-xl" />
              </a>
            </li>
          </ul>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-gray-300 transition-all ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-300 my-1.5 transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-300 transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </div>

        {/* MOBILE MENU */}
        <nav
          className={`fixed md:hidden top-0 right-0 h-screen w-64 bg-black/95 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } flex items-center justify-center z-40`}
        >
          <ul className="flex flex-col space-y-8 text-center text-xl text-gray-300">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/partner"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white"
              >
                Partner
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* OVERLAY */}
        {isMenuOpen && (
          <div
            className="fixed md:hidden inset-0 bg-black/50 z-30"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
