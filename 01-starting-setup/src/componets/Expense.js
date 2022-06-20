import React, {useState} from "react";
import './Expense.css';
import Card from './Card.js';
import ExpensesFilter from './newExpense/ExpensesFilter.js'
import ExpenseList from "./newExpense/ExpenseList.js";

function Expense(props) {

  const[filteredYear, setFilteredYear] = useState("2022");

  function filterChangeHandler(selectedYear){
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.bruh.filter(expenses =>{
    return expenses.date.getFullYear().toString() === filteredYear;
  })


    return(
        <Card className="expenses">
          <ExpensesFilter selected = {filteredYear} onFilterChange = {filterChangeHandler}></ExpensesFilter>
          <ExpenseList bruh = {filteredExpenses}></ExpenseList>
      </Card>
    )
}

export default Expense;