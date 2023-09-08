import { useState, useEffect } from "react";
import CreateForm from "../CreateForm.tsx";
import { data } from "./data/2IM_Fond_1st.js";

export const CalcIM = ({ location }) => {
  const [category, setCategory] = useState(null);
  const [classNumber, setClassNumber] = useState(null);
  const [semester, setSemester] = useState(null);

  useEffect(() => {
    if (location && location.search) {
      const queryString = new URLSearchParams(location.search);
      setCategory(queryString.get("category"));
      setClassNumber(queryString.get("class"));
      setSemester(queryString.get("semester"));
    }
  }, [location]);

  return (
    <section className="calc--section">
      <h1 className="calc--title">{category}</h1>
      <p className="calc--subtitle">
        {classNumber} - {semester}
      </p>
      <form className="calc--form">
        <CreateForm data={data} />
      </form>
    </section>
  );
};
