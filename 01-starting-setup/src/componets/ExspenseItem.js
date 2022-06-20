import React, {useState} from "react";
import './ExspenseItem.css';
// import './ExpenseDate.js';
import ExpenseDate from "./ExpenseDate.js";
import Card from './Card.js'

function ExspenseItem(props) {
    const[title, setTitle] = useState(props.title);

    function clickHandler(){
        setTitle("nerf egiant");
    }

    return (
        <Card className="expence-item">
            <ExpenseDate date={props.date}></ExpenseDate> 
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">{props.cost}</div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )
}

export default ExspenseItem;