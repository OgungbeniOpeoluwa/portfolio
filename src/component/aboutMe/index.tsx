'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const AboutMe: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  const text = "I am a backend-focused software engineer skilled in Go, Java, Python, and JavaScript. I specialize in building scalable applications using frameworks like Gin, Django, and Spring Boot, alongside robust database designs with PostgreSQL and MongoDB. With experience in AWS S3 deployments and agile development, I'm committed to delivering reliable solutions and enhancing user experiences.";

  const words = text.split(' ');

  const speak = useCallback(() => {
    if (!utterance) {
      const newUtterance = new SpeechSynthesisUtterance(text);
      newUtterance.rate = 0.9;
      newUtterance.onboundary = (event) => {
        if (event.name === 'word') {
          setHighlightedIndex(Math.floor(event.charIndex / 5));
        }
      };
      newUtterance.onend = () => {
        setIsPlaying(false);
        setHighlightedIndex(-1);
      };
      setUtterance(newUtterance);
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      if (utterance) window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  }, [isPlaying, text, utterance]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-full bg-gray-900 text-white">
      <div className="w-full md:w-1/2 p-6 flex flex-col items-center">
        <img
          src="/placeholder.svg?height=192&width=192"
          alt="Ogungbeni Opeoluwa"
          className="w-48 h-48 rounded-full mb-6 shadow-lg"
        />
        <p className="text-2xl font-bold mb-2">Ogungbeni Opeoluwa</p>
        <p className="text-gray-400 text-center">Software Engineer</p>
      </div>
      <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
        <div className="flex items-center mb-4">
          <button
            onClick={speak}
            className={`px-4 py-2 rounded focus:outline-none transition-colors duration-200 flex items-center ${
              isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
            aria-label={isPlaying ? "Pause reading" : "Start reading"}
          >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="mr-2" />
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
        <div className="text-xl leading-relaxed">
          {words.map((word, index) => (
            <span
              key={index}
              className={`${
                index === highlightedIndex ? "text-blue-300 font-bold" : ""
              } transition-colors duration-200`}
            >
              {word}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

