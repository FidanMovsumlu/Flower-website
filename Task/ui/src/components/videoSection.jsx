import React, { useState } from "react";

function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3  text-white font-bold rounded-full shadow-lg mt-[40px] bg-[#52A584] transition cursor-pointer"
      >
        Watch Video
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
          

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
            >
              ×
            </button>

          
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="/delivery.mp4"
                title="Our Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoSection;