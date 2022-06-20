import React, {useState} from 'react'; 
//import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import Card from './Card.js';
import ExpensesFilter from './newExpense/ExpensesFilter.js';
import ExpenseList from './newExpense/ExpenseList.js';

function Expenses(props) {
    const[filteredYear, setFilteredYear] = useState("2022");
    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.expense.filter(expenses =>{
        return expenses.date.getFullYear().toString() === filteredYear;
      });
    return (
       <Card className = 'expenses'>
        <ExpensesFilter selected = {filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
        <ExpenseList expense={filteredExpenses}></ExpenseList> 
        </Card>
      
    );
}

export default Expenses;