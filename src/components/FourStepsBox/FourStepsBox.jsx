import React from "react";
import "./FourStepsBox.scss";
const FourStepsBox = () => {

  return (
    <div className="FourStepsBox">
      <div className="FourStepsBox__single">
        <img className="FourStepsBox__img" src="src\assets\icons\Icon-1.svg" alt="" />
        <p className="FourStepsBox__title">Wybierz rzeczy</p>
        <span className="FourStepsBox__line"></span>
        <p className="FourStepsBox__text">ubrania, zabawki sprzęt i inne</p>
      </div>
      <div className="FourStepsBox__single">
        <img className="FourStepsBox__img" src="src\assets\icons\Icon-2.svg" alt="" />
        <p className="FourStepsBox__title">Spakuj je</p>
        <span className="FourStepsBox__line"></span>
        <p className="FourStepsBox__text">skorzystaj z worków na śmieci</p>
      </div>
      <div className="FourStepsBox__single">
        <img className="FourStepsBox__img" src="src\assets\icons\Icon-3.svg" alt="" />
        <p className="FourStepsBox__title">Zdecyduj komu chcesz pomóc</p>
        <span className="FourStepsBox__line"></span>
        <p className="FourStepsBox__text">wybierz zaufane miejsce</p>
      </div>
      <div className="FourStepsBox__single">
        <img className="FourStepsBox__img" src="src\assets\icons\Icon-4.svg" alt="" />
        <p className="FourStepsBox__title">Zamów kuriera</p>
        <span className="FourStepsBox__line"></span>
        <p className="FourStepsBox__text">kurier przyjedzie w dogodnym terminie</p>
      </div>
    </div>
  );
};

export default FourStepsBox;
