import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreateForm from "../CreateForm.tsx";
import { useTranslation } from "react-i18next";
import { calculateAverage } from "../Formula.tsx";

export const CalcIM = () => {
  const [category, setCategory] = useState(null);
  const [classNumber, setClassNumber] = useState(null);
  const [semester, setSemester] = useState(null);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({});
  const [average, setAverage] = useState(null);
  console.log("average", average);
  const {t} = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

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
    const averageCalculation = calculateAverage(formDataWithWeights);
    setAverage(averageCalculation);
    console.log("Weighted average:", averageCalculation);
    navigate("/result", { state: { average: averageCalculation } });
  };

  return (
    <section className="calc--section">
      <h1 className="calc--title">
        {classNumber} - {semester} {t("semester")}
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
          value={t("data_submit_button")}
          className="data--submit-button"
        />
      </form>
    </section>
  );
};
