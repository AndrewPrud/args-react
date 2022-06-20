import React from 'react'; 
import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import Card from './Card.js';
import ExpensesFilter from './newExpense/ExpensesFilter.js';

function Expenses(props) {

    function filterChangeHandler(selectedYear) {
        console.log(selectedYear);
    }
    return (
       <Card className = 'expenses'>
            <ExpensesFilter onFilterChange={filterChangeHandler}></ExpensesFilter>
            <ExpenseItem
                title={props.expense[0].title}
                amount={props.expense[0].amount}
                date={props.expense[0].date}
            ></ExpenseItem><ExpenseItem
                title={props.expense[1].title}
                amount={props.expense[1].amount}
                date={props.expense[1].date}
            ></ExpenseItem><ExpenseItem
                title={props.expense[2].title}
                amount={props.expense[2].amount}
                date={props.expense[2].date}
            ></ExpenseItem><ExpenseItem
                title={props.expense[3].title}
                amount={props.expense[3].amount}
                date={props.expense[3].date}
            ></ExpenseItem>  
        </Card>
      
    );
}

export default Expenses;