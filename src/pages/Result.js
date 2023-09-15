import { NavBar } from "../components/NavBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DotLoader from "react-spinners/DotLoader";

export const Result = () => {
  const location = useLocation();
  const average = location.state.average;
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  useEffect(() => {
    setLoading(true);
    setLoadingText(t("result_loader_text"));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [t]);

  let mention = "";
  if (average >= 10) {
    if (average >= 10 && average < 12) {
      mention = t("mention4");
    } else if (average >= 12 && average < 14) {
      mention = t("mention3");
    } else if (average >= 14 && average < 16) {
      mention = t("mention2");
    } else if (average >= 16 && average <= 20) {
      mention = t("mention1");
    }
  }

  return (
    <div>
      {loading ? (
        <div className="loader">
          <DotLoader
            color="var(--result_loader_color)"
            loading={loading}
            size={90}
          />
          <div className="loading-text">{loadingText}</div>
        </div>
      ) : (
        <>
          <NavBar />
          <div className="result--container">
            <h1 className="Result--Title">{t("result_title")}</h1>
            <p className="Result--text">{average.toFixed(2)}</p>
            {average >= 10 && <p className="Result--mention">{mention}</p>}
          </div>
        </>
      )}
    </div>
  );
};
