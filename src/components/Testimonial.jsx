import React, { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "MJ Patil",
    role: "Regular Guest",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    text:
      "The ambiance here is unmatched! Great music, friendly staff, and perfectly crafted drinks. It’s my go-to place to relax after work.",
  },
  {
    name: "Karan Sharma",
    role: "Corporate Team Outing Organizer",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    text:
      "We booked the pub for a team gathering — the service was excellent, the food was amazing, and everyone loved the signature cocktails!",
  },
  {
    name: "Sandeep Kumar",
    role: "Event Host",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    text:
      "Hosted a birthday celebration here, and it was fantastic. The staff handled everything smoothly and the vibe was perfect for the night.",
  },
  {
    name: "Sunita Kumari",
    role: "Food & Beverage Reviewer",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    text:
      "Their snacks and cocktails are top-notch. The flavors are rich and the presentation is impressive. Highly recommended for a great evening!",
  },
];


const Testimonial = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => next(), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full py-20 px-6 bg-white overflow-hidden">

      {/* Background decorative circles */}
      <div className="absolute top-[-120px] right-[-200px] w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-[-140px] left-[-180px] w-[450px] h-[450px] rounded-full bg-white/10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-10">
          What our customers said
        </h2>

        <div className="relative flex items-center justify-center">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="
              absolute left-[-70px] 
              bg-white/20 hover:bg-gray-600/30 
              border border-white/30 
              w-12 h-12 rounded-full 
              flex items-center justify-center 
              text-green-700 text-xl 
              transition-all z-20
            "
          >
            <FaArrowLeft />
          </button>

          {/* CARD */}
<div
  className="
    relative w-full p-10 rounded-3xl 
    bg-white/20 backdrop-blur-2xl
    shadow-[0_10px_40px_rgba(0,0,0,0.15)]
    border border-white/30
    transition-all duration-700
    hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)]
    hover:scale-[1.02]
    overflow-hidden
  "
>

  {/* Gradient Glow Border */}
  <div className="absolute inset-0 rounded-3xl p-[2px] bg-green-900 opacity-90"></div>

  {/* Inner Content */}
  <div className="relative bg-white/90 rounded-2xl p-6">
    
    {/* Quote Symbol */}
    <div className="text-7xl text-green-500/70 font-bold mb-0">“</div>

    {/* Testimonial Text */}
    <p className="text-lg text-green-900/90 leading-relaxed  min-h-[100px] font-medium">
      {testimonials[active].text}
    </p>

    {/* Stars */}
    <div className="flex justify-center gap-1 my-4">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 drop-shadow-md" />
      ))}
    </div>

    {/* Name + Role */}
    <div className="mt-4">
      <p className="text-xl font-semibold text-green-700 tracking-wide">
        — {testimonials[active].name}
      </p>
      <p className="text-sm text-green-800/70">{testimonials[active].role}</p>
    </div>

  </div>
</div>


          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="
              absolute right-[-70px] 
              bg-white/20 hover:bg-gray-600/30 
              border border-white/30 
              w-12 h-12 rounded-full 
              flex items-center justify-center 
              text-green-700 text-xl 
              transition-all z-20
            "
          >
            <FaArrowRight />
          </button>
        </div>

        {/* AVATARS */}
        <div className="flex justify-center gap-6 -mt-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="cursor-pointer transition-all"
            >
              <img
                src={item.image}
                className={`w-16 h-16 rounded-full object-cover transition-all duration-500 ${
                  active === i
                    ? "ring-4 ring-green-700 scale-110"
                    : "opacity-40 hover:opacity-70"
                }`}
                alt=""
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
