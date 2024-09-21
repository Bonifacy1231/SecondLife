import React from "react";
import "./NotLoggedOn.scss";
import { useNavigate } from "react-router-dom";

const NavigationLoggedOut = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="LoggedOut">
      <button onClick={goToLogin} className="LoggedOut__btn">
        Zaloguj się
      </button>
      <button onClick={goToRegister} className="LoggedOut__btn">
        Załóż konto
      </button>
    </div>
  );
};

export default NavigationLoggedOut;
