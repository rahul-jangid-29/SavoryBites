import React, { useEffect, useState } from "react";
import "../styles/intro.css"; // Import the CSS file with custom styles
import HomePage from "./HomePage";

function Intro() {
  const [animationStage, setAnimationStage] = useState("slideLeft"); // Start with "slideLeft" animation

  useEffect(() => {
    // Start the slideLeft animation
    const timer = setTimeout(() => {
      setAnimationStage("done"); // Transition directly to the homepage after slideLeft
    }, 1000); // Duration of slideLeft animation

    return () => clearTimeout(timer); // Clean up timer if component unmounts
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      {animationStage === "slideLeft" && (
        <div
          className="intro-slide-left absolute w-full h-full flex items-center justify-center bg-[#FF7F7F] text-[#3E2723] text-7xl font-extrabold font-poppins"
        >
          SavoryBites
        </div>
      )}

      {animationStage === "done" && <HomePage />}
    </div>
  );
}

export default Intro;
