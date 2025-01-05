import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faVideo } from '@fortawesome/free-solid-svg-icons';
import HorizontalCardLayout from "../horizontalCardLayout";
import Modal from "./modal";


const HomePage: React.FC = () => {
  const roles = ["Software Engineer", "Backend Engineer", "Frontend Engineer"];
  const [text, setText] = useState(""); 
  const [index, setIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [speed, setSpeed] = useState(150); 

  const [showModal, setShowModal] = useState(false); // To control modal visibility
  const [fileType, setFileType] = useState<string | null>(null); // To track which file (CV or Video)

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[index];
      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setText((prev) => currentRole.slice(0, prev.length + 1));
      }
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
        setSpeed(50);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setSpeed(150);
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, speed, index, roles]);

  // Show Modal with file type
  const handleFileClick = (type: string) => {
    setFileType(type);
    setShowModal(true);
  };

  // Handle file action (view/download)
  const handleAction = (action: string) => {
    if (action === "view") {
      if (fileType === "cv") {
        // Show CV as PDF
        window.open("/path-to-cv.pdf", "_blank");
      } else if (fileType === "video") {
        // Embed video in modal
        window.open("/path-to-video.mp4", "_blank");
      }
    } else if (action === "download") {
      if (fileType === "cv") {
        // Trigger download
        window.location.href = "/path-to-cv.pdf";
      } else if (fileType === "video") {
        // Trigger download
        window.location.href = "/path-to-video.mp4";
      }
    }
    setShowModal(false); // Close modal after action
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gray-800 bg-cover min-h-screen">
      <div className="font-bold flex flex-col items-start justify-start h-full pl-10 pt-72">
        <p className="text-2xl mb-8 text-gray-300">I'm</p>
        <p className="text-gray-100 text-5xl mb-6">Ogungbeni Opeoluwa</p>
        <div>
          <p className="text-gray-100 text-3xl font-medium mb-16 flex items-center">
            {text}
            <span className="animate-blink text-gray-100">|</span>
          </p>
        </div>

        {/* Download CV and Video Buttons */}
        <div className="flex space-x-6 mb-16">
          <button
            onClick={() => handleFileClick("cv")}
            className="flex items-center text-gray-100 hover:text-gray-300 transition-colors"
            aria-label="Download CV"
          >
            <FontAwesomeIcon icon={faFileDownload} size="2x" className="mr-2" />
            <span className="text-xl">CV / Resume</span>
          </button>

          <button
            onClick={() => handleFileClick("video")}
            className="flex items-center text-gray-100 hover:text-gray-300 transition-colors"
            aria-label="Download Video"
          >
            <FontAwesomeIcon icon={faVideo} size="2x" className="mr-2" />
            <span className="text-xl">Video</span>
          </button>
        </div>

        {/* Horizontal Card Layout */}
        <div>
          <HorizontalCardLayout />
        </div>
      </div>

      {/* Modal for View or Download Action */}
      <Modal
        showModal={showModal}
        fileType={fileType}
        handleAction={handleAction}
        closeModal={closeModal}
      />
    </div>
  );
};

export default HomePage;
