import React, { useEffect } from "react";

const ScrollPromo = () => {
  useEffect(() => {
    const section = document.getElementById("scrollSection");
    const textBox = document.getElementById("scrollText");

    const handleScroll = () => {
      if (!section || !textBox) return;

      let rect = section.getBoundingClientRect();
      let sectionHeight = rect.height;

      // Activate only when section is in viewport
      if (rect.top <= 0 && Math.abs(rect.top) <= sectionHeight) {
        let progress = Math.abs(rect.top) / sectionHeight;

        // Move text upward based on scroll
        textBox.style.transform = `translateY(-${progress * 50}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<section id="scrollSection" className="relative h-[80vh] overflow-hidden">

  {/* Fixed Background Layer */}
  <div
    className="fixed inset-0 bg-center bg-cover -z-10"
    style={{
      backgroundImage: "url('https://img.freepik.com/premium-photo/dentist-team-oral-care-with-patient-healthcare-wellness-teeth-whitening-practice-woman-dental-professional-ppe-with-tools-consultation-cleaning-filling-chair_590464-401383.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_se_enriched&w=740&q=80')"
    }}
  ></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="relative h-full flex items-center justify-center overflow-hidden">

        {/* Moving Text */}
        <div id="scrollText" className="space-y-4 sm:space-y-6 text-center">

          <h2 className="main-heading text-white text-3xl sm:text-5xl font-bold leading-snug sm:leading-tight">
            Smile Brighter <br /> This Month at Apollo Dentals!
          </h2>

          <p className="text-white text-sm sm:text-lg font-semibold tracking-wide max-w-2xl mx-auto">
            Get a **Comprehensive Dental Checkup** and 15% OFF on teeth cleaning this month. Book your appointment today!
          </p>

          <button
            className="shine-btn mt-4 sm:mt-6 bg-white text-gray-900 font-semibold 
                      px-4 sm:px-6 py-2 sm:py-3 shadow-sm hover:bg-gray-200 transition"
          >
            BOOK APPOINTMENT
          </button>


        </div>
      </div>
    </section>
  );
};

export default ScrollPromo;
