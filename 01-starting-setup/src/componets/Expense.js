import React from "react";
import ExspenseItem from './ExspenseItem.js';
import './Expense.css';
import Card from './Card.js';

function Expense(props) {
    return(
        <Card className="expenses">
          <ExspenseItem
            title = {props.bruh[0].title}
            cost = {props.bruh[0].cost}
            date = {props.bruh[0].date}
          ></ExspenseItem>
          <ExspenseItem
            title = {props.bruh[1].title}
            cost = {props.bruh[1].cost}
            date = {props.bruh[1].date}
          ></ExspenseItem>
          <ExspenseItem
            title = {props.bruh[2].title}
            cost = {props.bruh[2].cost}
            date = {props.bruh[2].date}
          ></ExspenseItem>
          <ExspenseItem
            title = {props.bruh[3].title}
            cost = {props.bruh[3].cost}
            date = {props.bruh[3].date}
          ></ExspenseItem>
      </Card>
    )
}

export default Expense;