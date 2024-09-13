import React from "react";
import "./AboutUs.scss";
import AboutUsText from "../../components/AboutUsText/AboutUsText";
import AboutUsImg from "../../components/AboutUsImg/AboutUsImg";


const AboutUs = () => {
  return (
    <div className="AboutUs__container">
      <AboutUsText />
      <AboutUsImg />
    </div>
  );
};

export default AboutUs;
