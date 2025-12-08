import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+91XXXXXXXXXX"
        className="bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
      >
        <FaPhoneAlt size={28} />
      </a>

    </div>
  );
}
