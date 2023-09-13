import React from "react";

interface SubjectType {
  name: string;
  coef: number;
  grades: number[];
}

interface CategoryType {
  name: string;
  placeholder: string[];
  coef: number[];
  subjects: SubjectType[];
}

interface FormData {
  [key: string]: string[];
}

interface CreateFormProps {
  data: { [key: string]: CategoryType };
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const CreateForm: React.FC<CreateFormProps> = ({ data, formData, setFormData }) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, id } = event.target;
    const index = id.split("-")[1];
    setFormData((prevFormData) => {
      const updatedGrades = [...(prevFormData[name] || [])];
      updatedGrades[Number(index)] = value;
      return { ...prevFormData, [name]: updatedGrades };
    });
  };

  return (
    <>
      {Object.values(data).map((category) =>
        category.subjects.map((subject) => (
          <div key={subject.name}>
            <label htmlFor={subject.name} className={category.name === "regmix" ? "two-inputs" : "three-inputs"}>
              {subject.name}
            </label>
            {category.coef.map((coef, index) => (
              <input
                type="number"
                min="0"
                max="20"
                step="0.01"
                id={`${subject.name}-${index}`}
                name={subject.name}
                data-index={index}
                value={formData[subject.name]?.[index] || ""}
                onChange={handleInputChange}
                placeholder={category.placeholder[index]}
                key={`${subject.name}-${index}`}
                required={true}
              />
            ))}
          </div>
        ))
      )}
    </>
  );
};

export default CreateForm;
