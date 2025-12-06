import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserMd } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-2 pb-16 mt-28 md:mt-28 sm:mt-16">
      <div className="max-w-7xl mx-auto pl-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-5 md:mt-10 ">
          <h1 className="fade-right text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
            We Are Providing <br />
            <span className="text-[#007B9C]">Best Health Services</span>
          </h1>

          <p className="fade-up text-gray-500 text-sm md:text-base w-[95%]">
            Our skilled doctors have tremendous experience. It is a long established
            fact that a reader will be distracted by the readable content.
          </p>

          {/* Appointment Box */}
{/* Appointment Box */}
<div className="bg-white shadow-xl rounded-2xl p-6 mt-8 border border-gray-100">
  <h3 className="fade-right font-semibold text-orange-600 text-lg mb-4">
    Book a Dental Appointment
  </h3>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

    {/* Patient Name */}
    <div className="flex items-center border rounded-xl px-4 py-3 gap-2 bg-gray-50">
      <i className="fa-solid fa-user text-[#007B9C] text-lg"></i>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full bg-transparent outline-none text-gray-700 text-sm"
      />
    </div>

    {/* Phone Number */}
    <div className="flex items-center border rounded-xl px-4 py-3 gap-2 bg-gray-50">
      <i className="fa-solid fa-phone text-[#007B9C] text-lg"></i>
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full bg-transparent outline-none text-gray-700 text-sm"
      />
    </div>

    {/* Date Selection */}
    <div className="flex items-center border rounded-xl px-4 py-3 gap-2 bg-gray-50">
      <FaCalendarAlt className="text-[#007B9C] text-lg" />
      <input
        type="date"
        className="w-full bg-transparent outline-none text-gray-700 text-sm"
      />
    </div>

    {/* Dental Specialist Type */}
    <div className="flex items-center border rounded-xl px-4 py-3 gap-2 bg-gray-50">
      <FaUserMd className="text-[#007B9C] text-lg" />
      <select className="w-full bg-transparent outline-none text-gray-700 text-sm">
        <option>General Dentist</option>
        <option>Orthodontist (Braces Specialist)</option>
        <option>Endodontist (Root Canal Specialist)</option>
        <option>Periodontist (Gum Specialist)</option>
        <option>Oral Surgeon</option>
        <option>Pediatric Dentist</option>
        <option>Cosmetic Dentistry</option>
      </select>
    </div>

    {/* BOOK APPOINTMENT BUTTON */}
    <button
      className="mask-btn bg-[#00C16E] text-white font-semibold rounded-xl px-4 py-3 
                 hover:bg-[#00aa5e] transition-all duration-300 shadow-md sm:col-span-2 lg:col-span-4"
    >
      Book Appointment →
    </button>

  </div>
</div>

        </div>

               {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end md:-mt-14 lg:-mt-4 ">
          <img
            src="/assets/images/Apollo hero sectionImg.png"
            alt="Doctor with patient"
            className="w-full max-w-4xl md:max-w-5xl object-contain"
          />
        </div>
      </div>

      {/* LOGO SLIDER SECTION 
      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 opacity-70">
        <img src="/assets/images/logo/invisalign-logo.png" alt="logo" className="w-full" />
        <img src="/assets/hero/logo2.png" alt="logo" className="w-full" />
        <img src="/assets/hero/logo3.png" alt="logo" className="w-full" />
        <img src="/assets/hero/logo4.png" alt="logo" className="w-full" />
        <img src="/assets/hero/logo5.png" alt="logo" className="w-full" />
        <img src="/assets/hero/logo6.png" alt="logo" className="w-full" />
      </div>*/}
    </section>
  );
}
