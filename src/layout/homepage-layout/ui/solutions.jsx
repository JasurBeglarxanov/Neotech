import "./hero.css";
import "./solutions.css";
import icon1 from "../../../images/Frame 24 (2).svg";
import icon2 from "../../../images/Frame 26 (1).svg";
import icon3 from "../../../images/Frame 28 (3).svg";
import icon4 from "../../../images/Frame 30 (2).svg";
import icon5 from "../../../images/Frame 32 (1).svg";
import icon6 from "../../../images/Frame 34 (1).svg";
import icon7 from "../../../images/Frame 36 (1).svg";
import icon8 from "../../../images/Frame 38 (2).svg";
import darkmode1 from "../../../icons-dark-mode/dark-mode1.svg";
import darkmode2 from "../../../icons-dark-mode/dark-mode2.svg";
import darkmode3 from "../../../icons-dark-mode/dark-mode3.svg";
import darkmode4 from "../../../icons-dark-mode/dark-mode4.svg";
import darkmode5 from "../../../icons-dark-mode/dark-mode5.svg";
import darkmode6 from "../../../icons-dark-mode/dark-mode6.svg";
import darkmode7 from "../../../icons-dark-mode/dark-mode7.svg";
import darkmode8 from "../../../icons-dark-mode/dark-mode8.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../../../themeContext";

function Solutions() {
  const {darkMode} = useContext(ThemeContext)
  const { t, i18n } = useTranslation();

  return (
    <div className="main-container-solutions ">
      <h1>{t('our_solutions2')}</h1>
      <div className="solutions-wrapper">
        <div className="solution-container">
          <h3>{t ('it_projects')}</h3>
          <div className="img-wrapper">
            <img src={darkMode ? darkmode1 : icon1} alt="Theme Icon" />
          </div>
          <p>01</p>
        </div>
        <div className="solution-container">
          <h3>{t('it_expertise')}</h3>
          <div className="img-wrapper">
            <img src={darkMode ? darkmode2 : icon2} alt="" />
          </div>
          <p>02</p>
        </div>
        <div className="solution-container">
          <h3>{t('machine_learning')}</h3>
          <div className="img-wrapper">
            <img src={darkMode ? darkmode3 : icon3} alt="Theme Icon" />
          </div>
          <p>03</p>
        </div>
        <div className="solution-container">
          <h3>{t('Neural_networks')}</h3>
          <div className="img-wrapper">
            <img src={darkMode ? darkmode4 : icon4} alt="Theme Icon" />
          </div>
          <p>04</p>
        </div>
        <div className="solution-container">
          <h3>{t('Telecommunication')}</h3>
          <div className="img-wrapper">
            <img src={darkMode ? darkmode5 : icon5} alt="Theme Icon" />
          </div>
          <p>05</p>
        </div>
        <div className="solution-container">
          <h3>Big Data</h3>
          <div className="img-wrapper">
            <img src={darkMode ? darkmode6 : icon6} alt="Theme Icon" />
          </div>
          <p>06</p>
        </div>
        <div className="solution-container">
          <h3>{t('Technology_Integration')}</h3>
          <div className="img-wrapper">
            <img src={darkMode ? darkmode7 : icon7} alt="Theme Icon" />
          </div>
          <p>07</p>
        </div>
        <div className="solution-container">
          <h3>{t('Cyber_Security')}</h3>
          <div className="img-wrapper">
            <img src={darkMode ? darkmode8 : icon8} alt="Theme Icon" />
          </div>
          <p>08</p>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
