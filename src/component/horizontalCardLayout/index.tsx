// import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const HorizontalCardLayout = () => {
//   const sections = [
//     { title: <i className="fa-solid fa-user" style={{ color: "black" }}></i>, color: " bg-stone-400" },
//     { title: "Portfolio", color: " bg-white" },
//     { title: "Experience & Education", color: " bg-white" },
//     { title: "Projects", color: " bg-white" },
//     { title: "Skills", color: " bg-white" },
//   ];

//   return (
//     <div className="flex  justify-start items-center  ">
//       {sections.map((section, index) => (
//         <div
//           key={index}
//           style={{ top: `${index * 50}px` }} // Adjust spacing between boxes
//           className={`absolute ${section.color} w-60 h-24 flex items-center justify-center 
//             rounded-lg shadow-lg text-black font-bold text-xl border-2 border-red-800 
//              hover:translate-x-[-150px]`}
//         >
//           {section.title}
//         </div>  
//       ))}
//     </div>
//   );
// };

// export default HorizontalCardLayout;

// import React, { useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const HorizontalCardLayout = () => {
//   const initialSections = [
//     { title: <i className="fa-solid fa-user fa-beat-fade fa-3x" style={{ color: "black" }}></i>, color: "bg-blue-500" },
//     { title: "Portfolio", color: "bg-blue-500" },
//     { title: "Experience & Education", color: "bg-blue-500" },
//     { title: "Projects", color: "bg-blue-500" },
//     { title: "Skills", color: "bg-blue-500" },
//   ];

//   const [sections, setSections] = useState(initialSections);
//   const [clickedIndex, setClickedIndex] = useState<number | null>(null);

//   const handleCardClick = (index: number) => {
//     // If the same card is clicked, close it by resetting clickedIndex
//     if (clickedIndex === index) {
//       setClickedIndex(null);
//     } else {
//       setClickedIndex(index); // Otherwise, expose the clicked card
//       // Shuffle the clicked card to the front
//       const shuffledSections = [
//         sections[index], // Bring clicked card to the front
//         ...sections.filter((_, i) => i !== index), // Push other cards to the back
//       ];
//       setSections(shuffledSections);
//     }
//   };

//   return (
//     <div className="relative w-full h-48 flex justify-center items-center">
//       {sections.map((section, index) => (
//         <div
//           key={index}
//           style={{
//             left: clickedIndex === null ? `${index * 5}px` : `${index * 30}px`, // Initially tightly stacked, spread out on click
//             zIndex: clickedIndex === index ? 10 : index, // Bring clicked card to the front
//             transform: `scale(${clickedIndex === index ? 1.2 : 1})`, // Expand clicked card
//           }}
//           className={`${section.color} w-40 h-44 ${
//             clickedIndex === index ? "w-60 h-44" : ""
//           } absolute transition-all duration-500 rounded-lg shadow-lg border-2 border-black text-white`}
//           onClick={() => handleCardClick(index)}
//         >
//           {section.title}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HorizontalCardLayout;


import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HorizontalCardLayout = () => {
  const initialSections = [
    { title: "About_me", icon: <i className="fa-solid fa-user fa-3x" style={{ color: "black" }}></i>, color: "bg-gradient-to-r from-gray-500 via-white to-gray-900" },
    { title: "Service", icon: <i className="fa-solid fa-briefcase fa-3x" style={{ color: "black" }}></i>, color: "bg-gradient-to-r from-gray-500 via-white to-gray-900" },
    { title: "Experience & Education", icon: <i className="fa-solid fa-graduation-cap fa-3x" style={{ color: "black" }}></i>, color: "bg-gradient-to-r from-gray-500 via-white to-gray-900" },
    { title: "Projects", icon: <i className="fa-solid fa-project-diagram fa-3x" style={{ color: "black" }}></i>, color: "bg-gradient-to-r from-gray-500 via-white to-gray-900" },
    { title: "Skills", icon: <i className="fa-solid fa-tools fa-3x" style={{ color: "black" }}></i>, color: "bg-gradient-to-r from-gray-500 via-white to-gray-900" },
  ];
  
  return (
    <div className="relative flex justify-center items-center space-x-2 top-20 left-0">
      {initialSections.map((section, index) => (
        <div
          key={index}
          className={`group ${section.color} 
          w-44 h-40 flex items-center justify-center 
          transition-all duration-300 rounded-lg shadow-lg border-2 border-black text-black hover:w-60 hover:bg-gradient-to-r hover:from-gray-600 hover:via-white hover:to-gray-700"`}
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
  );
};

export default HorizontalCardLayout;
