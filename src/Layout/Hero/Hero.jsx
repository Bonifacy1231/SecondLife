import React from "react";
import HeroText from "../../components/HeroText/HeroText";
import "./Hero.scss";
import HeroImg from "../../components/HeroImg/HeroImg";

const Hero = () => {
  return (
    <div className="Hero">
      <HeroImg />
      <HeroText />
    </div>
  );
};

export default Hero;
