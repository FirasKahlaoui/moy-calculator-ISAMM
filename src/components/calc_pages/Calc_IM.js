import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CreateForm from "../CreateForm.tsx";
import { calculateAverage } from "../Formula.tsx";

export const CalcIM = () => {
  const [category, setCategory] = useState(null);
  const [classNumber, setClassNumber] = useState(null);
  const [semester, setSemester] = useState(null);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({});

  const location = useLocation();

  useEffect(() => {
    if (location && location.search) {
      const queryString = new URLSearchParams(location.search);
      setCategory(queryString.get("category"));
      setClassNumber(queryString.get("class"));
      setSemester(queryString.get("semester"));
    }
  }, [location, category, classNumber, semester]);

  useEffect(() => {
    if (category && classNumber && semester) {
      import(`./data/${classNumber}_${category}_${semester}.js`).then(
        (module) => setData(module.data)
      );
    }
  }, [category, classNumber, semester]);

  const handleInputChange = (event) => {
    const { name, value, id } = event.target;
    const index = id.split("-")[1];
    console.log(`name: ${name}, value: ${value}, index: ${index}`);
    setFormData((prevFormData) => {
      const updatedGrades = [...(prevFormData[name] || [])];
      updatedGrades[Number(index)] = value;
      return { ...prevFormData, [name]: updatedGrades };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataWithWeights = {};
    for (let subject in formData) {
      let weight = subject.match(/\(([^)]+)\)/);
      if (weight) {
        weight = parseFloat(weight[1]);
        if (isNaN(weight)) {
          weight = 1;
        }
      } else {
        weight = 1;
      }
      formDataWithWeights[subject] = [weight, ...formData[subject]];
    }
    console.log(formDataWithWeights);
    const average = calculateAverage(formDataWithWeights);
    console.log("Weighted average:", average);
  };

  return (
    <section className="calc--section">
      <h1 className="calc--title">
        {classNumber} - {semester} Semester
      </h1>
      <form className="calc--form" onSubmit={handleSubmit}>
        {data && (
          <CreateForm
            data={data}
            formData={formData}
            setFormData={setFormData}
            onInputChange={handleInputChange}
          />
        )}
        <input
          type="submit"
          value="Calculate"
          className="data--submit-button"
        />
      </form>
    </section>
  );
};
