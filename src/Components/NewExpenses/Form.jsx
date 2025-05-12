import React, { useState } from "react";
import "./Form.css";
const Form = ({ formInputs, setIsActive }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (formData) => {
    formData.preventDefault();
    const formInfo = {
      title,
      amount,
      date: new Date(date),
      id: Math.random().toString(),
    };
    formInputs(formInfo);
    setIsActive(true);
    // Cleaner
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form className="Form_Hero" onSubmit={submitHandler}>
      <div className="Form">
        <div className="Form-Title">
          <input
            type="text"
            placeholder="Title"
            onChange={titleHandler}
            value={title}
          />
        </div>
        <div className="Form-Amount">
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Amount"
            onChange={amountHandler}
            value={amount}
          />
        </div>
        <div className="Form-Date">
          <input
            type="date"
            min="2019-01,01"
            max="2025-12-31"
            onChange={dateHandler}
            value={date}
          />
        </div>
      </div>
      <div className="form_action">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
