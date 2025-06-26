import "./footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t, i18n } = useTranslation();
  
  return (
    <footer>
      <h4>
        {t('Addres')} <br />
        {t('Phone')}
      </h4>
    </footer>
  );
}

export default Footer;
