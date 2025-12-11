import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#007B9C] to-[#1186b7] text-white relative overflow-hidden">
      {/* Orange line at the top of the footer */}
  <div className="w-full h-2 bg-orange-400"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About Us + Mini Map */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-2xl transition-all flex flex-col">
            <h3 className="text-lg font-semibold mb-3 uppercase tracking-wider">About Us</h3>
            <div className="w-12 h-[2px] bg-white mb-4 relative">
              <span className="w-2 h-2 bg-white rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
            </div>
            <p className="text-sm leading-relaxed opacity-90 mb-4">
              Welcome to Apollo Dentals, Bhubaneswar — your trusted multi-specialty dental clinic offering advanced treatments with modern technology and compassionate care. <span className="underline cursor-pointer hover:text-orange-400 transition">Read More</span>
            </p>

            {/* Full-width Mini Google Map */}
            <div className="w-full rounded-xl overflow-hidden border-0 flex-1">
              <iframe
                title="Apollo Dentals Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d85.8289123!3d20.2961234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1901234567890%3A0xabcdef1234567890!2sApollo%20Dentals%2C%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>



        {/* Quick Links */}
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-2xl transition-all">
          <h3 className="text-lg font-semibold mb-3 uppercase tracking-wider">Quick Links</h3>
          <div className="w-12 h-[2px] bg-white mb-4 relative">
            <span className="w-2 h-2 bg-white rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
          </div>
          <ul className="space-y-2 text-sm">
            {["About","Blog","Testimonials","Gallery","Videos","Contact","Pediatric Dentistry","Smile Designing","Laser Dentistry"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 hover:text-orange-400 cursor-pointer transition">
                <span className="text-white/80">+</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-2xl transition-all">
          <h3 className="text-lg font-semibold mb-3 uppercase tracking-wider">Services</h3>
          <div className="w-12 h-[2px] bg-white mb-4 relative">
            <span className="w-2 h-2 bg-white rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
          </div>
          <ul className="space-y-2 text-sm">
            {["Cosmetic Dentistry","Dental Implants","Crowns & Bridges","Root Canal Treatment","Orthodontics (Braces)","Full & Partial Dentures","Gum Care Treatments","Invisible/Aligner Braces","Teeth Whitening"].map((service, idx) => (
              <li key={idx} className="flex items-center gap-2 hover:text-orange-400 cursor-pointer transition">
                <span className="text-white/80">+</span> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-2xl transition-all">
          <h3 className="text-lg font-semibold mb-3 uppercase tracking-wider">Contact Us</h3>
          <div className="w-12 h-[2px] bg-white mb-4 relative">
            <span className="w-2 h-2 bg-white rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
          </div>
          <p className="text-sm flex items-start gap-2 leading-relaxed">
            <IoLocationOutline className="mt-1" /> Apollo Dentals, Bhubaneswar<br />
            Plot No. 1243, Near Master Canteen Square,<br /> Janpath Road, Bhubaneswar, Odisha – 751001
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-orange-400 hover:text-white transition">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#007B9C] text-center py-4 text-sm">
        Copyright ©2025 Apollo Dentals, Bhubaneswar. All Rights Reserved | Designed By <a href="" className="underline hover:text-orange-400"><strong>Manish</strong></a>
      </div>
    </footer>
  );
};

export default Footer;
