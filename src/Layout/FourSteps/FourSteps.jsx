import React from "react";
import FourStepsBox from "../../components/FourStepsBox/FourStepsBox";
import "./FourSteps.scss";

const FourSteps = () => {
  return (
    <>
      <div className="FourSteps">
        <div className="FourSteps__header">
          <h2 className="FourSteps__title">Wystarczą 4 proste kroki</h2>
          <img
            className="FourSteps__decoration"
            src="src\assets\icons\Decoration.svg"
            alt=""
          />
        </div>

        <FourStepsBox />
        <div className="FourSteps__box">
          <button className="FourSteps__button">ODDAJ RZECZY</button>
        </div>
      </div>
    </>
  );
};

export default FourSteps;
