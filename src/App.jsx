import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Hero from "./Layout/Hero/Hero.jsx";
import ThreeColumnsSections from "./components/ThreeColumnsSections/ThreeColumnsSections.jsx";

import "./main.scss";
import "./scss/_mainContainer.scss";
import FourSteps from "./Layout/FourSteps/FourSteps.jsx";
import AboutUs from "./Layout/AboutUs/AboutUs.jsx";
import WhoWeHelp from "./Layout/WhoWeHelp/WhoWeHelp.jsx";
import ContactUs from "./Layout/ContactUs/ContactUs.jsx";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          element={
            <main className="app__wraper">
              <Hero /> {/* Naprawić Hero !!! */}
              <ThreeColumnsSections />
              <FourSteps />
              <AboutUs />
              <WhoWeHelp />
              <ContactUs />
            </main>
          }
          path=""
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
