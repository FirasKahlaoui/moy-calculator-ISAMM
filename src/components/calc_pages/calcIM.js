import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export const CalcIM = ({ location }) => {
  const { t, i18n } = useTranslation();
  const [category, setCategory] = useState(null);
  const [classNumber, setClassNumber] = useState(null);
  const [semester, setSemester] = useState(null);

  useEffect(() => {
    if (location && location.search) {
      // Extract the query string from the location prop
      const queryString = new URLSearchParams(location.search);
      // Use the query string to set the selected values
      setCategory(queryString.get("category"));
      setClassNumber(queryString.get("class"));
      setSemester(queryString.get("semester"));
    }
  }, [location]);

  return (
    <div>
      <h1>{category}</h1>
      <p>
        {classNumber} - {semester}
      </p>
      {/* Rest of the component code */}
    </div>
  );
};
