import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t, i18n } = useTranslation();
  return (
    <main className="banner">
      <h2 className="banner--subtitle">Semester Calculator</h2>
      <p className="banner--text">{t("description")}</p>
      <h3 className="banner--title">Let's Get Started</h3>
      <h6 className="banner--subtitle">Good Luck</h6>
      <form className="banner--form">
        <select className="banner--select">
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
        </select>
        <select className="banner--select">
          <option value="1">1st Semester</option>
          <option value="2">2nd Semester</option>
        </select>
      </form>
    </main>
  );
};
