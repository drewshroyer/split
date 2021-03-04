import React from 'react';

function TotalExpense({expenses}) {
    const amounts = [] 
    for(let i = 0; i<expenses.length; i++) {
        amounts.push(expenses[i].num);
    }
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="total-expense">
            <h4>Total:</h4>
            <h4>${total}</h4>
        </div>
    )
}

export default TotalExpense;