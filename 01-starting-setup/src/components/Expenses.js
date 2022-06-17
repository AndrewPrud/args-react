import React from "react";
import ExpenseItem from "./Expenseitem";
import "./Expenses.css";
import "./card.js"
import Card from "./card.js";

function Expenses(props) {
   
    return (
    <Card className="expenses">
<ExpenseItem
        title = {props.in[0].title}
        date = {props.in[0].date}
        amount = {props.in[0].amount}
        ></ExpenseItem>
      <ExpenseItem
        title = {props.in[1].title}
        date = {props.in[1].date}
        amount = {props.in[1].amount}
        > </ExpenseItem>
      <ExpenseItem 
        title = {props.in[2].title}
        date = {props.in[2].date}
        amount = {props.in[2].amount}
        ></ExpenseItem>
      <ExpenseItem 
        title = {props.in[3].title}
        date = {props.in[3].date}
        amount = {props.in[3].amount}
        ></ExpenseItem>
    </Card>
    );
}

export default Expenses;