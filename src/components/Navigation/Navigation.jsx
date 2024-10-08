import React from "react";
import "./Navigation.scss";
import NavigationLoggedOut from "../NotLoggedOn/NotLoggedOn";
const Navigation = () => {
  return (
    <div className="Navigation">
      <NavigationLoggedOut />
      <ul className="Navigation__menu">
        <li className="Navigation__item">
          <a className="Navigation__link" href="">
            Start
          </a>
        </li>
        <li className="Navigation__item">
          <a className="Navigation__link" href="">
            O co Chodzi?
          </a>
        </li>
        <li className="Navigation__item">
          <a className="Navigation__link" href="">
            O nas
          </a>
        </li>
        <li className="Navigation__item">
          <a className="Navigation__link" href="">
            Fundacja i organizacja
          </a>
        </li>
        <li className="Navigation__item">
          <a className="Navigation__link" href="">
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
