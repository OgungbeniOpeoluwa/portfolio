import { useState, useEffect } from "react";
import HorizontalCardLayout from "../horizontalCardLayout";
import CustomCursor from "../cursor";

const HomePage = () => {
  const roles = ["Software Engineer", "Backend Engineer", "Frontend Engineer"];
  const [text, setText] = useState(""); 
  const [index, setIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [speed, setSpeed] = useState(150); 

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
        setIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to next role
        setSpeed(150);
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, speed, index, roles]);

  return (
    <div className="bg-HomePage bg-cover h-screen">
      <div className="font-bold flex flex-col items-start justify-start h-full pl-10 pt-72">
        <p className="text-2xl mb-8 text-gray-300">I'm</p>
        <p className=" text-gray-100 text-5xl mb-6">Ogungbeni Opeoluwa</p>
        <div>
          <p className=" text-gray-100 text-3xl font-medium mb-16">
            {text}
            <span className="animate-blink">|</span>
          </p>
        </div>
        <div>
        <HorizontalCardLayout/>
        </div>
        <div>
        <CustomCursor/>
        </div>
      </div>

    </div>
  );
};



export default HomePage;
