import { NavBar } from "../components/NavBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";

export const Result = () => {
  const location = useLocation();
  const average = location.state.average;
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  useEffect(() => {
    setLoading(true);
    setLoadingText("Calculating...");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  let mention = "";
  if (average >= 10) {
    if (average >= 10 && average < 12) {
      mention = "Mention passable";
    } else if (average >= 12 && average < 14) {
      mention = "Mention assez bien";
    } else if (average >= 14 && average < 16) {
      mention = "Mention bien";
    } else if (average >= 16 && average <= 20) {
      mention = "Mention très bien";
    }
  }

  return (
    <div>
      {loading ? (
        <div className="loader">
          <DotLoader color={"#ffffff"} loading={loading} size={90} />
          <div className="loading-text">{loadingText}</div>
        </div>
      ) : (
        <>
          <NavBar />
          <div className="result--container">
            <h1 className="Result--Title">Result</h1>
            <p className="Result--text">Weighted average: {average}</p>
            {average >= 10 && <p className="Result--mention">{mention}</p>}
          </div>
        </>
      )}
    </div>
  );
};
