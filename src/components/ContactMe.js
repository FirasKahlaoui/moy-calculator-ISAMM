import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon5 from "../assets/img/github-mark.svg";
import { useTranslation } from "react-i18next";
import navIcon6 from "../assets/img/website-ui-svgrepo-com.svg";

export const ContactMe = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <h3 className="footer--title">{t("contact_me_title")}</h3>
      <p className="footer--text">{t("contact_me_text")}</p>
      <div className="social-icon">
        <a href="https://ifiras.pages.dev/" target="blank">
          <img src={navIcon6} alt="Icon" title="iFiras" />
        </a>
        <a
          href="https://www.linkedin.com/in/firas-kahlaoui-b0a031253/"
          target="blank"
        >
          <img src={navIcon1} alt="Icon" title="LinkedIn" />
        </a>
        <a href="https://github.com/FirasKahlaoui" target="blank">
          <img src={navIcon5} alt="Icon" title="GitHub" />
        </a>
      </div>
      <p></p>
    </footer>
  );
};
