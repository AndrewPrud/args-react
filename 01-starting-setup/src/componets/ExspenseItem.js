/* eslint-disable */
import React from "react";
import './ExspenseItem.css';

function ExspenseItem() {

    const expence = {

    }

    const expenceDate = new Date(2022, 6, 16); // dynamic
    const expenceTitle = "Clash Royale Pass";
    const expenceAmount = 5;


    return (
        <>
        <div className="expence-item">
            {expenceDate.toISOString()}
        </div>
        <div className="expense-item__description">
                <h2>{expenceTitle}</h2>
        </div>
        <div>
            <h1 className="expense-item__price">
                {"$" + expenceAmount}
            </h1>
        </div>
        </>
    );
}

export default ExspenseItem;