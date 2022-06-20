import React from "react"
import ExspenseItem from "../ExspenseItem"

function ExpenseList(props) {
    if (props.bruh.length === 0) {
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }
    return (
      <ul className="expense-list">
        {props.bruh.map((expensesElement) => (
          <ExspenseItem
            key={expensesElement.id}
            title={expensesElement.title}
            cost={expensesElement.cost}
            date={expensesElement.date}
         ></ExspenseItem>
       ))}
      </ul>
    );
  }

  export default ExpenseList;