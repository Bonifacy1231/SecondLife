import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <Navigation />
      <div className="login__container">
        <div className="login__box">
          <h2 className="login__box__title second-title">Zaloguj się</h2>
          <img
            className="login__box__decoration"
            src="src\assets\icons\Decoration.svg"
            alt=""
          />
          <div className="login__form">
            <label htmlFor="">Email</label>

            <input type="text" />

            <label htmlFor="">Hasło</label>

            <input type="password" />
          </div>
        </div>
        <div>
          <button>Załóż konto</button>
          <button>Zaloguj się</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
