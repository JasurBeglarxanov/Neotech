import "./text-us.css";
import image from "../../../images/GLASS SHAPES - HIKITAKITO (14) (1).svg";
import { useTranslation } from "react-i18next";

function TextUs() {
  const { t, i18n } = useTranslation();

  return (
    <div className="contact-us-main-container">
      <div className="contact-us-container">
        <div className="col-left" id="contact">
          <h3>{t('Contact Us')}</h3>
          <label htmlFor="name" className="contact-label">
            <input type="text" id="name" placeholder={t('Your name')} />
          </label>
          <label htmlFor="email" className="contact-label">
            <input type="text" id="email" placeholder={t('Your email')} />
          </label>
          <label htmlFor="message" className={t('Your message')}>
            <textarea
              name="textarea"
              id="message"
              placeholder="Ваше сообщение"
            ></textarea>
          </label>
          <button>{t('Send')}</button>
        </div>
        <div className="col-right">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TextUs;
