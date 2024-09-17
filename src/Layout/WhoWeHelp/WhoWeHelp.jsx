import React from "react";
import "./WhoWeHelp.scss";

const WhoWeHelp = () => {
  return (
    <div className="WhoWeHelp">
      <div className="WhoWeHelp__container">
        <h2 className="WhoWeHelp__title">Komu pomagamy?</h2>
        <img
          className="WhoWeHelp__decoration"
          src="src\assets\icons\Decoration.svg"
          alt=""
        />
        <div className="WhoWeHelp__menu__btn">
          <button>Fundacjom</button>
          <button>Organizacjom pozarządowym</button>
          <button>Lokalnym zbiórkom</button>
        </div>
        <p className="WhoWeHelp__info">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        <ul className="WhoWeHelp__menu">
          <li className="WhoWeHelp__item">
            <div className="WhoWeHelp__single">
              <p className="WhoWeHelp__single__title">
                Fundacja “Dbam o Zdrowie”
              </p>
              <p className="WhoWeHelp__single__text">
                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                życiowej.
              </p>
            </div>
            <p className="WhoWeHelp__item__text">
              ubrania, jedzenie, sprzęt AGD, meble, zabawki
            </p>
          </li>
          <li className="WhoWeHelp__item">
            <div className="WhoWeHelp__single">
              <p className="WhoWeHelp__single__title">
                Fundacja “Dbam o Zdrowie”
              </p>
              <p className="WhoWeHelp__single__text">
                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                życiowej.
              </p>
            </div>
            <p className="WhoWeHelp__item__text">
              ubrania, jedzenie, sprzęt AGD, meble, zabawki
            </p>
          </li>
          <li className="WhoWeHelp__item">
            <div className="WhoWeHelp__single">
              <p className="WhoWeHelp__single__title">
                Fundacja “Dbam o Zdrowie”
              </p>
              <p className="WhoWeHelp__single__text">
                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                życiowej.
              </p>
            </div>
            <p className="WhoWeHelp__item__text">
              ubrania, jedzenie, sprzęt AGD, meble, zabawki
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhoWeHelp;
