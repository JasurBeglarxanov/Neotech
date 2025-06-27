import "./we-create.css";
import icon1 from "../../../icons/icon1.svg";
import icon2 from "../../../icons/icon2.svg";
import icon3 from "../../../icons/icon3.svg";
import icon4 from "../../../icons/icon4.svg";
import darkmode9 from "../../../icons-dark-mode/darkmode9.svg";
import darkmode10 from "../../../icons-dark-mode/darkmode10.svg";
import darkmode11 from "../../../icons-dark-mode/darkmode11.svg";
import darkmode12 from "../../../icons-dark-mode/darkmode12.svg";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../themeContext";

function WeCreate() {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const titlesTop = ["Web - site", "Apps", "СRM", "Telergam"];
  const titlesBottom = [
    "Desktop and mobile versions",
    "IOS и aNDROID",
    "Customer Relationship",
    "telegram channel and bot",
  ];
  const lightIcons = [icon1, icon2, icon3, icon4];
  const darkIcons = [darkmode9, darkmode10, darkmode11, darkmode12];
  const hoveredIcons = [darkmode9, darkmode10, darkmode11, darkmode12];

  return (
    <div className="main-container-create">
      <div className="title-container">
        <h3>{t("what_we_do")}</h3>
      </div>
      <div className="create-title">
        <div className="info-col-left">
          <h4>{t("strong_software_eco")}</h4>
        </div>
        <div className="info-col-right">
          <p>{t("B2B_B2C")}</p>
        </div>
      </div>

      <div className="we-create-group">
        <div className="we-create">
          {titlesTop.map((item, index) => (
            <div
              key={index}
              className={`we-create-container ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h5>{t(item)}</h5>
            </div>
          ))}
        </div>

        <div className="we-create2">
          {titlesBottom.map((item, index) => (
            <div
              key={index}
              className={`we-create2-container ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h6>{t(item)}</h6>
              <img
                src={
                  hoveredIndex === index
                    ? darkIcons[index] 
                    : darkMode
                    ? darkIcons[index] 
                    : lightIcons[index] 
                }
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeCreate;
