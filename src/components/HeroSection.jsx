import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserMd } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-2 pb-16 mt-28 md:mt-28 sm:mt-16">
      <div className="max-w-7xl mx-auto pl-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-5 md:mt-10 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
            We Are Providing <br />
            <span className="text-[#007B9C]">Best Health Services</span>
          </h1>

          <p className="text-gray-500 text-sm md:text-base w-[95%]">
            Our skilled doctors have tremendous experience. It is a long established
            fact that a reader will be distracted by the readable content.
          </p>

          {/* Appointment Box */}
          <div className="bg-white shadow-lg rounded-lg p-4 mt-6">
            <h3 className="font-semibold text-gray-700 mb-3">Book an appointment</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Location */}
              <div className="flex items-center border rounded-lg px-3 py-2 gap-2">
                <FaMapMarkerAlt className="text-[#007B9C]" />
                <select className="w-full outline-none text-gray-600 text-sm">
                  <option>Dhaka, Bangladesh</option>
                  <option>Delhi, India</option>
                  <option>Dubai, UAE</option>
                </select>
              </div>

              {/* Date */}
              <div className="flex items-center border rounded-lg px-3 py-2 gap-2">
                <FaCalendarAlt className="text-[#007B9C]" />
                <input
                  type="date"
                  className="w-full outline-none text-gray-600 text-sm"
                />
              </div>

              {/* Doctor Type */}
              <div className="flex items-center border rounded-lg px-3 py-2 gap-2">
                <FaUserMd className="text-[#007B9C]" />
                <select className="w-full outline-none text-gray-600 text-sm">
                  <option>All Health Services</option>
                  <option>Dentist</option>
                  <option>Cardiologist</option>
                  <option>Dermatologist</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="bg-[#00C16E] text-white font-semibold rounded-lg px-3 py-2 hover:bg-[#00aa5e]">
                Search →
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

      {/* LOGO SLIDER SECTION */}
      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 opacity-70">
        <img src="/assets/hero/logo1.png" alt="logo" className="w-full" />
        <img src="/assets/hero/logo2.png" alt="logo" className="w-full" />
        <img src="/assets/hero/logo3.png" alt="logo" className="w-full" />
        <img src="/assets/hero/logo4.png" alt="logo" className="w-full" />
        <img src="/assets/hero/logo5.png" alt="logo" className="w-full" />
        <img src="/assets/hero/logo6.png" alt="logo" className="w-full" />
      </div>
    </section>
  );
}
