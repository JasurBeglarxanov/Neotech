import "./aboutpage.css";
import image1 from "../images/Frame 24 (2).svg";
import image2 from "../images/Frame 26 (1).svg";
import image3 from "../images/Frame 28 (3).svg";
import image4 from "../images/Frame 30 (2).svg";
import image5 from "../images/Frame 32 (2).svg";
import image6 from "../images/Frame 34 (1).svg";
import image7 from "../images/Frame 36 (2).svg";
import image8 from "../images/Frame 38 (2).svg";
import darkmode1 from "../icons-dark-mode/darkmode1.svg";
import darkmode2 from "../icons-dark-mode/darkmode2.svg";
import darkmode3 from "../icons-dark-mode/darkmode3.svg";
import darkmode4 from "../icons-dark-mode/darkmode4.svg";
import darkmode5 from "../icons-dark-mode/darkmode5.svg";
import darkmode6 from "../icons-dark-mode/darkmode6.svg";
import darkmode7 from "../icons-dark-mode/darkmode7.svg";
import darkmode8 from "../icons-dark-mode/darkmode8.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="content">
      <div className="container">
        <div className="aboutpage">
          <Link to="/">
            <h1>{t('our_solutions2')}</h1>
          </Link>
          <div className="main-aboutpage">
            <div className="aboutpage-container">
              <h3>{t('it_projects')}</h3>
              <img src={darkMode ? darkmode1 : image1} alt="" />
              <p>01</p>
            </div>

            <div className="aboutpage-container">
              <h3>{t('it_expertise')}</h3>
              <img src={darkMode ? darkmode2 : image2} alt="" />
              <p>02</p>
            </div>

            <div className="aboutpage-container">
              <h3>{t('machine_learning')}</h3>
              <img src={darkMode ? darkmode3 : image3} alt="" />
              <p>03</p>
            </div>
            <div className="aboutpage-container">
              <h3>{t('Neural_networks')}</h3>
              <img src={darkMode ? darkmode4 : image4} alt="" />
              <p>04</p>
            </div>
          </div>
          <div className="main-aboutpage2">
            <div className="aboutpage-container">
              <h3>{t('Telecommunication')}</h3>
              <img src={darkMode ? darkmode5 : image5} alt="" />
              <p>05</p>
            </div>
            <div className="aboutpage-container">
              <h3>{t('Big_Data')}</h3>
              <img src={darkMode ? darkmode6 : image6} alt="" />
              <p>06</p>
            </div>
            <div className="aboutpage-container">
              <h3>{t('Technology_Integration')}</h3>
              <img src={darkMode ? darkmode7 : image7} alt="" />
              <p>07</p>
            </div>
            <div className="aboutpage-container">
              <h3>{t('Cyber_Security')}</h3>
              <img src={darkMode ? darkmode8 : image8} alt="" />
              <p>08</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
