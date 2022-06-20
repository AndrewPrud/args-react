import React from "react";
import ExpenseItem from "../ExpenseItem.js";

function ExpenseList(props) {
    if (props.in.length === 0) {
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }
    return (
      <ul className="expense-list">
        {props.in.map((expensesElement) => (
          <ExpenseItem
            key={expensesElement.id}
            title={expensesElement.title}
            amount={expensesElement.amount}
            date={expensesElement.date}
         ></ExpenseItem>
       ))}
      </ul>
    );
  }

  export default ExpenseList;
  