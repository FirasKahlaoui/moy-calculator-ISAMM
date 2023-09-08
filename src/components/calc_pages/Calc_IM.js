import { useState, useEffect } from "react";
import CreateForm from "../CreateForm.tsx";

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

  // Define your data object here
  const data = {
    regmix: {
      coef: [0.3, 0.7],
      subjects: [
        { name: "Algebre 2", coef: 1.5, grades: [] },
        // ... other subjects
      ],
    },
    cc: {
      coef: [0.4, 0.4, 0.2],
      subjects: [
        { name: "Eng 2", coef: 1, grades: [] },
        // ... other subjects
      ],
    },
  };

  return (
    <section className="calc--section">
      <h1 className="calc--title">{category}</h1>
      <p className="calc--subtitle">
        {classNumber} - {semester}
      </p>
      <form className="calc--form">
        <CreateForm data={data} /> {/* Use the CreateForm component here */}
      </form>
    </section>
  );
};
