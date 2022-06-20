/* eslint-disable */
import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCost, setEnteredCost] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function costChangeHandler(event) {
    setEnteredCost(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler() {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      cost: +enteredCost,
      date: new Date(enteredDate)
    }
    props.onSaveExpanseData(expenseData);
      setEnteredTitle(" ");
      setEnteredCost(" ");
      setEnteredDate(" ");
  }
    
    return(
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Cost</label>
          <input type="number" min="0.01" step="0.01" value={enteredCost} onChange={costChangeHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
      </div>
    </form>
    )
}

export default ExpenseForm;
