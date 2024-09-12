import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Hero from "./Layout/Hero/Hero.jsx";
import ThreeColumnsSections from "./components/ThreeColumnsSections/ThreeColumnsSections.jsx";

import "./main.scss";
import "./scss/_mainContainer.scss";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          element={
            <main className="app__wraper">
              <Hero />
              <ThreeColumnsSections />
            </main>
          }
          path=""
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
