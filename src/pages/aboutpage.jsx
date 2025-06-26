import "./aboutpage.css";
import image1 from "../images/Frame 24 (2).svg";
import image2 from "../images/Frame 26 (1).svg";
import image3 from "../images/Frame 28 (3).svg";
import image4 from "../images/Frame 30 (2).svg";
import image5 from "../images/Frame 32 (2).svg";
import image6 from "../images/Frame 34 (1).svg";
import image7 from "../images/Frame 36 (2).svg";
import image8 from "../images/Frame 38 (2).svg";
import darkmode1 from '../icons-dark-mode/dark-mode1.svg'
import darkmode2 from '../icons-dark-mode/dark-mode2.svg'
import darkmode3 from '../icons-dark-mode/dark-mode3.svg'
import darkmode4 from '../icons-dark-mode/dark-mode4.svg'
import darkmode5 from '../icons-dark-mode/dark-mode5.svg'
import darkmode6 from '../icons-dark-mode/dark-mode6.svg'
import darkmode7 from '../icons-dark-mode/dark-mode7.svg'
import darkmode8 from '../icons-dark-mode/dark-mode8.svg'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function AboutPage() {

  const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      document.body.className = darkMode ? "dark-mode" : "light-mode";
    }, [darkMode]);

  return (
    <div className="content">
      <div className="container">
        <div className="aboutpage">
          <Link to="/">
            <h1>Наши решения</h1>
          </Link>
          <div className="main-aboutpage">
            <div className="aboutpage-container">
              <h3>IT проекты</h3>
              <img src={darkMode ? darkmode1 : image1} alt="" />
              <p>01</p>
            </div>

            <div className="aboutpage-container">
              <h3>IT экспертизы</h3>
              <img src={darkMode ? darkmode2 : image2} alt="" />
              <p>02</p>
            </div>

            <div className="aboutpage-container">
              <h3>Машинное обучение</h3>
              <img src={darkMode ? darkmode3 : image3} alt="" />
              <p>03</p>
            </div>
            <div className="aboutpage-container">
              <h3>Нейросети</h3>
              <img src={darkMode ? darkmode4 : image4} alt="" />
              <p>04</p>
            </div>
          </div>
          <div className="main-aboutpage2">
            <div className="aboutpage-container">
              <h3>Телекоммуникации</h3>
              <img src={darkMode ? darkmode5 : image5} alt="" />
              <p>05</p>
            </div>
            <div className="aboutpage-container">
              <h3>Big Data</h3>
              <img src={darkMode ? darkmode6 : image6} alt="" />
              <p>06</p>
            </div>
            <div className="aboutpage-container">
              <h3>Внедрение технологий</h3>
              <img src={darkMode ? darkmode7 : image7} alt="" />
              <p>07</p>
            </div>
            <div className="aboutpage-container">
              <h3>Кибербезопасность</h3>
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