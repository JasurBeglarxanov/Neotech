import "./aboutpage2.css";
import image2 from "../images/GLASS SHAPES - HIKITAKITO (9) (1).svg";
import { Link } from "react-router-dom";

function AboutPage2() {
  return (
    <div className="content">
      <div className="container">
        <div className="aboutpage2">
          <Link to="/">
            <h1>Наши решения</h1>
          </Link>
          <div className="content-about2">
            <div className="aboutpage2-container">
              <div className="aboutpage2-container-col-left">
                <h3>IT экспертизы</h3>
                <p>
                  Подходит любым компаниям, занимающимся онлайн - продажами.
                  Интеграция самых востребованных и безопасных платежных систем
                  позволит вам вести бизнес без рисков и сбоев.
                </p>
                <li>Экспертиза проектной документации</li>
                <li>
                  Экспертиза архитектуры - структуры, функционала, используемых
                  технологий и т.д.
                </li>
                <li>
                  Функциональная экспертиза - оценка функционала и результатов,
                  относительно ТЗ и проектной документации
                </li>
                <li>Оценка эффективности инвестиций</li>
                <li>Оценка возможных рисков</li>
              </div>
              <div className="aboutpage2-col-right">
                <div className="about2-image-container">
                  <img src={image2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage2;
