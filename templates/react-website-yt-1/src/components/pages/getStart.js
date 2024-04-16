import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
import "./getStart.css"; // Importing additional CSS file for styling

export default function GetStart() {
  const [inputs, setInputs] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigreeFunction: "",
    age: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/predict", { data: Object.values(inputs) })
      .then((response) => {
        alert(response.data.result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="get-start-container">
      <h1 className="get-start-heading">Diabetes Predictor</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label
            htmlFor="pregnancies"
            className={inputs.pregnancies ? "active" : ""}
          >
            Number of Pregnancies:
          </label>
          <input
            id="pregnancies"
            type="text"
            name="pregnancies"
            value={inputs.pregnancies}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="glucose" className={inputs.glucose ? "active" : ""}>
            Glucose Level:
          </label>
          <input
            id="glucose"
            type="text"
            name="glucose"
            value={inputs.glucose}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label
            htmlFor="bloodPressure"
            className={inputs.bloodPressure ? "active" : ""}
          >
            Blood Pressure:
          </label>
          <input
            id="bloodPressure"
            type="text"
            name="bloodPressure"
            value={inputs.bloodPressure}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label
            htmlFor="skinThickness"
            className={inputs.skinThickness ? "active" : ""}
          >
            Skin Thickness:
          </label>
          <input
            id="skinThickness"
            type="text"
            name="skinThickness"
            value={inputs.skinThickness}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="insulin" className={inputs.insulin ? "active" : ""}>
            Insulin Level:
          </label>
          <input
            id="insulin"
            type="text"
            name="insulin"
            value={inputs.insulin}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="bmi" className={inputs.bmi ? "active" : ""}>
            BMI:
          </label>
          <input
            id="bmi"
            type="text"
            name="bmi"
            value={inputs.bmi}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label
            htmlFor="diabetesPedigreeFunction"
            className={inputs.diabetesPedigreeFunction ? "active" : ""}
          >
            Diabetes Pedigree Function:
          </label>
          <input
            id="diabetesPedigreeFunction"
            type="text"
            name="diabetesPedigreeFunction"
            value={inputs.diabetesPedigreeFunction}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="age" className={inputs.age ? "active" : ""}>
            Age:
          </label>
          <input
            id="age"
            type="text"
            name="age"
            value={inputs.age}
            onChange={handleInputChange}
          />
        </div>

        <center>
          <button buttonStyle="btnn" buttonSize="btn--medium">
            SUBMIT
          </button>
        </center>
      </form>
    </div>
  );
}
