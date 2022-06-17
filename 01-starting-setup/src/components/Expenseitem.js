import  React  from "react";
import "./Expenseitem.css";
import "./Expensedate.js"
import "./card.js";
import Expensedate from "./Expensedate.js";
import Card from "./card.js";
    function ExpenseItem(props){
 
        return(
            <Card className = 'expense-item'>
                <Expensedate date = {props.date}></Expensedate>
                <div className ="expense-item__description"> 
                    <h2>{props.title}</h2>
                </div>
                <div className="expense-item__price">
                    {props.amount}
                </div>
            </Card>
                
                
            
        );
}
export default  ExpenseItem;