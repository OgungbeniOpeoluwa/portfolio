import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutMe from "../aboutMe";

const HorizontalCardLayout = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const initialSections = [
    { title: "About_me", icon: <i className="fa-solid fa-user fa-3x" style={{ color: "black" }}></i>, color: "bg-gradient-to-r from-gray-300 via-white to-gray-900" },
    { title: "Service", icon: <i className="fa-solid fa-briefcase fa-3x" style={{ color: "black" }}></i>, color: "bg-gradient-to-r from-gray-500 via-white to-gray-900" },
    { title: "Experience & Education", icon: <i className="fa-solid fa-graduation-cap fa-3x" style={{ color: "black" }}></i>, color: "bg-gradient-to-r from-gray-500 via-white to-gray-900" },
    { title: "Projects", icon: <i className="fa-solid fa-project-diagram fa-3x" style={{ color: "black" }}></i>, color: "bg-gradient-to-r from-gray-500 via-white to-gray-900" },
    { title: "Skills", icon: <i className="fa-solid fa-tools fa-3x" style={{ color: "black" }}></i>, color: "bg-gradient-to-r from-gray-500 via-white to-gray-900" },
  ];

  const openSection = (index: number) => {
    setActiveSection(index);
    setTimeout(() => setIsAnimating(true), 50); // Trigger animation after a short delay
  };

  const closeSection = () => {
    setIsAnimating(false);
    setTimeout(() => setActiveSection(null), 1200); // Delay unmounting content until animation completes
  };

  return (
    <div className="relative flex flex-col items-center space-y-6 top-20 left-0">
      {/* Horizontal buttons */}
      <div className="flex space-x-2">
        {initialSections.map((section, index) => (
          <div
            key={index}
            className={`group ${section.color} 
            w-44 h-40 flex items-center justify-center 
            transition-all duration-300 rounded-lg shadow-lg border-2 border-black text-black 
            hover:w-60 hover:bg-gradient-to-r hover:from-gray-600 hover:via-white hover:to-gray-700 cursor-pointer`}
            onClick={() => openSection(index)}
          >
            <div className="flex items-center space-x-2">
              {section.icon}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">
                {section.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Sliding modal */}
      {activeSection !== null && (
        <div
          className={`fixed bottom-0 left-0 w-full h-1/2 bg-white z-50 flex flex-col items-center justify-center 
          p-8 transition-transform duration-[1200ms] ease-in transform ${
            isAnimating ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="relative w-full text-center">
            {/* Background bold title */}
            <h2 className="text-9xl font-semibold text-gray-300 absolute top-0 left-0 w-full text-center opacity-30 transform translate-y-8">
              {initialSections[activeSection].title}
            </h2>
            {/* Foreground title */}
            <h2 className="text-4xl font-bold text-black relative z-10">
              {initialSections[activeSection].title}
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6 text-center">
              <AboutMe/>
            {/* Welcome to the {initialSections[activeSection].title} page! Here are some details. */}
          </p>
          <button
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 z-20"
            onClick={closeSection}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default HorizontalCardLayout;
