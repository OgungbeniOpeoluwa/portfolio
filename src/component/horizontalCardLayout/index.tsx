'use client'

import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faGraduationCap, faProjectDiagram, faTools } from '@fortawesome/free-solid-svg-icons';
import AboutMe from "../aboutMe";
import ContactMe from "../contact";
import ExperienceAndEducation from "../experienceAndEducation";


const HorizontalCardLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const initialSections = [
    { title: "About_me", icon: faUser, color: "bg-gray-100",content:<AboutMe/> },
    { title: "Contact", icon: faBriefcase, color: "bg-gray-100",content:<ContactMe/> },
    { title: "Experience & Education", icon: faGraduationCap, color: "bg-gray-100",content:<ExperienceAndEducation/> },
    { title: "Projects", icon: faProjectDiagram, color: "bg-gray-100",content:null },
    { title: "Skills", icon: faTools, color: "bg-gray-100",content:null },
  ];

  const openSection = useCallback((index: number) => {
    setActiveSection(index);
    setTimeout(() => setIsAnimating(true), 50);
  }, []);

  const closeSection = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setActiveSection(null);
    }, 1200);
  }, []);

  return (
    <div className="relative flex flex-col items-center space-y-6 p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {initialSections.map((section, index) => (
          <div
            key={index}
            className={`group ${section.color} 
            w-36 h-36 sm:w-44 sm:h-40 flex items-center justify-center 
            transition-all duration-300 rounded-lg shadow-lg border-2 border-black text-black 
            hover:w-48 sm:hover:w-60 hover:bg-gray cursor-pointer`}
            onClick={() => openSection(index)}
          >
            <div className="flex flex-col items-center space-y-2">
              <FontAwesomeIcon icon={section.icon} size="3x" />
              <span className="text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {section.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {activeSection !== null && (
        <div
          className={`fixed top-0 right-0 bg-black bg-opacity-50 z-40 flex items-end justify-center
          transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"}`}
          onClick={closeSection}
        >
          <div
            className={`bg-white w-full max-w-3xl rounded-t-xl shadow-lg overflow-hidden
            transition-transform duration-500 ease-in-out transform 
            ${isAnimating ? "translate-y-0" : "translate-y-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {initialSections[activeSection].title}
              </h2>
              <div className="text-gray-600">
                {initialSections[activeSection].content}
              </div>
            </div>
            <div className="bg-gray-100 px-6 py-3 flex justify-end">
              <button
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                onClick={closeSection}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalCardLayout;

