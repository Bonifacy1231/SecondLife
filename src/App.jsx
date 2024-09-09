import React from "react";
import "./main.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Hero from "./Layout/Hero/Hero.jsx";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          element={
            <main className="app__wraper">
              <Hero />
            </main>
          }
          path=""
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
