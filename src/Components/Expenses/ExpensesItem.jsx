import React from "react";
import DateFormat from "./DateFormat";
import "./ExpensesItem.css";
const ExpensesItem = ({ title, date, amount }) => {
  return (
    <div className="ExpensesItem">
      <DateFormat date={date} />
      <div className="Title">{title}</div>
      <div className="Amount">₱{amount}</div>
    </div>
  );
};

export default ExpensesItem;
