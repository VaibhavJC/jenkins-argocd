import React from "react";
import "./App.css";
import myVideo from "./components/video.mp4";

function App() {
  return (
    <div className="hero-container">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Over Video */}
      <div className="hero-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>

        <button className="hero-button">
          Get Started
        </button>
      </div>

    </div>
  );
}

export default App;
