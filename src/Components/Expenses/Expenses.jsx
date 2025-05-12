import React from "react";
import ExpensesItem from "./ExpensesItem";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = ({ expenses, isActive }) => {
  return (
    <Card>
      <div className="Expenses">
        {isActive &&
          expenses.map((expense) => {
            return (
              <ExpensesItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
              />
            );
          })}
      </div>
      <div className="message">
        {!isActive && <h1>No Expenses this time.</h1>}
      </div>
    </Card>
  );
};

export default Expenses;
