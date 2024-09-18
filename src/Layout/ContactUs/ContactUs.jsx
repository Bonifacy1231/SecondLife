import React from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <div className="ContactUs__form">
        <h2 className="ContactUs__form__title">Skontaktuj się z nami</h2>
        <img
          className="ContactUs__form__decoration"
          src="src\assets\icons\Decoration.svg"
          alt=""
        />
        <div className="ContactUs__form__box">
          <div className="ContactUs__form__box__name form__box__single">
            <label htmlFor="">Wpisz swoje imię</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Wpisz swoje imię..."
            />
          </div>
          <div className="ContactUs__form__box__email form__box__single">
            <label htmlFor="">Wpisz swój email</label>
            <input type="email" placeholder="Wpisz swój email..." />
          </div>
          <div className="ContactUs__form__box__message form__box__single">
            <label htmlFor="">Wpisz swoją wiadomość</label>
            <textarea
              name=""
              id=""
              placeholder="Wpisz swoją wiadomość..."
            ></textarea>
          </div>
        </div>
        <button className="ContactUs__form__button">Wyślij</button>
      </div>
      <div className="ContactUs__icons">
        <img src="src\assets\icons\Facebook.svg" alt="" />
        <img src="src\assets\icons\Instagram.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
