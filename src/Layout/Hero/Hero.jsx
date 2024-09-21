import React from "react";
import HeroText from "../../components/HeroText/HeroText";
import "./Hero.scss";
import HeroImg from "../../components/HeroImg/HeroImg";

import Navigation from "../../components/Navigation/Navigation";

const Hero = () => {
  return (
    <div className="Hero">
      <HeroImg />
      <div className="box">
        <Navigation/>
        <HeroText />
      </div>
    </div>
  );
};

export default Hero;
