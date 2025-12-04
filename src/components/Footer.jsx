import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#1186b7] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">ABOUT US</h3>
          <div className="w-12 h-[2px] bg-white mb-4 relative">
            <span className="w-2 h-2 bg-white rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
          </div>
          <p className="text-sm leading-relaxed">
            Welcome to Apollo Dental, a leading dental clinic in Himayatnagar, where we combine latest equipped dental care with a compassionate approach to ensure your smile is as healthy and beautiful as possible. Our clinic is dedicated to providing exceptional dental services for the entire family, and we take great pride in delivering personalized, high-quality care tailored to each.... <span className="underline cursor-pointer">Read More</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">QUICK LINKS</h3>
          <div className="w-12 h-[2px] bg-white mb-4 relative">
            <span className="w-2 h-2 bg-white rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><span>+</span> About</li>
            <li className="flex items-center gap-2"><span>+</span> Blog</li>
            <li className="flex items-center gap-2"><span>+</span> Testimonials</li>
            <li className="flex items-center gap-2"><span>+</span> Images</li>
            <li className="flex items-center gap-2"><span>+</span> Videos</li>
            <li className="flex items-center gap-2"><span>+</span> Contact</li>
            <li className="flex items-center gap-2"><span>+</span> Pediatric Dentistry</li>
            <li className="flex items-center gap-2"><span>+</span> Smile Designing</li>
            <li className="flex items-center gap-2"><span>+</span> Laser Dentistry</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">SERVICES</h3>
          <div className="w-12 h-[2px] bg-white mb-4 relative">
            <span className="w-2 h-2 bg-white rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><span>+</span> Advanced Dentistry</li>
            <li className="flex items-center gap-2"><span>+</span> Implants</li>
            <li className="flex items-center gap-2"><span>+</span> Dental Crowns</li>
            <li className="flex items-center gap-2"><span>+</span> Dental Bridges</li>
            <li className="flex items-center gap-2"><span>+</span> Root Canal Treatment</li>
            <li className="flex items-center gap-2"><span>+</span> Dentures</li>
            <li className="flex items-center gap-2"><span>+</span> Gum Disease</li>
            <li className="flex items-center gap-2"><span>+</span> Invisible Braces</li>
            <li className="flex items-center gap-2"><span>+</span> Teeth Whitening</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">CONTACT US</h3>
          <div className="w-12 h-[2px] bg-white mb-4 relative">
            <span className="w-2 h-2 bg-white rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
          </div>
          <p className="text-sm flex items-start gap-2">
            <IoLocationOutline className="mt-1" /> Apollo Dental (Branch: Himayatnagar) Ground Floor, G.S Towers, Himayat Nagar Rd, opposite Maruthi Suzuki showroom, AP State Housing Board, Himayatnagar, Hyderabad, Telangana 500029
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-4">
            <a href="#"><FaFacebookF className="w-5 h-5" /></a>
            <a href="#"><FaTwitter className="w-5 h-5" /></a>
            <a href="#"><FaLinkedinIn className="w-5 h-5" /></a>
            <a href="#"><FaInstagram className="w-5 h-5" /></a>
            <a href="#"><FaYoutube className="w-5 h-5" /></a>
            <a href="#"><FaPinterestP className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#007B9C] text-center py-4 text-sm">
        Copyright ©2025 Apollo Dental Care All Rights Reserved | Designed By <strong>Delight Designs</strong>
      </div>
    </footer>
  );
};

export default Footer;
