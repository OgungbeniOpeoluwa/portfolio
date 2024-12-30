import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Update cursor position on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add hover effect for clickable elements
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove);

    document.querySelectorAll("a, button, .cursor-pointer").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      document.querySelectorAll("a, button, .cursor-pointer").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: isHovering ? "50px" : "30px", // Larger on hover
          height: isHovering ? "50px" : "30px", // Larger on hover
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Light gray, semi-transparent
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          transition: "width 0.2s ease, height 0.2s ease",
          zIndex: 9999,
        }}
      />
      {/* Inner Circle */}
      {!isHovering && (
        <div
          style={{
            position: "fixed",
            top: position.y,
            left: position.x,
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "white", // Solid color
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 10000,
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
