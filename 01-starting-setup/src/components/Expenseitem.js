import  React  from "react";
import "./Expenseitem.css";
    function ExpenseItem(){
        return(
            <div className = "expense-item">
                <h1> 
                Steam Purchase
                </h1>
                <div className ="expense-item__description"> 
                    <p1> May 23, 2022</p1>
                </div>
                <div className="expense-item__price">
                    $29.99
                </div>
            </div>
                
                
            
        );
}
export default  ExpenseItem;