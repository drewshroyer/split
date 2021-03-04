import React from 'react';

function UserExpense({expenses, user}) {
    if(expenses === null) return <div>$0.00</div>;
    
    const onlyUnique = (value, index, expenses) => {
        return expenses.indexOf(value) === index;
    }

    const amounts = [] 
    for(let i = 0; i<expenses.length; i++) {
        if(expenses[i].description.includes(user.text)){
            amounts.push(expenses[i].num / (onlyUnique.length - 1));
        }
    }
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
   
    return (
        <div className="user-expense">
            <div className="total-per-user">${total}</div>
        </div>
    )
}

export default UserExpense;