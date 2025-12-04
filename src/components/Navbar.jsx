import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterest,
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
    <header className="w-full fixed top-0 left-0  z-50">
      {/* Top Bar */}
<div className="bg-[#007B9C]  text-white text-xs sm:text-sm  py-1 ">
<div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
  {/* Social Icons */}
  <div className="flex items-center space-x-2 sm:space-x-3">
    <FaFacebookF className="bg-orange-500 p-1 rounded-full text-lg sm:text-xl" />
    <FaTwitter className="bg-orange-500 p-1 rounded-full text-lg sm:text-xl" />
    <FaLinkedinIn className="bg-orange-500 p-1 rounded-full text-lg sm:text-xl" />
    <FaInstagram className="bg-orange-500 p-1 rounded-full text-lg sm:text-xl" />
    <FaYoutube className="bg-orange-500 p-1 rounded-full text-lg sm:text-xl" />
    <FaPinterest className="bg-orange-500 p-1 rounded-full text-lg sm:text-xl" />
  </div>

  {/* Contact Info */}
  <div className="flex items-center space-x-4">

    {/* Phone */}
    <a
      href="tel:9876543210"
      className="flex items-center space-x-1 sm:space-x-2 hover:text-orange-500 transition"
    >
      <FaPhoneAlt className="text-base sm:text-lg" />
      <span className="text-xs sm:text-sm">9876543210</span>
    </a>

    {/* Email (Hidden on mobile) */}
    <a
      href="mailto:info@example.com"
      className="hidden md:flex items-center space-x-2 hover:text-orange-500 transition"
    >
      <FaEnvelope className="text-lg" />
      <span>info@example.com</span>
    </a>
  </div>
</div>
</div>

      {/* Main Navbar */}
      <div className="bg-white backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Menu (Only large screens) */}
          <nav className="hidden lg:flex space-x-6 items-center text-sm xl:text-base">
            <a href="/" className={isActive("/")}>HOME</a>

            {/* ABOUT Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`${isActive("/about-us")}`}
              >
                ABOUT
              </button>

              {aboutOpen && (
                <div className="absolute bg-white shadow-md mt-2 rounded w-40 z-50 animate-fadeIn">
                  <a href="/about-us" className="block px-4 py-2 hover:bg-gray-100">
                    About Us
                  </a>
                  <a href="/team" className="block px-4 py-2 hover:bg-gray-100">
                    Our Team
                  </a>
                </div>
              )}
            </div>

            {/* SPECIALTIES Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
                className={`${isActive("/orthodontics")}`}
              >
                SPECIALTIES
              </button>

              {specialtiesOpen && (
                <div className="absolute bg-white shadow-md mt-2 rounded w-40 z-50 animate-fadeIn">
                  <a href="/orthodontics" className="block px-4 py-2 hover:bg-gray-100">
                    Orthodontics
                  </a>
                  <a href="/cosmetic-dentistry" className="block px-4 py-2 hover:bg-gray-100">
                    Cosmetic Dentistry
                  </a>
                </div>
              )}
            </div>

            <a href="/testimonials" className={isActive("/testimonials")}>
              TESTIMONIALS
            </a>
            <a href="/blog" className={isActive("/blog")}>BLOG</a>
            <a href="/gallery" className={isActive("/gallery")}>GALLERY</a>
            <a href="/contact" className={isActive("/contact")}>CONTACT</a>
          </nav>

          {/* Appointment Button (Large screens) */}
          <div className="hidden lg:block">
            <a
              href="/appointment"
              className="bg-orange-500 text-white px-4 py-2 rounded font-semibold hover:bg-orange-600"
            >
              APPOINTMENT
            </a>
          </div>

          {/* Hamburger for Mobile + Tablet */}
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

        {/* Mobile & Tablet Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white shadow-md flex flex-col text-sm">
            <a href="/" className={`px-4 py-3 ${isActive("/")}`}>HOME</a>

            {/* ABOUT */}
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

            {/* SPECIALTIES */}
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
              className="px-4 py-3 bg-orange-500 text-white mt-2 text-center"
            >
              APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
