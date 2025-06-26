import "./advantages.css";
import adv1 from "../../../icons/adv1.svg";
import adv2 from "../../../icons/adv2.svg";
import adv3 from "../../../icons/adv3.svg";
import adv4 from "../../../icons/adv4.svg";
import darkmode13 from "../../../icons-dark-mode/darkmode13.svg";
import darkmode14 from "../../../icons-dark-mode/darkmode14.svg";
import darkmode15 from "../../../icons-dark-mode/darkmode15.svg";
import darkmode16 from "../../../icons-dark-mode/darkmode16.svg";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../../../themeContext";

function Advantages() {
  const {darkMode} = useContext(ThemeContext)
  const { t, i18n } = useTranslation();

  return (
    <div className="advantages">
      <h4>{t('Why choose us?')}</h4>
      <div className="advantages-main-container">
        <div className="advantages-container">
          <div className="image-wrapper">
            <img src={darkMode ? darkmode13 : adv1} alt="" />
          </div>
          <h6>{t('Professionalism')}</h6>
        </div>
        <div className="advantages-container">
          <div className="image-wrapper">
            <img src={darkMode ? darkmode14 : adv2} alt="" />
          </div>
          <h6>{t('Perfectionism')}</h6>
        </div>
        <div className="advantages-container">
          <div className="image-wrapper">
            <img src={darkMode ? darkmode15 : adv3} alt="" />
          </div>
          <h6>{t('Creativity')}</h6>
        </div>
        <div className="advantages-container">
          <div className="image-wrapper">
            <img src={darkMode ? darkmode16 : adv4} alt="" />
          </div>
          <h6>{t('Responsibility')}</h6>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
