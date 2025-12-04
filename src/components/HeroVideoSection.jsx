import { useRef, useState } from "react";

export default function HeroVideoSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // unmute if needed
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Video */}
      <div className="relative w-full h-[300px] sm:h-[420px] md:h-[550px]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay
          playsInline
        >
          <source
            src="/assets/videos/Ridley_Commingsoon.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        {!playing && (
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer"
            onClick={handlePlay}
          >
            <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg animate-blink">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="black">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Circular Logo + Rotating Text */}
      <div className="absolute left-1/2 top-[calc(300px-70px)] sm:top-[calc(420px-80px)] md:top-[calc(550px-100px)] -translate-x-1/2">
        <div className="relative w-44 h-44 md:w-52 md:h-52 flex items-center justify-center">
          {/* Rotating Text */}
          <div className="absolute inset-0 animate-spinSlow z-10">
            <img
              src="/assets/images/Ridley Pub & Chimes Lounge.png"
              alt="Circular Rotating Text"
              className="w-full h-full select-none pointer-events-none"
            />
          </div>

          {/* Logo */}
          <div className="relative w-42 h-42 md:h-44 md:w-44 bg-white rounded-full shadow-xl flex items-center justify-center">
            <img
              src="/assets/images/logo/Ridleypub Logo PNG-01.png"
              alt="Logo"
              className="w-20 md:w-24"
            />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Section */}
      <div className="w-full h-40 bg-white"></div>

      {/* Tailwind CSS Keyframe for blinking */}
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 0.3; }
          25%, 75% { opacity: 1; }
        }
        .animate-blink {
          animation: blink 1.2s infinite;
        }
      `}</style>
    </section>
  );
}
