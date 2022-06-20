import  React, {useState}  from "react";
import "./Expenseitem.css";
import "./Expensedate.js"
import "./card.js";
import Expensedate from "./Expensedate.js";
import Card from "./card.js";
    function ExpenseItem(props){
        const[title, setTitle] = useState(props.title);

    function clickHandled(){
        setTitle('Update');
    }
        return(
            <Card className = 'expense-item'>
                <Expensedate date = {props.date}></Expensedate>
                <div className ="expense-item__description"> 
                    <h2>{title}</h2>
                </div>
                <div className="expense-item__price">
                    {props.amount}
                </div>
                <button onClick = {clickHandled}>Change Title</button>
            </Card>
                
                
            
        );
}
export default  ExpenseItem;