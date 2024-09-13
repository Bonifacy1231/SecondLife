import React from "react";

const WhoWeHelp = () => {
  return (
    <div className="WhoWeHelp__container">
      <h2>Komu pomagamy?</h2>
      <img src="src\assets\icons\Decoration.svg" alt="" />
      <div>
        <button>Fundacjom</button>
        <button>Organizacjom pozarządowym</button>
        <button>Lokalnym zbiórkom</button>
      </div>
      <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
      <ul>
        <li>
            <p>Fundacja “Dbam o Zdrowie”</p>
            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
        </li>
      </ul>
    </div>
  );
};

export default WhoWeHelp;
