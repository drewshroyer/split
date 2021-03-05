import React from 'react';

function UserExpense({expenses, user}) {
    if(expenses === null) return <div>$0.00</div>;
    
    const amounts = [] 
    for(let i = 0; i<expenses.length; i++) {
        let unique = expenses[i].description;
        unique = unique.filter((v,i)=> unique.indexOf(v) === i);
        if(unique.includes(user.text)){
            amounts.push(expenses[i].num / (unique.length));
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