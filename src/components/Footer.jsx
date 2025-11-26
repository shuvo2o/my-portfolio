import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, transitions } from "../utils/animations";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ ...transitions.default, delay: 0.4 }}
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-800 py-8 px-6"
    >
      {/* Top Section: Menu + Social */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Menu Items */}
        <nav>
          <ul className="flex flex-wrap gap-6 text-gray-300 text-sm md:text-base font-medium">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
            </li>
            <li>
              <Link to="/partner" className="hover:text-white transition-colors">Partner</Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-white transition-colors">Service</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Right: Social Icons */}
        <nav>
          <ul className="flex gap-6 text-gray-300 text-lg md:text-xl">
            <li>
              <a
                href="https://www.linkedin.com/in/shuvo-chandra-das-54b4a3224/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/8801776132641"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/itz.shuvo_2.0/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm md:text-base">
        © 2025 All rights reserved. Developed by{" "}
        <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text font-semibold">
          Shuvo
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;
