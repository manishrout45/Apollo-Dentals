import { FaTooth, FaTeeth, FaChild, FaTeethOpen } from "react-icons/fa";

export default function ServiceSection() {
  return (
    <section className="w-full bg-white py-14">

      {/* ---------------------------------- */}
      {/* ----------- TOP SERVICE BOX ------- */}
      {/* ---------------------------------- */}
      <div className="max-w-7xl mx-auto px-4">

        {/* Blue Header Box */}
        <div className="bg-[#007B9C] text-white rounded-2xl p-6 md:p-10 relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Dental Services for Healthy Smiles
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Explore our specialized treatments designed to give you the best oral
                health and a confident smile.
              </p>
            </div>

            <button className="bg-white text-[#007B9C] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
              Book an Appointment
            </button>
          </div>

          {/* White Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

  {/* Card 1 - General Dentistry */}
  <div className="bg-white text-gray-700 rounded-xl shadow-md p-5">
    <FaTooth className="text-[#007B9C] text-3xl mb-3" />
    <h3 className="font-bold text-lg">General Dentistry</h3>
    <p className="text-sm mt-1">
      Complete oral checkups, cleaning, fillings & preventive care.
    </p>
  </div>

  {/* Card 2 - Cosmetic Dentistry */}
  <div className="bg-white text-gray-700 rounded-xl shadow-md p-5">
    <FaTeeth className="text-[#007B9C] text-3xl mb-3" />
    <h3 className="font-bold text-lg">Cosmetic Dentistry</h3>
    <p className="text-sm mt-1">
      Teeth whitening, veneers & full smile makeover treatments.
    </p>
  </div>

  {/* Card 3 - Pediatric Dentistry */}
  <div className="bg-white text-gray-700 rounded-xl shadow-md p-5">
    <FaChild className="text-[#007B9C] text-3xl mb-3" />
    <h3 className="font-bold text-lg">Pediatric Dentistry</h3>
    <p className="text-sm mt-1">
      Gentle dental care designed specially for children.
    </p>
  </div>

  {/* Card 4 - Dental Implants */}
  <div className="bg-white text-gray-700 rounded-xl shadow-md p-5">
    <FaTeethOpen className="text-[#007B9C] text-3xl mb-3" />
    <h3 className="font-bold text-lg">Dental Implants</h3>
    <p className="text-sm mt-1">
      Permanent, natural-looking tooth replacement options.
    </p>
  </div>

</div>

        </div>
      </div>

      {/* ---------------------------------- */}
      {/* -------- VISION & MISSION -------- */}
      {/* ---------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 mt-20 grid lg:grid-cols-2 gap-10 items-center">

        {/* Doctor Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/dentist-making-professional-teeth-cleaning-withb-cotton-female-young-patient-dental-office_496169-907.jpg"
              alt="Dentist"
              className="w-full max-w-sm md:max-w-md"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl px-6 py-3 flex items-center gap-3">

              {/* FontAwesome Icon */}
              <i className="fa-solid fa-tooth text-[#007B9C] text-3xl"></i>

              <div>
                <p className="text-sm font-semibold">Meet Our Dentists</p>
                <p className="text-xs text-gray-500">Experienced & Compassionate</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Our Vision & Mission</h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            At Apollo Dental Care, our mission is to provide exceptional dental care 
            with precision, compassion, and the latest technology. We aim to make 
            every patient feel comfortable and confident throughout their treatment.
            <br /><br />
            Our vision is to promote lifelong oral health by offering world-class 
            dental services and creating bright, confident smiles for individuals 
            and families.
          </p>

          {/* Bullet Points */}
          <ul className="mt-5 space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="bg-[#007B9C] w-3 h-3 rounded-full"></span>
              Advanced & Modern Dental Equipment
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-[#007B9C] w-3 h-3 rounded-full"></span>
              Personalized Treatment Plans for Every Patient
            </li>
          </ul>

          <button className="mt-6 bg-[#007B9C] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#046b85] transition">
            Learn more
          </button>
        </div>
      </div>

    </section>
  );
}
