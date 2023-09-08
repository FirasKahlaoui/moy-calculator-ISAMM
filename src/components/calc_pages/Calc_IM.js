import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CreateForm from "../CreateForm.tsx";

export const CalcIM = () => {
  const [category, setCategory] = useState(null);
  const [classNumber, setClassNumber] = useState(null);
  const [semester, setSemester] = useState(null);
  const [data, setData] = useState(null);

  const location = useLocation(); // Added this line
  console.log(location);

  useEffect(() => {
    if (location && location.search) {
      const queryString = new URLSearchParams(location.search);
      setCategory(queryString.get("category"));
      setClassNumber(queryString.get("class"));
      setSemester(queryString.get("semester"));
      console.log(`category: ${category}`);
      console.log(`classNumber: ${classNumber}`);
      console.log(`semester: ${semester}`);
    }
  }, [location, category, classNumber, semester]);

  useEffect(() => {
    if (category && classNumber && semester) {
      import(`./data/${classNumber}_${category}_${semester}.js`).then(
        (module) => setData(module.data)
      );
    }
  }, [category, classNumber, semester]);

  return (
    <section className="calc--section">
      <h1 className="calc--title">{category}</h1>
      <p className="calc--subtitle">
        {classNumber} {semester}
      </p>
      <form className="calc--form">{data && <CreateForm data={data} />}</form>
    </section>
  );
};
