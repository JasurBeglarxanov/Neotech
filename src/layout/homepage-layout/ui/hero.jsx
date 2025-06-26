import "./hero.css";
import image from "../../../images/hero.svg";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <div className="hero-container">
      <div className="hero-title">
        <h1>
          {t ('team_title')}
        </h1>
        <p>
          {t ('team_subtitle')}
        </p>
      </div>
      <div className="hero-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
