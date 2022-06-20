import React, { useState } from 'react';
import './ExpenseItem';
//import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import './Card.js';
import Card from './Card.js';
import ExpensesFilter from './newExpense/ExpensesFilter.js';
import ExpenseList from './newExpense/ExpenseList.js';

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState("2020");
  function filterChangeHandler(selectedYear){
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.in.filter(expenses =>{
    return expenses.date.getFullYear().toString() === filteredYear;
  });

    return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
      <ExpenseList in={filteredExpenses}></ExpenseList>
    </Card>
    );
}

export default Expenses;