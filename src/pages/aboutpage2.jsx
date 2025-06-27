import "./aboutpage2.css";
import image2 from "../images/GLASS SHAPES - HIKITAKITO (9) (1).svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AboutPage2() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <div className="container">
        <div className="aboutpage2">
          <Link to="/">
            <h1>{t("our_solutions2")}</h1>
          </Link>
          <div className="content-about2">
            <div className="aboutpage2-container">
              <div className="aboutpage2-container-col-left">
                <h3>{t('it_expertise')}</h3>
                <p>
                  {t('suitable')}
                </p>
                <li>{t('expertise_document')}</li>
                <li>
                  {t('expertise_architecture')}
                </li>
                <li>
                  {t('project_documentation')}
                </li>
                <li>{t('Investment Efficiency')}</li>
                <li>{t('Risk Assessment')}</li>
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
