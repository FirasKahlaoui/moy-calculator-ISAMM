import logo from "../assets/img/icons8-math-96.png";
import DarkMode from "./DarkMode/DarkMode";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="nav--container">
      <nav className="nav transparent">
        <img src={logo} alt="logo" className="nav--icon" />
        <h3 className="nav--logo_text">MyISAMMGrade</h3>
        <h4 className="nav--title">ISAMM - Grade Calculator</h4>
        {i18n.language === "fr" && (
          <button
            className="nav--button"
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            EN
          </button>
        )}
        {i18n.language === "en" && (
          <button
            className="nav--button"
            onClick={() => {
              i18n.changeLanguage("fr");
            }}
          >
            FR
          </button>
        )}
        <DarkMode />
      </nav>
    </div>
  );
};
