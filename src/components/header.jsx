import "./header.css";
import logo from "../images/header-logo.svg";
import darklogo from "../icons/darklogo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={darkMode ? darklogo : logo} alt="" />
          <h1>Neotech</h1>
        </div>
        <div className="license-container">
          <p> {t("rights_reserved")}</p>
        </div>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="circle-container"
        >
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="circle-container-1"
          ></div>
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="circle-container-2"
          ></div>
        </div>
        <div className="language-container">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="language-container-en"
          >
            En
          </button>
          <button
            onClick={() => i18n.changeLanguage("ru")}
            className="language-container-ru"
          >
            Ru
          </button>
        </div>
      </div>
      <div className="header-container-2">
        <div className="header-links">
          <div className="text-container">
            <Link to="/about">
              <p> {t("our_solutions")}</p>
            </Link>
          </div>
          <div className="text-container">
            <Link to="/about2">
              <p>{t("we_create")}</p>
            </Link>
          </div>
          <div className="text-container">
            <p>{t("payment_systems")}</p>
          </div>
          <div className="text-container">
            <p>{t("advantages")}</p>
          </div>
        </div>
        <div className="text-us-container btn">
          <a href="#contact">{t("contact_us")}</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
