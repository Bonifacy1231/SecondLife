import React from "react";
import HeroText from "../../components/HeroText/HeroText";
import "./Hero.scss";
import HeroImg from "../../components/HeroImg/HeroImg";
import Header from "../../components/Header/Header";

const Hero = () => {
  return (
    <div className="Hero">
      <HeroImg />
      <div className="box">
        <Header/>
        <HeroText />
      </div>
    </div>
  );
};

export default Hero;
