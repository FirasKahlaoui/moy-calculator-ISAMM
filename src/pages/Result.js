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
          <h1>Result</h1>
          <p>Weighted average: {average}</p>
        </>
      )}
    </div>
  );
};
