import React, { useRef, useEffect } from "react";

// Specialist data
const specialists = [
  {
    name: "Dr. Michael Anderson",
    title: "Chief Doctor",
    description: "Expert in Cardiology with 15+ years of experience.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Robert Wilson",
    title: "Dental Director",
    description: "Specialist in Dental Care with 12+ years of practice.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Emily Davis",
    title: "Clinical Psychologist",
    description: "Certified psychologist helping patients with mental wellness.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Sarah Parker",
    title: "Neurologist",
    description: "Experienced neurologist focused on brain and nerve care.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Michael Anderson",
    title: "Chief Doctor",
    description: "Expert in Cardiology with 15+ years of experience.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Robert Wilson",
    title: "Dental Director",
    description: "Specialist in Dental Care with 12+ years of practice.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Emily Davis",
    title: "Clinical Psychologist",
    description: "Certified psychologist helping patients with mental wellness.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Sarah Parker",
    title: "Neurologist",
    description: "Experienced neurologist focused on brain and nerve care.",
    img: "https://via.placeholder.com/150",
  },
];

const ExpertsSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let currentIndex = 0;

    const getScrollAmount = () => {
      if (window.innerWidth >= 1024) return 300; // Desktop: 4 cards visible
      if (window.innerWidth >= 640) return 300; // Tablet: 2 cards
      return slider.clientWidth * 0.9; // Mobile: scroll almost one full card
    };

    const scrollStep = () => {
      const scrollAmount = getScrollAmount();
      currentIndex++;
      slider.scrollTo({
        left: scrollAmount * currentIndex,
        behavior: "smooth",
      });

      if (currentIndex >= specialists.length) {
        setTimeout(() => {
          slider.scrollTo({ left: 0, behavior: "auto" });
          currentIndex = 0;
        }, 500);
      }
    };

    const interval = setInterval(scrollStep, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-6 bg-[#007B9C]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
        Meet Our <span className="text-white">Expert Specialists</span>
      </h2>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-6 px-4 sm:px-6 lg:px-10 py-10"
      >
        {specialists.map((specialist, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[240px] lg:w-[300px] h-[400px]
                       bg-white rounded-3xl shadow-lg p-6 text-center
                       hover:shadow-2xl hover:-translate-y-2 transition-all flex-shrink-0"
          >
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#73d6f1]">
              <img
                src={specialist.img}
                alt={specialist.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-800">{specialist.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{specialist.title}</p>
            <p className="text-gray-600 text-sm">{specialist.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertsSection;
