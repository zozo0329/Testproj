import React from "react";
import "./NewExpenses.css";
import Form from "./Form";
const NewExpenses = ({ formDataHandler, setIsActive }) => {
  const dataHandler = (formData) => {
    formDataHandler(formData);
  };
  return (
    <div className="New-Expenses">
      <Form formInputs={dataHandler} setIsActive={setIsActive} />
    </div>
  );
};

export default NewExpenses;
