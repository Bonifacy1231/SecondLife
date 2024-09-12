import React from "react";
import "./NavigationLoggedOut.scss";
const NavigationLoggedOut = () => {
  return (
    <div className="LoggedOut">
      <button className="LoggedOut__btn">Zaloguj się</button>
      <button className="LoggedOut__btn">Załóż konto</button>
    </div>
  );
};

export default NavigationLoggedOut;
