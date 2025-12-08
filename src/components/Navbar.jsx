import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#F37221] font-semibold"
      : "hover:text-[#007B9C]";

  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutOpen(false);
    setSpecialtiesOpen(false);
  }, [location]);

  return (
    <header className="w-full fixed top-0 left-0 z-50">

      {/* -------------------- TOP ORANGE BAR -------------------- */}
      <div className="bg-[#F37221] text-[#007B9C] text-xs sm:text-sm py-1">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

          {/* Social Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <FaFacebookF className="bg-white p-1 rounded-full text-lg sm:text-xl text-[#007B9C]" />
            <FaTwitter className="bg-white p-1 rounded-full text-lg sm:text-xl text-[#007B9C]" />
            <FaLinkedinIn className="bg-white p-1 rounded-full text-lg sm:text-xl text-[#007B9C]" />
            <FaInstagram className="bg-white p-1 rounded-full text-lg sm:text-xl text-[#007B9C]" />
            <FaYoutube className="bg-white p-1 rounded-full text-lg sm:text-xl text-[#007B9C]" />
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:9876543210"
              className="flex items-center space-x-2 hover:text-white transition font-semibold"
            >
              <FaPhoneAlt className="text-lg text-white" />
              <span className="text-white">9876543210</span>
            </a>

            <a
              href="mailto:info@example.com"
              className="hidden md:flex items-center space-x-2 hover:text-white transition font-semibold"
            >
              <FaEnvelope className="text-lg text-white" />
              <span className="text-white">info@example.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* -------------------- MAIN NAVBAR (UPDATED DESKTOP DESIGN) -------------------- */}
      <div className="bg-white shadow-md relative">

        {/* Blue Angular Strip */}
        <div className="absolute left-40 top-0 h-[10px] w-full bg-[#0A8CA2] transform -skew-x-[130deg] origin-left"></div>

        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo Left */}
          <div className="flex flex-col items-start">
            <img
              src="/assets/images/logo/logo.jpg"
              alt="Logo"
              className="h-14 lg:h-16"
            />
            <span className="text-[10px] lg:text-xs font-semibold">
              BRANCH: BHUBANESWAR
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8 items-center text-sm font-semibold text-gray-700">

            <a href="/" className={isActive("/")}>HOME</a>

            {/* ABOUT */}
            <div className="relative group">
              <button className={`${isActive("/about-us")}`}>ABOUT</button>

              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded w-40 mt-2 z-50">
                <a href="/about-us" className="block px-4 py-2 hover:bg-gray-100">
                  About Us
                </a>
                <a href="/team" className="block px-4 py-2 hover:bg-gray-100">
                  Our Team
                </a>
              </div>
            </div>

            {/* SPECIALTIES */}
            <div className="relative group">
              <button className={`${isActive("/orthodontics")}`}>SPECIALTIES</button>

              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded w-40 mt-2 z-50">
                <a href="/orthodontics" className="block px-4 py-2 hover:bg-gray-100">
                  Orthodontics
                </a>
                <a href="/cosmetic-dentistry" className="block px-4 py-2 hover:bg-gray-100">
                  Cosmetic Dentistry
                </a>
              </div>
            </div>

            <a href="/testimonials" className={isActive("/testimonials")}>
              TESTIMONIALS
            </a>
            <a href="/blog" className={isActive("/blog")}>BLOG</a>
            <a href="/gallery" className={isActive("/gallery")}>GALLERY</a>
            <a href="/contact" className={isActive("/contact")}>CONTACT</a>
          </nav>

          {/* Appointment Button */}
          <div className="hidden lg:block">
            <a
              href="/appointment"
              className="bg-[#F37221] text-white px-5 py-2 rounded font-semibold shadow hover:bg-[#df5f18] transition"
            >
              APPOINTMENT
            </a>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#007B9C] transition-transform duration-300"
          >
            {mobileMenuOpen ? (
              <i className="fa-solid fa-xmark text-2xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-2xl"></i>
            )}
          </button>
        </div>

        {/* -------------------- MOBILE MENU -------------------- */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white shadow-md flex flex-col text-sm">

            <a href="/" className={`px-4 py-3 ${isActive("/")}`}>HOME</a>

            {/* ABOUT MOBILE */}
            <div className="px-4 py-3">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full text-left font-medium"
              >
                ABOUT
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  aboutOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <a href="/about-us" className="pl-6 py-2 block hover:bg-gray-100">
                  About Us
                </a>
                <a href="/team" className="pl-6 py-2 block hover:bg-gray-100">
                  Our Team
                </a>
              </div>
            </div>

            {/* SPECIALTIES MOBILE */}
            <div className="px-4 py-3">
              <button
                onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
                className="w-full text-left font-medium"
              >
                SPECIALTIES
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  specialtiesOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <a href="/orthodontics" className="pl-6 py-2 block hover:bg-gray-100">
                  Orthodontics
                </a>
                <a href="/cosmetic-dentistry" className="pl-6 py-2 block hover:bg-gray-100">
                  Cosmetic Dentistry
                </a>
              </div>
            </div>

            <a href="/testimonials" className={`px-4 py-3 ${isActive("/testimonials")}`}>
              TESTIMONIALS
            </a>
            <a href="/blog" className={`px-4 py-3 ${isActive("/blog")}`}>BLOG</a>
            <a href="/gallery" className={`px-4 py-3 ${isActive("/gallery")}`}>GALLERY</a>
            <a href="/contact" className={`px-4 py-3 ${isActive("/contact")}`}>CONTACT</a>

            <a
              href="/appointment"
              className="px-4 py-3 bg-[#F37221] text-white mt-2 text-center font-semibold"
            >
              APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
