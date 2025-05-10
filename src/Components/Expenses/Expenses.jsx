import React from "react";
import ExpensesItem from "./ExpensesItem";

const Expenses = ({ dummyItems }) => {
  return (
    <div className="Expenses">
      <ExpensesItem
        title={dummyItems[0].title}
        date={dummyItems[0].date}
        amount={dummyItems[0].amount}
      />
      <ExpensesItem
        title={dummyItems[1].title}
        date={dummyItems[1].date}
        amount={dummyItems[1].amount}
      />
      <ExpensesItem
        title={dummyItems[2].title}
        date={dummyItems[2].date}
        amount={dummyItems[2].amount}
      />
    </div>
  );
};

export default Expenses;
