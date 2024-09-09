import React from "react";
import Header from "../Header/Header";
import HeroButtons from "../HeroButtons/HeroButtons";
import "./HeroText.scss";

const HeroText = () => {
  return (
    <div className="Hero__text">
      <Header />

      <h1 className="Hero__text__title">
        Zacznij pomagać!
        <br />
        Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <img
        className="Hero__text__decoration"
        src="src\assets\icons\Decoration.svg"
        alt=""
      />

      <HeroButtons />
    </div>
  );
};

export default HeroText;
