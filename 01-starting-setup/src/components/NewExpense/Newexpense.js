import React from 'react';
import './Newexpense.css';
import ExpenseForm from './Expenseform.js'
function NewExpense(){
    return(
        <div className='new-expense'>
            <ExpenseForm></ExpenseForm>
        </div>
    );
}
export default NewExpense;
