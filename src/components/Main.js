import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Main = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };
  const optionsMap = {
    0: [],
    1: [
      "1 IM",
      "2 IM Fondamentale",
      "2 IM Gaming",
      "3 IM Fondamentale",
      "3 IM Gaming",
    ],
    2: ["1 Big Data", "2 Big Data", "3 Big Data"],
    3: ["1 CM", "2 CM", "3 CM"],
    4: ["1 MIME", "2 MIME", "3 MIME"],
  };
  return (
    <section className="main" id="home">
      <h1 className="main--mtitle">{t("title")}</h1>
      <p className="main--text">{t("description")}</p>
      <h3 className="main--title">{t("main-title")}</h3>
      <h5 className="main--subtitle">{t("main-subtitle")}</h5>
      <form className="main--form">
        <label className="main--label">{t("main-label-diplome")}</label>
        <select className="main--select" onChange={handleCategoryChange}>
          <option value="0">--</option>
          <option value="1">Licence IM</option>
          <option value="2">Licence BD</option>
          <option value="3">Licence CM</option>
          <option value="4">Licence MIME</option>
        </select>
        <label className="main--label">{t("main-label-class")}</label>
        <select className="main--select" onChange={handleClassChange}>
          {selectedCategory &&
            optionsMap[selectedCategory].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
        </select>
        <label className="main--label">{t("main-label-semester")}</label>
        <select className="main--select">
          {selectedClass && selectedClass.startsWith("3") ? (
            <option value="1">1st Semester</option>
          ) : (
            <>
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
            </>
          )}
        </select>
        <button className="main--button">{t("main-button")}</button>
      </form>
    </section>
  );
};
