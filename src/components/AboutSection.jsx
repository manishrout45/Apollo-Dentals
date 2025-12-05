import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16">

      {/* ------------------------------------------------ */}
      {/* ---------------- TOP MAIN BANNER ---------------- */}
      {/* ------------------------------------------------ */}
      <div className="max-w-7xl mx-auto px-4">
  <div className="bg-[#007B9C] rounded-3xl p-6 md:p-10 relative overflow-hidden">

    {/* Wrapper = Flex */}
    <div className="flex flex-col md:flex-row items-center justify-between">

      {/* Left Text Section */}
      <div className="w-full md:w-1/2 max-w-lg z-10 relative">
        <h2 className="fade-right text-white text-2xl md:text-4xl font-bold leading-tight">
          About Us
        </h2>

        <p className="fade-up text-white mt-3 text-sm md:text-base opacity-90">
          Apollo Dental Care Bhubaneswar is a trusted center for advanced dental treatments, 
          delivering quality care with compassion and expertise. 
          Our clinic is equipped with modern technology, experienced dentists, 
          and a patient-first approach to ensure comfortable, safe, and effective dental solutions. 
          From routine checkups to specialized procedures, we are committed to providing healthy, 
          confident smiles for every patient. 

          We also focus on preventive dentistry to help you maintain optimal oral health, 
          offering personalized treatment plans tailored to individual needs. 
          Our team continuously updates their skills with the latest dental innovations, 
          ensuring high-quality care for both children and adults. 
          At Apollo Dental Care, your smile is our priority, and we strive to make every visit a positive experience.

        </p>

        <button className="mask-btn mt-5 bg-white text-[#007B9C] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>

      {/* Right Image (50% width) */}
      <div className="w-full md:w-1/2 relative flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          src="https://img.freepik.com/premium-photo/dental-clinic_981168-3569.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_se_enriched&w=740&q=80"
          alt="doctor"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-3xl object-contain"
        />
      </div>

    </div>

  </div>
</div>


      {/* ------------------------------------------------ */}
      {/* ------------------- BOTTOM PART ---------------- */}
      {/* ------------------------------------------------ */}
      <div className="max-w-7xl mx-auto px-4 mt-20 grid lg:grid-cols-2 gap-10 items-center">

      {/* Left Image Section */}
<div className="flex justify-center relative">

  {/* Black Abstract Shape */}
  <div className="absolute -bottom-6 left-16 w-32 h-32 md:w-40 md:h-40">
    {/* Top rounded block */}
    <div className="bg-black w-20 h-20 md:w-24 md:h-24 rounded-3xl absolute top-0 left-0"></div>

    {/* Bottom rounded block */}
    <div className="bg-black w-20 h-20 md:w-24 md:h-24 rounded-3xl absolute bottom-0 right-0"></div>
  </div>

  {/* Nurse Image */}
  <img
    src="/assets/images/abt-1.png"
    alt="nurse"
    className="w-full max-w-3xl relative z-10"
  />

  {/* Phone Overlay */}
  <img
    src="/assets/images/abtphone.png"
    alt="app"
    className="absolute right-10 bottom-0 w-32 md:w-48 lg:w-48 drop-shadow-xl z-10"
  />
</div>


        {/* Right Content */}
<div>
  <h2 className="fade-right text-3xl md:text-4xl font-bold text-[#007B9C]">
    Healthy Smiles Start Here!
  </h2>

  <p className="fade-up text-gray-600 mt-4 text-sm leading-relaxed">
    Experience gentle and trusted dental care for you and your family.
  </p>

  {/* Feature List */}
  <div className="fade-up mt-6 space-y-4">
    <FeatureItem text="Advanced dental treatments with modern technology" />
    <FeatureItem text="Expert dentists for painless & comfortable procedures" />
    <FeatureItem text="Complete oral care: cleaning, fillings, root canals & more" />
    <FeatureItem text="Flexible appointments & personalized treatment plans" />
  </div>
</div>

      </div>
    </section>
  );
}

/* Feature Item Component */
function FeatureItem({ text }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl border shadow-sm bg-white hover:shadow-md transition">
      <FaCheckCircle className="text-[#007B9C] text-xl mt-1" />
      <p className="text-gray-700 text-sm md:text-base">{text}</p>
    </div>
  );
}
