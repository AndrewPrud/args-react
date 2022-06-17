import React from "react";
import './ExspenseItem.css';
import ExspenceDate from "./ExpenseDate";
import Card from './Card.js'

function ExspenseItem(props) {

    return (
        <Card className="expence-item">
            <ExspenceDate date={props.date}></ExspenceDate> 
            <div className="expense-item__description">
                <h2>{props?.title}</h2>
            </div>
            <div className="expense-item__price">
            {props?.cost}
            </div>
        </Card>
    );
}

export default ExspenseItem;