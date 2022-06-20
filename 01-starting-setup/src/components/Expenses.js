import React, {useState} from "react";
import ExpenseItem from "./Expenseitem";
import "./Expenses.css";
import "./card.js"
import Card from "./card.js";
import ExpensesFilter from "./NewExpense/Expensesfilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2022");
   function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
   }
    return (
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
      {props.in.map((expensesElement) => (
        <ExpenseItem
          key={expensesElement.id}
          title={expensesElement.title}
          amount={expensesElement.amount}
          date={expensesElement.date}
        ></ExpenseItem>
      ))} 
    </Card>
    );
}

export default Expenses;