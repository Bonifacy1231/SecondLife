import React from "react";
import "./AboutUsText.scss";

const AboutUsText = () => {
  return (
    <div className="AboutUsText">
      <h2 className="AboutUsText__title">O nas</h2>
      <img
        className="AboutUsText__decoration"
        src="src\assets\icons\Decoration.svg"
        alt=""
      />
      <p className="AboutUsText__text">
        Nori grape silver beet broccoli kombu beet greens fava bean potato
        quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
        turnip greens parsnip.
      </p>
      <img className="AboutUsText__signature" src="src\assets\icons\Signature.svg" alt="signature" />
    </div>
  );
};

export default AboutUsText;
