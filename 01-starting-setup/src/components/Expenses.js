import React, {useState} from "react";
// import ExpenseItem from "./Expenseitem";
import "./Expenses.css";
import "./card.js"
import Card from "./card.js";
import ExpensesFilter from "./NewExpense/Expensesfilter";
import ExpenseList from "./Expenselist";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2022");
   function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
   }
   const filteredExpenses = props.in.filter(expenses =>{
    return expenses.date.getFullYear().toString() === filteredYear;
  });

    return (
    <Card className="expenses">
     
      <ExpensesFilter selected = {filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
      <ExpenseList in ={filteredExpenses}></ExpenseList>

    </Card>
    );
}

export default Expenses;