import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js'
function NewExpense(props){
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
         };
         props.onAddExpense(expenseData);
         console.log(expenseData);
    function stopEditingHandler() {
        setIsEditing(false);
        } 
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString(),
          };
            props.onAddExpense(expenseData);
            setIsEditing(false);
          }
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
        </div> 
        {isEditing===true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    );
}
export default NewExpense;
