// React
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import ThreeColumnsSections from "./components/ThreeColumnsSections/ThreeColumnsSections.jsx";
import Hero from "./Layout/Hero/Hero.jsx";
import FourSteps from "./Layout/FourSteps/FourSteps.jsx";
import AboutUs from "./Layout/AboutUs/AboutUs.jsx";
import WhoWeHelp from "./Layout/WhoWeHelp/WhoWeHelp.jsx";
import ContactUs from "./Layout/ContactUs/ContactUs.jsx";
// Style
import "./main.scss";
import Login from "./Layout/Login/Login.jsx";
import Register from "./Layout/Register/Register.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
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
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
