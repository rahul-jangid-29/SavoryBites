import React, { useEffect, useState } from "react";
import "../styles/intro.css"; // Import the CSS file with custom styles
import HomePage from "./HomePage";

function Intro() {
  const [animationStage, setAnimationStage] = useState("slideLeft"); // Start with "slideLeft" animation

  useEffect(() => {
    // Wait for 1 second before starting the first animation
    const timer = setTimeout(() => {
      setAnimationStage("slideLeft"); // Trigger slideLeft animation
    }, 1000); // 1 second delay before starting the animation

    return () => clearTimeout(timer); // Clean up timer if component unmounts
  }, []);

  useEffect(() => {
    if (animationStage === "slideLeft") {
      setTimeout(() => setAnimationStage("slideUp"), 1000); // Trigger slideUp after 1 second
    }
    if (animationStage === "slideUp") {
      setTimeout(() => setAnimationStage("done"), 1000); // Transition to home page after slideUp
    }
  }, [animationStage]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      {animationStage === "slideLeft" && (
        <div
          className="intro-slide-left absolute w-full h-full flex items-center justify-center bg-[#FF7F7F] text-[#3E2723] text-7xl font-extrabold font-poppins"
        >
          SavoryBites
        </div>
      )}

      {animationStage === "slideUp" && (
        <div
          className="intro-slide-up absolute w-full h-full flex items-center justify-center bg-[#FFB6C1] text-[#B0BEC5] text-7xl font-extrabold font-poppins"
        >
          SavoryBites
        </div>
      )}

      {animationStage === "done" && (
        <HomePage />
      )}
    </div>
  );
}

export default Intro;
