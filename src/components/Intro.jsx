import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../styles/intro.css"; // Import the CSS file with custom styles

function Intro() {
  const [animationStage, setAnimationStage] = useState("slideLeft"); // Start with "slideLeft" animation
  const navigate = useNavigate(); // React Router's navigate function

  useEffect(() => {
    // Start the slideLeft animation
    const timer = setTimeout(() => {
      setAnimationStage("done"); // Update animation stage
      navigate("/home"); // Redirect to /home after animation
    }, 1000); // Duration of slideLeft animation

    return () => clearTimeout(timer); // Clean up timer if component unmounts
  }, [navigate]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      {animationStage === "slideLeft" && (
        <div
          className="intro-slide-left absolute w-full h-full flex items-center justify-center bg-[#FF7F7F] text-[#3E2723] text-7xl font-extrabold font-poppins"
        >
          SavoryBites
        </div>
      )}
    </div>
  );
}

export default Intro;
