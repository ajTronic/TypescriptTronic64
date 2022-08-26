import React from "react";
import SearchBar from "./SearchBar";

const HeroSection: React.FC = () => {
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
          Need a game to play with your friends? Check out one of our React projects!
          Want to see a cool effect? Search for p5.js.
        </p>
        <SearchBar
          searches={[
            "Bouncing balls",
            "Alien Fractions",
            "Typewriter Effect",
            "Tic Tac Toe",
          ]}
        />
      </div>
    </>
  );
};

export default HeroSection;
