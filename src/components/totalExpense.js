import React from 'react';

function TotalExpense({expenses}) {
    const amounts = [] 
    for(let i = 0; i<expenses.length; i++) {
        amounts.push(expenses[i].num);
    }

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const tax = total * 0.0875
    const tip = (total * 0.2) + (tax * .2)
    const final = total * 1.0875 * 1.2
    return (
        <div className="total-expense-container">
            <div className="tip-tax-expense">
                <h6>Tax:</h6>
                <h6>${tax.toFixed(2)}</h6>
            </div>
            <div className="tip-tax-expense">
                <h6>Tip:</h6>
                <h6>${tip.toFixed(2)}</h6>
            </div>
            <div className="total-expense">
                <h4>Total:</h4>
                <h4>${final.toFixed(2)}</h4>
            </div>
        </div>
    )
}

export default TotalExpense;