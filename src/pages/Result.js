import { NavBar } from "../components/NavBar";
import { useLocation } from "react-router-dom";

export const Result = () => {
  const location = useLocation();
  const average = location.state.average;

  return (
    <div>
      <NavBar />
      <h1>Result</h1>
      <p>Weighted average: {average}</p>
    </div>
  );
};
