import React from "react";
import ExspenseItem from './ExspenseItem.js';
import './Expense.css';
import Card from './Card.js';

function Expense(props) {
    return(
        <Card className="expenses">
        <ExspenseItem
          title = {props.expense[0].title}
          cost = {props.expense[0].cost}
          date = {props.expense[0].date}
        ></ExspenseItem>
        <ExspenseItem
          title = {props.expense[1].title}
          cost = {props.expense[1].cost}
          date = {props.expense[1].date}
        ></ExspenseItem>
        <ExspenseItem
          title = {props.expense[2].title}
          cost = {props.expense[2].cost}
          date = {props.expense[2].date}
        ></ExspenseItem>
        <ExspenseItem
          title = {props.expense[3].title}
          cost = {props.expense[3].cost}
          date = {props.expense[3].date}
        ></ExspenseItem>
      </Card>
    );
}

export default Expense;