import React from "react";
import SearchBar from "./SearchBar";
import projects from "../projects.json";

const HeroSection: React.FC = () => {
  const projectNames = projects.map((p) => p.name);

  return (
    <>
      <div className="hero-container">
        <h1>
          <span className="line">
            <a href="http://tronic64.com" className="curved-underline">
              This
            </a>
            is
          </span>
          <span>Tronic64</span>
        </h1>
        <h4 className="subheading">
          The only online website for well, everything.
        </h4>
        <p>
          Need a game to play with your friends? Check out one of our React
          projects! Want to see a cool effect? Search for p5.js.
        </p>
        <SearchBar searches={projectNames} />
      </div>
    </>
  );
};

export default HeroSection;
