import React from "react";
import './ExspenseItem.css';

function ExspenseItem() {
    return(
        <div>
            <h4>
                Date: 6/16/22
            </h4>
            <h1 className="expense-item">
                Current Exspenses: $250
            </h1>
        </div>
    );
}

export default ExspenseItem;