import React, { useRef, useEffect, useState } from "react";
import { FaUserMd, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const specialists = [
  {
    name: "Dr. Shyamli Balaram",
    title: "BDS",
    img: "/assets/images/Dr Shyamli Balaram.jpeg",
    description:
      "Fellowship in Restorative and Clinical Dentistry, Laser and Cosmetic Dentist.",
    experience: "7+ Years of Clinical Experience",
    location: "Bhubaneswar",
    details: `
      Dr Shyamli Balaram is a highly enthusiastic general and cosmetic dentist who has complete has Bachelor in Dental Surgery from Kalinga Institute of Dental sciences ( KIIT University) , Bhubaneswar in the year 2020 and has been practicing dentistry ever since.  
Dr Shyamli is a highly skilled Dental surgeon who stays on top of latest advancements in the world of dentistry. She specialises in Rotary Endodontics, Asthetic Dentistry, Laser Dentistry paediatric and Preventive Dentistry. She is an expert in explaining treatment options to patients, performing non surgical and surgical procedures while minimising patient discomfort. 
She is very passionate about educating patients and answering their questions to reduce patients concerns , anxiety and overcome their fear towards dentistry.  

      EDUCATION-
      • Bachelors in Dental Surgery 
      • Fellowship in Restorative and clinical dentistry from IOM , Hong Kong.
    `,
  },
  {
    name: "Dr. Robert Wilson",
    title: "BDS",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    description:
      "Specialist in Dental Care with advanced cosmetic dentistry expertise.",
    experience: "10+ Years of Practice",
    location: "Bhubaneswar",
    details: `
      Dr. Robert Wilson is an experienced Dental Director with 10+ years.
      • Dental implants
      • Crowns & veneers
      • Root canal treatments
    `,
  },
  {
    name: "Dr. Emily Davis",
    title: "BDS",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    description: "Certified psychologist helping patients with mental wellness.",
    experience: "10+ Years of Counseling Experience",
    location: "Bhubaneswar",
    details: `
      Dr Emily Davis is a certified clinical psychologist.
      • Anxiety & depression therapy
      • Child & adolescent counseling
      • Relationship therapy
    `,
  },
];

const ExpertsSection = () => {
  const sliderRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleMoreDetails = (doctor) => {
    setSelectedDoctor(doctor);
    setOpenModal(true);
  };

  const closeModal = () => setOpenModal(false);

  useEffect(() => {
    const slider = sliderRef.current;
    let currentIndex = 0;

    const getScrollAmount = () => {
      if (window.innerWidth >= 1024) return 350;
      if (window.innerWidth >= 640) return 320;
      return slider.clientWidth * 0.9;
    };

    const scrollStep = () => {
      const amount = getScrollAmount();
      currentIndex++;

      slider.scrollTo({
        left: amount * currentIndex,
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
    <>
      {/* SECTION */}
      <section className="relative w-full overflow-hidden py-14 bg-[#007B9C]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Meet Our <span className="text-orange-400">Expert Specialists</span>
        </h2>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex justify-center overflow-x-auto scroll-smooth no-scrollbar 
          space-x-8 px-6 sm:px-8 lg:px-12 py-10"
        >
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="w-[95%] sm:w-[260px] lg:w-[340px] bg-white 
              rounded-3xl shadow-lg p-7 text-center hover:shadow-2xl 
              hover:-translate-y-2 transition-all flex-shrink-0"
            >
              {/* Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#73d6f1]">
                <img
                  src={specialist.img}
                  alt={specialist.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {specialist.name}
              </h3>

              <p className="text-sm text-orange-600 font-medium mb-4">
                {specialist.title}
              </p>

              <div className="flex items-start space-x-3 text-left mb-3">
                <FaUserMd className="text-[#007B9C] text-lg mt-1" />
                <p className="text-gray-700 text-sm">{specialist.description}</p>
              </div>

              <div className="flex items-start space-x-3 text-left mb-3">
                <FaClock className="text-[#007B9C] text-lg mt-1" />
                <p className="text-gray-700 text-sm">{specialist.experience}</p>
              </div>

              <div className="flex items-start space-x-3 text-left mb-5">
                <FaMapMarkerAlt className="text-[#007B9C] text-lg mt-1" />
                <p className="text-gray-700 text-sm">{specialist.location}</p>
              </div>

              {/* BUTTONS — SIDE BY SIDE */}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => handleMoreDetails(specialist)}
                  className="bg-[#007B9C] text-white px-4 py-2 rounded-full 
                  text-sm font-semibold hover:bg-orange-500 transition-all"
                >
                  More Details
                </button>

                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-full 
                  text-sm font-semibold hover:bg-[#007B9C] transition-all"
                >
                  Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP MODAL */}
      {openModal && selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 
          w-full max-w-3xl max-h-[80vh] overflow-y-auto relative">

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              ✖
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

              {/* Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#73d6f1]">
                <img
                  src={selectedDoctor.img}
                  alt={selectedDoctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedDoctor.name}
                </h3>

                <p className="text-orange-600 font-medium text-sm mb-4">
                  {selectedDoctor.title}
                </p>

                <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                  {selectedDoctor.details}
                </p>

                {/* Appointment Button */}
                <button className="mt-5 bg-[#007B9C] text-white px-6 py-2 rounded-full 
                text-sm font-semibold hover:bg-orange-500 transition-all">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpertsSection;
