import React from "react";
import './ExspenseItem.css';
import './ExpenseDate.js';
import ExspenceDate from "./ExpenseDate";

function ExspenseItem(props) {

    return (
        <div className="expence-item">
            <ExspenceDate date={props.date}></ExspenceDate> 
            <div className="expense-item__description">
                <h2>{props?.title}</h2>
            </div>
            <div className="expense-item__price">
                {props?.cost}
            </div>
        </div>
    );
}

export default ExspenseItem;