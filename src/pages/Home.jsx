import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
import ScrollPromo from "../components/ScrollPromo";
import useScrollFade from "../hooks/useScrollFade";
import ExpertsSection from "../components/ExpertsSection";

const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <ServiceSection className="fade-left" />
      <AboutSection className="fade-right" />
      <ScrollPromo className="zoom-in" />
      <section className=" py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
      {/* Grid Container: Two columns on large screens */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="w-full">
          <img
            src="/assets/images/teeth.jpg"
            alt="clinic"
            className="rounded-3xl w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            About Our Center <span className="text-[#007B9C] font-bold">Apollo Dental Care</span>
          </h2>

          {/* Description Paragraph */}
          {/* Description Paragraph */}
            <p className="fade-up text-gray-600 mt-3 leading-relaxed text-sm md:text-base">
              Apollo Dental Care is one of the region’s leading dental clinics, offering 
              trustworthy, professional, and patient-focused dental services across all 
              major specialties.
              <br /><br />
              We are dedicated to providing world-class dental care through advanced 
              technology, modern facilities, and highly skilled dental experts. Our goal 
              is to ensure healthy, confident smiles for individuals and families in a 
              comfortable and caring environment.
            </p>

          {/* Stats Boxes */}
          <div className="fade-up grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

            {/* Box 1 */}
            <div className="bg-[#007B9C] text-white rounded-xl p-6 text-center shadow-md 
                            hover:shadow-xl hover:-translate-y-1 transition">
              <h3 className="text-3xl font-bold">600</h3>
              <p className="text-sm mt-1 opacity-90">
                Years of experience<br />of our medical staff
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-md border
                            hover:shadow-xl hover:-translate-y-1 transition">
              <h3 className="text-3xl font-bold text-gray-800">30</h3>
              <p className="text-sm mt-1 text-gray-500">
                Years our doctors have<br />been serving patients
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-md border
                            hover:shadow-xl hover:-translate-y-1 transition">
              <h3 className="text-3xl font-bold text-gray-800">60</h3>
              <p className="text-sm mt-1 text-gray-500">
                Certified specialists in<br />psychology & psychiatry
              </p>
            </div>

          </div>
        </div>
      </div>
      </div>
    </section>

    <ExpertsSection className="zoom-in" />
    <section className="bg-white py-16 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* ----------------------------------- */}
    {/* LEFT SIDE : HEADING + DESCRIPTION  */}
    {/* ----------------------------------- */}
    <div className="text-[#00566e] space-y-6">

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-5xl font-bold leading-snug">
        Book Your Appointment <br />
        With Apollo Dentals
      </h2>

      {/* Sub Text */}
      <p className="fade-up text-base sm:text-lg font-light max-w-md text-gray-700">
        Get personalized dental care from our experienced specialists.  
        Book your appointment today for a healthy, confident smile.
      </p>

      {/* Bullet Points */}
      <ul className="fade-up space-y-3 text-sm sm:text-base text-gray-700">
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#007B9C] rounded-full"></span>
          Certified & Experienced Specialists
        </li>

        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#007B9C] rounded-full"></span>
          Latest Dental Technology & Equipment
        </li>

        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#007B9C] rounded-full"></span>
          Safe, Pain-Free & Hygienic Treatment
        </li>
      </ul>
    </div>

    {/* ------------------------ */}
    {/* RIGHT SIDE : FORM CARD   */}
    {/* ------------------------ */}
    <div className="fade-right bg-white p-8 rounded-3xl shadow-xl border">

      {/* Form Heading */}
      <h3 className="text-2xl font-bold text-orange-500 mb-6 text-center">
        Schedule Your Visit
      </h3>

      {/* Appointment Form */}
      <form className="space-y-5">

        {/* Full Name Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 
                      focus:outline-none focus:ring-2 focus:ring-[#007B9C]"
          />
        </div>

        {/* Phone Number Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            type="text"
            placeholder="Enter mobile number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 
                      focus:outline-none focus:ring-2 focus:ring-[#007B9C]"
          />
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Select Service</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-3 
                      focus:outline-none focus:ring-2 focus:ring-[#007B9C]"
          >
            <option>Dental Consultation</option>
            <option>Teeth Cleaning</option>
            <option>Root Canal Treatment</option>
            <option>Dental Implants</option>
            <option>Braces / Aligners</option>
            <option>Smile Designing</option>
          </select>
        </div>

        {/* Date Picker */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preferred Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 
                      focus:outline-none focus:ring-2 focus:ring-[#007B9C]"
          />
        </div>

        {/* Submit Button */}
        <button
          className="mask-btn w-full bg-[#007B9C] text-white py-3 rounded-lg font-semibold 
                    tracking-wide shadow-md "
        >
          BOOK NOW
        </button>

      </form>
    </div>


  </div>
</section>



    </>
  );
};

export default Home;
