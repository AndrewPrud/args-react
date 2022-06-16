/* eslint-disable */
import React from "react";
import './ExspenseItem.css';

function ExspenseItem(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const date = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expence-item"> 
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{date}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">
                {props.cost}
            </div>
        </div>
    );
}

export default ExspenseItem;