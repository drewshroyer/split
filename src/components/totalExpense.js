import React from 'react';

export const Balance = (expenses) => {
 
    const amounts = expenses.map(expense => expense.num);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>{total}</h4>
        </div>
    )
}