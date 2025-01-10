import { useState } from "react";

const ExperienceAndEducation = () => {
  const [activeTab, setActiveTab] = useState("Education"); // Default tab is Education

  return (
    <div className="max-w-md mx-auto">
    {/* Toggle Button */}
    <div className="relative flex items-center justify-center bg-gray-200 rounded-3xl p-1  space-x-6">
      <div
        className={`absolute h-8 w-24 bg-blue-500 rounded-3xl justify-center  ${
          activeTab === "Education" ? "-translate-x-full" : "translate-x-full" 
        }`}
      ></div>
      <button
        onClick={() => setActiveTab("Experience")}
        className={`z-10 flex-1 text-center py-1 px-2 ${
          activeTab === "Experience" ? "text-black" : "text-gray-700"
        }`}
      >
        Experience
      </button>
      <button
        onClick={() => setActiveTab("Education")}
        className={`z-10 flex-1 text-center py-1 pl-10 ${
          activeTab === "Education" ? "text-black" : "text-gray-700"
        }`}
      >
        Education
      </button>
    </div>

    {/* Content Area */}
    <div className="mt-6">
      {activeTab === "Experience" && (
        <div>
          <div className="mb-4">
            <p className="font-bold">Eloylabs</p>
            <p>May 2024</p>
            <p>Go Backend Engineer</p>
          </div>
          <div>
            <p className="font-bold">Semicolon Africa</p>
            <p>July</p>
            <p>Software Engineer</p>
          </div>
        </div>
      )}

      {activeTab === "Education" && (
        <div>
          <div className="mb-4">
            <p className="font-bold">University of Technology</p>
            <p>Graduation: 2023</p>
            <p>Bachelor of Science in Computer Science</p>
          </div>
          <div>
            <p className="font-bold">High School XYZ</p>
            <p>Graduation: 2019</p>
            <p>High School Diploma</p>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};


export default ExperienceAndEducation


